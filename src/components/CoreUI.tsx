import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

export const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('.hover-trigger')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-brand-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePos.x,
          y: mousePos.y,
          scale: isClicking ? 0.8 : (isHovering ? 0.5 : 1)
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 400, mass: 0.5 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-brand-white/40 rounded-full pointer-events-none z-[9998] mix-blend-difference flex items-center justify-center"
        animate={{
          x: mousePos.x - 20,
          y: mousePos.y - 20,
          scale: isClicking ? 0.9 : (isHovering ? 1.8 : 1),
          opacity: isHovering ? 0.8 : 0.3
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 200, mass: 0.8 }}
      >
        {isHovering && (
           <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-1 h-1 bg-brand-white rounded-full" 
           />
        )}
      </motion.div>
    </>
  );
};

export const GrainCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let frame = 0;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    const render = () => {
      frame++;
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const data = imageData.data;
      
      for (let i = 0; i < data.length; i += 4) {
        const value = Math.random() * 12;
        data[i] = value;
        data[i + 1] = value;
        data[i + 2] = value;
        data[i + 3] = 45;
      }
      
      ctx.putImageData(imageData, 0, 0);
      requestAnimationFrame(render);
    };

    render();
    return () => window.removeEventListener('resize', resize);
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-[1] opacity-60" />;
};

export const SectionLabel = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={cn("flex items-center gap-4 text-[10px] font-bold tracking-[0.4em] uppercase text-brand-gray-5 mb-8", className)}>
    <div className="w-12 h-px bg-brand-gray-3" />
    {children}
  </div>
);
