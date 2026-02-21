
"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  // Animated pattern lines
  const line1X = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);
  const line2X = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
  const line3X = useTransform(scrollYProgress, [0, 1], ["-50%", "50%"]);
  const lineRotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-8 h-8 md:w-10 md:h-10" />,
      url: 'https://www.linkedin.com/in/yogesh-krishna-k-b22699291',
      color: 'hover:text-primary'
    },
    {
      name: 'GitHub',
      icon: <Github className="w-8 h-8 md:w-10 md:h-10" />,
      url: 'https://github.com/YogiKris11',
      color: 'hover:text-white'
    },
    {
      name: 'Email',
      icon: <Mail className="w-8 h-8 md:w-10 md:h-10" />,
      url: 'mailto:yogeshkrishna2018@gmail.com',
      color: 'hover:text-accent'
    }
  ];

  return (
    <section ref={containerRef} className="py-32 px-6 relative overflow-hidden bg-bg-primary">
      {/* Dynamic background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-16 leading-none font-headline">
            Let’s Build <br /> <span className="text-primary">Intelligent</span> Systems.
          </h2>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-24">
            {socialLinks.map((link, idx) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className={`flex flex-col items-center gap-4 transition-colors duration-300 ${link.color} group`}
              >
                <div className="relative p-6 rounded-3xl bg-white/5 border border-white/5 group-hover:border-white/20 shadow-2xl backdrop-blur-sm overflow-hidden">
                  {link.icon}
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <span className="text-[10px] md:text-xs font-mono font-bold uppercase tracking-[0.4em] text-muted-foreground group-hover:text-inherit">
                  {link.name}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Playful Scroll Patterns Sub-Section */}
        <div className="relative h-64 w-full flex items-center justify-center">
          <div className="absolute inset-0 flex flex-col justify-center gap-12 pointer-events-none opacity-40">
            <motion.div 
              style={{ x: line1X, rotate: lineRotate }}
              className="w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent"
            />
            <motion.div 
              style={{ x: line2X, rotate: -lineRotate }}
              className="w-full h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent"
            />
            <motion.div 
              style={{ x: line3X, scaleX: useTransform(scrollYProgress, [0, 1], [0.5, 1.5]) }}
              className="w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent"
            />
          </div>
          <div className="text-[10px] font-mono uppercase tracking-[1em] text-white/10 select-none">
            ENGINEERING_MOMENTUM
          </div>
        </div>
      </div>

      <div className="mt-32 border-t border-border-subtle pt-12 flex flex-col md:flex-row justify-between items-center gap-8 max-w-7xl mx-auto text-muted-foreground text-[10px] font-mono uppercase tracking-widest">
        <div className="flex items-center gap-4">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <p>© 2026 Yogesh Krishna • Systems Architect</p>
        </div>
        <div className="flex gap-4 items-center">
          <span>LATENCY: 14MS</span>
          <span className="opacity-30">|</span>
          <span>UPTIME: 99.9%</span>
          <span className="opacity-30">|</span>
          <span className="text-primary font-bold">READY_TO_DEPLOY</span>
        </div>
      </div>
    </section>
  );
};
