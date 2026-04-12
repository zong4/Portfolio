export default async function handler(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET");

    const STEAM_API_KEY = process.env.STEAM_API_KEY;
    const STEAM_ID = process.env.STEAM_ID; // 在 Vercel 环境变量里设置

    if (!STEAM_API_KEY || !STEAM_ID) {
        return res.status(500).json({ error: "Missing environment variables" });
    }

    try {
        const url = `https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=${STEAM_API_KEY}&steamid=${STEAM_ID}&include_appinfo=true&include_played_free_games=true`;

        const response = await fetch(url);
        const data = await response.json();

        if (!data.response?.games) {
            return res.status(200).json([]);
        }

        const games = data.response.games
            .filter((g) => g.playtime_forever > 0)
            .sort((a, b) => b.playtime_forever - a.playtime_forever)
            .slice(0, 10)
            .map((g) => ({
                appId: String(g.appid),
                name: g.name,
                playtimeHours: Math.round(g.playtime_forever / 60),
                playtime:
                    Math.round(g.playtime_forever / 60) >= 100
                        ? `${Math.round(g.playtime_forever / 60)}+ hours`
                        : `${Math.round(g.playtime_forever / 60)} hours`,
                imageUrl: `https://cdn.akamai.steamstatic.com/steam/apps/${g.appid}/header.jpg`,
                storeUrl: `https://store.steampowered.com/app/${g.appid}/`,
            }));

        res.status(200).json(games);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch Steam data" });
    }
}