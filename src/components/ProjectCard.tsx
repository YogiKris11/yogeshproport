
"use client";

import React, { useRef } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';
import { Github, ExternalLink, ArrowRight, Layers, Cpu, Globe, Code2 } from 'lucide-react';
import { Project } from '@/app/data/projects';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from 'next/image';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Mouse tilt effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { stiffness: 300, damping: 30 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    
    mouseX.set(x);
    mouseY.set(y);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className="relative w-[85vw] md:w-[650px] flex-shrink-0 h-[60vh] md:h-[70vh] group perspective-1000"
    >
      {/* Background Index Decor */}
      <div className="absolute -top-20 -left-10 text-[20rem] font-bold text-white/[0.02] select-none pointer-events-none group-hover:text-primary/[0.05] transition-colors duration-1000 font-headline leading-none">
        {index + 1}
      </div>

      <div className="relative h-full w-full bg-card/40 backdrop-blur-2xl rounded-[2rem] overflow-hidden border border-white/5 group-hover:border-primary/30 transition-all duration-700 shadow-[0_30px_100px_rgba(0,0,0,0.5)]">
        
        {/* Project Image Header */}
        <div className="relative h-[45%] w-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000">
          <Image 
            src={project.image} 
            alt={project.title}
            fill
            className="object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
            data-ai-hint="high tech"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
          <div className="absolute top-6 left-6 flex gap-2">
            {project.techStack.slice(0, 2).map(tech => (
              <Badge key={tech} className="bg-white/10 backdrop-blur-md border-white/10 text-[10px] uppercase tracking-tighter">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-8 md:p-12 flex flex-col justify-between h-[55%]">
          <div style={{ transform: 'translateZ(50px)' }}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-4xl md:text-5xl font-bold font-headline tracking-tighter group-hover:text-primary transition-colors duration-500 whitespace-normal">
                {project.title}
              </h3>
              <Layers className="w-6 h-6 text-muted-foreground group-hover:text-accent transition-colors" />
            </div>
            
            <p className="text-muted-foreground text-sm md:text-lg leading-relaxed font-medium line-clamp-3 whitespace-normal">
              {project.description}
            </p>
          </div>

          <div className="flex items-center justify-between mt-auto" style={{ transform: 'translateZ(30px)' }}>
            <div className="flex gap-4">
              {project.github && (
                <a href={project.github} className="text-muted-foreground hover:text-white transition-colors">
                  <Github className="w-6 h-6" />
                </a>
              )}
              {project.live && (
                <a href={project.live} className="text-muted-foreground hover:text-white transition-colors">
                  <ExternalLink className="w-6 h-6" />
                </a>
              )}
            </div>

            <Dialog>
              <DialogTrigger asChild>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-4 bg-primary/10 hover:bg-primary text-primary hover:text-white px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 border border-primary/20"
                >
                  View More
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl bg-background/95 backdrop-blur-3xl border-white/10 text-foreground overflow-y-auto max-h-[90vh]">
                <DialogHeader>
                  <DialogTitle className="text-5xl font-black font-headline tracking-tighter mb-4 text-white">
                    {project.title}
                  </DialogTitle>
                </DialogHeader>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
                  <div className="space-y-8">
                    <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10">
                      <Image 
                        src={project.image} 
                        alt={project.title} 
                        fill 
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map(tech => (
                        <Badge key={tech} variant="secondary" className="bg-white/5 text-white border-white/10 uppercase tracking-widest text-[10px] px-3 py-1">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h4 className="flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-[0.3em] mb-4">
                        <Cpu className="w-4 h-4" />
                        System Overview
                      </h4>
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        {project.fullDescription}
                      </p>
                    </div>

                    <div className="p-6 bg-white/[0.02] border border-white/5 rounded-3xl">
                      <h4 className="flex items-center gap-2 text-white font-mono text-xs uppercase tracking-[0.3em] mb-4">
                        <Code2 className="w-4 h-4" />
                        Engineering Wins
                      </h4>
                      <ul className="space-y-3 text-sm text-muted-foreground">
                        {project.engineeringWins.map((win, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                            {win}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex gap-4">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 p-4 rounded-2xl transition-all group">
                        <Github className="w-5 h-5 group-hover:text-primary transition-colors" />
                        <span className="font-bold text-xs uppercase tracking-widest">Source</span>
                      </a>
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-3 bg-primary/10 hover:bg-primary border border-primary/20 p-4 rounded-2xl transition-all group">
                        <Globe className="w-5 h-5 group-hover:text-white transition-colors" />
                        <span className="font-bold text-xs uppercase tracking-widest">Live Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Floating Glow */}
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-[80px] group-hover:bg-accent/30 transition-all duration-1000" />
      </div>
    </motion.div>
  );
};
