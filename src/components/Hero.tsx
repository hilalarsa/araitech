"use client";

import { motion } from "framer-motion";
import { HiArrowRight, HiPlay } from "react-icons/hi";
import { FiCode, FiMonitor, FiSmartphone } from "react-icons/fi";
import content from "@/data/content.json";

export default function Hero() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="beranda" className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        
        {/* Floating orbs */}
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/10 text-white/80 text-sm mb-8"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Menerima proyek baru
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {content.hero.headline.split("Profesional")[0]}
              <span className="gradient-text">Profesional</span>
            </h1>

            <p className="text-lg text-white/60 leading-relaxed mb-10 max-w-lg">
              {content.hero.subheadline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href={content.hero.ctaLink}
                onClick={(e) => handleScroll(e, content.hero.ctaLink)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors shadow-xl shadow-primary/30 group"
              >
                {content.hero.ctaText}
                <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                href={content.hero.secondaryCtaLink}
                onClick={(e) => handleScroll(e, content.hero.secondaryCtaLink)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-colors group"
              >
                <HiPlay className="text-accent" />
                {content.hero.secondaryCtaText}
              </motion.a>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex gap-8 mt-12 pt-8 border-t border-white/10"
            >
              {[
                { number: "3+", label: "Paket produk" },
                { number: "10+", label: "Klien Puas" },
                { number: "8+", label: "Tahun Pengalaman" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-white">{stat.number}</div>
                  <div className="text-sm text-white/50">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="hidden lg:block relative"
          >
            {/* Code window illustration */}
            <div className="relative">
              {/* Main card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 shadow-2xl"
              >
                {/* Window dots */}
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                
                {/* Code lines */}
                <div className="space-y-3 font-mono text-sm">
                  <div className="flex gap-3">
                    <span className="text-muted-light select-none">1</span>
                    <span className="text-accent">import</span>
                    <span className="text-white">{"{ Website }"}</span>
                    <span className="text-accent">from</span>
                    <span className="text-green-400">&apos;araitech&apos;</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-muted-light select-none">2</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-muted-light select-none">3</span>
                    <span className="text-accent">const</span>
                    <span className="text-yellow-300">project</span>
                    <span className="text-white">=</span>
                    <span className="text-accent">new</span>
                    <span className="text-blue-300">Website</span>
                    <span className="text-white">({"{"}</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-muted-light select-none">4</span>
                    <span className="text-white pl-4">design:</span>
                    <span className="text-green-400">&apos;modern&apos;</span>
                    <span className="text-white">,</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-muted-light select-none">5</span>
                    <span className="text-white pl-4">quality:</span>
                    <span className="text-green-400">&apos;premium&apos;</span>
                    <span className="text-white">,</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-muted-light select-none">6</span>
                    <span className="text-white pl-4">deadline:</span>
                    <span className="text-green-400">&apos;on-time&apos;</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-muted-light select-none">7</span>
                    <span className="text-white">{"})"}</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-muted-light select-none">8</span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <span className="text-muted-light select-none">9</span>
                    <span className="text-yellow-300">project</span>
                    <span className="text-white">.</span>
                    <span className="text-blue-300">deploy</span>
                    <span className="text-white">()</span>
                    <span className="ml-2 text-green-400 text-xs">✓ Success</span>
                  </div>
                </div>
              </motion.div>

              {/* Floating cards */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-6 -right-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-4 shadow-xl"
              >
                <FiMonitor className="text-accent text-2xl mb-2" />
                <p className="text-white text-xs font-medium">Responsive</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-4 -left-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-4 shadow-xl"
              >
                <FiCode className="text-blue-400 text-2xl mb-2" />
                <p className="text-white text-xs font-medium">Clean Code</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute top-1/2 -right-10 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-4 shadow-xl"
              >
                <FiSmartphone className="text-green-400 text-2xl mb-2" />
                <p className="text-white text-xs font-medium">Mobile Ready</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-1.5 bg-white/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
