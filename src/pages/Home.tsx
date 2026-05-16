import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Globe, Zap, Users, Play } from 'lucide-react';
import { Layout } from '../components/Layout';
import { SectionLabel } from '../components/CoreUI';
import { PROGRAMS } from '../lib/data';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://www.youtube.com/embed/V4pausDurSI?autoplay=1&mute=1&loop=1&playlist=V4pausDurSI&controls=0&modestbranding=1&rel=0&playsinline=1&enablejsapi=1&iv_load_policy=3"
          title="OCCA Space"
          className="absolute left-1/2 top-1/2 h-[120vh] w-[120vw] -translate-x-1/2 -translate-y-1/2 opacity-50 grayscale transition-opacity duration-1000 pointer-events-none"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent" />
      </div>

      <div className="relative z-10 text-center px-6 translate-y-36">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <button className="px-12 py-5 bg-brand-white text-brand-black text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-brand-rust hover:text-brand-white transition-all duration-500 hover-trigger">
              INICIAR JORNADA
            </button>
            <button className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.3em] text-brand-white hover-trigger group">
              <span className="w-10 h-10 rounded-full border border-brand-white/20 flex items-center justify-center group-hover:bg-brand-white group-hover:text-brand-black transition-all">
                <Play className="w-3 h-3 fill-current ml-1" />
              </span>
              VER MANIFESTO
            </button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-12 left-12 hidden md:block">
        <div className="flex items-center gap-6">
          <div className="w-px h-12 bg-brand-gray-3" />
          <div className="text-[10px] font-bold uppercase tracking-widest text-brand-gray-5">
            LOCATION / OLINDA, PE <br />
            STATUS / LIVE ECOSYSTEM
          </div>
        </div>
      </div>
    </section>
  );
};

const Manifesto = () => {
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

const MandalaOCCA = () => {
  return (
    <section className="py-40 bg-brand-gray-1/20 border-y border-brand-white/5 relative overflow-hidden">
       {/* Background circle decoration */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] aspect-square border border-brand-white/5 rounded-full pointer-events-none" />
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] aspect-square border border-brand-white/5 rounded-full pointer-events-none" />
       
       <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <SectionLabel className="justify-center">MANDALA OCCA</SectionLabel>
          <h2 className="text-6vw md:text-5vw font-display uppercase tracking-tighter mb-24 lg:mb-40">
            UM ECOSSISTEMA <br /> <span className="italic font-serif text-brand-gray-5 lowercase">radial & conectado</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
            {['HQ', 'SOCIAL CLUB', 'ACADEMY', 'LAB', 'MAKER SPACE', 'ARTELIER', 'LIVRARIA', 'CONSULTING'].map((item, idx) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="aspect-square border border-brand-white/10 flex flex-col items-center justify-center group hover:bg-brand-white transition-all duration-500 hover-trigger"
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

const ProgramsGrid = () => {
  return (
    <section className="py-40 px-6 md:px-12 max-w-[1800px] mx-auto">
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
            viewport={{ once: true }}
            className="group relative h-[600px] overflow-hidden border border-brand-white/5 flex flex-col justify-end p-8 hover-trigger"
          >
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

export default function Home() {
  return (
    <Layout>
      <Hero />
      
      {/* Marquee */}
      <div className="border-y border-brand-white/5 py-8 overflow-hidden relative bg-brand-gray-1/20">
        <div className="flex marquee-animation whitespace-nowrap">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center">
              <span className="text-[10px] font-bold tracking-[.4em] uppercase text-brand-white mx-12">OPEN CREATIVE COMMUNITY ALLIANCE</span>
              <span className="text-brand-gray-3 tracking-widest opacity-20">///</span>
              <span className="text-[10px] font-bold tracking-[.4em] uppercase text-brand-white mx-12 italic font-serif">OLINDA, BRAZIL</span>
              <span className="text-brand-gray-3 tracking-widest opacity-20">///</span>
            </div>
          ))}
        </div>
      </div>

      <Manifesto />
      <MandalaOCCA />
      <ProgramsGrid />

      {/* Community CTA */}
      <section className="py-40 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <SectionLabel className="justify-center">COMUNIDADE</SectionLabel>
          <h2 className="text-5xl md:text-8xl font-display uppercase tracking-tighter mb-12">
            FAÇA PARTE DA <br /> <span className="italic font-serif text-brand-gray-5 lowercase">aliança</span>
          </h2>
          <p className="text-brand-gray-5 text-sm uppercase tracking-[0.2em] max-w-xl mx-auto mb-16 leading-relaxed">
            Seja como membro individual, parceiro institucional ou residente. O futuro é uma construção coletiva.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <button className="w-full md:w-auto px-16 py-6 bg-brand-white text-brand-black text-xs font-bold uppercase tracking-[0.3em] hover:bg-brand-rust hover:text-brand-white transition-all duration-500 hover-trigger">
              MEMBERSHIP
            </button>
            <button className="w-full md:w-auto px-16 py-6 border border-brand-white/20 text-xs font-bold uppercase tracking-[0.3em] hover:bg-brand-white hover:text-brand-black transition-all duration-500 hover-trigger">
              PARCERIAS
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
