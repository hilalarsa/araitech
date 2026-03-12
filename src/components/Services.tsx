"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { HiCheck, HiStar } from "react-icons/hi";
import { FiGlobe, FiLayers, FiZap } from "react-icons/fi";
import content from "@/data/content.json";

const iconMap: Record<string, React.ElementType> = {
  globe: FiGlobe,
  layers: FiLayers,
  rocket: FiZap,
};

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="layanan" className="py-24 lg:py-32 bg-surface-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
            {content.services.sectionTitle}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {content.services.sectionSubtitle}
          </h2>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {content.services.packages.map((pkg, i) => {
            const Icon = iconMap[pkg.icon] || FiGlobe;
            return (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className={`relative flex flex-col p-8 rounded-2xl border transition-all duration-300 hover:shadow-xl ${
                  pkg.popular
                    ? "bg-secondary text-white border-primary shadow-2xl shadow-primary/20 scale-[1.02] lg:scale-105"
                    : "bg-surface border-border hover:border-primary/30 hover:shadow-primary/5"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-primary text-white text-xs font-bold rounded-full flex items-center gap-1 shadow-lg">
                    <HiStar className="text-yellow-300" />
                    Paling Populer
                  </div>
                )}

                <div className="mb-6">
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
                      pkg.popular ? "bg-primary/20" : "bg-primary/10"
                    }`}
                  >
                    <Icon
                      className={`text-2xl ${pkg.popular ? "text-accent" : "text-primary"}`}
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{pkg.name}</h3>
                  <p
                    className={`text-sm font-medium mb-3 ${
                      pkg.popular ? "text-accent" : "text-primary"
                    }`}
                  >
                    {pkg.type}
                  </p>
                  <p
                    className={`text-sm leading-relaxed ${
                      pkg.popular ? "text-white/70" : "text-muted"
                    }`}
                  >
                    {pkg.description}
                  </p>
                </div>

                {/* Price */}
                <div
                  className={`py-4 mb-6 border-y ${
                    pkg.popular ? "border-white/10" : "border-border"
                  }`}
                >
                  <p
                    className={`text-xl font-bold ${
                      pkg.popular ? "text-white" : "text-foreground"
                    }`}
                  >
                    {pkg.priceRange}
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <HiCheck
                        className={`mt-0.5 flex-shrink-0 ${
                          pkg.popular ? "text-accent" : "text-primary"
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          pkg.popular ? "text-white/80" : "text-muted"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={`https://wa.me/${content.company.whatsapp}?text=Halo, saya tertarik dengan paket ${pkg.name} (${pkg.type}). Bisa konsultasi lebih lanjut?`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center py-3.5 rounded-xl font-semibold transition-all duration-200 ${
                    pkg.popular
                      ? "bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/30"
                      : "bg-primary/10 text-primary hover:bg-primary hover:text-white"
                  }`}
                >
                  Mulai Konsultasi
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Disclaimer */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mt-16"
        >
          <h2 className="text-md sm:text-md lg:text-md font-bold text-foreground mt-6">
            {content.services.disclaimer}
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
