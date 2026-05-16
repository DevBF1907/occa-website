import React from 'react';
import Image from 'next/image';
import { SectionLabel } from '@/components/shared/SectionLabel';

export const ManifestoSection = () => {
  return (
    <section className="py-40 px-6 md:px-12 max-w-7xl mx-auto border-t border-brand-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
        <div>
          <SectionLabel>O MANIFESTO</SectionLabel>
          <h2 className="text-4xl md:text-6xl font-display leading-tight uppercase mb-12">
            NÃO SOMOS APENAS UM LOCAL. <br />
            SOMOS UM <span className="italic font-serif text-brand-gray-5 lowercase">movimento</span>.
          </h2>
          <p className="text-lg text-brand-gray-5 leading-relaxed mb-8">
            A OCCA nasce da necessidade de reimaginar como a criatividade é cultivada, infraestruturada e distribuída. Em Olinda, lar de tradição e inovação, construímos o solo fértil para a próxima geração de criadores.
          </p>
          <div className="grid grid-cols-2 gap-12 mt-16">
            <div>
              <h4 className="text-3xl font-display uppercase mb-4 tracking-tight">01 / INOVAÇÃO</h4>
              <p className="text-xs text-brand-gray-5 leading-relaxed uppercase tracking-widest">Experimentalismo tecnológico como ferramenta de transformação social.</p>
            </div>
            <div>
              <h4 className="text-3xl font-display uppercase mb-4 tracking-tight">02 / CULTURA</h4>
              <p className="text-xs text-brand-gray-5 leading-relaxed uppercase tracking-widest">Preservação e reinvenção do DNA cultural brasileiro.</p>
            </div>
          </div>
        </div>
        <div className="relative aspect-square overflow-hidden group">
           {/* Using standard img to avoid next/image domain configuration issues out of the box, but ready to be upgraded */}
           <img 
            src="https://images.unsplash.com/photo-1542621334-a254cf47733d?auto=format&fit=crop&q=80&w=2070" 
            alt="Manifesto detail"
            className="w-full h-full object-cover grayscale transition-transform duration-1000 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-rust/20 mix-blend-overlay" />
          <div className="absolute bottom-8 left-8 right-8 p-8 border border-brand-white/20 bg-brand-black/40 backdrop-blur-md">
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] mb-2">INFRAESTRUTURA FÍSICA E DIGITAL</p>
            <p className="text-xs text-brand-gray-5">Uma arquitetura projetada para a colaboração radical.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
