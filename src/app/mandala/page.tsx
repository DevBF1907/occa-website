import React from 'react';
import type { Metadata } from 'next';
import { OCCAtomicSection } from '@/components/sections/home/OCCAtomicSection';

export const metadata: Metadata = {
  title: 'Mandala OCCA',
  description: 'Explore o ecossistema OCCA através da mandala interativa 3D.',
};

export default function MandalaPage() {
  return <OCCAtomicSection fullScreen />;
}
