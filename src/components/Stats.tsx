"use client";

import { motion } from "framer-motion";
import { stats } from "@/data/content";

function StatCard({ value, suffix, label, index }: { value: number; suffix: string; label: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center"
    >
      <div className="text-3xl sm:text-4xl font-bold text-navy-800 font-[family-name:var(--font-poppins)]">
        {value}{suffix}
      </div>
      <div className="mt-2 text-sm text-slate-500">{label}</div>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section className="relative -mt-16 z-20 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <div className="glass rounded-2xl shadow-xl p-8 sm:p-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} {...stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
