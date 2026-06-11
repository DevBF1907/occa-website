import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/home/HeroSection';
import { ManifestoSection } from '@/components/sections/home/ManifestoSection';
import { MandalaSection } from '@/components/sections/home/MandalaSection';
import { EcosystemSection } from '@/components/sections/home/EcosystemSection';
import { SectionLabel } from '@/components/shared/SectionLabel';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen bg-brand-black text-brand-white selection:bg-brand-white selection:text-brand-black">
        <HeroSection />
        
        {/* Marquee */}
        <div className="border-y border-brand-white/5 py-8 overflow-hidden relative bg-brand-gray-1/20">
          <div className="flex marquee-animation whitespace-nowrap">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex items-center">
                <span className="text-[10px] font-bold tracking-[.4em] uppercase text-brand-white mx-12">OPEN CREATIVE COMMUNITY ALLIANCE</span>
                <span className="text-brand-gray-3 tracking-widest opacity-20">///</span>
                <span className="text-[10px] font-bold tracking-[.4em] uppercase text-brand-white mx-12 italic font-serif">OLINDA, BRASIL</span>
                <span className="text-brand-gray-3 tracking-widest opacity-20">///</span>
              </div>
            ))}
          </div>
        </div>

        <ManifestoSection />
        <MandalaSection />
        <EcosystemSection />

        {/* Community CTA */}
        <section className="py-40 px-6 border-t border-brand-white/5">
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
      </main>
      <Footer />
    </>
  );
}
