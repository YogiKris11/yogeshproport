
"use client";

import React from 'react';
import { motion } from 'framer-motion';

const techGroups = [
  {
    category: 'AI / ML',
    items: ['PyTorch', 'TensorFlow', 'scikit-learn', 'LangChain', 'OpenAI SDK']
  },
  {
    category: 'Full Stack',
    items: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis']
  },
  {
    category: 'DevOps',
    items: ['Docker', 'Kubernetes', 'AWS', 'Terraform', 'CI/CD']
  },
  {
    category: 'Systems',
    items: ['Rust', 'Go', 'gRPC', 'RabbitMQ', 'Distributed Logic']
  },
  {
    category: 'Tooling',
    items: ['Git', 'Vercel', 'Postman', 'Sentry', 'Weights & Biases']
  }
];

export const TechStackGrid: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-bg-primary">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4">
            Technical <span className="text-neural-cyan">Capabilities</span>
          </h2>
          <p className="text-muted-foreground font-mono">Precision-crafted tech stack for modern AI systems.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {techGroups.map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card rounded-xl p-6 group hover:border-neural-cyan/50 relative overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-neural-cyan/5 rounded-full blur-2xl group-hover:bg-neural-cyan/10 transition-all" />
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground mb-6 border-b border-border pb-2 group-hover:text-neural-cyan transition-colors">
                {group.category}
              </h3>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-electric-blue group-hover:bg-neural-cyan transition-colors" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
