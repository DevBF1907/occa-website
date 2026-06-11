"use client";

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Play } from 'lucide-react';

export const HeroSection = () => {
  const [videoKey, setVideoKey] = useState(0);

  const reloadVideo = () => setVideoKey((k) => k + 1);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <iframe
          key={videoKey}
          src="https://www.youtube.com/embed/V4pausDurSI?autoplay=1&mute=1&loop=1&playlist=V4pausDurSI&controls=0&modestbranding=1&rel=0&playsinline=1&enablejsapi=1&iv_load_policy=3"
          title="OCCA Space"
          className="absolute left-1/2 top-1/2 h-[120vh] w-[120vw] -translate-x-1/2 -translate-y-1/2 opacity-50 grayscale transition-opacity duration-1000 pointer-events-none mix-blend-luminosity"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-brand-black/60" />
        <div className="absolute inset-0 bg-brand-black/40" />
      </div>

      <div className="relative z-10 text-center px-6 translate-y-36">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <button className="px-12 py-5 bg-brand-white text-brand-black text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-brand-rust hover:text-brand-white transition-all duration-500 hover-trigger">
              INICIAR JORNADA
            </button>
            <button onClick={reloadVideo} className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.3em] text-brand-white hover-trigger group">
              <span className="w-10 h-10 rounded-full border border-brand-white/20 flex items-center justify-center group-hover:bg-brand-white group-hover:text-brand-black transition-all duration-500">
                <Play className="w-3 h-3 fill-current ml-1" />
              </span>
              VER MANIFESTO
            </button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-12 left-12 hidden md:block z-10">
        <div className="flex items-center gap-6">
          <div className="w-px h-12 bg-brand-gray-3" />
          <div className="text-[10px] font-bold uppercase tracking-widest text-brand-gray-5">
            LOCALIZAÇÃO / OLINDA, PE <br />
            STATUS / ECOSSISTEMA ATIVO
          </div>
        </div>
      </div>
    </section>
  );
};
