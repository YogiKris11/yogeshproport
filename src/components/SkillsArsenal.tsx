"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Progress } from '@/components/ui/progress';

const skills = [
  {
    name: 'React & Next.js',
    description: 'Architecting digital symphonies with server-rendered React, crafting pixel-perfect UIs that are as performant as they are beautiful.',
    proficiency: 92,
    icon: '⚛️',
  },
  {
    name: 'TypeScript',
    description: 'Weaving a web of type-safe code, ensuring applications are robust, scalable, and a pleasure to maintain.',
    proficiency: 87,
    icon: 'TS',
  },
  {
    name: 'Flutter',
    description: 'Building beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.',
    proficiency: 90,
    icon: '📱',
  },
  {
    name: 'Node.js',
    description: 'Powering the server-side with elegant, non-blocking APIs that handle data with speed and efficiency.',
    proficiency: 82,
    icon: '🟢',
  },
  {
    name: 'Databases',
    description: 'Orchestrating complex data ecosystems, from structured relational schemas to flexible NoSQL documents.',
    proficiency: 77,
    icon: '🗄️',
  },
  {
    name: 'Cloud Infra',
    description: 'Deploying ideas into the ether. Leveraging modern cloud infrastructure to deliver seamless, globally-scaled experiences.',
    proficiency: 85,
    icon: '☁️',
  },
  {
    name: 'UI/UX Design',
    description: 'Translating human emotion into digital form, creating intuitive and unforgettable user journeys from concept to prototype.',
    proficiency: 89,
    icon: '🎨',
  },
];

export const SkillsArsenal: React.FC = () => {
  return (
    <section id="arsenal" className="py-32 px-6 bg-bg-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-electric-blue/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <span className="text-sm font-mono uppercase tracking-[0.3em] text-electric-blue mb-4 block">
              Capabilities
            </span>
            <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter font-headline">
              My Arsenal of <br /> <span className="text-neural-cyan">Skills</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="flex justify-between items-end mb-4">
                <div className="flex items-center gap-4">
                  <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-surface border border-border-subtle group-hover:border-electric-blue/50 transition-colors font-bold text-xs text-electric-blue">
                    {skill.icon}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold uppercase tracking-tight group-hover:text-electric-blue transition-colors">
                      {skill.name}
                    </h3>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold font-headline text-muted-foreground/50 group-hover:text-neural-cyan transition-colors">
                    {skill.proficiency}%
                  </span>
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed max-w-xl text-sm md:text-base">
                {skill.description}
              </p>

              <div className="relative h-1.5 w-full bg-surface rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.proficiency}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                  className="h-full bg-gradient-to-r from-electric-blue to-neural-cyan relative"
                >
                  <div className="absolute top-0 right-0 w-4 h-full bg-white/20 blur-sm" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
