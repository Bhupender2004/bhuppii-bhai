import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "Weather Web Application",
    description: "A modern weather app providing real-time weather updates, forecasts, and beautiful UI animations.",
    longDescription: "Developed using React and OpenWeatherMap API, this application offers users current weather, 7-day forecasts, and location-based weather data. Features include animated weather icons, responsive design, and a clean, user-friendly interface.",
    image: "/weatherimg.jpg",
    technologies: ["React", "OpenWeatherMap API", "CSS3", "Vercel"],
    githubUrl: "https://github.com/bhupender2004/PRODIGY_WD_05",
    liveUrl: "https://bhupender2004.github.io/PRODIGY_WD_05/",
    category: "web",
    featured: true,
    status: "completed"
  },
  {
    id: "2",
    title: "Client Portfolio Website",
    description: "A visually stunning and responsive portfolio website built for a client to showcase their work and brand.",
    longDescription: "Designed and developed a custom portfolio site with Next.js and Tailwind CSS, featuring smooth animations, project galleries, and contact forms. The site is fully responsive and optimized for SEO, helping the client grow their online presence.",
    image: "/portimg.jpg",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    githubUrl: "https://github.com/bhupender2004/bhupppi",
    liveUrl: "https://bhupppi.vercel.app/",
    category: "web",
    featured: true,
    status: "completed"
  },
  {
    id: "3",
    title: "Speech Recognition to Text Converter",
    description: "A real-time speech-to-text web app leveraging browser APIs for accessibility and productivity.",
    longDescription: "This project uses the Web Speech API to convert spoken words into text instantly. It features multi-language support, export options, and a simple, distraction-free interface for note-taking, transcription, and accessibility.",
    image: "/speech-to-text.jpg",
    technologies: ["JavaScript", "Web Speech API", "HTML5", "CSS3"],
    githubUrl: "https://github.com/Bhupender2004/task-2-speech-recognition-system",
    liveUrl: "https://speech2text-demo.vercel.app",
    category: "ai",
    featured: false,
    status: "completed"
  },
  {
    id: "4",
    title: "Smart Krishi Portal",
    description: "A next-gen agriculture portal empowering farmers with smart tools and real-time insights.",
    longDescription: "Currently in development, this portal will provide crop recommendations, weather updates, market prices, and expert advice. Built with MERN stack and integrating IoT data for precision agriculture.",
    image: "/smart-agri.jpg",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "IoT"],
    githubUrl: "https://github.com/yourusername/smart-krishi",
    category: "web",
    featured: true,
    status: "in-progress"
  },
  {
    id: "5",
    title: "Task Management Website",
    description: "A collaborative platform for teams to manage tasks, deadlines, and productivity.",
    longDescription: "Planned project to build a robust task management system with Kanban boards, real-time notifications, and analytics dashboard. Will use Next.js, Firebase, and Chakra UI for a seamless user experience.",
    image: "/projects/task-management.jpg",
    technologies: ["Next.js", "Firebase", "Chakra UI"],
    githubUrl: "https://github.com/yourusername/task-management",
    category: "web",
    featured: false,
    status: "planned"
  },
  {
    id: "6",
    title: "Personal Finance Tracker",
    description: "A smart web app to track expenses, set budgets, and visualize financial goals.",
    longDescription: "Planned project to help users manage their finances with interactive charts, goal tracking, and secure authentication. Will leverage React, Chart.js, and Firebase for real-time data and analytics.",
    image: "/projects/finance-tracker.jpg",
    technologies: ["React", "Chart.js", "Firebase", "Auth0"],
    githubUrl: "https://github.com/yourusername/finance-tracker",
    category: "web",
    featured: false,
    status: "planned"
  },
  {
    id: "7",
    title: "Online Learning Platform",
    description: "A modern e-learning platform for interactive courses and live sessions.",
    longDescription: "Planned project to create a scalable online learning portal with video streaming, quizzes, and progress tracking. Will use Next.js, Node.js, and WebRTC for real-time features and seamless user experience.",
    image: "/projects/online-learning.jpg",
    technologies: ["Next.js", "Node.js", "WebRTC", "MongoDB"],
    githubUrl: "https://github.com/yourusername/online-learning",
    category: "web",
    featured: false,
    status: "planned"
  }
];
