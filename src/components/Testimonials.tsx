"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { siteConfig, testimonials } from "@/data/content";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-coral-500">
            Testimonials
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900 font-[family-name:var(--font-poppins)]">
            What Parents Say
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Hear from families whose lives have been transformed through our programs
          </p>
        </div>

        {/* Write a Review Button: opens the Google review form so reviews land on the Google listing */}
        <div className="mt-8 text-center">
          <a
            href={siteConfig.googleWriteReview}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-coral-500 text-white rounded-full font-medium hover:bg-coral-600 transition-colors shadow-lg hover:shadow-xl"
          >
            <Star size={18} />
            Write a Review on Google
          </a>
        </div>

        {/* Existing Testimonials */}
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl bg-white p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              <Quote size={24} className="text-navy-200" />
              <p className="mt-4 text-slate-600 leading-relaxed">{t.text}</p>
              <div className="mt-4 flex items-center gap-1">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    size={14}
                    className="fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <div className="mt-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-navy-100 flex items-center justify-center">
                  <span className="text-sm font-bold text-navy-700">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <span className="font-medium text-slate-900">{t.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
