
"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const TOTAL_FRAMES = 120;

export const HeroCanvasAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Simplified visual fallback loading
  useEffect(() => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += 2;
      setLoadProgress(progress);
      if (progress >= 100) {
        setIsLoading(false);
        clearInterval(interval);
      }
    }, 20);
    return () => clearInterval(interval);
  }, []);

  // Canvas Drawing logic
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const render = (progress: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Monolithic generative visual
      ctx.strokeStyle = '#3B82F6';
      ctx.lineWidth = 1;
      ctx.shadowBlur = 20;
      ctx.shadowColor = 'rgba(59, 130, 246, 0.5)';
      
      const size = 300 + progress * 400;
      const opacity = Math.max(0.1, 0.8 - progress);
      ctx.globalAlpha = opacity;
      
      // Rotating geometric core
      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate(progress * Math.PI * 2);
      
      for(let j = 0; j < 8; j++) {
        ctx.beginPath();
        const innerSize = size * (0.1 + j * 0.1);
        ctx.rect(-innerSize / 2, -innerSize / 1.5, innerSize, innerSize * 1.5);
        ctx.stroke();
      }
      ctx.restore();
    };

    const unsubscribe = smoothProgress.on("change", (latest) => {
      render(latest);
    });

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render(smoothProgress.get());
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      unsubscribe();
      window.removeEventListener('resize', handleResize);
    };
  }, [smoothProgress]);

  // Text transformation ranges
  const text1Opacity = useTransform(smoothProgress, [0, 0.25], [1, 0]);
  const text2Opacity = useTransform(smoothProgress, [0.35, 0.55, 0.75], [0, 1, 0]);
  const text3Opacity = useTransform(smoothProgress, [0.85, 1], [0, 1]);

  return (
    <div ref={containerRef} className="h-full w-full">
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden bg-bg-primary">
        <canvas 
          ref={canvasRef} 
          className="w-full h-full block"
        />

        {/* Loading overlay */}
        {isLoading && (
          <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-bg-primary">
            <div className="w-64 h-1 bg-border rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-electric-blue" 
                animate={{ width: `${loadProgress}%` }}
              />
            </div>
            <p className="mt-4 text-xs font-mono text-muted-foreground uppercase tracking-widest">
              Initializing System Assets... {loadProgress}%
            </p>
          </div>
        )}

        {/* Text Segments */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-6">
          <motion.div style={{ opacity: text1Opacity }} className="text-center absolute">
            <h1 className="text-5xl md:text-8xl font-bold uppercase tracking-tighter glow-text mb-4">
              Designing <br /> <span className="text-electric-blue">Intelligent</span> Systems
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground font-mono">
              Architecture. Performance. AI.
            </p>
          </motion.div>

          <motion.div style={{ opacity: text2Opacity }} className="text-center absolute">
            <h2 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter mb-4">
              Full-Stack. AI. <br /> Architecture.
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground font-mono">
              From structured logic to scalable products.
            </p>
          </motion.div>

          <motion.div style={{ opacity: text3Opacity }} className="text-center absolute">
            <h2 className="text-5xl md:text-8xl font-bold uppercase tracking-tighter text-neural-cyan mb-8">
              Explore My Work
            </h2>
            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="flex justify-center"
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-electric-blue">
                <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
