"use client";

import { motion } from "framer-motion";
import { Mic, Users, Award, Video, BookOpen } from "lucide-react";
import { mediaAppearances } from "@/data/content";

const typeConfig: Record<string, { icon: React.ElementType; color: string; bg: string }> = {
  Podcast: { icon: Mic, color: "text-purple-600", bg: "bg-purple-50" },
  Speaker: { icon: Users, color: "text-blue-600", bg: "bg-blue-50" },
  Award: { icon: Award, color: "text-coral-500", bg: "bg-coral-50" },
  Webinar: { icon: Video, color: "text-green-600", bg: "bg-green-50" },
  Workshop: { icon: BookOpen, color: "text-navy-700", bg: "bg-navy-50" },
  Seminar: { icon: Users, color: "text-amber-600", bg: "bg-amber-50" },
};

export default function Media() {
  return (
    <section id="media" className="section-padding bg-navy-950 text-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-coral-400">
            Media & Appearances
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold font-[family-name:var(--font-poppins)]">
            Featured In
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Sharing knowledge through podcasts, workshops, and speaking engagements
          </p>
        </div>

        {/* Scrolling pill marquee */}
        <div className="mt-12 relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-navy-950 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-navy-950 to-transparent z-10" />

          <div className="flex gap-4 overflow-hidden">
            <motion.div
              className="flex gap-4 flex-shrink-0"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
              {[...mediaAppearances, ...mediaAppearances].map((item, i) => {
                const cfg = typeConfig[item.type] || typeConfig.Workshop;
                const Icon = cfg.icon;
                return (
                  <div
                    key={i}
                    className="flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-5 py-2.5 flex-shrink-0"
                  >
                    <div className={`${cfg.bg} rounded-full p-1`}>
                      <Icon size={14} className={cfg.color} />
                    </div>
                    <span className="text-sm font-medium text-white whitespace-nowrap">
                      {item.label}
                    </span>
                    <span className="text-xs text-slate-400 bg-white/5 px-2 py-0.5 rounded-full">
                      {item.type}
                    </span>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg mx-auto text-center">
          {[
            { value: "20+", label: "Media Features" },
            { value: "15+", label: "Podcast Episodes" },
            { value: "30+", label: "Speaking Events" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl font-bold text-coral-400 font-[family-name:var(--font-poppins)]">
                {stat.value}
              </div>
              <div className="mt-1 text-xs text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
