
"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const AboutMe: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // Text 1: Appears at start, fades by 25% progress
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3], [0, 1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3], [100, 0, 0, -100]);

  // Text 2: Appears at 35%, fades by 65% progress
  const opacity2 = useTransform(scrollYProgress, [0.35, 0.45, 0.55, 0.65], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.35, 0.45, 0.55, 0.65], [100, 0, 0, -100]);

  // Text 3: Appears at 70%, stays till end
  const opacity3 = useTransform(scrollYProgress, [0.7, 0.8, 0.9, 1], [0, 1, 1, 1]);
  const y3 = useTransform(scrollYProgress, [0.7, 0.8, 0.9, 1], [100, 0, 0, 0]);

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={targetRef} className="h-full w-full">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden px-6 bg-background">
        
        {/* Background Decorative Identity Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.01] select-none">
          <h2 className="text-[25vw] font-black uppercase leading-none font-headline">IDENTITY</h2>
        </div>

        {/* Sidebar Vertical Progress */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 h-64 w-[2px] bg-white/10 hidden md:block">
          <motion.div 
            style={{ scaleY, originY: 0 }} 
            className="w-full h-full bg-primary shadow-[0_0_15px_#3B82F6]"
          />
        </div>

        <div className="max-w-4xl w-full text-center relative z-10 h-[60vh]">
          {/* Paragraph 1 */}
          <motion.div 
            style={{ opacity: opacity1, y: y1 }} 
            className="absolute inset-0 flex flex-col justify-center items-center"
          >
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-8 font-headline leading-tight">
              A Bit <span className="text-primary">About Me</span>
            </h2>
            <p className="text-xl md:text-3xl leading-relaxed text-muted-foreground font-medium max-w-3xl">
              I am a technology professional focused on developing <span className="text-white">intelligent applications</span> and crafting seamless digital experiences.
            </p>
          </motion.div>

          {/* Paragraph 2 */}
          <motion.div 
            style={{ opacity: opacity2, y: y2 }} 
            className="absolute inset-0 flex flex-col justify-center items-center"
          >
            <p className="text-xl md:text-3xl leading-relaxed text-muted-foreground font-medium max-w-3xl">
              Beyond coding, I draw inspiration from <span className="text-white">strategic thinking</span> and discipline cultivated through sports and fitness.
            </p>
          </motion.div>

          {/* Paragraph 3 */}
          <motion.div 
            style={{ opacity: opacity3, y: y3 }} 
            className="absolute inset-0 flex flex-col justify-center items-center"
          >
            <p className="text-xl md:text-3xl leading-relaxed text-muted-foreground font-medium max-w-3xl">
              I create digital solutions that are not only <span className="text-primary">robust and elegant</span> but also drive momentum and meaningful impact.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
