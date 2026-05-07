import React from 'react';
import { Layout } from '../components/Layout';
import { SectionLabel } from '../components/CoreUI';
import { ArrowRight, Search } from 'lucide-react';

const POSTS = [
  { id: 1, title: 'O FUTURO DA ECONOMIA CRIATIVA NO NORDESTE', category: 'RESEARCH', date: 'MAI 2026', image: 'https://images.unsplash.com/photo-1542621334-a254cf47733d?auto=format&fit=crop&q=80&w=2070' },
  { id: 2, title: 'OLINDA COMO HUB GLOBAL DE INOVAÇÃO', category: 'INSIGHT', date: 'ABR 2026', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070' },
  { id: 3, title: 'A TECNOLOGIA COMO FERRAMENTA DE CULTURA', category: 'MANIFESTO', date: 'MAR 2026', image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2070' },
];

export default function KnowledgeHub() {
  return (
    <Layout>
      <div className="pt-48 pb-32 px-6 md:px-12 max-w-7xl mx-auto">
        <SectionLabel>CENTRAL DE CONHECIMENTO</SectionLabel>
        <h1 className="text-7xl md:text-[140px] font-display leading-[0.8] tracking-tighter uppercase mb-16">
          KNOWLEDGE <br /> <span className="italic font-serif text-brand-gray-5 lowercase">hub</span>
        </h1>
        
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-32">
           <p className="text-brand-gray-5 text-sm uppercase tracking-widest max-w-xl leading-relaxed">
             Whitepapers, artigos, pesquisas e documentação sobre o impacto do ecossistema criativo.
           </p>
           <div className="relative w-full max-w-sm hover-trigger">
             <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gray-5" />
             <input type="text" placeholder="BUSCAR CONTEÚDO..." className="w-full bg-brand-gray-1/40 border-b border-brand-white/10 py-4 pl-12 text-[10px] font-mono focus:outline-none focus:border-brand-white transition-all uppercase tracking-widest" />
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
           {/* Featured */}
           <div className="lg:col-span-8 group hover-trigger">
              <div className="aspect-video bg-brand-gray-2 mb-8 overflow-hidden border border-brand-white/5 relative">
                 <img src={POSTS[0].image} alt="Featured" className="w-full h-full object-cover grayscale transition-transform duration-1000 group-hover:scale-105" referrerPolicy="no-referrer" />
                 <div className="absolute inset-0 bg-brand-black/20" />
              </div>
              <div className="flex items-center gap-4 text-[10px] font-bold text-brand-rust uppercase tracking-[0.4em] mb-4">
                 Destaque / {POSTS[0].category} / {POSTS[0].date}
              </div>
              <h2 className="text-5xl md:text-7xl font-display leading-[0.9] uppercase tracking-tighter mb-8 group-hover:translate-x-2 transition-transform duration-500">
                {POSTS[0].title}
              </h2>
              <button className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-brand-white">
                 LER ARTIGO COMPLETO <ArrowRight className="w-4 h-4" />
              </button>
           </div>

           {/* Sidebar Posts */}
           <div className="lg:col-span-4 space-y-16">
              {POSTS.slice(1).map(post => (
                <div key={post.id} className="group hover-trigger">
                   <div className="aspect-video bg-brand-gray-2 mb-6 overflow-hidden border border-brand-white/5">
                      <img src={post.image} alt="Post" className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0" referrerPolicy="no-referrer" />
                   </div>
                   <div className="text-[9px] font-bold text-brand-gray-5 uppercase tracking-[0.4em] mb-2">{post.category} / {post.date}</div>
                   <h3 className="text-2xl font-display uppercase tracking-tight group-hover:text-brand-rust transition-colors mb-4">{post.title}</h3>
                   <button className="text-[9px] font-bold uppercase tracking-[0.2em] border-b border-brand-white/10 hover:border-brand-white transition-all">READ MORE</button>
                </div>
              ))}
           </div>
        </div>
      </div>
    </Layout>
  );
}
