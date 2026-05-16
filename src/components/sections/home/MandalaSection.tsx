"use client";

import React from 'react';
import { motion } from 'motion/react';
import { SectionLabel } from '@/components/shared/SectionLabel';

export const MandalaSection = () => {
  return (
    <section className="py-40 bg-brand-gray-1/20 border-y border-brand-white/5 relative overflow-hidden">
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square border border-brand-white/5 rounded-full pointer-events-none" />
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] aspect-square border border-brand-white/5 rounded-full pointer-events-none" />
       
       <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <SectionLabel className="justify-center">MANDALA OCCA</SectionLabel>
          <h2 className="text-[6vw] md:text-[5vw] font-display uppercase tracking-tighter mb-24 lg:mb-40">
            UM ECOSSISTEMA <br /> <span className="italic font-serif text-brand-gray-5 lowercase">radial & conectado</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
            {['HQ', 'SOCIAL CLUB', 'ACADEMY', 'LAB', 'MAKER SPACE', 'ARTELIER', 'LIVRARIA', 'CONSULTING'].map((item, idx) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="aspect-square border border-brand-white/10 flex flex-col items-center justify-center group hover:bg-brand-white transition-all duration-500 hover-trigger cursor-pointer"
              >
                <span className="text-[10px] font-bold text-brand-gray-5 group-hover:text-brand-gray-4 mb-4">0{idx + 1}</span>
                <span className="text-xl md:text-2xl font-display uppercase tracking-tight group-hover:text-brand-black transition-colors">{item}</span>
                <div className="w-0 h-px bg-brand-black mt-4 group-hover:w-8 transition-all" />
              </motion.div>
            ))}
          </div>
       </div>
    </section>
  );
};
