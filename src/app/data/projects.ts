
export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  github?: string;
  live?: string;
  featured: boolean;
  image?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'NeuralArchitect Node',
    description: 'A distributed system for low-latency inference orchestration across heterogeneous edge clusters, utilizing dynamic load balancing and priority-based task scheduling.',
    techStack: ['Python', 'PyTorch', 'Rust', 'Kubernetes', 'gRPC'],
    github: 'https://github.com',
    live: 'https://demo.com',
    featured: true,
  },
  {
    id: '2',
    title: 'CognitivePipeline OS',
    description: 'An end-to-end automated machine learning platform that streamlines feature engineering, model selection, and deployment workflows for enterprise-scale AI applications.',
    techStack: ['TypeScript', 'Next.js', 'PostgreSQL', 'TensorFlow.js', 'Docker'],
    github: 'https://github.com',
    live: 'https://demo.com',
    featured: true,
  },
  {
    id: '3',
    title: 'SentientGraph Engine',
    description: 'A high-performance graph database optimized for real-time relational intelligence and knowledge graph traversal, powering complex AI recommendation systems.',
    techStack: ['C++', 'Go', 'Redis', 'Neo4j', 'GraphQL'],
    github: 'https://github.com',
    live: 'https://demo.com',
    featured: true,
  },
  {
    id: '4',
    title: 'AuraVision Core',
    description: 'Computer vision framework for real-time spatial awareness and object interaction in augmented reality environments, featuring sub-10ms processing latency.',
    techStack: ['Swift', 'Metal', 'OpenCV', 'CoreML'],
    github: 'https://github.com',
    featured: false,
  }
];
