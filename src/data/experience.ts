import { Experience, Education } from "@/types";

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Prodigy InfoTech",
    position: "Full Stack Developer",
    duration: "Oct 2024 - Nov 2024",
    description: [
      "Led development of enterprise-level web applications using React, Next.js, and Node.js",
      "Architected and implemented microservices infrastructure serving 100k+ daily active users",
      "Collaborated with cross-functional teams to deliver projects 20% ahead of schedule",
      "Optimized application performance resulting in 40% faster load times"
    ],
    technologies: ["React", "Next.js", "TypeScript", "Node.js", ],
    logo: "/companies/techcorp.png"
  },
  {
    id: "2",
    company: "Google for Developers",
    position: "AI-ML Intern",
    duration: "Oct 2024 - Dec 2024",
    description: [
      "Developed AI-driven features for web applications using TensorFlow.js and Google Cloud AI",
      "Implemented machine learning models for image recognition and natural language processing",
     
    ],
    technologies: ["TensorFlow.js", "Google Cloud AI", "JavaScript", "Python", "Node.js"],
    logo: "/companies/startupxyz.png"
  },
  {
    id: "3",
    company: "CodeTech IT Solutions",
    position: "Artificial Intelligence Intern",
    duration: "Dec 2024 - Jan 2025",
    description: [
      "Assisted in developing AI algorithms for data analysis and predictive modeling",
      "Worked with senior developers to integrate AI features into existing applications",
      "Conducted research on emerging AI technologies and their applications in web development",
      
    ],
    technologies: ["Python", "TensorFlow", "JavaScript", "Node.js"],
    logo: "/companies/digitalagency.png"
  },
  // {
  //   id: "4",
  //   company: "FreelanceWork",
  //   position: "Web Developer",
  //   duration: "2018 - 2019",
  //   description: [
  //     "Provided web development services to small businesses and startups",
  //     "Built custom websites using HTML, CSS, JavaScript, and PHP",
  //     "Integrated third-party APIs and payment gateways",
  //     "Managed client relationships and project timelines",
  //     "Delivered projects on time and within budget"
  //   ],
  //   technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "WordPress"],
  //   logo: "/companies/freelance.png"
  // }
];

export const education: Education[] = [
  {
    id: "1",
    institution: "SRM Institute of Science and Technology",
    degree: "Bachelor of Technology",
    field: "Computer Science Engineering with specialization in AI & ML",
    duration: "2023 - current",
    // description: "Focused on software engineering, algorithms, and data structures.",
    gpa: "9.35"
  },
  {
    id: "2",
    institution: "NPTEL",
    degree: "Certificate",
    field: "The Joy of Computing using Python",
    duration: "2024",
    description: "Introduction to Python programming, data structures, and algorithms."
  },
  {
    id: "3",
    institution: "NPTEL",
    degree: "Certificate",
    field: "IoT and Embedded Systems",
    duration: "2025",
    description: "Fundamentals of IoT architecture, protocols, and embedded systems design."
  }
  ,
  {
    id: "4",
    institution: "Coursera / Microsoft",
    degree: "Certificate",
    field: "Data Structures and Algorithms (DSA)",
    duration: "2025",
    description: "Completed DSA certification from Microsoft on Coursera, covering core data structures, algorithms, and problem-solving techniques."
  }
  
];
