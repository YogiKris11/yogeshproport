
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
    id: 'neurolink',
    title: 'NeuroLink',
    description: 'AI-powered idea management app with parent-child idea linking, AI enrichment, and professional UI/UX.',
    techStack: ['Next.js', 'Genkit', 'Firebase', 'Tailwind CSS'],
    featured: true,
  },
  {
    id: 'billsplit-pro',
    title: 'BillSplit Pro',
    description: 'Smart expense splitter app for roommates and trips with group management and simplified “Settle Up” transactions.',
    techStack: ['React Native', 'Node.js', 'PostgreSQL'],
    featured: true,
  },
  {
    id: 'breathtrackpro',
    title: 'BreathTrackPro',
    description: 'Health-focused app for monitoring and tracking respiratory wellness.',
    techStack: ['Flutter', 'Firebase', 'Dart'],
    featured: true,
  },
  {
    id: 'stress-buster',
    title: 'Stress-Buster Game',
    description: 'A planned unique, engaging game designed for relaxation and stress relief.',
    techStack: ['Unity', 'C#', 'WebGL'],
    featured: true,
  },
  {
    id: 'saaf-dilli',
    title: 'Saaf Dilli',
    description: 'Web application for real-time air quality data, personalized health advice, and community engagement for Delhi.',
    techStack: ['Next.js', 'Tailwind CSS', 'OpenWeather API'],
    featured: true,
  }
];
