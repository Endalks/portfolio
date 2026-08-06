export interface ProjectDemoConfig {
  liveLink?: string;
  demoVideo?: string;
}

export const projectDemos: Record<string, ProjectDemoConfig> = {
  // Example mappings based on EXACT GitHub repository names:
  // Add your actual repository names below instead of "example-repo-name"
  "wardrobe-map": {
    liveLink: "https://wardrobe-map.netlify.app",
    demoVideo: "https://www.youtube.com/embed/e-4a3-MwOoM"
  },
  "Endalk Tech_": {
    liveLink: "http://Endalk Tech-tech-lab.vercel.app/",
    demoVideo: "https://www.youtubeexample.com/embed/dQw4w9WgXcQ?autoplay=1"
  }
  ,
  "E-news": {
    demoVideo: "https://www.youtube.com/embed/9MHZaR8mMeI"
  },
   "Loan-Management-System": {
    demoVideo: "https://www.youtube.com/embed/GSt_geI-CEA"
  },
};
