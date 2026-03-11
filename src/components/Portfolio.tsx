"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { HiExternalLink } from "react-icons/hi";
import content from "@/data/content.json";

const categories = ["Semua", ...Array.from(new Set(content.portfolio.projects.map((p) => p.category)))];

// Generate consistent gradient backgrounds for portfolio items
const gradients = [
  "from-blue-500/20 to-cyan-500/20",
  "from-purple-500/20 to-pink-500/20",
  "from-emerald-500/20 to-teal-500/20",
  "from-orange-500/20 to-amber-500/20",
  "from-indigo-500/20 to-blue-500/20",
  "from-rose-500/20 to-red-500/20",
];

const iconColors = [
  "text-blue-400",
  "text-purple-400",
  "text-emerald-400",
  "text-orange-400",
  "text-indigo-400",
  "text-rose-400",
];

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filteredProjects =
    activeCategory === "Semua"
      ? content.portfolio.projects
      : content.portfolio.projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portofolio" className="py-24 lg:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
            {content.portfolio.sectionTitle}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {content.portfolio.sectionSubtitle}
          </h2>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-primary text-white shadow-md shadow-primary/25"
                  : "bg-surface-alt text-muted hover:text-foreground hover:bg-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                whileHover={{ y: -5 }}
                className="group bg-surface rounded-2xl border border-border overflow-hidden hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
              >
                {/* Project visual */}
                <div className={`relative h-48 bg-gradient-to-br ${gradients[i % gradients.length]} flex items-center justify-center overflow-hidden`}>
                  {/* Abstract visual representing the project */}
                  <div className="relative w-full h-full flex items-center justify-center">
                    {/* Browser mockup */}
                    <div className="w-4/5 h-4/5 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30 p-2 group-hover:scale-105 transition-transform duration-300">
                      <div className="flex gap-1 mb-2">
                        <div className="w-2 h-2 rounded-full bg-white/40" />
                        <div className="w-2 h-2 rounded-full bg-white/40" />
                        <div className="w-2 h-2 rounded-full bg-white/40" />
                      </div>
                      <div className="space-y-1.5">
                        <div className="h-2 bg-white/20 rounded w-3/4" />
                        <div className="h-2 bg-white/20 rounded w-1/2" />
                        <div className="h-6 bg-white/15 rounded w-full mt-2" />
                        <div className="flex gap-1 mt-2">
                          <div className="h-8 bg-white/15 rounded flex-1" />
                          <div className="h-8 bg-white/15 rounded flex-1" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <HiExternalLink className="text-white text-3xl" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className={`text-xs font-semibold mb-2 ${iconColors[i % iconColors.length]}`}>
                    {project.category}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-surface-alt text-xs font-medium text-muted rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
