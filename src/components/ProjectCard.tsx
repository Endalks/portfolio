"use client";

import { motion } from "framer-motion";
import { Star, GitFork, ExternalLink, Play } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";
import { GithubRepo } from "@/lib/github";
import { projectDemos } from "@/config/projectDemos";

interface ProjectCardProps {
  project: GithubRepo;
  onWatchDemo: (url: string) => void;
}

export function ProjectCard({ project, onWatchDemo }: ProjectCardProps) {
  const customData = projectDemos[project.name] || {};

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -10 }}
      className="glass-card rounded-2xl overflow-hidden group flex flex-col h-full border border-white/10 shadow-[0_0_15px_rgba(0,0,0,0.2)]"
    >
      <div className="p-6 space-y-4 flex-grow flex flex-col">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold font-heading group-hover:text-primary transition-colors flex-1 truncate pr-2">
            {project.name}
          </h3>
          <div className="flex items-center gap-3 text-sm text-muted-foreground shrink-0">
            <span className="flex items-center gap-1"><Star size={14} className="text-yellow-500" /> {project.stargazers_count}</span>
            <span className="flex items-center gap-1"><GitFork size={14} /> {project.forks_count}</span>
          </div>
        </div>

        <p className="text-muted-foreground text-sm line-clamp-3 mb-4 flex-grow min-h-[4rem]">
          {project.description || "No description available."}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.language && (
             <span className="px-2 py-1 text-xs font-medium bg-primary/10 border border-primary/20 rounded-md text-primary">
                {project.language}
             </span>
          )}
          {project.topics && project.topics.slice(0,3).map(tag => (
            <span key={tag} className="px-2 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-md text-accent">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="pt-6 flex flex-wrap items-center gap-3 border-t border-white/10 mt-4">
          <a href={project.html_url} target="_blank" rel="noreferrer" className="flex flex-1 items-center justify-center gap-2 py-2.5 px-3 text-xs font-medium bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg hover:text-white transition-all shadow-sm">
            <Github size={14} /> Source
          </a>
          
          {customData.liveLink && (
            <a href={customData.liveLink} target="_blank" rel="noreferrer" className="flex flex-1 items-center justify-center gap-2 py-2.5 px-3 text-xs font-medium bg-primary/10 hover:bg-primary/20 border border-primary/20 rounded-lg text-primary hover:text-primary transition-all shadow-[0_0_10px_rgba(139,92,246,0.2)]">
              <ExternalLink size={14} /> Live
            </a>
          )}

          {customData.demoVideo && (
            <button 
              onClick={() => onWatchDemo(customData.demoVideo!)}
              className="flex flex-1 items-center justify-center gap-2 py-2.5 px-3 text-xs font-medium bg-accent/10 hover:bg-accent/20 border border-accent/20 rounded-lg text-accent hover:text-accent transition-all group shadow-[0_0_10px_rgba(236,72,153,0.2)]"
              title="Watch Project Demo"
            >
              <Play size={14} className="fill-accent group-hover:scale-110 transition-transform" /> Demo
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
