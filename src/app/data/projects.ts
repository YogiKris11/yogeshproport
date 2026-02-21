export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  techStack: string[];
  github?: string;
  live?: string;
  featured: boolean;
  engineeringWins: string[];
}

export const projects: Project[] = [
  {
    id: 'breathe-track-pro',
    title: 'BreatheTrackPro',
    description: 'Health-focused system for monitoring and tracking respiratory wellness through real-time data analysis.',
    fullDescription: 'BreatheTrackPro is a sophisticated health monitoring platform that utilizes edge-computing algorithms to analyze respiratory patterns. It provides real-time feedback and environmental trigger alerts based on localized sensor data.',
    techStack: ['TypeScript', 'React Native', 'Firebase', 'TensorFlow'],
    featured: true,
    engineeringWins: [
      'Implemented low-latency signal processing for real-time breath detection.',
      'Developed a custom data-smoothing algorithm for noisy sensor inputs.',
      'Architected a cross-platform synchronization layer with offline support.'
    ]
  },
  {
    id: 'bill-split-pro',
    title: 'BillSplit Pro',
    description: 'High-performance expense management engine for complex group settling and debt minimization.',
    fullDescription: 'A C++ powered financial optimization tool designed to minimize transaction overhead in multi-party expense scenarios. It uses graph-balancing theory to simplify "settle up" logic for large-scale groups.',
    techStack: ['C++', 'Node.js', 'PostgreSQL', 'Redis'],
    featured: true,
    engineeringWins: [
      'Engineered a debt-minimization algorithm using directed acyclic graphs (DAG).',
      'Optimized settlement calculations to O(V+E) time complexity.',
      'Built a robust currency conversion engine with atomic update consistency.'
    ]
  },
  {
    id: 'my-movie-site',
    title: 'MyMovieSite',
    description: 'Immersive entertainment discovery platform with intelligent recommendation engine.',
    fullDescription: 'MyMovieSite is a data-driven platform for discovering cinematic content. It features a custom-built recommendation system that leverages collaborative filtering and metadata analysis to personalize user feeds.',
    techStack: ['TypeScript', 'Next.js', 'Genkit', 'Tailwind'],
    featured: true,
    engineeringWins: [
      'Built a high-performance search engine using vector-based metadata indexing.',
      'Implemented optimistic UI transitions for a seamless 60fps experience.',
      'Integrated LLM-based narrative analysis for generated movie summaries.'
    ]
  },
  {
    id: 'saaf-dilli-project',
    title: 'Saaf Dilli Project',
    description: 'Environmental monitoring system providing real-time air quality data and health intelligence for Delhi.',
    fullDescription: 'Saaf Dilli is a community-driven environmental analytics tool. It aggregates hyper-local sensor data to provide neighborhood-level air quality indices and AI-generated health recommendations.',
    techStack: ['TypeScript', 'Next.js', 'OpenWeather API', 'Leaflet'],
    featured: true,
    engineeringWins: [
      'Aggregated real-time data from 100+ localized sensor nodes.',
      'Built a dynamic heatmap visualization engine with Leaflet.js.',
      'Implemented a critical AQI alert system using server-sent events.'
    ]
  }
];
