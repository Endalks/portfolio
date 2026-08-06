"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React.js", "Next.js", "Tailwind CSS", "Bootstrap", "Responsive Design", "UI/UX Principles"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "PHP", "REST API Development", "Authentication (JWT, Sessions)"]
    },
    {
      title: "Database",
      skills: ["MongoDB", "MySQL", "Firebase"]
    },
    {
      title: "Languages",
      skills: ["JavaScript", "TypeScript", "Python", "PHP"]
    },
    {
      title: "Tools",
      skills: ["Git & GitHub", "VS Code", "Postman", "npm / yarn", "Linux (basic)"]
    },
    {
      title: "Other",
      skills: ["Data Structures & Algorithms", "Problem Solving", "API Integration", "Debugging & Optimization"]
    }
  ];

  const [activeTab, setActiveTab] = useState(skillCategories[0].title);
  const activeSkills = skillCategories.find(c => c.title === activeTab)?.skills || [];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] -z-10 mix-blend-screen" />
      
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-5xl font-heading font-bold mb-4"
          >
            Technical <span className="text-gradient">Skills</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"
          />
        </div>

        {/* Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {skillCategories.map((category) => (
            <button
              key={category.title}
              onClick={() => setActiveTab(category.title)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeTab === category.title 
                  ? "bg-primary text-white shadow-[0_0_15px_rgba(139,92,246,0.5)] scale-105" 
                  : "bg-white/5 border border-white/10 text-muted-foreground hover:bg-white/10 hover:text-white"
              }`}
            >
              {category.title}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="glass p-8 md:p-12 rounded-3xl min-h-[300px]">
          <h3 className="text-2xl font-bold font-heading mb-8 text-center text-accent">
            {activeTab} Skills
          </h3>
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {activeSkills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-base font-medium hover:border-primary hover:bg-primary/20 transition-colors shadow-lg hover:shadow-primary/30 flex items-center justify-center text-center"
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}