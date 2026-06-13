"use client";

import React from 'react';
import { motion } from 'motion/react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CoOccaSpaceSection } from '@/components/sections/home/CoOccaSpaceSection';
import { ArrowDown } from 'lucide-react';

export default function CoOccaSpacePage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen bg-brand-black text-brand-white selection:bg-brand-white selection:text-brand-black">
        {/* Subpage Hero Section */}
        <section className="relative h-[70vh] flex items-center justify-center overflow-hidden border-b border-brand-white/5">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2070"
              alt="CoOccaSpace Olinda"
              className="w-full h-full object-cover grayscale opacity-30"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-brand-black" />
          </div>

          <div className="relative z-10 text-center px-6 mt-20">
            <motion.div
              initial={{ opacity: 0, y: 30, filter: 'blur(5px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-4xl mx-auto"
            >
              <span className="text-[10px] font-mono font-bold tracking-[0.4em] uppercase text-brand-rust mb-6 block">
                INFRAESTRUTURA VIVA
              </span>
              <h1 className="text-6xl md:text-9xl font-display uppercase tracking-tighter mb-6 leading-none">
                COOCCA<span className="italic font-serif text-brand-gray-5 lowercase">space</span>
              </h1>
              <p className="text-brand-white/80 text-sm uppercase tracking-[0.2em] max-w-xl mx-auto leading-relaxed mb-12">
                Conectando moradia, produtividade e desenvolvimento criativo no centro histórico de Olinda.
              </p>
              
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-brand-white/10 text-brand-gray-5"
              >
                <ArrowDown className="w-4 h-4" />
              </motion.div>
            </motion.div>
          </div>

          {/* Location / Meta Badge */}
          <div className="absolute bottom-8 left-6 md:left-12 hidden md:block z-10">
            <div className="flex items-center gap-6">
              <div className="w-px h-12 bg-brand-gray-3" />
              <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-brand-gray-5">
                CIDADE / OLINDA, PE <br />
                PROGRAMA / SERVIÇOS FÍSICOS
              </div>
            </div>
          </div>
        </section>

        {/* Core Content: Coworking, Coliving & Imersões Grid */}
        <CoOccaSpaceSection />

        {/* Call to Action Section */}
        <section className="py-32 px-6 border-t border-brand-white/5 bg-brand-gray-1/10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-[10px] font-mono font-bold tracking-[0.4em] uppercase text-brand-white/60 mb-8 block">
              FAÇA PARTE
            </span>
            <h2 className="text-4xl md:text-7xl font-display uppercase tracking-tighter mb-8">
              RESERVE SEU <span className="italic font-serif text-brand-white/60 lowercase">lugar</span> NA ALIANÇA
            </h2>
            <p className="text-brand-white/80 text-xs uppercase tracking-[0.2em] max-w-md mx-auto mb-12 leading-relaxed">
              Entre em contato para agendar uma visita, verificar disponibilidade de residência ou contratar planos corporativos de coworking.
            </p>
            <button className="px-16 py-6 bg-brand-white text-brand-black text-xs font-bold uppercase tracking-[0.3em] hover:bg-brand-rust hover:text-brand-white transition-all duration-500 hover-trigger">
              ENVIAR SOLICITAÇÃO
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
