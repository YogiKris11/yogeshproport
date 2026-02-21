
"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const line1X = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);
  const line2X = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
  const line3X = useTransform(scrollYProgress, [0, 1], ["-50%", "50%"]);

  return (
    <section ref={containerRef} className="py-32 px-6 relative overflow-hidden bg-bg-primary">
      {/* Playful Scroll Lines Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <motion.div 
          style={{ x: line1X }}
          className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent"
        />
        <motion.div 
          style={{ x: line2X }}
          className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent"
        />
        <motion.div 
          style={{ x: line3X }}
          className="absolute top-3/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent"
        />
      </div>

      {/* Dynamic background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electric-blue/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-8 leading-none">
            Let’s Build <br /> <span className="text-electric-blue">Intelligent</span> Systems.
          </h2>
          
          <div className="flex justify-center mt-12">
            <motion.a
              href="mailto:yogeshkrishna2018@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-12 py-5 bg-electric-blue text-white font-bold rounded-full uppercase tracking-widest overflow-hidden group shadow-[0_0_30px_rgba(59,130,246,0.3)] inline-block"
            >
              <span className="relative z-10">Start a Conversation</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
              
              {/* Spinning glow ring */}
              <div className="absolute inset-[-4px] border border-neural-cyan/50 rounded-full animate-spin-slow pointer-events-none" />
            </motion.a>
          </div>
        </motion.div>
      </div>

      <div className="mt-32 border-t border-border-subtle pt-12 flex flex-col md:flex-row justify-between items-center gap-8 max-w-7xl mx-auto text-muted-foreground text-sm font-mono uppercase tracking-widest">
        <p>© 2026 Yogesh Krishna • Built for the Intelligence Age</p>
        <div className="flex gap-8 items-center">
          <a 
            href="mailto:yogeshkrishna2018@gmail.com" 
            className="hover:text-electric-blue transition-all hover:scale-110"
            title="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a 
            href="https://www.linkedin.com/in/yogesh-krishna-k-b22699291" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-electric-blue transition-all hover:scale-110"
            title="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a 
            href="https://github.com/YogiKris11" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-electric-blue transition-all hover:scale-110"
            title="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};
