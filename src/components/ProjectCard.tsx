
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowRight, Code2 } from 'lucide-react';
import { Project } from '@/app/data/projects';
import { Badge } from '@/components/ui/badge';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      className="relative w-[350px] md:w-[500px] flex-shrink-0 h-[500px] group"
    >
      {/* Background Index Accent */}
      <div className="absolute -top-12 -left-6 text-[12rem] font-bold text-white/[0.03] select-none pointer-events-none group-hover:text-electric-blue/10 transition-colors duration-700 font-headline">
        0{index + 1}
      </div>

      <div className="relative h-full glass-card rounded-3xl p-8 md:p-12 flex flex-col justify-between overflow-hidden border border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent hover:border-electric-blue/30 transition-all duration-500 shadow-2xl">
        {/* Animated Glow Following */}
        <div className="absolute inset-0 bg-gradient-to-tr from-electric-blue/5 via-transparent to-neural-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        <div className="relative z-10">
          <div className="flex justify-between items-start mb-8">
            <div className="p-3 bg-electric-blue/10 rounded-2xl border border-electric-blue/20">
              <Code2 className="w-6 h-6 text-electric-blue" />
            </div>
            <div className="flex gap-3">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-white/5 text-muted-foreground hover:text-electric-blue transition-all">
                  <Github className="w-5 h-5" />
                </a>
              )}
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full hover:bg-white/5 text-muted-foreground hover:text-neural-cyan transition-all">
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          <h3 className="text-3xl md:text-4xl font-bold font-headline mb-4 group-hover:text-electric-blue transition-colors duration-300 tracking-tight">
            {project.title}
          </h3>
          
          <p className="text-muted-foreground text-sm md:text-lg leading-relaxed mb-8 font-medium">
            {project.description}
          </p>
        </div>

        <div className="relative z-10">
          <div className="flex flex-wrap gap-2 mb-10">
            {project.techStack.map((tech) => (
              <Badge 
                key={tech} 
                variant="outline" 
                className="bg-transparent text-[10px] uppercase tracking-widest font-bold border-white/10 text-muted-foreground group-hover:border-electric-blue/20 group-hover:text-white transition-all"
              >
                {tech}
              </Badge>
            ))}
          </div>

          <motion.button 
            whileHover={{ x: 10 }}
            className="flex items-center gap-3 text-sm font-bold text-electric-blue group-hover:text-neural-cyan transition-colors uppercase tracking-widest"
          >
            Explore Project 
            <div className="p-1 rounded-full border border-current">
              <ArrowRight className="w-3 h-3" />
            </div>
          </motion.button>
        </div>

        {/* Decorative corner element */}
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-electric-blue/10 to-transparent rounded-tl-full translate-x-12 translate-y-12 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-700" />
      </div>
    </motion.div>
  );
};
