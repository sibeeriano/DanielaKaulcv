"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { cvData } from "@/data/cv";

export default function Profile() {
  return (
    <motion.section
      id="perfil"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="py-24 px-6 md:px-12 max-w-4xl mx-auto"
    >
      <SectionHeader label="Sobre mí" title="Perfil Profesional" />
      <div className="bg-white p-8 md:p-12 rounded shadow-lg border-l-4 border-gold">
        {cvData.profile.map((paragraph, i) => (
          <p
            key={i}
            className={`text-lg text-navy-light leading-relaxed ${
              i > 0 ? "mt-4" : ""
            }`}
          >
            {paragraph}
          </p>
        ))}
      </div>
    </motion.section>
  );
}
