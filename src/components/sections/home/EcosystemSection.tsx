"use client";

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Hexagon, Circle, Triangle, Square } from 'lucide-react';
import { SectionLabel } from '@/components/shared/SectionLabel';

interface Initiative {
  id: string;
  name: string;
  description?: string;
  link?: string;
  icon: React.ElementType;
  gradient: string;
}

const INITIATIVES: Initiative[] = [
  {
    id: 'social-club',
    name: 'OCCA Social Club',
    icon: Hexagon,
    gradient: 'from-amber-500/20 via-amber-500/5 to-transparent',
  },
  {
    id: 'occasulo',
    name: 'OccaSulO',
    icon: Circle,
    gradient: 'from-emerald-500/20 via-emerald-500/5 to-transparent',
  },
  {
    id: 'academy',
    name: 'OCCA Academy',
    icon: Triangle,
    gradient: 'from-sky-500/20 via-sky-500/5 to-transparent',
  },
  {
    id: 'coworking-coliving',
    name: 'Coworking & Coliving',
    icon: Square,
    gradient: 'from-violet-500/20 via-violet-500/5 to-transparent',
  },
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
        {INITIATIVES.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.id}
              href={item.link}
              className="group relative overflow-hidden border border-brand-white/5 hover:border-brand-white/20 transition-all duration-500 cursor-pointer block hover-trigger h-[400px] flex flex-col items-center justify-center"
            >
              <div className={`absolute inset-0 bg-gradient-to-b ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

              <div className="relative z-10 flex flex-col items-center text-center px-8">
                <div className="mb-8 text-brand-white/20 group-hover:text-brand-white/40 transition-all duration-500 group-hover:scale-110">
                  <Icon className="w-24 h-24 md:w-32 md:h-32 stroke-[1]" />
                </div>
                <h3 className="text-2xl md:text-3xl font-display uppercase tracking-tight text-brand-white/90 group-hover:text-brand-white transition-colors">
                  {item.name}
                </h3>
                <div className="flex items-center gap-3 text-brand-white/30 group-hover:text-brand-white/60 transition-all mt-6 opacity-0 group-hover:opacity-100">
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em]">EXPLORAR</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};
