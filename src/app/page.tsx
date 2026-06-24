import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/home/HeroSection';
import { ManifestoSection } from '@/components/sections/home/ManifestoSection';
import { EcosystemSection } from '@/components/sections/home/EcosystemSection';
import { SectionLabel } from '@/components/shared/SectionLabel';

const PARTNER_BRANDS = [
  'Governo de PE', 'Exército Brasileiro', 'Porto Digital', 'SEBRAE',
  'Ministério do Empreendedorismo', 'UFRPE', 'CETENE', 'Prefeitura de Olinda',
  'Instituto Conceição Moura', 'G-Edu', 'UNINASSAU', 'Pisada do Sertão',
  'Vagalume', 'Lideri Telecom'
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen bg-brand-black text-brand-white selection:bg-brand-white selection:text-brand-black">
        <HeroSection />
        
        {/* Partner Brands Marquee */}
        <div className="border-y border-brand-white/5 py-6 overflow-hidden relative bg-brand-gray-1/20">
          <div className="flex marquee-animation whitespace-nowrap">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center">
                {PARTNER_BRANDS.map((brand, idx) => (
                  <React.Fragment key={idx}>
                    <span className="text-[10px] font-bold tracking-[.15em] uppercase text-brand-white/70 mx-8">{brand}</span>
                    <span className="text-brand-gray-4 tracking-widest opacity-30">///</span>
                  </React.Fragment>
                ))}
              </div>
            ))}
          </div>
        </div>

        <ManifestoSection />
        <EcosystemSection />

        {/* Community CTA */}
        <section className="py-40 px-6 border-t border-brand-white/5">
          <div className="max-w-5xl mx-auto text-center">
            <SectionLabel className="justify-center">COMUNIDADE</SectionLabel>
            <h2 className="text-5xl md:text-8xl font-display uppercase tracking-tighter mb-12">
              FAÇA PARTE DA <br /> <span className="italic font-serif text-brand-gray-5 lowercase">aliança</span>
            </h2>
            <p className="text-brand-white/80 text-sm uppercase tracking-[0.2em] max-w-xl mx-auto mb-12 leading-relaxed">
              Seja como membro individual, parceiro institucional ou residente. O futuro é uma construção coletiva.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <button className="w-full md:w-auto px-16 py-6 bg-brand-white text-brand-black text-xs font-bold uppercase tracking-[0.3em] hover:bg-brand-accent hover:text-brand-white transition-all duration-500 hover-trigger shadow-lg shadow-brand-white/10">
                MEMBERSHIP
              </button>
              <button className="w-full md:w-auto px-16 py-6 border border-brand-white/20 text-xs font-bold uppercase tracking-[0.3em] hover:bg-brand-white hover:text-brand-black transition-all duration-500 hover-trigger relative group">
                PARCERIAS
                <span className="absolute -top-12 left-1/2 -translate-x-1/2 bg-brand-gray-2 text-brand-white/80 text-[9px] px-3 py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  Indivíduos × Instituições
                </span>
              </button>
              <a
                href="https://occa.space/occa-social-club/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto px-16 py-6 border border-brand-white/20 text-xs font-bold uppercase tracking-[0.3em] hover:bg-brand-white hover:text-brand-black transition-all duration-500 hover-trigger inline-block text-center"
              >
                SOCIAL CLUB
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
