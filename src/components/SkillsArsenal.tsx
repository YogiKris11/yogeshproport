
"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Layers, Terminal, Smartphone, Database, Globe, Palette, Cpu } from 'lucide-react';

const skills = [
  {
    name: 'React & Next.js',
    description: 'Architecting digital symphonies with server-rendered React, crafting pixel-perfect UIs that are as performant as they are beautiful.',
    proficiency: 92,
    icon: <Globe className="w-8 h-8" />,
    tech: ['Server Components', 'App Router', 'Vercel']
  },
  {
    name: 'TypeScript',
    description: 'Weaving a web of type-safe code, ensuring applications are robust, scalable, and a pleasure to maintain.',
    proficiency: 87,
    icon: <Terminal className="w-8 h-8" />,
    tech: ['Advanced Types', 'Generics', 'Utility Types']
  },
  {
    name: 'Flutter',
    description: 'Building beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.',
    proficiency: 90,
    icon: <Smartphone className="w-8 h-8" />,
    tech: ['Dart', 'Riverpod', 'Custom Paintings']
  },
  {
    name: 'Node.js',
    description: 'Powering the server-side with elegant, non-blocking APIs that handle data with speed and efficiency.',
    proficiency: 82,
    icon: <Cpu className="w-8 h-8" />,
    tech: ['Express', 'Auth.js', 'WebSockets']
  },
  {
    name: 'Databases',
    description: 'Orchestrating complex data ecosystems, from structured relational schemas to flexible NoSQL documents.',
    proficiency: 77,
    icon: <Database className="w-8 h-8" />,
    tech: ['Firestore', 'PostgreSQL', 'Redis']
  },
  {
    name: 'Cloud Infra',
    description: 'Deploying ideas into the ether. Leveraging modern cloud infrastructure to deliver seamless, globally-scaled experiences.',
    proficiency: 85,
    icon: <Layers className="w-8 h-8" />,
    tech: ['Firebase', 'Docker', 'CI/CD Pipelines']
  },
  {
    name: 'UI/UX Design',
    description: 'Translating human emotion into digital form, creating intuitive and unforgettable user journeys from concept to prototype.',
    proficiency: 89,
    icon: <Palette className="w-8 h-8" />,
    tech: ['Figma', 'Framer Motion', 'Shadcn UI']
  },
];

export const SkillsArsenal: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Precision docked at -410% for 7 skills to ensure the last one docks perfectly at 100% scroll.
  const xTranslate = useTransform(scrollYProgress, [0, 1], ["0%", "-410%"]);
  const smoothX = useSpring(xTranslate, { stiffness: 50, damping: 25, restDelta: 0.001 });

  return (
    <div ref={containerRef} className="h-[500vh] relative bg-black">
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
        
        <div className="absolute top-[12%] left-0 w-full px-8 md:px-24 flex justify-between items-end z-20 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-lg md:text-xl font-bold uppercase leading-none tracking-tighter font-headline text-white/90">
              Technical <br /> <span className="text-accent">Arsenal</span>
            </h2>
          </motion.div>
          
          <div className="hidden md:block text-right mb-4">
            <p className="text-muted-foreground font-mono text-[10px] uppercase tracking-[0.5em] mb-2">Capabilities Registry</p>
            <div className="flex gap-2 justify-end">
              <motion.div 
                className="h-[1px] bg-accent" 
                style={{ width: useTransform(scrollYProgress, [0, 1], ["0px", "120px"]) }}
              />
            </div>
          </div>
        </div>

        <motion.div 
          style={{ x: smoothX }} 
          className="flex gap-12 md:gap-24 px-8 md:px-[20vw] items-center whitespace-nowrap"
        >
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              className="relative w-[85vw] md:w-[450px] h-[50vh] flex-shrink-0 group"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="absolute -top-12 -left-6 text-7xl font-black text-white/[0.03] select-none pointer-events-none group-hover:text-accent/[0.08] transition-colors duration-700 font-headline">
                {String(idx + 1).padStart(2, '0')}
              </div>

              <div className="h-full w-full bg-card/40 backdrop-blur-3xl rounded-[2rem] border border-white/5 p-8 md:p-12 flex flex-col justify-between hover:border-accent/40 transition-all duration-700 shadow-2xl overflow-hidden whitespace-normal">
                
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-accent/5 rounded-full blur-[80px] group-hover:bg-accent/10 transition-all duration-1000" />

                <div>
                  <div className="mb-8 p-4 w-fit rounded-2xl bg-white/5 border border-white/5 text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-black transition-all duration-500">
                    {skill.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black font-headline tracking-tighter uppercase mb-4 text-white">
                    {skill.name}
                  </h3>
                  <p className="text-muted-foreground text-xs md:text-sm leading-relaxed font-medium mb-8">
                    {skill.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {skill.tech.map(t => (
                      <span key={t} className="text-[8px] font-mono uppercase tracking-widest px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/40">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto">
                  <div className="flex justify-between items-end mb-4">
                    <span className="text-[10px] font-mono text-white/30 uppercase tracking-[0.3em]">Efficiency Rating</span>
                    <span className="text-2xl font-black font-headline text-accent">{skill.proficiency}%</span>
                  </div>
                  <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-accent"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.proficiency}%` }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="absolute bottom-10 left-0 pointer-events-none select-none overflow-hidden w-full opacity-[0.02]">
          <motion.span 
            style={{ x: useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]) }}
            className="text-[10vw] font-black text-white font-headline whitespace-nowrap leading-none block"
          >
            CORE_ARCHITECTURE_LOGIC
          </motion.span>
        </div>
      </div>
    </div>
  );
};
