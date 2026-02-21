
"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const AboutMe: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // Text 1: Opacity and Y-offset
  const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.25], [0, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.15, 0.25], [50, 0, -50]);

  // Text 2: Opacity and Y-offset
  const opacity2 = useTransform(scrollYProgress, [0.35, 0.5, 0.6], [0, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.35, 0.5, 0.6], [50, 0, -50]);

  // Text 3: Opacity and Y-offset
  const opacity3 = useTransform(scrollYProgress, [0.7, 0.85, 0.95], [0, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.7, 0.85, 0.95], [50, 0, -50]);

  // Progress bar for the side
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={targetRef} className="h-[400vh] relative bg-bg-secondary">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden px-6">
        {/* Background Text Accent */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02] select-none">
          <h2 className="text-[20vw] font-bold uppercase leading-none font-headline">Identity</h2>
        </div>

        {/* Side Progress Indicator */}
        <div className="absolute left-10 top-1/2 -translate-y-1/2 h-40 w-[2px] bg-border hidden md:block">
          <motion.div 
            style={{ scaleY, originY: 0 }} 
            className="w-full h-full bg-electric-blue"
          />
        </div>

        <div className="max-w-4xl w-full text-center relative z-10 h-full">
          {/* Paragraph 1 */}
          <motion.div 
            style={{ opacity: opacity1, y: y1 }} 
            className="absolute inset-0 flex flex-col justify-center items-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-8 font-headline">
              A Bit <span className="text-electric-blue">About Me</span>
            </h2>
            <p className="text-lg md:text-2xl leading-relaxed text-muted-foreground font-medium max-w-3xl">
              I am a technology professional focused on developing intelligent applications and crafting seamless digital experiences. Proficient in Python, Flutter, React, Node.js, and system design, I combine technical expertise with analytical problem-solving to deliver efficient, scalable, and well-structured solutions.
            </p>
          </motion.div>

          {/* Paragraph 2 */}
          <motion.div 
            style={{ opacity: opacity2, y: y2 }} 
            className="absolute inset-0 flex flex-col justify-center items-center"
          >
            <p className="text-lg md:text-2xl leading-relaxed text-muted-foreground font-medium max-w-3xl">
              Beyond coding, I draw inspiration from strategic thinking and discipline cultivated through sports and fitness, which enhance leadership, collaboration, and resilience.
            </p>
          </motion.div>

          {/* Paragraph 3 */}
          <motion.div 
            style={{ opacity: opacity3, y: y3 }} 
            className="absolute inset-0 flex flex-col justify-center items-center"
          >
            <p className="text-lg md:text-2xl leading-relaxed text-muted-foreground font-medium max-w-3xl">
              This combination of technical skill and real-world experience informs my approach to creating digital solutions that are not only robust and elegant but also drive momentum, foster collaboration, and generate meaningful impact.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
