"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { cvData } from "@/data/cv";

export default function Timeline() {
  return (
    <motion.section
      id="experiencia"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="py-24 px-6 md:px-12 max-w-4xl mx-auto"
    >
      <SectionHeader label="Trayectoria" title="Experiencia Laboral" />
      <div className="relative pl-0 md:pl-4">
        {/* Timeline line */}
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold to-gold-soft rounded hidden md:block" />

        {cvData.experience.map((job, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="relative pl-8 md:pl-12 pb-12 last:pb-0"
          >
            {/* Dot */}
            <div className="absolute left-[-5px] top-1 w-3.5 h-3.5 bg-gold rounded-full border-[3px] border-cream shadow-[0_0_0_2px] shadow-gold hidden md:block" />

            <p className="text-sm font-semibold text-gold mb-1">{job.date}</p>
            <h3 className="font-serif text-xl font-bold text-navy mb-1">
              {job.company}
            </h3>
            <p className="text-gray mb-3">
              <strong className="text-navy">{job.role}</strong>
            </p>
            <ul className="space-y-1.5">
              {job.tasks.map((task, j) => (
                <li
                  key={j}
                  className="text-navy-light text-[0.95rem] pl-5 relative before:content-['→'] before:absolute before:left-0 before:text-gold before:font-semibold"
                >
                  {task}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
