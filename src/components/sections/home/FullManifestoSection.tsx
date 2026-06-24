import React from 'react';
import { SectionLabel } from '@/components/shared/SectionLabel';

const MANIFESTO_LINES = [
  'que a interseção seja morada de muitos, que as barreiras entre as áreas do conhecimento sejam menores;',
  'que existam menos etiquetas, categorias.',
  'que os muros entre as pessoas se quebrem, que elas se encontrem mais, falem mais, discutam mais.',
  'que mais cabeças colidam.',
  'que as represas não existam; que os fluxos de informação jorrem.',
  'que os indivíduos se contradigam mais; que errem mais; que tenham menos medo do fracasso; que saiam de suas zonas de conforto.',
  'que as pessoas digam menos: "não sei fazer isso" ou "não dou conta disso".',
  'que os pirralhos falem menos: "ainda não sei isso na escola".',
  'que a mesmice cause inquietação.',
  'que os objetivos de vida não se cristalizem para a eternidade.',
  'que mais pessoas se sintam perdidas; que sejam mais ociosas.',
  'que o dinheiro seja consequência de paixões.',
  'que os especialistas não percam a visão do todo. que os generalistas não esqueçam a visão das partes.',
  'que todos entendam que a soma das partes pode transbordar o todo.',
  'que se prototipe mais. que se experimente mais.',
  'que para toda conversa exista um quadro branco.',
  'que o rabisco seja o principal meio de comunicação, a gambiarra a forma oficial de resolver problemas.',
  'que todos sejam doutores em "faça-você-mesmo".',
  'que tudo seja um rascunho.',
  'que as ideias sejam mais incubadas.',
  'que o feito seja cultuado.',
  'que não exista o pavor de ter a ideia roubada.',
  'que se valorize mais o processo de ter ideias do que a própria ideia.',
  'que as pessoas entendam que ideias nada a ver têm tudo a ver, que ideias incríveis não vêm do nada, que colisões e conexões inesperadas aconteçam.',
  'que as experiências sejam blocos de montar. que os algoritmos sejam engrenagens.',
  'que a técnica seja apenas o meio.',
  'que existam soluções que não precisem surgir a partir de um problema.',
  'que mais projetos loucos apareçam.',
  'que todos entendam que nossos sensores são próprios e nossas visões são únicas; que compreendam que esta é apenas a minha visão."',
];

export const FullManifestoSection = () => {
  return (
    <section className="py-32 px-6 md:px-12 border-t border-brand-white/5 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <SectionLabel className="justify-center mb-6">O MANIFESTO OCCA</SectionLabel>

        <div className="text-center mb-24">
          <p className="text-lg md:text-2xl font-serif italic text-brand-white/60 max-w-3xl mx-auto leading-relaxed">
            &mdash; que a interseção seja morada de muitos, que as barreiras entre as áreas do conhecimento sejam menores &mdash;
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-brand-accent via-brand-white/10 to-transparent hidden md:block" />

          <div className="space-y-6 md:pl-12">
            {MANIFESTO_LINES.map((line, i) => (
              <p
                key={i}
                className="text-sm md:text-base text-brand-white/80 leading-relaxed font-serif italic tracking-wide
                  hover:text-brand-white hover:translate-x-2 transition-all duration-500 cursor-default"
              >
                {line}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-brand-white/5 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-brand-gray-4 mb-2">Autor</p>
          <p className="text-lg font-display uppercase tracking-tight text-brand-white">
            Felipe Galegario
          </p>
        </div>
      </div>
    </section>
  );
};
