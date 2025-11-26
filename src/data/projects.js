export const PROJECT_FILTERS = [
  "All",
  "Java",
  "Python",
  "JavaScript",
  "React",
  "Node.js",
  "AI",
];

export const projects = [
  {
    id: 1,
    title: "AI Translation App (DeepL-style Clone)",
    description:
      "A full-stack translation app inspired by DeepL. Built originally with no prior React or Node.js experience using prompt engineering and iterative refinement. Supports OpenAI API and local models via Ollama, translating texts of 2000+ characters in seconds while keeping token usage very low.",
    liveUrl: "https://deepl-clone.vercel.app", // <--- metti il tuo URL Vercel
    repoUrl: "https://github.com/davideblaffard/deepl-clone",
    tags: ["React", "Node.js", "OpenAI API", "AI", "Full Stack"],
    status: "online", // online | code-only | wip (work in progress)
    image: "/projects/ai-translation-app.png", 
  },
  {
    id: 2,
    title: "Blafflix – Netflix-style streaming platform",
    description:
      "A responsive OTT-style streaming platform with dynamic TMDB-powered content, custom UI, advanced animations, search, skeleton loaders, and a persistent “My List” system.",
    liveUrl: "https://blafflix.vercel.app/",
    // repoUrl: "https://github.com/...", // aggiungi se ce l’hai
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "TMDB API"],
    status: "online",
    image: "/projects/blafflix.png",
  },
  {
    id: 3,
    title: "Ticket Platform",
    description:
      "A web application for managing technical support tickets with multi-role login (admin/operator) and full CRUD functionality, focusing on backend architecture and role-based access.",
    // liveUrl: "", // non online al momento
    repoUrl: "https://github.com/davideblaffard/ticket-platform",
    tags: ["Java", "Spring Boot", "MySQL", "REST API"],
    status: "code-only",
    image: "/projects/generic.png",
  },
  {
    id: 4,
    title: "PyMoney",
    description:
      "A desktop application for personal finance tracking with CSV-based login and data analysis, developed using Python, Kivy for the UI, and Pandas for data handling.",
    repoUrl: "https://github.com/davideblaffard/py_money",
    tags: ["Python", "Kivy", "Pandas"],
    status: "code-only",
    image: "/projects/generic.png",
  },
  {
    id: 5,
    title: "Tower Defense Game",
    description:
      "A browser-based tower defense game with custom graphics and smooth animations, fully coded in vanilla HTML, CSS, and JavaScript without external libraries.",
    liveUrl: "https://tower-defense-ruddy.vercel.app/",
    tags: ["HTML", "CSS", "JavaScript", "Game"],
    status: "online",
    image: "/projects/tower-defense.png",
  },
  {
    id: 6,
    title: "Dashboard – Pizzeria Management",
    description:
      "A Spring Boot + Thymeleaf web application designed to streamline the management of a pizzeria’s operations with an interactive dashboard and reusable UI fragments.",
    repoUrl: "https://github.com/davideblaffard/dashboard",
    tags: ["Java", "Spring Boot", "Thymeleaf", "MySQL"],
    status: "wip",
    inProgress: true,
    image: "/projects/generic.png",
  },
];
