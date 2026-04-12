import React from "react";
import { motion } from "motion/react";
import { Clock, ExternalLink, WifiOff } from "lucide-react";

interface SteamGame {
  appId: string;
  name: string;
  playtime: string;
  playtimeHours: number;
  imageUrl: string;
  storeUrl: string;
}

// 获取不到数据时的预设数据
const FALLBACK_GAMES: SteamGame[] = [
  {
    appId: "2358720",
    name: "Black Myth: Wukong",
    playtime: "100+ hours",
    playtimeHours: 100,
    imageUrl: "https://cdn.akamai.steamstatic.com/steam/apps/2358720/header.jpg",
    storeUrl: "https://store.steampowered.com/app/2358720/",
  },
  {
    appId: "2138330",
    name: "Elden Ring",
    playtime: "200+ hours",
    playtimeHours: 200,
    imageUrl: "https://cdn.akamai.steamstatic.com/steam/apps/2138330/header.jpg",
    storeUrl: "https://store.steampowered.com/app/2138330/",
  },
  {
    appId: "646570",
    name: "Slay the Spire",
    playtime: "150+ hours",
    playtimeHours: 150,
    imageUrl: "https://cdn.akamai.steamstatic.com/steam/apps/646570/header.jpg",
    storeUrl: "https://store.steampowered.com/app/646570/",
  },
  {
    appId: "1517290",
    name: "Battlefield 2042",
    playtime: "80+ hours",
    playtimeHours: 80,
    imageUrl: "https://cdn.akamai.steamstatic.com/steam/apps/1517290/header.jpg",
    storeUrl: "https://store.steampowered.com/app/1517290/",
  },
  {
    appId: "1174180",
    name: "Red Dead Redemption 2",
    playtime: "120+ hours",
    playtimeHours: 120,
    imageUrl: "https://cdn.akamai.steamstatic.com/steam/apps/1174180/header.jpg",
    storeUrl: "https://store.steampowered.com/app/1174180/",
  },
  {
    appId: "1086940",
    name: "Baldur's Gate 3",
    playtime: "90+ hours",
    playtimeHours: 90,
    imageUrl: "https://cdn.akamai.steamstatic.com/steam/apps/1086940/header.jpg",
    storeUrl: "https://store.steampowered.com/app/1086940/",
  },
];

// Vercel API 地址，部署后替换成你的地址
const STEAM_API_URL = "https://project-ofjel.vercel.app/api/steam";

interface SteamGamesProps {
  profileUrl?: string;
}

const getCardStyle = (index: number) => {
  const rotations = [-3.5, 2.1, -1.8, 3.2, -2.7, 1.5, -0.8, 2.9, -3.1, 1.2];
  const offsetsX = [4, -6, 8, -3, 5, -7, 2, -5, 6, -4];
  const offsetsY = [-5, 3, -2, 6, -4, 2, -6, 4, -3, 5];

  return {
    rotate: rotations[index % rotations.length],
    tx: offsetsX[index % offsetsX.length],
    ty: offsetsY[index % offsetsY.length],
  };
};

const getSizeMultiplier = (playtimeHours: number): number => {
  if (playtimeHours >= 180) return 1.4;
  if (playtimeHours >= 120) return 1.2;
  if (playtimeHours >= 80) return 1.05;
  return 1.0;
};

export function SteamGames({ profileUrl = "https://steamcommunity.com/id/zzoonng/" }: SteamGamesProps) {
  const [games, setGames] = React.useState<SteamGame[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [usingFallback, setUsingFallback] = React.useState(false);

  React.useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch(STEAM_API_URL);
        if (!response.ok) throw new Error("API error");

        const data: SteamGame[] = await response.json();

        if (!data || data.length === 0) throw new Error("No data");

        setGames(data);
        setUsingFallback(false);
      } catch {
        // 获取失败，使用预设数据
        setGames(FALLBACK_GAMES);
        setUsingFallback(true);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  return (
    <section id="gaming" className="py-10 px-4 relative overflow-hidden pt-16">
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-transparent via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <h2>Gaming Gallery</h2>
            <a
              href={profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.606 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.455 1.012zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.663 0-3.015 1.353-3.015 3.015 0 1.663 1.352 3.015 3.015 3.015 1.663 0 3.015-1.352 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.252 0-2.265-1.014-2.265-2.265z" />
              </svg>
              Steam Profile
            </a>
          </div>
          <p className="text-muted-foreground text-center">
            Games that inspire my design philosophy
          </p>
        </motion.div>

        {/* Loading 状态 */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="flex gap-3">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-3 h-3 rounded-full bg-muted-foreground/30 animate-bounce"
                  style={{ animationDelay: `${i * 0.15}s` }}
                />
              ))}
            </div>
          </div>
        )}

        {/* Photo Wall */}
        {!loading && (
          <div className="flex flex-wrap justify-center gap-6 py-8">
            {games.map((game, index) => {
              const { rotate, tx, ty } = getCardStyle(index);
              const sizeMultiplier = getSizeMultiplier(game.playtimeHours);
              const cardWidth = Math.round(200 * sizeMultiplier);
              const cardHeight = Math.round(130 * sizeMultiplier);

              return (
                <motion.div
                  key={game.appId}
                  initial={{ opacity: 0, scale: 0.8, rotate: rotate * 2 }}
                  whileInView={{ opacity: 1, scale: 1, rotate }}
                  whileHover={{
                    scale: 1.08,
                    rotate: 0,
                    zIndex: 20,
                    transition: { duration: 0.2 },
                  }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  style={{
                    transform: `translate(${tx}px, ${ty}px) rotate(${rotate}deg)`,
                    zIndex: index % 3 === 0 ? 10 : index % 3 === 1 ? 5 : 1,
                    width: cardWidth,
                  }}
                  className="relative cursor-pointer"
                >
                  <a
                    href={game.storeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                    style={{ width: cardWidth }}
                  >
                    <div
                      className="bg-white dark:bg-slate-800 rounded-sm"
                      style={{
                        padding: "8px 8px 32px 8px",
                        boxShadow: "0 4px 20px rgba(0,0,0,0.3), 0 1px 3px rgba(0,0,0,0.2)",
                      }}
                    >
                      <div
                        className="overflow-hidden bg-slate-900 relative"
                        style={{ width: "100%", height: cardHeight }}
                      >
                        <img
                          src={game.imageUrl}
                          alt={game.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100">
                          <Clock className="w-6 h-6 text-white mb-1" />
                          <p className="text-white text-sm font-bold">{game.playtime}</p>
                          <ExternalLink className="w-4 h-4 text-slate-300 mt-2" />
                        </div>
                      </div>
                      <div className="pt-2 pb-1 text-center">
                        <p className="text-slate-700 dark:text-slate-300 text-xs font-medium leading-tight line-clamp-1">
                          {game.name}
                        </p>
                        <p className="text-slate-400 dark:text-slate-500 text-xs mt-0.5">
                          {game.playtime}
                        </p>
                      </div>
                    </div>
                  </a>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Steam Profile Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-700 hover:to-slate-800 text-white rounded-lg transition-all duration-300 border border-slate-700 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.606 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.455 1.012zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.663 0-3.015 1.353-3.015 3.015 0 1.663 1.352 3.015 3.015 3.015 1.663 0 3.015-1.352 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.252 0-2.265-1.014-2.265-2.265z" />
            </svg>
            View Full Steam Library
          </a>
        </motion.div>
      </div>
    </section>
  );
}