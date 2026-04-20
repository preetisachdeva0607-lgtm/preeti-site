"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShoppingCart, MessageCircle } from "lucide-react";
import { books } from "@/data/content";

export default function Book() {
  return (
    <section id="books" className="section-padding bg-gradient-to-br from-navy-900 to-navy-800 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-coral-300">
            Books by Preeti Sachdeva
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold font-[family-name:var(--font-poppins)]">
            Transformative Reading
          </h2>
          <p className="mt-4 text-navy-200 max-w-2xl mx-auto">
            Practical guides written by Preeti Sachdeva to help teens navigate their minds and boost memory retention.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {books.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="flex flex-col rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:bg-white/10 transition-colors"
            >
              {/* Cover image */}
              <div className="aspect-[4/3] relative overflow-hidden bg-navy-800">
                <Image
                  src={b.cover}
                  alt={b.title}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-transparent to-transparent" />
              </div>

              {/* Info */}
              <div className="p-6 flex flex-col flex-1">
                <span className="text-xs font-semibold uppercase tracking-widest text-coral-300">
                  {b.subtitle}
                </span>
                <h3 className="mt-2 text-xl font-bold font-[family-name:var(--font-poppins)]">
                  {b.title}
                </h3>
                <p className="mt-3 text-sm text-navy-200/80 leading-relaxed flex-1">
                  {b.description}
                </p>

                <div className="mt-4 flex items-center gap-3 text-xs">
                  <span className="bg-white/10 px-3 py-1.5 rounded-full">{b.audience}</span>
                </div>

                <div className="mt-5 flex items-center gap-4">
                  {b.price && (
                    <span className="text-2xl font-bold text-coral-400">&#8377;{b.price}</span>
                  )}
                  <a
                    href={b.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-coral-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-coral-600 transition-colors shadow-lg shadow-coral-500/30"
                  >
                    {b.price ? <ShoppingCart size={16} /> : <MessageCircle size={16} />}
                    {b.buyLabel}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
