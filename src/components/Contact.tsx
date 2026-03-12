"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { HiLocationMarker, HiMail } from "react-icons/hi";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import content from "@/data/content.json";

const contactIconMap: Record<string, React.ElementType> = {
  whatsapp: FaWhatsapp,
  email: HiMail,
  location: HiLocationMarker,
  instagram: FaInstagram,
};

const contactColorMap: Record<string, string> = {
  whatsapp: "bg-green-500/10 text-green-500 group-hover:bg-green-500",
  email: "bg-blue-500/10 text-blue-500 group-hover:bg-blue-500",
  location: "bg-red-500/10 text-red-500 group-hover:bg-red-500",
  instagram: "bg-pink-500/10 text-pink-500 group-hover:bg-pink-500",
};

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Halo Araitech Dev! 👋\n\nNama: ${form.name}\nEmail: ${form.email}\nWhatsApp: ${form.phone}\nLayanan: ${form.service}\n\nPesan:\n${form.message}`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${content.company.whatsapp}?text=${encoded}`, "_blank");
  };

  return (
    <section id="kontak" className="py-24 lg:py-32 bg-surface-alt">
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
            {content.contact.sectionTitle}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {content.contact.sectionSubtitle}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="lg:col-span-2 space-y-6"
          >
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Mari Bicara Tentang Proyek Anda
              </h3>
              <p className="text-muted leading-relaxed">
                Hubungi kami melalui channel yang paling nyaman untuk Anda. Kami akan merespon
                dalam waktu kurang dari 24 jam.
              </p>
            </div>

            <div className="space-y-4">
              {content.contact.info.map((info) => {
                const Icon = contactIconMap[info.icon] || HiMail;
                const colors = contactColorMap[info.icon] || "bg-primary/10 text-primary";
                return (
                  <a
                    key={info.label}
                    href={info.link || "#"}
                    target={info.link ? "_blank" : undefined}
                    rel={info.link ? "noopener noreferrer" : undefined}
                    className={`group flex items-center gap-4 p-4 rounded-xl border border-border hover:border-transparent hover:shadow-lg transition-all duration-300 bg-surface ${
                      !info.link ? "cursor-default" : ""
                    }`}
                  >
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${colors} group-hover:text-white group-hover:scale-110`}
                    >
                      <Icon className="text-xl" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-muted uppercase tracking-wide">
                        {info.label}
                      </p>
                      <p className="font-semibold text-foreground">{info.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-surface rounded-2xl border border-border p-8 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    {content.contact.formFields.name}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-surface-alt text-foreground placeholder:text-muted-light focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="Nama anda"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    {content.contact.formFields.email}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-surface-alt text-foreground placeholder:text-muted-light focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="Email anda"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    {content.contact.formFields.phone}
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-surface-alt text-foreground placeholder:text-muted-light focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="+62 812-3456-7890"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                    {content.contact.formFields.service}
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={form.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-surface-alt text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  >
                    <option value="">Pilih layanan...</option>
                    {content.services.packages.map((pkg) => (
                      <option key={pkg.name} value={`${pkg.name} - ${pkg.type}`}>
                        {pkg.name} - {pkg.type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  {content.contact.formFields.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-surface-alt text-foreground placeholder:text-muted-light focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                  placeholder="Ceritakan tentang proyek yang ingin Anda buat..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full flex items-center justify-center gap-3 py-4 bg-green-500 text-white font-bold rounded-xl hover:bg-green-600 transition-colors shadow-lg shadow-green-500/25"
              >
                <FaWhatsapp className="text-xl" />
                {content.contact.formFields.submit}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
