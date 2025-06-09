"use client";

import { motion } from "framer-motion";
import { Heart, ArrowUp, Github, Linkedin, Twitter, Instagram, Youtube, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { personalInfo, socialLinks, navigationItems } from "@/data/social";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-border bg-gradient-to-br from-[#0f2027] via-[#2c5364] to-[#101c16] text-white shadow-inner shadow-cyan-900/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl sm:text-4xl font-extrabold mb-4 text-white drop-shadow-lg tracking-wide">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent animate-gradient-x">
                  {personalInfo.name}
                </span>
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                {personalInfo.bio}
              </p>
              <div className="flex gap-4">
                {socialLinks.slice(0, 4).map((link) => {
                  let IconComponent;
                  if (link.icon === "Github") IconComponent = Github;
                  else if (link.icon === "Linkedin") IconComponent = Linkedin;
                  else if (link.icon === "Twitter") IconComponent = Twitter;
                  else if (link.icon === "Instagram") IconComponent = Instagram;
                  else if (link.icon === "Youtube") IconComponent = Youtube;
                  else IconComponent = Mail;

                  return (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 rounded-lg bg-background hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      <span className="sr-only">{link.name}</span>
                      <IconComponent className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
              <nav className="space-y-2">
                {navigationItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="font-semibold mb-4 text-foreground">Get in Touch</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>{personalInfo.email}</p>
                <p>{personalInfo.phone}</p>
                <p>{personalInfo.location}</p>
              </div>
            </motion.div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col items-center gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-muted-foreground flex items-center gap-1 justify-center text-center"
          >
            © {new Date().getFullYear()} {personalInfo.name}. Made with
            <Heart className="h-4 w-4 text-red-500 fill-current mx-1" />
            using Next.js
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <ArrowUp className="h-4 w-4 mr-2" />
              Back to Top
            </Button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
