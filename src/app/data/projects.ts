
export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  techStack: string[];
  github?: string;
  live?: string;
  featured: boolean;
  image: string;
  engineeringWins: string[];
}

export const projects: Project[] = [
  {
    id: 'neurolink',
    title: 'NeuroLink',
    description: 'AI-powered idea management app with parent-child idea linking and AI enrichment.',
    fullDescription: 'NeuroLink is a next-generation knowledge management system that uses Large Language Models to automatically categorize, link, and expand upon your notes. It features a graph-based visualization of idea clusters and provides intelligent summaries of complex document hierarchies.',
    techStack: ['Next.js', 'Genkit', 'Firebase', 'Tailwind'],
    featured: true,
    image: 'https://picsum.photos/seed/neurolink/1000/800',
    engineeringWins: [
      'Implemented recursive vector embedding for hierarchical idea linking.',
      'Optimized real-time graph rendering for up to 500 nodes at 60fps.',
      'Reduced LLM latency by 40% using streaming response handling.'
    ]
  },
  {
    id: 'billsplit-pro',
    title: 'BillSplit Pro',
    description: 'Smart expense splitter for groups with simplified “Settle Up” logic.',
    fullDescription: 'BillSplit Pro takes the headache out of group finances. Using a custom graph-balancing algorithm, it minimizes the number of transactions required to settle debts among large groups. It supports multi-currency, receipt scanning (OCR), and real-time expense syncing.',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Cloud Vision'],
    featured: true,
    image: 'https://picsum.photos/seed/billsplit/1000/800',
    engineeringWins: [
      'Engineered a debt-minimization algorithm using graph theory.',
      'Integrated Google Cloud Vision for high-accuracy receipt OCR.',
      'Architected a real-time sync layer with optimistic UI updates.'
    ]
  },
  {
    id: 'breathtrackpro',
    title: 'BreathTrackPro',
    description: 'Health-focused app for monitoring and tracking respiratory wellness through data.',
    fullDescription: 'A comprehensive health suite designed for respiratory care. It integrates with wearable sensors to provide real-time feedback on breathing patterns, lung capacity estimations, and environmental trigger alerts based on localized air quality data.',
    techStack: ['Flutter', 'Firebase', 'TensorFlow Lite', 'Dart'],
    featured: true,
    image: 'https://picsum.photos/seed/breath/1000/800',
    engineeringWins: [
      'Developed on-device ML models for real-time respiratory pattern analysis.',
      'Built a low-latency Bluetooth bridge for medical sensor integration.',
      'Implemented HIPAA-compliant data encryption and storage.'
    ]
  },
  {
    id: 'stress-buster',
    title: 'Stress-Buster Game',
    description: 'A planned unique, engaging game designed for relaxation and stress relief.',
    fullDescription: 'Stress-Buster is an experimental WebGL experience that combines rhythmic breathing exercises with generative audio-visuals. It uses biofeedback to dynamically adjust the game complexity to maximize relaxation.',
    techStack: ['Three.js', 'React', 'Web Audio API', 'Framer Motion'],
    featured: true,
    image: 'https://picsum.photos/seed/stressbuster/1000/800',
    engineeringWins: [
      'Custom shader development for generative, reactive visual environments.',
      'Engineered an adaptive audio engine that syncs with user heart rate.',
      'Optimized WebGL rendering for mobile browser performance.'
    ]
  },
  {
    id: 'saaf-dilli',
    title: 'Saaf Dilli',
    description: 'Web application for real-time air quality data and health advice for Delhi.',
    fullDescription: 'Saaf Dilli (Clean Delhi) is a community-driven environmental monitoring tool. It aggregates data from multiple API sources and hyper-local sensors to provide neighborhood-level air quality indices and health recommendations.',
    techStack: ['Next.js', 'Tailwind', 'OpenWeather API', 'Leaflet'],
    featured: true,
    image: 'https://picsum.photos/seed/saaf/1000/800',
    engineeringWins: [
      'Aggregated real-time data from 50+ localized sensor stations.',
      'Built a dynamic heatmap visualization using Leaflet.js.',
      'Implemented a push notification system for critical AQI alerts.'
    ]
  }
];
