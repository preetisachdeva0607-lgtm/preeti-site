"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { awards } from "@/data/content";

const awardImages = [
  "/images/award-1.jpeg",
  "/images/award-2.jpeg",
  "/images/award-3.jpeg",
  "/images/award-4.jpeg",
  "/images/award-5.jpeg",
  "/images/award-6.jpeg",
];

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
              className="rounded-2xl overflow-hidden border border-slate-100 hover:border-navy-200 hover:shadow-lg transition-all group"
            >
              {/* Photo */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={awardImages[i % awardImages.length]}
                  alt={award.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent" />
                <span className="absolute bottom-3 left-3 text-xs font-semibold text-white bg-coral-500 px-2.5 py-1 rounded-full">
                  {award.year}
                </span>
              </div>
              {/* Text */}
              <div className="p-5">
                <h3 className="font-semibold text-slate-900">{award.title}</h3>
                <p className="mt-1 text-sm text-slate-500">{award.org}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
