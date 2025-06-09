"use client";

import { motion, useScroll, } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail, Sparkles, Youtube, Instagram } from "lucide-react";
import { personalInfo, socialLinks } from "@/data/social";
import { useRef, useState, useEffect } from "react";
import Image from 'next/image'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.25, 0.25, 0.75],
    },
  },
};

const floatingVariants = {
  animate: {
    y: [0, -20, 0],
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Type for floating particles
type Particle = { left: number; top: number; duration: number; delay: number };

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Hydration-safe floating particles
  const [particles, setParticles] = useState<Particle[]>([]);
  useEffect(() => {
    const arr: Particle[] = Array.from({ length: 20 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 2,
    }));
    setParticles(arr);
  }, []);


  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadResume = () => {
    // Create a link to download resume PDF
    const link = document.createElement('a');
    link.href = '/Bhuppii resume new.pdf'; // Your resume PDF in the public folder
    link.download = 'Bhupender_Yadav_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.section
      ref={ref}
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-black via-zinc-900 to-gray-900 pt-16"
      style={{ background: 'linear-gradient(to bottom right, #000, #18181b 60%, #18181b 100%)' }}
    >
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Animated grid background */}
        <div className="absolute inset-0 bg-grid opacity-30" />
        
        {/* Floating orbs */}
        <motion.div 
          variants={floatingVariants}
          animate="animate"
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-teal-400/20 to-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div 
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
        />
        <motion.div 
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 4 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-teal-500/10 to-blue-600/10 rounded-full blur-3xl"
        />
        
        {/* Animated Moving Circles */}
        <motion.div
          className="absolute w-16 h-16 bg-teal-400/30 rounded-full blur-sm"
          animate={{
            x: [0, 100, 200, 100, 0],
            y: [0, 150, 50, 200, 0],
            scale: [1, 1.2, 0.8, 1.5, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ top: "20%", left: "10%" }}
        />

        <motion.div
          className="absolute w-12 h-12 bg-blue-500/40 rounded-full blur-sm"
          animate={{
            x: [0, -80, -160, -80, 0],
            y: [0, 100, -50, 120, 0],
            scale: [1, 0.7, 1.3, 0.9, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          style={{ top: "60%", right: "15%" }}
        />

        <motion.div
          className="absolute w-20 h-20 bg-purple-500/25 rounded-full blur-sm"
          animate={{
            x: [0, 120, -60, 80, 0],
            y: [0, -80, 100, -40, 0],
            scale: [1, 1.4, 0.6, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          style={{ top: "40%", left: "70%" }}
        />

        <motion.div
          className="absolute w-8 h-8 bg-cyan-400/50 rounded-full blur-sm"
          animate={{
            x: [0, -50, 100, -30, 0],
            y: [0, 80, -100, 60, 0],
            scale: [1, 1.6, 0.4, 1.2, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
          style={{ top: "80%", left: "20%" }}
        />

        <motion.div
          className="absolute w-14 h-14 bg-pink-400/35 rounded-full blur-sm"
          animate={{
            x: [0, 90, -120, 60, 0],
            y: [0, -120, 80, -60, 0],
            scale: [1, 0.8, 1.5, 0.7, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
          style={{ top: "10%", right: "25%" }}
        />

        <motion.div
          className="absolute w-10 h-10 bg-emerald-400/45 rounded-full blur-sm"
          animate={{
            x: [0, -70, 140, -90, 0],
            y: [0, 110, -80, 90, 0],
            scale: [1, 1.3, 0.5, 1.4, 1],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
          }}
          style={{ top: "70%", right: "30%" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto"
        >
          {/* Main Content Grid - Profile Left, Content Right */}
          <div className="grid lg:grid-cols-[400px_1fr] gap-3 lg:gap-4 items-start lg:items-center min-h-[calc(100vh-4rem)] pt-8 lg:pt-0">
            {/* Left Side - Profile Image */}
            <motion.div variants={itemVariants} className="flex justify-center lg:justify-start order-2 lg:order-1 lg:-mt-12">
              <div className="relative">
                <motion.div
                  className="w-72 h-72 lg:w-80 lg:h-80 rounded-full bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 p-2 shadow-2xl shadow-teal-500/25"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-full h-full rounded-full bg-background relative overflow-hidden">
                    {/* Profile Image */}
                    <Image
                      src={personalInfo.avatar}
                      alt={personalInfo.name}
                      width={320}
                      height={320}
                      className="w-full h-full object-cover rounded-full"
                      onError={(e) => {
                        // Fallback to initials if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />

                    {/* Fallback Initials */}
                    <div className="absolute inset-0 flex items-center justify-center text-6xl lg:text-7xl font-bold gradient-text" style={{ display: 'none' }}>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                      />
                      {personalInfo.name.split(' ').map(n => n[0]).join('')}
                    </div>

                    {/* Overlay Animation */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-full"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 3, repeat: Infinity, repeatDelay: 4 }}
                    />
                  </div>
                </motion.div>
                
                {/* Status Indicator */}
                <motion.div 
                  className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border-4 border-background flex items-center justify-center"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles className="w-8 h-8 text-white" />
                </motion.div>

                {/* Floating Elements around Profile */}
                <motion.div
                  className="absolute -top-8 -left-8 w-6 h-6 bg-teal-400 rounded-full"
                  animate={{ y: [0, -10, 0], rotate: [0, 180, 360] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div
                  className="absolute top-16 -right-12 w-4 h-4 bg-blue-500 rounded-full"
                  animate={{ y: [0, 15, 0], rotate: [0, -180, -360] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                />
                <motion.div
                  className="absolute -bottom-12 -left-12 w-8 h-8 bg-purple-600 rounded-full"
                  animate={{ y: [0, -20, 0], rotate: [0, 90, 180] }}
                  transition={{ duration: 6, repeat: Infinity, delay: 2 }}
                />
              </div>
            </motion.div>

            {/* Right Side - Content */}
            <motion.div variants={itemVariants} className="text-center lg:text-left order-1 lg:order-2 bg-white/5 backdrop-blur-sm rounded-3xl p-4 lg:p-6 border border-white/10 w-full min-h-[500px] lg:min-h-[600px] flex flex-col justify-center">
              {/* Main Heading */}
              <motion.h1
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 lg:mb-6 leading-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <motion.span
                  className="bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-500 bg-clip-text text-transparent block font-extrabold drop-shadow-2xl"
                  initial={{ x: 0, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  style={{
                    filter: 'drop-shadow(0 0 20px rgba(34, 211, 238, 0.3))',
                    wordBreak: 'keep-all',
                    whiteSpace: 'nowrap',
                    overflow: 'visible'
                  }}
                >
                  {personalInfo.name}
                </motion.span>
              </motion.h1>

              {/* Animated Subtitle */}
              <motion.h2
                className="text-lg sm:text-xl lg:text-2xl mb-4 lg:mb-6 font-semibold"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.6 }}
                style={{
                  background: 'linear-gradient(135deg, #60a5fa, #34d399, #fbbf24)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(0 0 10px rgba(96, 165, 250, 0.2))'
                }}
              >
                {personalInfo.title}
              </motion.h2>

              {/* Description */}
              <motion.p
                className="text-base lg:text-lg mb-6 leading-relaxed text-slate-200 font-medium"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.8 }}
                style={{
                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
                }}
              >
                {personalInfo.subtitle}
              </motion.p>

              {/* Bio */}
              <motion.p
                className="text-sm lg:text-base mb-6 lg:mb-8 leading-relaxed text-slate-300 font-normal"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 2 }}
                style={{
                  textShadow: '0 1px 3px rgba(0, 0, 0, 0.4)'
                }}
              >
                {personalInfo.bio}
              </motion.p>

              {/* Futuristic CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6 lg:mb-8"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 2.2 }}
              >
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-600 text-white rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 group relative overflow-hidden"
                  onClick={handleDownloadResume}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    boxShadow: '0 8px 32px rgba(34, 211, 238, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Download className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform duration-300 relative z-10" />
                  <span className="text-lg font-semibold relative z-10">Download Resume</span>
                </motion.button>

                <motion.button
                  className="px-8 py-4 bg-transparent border-2 border-cyan-400 text-cyan-400 rounded-2xl font-bold hover:bg-gradient-to-r hover:from-cyan-400 hover:to-teal-400 hover:text-black transition-all duration-300 group relative overflow-hidden"
                  onClick={() => scrollToSection("#contact")}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    boxShadow: '0 4px 20px rgba(34, 211, 238, 0.15), inset 0 1px 0 rgba(34, 211, 238, 0.1)'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Mail className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform duration-300 relative z-10" />
                  <span className="font-bold relative z-10">Get In Touch</span>
                </motion.button>
              </motion.div>

              {/* Futuristic Social Links */}
              <motion.div
                className="flex justify-center lg:justify-start space-x-3 mb-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 2.4 }}
              >
                {socialLinks.map((link, index) => {
                  const IconComponent = link.icon === "Github" ? Github :
                                       link.icon === "Linkedin" ? Linkedin :
                                       link.icon === "Mail" ? Mail :
                                       link.icon === "Youtube" ? Youtube :
                                       link.icon === "Instagram" ? Instagram : Mail;

                  return (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative group"
                      whileHover={{ scale: 1.2, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 2.6 + index * 0.1 }}
                    >
                      <div className="w-12 h-12 rounded-2xl bg-white/5 backdrop-blur-sm flex items-center justify-center hover:shadow-lg hover:shadow-teal-500/25 transition-all duration-300 border border-teal-500/20 group-hover:border-teal-400/60">
                        <IconComponent className="h-5 w-5 text-gray-300 group-hover:text-teal-400 transition-colors duration-300" />
                      </div>
                      <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {link.name}
                      </span>
                    </motion.a>
                  );
                })}
              </motion.div>
            </motion.div>
          </div>

          {/* Animated Scroll Indicator */}
          <motion.div
            className="flex flex-col items-center mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3 }}
          >
            <motion.p
              className="text-sm text-gray-300 mb-6 font-medium tracking-wider uppercase"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Scroll to explore
            </motion.p>
            <motion.button
              onClick={() => scrollToSection("#about")}
              className="relative group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-teal-500/30 flex items-center justify-center group-hover:border-teal-400/60 transition-all duration-300">
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ArrowDown className="h-5 w-5 text-teal-400" />
                </motion.div>
              </div>
              <div className="absolute inset-0 rounded-full bg-teal-400/20 scale-0 group-hover:scale-110 transition-transform duration-300" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating particles (hydration-safe) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-teal-400/30 rounded-full"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
            }}
          />
        ))}
      </div>
    </motion.section>
  );
}
