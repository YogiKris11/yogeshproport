
"use client";

import React, { useRef } from 'react';
import { HeroCanvasAnimation } from '@/components/HeroCanvasAnimation';
import { AboutMe } from '@/components/AboutMe';
import { ProjectCard } from '@/components/ProjectCard';
import { FinalCTA } from '@/components/FinalCTA';
import { SkillsArsenal } from '@/components/SkillsArsenal';
import { projects } from '@/app/data/projects';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Home() {
  const featuredProjects = projects.filter(p => p.featured);
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);

  return (
    <main className="min-h-screen bg-bg-primary">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-[100] p-6 flex justify-between items-center mix-blend-difference">
        <div className="text-xl font-bold font-headline uppercase tracking-tighter">
          YK<span className="text-electric-blue">.</span>SYS
        </div>
        <div className="hidden md:flex gap-8 text-sm font-mono uppercase tracking-widest font-semibold">
          <a href="#about" className="hover:text-electric-blue transition-colors">About</a>
          <a href="#arsenal" className="hover:text-electric-blue transition-colors">Arsenal</a>
          <a href="#projects" className="hover:text-electric-blue transition-colors">Projects</a>
          <a href="#contact" className="hover:text-electric-blue transition-colors">Contact</a>
        </div>
      </nav>

      <HeroCanvasAnimation />

      <section id="about">
        <AboutMe />
      </section>

      <SkillsArsenal />

      {/* Horizontal Scroll Projects Section */}
      <section id="projects" ref={scrollRef} className="relative h-[400vh] bg-bg-primary">
        <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
          <div className="max-w-7xl mx-auto w-full px-6 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-8xl font-bold uppercase tracking-tight mb-2">
                Things I've <span className="text-electric-blue">Built</span>
              </h2>
              <div className="flex items-center gap-4 text-muted-foreground font-mono text-sm uppercase tracking-[0.3em]">
                <div className="h-px w-12 bg-electric-blue" />
                <span>Selected Works Showcase</span>
              </div>
            </motion.div>
          </div>

          <motion.div style={{ x }} className="flex gap-8 px-6 md:px-[10%]">
            {featuredProjects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
            
            {/* End Cap for layout spacing */}
            <div className="w-[100px] md:w-[300px] flex-shrink-0" />
          </motion.div>

          {/* Background Text Accent */}
          <div className="absolute bottom-10 right-10 pointer-events-none opacity-5 flex flex-col items-end">
            <span className="text-[10vw] font-bold font-headline leading-none">WORKS</span>
            <span className="text-[2vw] font-mono tracking-widest uppercase">Portfolio v2.0</span>
          </div>
        </div>
      </section>

      <section id="contact">
        <FinalCTA />
      </section>

      {/* Floating background elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-electric-blue/5 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-[20%] left-[10%] w-[300px] h-[300px] bg-neural-cyan/5 rounded-full blur-[100px] animate-pulse" />
      </div>
    </main>
  );
}
