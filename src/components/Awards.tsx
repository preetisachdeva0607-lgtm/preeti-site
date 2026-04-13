"use client";

import { motion } from "framer-motion";
import { Award, Medal } from "lucide-react";
import { awards } from "@/data/content";

export default function Awards() {
  return (
    <section id="awards" className="section-padding bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-coral-500">
            Recognition
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900 font-[family-name:var(--font-poppins)]">
            Awards & Certifications
          </h2>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {awards.map((award, i) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 border border-slate-100 hover:border-navy-200 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-gradient-to-br from-navy-50 to-coral-50 p-3">
                  {i % 2 === 0 ? (
                    <Award size={22} className="text-navy-700" />
                  ) : (
                    <Medal size={22} className="text-coral-500" />
                  )}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">{award.title}</h3>
                  <p className="mt-1 text-sm text-slate-500">{award.org}</p>
                  <span className="mt-2 inline-block text-xs font-medium text-navy-700 bg-navy-50 px-2.5 py-1 rounded-full">
                    {award.year}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
