"use client";

import { motion } from "framer-motion";
import { MessageCircle, Users, Video, BookOpen, Heart } from "lucide-react";
import { communityBenefits, siteConfig } from "@/data/content";

const benefitIcons = [BookOpen, Video, Users, Heart];

export default function Community() {
  return (
    <section id="community" className="section-padding bg-gradient-to-br from-green-600 to-green-700 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm mb-6">
              <MessageCircle size={16} />
              WhatsApp Community
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-poppins)]">
              Join Our Parenting Community
            </h2>
            <p className="mt-4 text-green-100 max-w-2xl mx-auto">
              Connect with like-minded parents, get expert guidance, and access
              exclusive resources
            </p>
          </motion.div>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {communityBenefits.map((benefit, i) => {
            const Icon = benefitIcons[i];
            return (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white/10 rounded-xl p-5 backdrop-blur-sm border border-white/20 text-center"
              >
                <Icon size={28} className="mx-auto text-green-200" />
                <p className="mt-3 text-sm font-medium">{benefit}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <a
            href={siteConfig.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 font-semibold text-green-700 hover:bg-green-50 transition-colors shadow-lg"
          >
            <MessageCircle size={18} />
            Join WhatsApp Community
          </a>
        </motion.div>
      </div>
    </section>
  );
}
