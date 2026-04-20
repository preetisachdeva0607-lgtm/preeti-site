"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, Brain, BookOpen, Lightbulb } from "lucide-react";
import { siteConfig } from "@/data/content";

const badges = [
  { Icon: GraduationCap, label: "Parenting Coach" },
  { Icon: Brain, label: "DMIT Practitioner" },
  { Icon: BookOpen, label: "Educator" },
  { Icon: Lightbulb, label: "NLP Coach" },
];

export default function Hero() {
  return (
    <section className="hero-gradient relative min-h-screen flex items-center overflow-hidden">
      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-navy-400/10 blur-3xl" />
        <div className="absolute bottom-20 -left-20 w-80 h-80 rounded-full bg-coral-500/10 blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full bg-coral-400/5 blur-2xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32">
        <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-20">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-left"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white font-[family-name:var(--font-poppins)] leading-tight tracking-tight">
              Preeti Sachdeva
            </h1>
            <p className="mt-4 text-xl sm:text-2xl text-navy-200 font-light">
              {siteConfig.tagline}
            </p>
            <p className="mt-4 text-lg text-navy-300/90 max-w-xl">
              Certified Parenting Coach, DMIT Practitioner, Educator & NLP Coach
              with 15+ years of experience
            </p>

            {/* Badges */}
            <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-3">
              {badges.map(({ Icon, label }, i) => (
                <motion.span
                  key={label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm border border-white/15"
                >
                  <Icon size={16} />
                  {label}
                </motion.span>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-4">
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-coral-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-coral-500/30 hover:bg-coral-600 hover:shadow-coral-500/40 transition-all"
              >
                Book a Session
              </a>
              <a
                href="#books"
                className="rounded-full border-2 border-white/30 px-8 py-3.5 text-base font-semibold text-white hover:bg-white/10 transition-all"
              >
                My Books &rarr;
              </a>
            </div>
          </motion.div>

          {/* Large Photo - Split layout */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-shrink-0 w-full max-w-xs md:max-w-sm lg:max-w-md"
          >
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 relative">
                <Image
                  src="/images/hero-preeti.jpeg"
                  alt="Preeti Sachdeva - Parenting Coach & DMIT Practitioner"
                  width={400}
                  height={533}
                  className="w-full h-full object-cover object-top"
                  priority
                />
                {/* Bottom gradient to blend into page */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 via-transparent to-transparent" />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border-2 border-coral-500/20 -z-10" />
              <div className="absolute -top-3 -left-3 w-16 h-16 rounded-xl bg-coral-500/20 blur-sm" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
