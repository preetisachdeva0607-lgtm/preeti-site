"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { siteConfig } from "@/data/content";

const contactInfo = [
  { Icon: Phone, label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
  { Icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { Icon: MapPin, label: "Address", value: siteConfig.address, href: "#" },
  { Icon: Clock, label: "Hours", value: siteConfig.hours, href: "#" },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-coral-500">
            Contact
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900 font-[family-name:var(--font-poppins)]">
            Get in Touch
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Ready to empower your parenting journey? Reach out for a consultation
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {contactInfo.map(({ Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors group"
              >
                <div className="rounded-xl bg-navy-50 p-3 group-hover:bg-navy-100 transition-colors">
                  <Icon size={20} className="text-navy-700" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">{label}</p>
                  <p className="font-medium text-slate-900">{value}</p>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Contact form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-navy-500 focus:ring-2 focus:ring-navy-500/20 outline-none transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-navy-500 focus:ring-2 focus:ring-navy-500/20 outline-none transition-all"
                  placeholder="Your phone number"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-navy-500 focus:ring-2 focus:ring-navy-500/20 outline-none transition-all"
                placeholder="Your email address"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-navy-500 focus:ring-2 focus:ring-navy-500/20 outline-none transition-all resize-none"
                placeholder="How can I help you?"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-navy-800 px-8 py-3 font-semibold text-white hover:bg-navy-900 transition-colors shadow-lg shadow-navy-800/20"
            >
              <Send size={16} />
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
