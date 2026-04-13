"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const galleryItems = [
  { src: "/images/gallery-1.jpeg", label: "Workshop Session" },
  { src: "/images/gallery-2.jpeg", label: "Training Program" },
  { src: "/images/gallery-3.jpeg", label: "Community Event" },
  { src: "/images/gallery-4.jpeg", label: "Counselling Session" },
  { src: "/images/gallery-5.jpeg", label: "Seminar" },
  { src: "/images/gallery-6.jpeg", label: "Group Activity" },
  { src: "/images/gallery-7.jpeg", label: "Student Workshop" },
  { src: "/images/gallery-8.jpeg", label: "Recognition Ceremony" },
  { src: "/images/gallery-9.jpeg", label: "Media Feature" },
  { src: "/images/gallery-10.jpeg", label: "Training Event" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="section-padding bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-coral-500">
            Gallery
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900 font-[family-name:var(--font-poppins)]">
            Moments & Milestones
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className={`relative overflow-hidden rounded-2xl ${
                i === 0 ? "md:col-span-2 md:row-span-2" : ""
              } group cursor-pointer`}
            >
              <div className={`${i === 0 ? "aspect-square" : "aspect-square"} relative`}>
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes={i === 0 ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
                />
              </div>
              <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/40 transition-colors flex items-end p-4">
                <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
                  {item.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
