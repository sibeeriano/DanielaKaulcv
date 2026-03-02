"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { cvData } from "@/data/cv";

const icons = {
  email: (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  ),
  phone: (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  ),
};

export default function Contact() {
  return (
    <motion.section
      id="contacto"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="py-24 px-6 md:px-12 max-w-4xl mx-auto"
    >
      <div className="bg-navy text-cream py-20 px-8 rounded-lg text-center">
        <SectionHeader label="Conectemos" title="Contacto" dark />
        <div className="flex flex-wrap justify-center gap-8 mt-8">
          <a
            href={`mailto:${cvData.contact.email}`}
            className="flex items-center gap-3 text-cream hover:text-gold transition-colors"
          >
            {icons.email}
            {cvData.contact.email}
          </a>
          <a
            href={`tel:${cvData.contact.phoneLink}`}
            className="flex items-center gap-3 text-cream hover:text-gold transition-colors"
          >
            {icons.phone}
            {cvData.contact.phone}
          </a>
          <a
            href={cvData.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-cream hover:text-gold transition-colors"
          >
            {icons.linkedin}
            LinkedIn
          </a>
        </div>
      </div>
    </motion.section>
  );
}
