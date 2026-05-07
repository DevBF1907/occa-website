import React from 'react';
import { motion } from 'motion/react';
import { Layout } from '../components/Layout';
import { SectionLabel } from '../components/CoreUI';
import { TEAM } from '../lib/data';

const TIMELINE = [
  { year: '2020', title: 'A Semente', description: 'Concepção do ecossistema em meio à transformação digital global.' },
  { year: '2022', title: 'Fundação', description: 'Inauguração do HQ em Olinda e primeiros editais de residência.' },
  { year: '2024', title: 'Expansão', description: 'Consolidação do Lab de Inovação e parcerias internacionais.' },
  { year: '2026', title: 'O Futuro', description: 'Lançamento da plataforma digital unificada e expansão para o Hub Nordeste.' },
];

export default function About() {
  return (
    <Layout>
      <section className="pt-48 pb-32 px-6 md:px-12 max-w-7xl mx-auto">
        <SectionLabel>INSTITUCIONAL / SOBRE</SectionLabel>
        <h1 className="text-7xl md:text-[140px] font-display leading-[0.8] tracking-tighter uppercase mb-24">
          NOSSA <br /> <span className="italic font-serif text-brand-gray-5 lowercase">história</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <p className="text-2xl text-brand-white leading-tight font-serif italic">
            "A OCCA é o resultado de uma visão coletiva que entende Olinda não apenas como um patrimônio histórico, mas como um laboratório vivo de inovação cultural."
          </p>
          <p className="text-sm text-brand-gray-5 leading-relaxed uppercase tracking-widest">
            Nascida em Pernambuco, a aliança conecta a tradição artesanal com o pensamento de ponta da indústria criativa global. Nossa missão é prover a infraestrutura necessária para que o talento regional atinja escala global sem perder sua essência.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-40 bg-brand-gray-1/30 border-y border-brand-white/5">
        <div className="max-w-[1800px] mx-auto px-6 md:px-12">
          <SectionLabel>LINHA DO TEMPO</SectionLabel>
          <div className="flex flex-col md:flex-row gap-4 mt-24">
            {TIMELINE.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="flex-1 p-12 border border-brand-white/10 group hover:bg-brand-white transition-all duration-700 hover-trigger"
              >
                <span className="text-5xl font-display text-brand-gray-4 mb-8 block group-hover:text-brand-gray-3 transition-colors">{item.year}</span>
                <h3 className="text-2xl font-display uppercase tracking-tight text-brand-white group-hover:text-brand-black mb-4 transition-colors">{item.title}</h3>
                <p className="text-xs text-brand-gray-5 group-hover:text-brand-gray-4 leading-relaxed uppercase tracking-widest transition-colors">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-40 px-6 md:px-12 max-w-7xl mx-auto">
        <SectionLabel>LIDERANÇA</SectionLabel>
        <h2 className="text-6xl font-display uppercase tracking-tighter mb-24">TEAM & ADVISORS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
           {TEAM.map((member, idx) => (
             <div key={idx} className="group hover-trigger">
                <div className="aspect-square bg-brand-gray-2 mb-8 overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                   <img src={member.image} alt={member.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <h4 className="text-2xl font-display uppercase tracking-tight text-brand-white mb-2">{member.name}</h4>
                <p className="text-[10px] font-bold text-brand-rust uppercase tracking-[0.4em] mb-4">{member.role}</p>
                <p className="text-xs text-brand-gray-5 italic font-serif leading-relaxed">{member.bio}</p>
             </div>
           ))}
        </div>
      </section>
    </Layout>
  );
}
