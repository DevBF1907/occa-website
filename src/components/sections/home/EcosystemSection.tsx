"use client";

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { SectionLabel } from '@/components/shared/SectionLabel';
import { PROGRAMS } from '@/lib/data';

export const EcosystemSection = () => {
  return (
    <section id="ecossistema" className="py-40 px-6 md:px-12 max-w-[1800px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
        <div className="max-w-2xl">
          <SectionLabel>PROGRAMAS</SectionLabel>
          <h2 className="text-[8vw] md:text-[5vw] font-display uppercase leading-[0.9] tracking-tighter">
            INFRAESTRUTURA <br /> CRIATIVA
          </h2>
        </div>
        <button className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-gray-5 hover:text-brand-white transition-colors border-b border-brand-gray-3 pb-2 hover-trigger">
          EXPLORAR ECOSSISTEMA
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {PROGRAMS.map((program) => (
          <motion.div 
            key={program.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="group relative h-[600px] overflow-hidden border border-brand-white/5 flex flex-col justify-end p-8 hover-trigger cursor-pointer"
          >
            {/* Standard img used to avoid next/image domain configuration issues currently */}
            <img 
              src={program.image} 
              alt={program.name}
              className="absolute inset-0 w-full h-full object-cover grayscale transition-transform duration-1000 group-hover:scale-110 opacity-40 group-hover:opacity-60"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent" />
            
            <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-4">
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-brand-white/40 mb-4 block">
                {program.category}
              </span>
              <h3 className="text-4xl font-display uppercase tracking-tight text-brand-white mb-6">
                {program.name}
              </h3>
              <p className="text-xs text-brand-gray-5 mb-8 line-clamp-2 uppercase tracking-widest leading-relaxed">
                {program.description}
              </p>
              <div className="flex items-center gap-4 text-brand-white opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em]">EXPLORAR</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
