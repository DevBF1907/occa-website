import React from 'react';
import { Layout } from '../components/Layout';
import { SectionLabel } from '../components/CoreUI';
import { PROGRAMS } from '../lib/data';
import { ArrowRight } from 'lucide-react';

export default function Ecosystem() {
  return (
    <Layout>
      <div className="pt-48 pb-32 px-6 md:px-12 max-w-7xl mx-auto">
        <SectionLabel>PROGRAMAS / INFRAESTRUTURA</SectionLabel>
        <h1 className="text-7xl md:text-[140px] font-display leading-[0.8] tracking-tighter uppercase mb-16">
          LIVE <br /> <span className="italic font-serif text-brand-gray-5 lowercase">ecosystem</span>
        </h1>
        <p className="text-lg text-brand-gray-5 leading-relaxed uppercase tracking-[0.1em] max-w-2xl mb-24">
          A OCCA opera através de nodos de especialidade. Cada programa é uma porta de entrada para recursos específicos, conectando talento e infraestrutura.
        </p>

        <div className="grid grid-cols-1 gap-4">
           {PROGRAMS.map((program, idx) => (
             <div key={idx} className="group border border-brand-white/10 p-12 flex flex-col md:flex-row gap-12 items-center hover:bg-brand-gray-2/30 transition-all duration-500 hover-trigger">
                <div className="w-full md:w-1/3 aspect-[4/3] bg-brand-gray-2 grayscale group-hover:grayscale-0 transition-all overflow-hidden border border-brand-white/5">
                   <img src={program.image} alt={program.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="flex-1">
                   <span className="text-[10px] font-bold text-brand-rust uppercase tracking-[0.5em] mb-4 block">{program.category} — {program.status}</span>
                   <h3 className="text-5xl font-display uppercase tracking-tight text-brand-white mb-6 underline underline-offset-8 decoration-1 decoration-brand-white/20 group-hover:decoration-brand-white transition-all">{program.name}</h3>
                   <p className="text-brand-gray-5 text-sm leading-relaxed mb-8 uppercase tracking-widest max-w-xl">{program.description}</p>
                   <button className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-brand-white group-hover:text-brand-rust transition-colors">
                      SITE SATÉLITE <ArrowRight className="w-4 h-4" />
                   </button>
                </div>
             </div>
           ))}
        </div>
      </div>
    </Layout>
  );
}
