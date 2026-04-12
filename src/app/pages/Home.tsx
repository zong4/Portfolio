import React from "react";
import { Link } from "react-router";
import { Mail, Globe } from "lucide-react";
import { GameCard } from "../components/GameCard";
import { motion, AnimatePresence } from "motion/react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { MouseParticles } from "../components/MouseParticles";
import avatarImage from "../../imports/Head.JPG";
import whoAreYouImage from "../../imports/l0etK1.png";
import pengWinImage from "../../imports/l5p9vP.png";
import action1000Image from "../../imports/mfv121.png";
import rollingRollingImage from "../../imports/Weixin_Image_2026-04-06_153702_169.png";
import aboveTheRiftPdf from "../../imports/AboveTheRift-设计文档.pdf?url";
import aboveTheRiftImage from "../../imports/AboveTheRift.png";
import aboveTheRiftDocImage from "../../imports/11.png";
import mixlineImage from "../../imports/Split.jpg";
import minecraftEngineImage from "../../imports/Editor.png";
import { BilibiliCard } from "../components/BilibiliCard";
import { SteamGames } from "../components/SteamGames";

/**
 * ═══════════════════════════════════════════════════════════
 * CUSTOMIZE CATEGORIES HERE - Easy to Modify!
 * ═══════════════════════════════════════════════════════════
 *
 * Currently using 3 categories (including "All"):
 * - All: Shows all projects
 * - Games: Game projects
 * - Design Documents: Design documentation projects
 *
 * TO CHANGE CATEGORIES:
 * 1. Modify the array below (keep "All" as first item)
 * 2. Update each project's "category" property to match
 * 3. That's it!
 */

const CATEGORIES = ["All", "Games", "Design Documents", "Other"];
const GROUP_CATEGORIES = ["All", "Games", "Other"];

/**
 * ═══════════════════════════════════════════════════════════
 * PROJECT DATA - Assign each project to a category
 * ═══════════════════════════════════════════════════════════
 */
const games = [
  {
    id: "mixline-design-doc",
    title: "MixLine - Design Document",
    role: "Game Designer",
    description:
      "A gameplay-driven co-op puzzle game where one player controls only arms, the other only legs.",
    imageUrl: mixlineImage,
    tags: ["Platformer", "Puzzle", "Co-op"],
    year: "2026",
    accentColor: "#EC4899", // Pink - vibrant, creative
    category: ["Design Documents"], // ← Assign category here
    externalLink:
      "https://cat-store-144.notion.site/Mix-Line-33ff3ed9856080b8bdc6d130be13904f",
  },
  {
    id: "above-the-rift-game",
    title: "Above the Rift",
    role: "Solo Developer",
    description:
      "A Zelda-like action-adventure game featuring parkour mechanics, exploration, and puzzle-solving in a fantasy world.",
    imageUrl: aboveTheRiftImage,
    tags: ["Action-Adventure", "Zelda-like", "Puzzle"],
    year: "2026",
    accentColor: "#8B5CF6", // Purple - fantasy, mystical
    category: ["Games"], // ← Assign category here
    engine: "UE",
    externalLink: "https://www.youtube.com/watch?v=L9uo3Lr_29M",
  },
  {
    id: "above-the-rift-design-doc",
    title: "Above the Rift - Design Document",
    role: "Game Designer",
    description:
      "A comprehensive design document for Above the Rift, detailing game mechanics, systems, and narrative design.",
    imageUrl: aboveTheRiftDocImage,
    tags: ["Action-Adventure", "Zelda-like", "Puzzle"],
    year: "2026",
    accentColor: "#6366F1", // Indigo - professional, documentation
    category: ["Design Documents"], // ← Assign category here
    externalLink: "https://docs.qq.com/doc/DUndqT2JzQ21EeW1G",
  },
  {
    id: "rolling-rolling",
    title: "Rolling Rolling",
    role: "Solo Developer",
    description:
      "A party game with local and online multiplayer support for chaotic fun with friends.",
    imageUrl: rollingRollingImage,
    tags: ["Party", "Multiplayer", "Online"],
    year: "2026",
    accentColor: "#F59E0B", // Amber/Orange - fun, energetic
    category: ["Games"], // ← Assign category here
    engine: "Unity",
    externalLink: "https://zzoonng.itch.io/rolling-rolling",
  },
  {
    id: "minecraft-engine",
    title: "Minecraft Engine",
    role: "Solo Developer",
    description:
      "A custom game engine inspired by Minecraft's block-based world generation.",
    imageUrl: minecraftEngineImage,
    tags: ["Game Engine", "Rendering", "Physics"],
    year: "2025",
    accentColor: "#3B82F6", // Amber/Orange - fun, energetic
    category: ["Other"], // ← Assign category here
    externalLink: "https://github.com/zong4/MinecraftEngine",
  },
  {
    id: "1000-action",
    title: "1000, Action!",
    role: "Gameplay Designer & Lead Programmer",
    description:
      "An award-winning puzzle game. Winner of Best Game Design and Most Innovative at Global Game Jam 2026.",
    imageUrl: action1000Image,
    tags: ["Puzzle", "2D", "Indie"],
    year: "Jan 2026",
    accentColor: "#F59E0B", // Amber - energetic, creative
    category: ["Games", "Game Jam"], // ← Assign category here
    engine: "Unity",
    externalLink:
      "https://www.bilibili.com/video/BV1PaFTzyEj1/",
  },
  {
    id: "peng-win",
    title: "Peng-Win!",
    role: "Lead Programmer & Technology Artist",
    description:
      "A puzzle game created during a game jam featuring a penguin navigating icy platforms.",
    imageUrl: pengWinImage,
    tags: ["Puzzle", "Sokoban", "3D"],
    year: "Dec 2025",
    accentColor: "#3B82F6", // Blue - ice, winter theme
    category: ["Games", "Game Jam"], // ← Assign category here
    engine: "Unity",
    externalLink:
      "https://www.bilibili.com/video/BV16PqWBtErL/",
  },
  {
    id: "who-are-you",
    title: "Who Are You?",
    role: "Lead Programmer & Technology Artist",
    description:
      "A horror game created during a game jam featuring custom shaders and atmospheric gameplay.",
    imageUrl: whoAreYouImage,
    tags: ["Psychological Horror", "3D", "Visual Novel"],
    year: "Oct 2025",
    accentColor: "#1E293B", // Dark blue-grey - horror atmosphere
    category: ["Games", "Game Jam"], // ← Assign category here
    engine: "Unity",
    externalLink:
      "https://www.bilibili.com/video/BV1p6WUzXES6/",
  },
];

export function Home() {
  const [selectedFilter, setSelectedFilter] =
    React.useState<string>("Games");
  const [selectedGroupFilter, setSelectedGroupFilter] =
    React.useState<string>("All");

  // Filter games by category (supports multiple categories per game)
  const filteredGames =
    selectedFilter === "All"
      ? games
      : games.filter((game) =>
        game.category.includes(selectedFilter),
      );

  const filteredGroupGames = games.filter((game) => {
    if (!game.category.includes("Game Jam")) return false;
    if (selectedGroupFilter === "All") return true;
    return game.category.includes(selectedGroupFilter);
  });

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Navbar />

      {/* Gradient Background */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 dark:from-slate-950 dark:via-gray-950 dark:to-zinc-950" />

      {/* Mouse-Following Particles */}
      <MouseParticles />

      {/* Minimalist Grid Pattern Background */}
      <div
        className="fixed inset-0 -z-10 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(148, 163, 184, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148, 163, 184, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          animation: "gridMove 20s linear infinite",
        }}
      />

      {/* Floating Dots - Minimalist Decoration */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-slate-400/20"
          style={{
            animation: "float1 15s ease-in-out infinite",
          }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-1.5 h-1.5 rounded-full bg-slate-400/15"
          style={{
            animation: "float2 18s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-1/3 left-1/3 w-1 h-1 rounded-full bg-slate-400/20"
          style={{
            animation: "float3 20s ease-in-out infinite",
          }}
        />
        <div
          className="absolute top-2/3 right-1/3 w-1.5 h-1.5 rounded-full bg-slate-400/15"
          style={{
            animation: "float1 22s ease-in-out infinite",
          }}
        />
      </div>

      {/* Pulsing Circles */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/5 right-1/5 w-32 h-32 rounded-full border border-slate-300/10"
          style={{
            animation: "pulse1 6s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-1/4 left-1/5 w-40 h-40 rounded-full border border-slate-300/8"
          style={{
            animation: "pulse2 8s ease-in-out infinite",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-24 h-24 rounded-full border border-slate-300/12"
          style={{
            animation: "pulse3 7s ease-in-out infinite",
          }}
        />
      </div>

      <style>{`
        @keyframes gridMove {
          0% {
            background-position: 0 0, 0 0;
          }
          100% {
            background-position: 60px 60px, 60px 60px;
          }
        }

        @keyframes float1 {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(20px, -30px);
          }
        }

        @keyframes float2 {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-25px, 35px);
          }
        }

        @keyframes float3 {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(30px, 20px);
          }
        }

        @keyframes pulse1 {
          0%, 100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.1;
          }
        }

        @keyframes pulse2 {
          0%, 100% {
            transform: scale(1);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.3);
            opacity: 0.05;
          }
        }

        @keyframes pulse3 {
          0%, 100% {
            transform: scale(1) rotate(0deg);
            opacity: 0.25;
          }
          50% {
            transform: scale(1.25) rotate(180deg);
            opacity: 0.08;
          }
        }
      `}</style>

      {/* Animated gradient orbs for depth - Minimalist */}
      <motion.div
        className="fixed -top-20 -right-20 w-[800px] h-[800px] rounded-full blur-[100px] -z-10"
        style={{
          background:
            "radial-gradient(circle, rgba(100, 116, 139, 0.15) 0%, rgba(100, 116, 139, 0.08) 40%, transparent 70%)",
          opacity: 0.6,
        }}
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 80, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="fixed -bottom-20 -left-20 w-[700px] h-[700px] rounded-full blur-[100px] -z-10"
        style={{
          background:
            "radial-gradient(circle, rgba(71, 85, 105, 0.15) 0%, rgba(71, 85, 105, 0.08) 40%, transparent 70%)",
          opacity: 0.6,
        }}
        animate={{
          scale: [1.3, 1, 1.3],
          x: [0, -50, 0],
          y: [0, -80, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Additional center orb for more depth */}
      <motion.div
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] -z-10"
        style={{
          background:
            "radial-gradient(circle, rgba(148, 163, 184, 0.12) 0%, transparent 60%)",
          opacity: 0.5,
        }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Animated Light Beams */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 left-1/4 w-0.5 h-full bg-gradient-to-b from-transparent via-slate-300/20 to-transparent"
          style={{
            animation: "beam1 8s ease-in-out infinite",
          }}
        />
        <div
          className="absolute top-0 right-1/3 w-0.5 h-full bg-gradient-to-b from-transparent via-slate-300/15 to-transparent"
          style={{
            animation: "beam2 10s ease-in-out infinite",
            animationDelay: "2s",
          }}
        />
        <div
          className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-transparent via-slate-300/10 to-transparent"
          style={{
            animation: "beam3 12s ease-in-out infinite",
            animationDelay: "4s",
          }}
        />
      </div>

      <style>{`
        @keyframes beam1 {
          0%, 100% {
            transform: translateY(-100%);
            opacity: 0;
          }
          50% {
            transform: translateY(100%);
            opacity: 1;
          }
        }

        @keyframes beam2 {
          0%, 100% {
            transform: translateY(100%);
            opacity: 0;
          }
          50% {
            transform: translateY(-100%);
            opacity: 1;
          }
        }

        @keyframes beam3 {
          0%, 100% {
            transform: translateY(-100%);
            opacity: 0;
          }
          50% {
            transform: translateY(100%);
            opacity: 1;
          }
        }
      `}</style>

      {/* Hero / Profile Section */}
      <section
        id="about"
        className="relative py-12 px-4 overflow-hidden pt-32"
      >
        {/* Subtle fade effect for seamless transition */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-transparent pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <div className="w-24 h-24 rounded-full mx-auto mb-6 overflow-hidden ring-4 ring-primary/20 shadow-xl">
              <img
                src={avatarImage}
                alt="Zong"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="mb-3">Zong</h1>
            <p className="text-xl text-primary mb-4">
              Game Designer & Programmer
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            First, I am a player. Then, I am a developer. And above all, a gameplay researcher.
          </motion.p>

          {/* Contact Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-3"
          >
            <a
              href="mailto:zzoonng@163.com"
              className="flex items-center gap-2 px-5 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity text-sm"
            >
              <Mail className="w-4 h-4" />
              Email
            </a>
            <a
              href="https://space.bilibili.com/54413027"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 bg-secondary text-secondary-foreground rounded-lg hover:opacity-90 transition-opacity text-sm"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56H5.333c-1.51-.036-2.769-.556-3.773-1.56S.036 18.858 0 17.347v-7.36c.036-1.511.556-2.765 1.56-3.76 1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 0 1-.373-.906c0-.356.124-.658.373-.907l.027-.027c.267-.249.573-.373.92-.373.347 0 .653.124.92.373L9.653 4.44c.071.071.134.142.187.213h4.267a.836.836 0 0 1 .16-.213l2.853-2.747c.267-.249.573-.373.92-.373.347 0 .662.151.929.4.267.249.391.551.391.907 0 .355-.124.657-.373.906zM5.333 7.24c-.746.018-1.373.276-1.88.773-.506.498-.769 1.13-.786 1.894v7.52c.017.764.28 1.395.786 1.893.507.498 1.134.756 1.88.773h13.334c.746-.017 1.373-.275 1.88-.773.506-.498.769-1.129.786-1.893v-7.52c-.017-.765-.28-1.396-.786-1.894-.507-.497-1.134-.755-1.88-.773zM8 11.107c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c0-.373.129-.689.386-.947.258-.257.574-.386.947-.386zm8 0c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.249-.249.56-.373.933-.373Z" />
              </svg>
              Bilibili
            </a>
            <a
              href="https://zong4.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 bg-secondary text-secondary-foreground rounded-lg hover:opacity-90 transition-opacity text-sm"
            >
              <Globe className="w-4 h-4" />
              Blog
            </a>
            <a
              href="https://steamcommunity.com/id/zzoonng/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 bg-secondary text-secondary-foreground rounded-lg hover:opacity-90 transition-opacity text-sm"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.606 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.455 1.012zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.663 0-3.015 1.353-3.015 3.015 0 1.663 1.352 3.015 3.015 3.015 1.663 0 3.015-1.352 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.252 0-2.265-1.014-2.265-2.265z" />
              </svg>
              Steam
            </a>
          </motion.div>
        </div>
      </section>

      {/* Experience & Education */}
      <section
        id="experience"
        className="py-10 px-4 relative pt-16"
      >
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-transparent pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-12 text-center">
              Experience & Education
            </h2>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative pl-8 pb-8 border-l-2 border-primary/30"
              >
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary" />

                <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-border/50 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-xl font-semibold text-foreground">
                      University of Gothenburg
                    </h3>
                    <span className="text-sm text-muted-foreground mt-1 md:mt-0">
                      Sep 2025 - Jun 2027
                    </span>
                  </div>

                  <p className="text-primary font-medium mb-4">
                    Master's in Game Design and Technology
                  </p>

                  <div className="text-muted-foreground">
                    <p className="mb-2 font-medium text-foreground text-sm">
                      Key Courses:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-1 text-sm">
                      <div>• Introduction to Game Research</div>
                      <div>• Gameplay Design</div>
                      <div>• Game Engine Architecture</div>
                      <div>• Computer Graphics</div>
                      <div>• Advanced Computer Graphics</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Games Grid */}
      <section
        id="projects"
        className="py-10 px-4 relative pt-16"
      >
        {/* Smooth transition overlays */}
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
            <h2 className="mb-2 text-center">
              Personal Projects
            </h2>
            <p className="text-muted-foreground mb-10 text-center">
              Independent projects I've developed as a solo
              developer
            </p>

            {/* Filter Buttons - Prominent Design */}
            <div className="flex flex-col items-center gap-6 mb-8">
              <div className="flex flex-wrap gap-4 justify-center">
                {CATEGORIES.map((category) => {
                  const personalGames = games.filter(
                    (g) => !g.category.includes("Game Jam"),
                  );
                  const count =
                    category === "All"
                      ? personalGames.length
                      : personalGames.filter((g) =>
                        g.category.includes(category),
                      ).length;

                  return (
                    <motion.button
                      key={category}
                      onClick={() =>
                        setSelectedFilter(category)
                      }
                      className="px-8 py-3.5 rounded-xl transition-all duration-300 relative overflow-hidden group font-semibold"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        backgroundColor:
                          selectedFilter === category
                            ? "rgba(51, 65, 85, 0.95)"
                            : "rgba(255, 255, 255, 0.7)",
                        border:
                          selectedFilter === category
                            ? "2px solid rgba(51, 65, 85, 1)"
                            : "2px solid rgba(203, 213, 225, 0.5)",
                        color:
                          selectedFilter === category
                            ? "#ffffff"
                            : "#475569",
                        backdropFilter: "blur(16px)",
                        boxShadow:
                          selectedFilter === category
                            ? "0 4px 16px rgba(51, 65, 85, 0.25)"
                            : "0 2px 8px rgba(0, 0, 0, 0.05)",
                      }}
                    >
                      {/* Glow effect on hover */}
                      <motion.div
                        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          background:
                            selectedFilter === category
                              ? "linear-gradient(135deg, rgba(71, 85, 105, 0.2) 0%, rgba(51, 65, 85, 0.2) 100%)"
                              : "linear-gradient(135deg, rgba(148, 163, 184, 0.1) 0%, rgba(100, 116, 139, 0.1) 100%)",
                        }}
                      />

                      <span className="relative z-10 flex items-center gap-2">
                        {category}
                        <span
                          className="px-2 py-0.5 rounded-full text-xs"
                          style={{
                            backgroundColor:
                              selectedFilter === category
                                ? "rgba(255, 255, 255, 0.25)"
                                : "rgba(100, 116, 139, 0.15)",
                          }}
                        >
                          {count}
                        </span>
                      </span>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Projects Grid with Animation */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredGames
                .filter(
                  (game) => !game.category.includes("Game Jam"),
                )
                .map((game, index) => (
                  <motion.div
                    key={game.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.05,
                      layout: { duration: 0.3 },
                    }}
                  >
                    {game.externalLink ? (
                      <GameCard {...game} />
                    ) : (
                      <Link
                        to={`/game/${game.id}`}
                        className="block"
                      >
                        <GameCard {...game} />
                      </Link>
                    )}
                  </motion.div>
                ))}
            </AnimatePresence>
          </motion.div>

          {/* No results message */}
          {filteredGames.filter(
            (game) => !game.category.includes("Game Jam"),
          ).length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-16"
              >
                <p className="text-muted-foreground text-lg">
                  No personal projects found in this category
                </p>
              </motion.div>
            )}
        </div>
      </section>

      {/* Group Projects (Game Jam) */}
      <section className="py-10 px-4 relative">
        {/* Smooth transition overlays */}
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
            <h2 className="mb-2 text-center">Group Projects</h2>
            <p className="text-muted-foreground text-center">
              Game jam collaborations and team-based projects
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-4 justify-center mt-6">
              {GROUP_CATEGORIES.map((category) => {
                const count =
                  category === "All"
                    ? games.filter((g) => g.category.includes("Game Jam")).length
                    : games.filter((g) => g.category.includes("Game Jam") && g.category.includes(category)).length;

                return (
                  <motion.button
                    key={category}
                    onClick={() => setSelectedGroupFilter(category)}
                    className="px-8 py-3.5 rounded-xl transition-all duration-300 relative overflow-hidden group font-semibold"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      backgroundColor:
                        selectedGroupFilter === category
                          ? "rgba(51, 65, 85, 0.95)"
                          : "rgba(255, 255, 255, 0.7)",
                      border:
                        selectedGroupFilter === category
                          ? "2px solid rgba(51, 65, 85, 1)"
                          : "2px solid rgba(203, 213, 225, 0.5)",
                      color:
                        selectedGroupFilter === category
                          ? "#ffffff"
                          : "#475569",
                      backdropFilter: "blur(16px)",
                      boxShadow:
                        selectedGroupFilter === category
                          ? "0 4px 16px rgba(51, 65, 85, 0.25)"
                          : "0 2px 8px rgba(0, 0, 0, 0.05)",
                    }}
                  >
                    <motion.div
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background:
                          selectedGroupFilter === category
                            ? "linear-gradient(135deg, rgba(71, 85, 105, 0.2) 0%, rgba(51, 65, 85, 0.2) 100%)"
                            : "linear-gradient(135deg, rgba(148, 163, 184, 0.1) 0%, rgba(100, 116, 139, 0.1) 100%)",
                      }}
                    />
                    <span className="relative z-10 flex items-center gap-2">
                      {category}
                      <span
                        className="px-2 py-0.5 rounded-full text-xs"
                        style={{
                          backgroundColor:
                            selectedGroupFilter === category
                              ? "rgba(255, 255, 255, 0.25)"
                              : "rgba(100, 116, 139, 0.15)",
                        }}
                      >
                        {count}
                      </span>
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          {/* Group Projects Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredGroupGames
                .map((game, index) => (
                  <motion.div
                    key={game.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.05,
                      layout: { duration: 0.3 },
                    }}
                  >
                    {game.externalLink ? (
                      <GameCard {...game} />
                    ) : (
                      <Link
                        to={`/game/${game.id}`}
                        className="block"
                      >
                        <GameCard {...game} />
                      </Link>
                    )}
                  </motion.div>
                ))}
            </AnimatePresence>
          </motion.div>

          {/* No results message for group projects */}
          {filteredGroupGames.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <p className="text-muted-foreground text-lg">
                No group projects available
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Bilibili Card Section */}
      <BilibiliCard
        profileUrl="https://space.bilibili.com/54413027"
        username="Zong"
        bio="Game Designer & Programmer"
        followers="Follow on Bilibili"
      />

      {/* Steam Games Section */}
      <SteamGames profileUrl="https://steamcommunity.com/id/zzoonng/" />

      <Footer />
    </div>
  );
}