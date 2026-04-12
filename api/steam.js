export default async function handler(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET");

    const STEAM_API_KEY = process.env.STEAM_API_KEY;
    const STEAM_ID = process.env.STEAM_ID;

    if (!STEAM_API_KEY || !STEAM_ID) {
        return res.status(500).json({ error: "Missing environment variables" });
    }

    // 从查询参数读取 count，默认 10，最大 50
    const count = Math.min(parseInt(req.query.count ?? "50", 10) || 50, 50);

    try {
        const url = `https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=${STEAM_API_KEY}&steamid=${STEAM_ID}&include_appinfo=true&include_played_free_games=true`;

        const response = await fetch(url);
        const data = await response.json();

        if (!data.response?.games) {
            return res.status(200).json([]);
        }

        const topGames = data.response.games
            .filter((g) => g.playtime_forever > 0)
            .sort((a, b) => b.playtime_forever - a.playtime_forever)
            .slice(0, count);

        // 带超时的单个标签请求，用 Steam Spy API 拿更丰富的 tags
        const fetchTags = async (appid) => {
            try {
                const controller = new AbortController();
                const timer = setTimeout(() => controller.abort(), 3000);
                const res = await fetch(
                    `https://steamspy.com/api.php?request=appdetails&appid=${appid}`,
                    { signal: controller.signal }
                );
                clearTimeout(timer);
                const data = await res.json();
                // tags 是一个对象 { "tagName": voteCount, ... }，按票数排序取前 8 个
                const tags = Object.entries(data?.tags ?? {})
                    .sort((a, b) => b[1] - a[1])
                    .slice(0, 8)
                    .map(([tag]) => tag);
                return tags;
            } catch {
                return [];
            }
        };

        // 分批并发：每批 10 个，避免同时发 50 个请求被 Steam 限流
        const BATCH_SIZE = 10;
        const tagMap = {};
        for (let i = 0; i < topGames.length; i += BATCH_SIZE) {
            const batch = topGames.slice(i, i + BATCH_SIZE);
            const results = await Promise.all(batch.map((g) => fetchTags(g.appid)));
            batch.forEach((g, idx) => {
                tagMap[g.appid] = results[idx];
            });
        }

        const gamesWithTags = topGames.map((g) => {
            const hours = Math.round(g.playtime_forever / 60);
            return {
                appId: String(g.appid),
                name: g.name,
                playtimeHours: hours,
                playtime: hours >= 100 ? `${hours}+ hours` : `${hours} hours`,
                imageUrl: `https://cdn.akamai.steamstatic.com/steam/apps/${g.appid}/header.jpg`,
                storeUrl: `https://store.steampowered.com/app/${g.appid}/`,
                tags: tagMap[g.appid] ?? [],
            };
        });

        res.status(200).json(gamesWithTags);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch Steam data" });
    }
}