"use client";

import { motion } from "framer-motion";
import { cvData } from "@/data/cv";

export default function Hero() {
  return (
    <header className="min-h-screen flex items-center justify-center px-6 md:px-12 pt-32 pb-16 relative">
      <div className="text-center max-w-3xl">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-block px-4 py-1.5 bg-gradient-to-br from-gold to-gold-soft text-navy text-xs font-semibold tracking-[0.2em] uppercase rounded-sm mb-6"
        >
          {cvData.badge}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-navy mb-2 tracking-tight"
        >
          {cvData.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl text-gold font-semibold mb-4"
        >
          {cvData.title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-gray mb-10"
        >
          {cvData.location}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex gap-4 justify-center flex-wrap mb-8"
        >
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-8 py-3.5 font-semibold text-sm rounded-sm bg-navy text-cream border-2 border-navy hover:bg-transparent hover:text-navy transition-all"
          >
            Contacto
          </a>
          <a
            href={cvData.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 font-semibold text-sm rounded-sm bg-transparent text-navy border-2 border-gold hover:bg-gold transition-all"
          >
            LinkedIn
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-sm text-gray tracking-widest"
        >
          {cvData.sectors.join(" · ")}
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gold rounded-xl relative overflow-hidden">
          <motion.div
            animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute top-2 left-1/2 -translate-x-1/2 w-1 h-2 bg-gold rounded"
          />
        </div>
      </motion.div>
    </header>
  );
}
