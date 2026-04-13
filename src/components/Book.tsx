"use client";

import { motion } from "framer-motion";
import { BookOpen, ShoppingCart } from "lucide-react";
import { book } from "@/data/content";

export default function Book() {
  return (
    <section id="books" className="section-padding bg-gradient-to-br from-navy-900 to-navy-800 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Book cover placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative w-64 sm:w-72">
              <div className="aspect-[3/4] rounded-lg bg-gradient-to-br from-coral-400 to-coral-600 shadow-2xl shadow-coral-500/20 flex flex-col items-center justify-center p-8 text-center">
                <BookOpen size={48} className="text-white/80" />
                <h3 className="mt-4 text-xl font-bold text-white font-[family-name:var(--font-poppins)]">
                  {book.title}
                </h3>
                <p className="mt-2 text-sm text-white/80">{book.subtitle}</p>
                <p className="mt-4 text-xs text-white/60">by Preeti Sachdeva</p>
              </div>
              <div className="absolute -bottom-4 left-4 right-4 h-8 bg-black/20 rounded-lg blur-xl" />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-coral-300">
              New Book
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold font-[family-name:var(--font-poppins)]">
              {book.title}
            </h2>
            <p className="mt-2 text-lg text-navy-200">{book.subtitle}</p>
            <p className="mt-4 text-navy-100/80 leading-relaxed">
              {book.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-4 text-sm">
              <span className="bg-white/10 px-4 py-2 rounded-full">
                Target: {book.audience}
              </span>
              <span className="bg-white/10 px-4 py-2 rounded-full">
                Publisher: {book.publisher}
              </span>
            </div>

            <div className="mt-8 flex items-center gap-6">
              <span className="text-3xl font-bold text-coral-400">
                &#8377;{book.price}
              </span>
              <a
                href={book.amazonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-coral-500 px-6 py-3 font-semibold text-white hover:bg-coral-600 transition-colors shadow-lg shadow-coral-500/30"
              >
                <ShoppingCart size={18} />
                Buy on Amazon
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
