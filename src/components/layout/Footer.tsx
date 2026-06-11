import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const NAV_LINKS = [
  { name: 'O ECOSSISTEMA', href: '/ecosystem' },
  { name: 'SOBRE NÓS', href: '/about' },
  { name: 'KNOWLEDGE HUB', href: '/hub' },
  { name: 'COMUNIDADE', href: '/community' },
  { name: 'SUPORTE', href: '/support' },
];

export const Footer = () => (
  <footer className="pt-32 pb-12 px-6 md:px-12 border-t border-brand-white/5 bg-brand-gray-1/30">
    <div className="max-w-[1800px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
        <div className="lg:col-span-1">
          <img src="/logo-occa.png" alt="OCCA" className="h-10 w-auto mb-8" />
          <p className="text-brand-gray-5 text-sm leading-relaxed max-w-xs mb-8">
            Um ecossistema vivo de inovação e cultura, operando na interseção entre tecnologia e comunidade.
          </p>
          <div className="flex gap-4">
             <div className="w-8 h-8 rounded-full border border-brand-white/10 flex items-center justify-center hover:bg-brand-white hover:text-brand-black transition-all cursor-pointer">
                <span className="text-[10px]">IG</span>
             </div>
             <div className="w-8 h-8 rounded-full border border-brand-white/10 flex items-center justify-center hover:bg-brand-white hover:text-brand-black transition-all cursor-pointer">
                <span className="text-[10px]">LN</span>
             </div>
          </div>
        </div>

        <div>
          <h4 className="text-[10px] font-bold tracking-[0.4em] uppercase text-brand-gray-5 mb-8">NAVEGAÇÃO</h4>
          <ul className="space-y-4">
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-brand-white/60 hover:text-brand-white transition-colors uppercase tracking-widest">{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] font-bold tracking-[0.4em] uppercase text-brand-gray-5 mb-8">RESERVA</h4>
          <ul className="space-y-4">
            <li><a href="#" className="text-sm text-brand-white/60 hover:text-brand-white transition-colors uppercase tracking-widest">HQ / EMPRESAS</a></li>
            <li><a href="#" className="text-sm text-brand-white/60 hover:text-brand-white transition-colors uppercase tracking-widest">RESIDÊNCIA ARTÍSTICA</a></li>
            <li><a href="#" className="text-sm text-brand-white/60 hover:text-brand-white transition-colors uppercase tracking-widest">ESPAÇO MAKER</a></li>
            <li><a href="#" className="text-sm text-brand-white/60 hover:text-brand-white transition-colors uppercase tracking-widest">EVENTOS</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] font-bold tracking-[0.4em] uppercase text-brand-gray-5 mb-8">NEWSLETTER</h4>
          <p className="text-xs text-brand-gray-5 mb-6">Receba atualizações sobre editais e programas.</p>
          <div className="flex border-b border-brand-white/20 pb-2">
            <input 
              type="email" 
              placeholder="SEU EMAIL" 
              className="bg-transparent text-[10px] font-bold focus:outline-none flex-1 uppercase tracking-widest text-brand-white"
            />
            <button className="text-brand-white ml-4" aria-label="Inscrever-se"><ArrowRight className="w-4 h-4" /></button>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-brand-white/5 opacity-40">
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-white">© 2026 OCCA — OLINDA, PERNAMBUCO, BRASIL</span>
        <div className="flex gap-8 text-[10px] font-bold tracking-[0.2em] uppercase text-brand-white">
          <a href="#">Privacidade</a>
          <a href="#">Transparência</a>
          <a href="#">Governança</a>
        </div>
      </div>
    </div>
  </footer>
);
