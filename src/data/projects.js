export const PROJECT_FILTERS = ["All", "Java", "Python", "JavaScript", "React", "Node.js", "AI"];

export const projects = [
  {
    id: 1,
    title: "Ticket Platform",
    description:
      "A web application for managing technical support tickets with multi-role login (admin/operator) and full CRUD functionality. Built with Java, Spring Boot, and MySQL, focusing on clean backend architecture and user-role management.",
    linkLabel: "View on GitHub",
    link: "https://github.com/davideblaffard/ticket-platform",
    tags: ["Java", "Spring Boot", "MySQL", "REST API"],
  },
  {
    id: 2,
    title: "PyMoney",
    description:
      "A desktop application for personal finance tracking with CSV-based login and data analysis. Developed using Python, Kivy for UI, and Pandas for data handling.",
    linkLabel: "View on GitHub",
    link: "https://github.com/davideblaffard/py_money",
    tags: ["Python", "Kivy", "Pandas"],
  },
  {
    id: 3,
    title: "Tower Defense",
    description:
      "A browser-based tower defense game with custom graphics and smooth animations. Fully coded in vanilla HTML, CSS, and JavaScript without external libraries.",
    linkLabel: "Live demo",
    link: "https://tower-defense-ruddy.vercel.app/",
    tags: ["HTML", "CSS", "JavaScript", "Game"],
  },
  {
    id: 4,
    title: "Dashboard (Pizzeria Management)",
    description:
      "A Spring Boot + Thymeleaf web application designed to streamline the management of a pizzeria’s operations. It provides an interactive dashboard with a sidebar for navigation and a dynamic content area powered by fetch and reusable Thymeleaf fragments.",
    linkLabel: "View on GitHub",
    link: "https://github.com/davideblaffard/dashboard",
    tags: ["Java", "Spring Boot", "Thymeleaf", "MySQL"],
    inProgress: true,
  },
  {
    id: 5,
    title: "Blafflix",
    description:
      "A Netflix-inspired streaming platform built with Next.js, React, TypeScript, and Tailwind CSS. It features dynamic content powered by TMDB, a custom fake video player, advanced UI animations, skeleton loaders, search, and a persistent “My List” system.",
    linkLabel: "Live website",
    link: "https://blafflix.vercel.app/",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "TMDB API"],
  },

  {
  id: 6,
  title: "AI Translation App (DeepL-style Clone)",
  description:
    "A full-stack translation app inspired by DeepL. Built originally with no prior React or Node.js experience using prompt engineering and iterative refinement. Supports OpenAI API and local models via Ollama. Translates texts of 2000+ characters in seconds while consuming under 100 tokens.",
  linkLabel: "Live Website",
  link: "https://deepl-clone.vercel.app/", 
  tags: ["React", "Node.js", "OpenAI API", "AI", "Full Stack"],
},
];
