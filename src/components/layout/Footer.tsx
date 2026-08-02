import React from 'react';
import { Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export const Footer = () => (
  <footer className="pt-20 pb-10 px-6 md:px-12 border-t border-brand-white/5 bg-brand-gray-1/30">
    <div className="max-w-[1800px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
        <div className="max-w-xs">
          <img src="/logo-occa.png" alt="OCCA" className="h-10 w-auto mb-6 theme-logo" />
          <p className="text-brand-white/70 text-sm leading-relaxed">
            Um ecossistema vivo de inovação e cultura, operando na interseção entre tecnologia e comunidade.
          </p>
        </div>

        <div className="space-y-4">
          <a
            href="https://www.instagram.com/occa.space?igsh=MXg0ZHNpMjh6djB5NA=="
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-sm text-brand-white/70 hover:text-brand-white transition-colors"
          >
            <Instagram className="w-4 h-4" />
            @occa.space
          </a>
          <a
            href="https://www.linkedin.com/company/occa-space/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-sm text-brand-white/70 hover:text-brand-white transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            OCCA Space
          </a>
          <a
            href="https://maps.app.goo.gl/gDn8KF7Yuchkhuc68?g_st=aw"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-sm text-brand-white/70 hover:text-brand-white transition-colors"
          >
            <MapPin className="w-4 h-4" />
            Olinda, PE — Brasil
          </a>
          <a
            href="https://wa.me/558191456002"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-sm text-brand-white/70 hover:text-brand-white transition-colors"
          >
            <Phone className="w-4 h-4" />
            +55 81 9145-6002
          </a>
          <a
            href="mailto:occa.space@gmail.com"
            className="flex items-center gap-3 text-sm text-brand-white/70 hover:text-brand-white transition-colors"
          >
            <Mail className="w-4 h-4" />
            occa.space@gmail.com
          </a>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-brand-white/5 opacity-60">
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-white">
          © 2026 OCCA — OLINDA, PERNAMBUCO, BRASIL
        </span>
      </div>
    </div>
  </footer>
);
