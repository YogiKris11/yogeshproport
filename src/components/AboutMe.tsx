"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const AboutMe: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // Reveal animations for different blocks
  const opacity1 = useTransform(scrollYProgress, [0, 0.15], [0, 1]);
  const y1 = useTransform(scrollYProgress, [0, 0.15], [50, 0]);

  const opacity2 = useTransform(scrollYProgress, [0.25, 0.4], [0, 1]);
  const y2 = useTransform(scrollYProgress, [0.25, 0.4], [50, 0]);

  const opacity3 = useTransform(scrollYProgress, [0.45, 0.6], [0, 1]);
  const y3 = useTransform(scrollYProgress, [0.45, 0.6], [50, 0]);

  const opacity4 = useTransform(scrollYProgress, [0.7, 0.85], [0, 1]);
  const y4 = useTransform(scrollYProgress, [0.7, 0.85], [50, 0]);

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={targetRef} className="h-[400vh] w-full relative">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden px-6 md:px-24 bg-background">
        
        {/* Background Decorative Identity Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.01] select-none">
          <h2 className="text-[25vw] font-black uppercase leading-none font-headline">IDENTITY</h2>
        </div>

        {/* Sidebar Vertical Progress */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 h-64 w-[2px] bg-white/5 hidden xl:block">
          <motion.div 
            style={{ scaleY, originY: 0 }} 
            className="w-full h-full bg-primary shadow-[0_0_15px_#3B82F6]"
          />
        </div>

        <div className="max-w-5xl w-full text-left relative z-10">
          {/* Label */}
          <motion.div style={{ opacity: opacity1, y: y1 }} className="mb-8">
            <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.4em] text-primary font-bold">
              A Bit About Me
            </span>
          </motion.div>

          {/* Main Heading - Refined font size */}
          <motion.div style={{ opacity: opacity1, y: y1 }} className="mb-16">
            <h2 className="text-xl md:text-2xl lg:text-4xl font-medium tracking-tight font-headline leading-[1.1] text-white">
              I am a technology professional focused on developing <span className="text-primary font-bold">intelligent applications</span> and crafting seamless digital experiences.
            </h2>
          </motion.div>

          {/* Body Paragraphs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-16">
            <motion.div style={{ opacity: opacity2, y: y2 }}>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Proficient in <span className="text-white font-bold">Python, Flutter, React, Node.js</span>, and system design, I combine technical expertise with analytical problem-solving to deliver efficient, scalable, and well-structured solutions.
              </p>
            </motion.div>

            <motion.div style={{ opacity: opacity3, y: y3 }}>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Beyond coding, I draw inspiration from strategic thinking and discipline cultivated through sports and fitness, which enhance <span className="text-white font-bold">leadership, collaboration, and resilience</span>.
              </p>
            </motion.div>
          </div>

          {/* Featured Closing Block */}
          <motion.div 
            style={{ opacity: opacity4, y: y4 }} 
            className="relative pl-8 md:pl-12 py-4"
          >
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary/40" />
            <p className="text-lg md:text-xl font-medium text-muted-foreground leading-relaxed max-w-4xl">
              This combination of technical skill and real-world experience informs my approach to creating digital solutions that are not only robust and elegant but also <span className="text-accent font-bold">drive momentum</span>, foster collaboration, and generate meaningful impact.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
