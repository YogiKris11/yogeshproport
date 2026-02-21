
"use client";

import React, { useRef } from 'react';
import { HeroCanvasAnimation } from '@/components/HeroCanvasAnimation';
import { AboutMe } from '@/components/AboutMe';
import { ProjectCard } from '@/components/ProjectCard';
import { FinalCTA } from '@/components/FinalCTA';
import { SkillsArsenal } from '@/components/SkillsArsenal';
import { projects } from '@/app/data/projects';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export default function Home() {
  const featuredProjects = projects.filter(p => p.featured);
  const scrollRef = useRef<HTMLDivElement>(null);
  const ghostRef = useRef<HTMLDivElement>(null);
  
  // High-precision scroll tracking for the horizontal section
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"]
  });

  // Calculate horizontal translation based on item count to ensure it "completes"
  // We move roughly -(N-1)*100% plus some padding. 
  // For 5 items, moving ~-400% would be standard, but we adjust for viewport width.
  const x = useTransform(scrollYProgress, [0.05, 0.95], ["0%", "-75%"]);
  const smoothX = useSpring(x, { stiffness: 40, damping: 25, restDelta: 0.001 });
  
  const progressBarWidth = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <main className="min-h-screen bg-bg-primary overflow-x-hidden">
      {/* Global Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-electric-blue z-[1000] origin-left"
        style={{ scaleX: progressBarWidth }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-[100] p-8 flex justify-between items-center mix-blend-difference">
        <div className="text-2xl font-bold font-headline uppercase tracking-tighter text-white">
          YK<span className="text-electric-blue">.</span>SYS
        </div>
        <div className="hidden md:flex gap-12 text-xs font-mono uppercase tracking-[0.4em] font-bold text-white">
          <a href="#about" className="hover:text-electric-blue transition-all">Identity</a>
          <a href="#arsenal" className="hover:text-electric-blue transition-all">Arsenal</a>
          <a href="#projects" className="hover:text-electric-blue transition-all">Works</a>
          <a href="#contact" className="hover:text-electric-blue transition-all">Contact</a>
        </div>
      </nav>

      <HeroCanvasAnimation />

      <section id="about">
        <AboutMe />
      </section>

      <SkillsArsenal />

      {/* The Monolithic Horizontal Scroll Section */}
      <section id="projects" ref={scrollRef} className="relative h-[600vh] bg-[#05070a]">
        <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
          
          {/* Section Heading Overlay */}
          <div className="absolute top-[12%] left-0 w-full px-8 md:px-24 flex justify-between items-end z-20 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-6xl md:text-[8vw] font-bold uppercase leading-none tracking-tighter font-headline text-white/90">
                Things I've <br /> <span className="text-electric-blue">Built</span>
              </h2>
            </motion.div>
            
            <div className="hidden md:block text-right mb-4">
              <p className="text-muted-foreground font-mono text-xs uppercase tracking-[0.5em] mb-2">Artifact Gallery</p>
              <div className="flex gap-2 justify-end">
                <motion.div 
                  className="h-[2px] bg-electric-blue" 
                  style={{ width: useTransform(scrollYProgress, [0, 1], ["0px", "60px"]) }}
                />
                <div className="w-4 h-[2px] bg-white/20" />
              </div>
            </div>
          </div>

          {/* Sliding Track - Enhanced with enough "runway" to finish */}
          <motion.div 
            style={{ x: smoothX }} 
            className="flex gap-16 md:gap-40 px-8 md:px-[25vw] items-center whitespace-nowrap"
          >
            {featuredProjects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
            
            {/* Extended End Cap to ensure the last project stays centered/visible before exit */}
            <div className="w-[50vw] md:w-[80vw] flex-shrink-0" />
          </motion.div>

          {/* Background Text Parallax */}
          <div className="absolute bottom-10 right-0 pointer-events-none select-none overflow-hidden w-full">
            <motion.span 
              style={{ x: useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]) }}
              className="text-[20vw] font-black text-white/[0.02] font-headline whitespace-nowrap leading-none block"
            >
              CRAFTING THE FUTURE
            </motion.span>
          </div>
        </div>
      </section>

      <section id="contact">
        <FinalCTA />
      </section>

      {/* Persistent Visual Noise */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-15 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </main>
  );
}
