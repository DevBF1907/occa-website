"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SectionLabel } from '@/components/shared/SectionLabel';
import { TEAM, PROGRAMS } from '@/lib/data';
import { MapPin, Target, Globe } from 'lucide-react';

const VALUES = [
  {
    icon: Target,
    title: 'MISSÃO',
    text: 'Cultivar um ecossistema onde criatividade, tecnologia e comunidade se encontram para gerar impacto local e global.',
  },
  {
    icon: Globe,
    title: 'VISÃO',
    text: 'Ser referência em inovação comunitária, provando que o desenvolvimento sustentável nasce da colaboração radical.',
  },
  {
    icon: MapPin,
    title: 'TERRITÓRIO',
    text: 'Situada no Sítio Histórico de Olinda — PE, a OCCA ocupa um casarão centenário que conecta tradição e futuro.',
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen bg-brand-black text-brand-white selection:bg-brand-white selection:text-brand-black">
        {/* Hero */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden border-b border-brand-white/5">
          <div className="absolute inset-0 z-0 flex items-center justify-center bg-brand-black">
            <img
              src="/logo-occa.png"
              alt=""
              className="w-3/4 h-auto max-w-[700px] opacity-[0.12]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-brand-black" />
          </div>

          <div className="relative z-10 text-center px-6 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 30, filter: 'blur(5px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-brand-accent mb-6 block">
                INSTITUCIONAL
              </span>
              <h1 className="text-6xl md:text-9xl font-display uppercase tracking-tighter mb-6 leading-none">
                SOBRE <span className="italic font-serif text-brand-gray-5 lowercase">nós</span>
              </h1>
              <p className="text-brand-white/60 text-sm uppercase tracking-[0.2em] max-w-lg mx-auto leading-relaxed">
                Olinda Creative Community Action — um ecossistema vivo de inovação e cultura.
              </p>
            </motion.div>
          </div>
        </section>

        {/* About Text */}
        <section className="py-32 px-6 md:px-12 max-w-5xl mx-auto">
          <SectionLabel>QUEM SOMOS</SectionLabel>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12">
            <div>
              <h2 className="text-4xl md:text-6xl font-display uppercase leading-tight mb-8">
                UM ECOSSISTEMA <span className="italic font-serif text-brand-gray-5 lowercase">que transforma</span>
              </h2>
            </div>
            <div className="space-y-6 text-brand-white/80 text-sm leading-relaxed">
              <p>
                A OCCA nasce da necessidade de reimaginar como a criatividade é cultivada, infraestruturada e distribuída. 
                Em Olinda, lar de tradição e inovação, construímos o solo fértil para a próxima geração de criadores, 
                empreendedores e agentes de transformação.
              </p>
              <p>
                Somos uma organização que opera na interseção entre tecnologia, cultura, educação e sustentabilidade. 
                Acreditamos que a inovação genuína acontece quando diferentes áreas do conhecimento colidem — e é 
                exatamente isso que cultivamos em nosso ecossistema.
              </p>
              <p>
                Da infraestrutura física de coworking e coliving aos programas educacionais, passando por iniciativas 
                de inovação aberta e incubação de territórios, cada programa da OCCA é desenhado para gerar impacto 
                real e duradouro.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-32 px-6 md:px-12 border-t border-brand-white/5 bg-brand-gray-1/20">
          <div className="max-w-5xl mx-auto">
            <SectionLabel className="justify-center">PRINCÍPIOS</SectionLabel>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              {VALUES.map((item) => (
                <div key={item.title} className="p-8 border border-brand-white/10 hover:border-brand-white/20 transition-colors">
                  <item.icon className="w-8 h-8 text-brand-accent mb-6" />
                  <h3 className="text-lg font-display uppercase tracking-tight mb-4">{item.title}</h3>
                  <p className="text-xs text-brand-white/70 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-32 px-6 md:px-12 max-w-5xl mx-auto">
          <SectionLabel>EQUIPE</SectionLabel>
          <h2 className="text-4xl md:text-6xl font-display uppercase leading-tight mt-12 mb-16">
            PESSOAS QUE <span className="italic font-serif text-brand-gray-5 lowercase">fazem</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TEAM.map((member) => (
              <div key={member.name} className="flex gap-6 p-8 border border-brand-white/10">
                <div className="relative w-20 h-20 shrink-0 overflow-hidden rounded-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover grayscale"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-display uppercase tracking-tight">{member.name}</h3>
                  <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-brand-accent block mt-1 mb-3">
                    {member.role}
                  </span>
                  <p className="text-xs text-brand-white/70 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Programs */}
        <section className="py-32 px-6 md:px-12 border-t border-brand-white/5 bg-brand-gray-1/20">
          <div className="max-w-5xl mx-auto text-center">
            <SectionLabel className="justify-center">PROGRAMAS</SectionLabel>
            <h2 className="text-4xl md:text-6xl font-display uppercase leading-tight mt-12 mb-6">
              CONHEÇA NOSSAS <span className="italic font-serif text-brand-gray-5 lowercase">iniciativas</span>
            </h2>
            <p className="text-brand-white/60 text-xs uppercase tracking-[0.2em] max-w-md mx-auto mb-16">
              Quatro frentes que estruturam o ecossistema OCCA.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
              {PROGRAMS.map((program) => (
                <Link
                  key={program.id}
                  href={program.link}
                  className="group p-6 border border-brand-white/10 hover:border-brand-white/30 transition-all duration-500"
                >
                  <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-brand-accent block mb-3">
                    {program.category}
                  </span>
                  <h3 className="text-xl font-display uppercase tracking-tight group-hover:text-brand-accent transition-colors mb-3">
                    {program.name}
                  </h3>
                  <p className="text-xs text-brand-white/70 leading-relaxed">{program.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 px-6 border-t border-brand-white/5">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-7xl font-display uppercase tracking-tighter mb-8">
              FAÇA PARTE DA <span className="italic font-serif text-brand-white/60 lowercase">aliança</span>
            </h2>
            <p className="text-brand-white/70 text-xs uppercase tracking-[0.2em] max-w-md mx-auto mb-12 leading-relaxed">
              Seja como membro, parceiro ou residente — o futuro é uma construção coletiva.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contactus"
                className="px-12 py-5 bg-brand-white text-brand-black text-xs font-bold uppercase tracking-[0.3em] hover:bg-brand-accent hover:text-brand-white transition-all duration-500 hover-trigger"
              >
                FALE CONOSCO
              </Link>
              <Link
                href="/services/cooccaspace"
                className="px-12 py-5 border border-brand-white/20 text-xs font-bold uppercase tracking-[0.3em] hover:bg-brand-white hover:text-brand-black transition-all duration-500 hover-trigger"
              >
                CONHEÇA O COWORKING
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
