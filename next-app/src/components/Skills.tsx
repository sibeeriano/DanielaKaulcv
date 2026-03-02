"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { cvData } from "@/data/cv";

export default function Skills() {
  return (
    <motion.section
      id="habilidades"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="py-24 px-6 md:px-12 max-w-4xl mx-auto"
    >
      <SectionHeader label="Fortalezas" title="Habilidades y Competencias" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cvData.skills.map((skill, i) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="bg-white px-5 py-4 rounded text-navy font-medium text-[0.95rem] shadow-sm border border-gold/20 hover:border-gold hover:shadow-lg hover:shadow-gold/15 transition-all cursor-default"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.section>
  );
}
