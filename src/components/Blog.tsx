"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { blogPosts } from "@/data/content";

export default function Blog() {
  return (
    <section id="blog" className="section-padding bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-coral-500">
            Blog
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900 font-[family-name:var(--font-poppins)]">
            Insights & Articles
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl bg-white border border-slate-100 overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video bg-gradient-to-br from-navy-50 to-navy-100 flex items-center justify-center">
                <span className="text-3xl font-bold text-navy-200 font-[family-name:var(--font-poppins)]">
                  Blog
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <span className="bg-navy-50 text-navy-700 px-2.5 py-1 rounded-full font-medium">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {new Date(post.date).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <h3 className="mt-3 font-semibold text-slate-900 group-hover:text-navy-700 transition-colors">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {post.excerpt}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-coral-500 group-hover:gap-2 transition-all">
                  Read More <ArrowRight size={14} />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
