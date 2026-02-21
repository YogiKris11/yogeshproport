"use client";

import React, { useRef } from 'react';
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion';
import { Github, Globe, ArrowRight, Cpu, Code2, Database, Zap, Activity, Film, Wind } from 'lucide-react';
import { Project } from '@/app/data/projects';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const SchematicVisual = ({ id }: { id: string }) => {
  const getIcon = () => {
    switch (id) {
      case 'breathe-track-pro': return <Activity className="w-20 h-20 text-primary" />;
      case 'bill-split-pro': return <Database className="w-20 h-20 text-accent" />;
      case 'my-movie-site': return <Film className="w-20 h-20 text-primary" />;
      case 'saaf-dilli-project': return <Wind className="w-20 h-20 text-accent" />;
      default: return <Cpu className="w-20 h-20 text-primary" />;
    }
  };

  return (
    <div className="absolute inset-0 bg-black overflow-hidden flex items-center justify-center">
      {/* Schematic Grid */}
      <div className="absolute inset-0 opacity-20" 
        style={{ 
          backgroundImage: 'linear-gradient(#3B82F6 1px, transparent 1px), linear-gradient(90deg, #3B82F6 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} 
      />
      
      {/* Floating Elements */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity }}
        className="relative z-10"
      >
        {getIcon()}
      </motion.div>

      {/* Scanning Line */}
      <motion.div 
        animate={{ top: ['0%', '100%'] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 w-full h-[2px] bg-primary/40 shadow-[0_0_15px_#3B82F6] z-20"
      />

      {/* Technical Data Text */}
      <div className="absolute bottom-4 left-4 font-mono text-[8px] text-primary/40 space-y-1">
        <p>SYSTEM_ID: {id.toUpperCase()}</p>
        <p>STATUS: ACTIVE_NODE_RUNNING</p>
        <p>ENCRYPTION: AES-256_STABLE</p>
      </div>
    </div>
  );
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
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
      className="relative w-[85vw] md:w-[700px] flex-shrink-0 h-[60vh] md:h-[75vh] group"
    >
      <div className="absolute -top-20 -left-10 text-[20rem] font-bold text-white/[0.02] select-none pointer-events-none group-hover:text-primary/[0.05] transition-colors duration-1000 font-headline leading-none">
        0{index + 1}
      </div>

      <div className="relative h-full w-full bg-card/40 backdrop-blur-3xl rounded-[2.5rem] overflow-hidden border border-white/5 group-hover:border-primary/30 transition-all duration-700 shadow-[0_30px_100px_rgba(0,0,0,0.5)] flex flex-col">
        
        {/* Generative Visual Header */}
        <div className="relative h-[45%] w-full">
          <SchematicVisual id={project.id} />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
          <div className="absolute top-6 left-6 flex flex-wrap gap-2">
            {project.techStack.map(tech => (
              <Badge key={tech} className="bg-white/10 backdrop-blur-md border-white/10 text-[9px] uppercase tracking-wider px-3">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div className="p-8 md:p-12 flex flex-col justify-between flex-1">
          <div style={{ transform: 'translateZ(60px)' }}>
            <h3 className="text-4xl md:text-5xl font-black font-headline tracking-tighter group-hover:text-primary transition-colors duration-500 whitespace-normal uppercase mb-4">
              {project.title}
            </h3>
            
            <p className="text-muted-foreground text-sm md:text-xl leading-relaxed font-medium line-clamp-3 whitespace-normal">
              {project.description}
            </p>
          </div>

          <div className="flex items-center justify-between mt-auto" style={{ transform: 'translateZ(40px)' }}>
            <div className="flex gap-4">
              <Zap className="w-5 h-5 text-primary animate-pulse" />
              <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.3em] self-center">System Optimized</span>
            </div>

            <Dialog>
              <DialogTrigger asChild>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-4 bg-primary text-white px-10 py-4 rounded-full text-xs font-black uppercase tracking-widest transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                >
                  Inspect Architecture
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </DialogTrigger>
              <DialogContent className="max-w-5xl bg-background/95 backdrop-blur-3xl border-white/10 text-foreground overflow-y-auto max-h-[90vh] rounded-[3rem]">
                <DialogHeader>
                  <DialogTitle className="text-6xl font-black font-headline tracking-tighter mb-4 text-white uppercase">
                    {project.title}
                  </DialogTitle>
                </DialogHeader>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-8">
                  <div className="space-y-8">
                    <div className="relative aspect-video rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-black">
                       <SchematicVisual id={project.id} />
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map(tech => (
                        <Badge key={tech} variant="secondary" className="bg-white/5 text-white border-white/10 uppercase tracking-widest text-[10px] px-4 py-2">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h4 className="flex items-center gap-2 text-primary font-mono text-xs uppercase tracking-[0.4em] mb-4">
                        <Cpu className="w-4 h-4" />
                        System Breakdown
                      </h4>
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        {project.fullDescription}
                      </p>
                    </div>

                    <div className="p-8 bg-white/[0.03] border border-white/5 rounded-[2rem]">
                      <h4 className="flex items-center gap-2 text-accent font-mono text-xs uppercase tracking-[0.4em] mb-6">
                        <Code2 className="w-4 h-4" />
                        Core Accomplishments
                      </h4>
                      <ul className="space-y-4 text-sm md:text-base text-muted-foreground">
                        {project.engineeringWins.map((win, i) => (
                          <li key={i} className="flex items-start gap-4">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0 shadow-[0_0_10px_#3B82F6]" />
                            {win}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex gap-4">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 p-5 rounded-2xl transition-all group">
                          <Github className="w-5 h-5 group-hover:text-primary transition-colors" />
                          <span className="font-bold text-xs uppercase tracking-[0.2em]">Repository</span>
                        </a>
                      )}
                      <a href={project.live || "#"} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-3 bg-primary/10 hover:bg-primary border border-primary/20 p-5 rounded-2xl transition-all group">
                        <Globe className="w-5 h-5 group-hover:text-white transition-colors" />
                        <span className="font-bold text-xs uppercase tracking-[0.2em]">Access System</span>
                      </a>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-[100px] group-hover:bg-accent/20 transition-all duration-1000" />
      </div>
    </motion.div>
  );
};
