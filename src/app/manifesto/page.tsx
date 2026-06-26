import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FullManifestoSection } from '@/components/sections/home/FullManifestoSection';

export const metadata: Metadata = {
  title: 'Manifesto OCCA',
  description: 'O manifesto que define o ecossistema OCCA.',
};

export default function ManifestoPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-brand-black text-brand-white selection:bg-brand-white selection:text-brand-black pt-28">
        <FullManifestoSection />
      </main>
      <Footer />
    </>
  );
}
