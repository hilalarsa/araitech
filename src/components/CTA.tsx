"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import content from "@/data/content.json";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-cta p-12 lg:p-20 text-center"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              {content.cta.headline}
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-10">
              {content.cta.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href={`https://wa.me/${content.company.whatsapp}?text=Halo Araitech, saya ingin konsultasi tentang pembuatan website.`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-white/90 transition-colors shadow-xl group"
              >
                {content.cta.buttonText}
                <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>

            <p className="mt-6 text-white/50 text-sm">
              {content.cta.secondaryText}{" "}
              <a
                href={`mailto:${content.company.email}`}
                className="text-white/80 underline underline-offset-4 hover:text-white"
              >
                {content.company.email}
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
