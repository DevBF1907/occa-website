"use client";

import React from 'react';
import { motion } from 'motion/react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Instagram, Linkedin, Mail, MapPin, Phone, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const CONTACT_INFO = [
  {
    icon: Phone,
    label: 'WHATSAPP',
    value: '+55 81 9145-6002',
    href: 'https://wa.me/558191456002',
  },
  {
    icon: Mail,
    label: 'E-MAIL',
    value: 'occa.space@gmail.com',
    href: 'mailto:occa.space@gmail.com',
  },
  {
    icon: MapPin,
    label: 'ENDEREÇO',
    value: 'R. Manoel Borba, 285 — Carmo, Olinda — PE',
    href: 'https://maps.app.goo.gl/gDn8KF7Yuchkhuc68?g_st=aw',
  },
  {
    icon: Instagram,
    label: 'INSTAGRAM',
    value: '@occa.space',
    href: 'https://www.instagram.com/occa.space?igsh=MXg0ZHNpMjh6djB5NA==',
  },
  {
    icon: Linkedin,
    label: 'LINKEDIN',
    value: 'OCCA Space',
    href: 'https://www.linkedin.com/company/occa-space/',
  },
];

export default function ContactUsPage() {
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
                CONTATO
              </span>
              <h1 className="text-6xl md:text-9xl font-display uppercase tracking-tighter mb-6 leading-none">
                FALE <span className="italic font-serif text-brand-gray-5 lowercase">conosco</span>
              </h1>
              <p className="text-brand-white/60 text-sm uppercase tracking-[0.2em] max-w-lg mx-auto leading-relaxed">
                Estamos prontos para ouvir, colaborar e construir juntos.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Grid */}
        <section className="py-32 px-6 md:px-12 max-w-5xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CONTACT_INFO.map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <a
                  href={item.href}
                  target={item.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={item.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className="group flex items-start gap-6 p-8 border border-brand-white/10 hover:border-brand-white/30 transition-all duration-500 hover:bg-brand-gray-1/40"
                >
                  <div className="w-12 h-12 flex items-center justify-center border border-brand-white/10 group-hover:border-brand-accent/50 transition-colors shrink-0">
                    <item.icon className="w-5 h-5 text-brand-white/60 group-hover:text-brand-accent transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[9px] font-bold tracking-[0.4em] uppercase text-brand-gray-5 mb-2 block">
                      {item.label}
                    </span>
                    <span className="text-sm text-brand-white/80 group-hover:text-brand-white transition-colors block truncate">
                      {item.value}
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-brand-white/20 group-hover:text-brand-accent group-hover:translate-x-1 transition-all shrink-0 mt-1" />
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-6 border-t border-brand-white/5 bg-brand-gray-1/20">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-brand-white/60 mb-8 block">
              REDES SOCIAIS
            </span>
            <h2 className="text-4xl md:text-7xl font-display uppercase tracking-tighter mb-8">
              ACOMPANHE A <span className="italic font-serif text-brand-white/60 lowercase">aliança</span>
            </h2>
            <p className="text-brand-white/70 text-xs uppercase tracking-[0.2em] max-w-md mx-auto mb-16 leading-relaxed">
              Siga nas redes e fique por dentro de tudo que acontece no ecossistema OCCA.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="https://www.instagram.com/occa.space?igsh=MXg0ZHNpMjh6djB5NA=="
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 border border-brand-white/20 text-xs font-bold uppercase tracking-[0.3em] hover:bg-brand-white hover:text-brand-black transition-all duration-500 hover-trigger flex items-center gap-3"
              >
                <Instagram className="w-4 h-4" /> INSTAGRAM
              </Link>
              <Link
                href="https://www.linkedin.com/company/occa-space/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 border border-brand-white/20 text-xs font-bold uppercase tracking-[0.3em] hover:bg-brand-white hover:text-brand-black transition-all duration-500 hover-trigger flex items-center gap-3"
              >
                <Linkedin className="w-4 h-4" /> LINKEDIN
              </Link>
              <Link
                href="https://wa.me/558191456002"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 bg-brand-white text-brand-black text-xs font-bold uppercase tracking-[0.3em] hover:bg-brand-accent hover:text-brand-white transition-all duration-500 hover-trigger flex items-center gap-3 shadow-lg shadow-brand-white/10"
              >
                <Phone className="w-4 h-4" /> WHATSAPP
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
