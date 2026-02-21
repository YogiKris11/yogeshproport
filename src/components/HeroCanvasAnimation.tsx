
"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const TOTAL_FRAMES = 120;

export const HeroCanvasAnimation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
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

  // Load images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    const preloadImages = async () => {
      for (let i = 0; i < TOTAL_FRAMES; i++) {
        const img = new Image();
        // Since we don't have actual frames, we use a placeholder pattern or the user's /public/frames path
        // For demonstration, we'll try to load them but handle the case where they don't exist
        img.src = `/frames/frame_${i}.webp`; 
        
        img.onload = () => {
          loadedCount++;
          setLoadProgress(Math.floor((loadedCount / TOTAL_FRAMES) * 100));
          if (loadedCount === TOTAL_FRAMES) {
            setIsLoading(false);
          }
        };

        img.onerror = () => {
          // If frame not found, we still count it to move past loading, but it won't be drawn
          loadedCount++;
          if (loadedCount === TOTAL_FRAMES) {
            setIsLoading(false);
          }
        };

        loadedImages[i] = img;
      }
      setImages(loadedImages);
    };

    preloadImages();
  }, []);

  // Canvas Drawing
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const render = (progress: number) => {
      const frameIndex = Math.min(
        TOTAL_FRAMES - 1,
        Math.floor(progress * TOTAL_FRAMES)
      );

      if (images[frameIndex] && images[frameIndex].complete && images[frameIndex].naturalWidth !== 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw image with object-fit: contain logic
        const img = images[frameIndex];
        const canvasRatio = canvas.width / canvas.height;
        const imgRatio = img.width / img.height;
        let drawWidth, drawHeight, offsetX, offsetY;

        if (canvasRatio > imgRatio) {
          drawHeight = canvas.height;
          drawWidth = canvas.height * imgRatio;
          offsetX = (canvas.width - drawWidth) / 2;
          offsetY = 0;
        } else {
          drawWidth = canvas.width;
          drawHeight = canvas.width / imgRatio;
          offsetX = 0;
          offsetY = (canvas.height - drawHeight) / 2;
        }

        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      } else {
        // Fallback: Animated geometric monolith if frames are missing
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = '#3B82F6';
        ctx.lineWidth = 2;
        ctx.shadowBlur = 15;
        ctx.shadowColor = '#3B82F6';
        
        const size = 300 + progress * 500;
        const opacity = Math.max(0.2, 1 - progress);
        ctx.globalAlpha = opacity;
        
        ctx.beginPath();
        ctx.rect(canvas.width/2 - size/2, canvas.height/2 - size/2, size, size * 1.5);
        ctx.stroke();
        
        // Inner structure
        for(let j=0; j<5; j++) {
          ctx.beginPath();
          const innerSize = size * (0.2 + j * 0.15);
          ctx.rect(canvas.width/2 - innerSize/2, canvas.height/2 - innerSize/2, innerSize, innerSize * 1.5);
          ctx.stroke();
        }
      }
    };

    const unsubscribe = smoothProgress.on("change", (latest) => {
      render(latest);
    });

    // Handle initial sizing
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
  }, [images, smoothProgress]);

  // Text Overlays
  const text1Opacity = useTransform(smoothProgress, [0, 0.2], [1, 0]);
  const text2Opacity = useTransform(smoothProgress, [0.3, 0.5, 0.7], [0, 1, 0]);
  const text3Opacity = useTransform(smoothProgress, [0.8, 1], [0, 1]);

  return (
    <div ref={containerRef} className="h-[400vh] relative w-full">
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden bg-bg-primary">
        <canvas 
          ref={canvasRef} 
          className="w-full h-full block object-cover"
        />

        {/* Loading progress */}
        {isLoading && (
          <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-bg-primary">
            <div className="w-64 h-1 bg-border rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-electric-blue" 
                initial={{ width: 0 }}
                animate={{ width: `${loadProgress}%` }}
              />
            </div>
            <p className="mt-4 text-xs font-mono text-muted-foreground uppercase tracking-widest">
              Initializing System Assets... {loadProgress}%
            </p>
          </div>
        )}

        {/* Text Overlays */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-6">
          <motion.div style={{ opacity: text1Opacity }} className="text-center">
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
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="flex justify-center"
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-electric-blue">
                <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
              </svg>
            </motion.div>
          </motion.div>
        </div>

        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
      </div>
    </div>
  );
};
