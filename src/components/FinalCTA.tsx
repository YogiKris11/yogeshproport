
"use client";

import React from 'react';
import { motion } from 'framer-motion';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden bg-bg-primary">
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
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-12 py-5 bg-electric-blue text-white font-bold rounded-full uppercase tracking-widest overflow-hidden group shadow-[0_0_30px_rgba(59,130,246,0.3)]"
            >
              <span className="relative z-10">Start a Conversation</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
              
              {/* Spinning glow ring */}
              <div className="absolute inset-[-4px] border border-neural-cyan/50 rounded-full animate-spin-slow pointer-events-none" />
            </motion.button>
          </div>
        </motion.div>
      </div>

      <div className="mt-32 border-t border-border-subtle pt-12 flex flex-col md:flex-row justify-between items-center gap-8 max-w-7xl mx-auto text-muted-foreground text-sm font-mono uppercase tracking-widest">
        <p>© 2024 Yogesh Krishna • Built for the Intelligence Age</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-electric-blue transition-colors">Twitter</a>
          <a href="#" className="hover:text-electric-blue transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-electric-blue transition-colors">GitHub</a>
        </div>
      </div>
    </section>
  );
};
