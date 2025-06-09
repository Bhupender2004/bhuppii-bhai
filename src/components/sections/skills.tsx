"use client";

import { motion } from "framer-motion";
import { Database, Globe, Palette, Server } from "lucide-react";
import { useState } from "react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Globe,
    skills: [
      { name: "React.js", level: 50, logo: "⚛️" },
      { name: "Next.js", level: 50, logo: "▲" },
      { name: "TypeScript", level: 50, logo: "🔷" },
      { name: "JavaScript", level: 80, logo: "🟨" },
      { name: "HTML5", level: 100, logo: "🌐" },
      { name: "CSS3", level: 95, logo: "🎨" },
      { name: "Tailwind CSS", level: 90, logo: "💨" },
      { name: "Framer Motion", level: 85, logo: "🎭" }
    ],
    color: "from-blue-400 to-cyan-400"
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: [
      { name: "Node.js", level: 70, logo: "🟢" },
      { name: "Express.js", level: 50, logo: "🚀" },
      { name: "Python", level: 95, logo: "🐍" },
      { name: "PHP", level: 0, logo: "🐘" },
      { name: "REST APIs", level: 40, logo: "🔗" },
      { name: "GraphQL", level: 70, logo: "📊" }
    ],
    color: "from-green-400 to-emerald-400"
  },
  {
    title: "Database & Tools",
    icon: Database,
    skills: [
      { name: "MongoDB", level: 85, logo: "🍃" },
      { name: "MySQL", level: 80, logo: "🐬" },
      { name: "PostgreSQL", level: 0, logo: "🐘" },
      { name: "Firebase", level: 0, logo: "🔥" },
      { name: "Git", level: 80, logo: "📝" },
      { name: "Docker", level: 0, logo: "🐳" }
    ],
    color: "from-purple-400 to-pink-400"
  },
  {
    title: "UI/UX Design",
    icon: Palette,
    skills: [
      { name: "Figma", level: 90, logo: "🎨" },
      { name: "Adobe XD", level: 85, logo: "💎" },
      { name: "Photoshop", level: 80, logo: "🖼️" },
      { name: "Canva", level: 100, logo: "🖌️" },
      { name: "User Research", level: 85, logo: "🔍" },
      { name: "Prototyping", level: 70, logo: "🛠️" }
    ],
    color: "from-orange-400 to-red-400"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
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

export function Skills() {
  const [flippedCards, setFlippedCards] = useState<Set<string>>(new Set());

  const toggleCard = (skillId: string) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(skillId)) {
        newSet.delete(skillId);
      } else {
        newSet.add(skillId);
      }
      return newSet;
    });
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
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
              Skills & Expertise
            </span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-300 max-w-2xl mx-auto"
          >
            Technologies and tools I use to bring ideas to life. Click cards to see progress details.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} mr-4`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => {
                  const skillId = `${categoryIndex}-${skillIndex}`;
                  const isFlipped = flippedCards.has(skillId);

                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      onClick={() => toggleCard(skillId)}
                      className="relative h-24 cursor-pointer"
                      style={{ perspective: "1000px" }}
                    >
                      <motion.div
                        className="relative w-full h-full"
                        animate={{ rotateY: isFlipped ? 180 : 0 }}
                        transition={{ duration: 0.6 }}
                        style={{ transformStyle: "preserve-3d" }}
                      >
                        {/* Front Side */}
                        <div
                          className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:border-white/30 transition-all duration-300 group"
                          style={{ backfaceVisibility: "hidden" }}
                        >
                          <div className="text-center h-full flex flex-col justify-center">
                            <div className="text-2xl mb-2">{skill.logo}</div>
                            <h4 className="text-white font-semibold text-sm mb-1 group-hover:text-cyan-400 transition-colors">
                              {skill.name}
                            </h4>
                            <div className="flex justify-center">
                              {[...Array(5)].map((_, i) => (
                                <div
                                  key={i}
                                  className={`w-1.5 h-1.5 rounded-full mx-0.5 ${
                                    i < Math.ceil(skill.level / 20)
                                      ? `bg-gradient-to-r ${category.color}`
                                      : 'bg-slate-600'
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Back Side */}
                        <div
                          className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 transition-all duration-300"
                          style={{
                            backfaceVisibility: "hidden",
                            transform: "rotateY(180deg)"
                          }}
                        >
                          <div className="h-full flex flex-col justify-center">
                            <div className="text-center mb-2">
                              <div className={`w-8 h-8 mx-auto mb-2 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                                <span className="text-white font-bold text-xs">{skill.level}%</span>
                              </div>
                              <h4 className="text-white font-semibold text-xs mb-2">{skill.name}</h4>
                            </div>
                            <div className="w-full bg-slate-700 rounded-full h-2 mb-1">
                              <motion.div
                                className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                                initial={{ width: 0 }}
                                animate={{ width: isFlipped ? `${skill.level}%` : 0 }}
                                transition={{ duration: 1, delay: 0.3 }}
                              />
                            </div>
                            <div className="text-center">
                              <span className="text-slate-400 text-xs">Proficiency Level</span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
