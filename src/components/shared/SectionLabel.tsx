import React from 'react';
import { cn } from '@/lib/utils';

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionLabel = ({ children, className }: SectionLabelProps) => (
  <div className={cn("flex items-center gap-4 text-[10px] font-bold tracking-[0.4em] uppercase text-brand-gray-5 mb-8", className)}>
    <div className="w-12 h-px bg-brand-gray-3" />
    {children}
  </div>
);
