import React from 'react';
import Link from 'next/link';
import { ArrowRight, Instagram, Linkedin } from 'lucide-react';

const NAV_LINKS = [
  { name: 'O ECOSSISTEMA', href: '/#ecossistema' },
  { name: 'SOBRE NÓS', href: '/about' },
  { name: 'SERVIÇOS', href: '/services/cooccaspace' },
  { name: 'COMUNIDADE', href: '/community' },
  { name: 'Fale Conosco', href: '/contactus' },
];

const PROGRAM_LINKS = [
  { name: 'Co.OCCA.Space', href: '/services/cooccaspace' },
  { name: 'OCCA Open Innovation', href: '/services/occaopeninovation' },
  { name: 'OCCA Academy', href: '/ecosystem/academy' },
  { name: 'OCCAsulo', href: '/ecosystem/occasulo' },
];

export const Footer = () => (
  <footer className="pt-32 pb-12 px-6 md:px-12 border-t border-brand-white/5 bg-brand-gray-1/30">
    <div className="max-w-[1800px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
        <div className="lg:col-span-1">
          <img src="/logo-occa.png" alt="OCCA" className="h-10 w-auto mb-8" />
          <p className="text-brand-white/70 text-sm leading-relaxed max-w-xs mb-8">
            Um ecossistema vivo de inovação e cultura, operando na interseção entre tecnologia e comunidade.
          </p>
          <div className="flex gap-4">
             <a href="https://instagram.com/occa.space" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full border border-brand-white/20 flex items-center justify-center hover:bg-brand-white hover:text-brand-black transition-all cursor-pointer" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
             </a>
             <a href="https://linkedin.com/company/occa-space" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-full border border-brand-white/20 flex items-center justify-center hover:bg-brand-white hover:text-brand-black transition-all cursor-pointer" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
             </a>
          </div>
        </div>

        <div>
          <h4 className="text-[10px] font-bold tracking-[0.4em] uppercase text-brand-white/80 mb-8">NAVEGAÇÃO</h4>
          <ul className="space-y-4">
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-brand-white/70 hover:text-brand-white transition-colors uppercase tracking-widest">{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] font-bold tracking-[0.4em] uppercase text-brand-white/80 mb-8">PROGRAMAS</h4>
          <ul className="space-y-4">
            {PROGRAM_LINKS.map(link => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-brand-white/70 hover:text-brand-white transition-colors uppercase tracking-widest">{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] font-bold tracking-[0.4em] uppercase text-brand-white/80 mb-8">NEWSLETTER</h4>
          <p className="text-xs text-brand-white/70 mb-6">Receba atualizações sobre editais e programas.</p>
          <div className="relative">
            <label htmlFor="newsletter-email" className="text-[9px] font-bold uppercase tracking-[0.3em] text-brand-white/60 mb-2 block">Seu e-mail</label>
            <div className="flex border-b border-brand-white/20 pb-2 focus-within:border-brand-accent transition-colors">
              <input
                id="newsletter-email"
                type="email"
                placeholder="seu@email.com"
                className="bg-transparent text-xs focus:outline-none flex-1 text-brand-white/80 placeholder:text-brand-gray-4"
              />
              <button className="text-brand-white ml-4 hover:text-brand-accent transition-colors" aria-label="Inscrever-se"><ArrowRight className="w-4 h-4" /></button>
            </div>
            <p className="text-[9px] text-brand-white/40 mt-2">Prometemos não enviar spam. Você pode cancelar a qualquer momento.</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-brand-white/5 opacity-60">
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-white">© 2026 OCCA — OLINDA, PERNAMBUCO, BRASIL</span>
        <div className="flex gap-8 text-[10px] font-bold tracking-[0.2em] uppercase text-brand-white/70">
          <a href="#" className="hover:text-brand-white transition-colors">Privacidade</a>
          <a href="#" className="hover:text-brand-white transition-colors">Transparência</a>
          <a href="#" className="hover:text-brand-white transition-colors">Governança</a>
        </div>
      </div>
    </div>
  </footer>
);
