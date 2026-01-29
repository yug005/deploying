
export interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  type?: 'Main' | 'Hackathon';
  isHackathon?: boolean;
}

export interface TechCategory {
  title: string;
  items: string[];
}
