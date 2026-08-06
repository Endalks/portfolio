export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  problem: string;
  solution: string;
  technologies: string[];
  features: string[];
  results: string;
  imageColor: string;
  icon: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "cs-1",
    title: "Loan Management System",
    category: "Full Stack Web Application",
    problem: "Managing loan applications manually caused delays, errors, and lack of transparency in approval workflows.",
    solution: "Built a complete full stack web application with role-based access to automate the entire loan lifecycle—from application to approval and tracking.",
    technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    features: [
      "Role-based system (Admin, Manager, Clerk, Customer)",
      "Loan application & approval workflow",
      "Secure data handling",
      "Dashboard for monitoring records"
    ],
    results: "Streamlined operations, reduced processing time, and improved system accuracy.",
    imageColor: "from-blue-500/20 to-cyan-500/20",
    icon: "🏆"
  },
  {
    id: "cs-2",
    title: "Wardrobe Map (PHP)",
    category: "Full Stack Web Application",
    problem: "Users lacked an organized way to manage and visualize their wardrobe digitally.",
    solution: "Developed a full stack web application that allows users to manage clothing items, categorize outfits, and access them easily.",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    features: [
      "Add/edit/delete clothing items",
      "Categorization system",
      "User-friendly interface",
      "Data storage and retrieval"
    ],
    results: "Improved organization and accessibility of wardrobe items with a simple digital solution.",
    imageColor: "from-purple-500/20 to-pink-500/20",
    icon: "🧥"
  },
  {
    id: "cs-3",
    title: "Developer Portfolio Website",
    category: "Advanced Static Website",
    problem: "Developers often fail to present their skills professionally, reducing chances of client conversion.",
    solution: "Designed and developed a modern portfolio with strong UI/UX, smooth animations, and integrated communication tools.",
    technologies: ["React", "Next.js", "Tailwind CSS"],
    features: [
      "Premium UI with animations",
      "GitHub project integration",
      "WhatsApp & email contact system",
      "Pricing and service sections"
    ],
    results: "Created a strong personal brand and improved visibility to potential clients.",
    imageColor: "from-indigo-500/20 to-purple-500/20",
    icon: "🎨"
  },
  {
    id: "cs-4",
    title: "Wardrobe Map (Angular)",
    category: "Dynamic Website",
    problem: "Static interfaces limit user interaction and real-time data updates.",
    solution: "Built a dynamic version of the wardrobe system using Angular to provide real-time updates and improved user experience.",
    technologies: ["Angular", "TypeScript", "APIs"],
    features: [
      "Dynamic data binding",
      "Interactive UI",
      "Real-time updates",
      "Component-based architecture"
    ],
    results: "Enhanced user experience with faster and more interactive interface.",
    imageColor: "from-red-500/20 to-orange-500/20",
    icon: "🧥"
  },
  {
    id: "cs-5",
    title: "E-News Website",
    category: "Dynamic Website",
    problem: "Users need real-time news updates instead of static content.",
    solution: "Developed a dynamic news platform that fetches and displays latest news using APIs.",
    technologies: ["React", "Express", "Node.js", "MongoDB", "APIs", "CSS"],
    features: [
      "Live news updates",
      "Category-based filtering",
      "Responsive UI",
      "API integration"
    ],
    results: "Delivered real-time information with smooth and responsive user experience.",
    imageColor: "from-green-500/20 to-emerald-500/20",
    icon: "📰"
  }
];
