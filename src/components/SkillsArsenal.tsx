
"use client";

import React from 'react';
import { motion } from 'framer-motion';

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
    <div className="relative py-32 bg-background overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-24">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.4em] text-primary font-bold mb-4 block">
            Capabilities
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold uppercase tracking-tighter font-headline leading-none">
            My Arsenal of <br /> <span className="text-accent">Skills</span>
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-12 md:gap-y-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="flex justify-between items-end mb-4">
                <div className="flex items-center gap-4">
                  <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-card border border-white/5 group-hover:border-primary/50 transition-colors font-bold text-[10px] text-primary">
                    {skill.icon}
                  </span>
                  <h3 className="text-lg md:text-xl font-bold uppercase tracking-tight group-hover:text-primary transition-colors">
                    {skill.name}
                  </h3>
                </div>
                <div className="text-right">
                  <span className="text-xl md:text-2xl font-bold font-headline text-white/10 group-hover:text-accent transition-colors">
                    {skill.proficiency}%
                  </span>
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed max-w-xl text-sm">
                {skill.description}
              </p>

              <div className="relative h-1 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.proficiency}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                  className="h-full bg-gradient-to-r from-primary to-accent relative"
                >
                  <div className="absolute top-0 right-0 w-4 h-full bg-white/20 blur-sm" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
