
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import { Project } from '@/app/data/projects';
import { Badge } from '@/components/ui/badge';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group relative"
    >
      <div className="glass-card rounded-2xl p-8 h-full flex flex-col hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] overflow-hidden">
        {/* Animated gradient reveal on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative z-10 flex flex-col h-full">
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-2xl font-bold font-headline">{project.title}</h3>
            <div className="flex gap-4">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-electric-blue transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              )}
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-neural-cyan transition-colors">
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          <p className="text-muted-foreground mb-8 line-clamp-3 font-medium">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-8 mt-auto">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="secondary" className="bg-muted/50 text-[10px] uppercase tracking-wider font-semibold border-border-subtle">
                {tech}
              </Badge>
            ))}
          </div>

          <button className="flex items-center gap-2 text-sm font-bold text-electric-blue hover:text-neural-cyan transition-colors uppercase tracking-widest">
            View More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
