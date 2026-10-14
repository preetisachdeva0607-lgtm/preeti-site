"use client";

import { motion } from "framer-motion";

export default function Phonics() {
  return (
    <section id="phonics" className="section-padding" style={{ background: "linear-gradient(135deg, #EFF6FF 0%, #F0FDFA 55%, #FFF7ED 100%)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-teal-600">
            Phonics Sounds Course
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900 font-[family-name:var(--font-poppins)]">
            🔤 Phonics Sounds Course for Children
          </h2>
          <p className="mt-4 text-lg text-slate-600">A playful one-year programme for children aged 3–9</p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-6 shadow-lg"
          >
            <h3 className="text-xl font-bold text-slate-900 mb-4">What Your Child Will Learn</h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Sound awareness, rhyme and oral blending</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Letter sounds, digraphs and vowel teams</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Word building, spelling and decodable reading</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Age-appropriate games, stories and activities</span>
              </li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">Ages 3–9</span>
              <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-semibold">1 year</span>
              <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">3 days a week</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-6 shadow-lg"
          >
            <h3 className="text-xl font-bold text-teal-700 mb-4">📅 Phonics Batch Schedule</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-slate-600">Class Days</p>
                <p className="text-2xl font-bold text-teal-800">Tuesday • Thursday • Saturday</p>
              </div>
              <div>
                <p className="text-sm text-slate-600">Class Time</p>
                <p className="text-2xl font-bold text-orange-600">4:00 PM – 5:00 PM IST</p>
              </div>
              <div className="pt-4 border-t border-teal-200">
                <p className="text-sm text-slate-600 mb-2">For ages 3–5, the class may run for 45 minutes.</p>
                <p className="text-sm text-slate-600 mb-4">Sunday trial, demo and makeup classes are available.</p>
                <a
                  href="https://wa.me/918920038298?text=Hi%20Preeti!%20I'm%20interested%20in%20the%20one-year%20Phonics%20Sounds%20Course%20for%20children%20aged%203-9.%20Please%20share%20the%20Tuesday%2C%20Thursday%20and%20Saturday%204-5%20PM%20IST%20batch%20details."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-teal-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-teal-700 transition-colors"
                >
                  💬 Enquire / Book a Trial
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
