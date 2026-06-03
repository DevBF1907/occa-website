"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { name: 'O ECOSSISTEMA', href: '/#ecossistema' },
  { name: 'SOBRE NÓS', href: '/about' },
  { 
    name: 'SERVIÇOS', 
    href: '#',
    items: [
      { name: 'CoOccaSpace', href: '/services/cooccaspace' },
      { name: 'OCCA Open Inovation', href: '/services/occaopeninovation' }
    ]
  },
  { name: 'KNOWLEDGE HUB', href: '/hub' },
  { name: 'COMUNIDADE', href: '/community' },
  { name: 'Fale Conosco', href: '/contactus' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

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
          <Link href="/" className="text-2xl font-display tracking-[0.2em] text-brand-white uppercase hover-trigger">
            OCCA
          </Link>

          <div className="hidden lg:flex items-center gap-12">
            {NAV_LINKS.map((link) => (
              <div key={link.name} className="relative group">
                {link.items ? (
                  <div className="flex items-center gap-1 cursor-pointer hover-trigger">
                    <span className={cn(
                      "text-[10px] font-bold tracking-[0.3em] uppercase transition-all duration-300 group-hover:text-brand-white",
                      pathname.startsWith('/services') ? "text-brand-white" : "text-brand-gray-5"
                    )}>
                      {link.name}
                    </span>
                    <ChevronDown className="w-3 h-3 text-brand-gray-5 group-hover:text-brand-white transition-colors" />
                    
                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-0 pt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      <div className="bg-brand-black/90 backdrop-blur-md border border-brand-white/10 p-6 min-w-[220px] flex flex-col gap-5 shadow-2xl">
                        {link.items.map(subItem => (
                          <Link 
                            key={subItem.name} 
                            href={subItem.href}
                            className="text-[10px] font-bold tracking-[0.3em] uppercase text-brand-gray-5 hover:text-brand-white hover:translate-x-1 transition-all"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className={cn(
                      "text-[10px] font-bold tracking-[0.3em] uppercase transition-all duration-300 hover:text-brand-white hover-trigger",
                      pathname === link.href ? "text-brand-white" : "text-brand-gray-5"
                    )}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <button className="px-6 py-2 border border-brand-white/20 text-[10px] font-bold uppercase tracking-widest hover:bg-brand-white hover:text-brand-black transition-all duration-300 hover-trigger">
              MEMBERSHIP
            </button>
          </div>

          <button 
            className="lg:hidden text-brand-white hover-trigger"
            onClick={() => setIsOpen(true)}
            aria-label="Toggle menu"
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
              <button onClick={() => setIsOpen(false)} aria-label="Close menu">
                <X className="w-6 h-6 text-brand-white" />
              </button>
            </div>
            
            <div className="flex flex-col gap-8 overflow-y-auto">
              {NAV_LINKS.map((link) => (
                <div key={link.name}>
                  {link.items ? (
                    <div className="flex flex-col gap-4">
                      <span className="text-4xl font-display tracking-tight text-brand-white/50 uppercase">
                        {link.name}
                      </span>
                      <div className="flex flex-col gap-4 pl-6 border-l border-brand-white/10 ml-2 mt-2">
                        {link.items.map(subItem => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            onClick={() => setIsOpen(false)}
                            className="text-2xl font-display tracking-tight text-brand-white uppercase"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-4xl font-display tracking-tight text-brand-white uppercase block"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
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
