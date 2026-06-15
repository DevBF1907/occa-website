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
  {
    id: 'cooccaspace',
    name: 'Co.OCCA.Space',
    description: 'Infraestrutura administrativa — coworking, coliving e espaços para criar.',
    link: '/services/cooccaspace',
    image: '/occa-social.png'
  },
  {
    id: 'open-innovation',
    name: 'OCCA Open Innovation',
    description: 'Produtos e Serviços de Inovação Aberta para empresas e instituições.',
    link: '/services/occaopeninovation',
    image: '/occasulo.png'
  },
  {
    id: 'academy',
    name: 'OCCA Academy',
    description: 'Programas educacionais — cursos, bootcamps e residências.',
    link: '/ecosystem/academy',
    image: '/occa-academy.png'
  },
  {
    id: 'occasulo',
    name: 'OCCAsulo',
    description: 'Incubadora distribuída para territórios — impacto local e global.',
    link: '/ecosystem/occasulo'
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
        {INITIATIVES.map((item) => (
          <a
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="group relative overflow-hidden border border-brand-white/5 hover-trigger cursor-pointer h-[600px] flex flex-col justify-end p-8"
          >
            {item.image ? (
              <div className="absolute inset-x-0 top-0 bottom-36 flex items-center justify-center px-6 pt-8 pb-4 md:px-10 md:pt-12">
                <img
                  src={item.image}
                  alt={item.name}
                  className="max-w-full max-h-full w-auto h-auto object-contain object-center grayscale opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/40 to-brand-black/20" />
              </div>
            ) : (
              <div className="absolute inset-0 bg-brand-gray-1/30 group-hover:bg-brand-gray-1/50 transition-colors" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black/70 via-transparent to-transparent" />
            <div className="relative z-10">
              <h3 className="text-4xl font-display uppercase tracking-tight text-brand-white">
                {item.name}
              </h3>
              <div className="flex items-center gap-4 text-brand-white opacity-0 group-hover:opacity-100 transition-opacity mt-6">
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
