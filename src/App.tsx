/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { GrainCanvas } from './components/CoreUI';
import Home from './pages/Home';
import About from './pages/About';
import Ecosystem from './pages/Ecosystem';
import KnowledgeHub from './pages/KnowledgeHub';
import Community from './pages/Community';
import FAQ from './pages/FAQ';

const PageWrapper = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ecosystem" element={<Ecosystem />} />
          <Route path="/hub" element={<KnowledgeHub />} />
          <Route path="/community" element={<Community />} />
          <Route path="/support" element={<FAQ />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-brand-black text-brand-white font-mono selection:bg-brand-white selection:text-brand-black">
        <GrainCanvas />
        <div className="scan-line" />
        
        <PageWrapper />
      </div>
    </Router>
  );
}


