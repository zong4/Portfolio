import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Play, Heart, Eye, Users, Loader2 } from "lucide-react";

// ✅ 只需填 bvid，其他数据自动获取
const VIDEO_BVIDS = [
  "BV1ndbhz7E3M",
  "BV1BHpjzQEC8",
  "BV1J3WTzaEYb",
];

// 你的 Vercel 代理 API 地址
// 本地开发时自动用 /api/bilibili（Vite 需配置 proxy，见下方说明）
// 生产环境部署到 Vercel 后自动可用
const API_BASE = "https://project-ofjel.vercel.app/api/bilibili";

interface VideoData {
  bvid: string;
  title: string;
  cover: string;
  views: string;
  likes: string;
  duration: string;
}

interface BilibiliCardProps {
  profileUrl?: string;
  username?: string;
  bio?: string;
  followers?: string;
  totalViews?: string;
  totalLikes?: string;
}

const BilibiliIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56H5.333c-1.51-.036-2.769-.556-3.773-1.56S.036 18.858 0 17.347v-7.36c.036-1.511.556-2.765 1.56-3.76 1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 0 1-.373-.906c0-.356.124-.658.373-.907l.027-.027c.267-.249.573-.373.92-.373.347 0 .653.124.92.373L9.653 4.44c.071.071.134.142.187.213h4.267a.836.836 0 0 1 .16-.213l2.853-2.747c.267-.249.573-.373.92-.373.347 0 .662.151.929.4.267.249.391.551.391.907 0 .355-.124.657-.373.906zM5.333 7.24c-.746.018-1.373.276-1.88.773-.506.498-.769 1.13-.786 1.894v7.52c.017.764.28 1.395.786 1.893.507.498 1.134.756 1.88.773h13.334c.746-.017 1.373-.275 1.88-.773.506-.498.769-1.129.786-1.893v-7.52c-.017-.765-.28-1.396-.786-1.894-.507-.497-1.134-.755-1.88-.773zM8 11.107c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c0-.373.129-.689.386-.947.258-.257.574-.386.947-.386zm8 0c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.249-.249.56-.373.933-.373Z" />
  </svg>
);

// 视频卡片骨架屏
function VideoSkeleton() {
  return (
    <div className="rounded-xl overflow-hidden border border-slate-700/50 bg-slate-900 animate-pulse">
      <div className="aspect-video bg-slate-800" />
      <div className="p-3 space-y-2">
        <div className="h-3 bg-slate-700 rounded w-full" />
        <div className="h-3 bg-slate-700 rounded w-3/4" />
        <div className="flex gap-3">
          <div className="h-3 bg-slate-700 rounded w-12" />
          <div className="h-3 bg-slate-700 rounded w-12" />
        </div>
      </div>
    </div>
  );
}

export function BilibiliCard({
  profileUrl = "https://space.bilibili.com/54413027",
  username = "Zong",
  bio = "Game Designer & Programmer",
  followers = "Follow me on Bilibili",
  totalViews = "",
  totalLikes = "",
}: BilibiliCardProps) {
  const [videos, setVideos] = useState<(VideoData | null)[]>(
    VIDEO_BVIDS.map(() => null)
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function fetchAll() {
      setLoading(true);

      // 并发请求所有视频
      const results = await Promise.all(
        VIDEO_BVIDS.map(async (bvid, i) => {
          try {
            const res = await fetch(`${API_BASE}?bvid=${bvid}`);
            if (!res.ok) throw new Error("fetch failed");
            return (await res.json()) as VideoData;
          } catch {
            // 请求失败时返回占位数据
            return {
              bvid,
              title: "加载失败，请刷新重试",
              cover: "",
              views: "--",
              likes: "--",
              duration: "--:--",
            } as VideoData;
          }
        })
      );

      if (!cancelled) {
        setVideos(results);
        setLoading(false);
      }
    }

    fetchAll();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="research" className="py-10 px-4 relative pt-16">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-center mb-2">Research</h2>
          <p className="text-muted-foreground text-center">
            Follow my game development journey
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <a
              href={profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#00a1d6] to-[#00b5e5] p-[2px] hover:shadow-2xl hover:shadow-[#00a1d6]/30 transition-all duration-300"
            >
              <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl overflow-hidden">
                <div className="relative p-6">
                  <div className="flex items-center gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00a1d6] to-[#00b5e5] p-1 group-hover:scale-110 transition-transform duration-300">
                        <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                          <BilibiliIcon className="w-8 h-8 text-[#00a1d6]" />
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#00a1d6] transition-colors">
                        {username}
                      </h3>
                      <p className="text-slate-400 text-sm mb-3">{bio}</p>
                      <div className="flex flex-wrap items-center gap-3">
                        {totalViews && (
                          <div className="flex items-center gap-1.5 text-slate-300">
                            <Eye className="w-3.5 h-3.5 text-[#00a1d6]" />
                            <span className="text-xs">{totalViews}</span>
                          </div>
                        )}
                        {totalLikes && (
                          <div className="flex items-center gap-1.5 text-slate-300">
                            <Heart className="w-3.5 h-3.5 text-[#00a1d6]" />
                            <span className="text-xs">{totalLikes}</span>
                          </div>
                        )}
                        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#00a1d6] text-white rounded-full text-xs font-medium">
                          <Users className="w-3 h-3" />
                          {followers}
                        </div>
                      </div>
                    </div>
                    <div className="hidden md:block opacity-10 group-hover:opacity-20 transition-opacity flex-shrink-0">
                      <BilibiliIcon className="w-14 h-14 text-[#00a1d6]" />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </motion.div>

          {/* Featured Videos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {loading
              ? VIDEO_BVIDS.map((bvid) => <VideoSkeleton key={bvid} />)
              : videos.map((video, index) =>
                video ? (
                  <motion.div
                    key={video.bvid}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                  >
                    <a
                      href={`https://www.bilibili.com/video/${video.bvid}/`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block rounded-xl overflow-hidden border border-slate-700/50 hover:border-[#00a1d6]/50 bg-slate-900 hover:shadow-lg hover:shadow-[#00a1d6]/10 transition-all duration-300"
                    >
                      {/* Thumbnail */}
                      <div className="relative overflow-hidden aspect-video bg-slate-800">
                        {video.cover ? (
                          <img
                            src={video.cover}
                            alt={video.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                            referrerPolicy="no-referrer"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <BilibiliIcon className="w-10 h-10 text-slate-600" />
                          </div>
                        )}
                        <div className="absolute bottom-2 right-2 px-1.5 py-0.5 bg-black/80 text-white text-xs rounded font-mono">
                          {video.duration}
                        </div>
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-[#00a1d6]/90 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300">
                            <Play className="w-5 h-5 text-white ml-0.5" fill="white" />
                          </div>
                        </div>
                      </div>

                      {/* Info */}
                      <div className="p-3">
                        <p className="text-white text-sm font-medium line-clamp-2 mb-2 group-hover:text-[#00a1d6] transition-colors leading-snug">
                          {video.title}
                        </p>
                        <div className="flex items-center gap-3 text-slate-500 text-xs">
                          <span className="flex items-center gap-1">
                            <Eye className="w-3 h-3" />
                            {video.views}
                          </span>
                          <span className="flex items-center gap-1">
                            <Heart className="w-3 h-3" />
                            {video.likes}
                          </span>
                        </div>
                      </div>
                    </a>
                  </motion.div>
                ) : null
              )}
          </div>

          {/* View More */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center pt-2"
          >
            <a
              href={profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-slate-700 hover:border-[#00a1d6]/60 text-slate-400 hover:text-[#00a1d6] rounded-lg text-sm transition-all duration-300 hover:bg-[#00a1d6]/5"
            >
              <BilibiliIcon className="w-4 h-4" />
              View all videos on Bilibili
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}