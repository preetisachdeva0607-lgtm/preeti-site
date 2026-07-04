"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote, Send, CheckCircle } from "lucide-react";
import { testimonials } from "@/data/content";

export default function Testimonials() {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: 5,
    text: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Submit to Formspree
    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          _subject: `New Review from ${formData.name}`,
        }),
      });
      
      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setShowForm(false);
          setFormData({ name: "", email: "", rating: 5, text: "" });
        }, 3000);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <section id="testimonials" className="section-padding bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-coral-500">
            Testimonials
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900 font-[family-name:var(--font-poppins)]">
            What Parents Say
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Hear from families whose lives have been transformed through our programs
          </p>
        </div>

        {/* Write a Review Button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => setShowForm(!showForm)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-coral-500 text-white rounded-full font-medium hover:bg-coral-600 transition-colors shadow-lg hover:shadow-xl"
          >
            <Star size={18} />
            {showForm ? "Cancel" : "Write a Review"}
          </button>
        </div>

        {/* Review Form */}
        {showForm && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-8 max-w-2xl mx-auto"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
              {submitted ? (
                <div className="text-center py-8">
                  <CheckCircle size={48} className="mx-auto text-green-500 mb-4" />
                  <h3 className="text-xl font-bold text-slate-900">Thank You!</h3>
                  <p className="text-slate-600 mt-2">Your review has been submitted.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-xl font-bold text-slate-900">Share Your Experience</h3>
                  
                  {/* Star Rating */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Your Rating</label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setFormData({ ...formData, rating: star })}
                          className="focus:outline-none"
                        >
                          <Star
                            size={28}
                            className={`transition-colors ${
                              star <= formData.rating
                                ? "fill-amber-400 text-amber-400"
                                : "text-slate-300"
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-coral-500 focus:ring-2 focus:ring-coral-200 outline-none transition-all"
                      placeholder="Enter your name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email (optional)</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-coral-500 focus:ring-2 focus:ring-coral-200 outline-none transition-all"
                      placeholder="your@email.com"
                    />
                  </div>

                  {/* Review Text */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Your Review *</label>
                    <textarea
                      name="text"
                      required
                      rows={4}
                      value={formData.text}
                      onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-coral-500 focus:ring-2 focus:ring-coral-200 outline-none transition-all resize-none"
                      placeholder="Share your experience with Student Success Academy..."
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition-colors"
                  >
                    <Send size={18} />
                    Submit Review
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        )}

        {/* Existing Testimonials */}
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl bg-white p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
            >
              <Quote size={24} className="text-navy-200" />
              <p className="mt-4 text-slate-600 leading-relaxed">{t.text}</p>
              <div className="mt-4 flex items-center gap-1">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    size={14}
                    className="fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <div className="mt-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-navy-100 flex items-center justify-center">
                  <span className="text-sm font-bold text-navy-700">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <span className="font-medium text-slate-900">{t.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
