"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { projects } from "@/data/projects";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1,
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

const categories = ["all", "web", "mobile", "ai", "desktop", "other"];

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === "all") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === category));
    }
  };

  return (
    <section
      id="projects"
      className="relative z-10 py-20 min-h-[60vh] bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#101c16] text-white shadow-inner shadow-cyan-900/20"
      style={{ minHeight: '60vh', background: 'linear-gradient(135deg, #0f2027 0%, #2c5364 60%, #101c16 100%)' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="visible"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-500 bg-clip-text text-transparent drop-shadow-2xl">My Projects</span>
            </h2>
            <p className="text-lg text-zinc-100 max-w-2xl mx-auto drop-shadow-lg">
              A collection of projects that showcase my skills and passion for development
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => handleCategoryChange(category)}
                className={`capitalize font-semibold tracking-wide px-6 py-2 rounded-xl shadow-md border border-cyan-400/40 text-zinc-100 bg-zinc-800/70 ${
                  selectedCategory === category 
                    ? "bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-600 text-white border-cyan-400/80 shadow-lg" 
                    : "hover:bg-cyan-400/20 hover:text-white hover:border-cyan-400/60"
                } transition-all duration-300`}
              >
                <Filter className="mr-2 h-4 w-4" />
                {category}
              </Button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="group"
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  layout
                >
                  <Card className="h-full bg-gradient-to-br from-white/10 via-cyan-200/10 to-[#2c5364]/30 border border-cyan-300/20 text-card-foreground shadow-2xl hover:shadow-cyan-400/30 hover:border-cyan-300/40 transition-all duration-300 overflow-hidden backdrop-blur-md">
                    {/* Project Image */}
                    <div className="relative h-48 bg-gradient-to-br from-primary/30 to-purple-500/30 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover object-center z-0 rounded-xl"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={index === 0}
                        unoptimized={project.image.endsWith('.svg')}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
                      <div className="absolute top-4 right-4 z-20">
                        {project.featured && (
                          <Badge className="bg-cyan-500/90 text-white shadow-md border-cyan-300/60">
                            Featured
                          </Badge>
                        )}
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 z-20">
                        <div className="flex gap-2">
                          {project.githubUrl && (
                            <Button
                              size="sm"
                              variant="secondary"
                              className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                              asChild
                            >
                              <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Github className="h-4 w-4" />
                              </a>
                            </Button>
                          )}
                          {project.liveUrl && (
                            <Button
                              size="sm"
                              className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                              asChild
                            >
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <ExternalLink className="h-4 w-4" />
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>

                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-white group-hover:gradient-text drop-shadow-2xl transition-all duration-300">
                          {project.title}
                        </h3>
                        <Badge variant="outline" className="capitalize border-cyan-400/60 text-cyan-100 bg-cyan-400/20">
                          {project.category}
                        </Badge>
                      </div>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <p className="text-zinc-100 mb-4 line-clamp-3 drop-shadow-lg">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-1 mb-4 mt-2">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="text-xs bg-cyan-400/30 text-cyan-50 border-cyan-300/40 shadow"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 4 && (
                          <Badge variant="secondary" className="text-xs bg-cyan-400/30 text-cyan-50 border-cyan-300/40 shadow">
                            +{project.technologies.length - 4}
                          </Badge>
                        )}
                      </div>

                      {/* Status */}
                      <div className="flex items-center justify-between">
                        <Badge
                          variant={
                            project.status === "completed"
                              ? "default"
                              : project.status === "in-progress"
                              ? "secondary"
                              : "outline"
                          }
                          className="capitalize border-cyan-400/70 text-cyan-50 bg-cyan-400/30 shadow"
                        >
                          {project.status.replace("-", " ")}
                        </Badge>
                        
                        <div className="flex gap-2">
                          {project.githubUrl && (
                            <Button
                              size="sm"
                              variant="ghost"
                              className="h-8 w-8 p-0"
                              asChild
                            >
                              <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Github className="h-4 w-4 text-cyan-300 hover:text-white transition-colors duration-200" />
                              </a>
                            </Button>
                          )}
                          {project.liveUrl && (
                            <Button
                              size="sm"
                              variant="ghost"
                              className="h-8 w-8 p-0"
                              asChild
                            >
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <ExternalLink className="h-4 w-4 text-cyan-300 hover:text-white transition-colors duration-200" />
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>

          {/* View More Button */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No projects found in this category.</p>
            </div>
          )}
    </section>
  );
}
