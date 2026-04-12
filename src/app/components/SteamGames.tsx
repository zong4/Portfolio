import React from "react";
import { motion } from "motion/react";
import { WifiOff } from "lucide-react";

interface SteamGame {
  appId: string;
  name: string;
  playtime: string;
  playtimeHours: number;
  imageUrl: string;
  storeUrl: string;
}

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

const STEAM_API_URL = "https://project-ofjel.vercel.app/api/steam";

// 12列 × 8行的 mosaic 布局定义
// col/row 从1开始，colSpan/rowSpan 为跨越的格数
// gameIndex 对应游戏数组下标（按游戏时长从大到小排序后的顺序）
const MOSAIC_LAYOUT = [
  // 第一行：大块主角 + 两个中块
  { col: 1, row: 1, colSpan: 5, rowSpan: 4, gameIndex: 0 }, // 最多时长 → 最大
  { col: 6, row: 1, colSpan: 3, rowSpan: 2, gameIndex: 2 },
  { col: 9, row: 1, colSpan: 4, rowSpan: 3, gameIndex: 1 },
  // 中间填充
  { col: 6, row: 3, colSpan: 3, rowSpan: 2, gameIndex: 4 },
  { col: 9, row: 4, colSpan: 2, rowSpan: 2, gameIndex: 3 },
  { col: 11, row: 4, colSpan: 2, rowSpan: 2, gameIndex: 5 },
  // 下半部分
  { col: 1, row: 5, colSpan: 3, rowSpan: 4, gameIndex: 2 },
  { col: 4, row: 5, colSpan: 2, rowSpan: 2, gameIndex: 5 },
  { col: 6, row: 5, colSpan: 3, rowSpan: 3, gameIndex: 0 },
  { col: 9, row: 6, colSpan: 4, rowSpan: 3, gameIndex: 1 },
  { col: 4, row: 7, colSpan: 2, rowSpan: 2, gameIndex: 3 },
  { col: 6, row: 8, colSpan: 3, rowSpan: 1, gameIndex: 4 },
];

interface SteamGamesProps {
  profileUrl?: string;
}

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
        setGames(FALLBACK_GAMES);
        setUsingFallback(true);
      } finally {
        setLoading(false);
      }
    };
    fetchGames();
  }, []);

  // 按游戏时长从大到小排序，让时长最长的游戏占据最大格子
  const sortedGames = React.useMemo(
    () => [...games].sort((a, b) => b.playtimeHours - a.playtimeHours),
    [games]
  );

  return (
    <section id="gaming" className="py-10 px-4 relative overflow-hidden">
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

        {/* Loading */}
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

        {/* Mosaic Photo Wall */}
        {!loading && sortedGames.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(12, 1fr)",
              gridTemplateRows: "repeat(8, 52px)",
              gap: "4px",
              width: "100%",
            }}
          >
            {MOSAIC_LAYOUT.map((cell, idx) => {
              const game = sortedGames[cell.gameIndex % sortedGames.length];
              if (!game) return null;
              return (
                <MosaicCell
                  key={idx}
                  game={game}
                  col={cell.col}
                  row={cell.row}
                  colSpan={cell.colSpan}
                  rowSpan={cell.rowSpan}
                  animDelay={idx * 0.05}
                />
              );
            })}
          </motion.div>
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

// ── 单个 Mosaic 格子 ──────────────────────────────────────────

interface MosaicCellProps {
  game: SteamGame;
  col: number;
  row: number;
  colSpan: number;
  rowSpan: number;
  animDelay: number;
}

function MosaicCell({ game, col, row, colSpan, rowSpan, animDelay }: MosaicCellProps) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <motion.a
      href={game.storeUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: animDelay }}
      style={{
        gridColumn: `${col} / span ${colSpan}`,
        gridRow: `${row} / span ${rowSpan}`,
        position: "relative",
        overflow: "hidden",
        display: "block",
        cursor: "pointer",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* 游戏封面图 */}
      <img
        src={game.imageUrl}
        alt={game.name}
        loading="lazy"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          transition: "transform 0.4s ease",
          transform: hovered ? "scale(1.07)" : "scale(1)",
        }}
      />

      {/* Hover 遮罩 */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.55)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "4px",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s ease",
          padding: "8px",
        }}
      >
        <p
          style={{
            color: "#fff",
            fontSize: colSpan >= 4 ? "13px" : "11px",
            fontWeight: 500,
            textAlign: "center",
            lineHeight: 1.3,
            margin: 0,
          }}
        >
          {game.name}
        </p>
        <p
          style={{
            color: "rgba(255,255,255,0.7)",
            fontSize: "11px",
            margin: 0,
          }}
        >
          {game.playtime}
        </p>
      </div>
    </motion.a>
  );
}