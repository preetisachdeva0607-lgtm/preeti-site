"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Award, Users, Star } from "lucide-react";
import { aboutText } from "@/data/content";

const highlights = [
  { Icon: Heart, text: "Passionate Educator" },
  { Icon: Award, text: "50+ Certifications" },
  { Icon: Users, text: "1000+ Families" },
  { Icon: Star, text: "5/5 Google Rating" },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/images/hero-preeti.jpg"
                alt="Preeti Sachdeva"
                width={400}
                height={500}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl bg-coral-100 -z-10" />
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-coral-500">
              About
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900 font-[family-name:var(--font-poppins)]">
              {aboutText.heading}
            </h2>
            <div className="mt-6 space-y-4">
              {aboutText.paragraphs.map((p, i) => (
                <p key={i} className="text-slate-600 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {highlights.map(({ Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-3 rounded-xl bg-navy-50 p-3"
                >
                  <div className="rounded-lg bg-navy-100 p-2">
                    <Icon size={18} className="text-navy-700" />
                  </div>
                  <span className="text-sm font-medium text-slate-700">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
