import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ChevronDown, ArrowRight, HelpCircle, Users, User, CreditCard, Home } from 'lucide-react';
import { Layout } from '../components/Layout';
import { SectionLabel } from '../components/CoreUI';
import { cn } from '../lib/utils';

// --- Data ---
const FAQ_DATA = [
  {
    id: 'geral',
    title: 'Perguntas Gerais',
    items: [
      {
        id: 'o-que-e-occa',
        question: 'O que é a OCCA?',
        answer: 'A OCCA (Open Creative Community Alliance) é um ecossistema projetado para fomentar a criatividade e a colaboração. Oferecemos espaços de residência, trabalho e eventos para artistas, empreendedores e mentes inquietas.'
      },
      {
        id: 'como-funciona',
        question: 'Como a OCCA funciona?',
        answer: 'Funcionamos através de um modelo de adesão (membership) e programas de residência. Membros têm acesso a espaços físicos, rede de contatos exclusiva e eventos prioritários.'
      }
    ]
  },
  {
    id: 'membership',
    title: 'Membership',
    items: [
      {
        id: 'tornar-membro',
        question: 'Como se tornar membro?',
        answer: 'Para se tornar um membro, você deve preencher o formulário de aplicação em nosso site. Nossa curadoria analisa cada perfil para garantir que os novos membros contribuam para a diversidade e vitalidade da nossa comunidade.'
      },
      {
        id: 'beneficios',
        question: 'Quais os benefícios de ser membro?',
        answer: 'Benefícios incluem acesso 24/7 aos espaços de coworking, descontos em workshops, prioridade na reserva de salas de reunião e convites para eventos exclusivos.'
      }
    ]
  }
];

const FAQAccordion = ({ item, isOpen, onClick }: any) => {
  return (
    <div className="border-b border-brand-white/10 hover-trigger">
      <button
        onClick={onClick}
        className="w-full py-8 flex items-start justify-between text-left group"
      >
        <span className="text-xl md:text-3xl font-display uppercase tracking-tight text-brand-white group-hover:text-brand-gray-5 transition-colors pr-8">
          {item.question}
        </span>
        <motion.div
           animate={{ rotate: isOpen ? 180 : 0 }}
           className="mt-2"
        >
          <ChevronDown className="w-5 h-5 text-brand-gray-5" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pb-8 text-brand-gray-5 text-sm leading-relaxed max-w-2xl font-mono border-l border-brand-gray-4 pl-8">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('geral');
  const [searchQuery, setSearchQuery] = useState('');
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (id: string) => {
    setOpenItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <Layout>
      <div className="pt-40 pb-32 px-6 md:px-12 max-w-7xl mx-auto">
        <SectionLabel>SUPORTE & DOCUMENTAÇÃO</SectionLabel>
        <h1 className="text-7xl md:text-[120px] font-display leading-[0.8] tracking-tighter uppercase mb-16">
          KNOWLEDGE <br /> <span className="italic font-serif text-brand-gray-5 lowercase">support</span>
        </h1>

        <div className="relative mb-24 max-w-2xl hover-trigger">
           <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gray-5" />
           <input 
            type="text" 
            placeholder="PESQUISAR NO REPOSITÓRIO..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-brand-gray-1 border border-brand-white/10 py-6 pl-16 pr-6 text-[10px] font-bold tracking-[0.3em] uppercase focus:outline-none focus:border-brand-white transition-all shadow-2xl"
           />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <aside className="lg:col-span-3">
             <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-gray-5 mb-8">DIRETÓRIOS</div>
             <div className="flex flex-col gap-4">
                {FAQ_DATA.map(cat => (
                  <button 
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={cn(
                      "text-left text-[11px] font-bold tracking-[0.2em] uppercase py-3 border-b border-brand-white/5 transition-all hover-trigger",
                      activeCategory === cat.id ? "text-brand-white border-brand-white" : "text-brand-gray-5 hover:text-brand-white"
                    )}
                  >
                    {cat.title}
                  </button>
                ))}
             </div>
          </aside>

          <div className="lg:col-span-9">
             <div className="divide-y divide-brand-white/10">
                {FAQ_DATA.find(c => c.id === activeCategory)?.items.map(item => (
                  <FAQAccordion 
                    key={item.id} 
                    item={item} 
                    isOpen={!!openItems[item.id]} 
                    onClick={() => toggleItem(item.id)} 
                  />
                ))}
             </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
