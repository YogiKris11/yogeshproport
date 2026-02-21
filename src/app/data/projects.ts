
export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  github?: string;
  live?: string;
  featured: boolean;
  image: string;
}

export const projects: Project[] = [
  {
    id: 'neurolink',
    title: 'NeuroLink',
    description: 'Advanced cognitive management system leveraging generative AI to architect complex idea hierarchies with sub-second latency.',
    techStack: ['Next.js', 'Genkit', 'Firebase', 'Tailwind CSS'],
    featured: true,
    image: 'https://picsum.photos/seed/neurolink/800/600',
  },
  {
    id: 'billsplit-pro',
    title: 'BillSplit Pro',
    description: 'Algorithmic expense orchestration platform designed for high-concurrency group transactions and automated debt resolution.',
    techStack: ['React Native', 'Node.js', 'PostgreSQL'],
    featured: true,
    image: 'https://picsum.photos/seed/billsplit/800/600',
  },
  {
    id: 'breathtrackpro',
    title: 'BreathTrackPro',
    description: 'Biometric wellness engine tracking respiratory signatures through real-time data streaming and predictive analytics.',
    techStack: ['Flutter', 'Firebase', 'Dart'],
    featured: true,
    image: 'https://picsum.photos/seed/breath/800/600',
  },
  {
    id: 'stress-buster',
    title: 'Stress-Buster',
    description: 'Physiological feedback loop game utilizing interactive WebGL shaders to modulate user stress levels through immersive play.',
    techStack: ['Unity', 'C#', 'WebGL'],
    featured: true,
    image: 'https://picsum.photos/seed/stressbuster/800/600',
  },
  {
    id: 'saaf-dilli',
    title: 'Saaf Dilli',
    description: 'Environmental intelligence platform aggregating multi-source AQI data to provide real-time health interventions for metropolitan areas.',
    techStack: ['Next.js', 'Tailwind CSS', 'OpenWeather API'],
    featured: true,
    image: 'https://picsum.photos/seed/saaf/800/600',
  }
];
