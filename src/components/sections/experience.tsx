"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { experiences, education } from "@/data/experience";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#101c16] text-white shadow-inner shadow-cyan-900/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-500 bg-clip-text text-transparent drop-shadow-lg">My Journey</span>
            </h2>
            <p className="text-lg text-zinc-300 max-w-2xl mx-auto">
              A timeline of my professional experience and educational background
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Work Experience */}
            <motion.div variants={itemVariants} className="bg-gradient-to-br from-white/10 via-cyan-200/10 to-[#2c5364]/30 rounded-2xl p-6 border border-cyan-300/20 shadow-2xl hover:shadow-cyan-400/30 hover:border-cyan-300/40 transition-all duration-300 backdrop-blur-md">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 shadow-md">
                  <Briefcase className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-extrabold text-cyan-400 drop-shadow">Work Experience</h3>
              </div>

              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="bg-gradient-to-br from-white/10 via-cyan-200/10 to-[#2c5364]/30 border border-cyan-300/20 text-card-foreground shadow-xl hover:shadow-cyan-400/20 hover:border-cyan-300/30 transition-all duration-300 backdrop-blur-md">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          {/* Company Logo Replacement: Attractive Icon */}
                          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg">
                            <Briefcase className="w-7 h-7 text-white" />
                          </div>

                          <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                              <h4 className="text-lg font-bold text-white drop-shadow-lg">
                                {exp.position}
                              </h4>
                              <Badge variant="outline" className="w-fit border-cyan-400/40 text-cyan-200 bg-cyan-400/10">
                                <Calendar className="mr-1 h-3 w-3" />
                                {exp.duration}
                              </Badge>
                            </div>

                            <p className="text-cyan-200 font-semibold mb-3 drop-shadow">
                              {exp.company}
                            </p>


                            <ul className="space-y-2 mb-4">
                              {exp.description.map((item, idx) => (
                                <li key={idx} className="text-sm text-zinc-200 flex items-start gap-2 leading-relaxed">
                                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                                  <span className="drop-shadow-sm">{item}</span>
                                </li>
                              ))}
                            </ul>

                            <div className="flex flex-wrap gap-1 mt-2">
                              {exp.technologies.map((tech) => (
                                <Badge key={tech} variant="secondary" className="text-xs bg-cyan-400/20 text-cyan-100 border-cyan-400/30">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div variants={itemVariants} className="bg-gradient-to-br from-white/10 via-pink-200/10 to-[#2c5364]/30 rounded-2xl p-6 border border-pink-200/20 shadow-2xl hover:shadow-pink-400/30 hover:border-pink-300/40 transition-all duration-300 backdrop-blur-md">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-gradient-to-r from-pink-400 to-purple-500 shadow-md">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-extrabold text-pink-400 drop-shadow">Education</h3>
              </div>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.id}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="bg-gradient-to-br from-white/10 via-pink-200/10 to-[#2c5364]/30 border border-pink-200/20 text-card-foreground shadow-xl hover:shadow-pink-400/20 hover:border-pink-300/30 transition-all duration-300 backdrop-blur-md">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          {/* Institution Logo Replacement: Attractive Icon */}
                          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center shadow-lg">
                            <GraduationCap className="w-7 h-7 text-white" />
                          </div>

                          <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                              <h4 className="text-lg font-bold text-white drop-shadow-lg">
                                {edu.degree}
                              </h4>
                              <Badge variant="outline" className="w-fit border-pink-400/40 text-pink-200 bg-pink-400/10">
                                <Calendar className="mr-1 h-3 w-3" />
                                {edu.duration}
                              </Badge>
                            </div>

                            <p className="text-pink-200 font-semibold mb-1 drop-shadow">
                              {edu.field}
                            </p>

                            <p className="text-sm text-zinc-200 mb-3">
                              {edu.institution}
                            </p>

                            {edu.description && (
                              <p className="text-sm text-zinc-300 mb-3">
                                {edu.description}
                              </p>
                            )}

                            {edu.gpa && (
                              <Badge variant="secondary" className="text-xs bg-pink-400/20 text-pink-100 border-pink-400/30">
                                GPA: {edu.gpa}
                              </Badge>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Additional Certifications */}
              {/* <div className="mt-12">
                <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  Certifications & Achievements
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                    <Badge variant="outline">2023</Badge>
                    <span className="text-sm">AWS Certified Solutions Architect</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                    <Badge variant="outline">2022</Badge>
                    <span className="text-sm">Google Cloud Professional Developer</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                    <Badge variant="outline">2021</Badge>
                    <span className="text-sm">React Developer Certification</span>
                  </div>
                </div>
              </div> */}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
