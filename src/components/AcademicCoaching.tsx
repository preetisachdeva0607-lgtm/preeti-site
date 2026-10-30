"use client";

import { motion } from "framer-motion";

export default function AcademicCoaching() {
  return (
    <section id="academic-coaching" className="section-padding" style={{ background: "linear-gradient(135deg, #FFF7ED 0%, #F0FDFA 55%, #EFF6FF 100%)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-coral-500">
            Academic Coaching
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900 font-[family-name:var(--font-poppins)]">
            📚 Academic Coaching for Classes 1 to 8
          </h2>
          <p className="mt-4 text-lg text-slate-600">As per the CBSE curriculum, online and offline</p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-6 shadow-lg"
          >
            <h3 className="text-xl font-bold text-slate-900 mb-4">Course Highlights</h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Coaching for students of Classes 1 to 8</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Taught as per the CBSE curriculum</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Online classes from anywhere</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Offline classes in Greater Noida</span>
              </li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">Classes 1–8</span>
              <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-semibold">CBSE</span>
              <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">Online &amp; Offline</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-orange-50 to-teal-50 rounded-2xl p-6 shadow-lg flex flex-col justify-center"
          >
            <h3 className="text-xl font-bold text-teal-700 mb-4">💰 Fee Enquiries</h3>
            <p className="text-slate-600 mb-6">
              Message us on WhatsApp for fee details, batch timings and to choose online or offline classes.
            </p>
            <a
              href="https://wa.me/918920038298?text=Hi%20Preeti!%20I'm%20interested%20in%20Academic%20Coaching%20(CBSE%2C%20Classes%201-8).%20Please%20share%20the%20fee%20details%20for%20online%2Foffline%20classes."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 self-start bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors"
            >
              💬 WhatsApp for Fee Enquiry
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
