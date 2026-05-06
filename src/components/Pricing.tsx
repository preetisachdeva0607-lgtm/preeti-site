"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { pricing, siteConfig } from "@/data/content";

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-coral-500">
            Pricing
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900 font-[family-name:var(--font-poppins)]">
            CogniPrint Analysis Plans
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Comprehensive intelligence profiling packages for every age group
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricing.map((plan, i) => (
            <motion.div
              key={plan.ageRange}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl p-6 ${
                plan.popular
                  ? "bg-navy-800 text-white shadow-xl shadow-navy-800/20 ring-2 ring-navy-800"
                  : "bg-white border border-slate-200"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-coral-500 text-white text-xs font-semibold px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <h3
                className={`text-lg font-semibold font-[family-name:var(--font-poppins)] ${
                  plan.popular ? "text-white" : "text-slate-900"
                }`}
              >
                {plan.ageRange}
              </h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span
                  className={`text-3xl font-bold ${
                    plan.popular ? "text-white" : "text-navy-800"
                  }`}
                >
                  &#8377;{plan.price}
                </span>
              </div>
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check
                      size={16}
                      className={`mt-0.5 flex-shrink-0 ${
                        plan.popular ? "text-coral-300" : "text-navy-500"
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        plan.popular ? "text-navy-100" : "text-slate-600"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-6 block text-center rounded-full py-2.5 text-sm font-semibold transition-colors ${
                  plan.popular
                    ? "bg-coral-500 text-white hover:bg-coral-600"
                    : "bg-navy-800 text-white hover:bg-navy-900"
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      {/* Free consultation banner */}
        <div className="mt-8 text-center">
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-coral-100 px-6 py-3 text-sm font-semibold text-coral-700 hover:bg-coral-200 transition-colors"
          >
            Not sure which plan? Book a Free 15-min Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
