"use client";

import React from 'react';
import { motion } from 'motion/react';
import { SectionLabel } from '@/components/shared/SectionLabel';

const MANDALA_ITEMS = [
  { label: 'HQ', angle: 0 },
  { label: 'SOCIAL CLUB', angle: 45 },
  { label: 'ACADEMY', angle: 90 },
  { label: 'LAB', angle: 135 },
  { label: 'MAKER SPACE', angle: 180 },
  { label: 'ARTELIER', angle: 225 },
  { label: 'LIVRARIA', angle: 270 },
  { label: 'CONSULTING', angle: 315 },
];

export const MandalaSection = () => {
  return (
    <section className="py-40 bg-brand-gray-1/20 border-y border-brand-white/5 relative overflow-hidden">
       {/* Animated radial rings */}
       <motion.div
         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square border border-brand-white/10 rounded-full pointer-events-none"
         animate={{ rotate: 360 }}
         transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
       />
       <motion.div
         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] aspect-square border border-dashed border-brand-white/5 rounded-full pointer-events-none"
         animate={{ rotate: -360 }}
         transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
       />
       <motion.div
         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] aspect-square border border-brand-white/10 rounded-full pointer-events-none"
         animate={{ rotate: 360 }}
         transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
       />
        
       <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <SectionLabel className="justify-center">MANDALA OCCA</SectionLabel>
          <h2 className="text-[6vw] md:text-[5vw] font-display uppercase tracking-tighter mb-16 lg:mb-24">
            UM ECOSSISTEMA <br /> <span className="italic font-serif text-brand-gray-5 lowercase">radial & conectado</span>
          </h2>

          {/* Radial Mandala */}
          <div className="relative w-full max-w-[600px] aspect-square mx-auto mb-16">
            {/* Center core */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-24 md:h-24 rounded-full bg-brand-white/10 border border-brand-white/20 flex items-center justify-center z-10"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span className="text-[8px] font-bold tracking-[0.2em] text-brand-white uppercase">OCCA</span>
            </motion.div>

            {/* Orbiting items */}
            {MANDALA_ITEMS.map((item, idx) => {
              const rad = (item.angle * Math.PI) / 180;
              const radius = 42;
              const x = Math.cos(rad) * radius;
              const y = Math.sin(rad) * radius;
              return (
                <motion.div
                  key={item.label}
                  className="absolute top-1/2 left-1/2 w-20 h-20 md:w-28 md:h-28 -ml-10 -md:-ml-14 -mt-10 -md:-mt-14"
                  initial={false}
                  animate={{
                    x: `${x}%`,
                    y: `${y}%`,
                  }}
                  transition={{ duration: 0.8, delay: idx * 0.05 }}
                  style={{ marginLeft: '-2.5rem', marginTop: '-2.5rem' }}
                >
                  <motion.div
                    className="w-full h-full rounded-full border border-brand-white/20 flex flex-col items-center justify-center bg-brand-black/60 backdrop-blur-sm hover:bg-brand-white hover:text-brand-black transition-colors duration-500 cursor-pointer group"
                    whileHover={{ scale: 1.15 }}
                  >
                    <span className="text-[8px] font-bold text-brand-white/50 group-hover:text-brand-black/50 mb-1">0{idx + 1}</span>
                    <span className="text-[10px] md:text-xs font-display uppercase tracking-tight text-brand-white group-hover:text-brand-black leading-tight text-center px-1">{item.label}</span>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          <a
            href="/about"
            className="inline-block px-12 py-4 border border-brand-white/20 text-xs font-bold uppercase tracking-[0.3em] hover:bg-brand-white hover:text-brand-black transition-all duration-500"
          >
            SOBRE
          </a>
       </div>
    </section>
  );
};
