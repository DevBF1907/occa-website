import React from 'react';
import { Layout } from '../components/Layout';
import { SectionLabel } from '../components/CoreUI';
import { ArrowRight, UserPlus, ShieldPlus, HeartHandshake } from 'lucide-react';

export default function Community() {
  const PLANS = [
    { title: 'INDIVIDUAL', price: 'R$ 80/mês', icon: <UserPlus className="w-6 h-6" />, desc: 'Acesso básico à comunidade, fóruns e eventos digitais.' },
    { title: 'PRO / MAKER', price: 'R$ 240/mês', icon: <ShieldPlus className="w-6 h-6" />, desc: 'Uso de espaços de coworking e laboratórios (Maker Space).' },
    { title: 'CORPORATE', price: 'CONSULTAR', icon: <HeartHandshake className="w-6 h-6" />, desc: 'Planos customizados para empresas e instituições de inovação.' },
  ];

  return (
    <Layout>
      <section className="pt-48 pb-32 px-6 md:px-12 max-w-7xl mx-auto">
        <SectionLabel>ALIANÇA / COMUNIDADE</SectionLabel>
        <h1 className="text-7xl md:text-[140px] font-display leading-[0.8] tracking-tighter uppercase mb-16">
          CONNECT <br /> <span className="italic font-serif text-brand-gray-5 lowercase">the aliance</span>
        </h1>
        <p className="text-lg text-brand-gray-5 leading-relaxed uppercase tracking-[0.1em] max-w-2xl mb-32">
          A OCCA é uma aliança. Junte-se a nós para transformar infraestrutura em realidade e rede em valor.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {PLANS.map((plan, idx) => (
             <div key={idx} className="group border border-brand-white/10 p-12 flex flex-col justify-between h-[500px] hover:bg-brand-white transition-all duration-700 hover-trigger">
                <div>
                   <div className="text-brand-white group-hover:text-brand-black mb-8 transition-colors">
                      {plan.icon}
                   </div>
                   <h3 className="text-4xl font-display uppercase tracking-tight text-brand-white group-hover:text-brand-black mb-4 transition-colors">{plan.title}</h3>
                   <div className="text-[10px] font-bold text-brand-rust group-hover:text-brand-gray-4 uppercase tracking-[0.4em] mb-8 transition-colors">{plan.price}</div>
                   <p className="text-sm text-brand-gray-5 group-hover:text-brand-gray-4 leading-relaxed uppercase tracking-widest">{plan.desc}</p>
                </div>
                <button className="flex items-center justify-between w-full border-t border-brand-white/10 pt-8 mt-auto text-[10px] font-bold uppercase tracking-[0.3em] text-brand-white group-hover:text-brand-black transition-colors group-hover:border-brand-black/10">
                   APLICAR AGORA <ArrowRight className="w-4 h-4" />
                </button>
             </div>
           ))}
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-40 bg-brand-rust/10 border-y border-brand-rust/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
           <SectionLabel className="justify-center">APOIE O MOVIMENTO</SectionLabel>
           <h2 className="text-5xl md:text-7xl font-display uppercase tracking-tight mb-12 italic font-serif leading-[0.9]">Transforme cultura em legado institucional</h2>
           <p className="text-brand-gray-5 text-sm uppercase tracking-widest mb-16 leading-relaxed">Possuímos mecanismos de incentivo fiscal e parcerias diretas para manutenção do ecossistema e residências sociais.</p>
           <button className="px-16 py-6 border border-brand-rust text-brand-rust text-xs font-bold uppercase tracking-[0.4em] hover:bg-brand-rust hover:text-brand-white transition-all duration-500 hover-trigger">
              FAZER UMA DOAÇÃO
           </button>
        </div>
      </section>
    </Layout>
  );
}
