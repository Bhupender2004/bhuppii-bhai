"use client";

import { motion } from "framer-motion";
import { Play, Eye, ThumbsUp, Calendar, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const youtubeVideos = [
  {
    id: "1",
    title: "NIT Trichy Campus Tour 🤩| Exploring India's Top Institute in Tamil Nadu",
    description: "Namaste Doston!! This is your friend Bhuppii Bhai, Welcome to my New Vlog, as we explore NIT Trichy, one of India’s top engineering institutes. From attending an immersive workshop to participating in dynamic college events, this experience was a perfect blend of learning, networking, and fun.",
    thumbnail: "/Travel to India Vlog.jpg",
    views: "1.7k",
    likes: "200",
    duration: "23:07",
    publishedAt: "3 monts ago",
    url: "https://youtu.be/4-re-GPGcCE?si=6igkF_fDAQ0IzCLq"
  },
  {
    id: "2",
    title: "SRM Trichy Rasarang Event Vlog (Official Video) ft. DJ AKRAM 🔥",
    description: "Hey Guys, welcome to my new vlog! In this vlog, I’m taking you inside the Rasrang Event at SRM Trichy, and trust me — it was an unforgettable experience! The energy was electric, the vibes were unreal, and the highlight of the night. None other than DJ AKRAM himself lighting up the stage! 🎧✨",
    thumbnail: "/rasrang event 2025.jpg",
    views: "23.8K",
    likes: "1.2K",
    duration: "17:16",
    publishedAt: "1 month ago",
    url: "https://youtu.be/Qm9W3BQ5_I0?si=tFTdT8jfZbBbJPPP"
  },
  {
    id: "3",
    title: "भारत का सबसे बड़ा मंदिर परिसर? 😱 जानिए श्रीरंगम के रहस्य! 🛕| Sriragm Temple Mystry",
    description: "इस व्लॉग में हम आपको ले चलते हैं एक ऐसी यात्रा पर, जो सिर्फ़ एक मंदिर दर्शन नहीं, बल्कि आत्मा को छू लेने वाला अनुभव है — श्रीरंगम मंदिर, त्रिची, तमिलनाडु।",
    thumbnail: "/Vlog%20%2318.jpg",
    views: "31.5K",
    likes: "1.8K",
    duration: "13:39",
    publishedAt: "2 months ago",
    url: "https://youtu.be/mP8E3gya2eA?si=_GY7grz637NuvHiR"
  },
  // {
  //   id: "4",
  //   title: "CSS Grid vs Flexbox: When to Use What?",
  //   description: "Comprehensive comparison of CSS Grid and Flexbox with real-world examples and use cases.",
  //   thumbnail: "/api/placeholder/400/225",
  //   views: "18.7K",
  //   likes: "956",
  //   duration: "22:18",
  //   publishedAt: "3 months ago",
  //   url: "https://youtube.com/watch?v=example4"
  // },
  // {
  //   id: "5",
  //   title: "JavaScript ES6+ Features Every Developer Should Know",
  //   description: "Modern JavaScript features including arrow functions, destructuring, async/await, and more.",
  //   thumbnail: "/api/placeholder/400/225",
  //   views: "27.3K",
  //   likes: "1.5K",
  //   duration: "41:22",
  //   publishedAt: "4 months ago",
  //   url: "https://youtube.com/watch?v=example5"
  // },
  // {
  //   id: "6",
  //   title: "UI/UX Design Principles for Developers",
  //   description: "Essential design principles that every developer should understand to create better user interfaces.",
  //   thumbnail: "/api/placeholder/400/225",
  //   views: "12.9K",
  //   likes: "743",
  //   duration: "33:55",
  //   publishedAt: "5 months ago",
  //   url: "https://youtube.com/watch?v=example6"
  // }
];

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

export function YouTube() {
  return (
    <section
      id="youtube"
      className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      {/* No animated overlay, matches About section background */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-black mb-2 tracking-tight"
          >
            <span
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#ff512f] via-[#dd2476] to-[#1fa2ff] bg-clip-text text-transparent drop-shadow-xl animate-gradient-x"
              style={{
                WebkitTextStroke: '2px rgba(255,255,255,0.15)',
                letterSpacing: '0.01em',
                textShadow: '0 4px 24px rgba(31,162,255,0.18), 0 1px 0 #fff',
              }}
            >
              <svg width="36" height="36" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9 text-[#ff0000] drop-shadow-md"><rect width="32" height="32" rx="8" fill="#fff" fillOpacity="0.10"/><path d="M25.6 10.133c-.267-1.067-1.067-1.867-2.134-2.134C21.2 7.6 16 7.6 16 7.6s-5.2 0-7.467.399c-1.067.267-1.867 1.067-2.134 2.134C6 12.4 6 16 6 16s0 3.6.399 5.867c.267 1.067 1.067 1.867 2.134 2.134C10.8 24.4 16 24.4 16 24.4s5.2 0 7.467-.399c1.067-.267 1.867-1.067 2.134-2.134C26 19.6 26 16 26 16s0-3.6-.4-5.867zM14.4 19.2v-6.4l6.4 3.2-6.4 3.2z" fill="#ff0000"/></svg>
              <span className="bg-gradient-to-r from-[#ff512f] via-[#dd2476] to-[#1fa2ff] bg-clip-text text-transparent font-black">YouTube Channel</span>
            </span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="mb-6"
          >
            <span className="block text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white drop-shadow-lg tracking-wide" style={{letterSpacing: '0.02em'}}>Bhuppii Bhai</span>
          </motion.div>
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-8 font-normal"
          >
            Vlogging content, fitness tutorials, and tech insights. Join me on my journey as I share knowledge, tips, and experiences in web development and beyond.
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-4 mb-6">
            <span className="block text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white drop-shadow-lg tracking-wide" style={{letterSpacing: '0.02em'}}>Bhuppii Bhai</span>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105"
            >
              <a
                href="http://www.youtube.com/@official_bhuppiiydv"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Play className="w-5 h-5 mr-2" />
                Subscribe to Channel
              </a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {youtubeVideos.map((video) => (
            <motion.div
              key={video.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 group"
            >
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center overflow-hidden">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    width={400}
                    height={225}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button
                    size="sm"
                    className="bg-red-500 hover:bg-red-600 text-white rounded-full"
                  >
                    <Play className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2 group-hover:text-red-400 transition-colors">
                  {video.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                  {video.description}
                </p>

                <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Eye className="w-3 h-3 mr-1" />
                      {video.views}
                    </div>
                    <div className="flex items-center">
                      <ThumbsUp className="w-3 h-3 mr-1" />
                      {video.likes}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {video.publishedAt}
                  </div>
                </div>

                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="w-full border-white/20 text-white hover:bg-white/10 hover:border-red-400 transition-all duration-300"
                >
                  <a
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Watch Video
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white/20 text-white hover:bg-white/10 hover:border-red-400 transition-all duration-300"
          >
            <a
              href="http://www.youtube.com/@official_bhuppiiydv"
              target="_blank"
              rel="noopener noreferrer"
            >
              View All Videos
              <ExternalLink className="w-5 h-5 ml-2" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
