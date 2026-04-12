import React from "react";
import { motion } from "motion/react";
import { Clock, ExternalLink } from "lucide-react";
import Masonry from "react-responsive-masonry";

interface SteamGame {
  appId: string;
  name: string;
  playtime: string;
  playtimeHours: number; // For size calculation
  imageUrl: string;
  storeUrl: string;
}

const STEAM_GAMES: SteamGame[] = [
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

interface SteamGamesProps {
  profileUrl?: string;
}

// Calculate size multiplier based on playtime
const getSizeMultiplier = (playtimeHours: number): number => {
  if (playtimeHours >= 180) return 1.5;
  if (playtimeHours >= 120) return 1.3;
  if (playtimeHours >= 80) return 1.1;
  return 1.0;
};

export function SteamGames({ profileUrl = "https://steamcommunity.com/id/zzoonng/" }: SteamGamesProps) {
  return (
    <section id="gaming" className="py-10 px-4 relative overflow-hidden">
      {/* Smooth transition overlays */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-transparent via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
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
                <path d="M12 2a10 10 0 0 0-10 10 10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2zm0 1a9 9 0 0 1 9 9 9 9 0 0 1-9 9 9 9 0 0 1-9-9 9 9 0 0 1 9-9zm-1.666 3.334v5.332L7.5 13.5l-.834.834 3.334 3.332h.666l6.834-6.832-.834-.834-2.832 2.834V5.334h-3.5z" />
              </svg>
              Steam
            </a>
          </div>
          <p className="text-muted-foreground text-center">
            My favorite games - size reflects hours played
          </p>
        </motion.div>

        {/* Photo Wall / Masonry Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Masonry columnsCount={3} gutter="16px">
            {STEAM_GAMES.map((game, index) => {
              const sizeMultiplier = getSizeMultiplier(game.playtimeHours);

              return (
                <motion.div
                  key={game.appId}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <a
                    href={game.storeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                    style={{
                      transform: `scale(1)`,
                    }}
                  >
                    {/* Game Image */}
                    <div
                      className="relative overflow-hidden bg-slate-900"
                      style={{
                        height: `${200 * sizeMultiplier}px`,
                      }}
                    >
                      <img
                        src={game.imageUrl}
                        alt={game.name}
                        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-125 group-hover:brightness-110"
                        loading="lazy"
                      />

                      {/* Dark Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                      {/* Hover Overlay with Info */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 backdrop-blur-sm">
                        <Clock className="w-10 h-10 text-white mb-3" />
                        <p className="text-white text-2xl font-bold">
                          {game.playtime}
                        </p>
                        <p className="text-slate-300 text-sm mt-1">
                          {game.name}
                        </p>
                        <ExternalLink className="w-5 h-5 text-slate-400 mt-3" />
                      </div>

                      {/* Game Title (Always Visible) */}
                      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/90 to-transparent">
                        <h3 className="text-white font-semibold text-sm group-hover:text-[#66c0f4] transition-colors line-clamp-2">
                          {game.name}
                        </h3>
                      </div>
                    </div>
                  </a>
                </motion.div>
              );
            })}
          </Masonry>
        </motion.div>

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
              <path d="M12 2a10 10 0 0 0-10 10 10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2zm0 1a9 9 0 0 1 9 9 9 9 0 0 1-9 9 9 9 0 0 1-9-9 9 9 0 0 1 9-9zm-1.666 3.334v5.332L7.5 13.5l-.834.834 3.334 3.332h.666l6.834-6.832-.834-.834-2.832 2.834V5.334h-3.5z" />
            </svg>
            View Full Steam Library
          </a>
        </motion.div>
      </div>
    </section>
  );
}
