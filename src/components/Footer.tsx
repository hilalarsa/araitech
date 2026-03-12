"use client";

import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import { HiArrowUp } from "react-icons/hi";
import content from "@/data/content.json";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socials = [
    { icon: FaWhatsapp, href: `https://wa.me/${content.company.whatsapp}`, label: "WhatsApp" },
    { icon: FaLinkedin, href: content.company.linkedin, label: "LinkedIn" },
    { icon: FaGithub, href: content.company.github, label: "GitHub" },
  ];

  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top */}
        <div className="py-12 border-b border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-xl">
              A
            </div>
            <div>
              <p className="font-bold text-lg">{content.company.name}</p>
              <p className="text-white/50 text-sm">{content.company.tagline}</p>
            </div>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-6">
            {content.navbar.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/60 hover:text-white text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white/60 hover:bg-primary hover:text-white transition-all duration-200"
              >
                <social.icon className="text-lg" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">{content.footer.copyright}</p>
          <div className="flex items-center gap-4">
            <p className="text-white/40 text-sm">{content.footer.madeWith}</p>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white/60 hover:bg-primary hover:text-white transition-all duration-200"
              aria-label="Scroll to top"
            >
              <HiArrowUp />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
