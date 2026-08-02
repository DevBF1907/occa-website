"use client";

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { SectionLabel } from '@/components/shared/SectionLabel';

interface Initiative {
  id: string;
  name: string;
  description: string;
  link: string;
  image?: string;
}

const INITIATIVES: Initiative[] = [
  { id: 'social-club', name: 'OCCA Social Club', description: 'Espaço de convivência e networking para membros', image: '/occa-social-club.png', link: '/services/social-club' },
  { id: 'occasulo', name: 'OccaSulO', description: 'Conexão sul-americana de inovação', image: '/occasulo-transparente.png', link: '/services/occasulo' },
  { id: 'academy', name: 'OCCA Academy', description: 'Formação e capacitação em criatividade', image: '/occa-academy-transparente.png', link: '/services/academy' },
  { id: 'coworking-coliving', name: 'Coworking & Coliving', description: 'Espaços compartilhados para viver e trabalhar', link: '/services/coworking-coliving' },
];

export const EcosystemSection = () => {
  return (
    <section id="ecossistema" className="py-40 px-6 md:px-12 max-w-[1800px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
        <div className="max-w-2xl">
          <SectionLabel>PROGRAMAS</SectionLabel>
          <h2 className="text-[8vw] md:text-[5vw] font-display uppercase leading-[0.9] tracking-tighter">
            INICIATIVAS <br /> DE OCCA
          </h2>
        </div>
        <button className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-gray-5 hover:text-brand-white transition-colors border-b border-brand-gray-3 pb-2 hover-trigger">
          EXPLORAR ECOSSISTEMA
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {INITIATIVES.map((item) => (
          <a
            key={item.id}
            href={item.link}
            className="group relative overflow-hidden border border-brand-white/5 hover:border-brand-white/20 transition-all duration-500 cursor-pointer block hover-trigger h-[500px]"
          >
            {item.image ? (
              <div className="absolute inset-0 bg-brand-black">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain grayscale opacity-40 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/40 to-brand-black/20" />
              </div>
            ) : (
              <div className="absolute inset-0 bg-brand-gray-1/30 group-hover:bg-brand-gray-1/50 transition-colors" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-transparent to-transparent" />
            <div className="relative z-10 h-full flex flex-col justify-end p-8">
              <h3 className="text-3xl md:text-4xl font-display uppercase tracking-tight text-brand-white group-hover:text-brand-white transition-colors mb-3">
                {item.name}
              </h3>
              <p className="text-xs text-brand-white/70 leading-relaxed max-w-xs">
                {item.description}
              </p>
              <div className="flex items-center gap-3 text-brand-white/50 group-hover:text-brand-white transition-all mt-6 opacity-0 group-hover:opacity-100">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em]">EXPLORAR</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
