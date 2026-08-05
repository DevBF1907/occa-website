"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const HeroSection = () => {
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowText(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://www.youtube.com/embed/V4pausDurSI?autoplay=1&mute=1&loop=1&playlist=V4pausDurSI&controls=0&modestbranding=1&rel=0&playsinline=1&enablejsapi=1&iv_load_policy=3"
          title="OCCA Space"
          className="absolute left-1/2 top-1/2 h-[120vh] w-[120vw] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-1000 pointer-events-none"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>

      <AnimatePresence>
        {showText && (
          <div className="relative z-10 text-center px-6 translate-y-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-sm md:text-base uppercase tracking-[0.3em] text-brand-white/80 mb-8">
                Sem medo do erro, sem pavor de definições. Nós somos
              </p>
              <h1 className="text-[12vw] md:text-[8vw] font-display uppercase leading-[0.85] tracking-tighter mb-12 text-brand-white">
                um ecossistema <br />
                <span className="italic font-serif text-brand-gray-5 lowercase">que transforma o ser.</span>
              </h1>
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12">
                <button className="px-12 py-5 bg-brand-white text-brand-black text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-brand-accent hover:text-brand-white transition-all duration-500 hover-trigger">
                  SAIBA MAIS
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="absolute bottom-12 left-12 hidden md:block z-10">
        <div className="flex items-center gap-6">
          <div className="w-px h-12 bg-brand-gray-3" />
          <div className="text-[10px] font-bold uppercase tracking-widest text-brand-white/80">
            <a href="https://maps.google.com/?q=Rua+Manoel+Borba+285+Carmo+Olinda+PE" target="_blank" rel="noopener noreferrer" className="hover:text-brand-white transition-colors">
              LOCATION / OLINDA - PE<br />CARMO - RUA MANOEL BORBA, 285
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 right-12 hidden md:block z-10">
        <div className="flex items-center gap-6">
          <div className="text-[10px] font-bold uppercase tracking-widest text-brand-white/80 text-right">
            <a href="/about" className="hover:text-brand-white transition-colors">
              INSTITUTO E ASSOCIAÇÃO<br />CIÊNCIA / TECNOLOGIA / INOVAÇÃO
            </a>
          </div>
          <div className="w-px h-12 bg-brand-gray-3" />
        </div>
      </div>
    </section>
  );
};
