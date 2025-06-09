"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Heart, Coffee } from "lucide-react";
import { personalInfo } from "@/data/social";

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

export function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-500 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Get to know the person behind the code
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Personal Story */}
            <motion.div variants={itemVariants}>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6 text-white">My Story</h3>
                <div className="space-y-4 text-slate-300 leading-relaxed">
                  <p>
                    {personalInfo.bio}
                  </p>
                  <p>
                    I believe in continuous learning and staying updated with the latest
                    technologies. My approach combines technical expertise with creative
                    problem-solving to deliver solutions that not only work well but also
                    provide exceptional user experiences.
                  </p>
                  <p>
                    When I am not coding, you can find me creating content for my YouTube channel,
                    working out at the gym, or exploring new places. I am passionate about
                    sharing knowledge and helping others grow in their development journey.
                  </p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="text-center p-4 rounded-lg bg-white/10 border border-white/20">
                    <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">1+</div>
                    <div className="text-sm text-slate-400">Years Experience</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-white/10 border border-white/20">
                    <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">5+</div>
                    <div className="text-sm text-slate-400">Projects Completed</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-white/10 border border-white/20">
                    <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">10+</div>
                    <div className="text-sm text-slate-400">Happy Clients</div>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-white/10 border border-white/20">
                    <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">24/7</div>
                    <div className="text-sm text-slate-400">Support</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Personal Information */}
            <motion.div variants={itemVariants}>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6 text-white">Personal Details</h3>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">Location</p>
                      <p className="text-white font-medium">{personalInfo.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-green-400 to-emerald-500">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">Email</p>
                      <p className="text-white font-medium">{personalInfo.email}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-purple-400 to-pink-500">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">Phone</p>
                      <p className="text-white font-medium">{personalInfo.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-orange-400 to-red-500">
                      <Heart className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">Interests</p>
                      <p className="text-white font-medium">Technology, Fitness, Content Creation</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-teal-400 to-cyan-500">
                      <Coffee className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">Fun Fact</p>
                      <p className="text-white font-medium">I can code for hours with just coffee ☕</p>
                    </div>
                  </div>
                </div>

                {/* Personality Traits */}
                <div className="mt-8">
                  <h4 className="text-lg font-semibold mb-4 text-white">What Drives Me</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-lg bg-white/10 border border-white/20 text-center">
                      <p className="text-cyan-400 font-semibold">Problem Solver</p>
                    </div>
                    <div className="p-3 rounded-lg bg-white/10 border border-white/20 text-center">
                      <p className="text-green-400 font-semibold">Team Player</p>
                    </div>
                    <div className="p-3 rounded-lg bg-white/10 border border-white/20 text-center">
                      <p className="text-purple-400 font-semibold">Creative Thinker</p>
                    </div>
                    <div className="p-3 rounded-lg bg-white/10 border border-white/20 text-center">
                      <p className="text-orange-400 font-semibold">Lifelong Learner</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
