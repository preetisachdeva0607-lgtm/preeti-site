"use client";

import { motion } from "framer-motion";
import { Fingerprint, Users, Presentation, Sparkles } from "lucide-react";
import { services } from "@/data/content";

const iconMap: Record<string, React.ElementType> = {
  Fingerprint,
  Users,
  Presentation,
  Sparkles,
};

export default function Services() {
  return (
    <section id="services" className="section-padding bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-coral-500">
            Services
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900 font-[family-name:var(--font-poppins)]">
            How I Can Help You
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Comprehensive services designed to empower parents and unlock every
            child&apos;s potential
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group rounded-2xl bg-white p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 hover:border-navy-200"
              >
                <div className="rounded-xl bg-navy-50 p-3 w-fit group-hover:bg-navy-100 transition-colors">
                  <Icon size={24} className="text-navy-700" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900 font-[family-name:var(--font-poppins)]">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
