"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeader from "./SectionHeader";
import { cvData } from "@/data/cv";

export default function ExperienceCubes() {
  return (
    <motion.section
      id="experiencia"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className="py-24 px-6 md:px-12 max-w-5xl mx-auto"
    >
      <SectionHeader label="Trayectoria" title="Experiencia Laboral" />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {cvData.experience.map((job, i) => (
          <motion.div
            key={job.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <Link href={`/experiencia/${job.slug}`}>
              <motion.div
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="aspect-square bg-white rounded-sm shadow-[4px_4px_0_rgba(10,22,40,0.08)] hover:shadow-[6px_6px_0_rgba(201,162,39,0.2)] border border-gold/20 hover:border-gold flex items-center justify-center p-4 text-center cursor-pointer transition-all duration-200 group"
              >
                <span className="font-serif text-base md:text-lg font-bold text-navy group-hover:text-gold transition-colors leading-tight">
                  {job.company}
                </span>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </div>
      <p className="text-center text-sm text-gray mt-6">
        Hacé clic en cada empresa para ver el detalle
      </p>
    </motion.section>
  );
}
