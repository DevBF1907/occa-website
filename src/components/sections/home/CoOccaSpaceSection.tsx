"use client";

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Laptop, Home, Compass } from 'lucide-react';
import { SectionLabel } from '@/components/shared/SectionLabel';

interface SpaceCard {
  id: string;
  number: string;
  category: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  icon: React.ReactNode;
}

const CARDS: SpaceCard[] = [
  {
    id: 'coworking',
    number: '01',
    category: 'INFRA / PRODUÇÃO',
    title: 'COWORKING',
    description: 'Estações de trabalho dinâmicas e salas equipadas para criadores, nômades e equipes inovadoras.',
    features: [
      'Estações Flexíveis & Dedicadas',
      'Salas de Reunião Climatizadas',
      'Internet de Fibra e Alta Velocidade',
      'Acesso ao Networking do Ecossistema'
    ],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2070',
    icon: <Laptop className="w-5 h-5 text-brand-white/60" />,
  },
  {
    id: 'coliving',
    number: '02',
    category: 'HOSPEDAGEM / CONEXÃO',
    title: 'COLIVING',
    description: 'Residência compartilhada em Olinda que equilibra privacidade, convívio coletivo e inspiração diária.',
    features: [
      'Quartos Individuais & Suítes',
      'Áreas Comuns & Cozinha Compartilhada',
      'Integração com Eventos da Casa',
      'Localização Histórica & Segura'
    ],
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=2070',
    icon: <Home className="w-5 h-5 text-brand-white/60" />,
  },
  {
    id: 'imersoes',
    number: '03',
    category: 'VIVÊNCIA / ACELERAÇÃO',
    title: 'IMERSÕES',
    description: 'Programas intensivos de desenvolvimento, residências artísticas e bootcamps que unem teoria, prática e cultura.',
    features: [
      'Residências Artísticas e Tecnológicas',
      'Bootcamps de Inovação Prática',
      'Mentorias Especializadas Locais',
      'Conexão Profunda com DNA de Olinda'
    ],
    image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=2070',
    icon: <Compass className="w-5 h-5 text-brand-white/60" />,
  }
];

export const CoOccaSpaceSection = () => {
  return (
    <section id="cooccaspace" className="py-40 px-6 md:px-12 max-w-[1800px] mx-auto border-t border-brand-white/5 scroll-mt-24">
      <div className="flex flex-col lg:flex-row justify-between items-start mb-24 gap-12">
        <div className="max-w-3xl">
          <SectionLabel>SERVIÇOS</SectionLabel>
          <h2 className="text-[8vw] md:text-[5vw] font-display uppercase leading-[0.9] tracking-tighter mb-8">
            COOCCASPACE <br />
            <span className="italic font-serif text-brand-gray-5 lowercase">coworking, coliving & imersões</span>
          </h2>
        </div>
        <div className="max-w-xl lg:mt-12">
          <p className="text-brand-gray-5 text-sm uppercase tracking-[0.15em] leading-relaxed">
            Uma infraestrutura de hospitalidade e produtividade desenhada especificamente para mentes criativas. Unimos a atmosfera inspiradora de Olinda à ferramentas de alta performance para impulsionar seus projetos.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {CARDS.map((card, idx) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="group relative h-[650px] overflow-hidden border border-brand-white/5 flex flex-col justify-between p-8 hover:border-brand-white/20 transition-all duration-500 cursor-pointer bg-brand-gray-1/10"
          >
            {/* Background Image with Zoom & Opacity effects */}
            <div className="absolute inset-0 z-0">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover grayscale opacity-20 group-hover:opacity-40 group-hover:scale-105 transition-all duration-[1200ms] ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/60 to-transparent" />
            </div>

            {/* Header info */}
            <div className="relative z-10 flex justify-between items-start">
              <div>
                <span className="text-[10px] font-mono font-bold tracking-[0.3em] text-brand-white/40 block mb-2">
                  {card.category}
                </span>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-mono text-brand-rust font-bold">{card.number}</span>
                  <div className="h-px w-6 bg-brand-rust/50" />
                </div>
              </div>
              <div className="p-3 border border-brand-white/10 rounded-full bg-brand-black/30 backdrop-blur-sm group-hover:border-brand-white/30 transition-colors">
                {card.icon}
              </div>
            </div>

            {/* Content & features */}
            <div className="relative z-10 mt-auto">
              <h3 className="text-4xl md:text-5xl font-display uppercase tracking-tight text-brand-white mb-4 group-hover:text-brand-white transition-colors">
                {card.title}
              </h3>
              <p className="text-xs text-brand-gray-5 mb-8 tracking-widest uppercase leading-relaxed max-w-sm">
                {card.description}
              </p>

              {/* Feature list */}
              <ul className="space-y-3 mb-8 border-t border-brand-white/5 pt-6 opacity-0 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-60 transition-all duration-700 ease-out">
                {card.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-3 text-[10px] font-mono text-brand-white/60 tracking-wider uppercase">
                    <div className="w-1 h-1 bg-brand-rust rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Action Indicator */}
              <div className="flex items-center gap-4 text-brand-white group-hover:translate-x-1 transition-transform duration-300">
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em]">SOLICITAR ACESSO</span>
                <div className="w-8 h-8 rounded-full border border-brand-white/20 flex items-center justify-center bg-brand-black/40 group-hover:bg-brand-white group-hover:text-brand-black transition-colors duration-500">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
