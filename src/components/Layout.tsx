import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

const NAV_LINKS = [
  { name: 'O ECOSSISTEMA', href: '/ecosystem' },
  { name: 'SOBRE NÓS', href: '/about' },
  { name: 'KNOWLEDGE HUB', href: '/hub' },
  { name: 'COMUNIDADE', href: '/community' },
  { name: 'SUPORTE', href: '/support' },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={cn(
        "fixed top-0 left-0 w-full z-[50] px-6 md:px-12 transition-all duration-500",
        scrolled ? "py-4 bg-brand-black/80 backdrop-blur-md border-b border-brand-white/10" : "py-8"
      )}>
        <div className="max-w-[1800px] mx-auto flex justify-between items-center">
          <Link to="/" className="text-2xl font-display tracking-[0.2em] text-brand-white uppercase hover-trigger">
            OCCA
          </Link>

          <div className="hidden lg:flex items-center gap-12">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "text-[10px] font-bold tracking-[0.3em] uppercase transition-all duration-300 hover:text-brand-white hover-trigger",
                  location.pathname === link.href ? "text-brand-white" : "text-brand-gray-5"
                )}
              >
                {link.name}
              </Link>
            ))}
            <button className="px-6 py-2 border border-brand-white/20 text-[10px] font-bold uppercase tracking-widest hover:bg-brand-white hover:text-brand-black transition-all duration-300 hover-trigger">
              MEMBERSHIP
            </button>
          </div>

          <button 
            className="lg:hidden text-brand-white hover-trigger"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-brand-black z-[100] flex flex-col p-8 lg:hidden"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="text-2xl font-display tracking-[0.2em] text-brand-white uppercase">OCCA</span>
              <button onClick={() => setIsOpen(false)}>
                <X className="w-6 h-6 text-brand-white" />
              </button>
            </div>
            
            <div className="flex flex-col gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-display tracking-tight text-brand-white uppercase"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="mt-auto pt-12 border-t border-brand-gray-3">
              <p className="text-[10px] font-bold tracking-widest text-brand-gray-5 uppercase mb-4">SOCIAL</p>
              <div className="flex gap-6 text-xs text-brand-white">
                <a href="#">INSTAGRAM</a>
                <a href="#">LINKEDIN</a>
                <a href="#">TWITTER</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export const Footer = () => (
  <footer className="pt-32 pb-12 px-6 md:px-12 border-t border-brand-white/5 bg-brand-gray-1/30">
    <div className="max-w-[1800px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
        <div className="lg:col-span-1">
          <span className="text-3xl font-display tracking-widest text-brand-white uppercase mb-8 block">OCCA</span>
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
                <Link to={link.href} className="text-sm text-brand-white/60 hover:text-brand-white transition-colors uppercase tracking-widest">{link.name}</Link>
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
              className="bg-transparent text-[10px] font-bold focus:outline-none flex-1 uppercase tracking-widest"
            />
            <button className="text-brand-white ml-4"><ArrowRight className="w-4 h-4" /></button>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-brand-white/5 opacity-40">
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase">© 2026 OCCA — OLINDA, PERNAMBUCO, BRASIL</span>
        <div className="flex gap-8 text-[10px] font-bold tracking-[0.2em] uppercase">
          <a href="#">Privacidade</a>
          <a href="#">Transparência</a>
          <a href="#">Governança</a>
        </div>
      </div>
    </div>
  </footer>
);

export const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="relative">
    <Navigation />
    <main className="min-h-screen">
      {children}
    </main>
    <Footer />
  </div>
);
