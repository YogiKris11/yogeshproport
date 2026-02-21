
"use client";

import React from 'react';
import { HeroCanvasAnimation } from '@/components/HeroCanvasAnimation';
import { AboutMe } from '@/components/AboutMe';
import { ProjectCard } from '@/components/ProjectCard';
import { EngineeringPhilosophy } from '@/components/EngineeringPhilosophy';
import { TechStackGrid } from '@/components/TechStackGrid';
import { FinalCTA } from '@/components/FinalCTA';
import { DescriptionGenerator } from '@/components/DescriptionGenerator';
import { projects } from '@/app/data/projects';
import { motion } from 'framer-motion';

export default function Home() {
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <main className="min-h-screen bg-bg-primary">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-[100] p-6 flex justify-between items-center mix-blend-difference">
        <div className="text-xl font-bold font-headline uppercase tracking-tighter">
          YK<span className="text-electric-blue">.</span>SYS
        </div>
        <div className="hidden md:flex gap-8 text-sm font-mono uppercase tracking-widest font-semibold">
          <a href="#about" className="hover:text-electric-blue transition-colors">About</a>
          <a href="#projects" className="hover:text-electric-blue transition-colors">Projects</a>
          <a href="#philosophy" className="hover:text-electric-blue transition-colors">Philosophy</a>
          <a href="#tech" className="hover:text-electric-blue transition-colors">Stack</a>
          <a href="#contact" className="hover:text-electric-blue transition-colors">Contact</a>
        </div>
      </nav>

      <HeroCanvasAnimation />

      <section id="about">
        <AboutMe />
      </section>

      <section id="projects" className="py-24 px-6 relative z-10 bg-bg-primary">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-bold uppercase tracking-tight mb-4"
              >
                Featured <span className="text-electric-blue">Systems</span>
              </motion.h2>
              <p className="text-muted-foreground font-mono uppercase tracking-widest max-w-xl">
                High-performance architectures and AI-driven applications at scale.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-right"
            >
              <span className="text-5xl font-bold text-muted/20 font-headline">01</span>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
          </div>

          <DescriptionGenerator />
        </div>
      </section>

      <section id="philosophy">
        <EngineeringPhilosophy />
      </section>

      <section id="tech">
        <TechStackGrid />
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
