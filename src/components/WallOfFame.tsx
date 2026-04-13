"use client";

import { motion } from "framer-motion";
import { wallOfFame } from "@/data/content";

const colorClasses: Record<string, { bg: string; text: string; ring: string }> = {
  teal: { bg: "bg-teal-100", text: "text-teal-700", ring: "ring-teal-200" },
  orange: { bg: "bg-orange-100", text: "text-orange-700", ring: "ring-orange-200" },
  purple: { bg: "bg-purple-100", text: "text-purple-700", ring: "ring-purple-200" },
  pink: { bg: "bg-pink-100", text: "text-pink-700", ring: "ring-pink-200" },
  blue: { bg: "bg-blue-100", text: "text-blue-700", ring: "ring-blue-200" },
  green: { bg: "bg-green-100", text: "text-green-700", ring: "ring-green-200" },
  amber: { bg: "bg-amber-100", text: "text-amber-700", ring: "ring-amber-200" },
  rose: { bg: "bg-rose-100", text: "text-rose-700", ring: "ring-rose-200" },
};

export default function WallOfFame() {
  return (
    <section id="wall-of-fame" className="section-padding bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-coral-500">
            Success Stories
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900 font-[family-name:var(--font-poppins)]">
            Wall of Fame
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Celebrating the achievements of our incredible young minds
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {wallOfFame.map((student, i) => {
            const colors = colorClasses[student.color] || colorClasses.teal;
            const initials = student.name
              .split(" ")
              .map((n) => n[0])
              .join("");
            return (
              <motion.div
                key={student.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex flex-col items-center text-center"
              >
                <div
                  className={`w-20 h-20 rounded-full ${colors.bg} ${colors.ring} ring-4 flex items-center justify-center`}
                >
                  <span className={`text-xl font-bold ${colors.text}`}>
                    {initials}
                  </span>
                </div>
                <h3 className="mt-3 font-semibold text-slate-900">
                  {student.name}
                </h3>
                <p className="text-sm text-slate-500">Age {student.age}</p>
                <span
                  className={`mt-2 inline-block text-xs font-medium ${colors.text} ${colors.bg} px-3 py-1 rounded-full`}
                >
                  {student.achievement}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
