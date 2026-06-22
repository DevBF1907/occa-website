import React from 'react';
import Image from 'next/image';
import { SectionLabel } from '@/components/shared/SectionLabel';

export const ManifestoSection = () => {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-brand-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <SectionLabel>O MANIFESTO</SectionLabel>
          <h2 className="text-4xl md:text-6xl font-display leading-tight uppercase mb-8">
            NÃO SOMOS APENAS UM LOCAL. <br />
            SOMOS UM <span className="italic font-serif text-brand-gray-5 lowercase">movimento</span>.
          </h2>
          <p className="text-base text-brand-white leading-relaxed mb-8">
            A OCCA nasce da necessidade de reimaginar como a criatividade é cultivada, infraestruturada e distribuída. Em Olinda, lar de tradição e inovação, construímos o solo fértil para a próxima geração de criadores.
          </p>
          <div className="grid grid-cols-2 gap-8 mt-12">
            <div>
              <h4 className="text-2xl font-display uppercase mb-3 tracking-tight">01 / INOVAÇÃO</h4>
              <p className="text-xs text-brand-white/80 leading-relaxed tracking-wider">repensar, experimentar e criar novas formas de fazer.</p>
            </div>
            <div>
              <h4 className="text-2xl font-display uppercase mb-3 tracking-tight">02 / ECONOMIA CRIATIVA</h4>
              <p className="text-xs text-brand-white/80 leading-relaxed tracking-wider">gerar novas cadeias de valor.</p>
            </div>
            <div>
              <h4 className="text-2xl font-display uppercase mb-3 tracking-tight">03 / TECNOLOGIA</h4>
              <p className="text-xs text-brand-white/80 leading-relaxed tracking-wider">ferramenta e engenharia digital para transformação social.</p>
            </div>
            <div>
              <h4 className="text-2xl font-display uppercase mb-3 tracking-tight">04 / SUSTENTABILIDADE</h4>
              <p className="text-xs text-brand-white/80 leading-relaxed tracking-wider">pensamento de impacto local e global como centro.</p>
            </div>
          </div>
          <div className="mt-8 p-4 border-l-4 border-brand-accent bg-brand-gray-1/40">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-accent">FORMAÇÃO:</span>
            <p className="text-xs text-brand-white/80 mt-1 tracking-wider">Formação de pessoas para o contexto dos desafios contemporâneos</p>
          </div>
        </div>
        <div className="relative aspect-square overflow-hidden group">
          <img
            src="/logo-occa.png"
            alt="OCCA Logo"
            className="w-full h-full object-contain p-12 transition-transform duration-1000 group-hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};
