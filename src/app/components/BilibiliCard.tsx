import React from "react";
import { motion } from "motion/react";
import { Play, Heart, Eye, Users } from "lucide-react";

interface BilibiliCardProps {
  profileUrl?: string;
  username?: string;
  bio?: string;
  followers?: string;
  totalViews?: string;
  totalLikes?: string;
  avatarUrl?: string;
}

export function BilibiliCard({
  profileUrl = "https://space.bilibili.com/54413027",
  username = "Zong",
  bio = "Game Designer & Programmer",
  followers = "Follow me on Bilibili",
  totalViews = "",
  totalLikes = "",
  avatarUrl = "",
}: BilibiliCardProps) {
  return (
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
          className="mb-8"
        >
          <h2 className="text-center mb-2">Content Creator</h2>
          <p className="text-muted-foreground text-center">
            Follow my game development journey
          </p>
        </motion.div>

        {/* Bilibili Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group block relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#00a1d6] to-[#00b5e5] p-[2px] hover:shadow-2xl hover:shadow-[#00a1d6]/30 transition-all duration-300"
          >
            <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  }}
                />
              </div>

              <div className="relative p-8">
                <div className="flex items-start gap-6">
                  {/* Avatar/Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#00a1d6] to-[#00b5e5] p-1 group-hover:scale-110 transition-transform duration-300">
                      <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                        <svg
                          className="w-10 h-10 text-[#00a1d6]"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56H5.333c-1.51-.036-2.769-.556-3.773-1.56S.036 18.858 0 17.347v-7.36c.036-1.511.556-2.765 1.56-3.76 1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 0 1-.373-.906c0-.356.124-.658.373-.907l.027-.027c.267-.249.573-.373.92-.373.347 0 .653.124.92.373L9.653 4.44c.071.071.134.142.187.213h4.267a.836.836 0 0 1 .16-.213l2.853-2.747c.267-.249.573-.373.92-.373.347 0 .662.151.929.4.267.249.391.551.391.907 0 .355-.124.657-.373.906zM5.333 7.24c-.746.018-1.373.276-1.88.773-.506.498-.769 1.13-.786 1.894v7.52c.017.764.28 1.395.786 1.893.507.498 1.134.756 1.88.773h13.334c.746-.017 1.373-.275 1.88-.773.506-.498.769-1.129.786-1.893v-7.52c-.017-.765-.28-1.396-.786-1.894-.507-.497-1.134-.755-1.88-.773zM8 11.107c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c0-.373.129-.689.386-.947.258-.257.574-.386.947-.386zm8 0c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.249-.249.56-.373.933-.373Z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#00a1d6] transition-colors">
                      {username}
                    </h3>
                    <p className="text-slate-400 mb-4">{bio}</p>

                    {/* Stats */}
                    {(totalViews || totalLikes) && (
                      <div className="flex flex-wrap gap-4 mb-4">
                        {totalViews && (
                          <div className="flex items-center gap-2 text-slate-300">
                            <Eye className="w-4 h-4 text-[#00a1d6]" />
                            <span className="text-sm">{totalViews}</span>
                          </div>
                        )}
                        {totalLikes && (
                          <div className="flex items-center gap-2 text-slate-300">
                            <Heart className="w-4 h-4 text-[#00a1d6]" />
                            <span className="text-sm">{totalLikes}</span>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Follow Button */}
                    <div className="flex items-center gap-2">
                      <div className="px-4 py-2 bg-[#00a1d6] hover:bg-[#00b5e5] text-white rounded-full text-sm font-medium transition-colors flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        {followers}
                      </div>
                      <div className="px-4 py-2 bg-slate-700/50 hover:bg-slate-700 text-white rounded-full text-sm font-medium transition-colors flex items-center gap-2">
                        <Play className="w-4 h-4" />
                        Watch Videos
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bilibili Brand Badge */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <svg
                    className="w-16 h-16 text-[#00a1d6]"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56H5.333c-1.51-.036-2.769-.556-3.773-1.56S.036 18.858 0 17.347v-7.36c.036-1.511.556-2.765 1.56-3.76 1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 0 1-.373-.906c0-.356.124-.658.373-.907l.027-.027c.267-.249.573-.373.92-.373.347 0 .653.124.92.373L9.653 4.44c.071.071.134.142.187.213h4.267a.836.836 0 0 1 .16-.213l2.853-2.747c.267-.249.573-.373.92-.373.347 0 .662.151.929.4.267.249.391.551.391.907 0 .355-.124.657-.373.906zM5.333 7.24c-.746.018-1.373.276-1.88.773-.506.498-.769 1.13-.786 1.894v7.52c.017.764.28 1.395.786 1.893.507.498 1.134.756 1.88.773h13.334c.746-.017 1.373-.275 1.88-.773.506-.498.769-1.129.786-1.893v-7.52c-.017-.765-.28-1.396-.786-1.894-.507-.497-1.134-.755-1.88-.773zM8 11.107c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c0-.373.129-.689.386-.947.258-.257.574-.386.947-.386zm8 0c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.249-.249.56-.373.933-.373Z" />
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
