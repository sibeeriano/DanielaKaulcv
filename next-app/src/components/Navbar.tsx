"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#perfil", label: "Perfil" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#formacion", label: "Formación" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-6 md:py-6 transition-all duration-300 bg-cream/90 backdrop-blur-md border-b border-navy/5 ${
        scrolled ? "py-3" : ""
      }`}
    >
      <a href="#" className="font-serif text-2xl font-bold text-navy">
        DBK
      </a>

      {/* Desktop menu */}
      <div className="hidden md:flex gap-10">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm font-medium text-gray hover:text-gold transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Mobile menu toggle */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden flex flex-col gap-1.5 p-1.5"
        aria-label="Menú"
      >
        <motion.span
          animate={{
            rotate: menuOpen ? 45 : 0,
            y: menuOpen ? 7 : 0,
          }}
          className="block w-6 h-0.5 bg-navy"
        />
        <motion.span
          animate={{ opacity: menuOpen ? 0 : 1 }}
          className="block w-6 h-0.5 bg-navy"
        />
        <motion.span
          animate={{
            rotate: menuOpen ? -45 : 0,
            y: menuOpen ? -7 : 0,
          }}
          className="block w-6 h-0.5 bg-navy"
        />
      </button>
    </motion.nav>

    {/* Mobile menu */}
    <AnimatePresence>
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-[60px] left-0 right-0 z-40 md:hidden bg-cream border-b border-navy/5 py-6 px-6 flex flex-col gap-6"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-navy font-medium hover:text-gold transition-colors"
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}
