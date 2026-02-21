
"use client";

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const philosophies = [
  {
    title: 'System Thinking',
    description: 'Deconstructing complex requirements into modular, scalable architectures. Focusing on how components interact to ensure systemic resilience.'
  },
  {
    title: 'Performance-First Engineering',
    description: 'Optimization is not an afterthought. Every line of code is measured for its impact on latency, throughput, and resource utilization.'
  },
  {
    title: 'AI Integration',
    description: 'Implementing intelligence that adds measurable value. Bridging the gap between research models and production-ready applications.'
  },
  {
    title: 'Scalable Architecture',
    description: 'Designing for the future. Utilizing distributed systems and microservices to handle exponential growth without technical debt.'
  }
];

export const EngineeringPhilosophy: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: { x: number; y: number; vx: number; vy: number; size: number }[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      init();
    };

    const init = () => {
      particles = [];
      const count = 40;
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(59, 130, 246, 0.5)';
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.2)';
      ctx.lineWidth = 1;

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section className="py-24 px-6 bg-bg-secondary relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-12"
          >
            Engineering <span className="text-electric-blue">Philosophy</span>
          </motion.h2>

          <div className="space-y-8">
            {philosophies.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="border-l-2 border-border-subtle pl-6 hover:border-electric-blue transition-colors group"
              >
                <h3 className="text-xl font-bold mb-2 uppercase tracking-wide group-hover:text-electric-blue transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="h-[500px] lg:h-[600px] relative rounded-3xl overflow-hidden glass-card">
          <canvas ref={canvasRef} className="w-full h-full absolute inset-0" />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-64 h-64 border border-electric-blue/30 rounded-full animate-spin-slow" />
            <div className="w-48 h-48 border border-neural-cyan/30 rounded-full absolute animate-glow-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};
