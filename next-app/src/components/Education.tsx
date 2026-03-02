"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { cvData } from "@/data/cv";

export default function Education() {
  return (
    <motion.section
      id="formacion"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="py-24 px-6 md:px-12 max-w-4xl mx-auto"
    >
      <SectionHeader label="Estudios" title="Formación Académica" />
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="bg-white p-8 md:p-10 rounded shadow-lg flex items-start gap-8"
      >
        <div className="w-14 h-14 bg-gradient-to-br from-gold to-gold-soft rounded flex items-center justify-center text-2xl flex-shrink-0">
          📚
        </div>
        <div>
          <h3 className="font-serif text-2xl text-navy mb-1">
            {cvData.education.institution}
          </h3>
          <p className="font-semibold text-gold mb-1">{cvData.education.degree}</p>
          <p className="text-gray">{cvData.education.years}</p>
        </div>
      </motion.div>
    </motion.section>
  );
}
