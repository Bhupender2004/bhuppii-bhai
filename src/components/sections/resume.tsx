"use client";

import { motion } from "framer-motion";
import { Download, Calendar, MapPin, Mail, Phone, Award, Briefcase, GraduationCap, Code, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/social";

const resumeData = {
  summary: "Passionate Full Stack Developer with 3+ years of experience building dynamic and responsive web applications. Skilled in modern JavaScript frameworks, backend technologies, and UI/UX design with a focus on creating user-friendly, scalable solutions.",
  
  experience: [
    {
      title: "Full Stack Developer",
      company: "Tech Solutions Inc.",
      location: "Remote",
      period: "2022 - Present",
      description: [
        "Developed and maintained 15+ responsive web applications using React.js and Next.js",
        "Built RESTful APIs with Node.js and Express.js, serving 10,000+ daily users",
        "Implemented modern UI/UX designs with Tailwind CSS and Framer Motion",
        "Collaborated with cross-functional teams to deliver projects 20% ahead of schedule"
      ]
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency Pro",
      location: "Hybrid",
      period: "2021 - 2022",
      description: [
        "Created pixel-perfect responsive websites for 25+ clients",
        "Optimized website performance, improving load times by 40%",
        "Integrated third-party APIs and payment gateways",
        "Mentored 3 junior developers in modern frontend practices"
      ]
    },
    {
      title: "Web Developer Intern",
      company: "StartUp Hub",
      location: "On-site",
      period: "2021",
      description: [
        "Assisted in developing company website using HTML, CSS, and JavaScript",
        "Learned version control with Git and collaborative development",
        "Participated in code reviews and agile development processes",
        "Contributed to 5+ successful project deliveries"
      ]
    }
  ],

  education: [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "University of Technology",
      location: "India",
      period: "2019 - 2022",
      grade: "First Class with Distinction",
      description: "Specialized in Software Development and Web Technologies"
    },
    {
      degree: "Higher Secondary Certificate",
      institution: "Modern High School",
      location: "India", 
      period: "2017 - 2019",
      grade: "85%",
      description: "Science Stream with Computer Science"
    }
  ],

  certifications: [
    {
      name: "React Developer Certification",
      issuer: "Meta",
      date: "2023",
      credentialId: "META-REACT-2023"
    },
    {
      name: "Full Stack Web Development",
      issuer: "freeCodeCamp",
      date: "2022",
      credentialId: "FCC-FULLSTACK-2022"
    },
    {
      name: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "2021",
      credentialId: "FCC-JS-2021"
    }
  ],

  skills: {
    technical: [
      "JavaScript (ES6+)", "TypeScript", "React.js", "Next.js", "Node.js", "Express.js",
      "HTML5", "CSS3", "Tailwind CSS", "MongoDB", "MySQL", "Git", "Docker"
    ],
    soft: [
      "Problem Solving", "Team Collaboration", "Communication", "Time Management",
      "Adaptability", "Critical Thinking", "Leadership", "Creativity"
    ]
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

export function Resume() {
  const handleDownloadResume = () => {
    // Create a link to download the latest resume PDF
    const link = document.createElement('a');
    link.href = '/Bhupi resume.pdf'; // Ensure this matches the new file name in public/
    link.download = 'Bhupi_Resume.pdf'; // Update the download name if desired
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl lg:text-5xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-500 bg-clip-text text-transparent">
              Resume
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-300 max-w-2xl mx-auto mb-8"
          >
            Download my complete resume or explore my professional journey below
          </motion.p>
          <motion.div variants={itemVariants}>
            <Button
              onClick={handleDownloadResume}
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Personal Info & Summary */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-1 space-y-6"
          >
            {/* Personal Information */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Award className="w-5 h-5 mr-2 text-cyan-400" />
                Personal Information
              </h3>
              <div className="space-y-3">
                <div className="flex items-center text-slate-300">
                  <Mail className="w-4 h-4 mr-3 text-cyan-400" />
                  <span className="text-sm">{personalInfo.email}</span>
                </div>
                <div className="flex items-center text-slate-300">
                  <Phone className="w-4 h-4 mr-3 text-green-400" />
                  <span className="text-sm">{personalInfo.phone}</span>
                </div>
                <div className="flex items-center text-slate-300">
                  <MapPin className="w-4 h-4 mr-3 text-red-400" />
                  <span className="text-sm">{personalInfo.location}</span>
                </div>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">Professional Summary</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{resumeData.summary}</p>
            </div>

            {/* Skills */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Code className="w-5 h-5 mr-2 text-purple-400" />
                Key Skills
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-cyan-400 font-semibold mb-2 text-sm">Technical Skills</h4>
                  <div className="flex flex-wrap gap-1">
                    {resumeData.skills.technical.map((skill, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-white/10 text-slate-300 text-xs rounded-md border border-white/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-green-400 font-semibold mb-2 text-sm">Soft Skills</h4>
                  <div className="flex flex-wrap gap-1">
                    {resumeData.skills.soft.map((skill, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-white/10 text-slate-300 text-xs rounded-md border border-white/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Experience, Education, Certifications */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-2 space-y-8"
          >
            {/* Professional Experience */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Briefcase className="w-6 h-6 mr-3 text-cyan-400" />
                Professional Experience
              </h3>
              <div className="space-y-6">
                {resumeData.experience.map((exp, index) => (
                  <div key={index} className="border-l-2 border-cyan-400 pl-6 relative">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-cyan-400 rounded-full"></div>
                    <div className="mb-2">
                      <h4 className="text-lg font-semibold text-white">{exp.title}</h4>
                      <p className="text-cyan-400 font-medium">{exp.company}</p>
                      <div className="flex items-center text-slate-400 text-sm mt-1">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span className="mr-4">{exp.period}</span>
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <ul className="space-y-1">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="text-slate-300 text-sm flex items-start">
                          <Star className="w-3 h-3 mr-2 mt-1 text-yellow-400 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <GraduationCap className="w-6 h-6 mr-3 text-green-400" />
                Education
              </h3>
              <div className="space-y-4">
                {resumeData.education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-green-400 pl-6 relative">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-green-400 rounded-full"></div>
                    <h4 className="text-lg font-semibold text-white">{edu.degree}</h4>
                    <p className="text-green-400 font-medium">{edu.institution}</p>
                    <div className="flex items-center text-slate-400 text-sm mt-1">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span className="mr-4">{edu.period}</span>
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="mr-4">{edu.location}</span>
                      <span className="text-yellow-400">Grade: {edu.grade}</span>
                    </div>
                    <p className="text-slate-300 text-sm mt-2">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Award className="w-6 h-6 mr-3 text-purple-400" />
                Certifications
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {resumeData.certifications.map((cert, index) => (
                  <div key={index} className="bg-white/5 rounded-xl p-4 border border-white/20">
                    <h4 className="text-white font-semibold mb-1">{cert.name}</h4>
                    <p className="text-purple-400 text-sm font-medium">{cert.issuer}</p>
                    <p className="text-slate-400 text-xs mt-1">Issued: {cert.date}</p>
                    <p className="text-slate-500 text-xs">ID: {cert.credentialId}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
