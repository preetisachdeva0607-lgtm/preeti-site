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
            {/* WhatsApp quick connect */}
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-xl bg-green-50 border border-green-100 hover:bg-green-100 transition-colors group"
            >
              <div className="rounded-xl bg-green-500 p-3">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-slate-500">Prefer WhatsApp?</p>
                <p className="font-semibold text-green-700">Message us directly →</p>
              </div>
            </a>
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
