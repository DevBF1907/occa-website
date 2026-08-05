/**
 * OCCA Institutional Content Layer
 * Mock data layer that mimics a CMS response (Sanity/Supabase)
 */

export interface Program {
  id: string;
  name: string;
  description: string;
  category: 'INFRA' | 'ACADEMY' | 'SOCIAL' | 'LAB';
  status: 'OPEN' | 'ACTIVE' | 'CLOSED';
  link: string;
  image: string;
}

export const PROGRAMS: Program[] = [
  {
    id: 'hq',
    name: 'OCCA HQ',
    description: 'A sede administrativa e infraestrutura para empresas de inovação em Olinda.',
    category: 'INFRA',
    status: 'ACTIVE',
    link: '/ecosystem/hq',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070',
  },
  {
    id: 'social-club',
    name: 'Social Club',
    description: 'Espaço de networking premium e convivência para membros da aliança.',
    category: 'SOCIAL',
    status: 'OPEN',
    link: '/ecosystem/social-club',
    image: 'https://images.unsplash.com/photo-1549463592-23c348f98ed6?auto=format&fit=crop&q=80&w=2070',
  },
  {
    id: 'academy',
    name: 'OCCA Academy',
    description: 'Programas educacionais de ponta em tecnologia, artes e gestão cultural.',
    category: 'ACADEMY',
    status: 'OPEN',
    link: '/ecosystem/academy',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=2070',
  },
  {
    id: 'lab',
    name: 'Innovation Lab',
    description: 'Laboratório de prototipagem e co-desenvolvimento de soluções complexas.',
    category: 'LAB',
    status: 'ACTIVE',
    link: '/ecosystem/lab',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070',
  }
];

// TODO: preencher cargo (role), bio e foto (image) de cada integrante
export const TEAM = [
  {
    name: 'Victor',
    role: 'Cargo',
    bio: 'Descrição.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=300&h=300&q=80',
  },
  {
    name: 'Vitória',
    role: 'Cargo',
    bio: 'Descrição.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&facepad=2&w=300&h=300&q=80',
  },
  {
    name: 'Kleber',
    role: 'Cargo',
    bio: 'Descrição.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=300&h=300&q=80',
  },
];
