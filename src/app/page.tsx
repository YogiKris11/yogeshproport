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
  
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"]
  });

  // Recalibrated for 5 projects on 14-inch laptop: 
  // -220% ensures the last card (Saaf Dilli) is perfectly centered/visible 
  // as the scroll hits 100%, avoiding the "black screen" overshoot.
  const xTranslate = useTransform(scrollYProgress, [0, 1], ["0%", "-220%"]);
  const smoothX = useSpring(xTranslate, { stiffness: 80, damping: 30, restDelta: 0.001 });
  
  const progressBarWidth = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <main className="relative bg-background">
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[1000] origin-left"
        style={{ scaleX: progressBarWidth }}
      />

      <nav className="fixed top-0 left-0 w-full z-[100] p-8 flex justify-between items-center mix-blend-difference">
        <div className="text-2xl font-black font-headline uppercase tracking-tighter text-white">
          YK<span className="text-primary">.</span>SYS
        </div>
        <div className="hidden md:flex gap-12 text-xs font-mono uppercase tracking-[0.4em] font-bold text-white/50">
          <a href="#essence" className="hover:text-primary hover:tracking-[0.6em] transition-all duration-500">Essence</a>
          <a href="#arsenal" className="hover:text-primary hover:tracking-[0.6em] transition-all duration-500">Arsenal</a>
          <a href="#projects" className="hover:text-primary hover:tracking-[0.6em] transition-all duration-500">Works</a>
          <a href="#contact" className="hover:text-primary hover:tracking-[0.6em] transition-all duration-500">Contact</a>
        </div>
      </nav>

      <section id="hero" className="scroll-section relative h-[250vh]">
        <HeroCanvasAnimation />
      </section>

      <section id="essence" className="scroll-section relative h-[250vh]">
        <AboutMe />
      </section>

      <section id="arsenal" className="scroll-section relative">
        <SkillsArsenal />
      </section>

      {/* Tightened runway to 220vh for 14-inch screens to avoid dead scrolls */}
      <section id="projects" ref={scrollRef} className="scroll-section relative h-[220vh] bg-black">
        <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
          
          <div className="absolute top-[12%] left-0 w-full px-8 md:px-24 flex justify-between items-end z-20 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-xl md:text-2xl font-bold uppercase leading-none tracking-tighter font-headline text-white/90">
                Things I've <br /> <span className="text-primary">Built</span>
              </h2>
            </motion.div>
            
            <div className="hidden md:block text-right mb-4">
              <p className="text-muted-foreground font-mono text-[10px] uppercase tracking-[0.5em] mb-2">Systems Deployment</p>
              <div className="flex gap-2 justify-end">
                <motion.div 
                  className="h-[1px] bg-primary" 
                  style={{ width: useTransform(scrollYProgress, [0, 1], ["0px", "100px"]) }}
                />
              </div>
            </div>
          </div>

          <motion.div 
            style={{ x: smoothX }} 
            className="flex gap-20 md:gap-40 px-8 md:px-[15vw] items-center whitespace-nowrap"
          >
            {featuredProjects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
          </motion.div>

          <div className="absolute bottom-10 right-0 pointer-events-none select-none overflow-hidden w-full">
            <motion.span 
              style={{ x: useTransform(scrollYProgress, [0, 1], ["20%", "-40%"]) }}
              className="text-[15vw] font-black text-white/[0.01] font-headline whitespace-nowrap leading-none block"
            >
              ENGINEERING INTELLIGENCE
            </motion.span>
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-section relative z-10">
        <FinalCTA />
      </section>

      <div className="fixed inset-0 pointer-events-none z-[999] opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </main>
  );
}
