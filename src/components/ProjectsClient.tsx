"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";
import { FaGithub as Github } from "react-icons/fa";
import { GithubRepo, GithubUser } from "@/lib/github";

interface ProjectsClientProps {
  repos?: GithubRepo[];
  user?: GithubUser | null;
}

const sampleProjects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured modern e-commerce web application built with high conversion rates and seamless checkout user experience.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Enterprise Management Dashboard",
    description: "Real-time analytics and management dashboard designed for tracking business metrics, sales performance, and user activities.",
    tags: ["React", "Node.js", "PostgreSQL"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "AI-Powered SaaS Web App",
    description: "An innovative SaaS application leveraging artificial intelligence models to automate content creation and workflow optimization.",
    tags: ["Next.js", "OpenAI API", "Prisma"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export function ProjectsClient({ repos, user }: ProjectsClientProps) {
  const displayProjects = repos && repos.length > 0 ? repos : sampleProjects;

  return (
    <section id="projects" className="py-24 relative bg-background/30 select-none">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-5xl font-heading font-bold mb-4"
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6"
          />
          <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
            Explore some of my recent web development projects and technical solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sampleProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-3xl p-6 border border-white/10 flex flex-col justify-between hover:border-primary/50 transition-all duration-300 group shadow-[0_0_20px_rgba(0,0,0,0.2)] hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <Code2 size={24} />
                </div>
                <h3 className="text-2xl font-bold font-heading text-white mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-accent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  <a
                    href={project.demoUrl}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-primary transition-colors cursor-pointer"
                  >
                    Live Demo <ExternalLink size={14} />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-white transition-colors cursor-pointer"
                  >
                    Code <Github size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}