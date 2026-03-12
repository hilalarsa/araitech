"use client";

import { useState, useEffect } from "react";
import Image from 'next/image'
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import content from "@/data/content.json";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass shadow-lg shadow-black/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#beranda"
            onClick={(e) => handleLinkClick(e, "#beranda")}
            className="flex items-center gap-2 group"
          >
            {/* <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
              A
            </div> */}
            <Image src="/icon.png" width={100} height={100} alt="logo"/>
            <span className={`font-bold text-lg tracking-tight transition-colors ${
              isScrolled ? "text-foreground" : "text-white"
            }`}>
              {content.company.name}
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {content.navbar.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-primary/10 hover:text-primary ${
                  isScrolled ? "text-foreground/70" : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={`https://wa.me/${content.company.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-dark transition-colors shadow-lg shadow-primary/25"
            >
              WhatsApp Kami
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden glass border-t border-border"
          >
            <div className="px-4 py-4 space-y-1">
              {content.navbar.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="block px-4 py-3 rounded-lg text-foreground/70 hover:text-primary hover:bg-primary/5 font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={`https://wa.me/${content.company.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-3 mt-2 bg-primary text-white text-center font-semibold rounded-lg"
              >
                WhatsApp Kami
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
