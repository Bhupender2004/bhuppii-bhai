"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { contactFormSchema, ContactFormData } from "@/lib/validations";
import { personalInfo, socialLinks } from "@/data/social";

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

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
      }
    } catch  {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
    },
    {
      icon: MapPin,
      label: "Location",
      value: personalInfo.location,
      href: "#",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-20 overflow-hidden bg-gradient-to-br from-black via-zinc-900 to-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-green-400 bg-clip-text text-transparent drop-shadow-2xl animate-gradient-x">
                Get In Touch
              </span>
            </h2>
            <p className="text-lg text-zinc-100 max-w-2xl mx-auto drop-shadow-lg">
              Have a project in mind? Let us discuss how we can work together to bring your ideas to life.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants}>
              <Card
                className="relative h-full bg-zinc-900/70 border border-cyan-400/20 shadow-2xl rounded-3xl overflow-hidden backdrop-blur-md transition-all duration-300 group hover:border-cyan-400/60 hover:shadow-cyan-500/20 hover:scale-[1.025] before:absolute before:inset-0 before:bg-gradient-to-br before:from-cyan-400/10 before:via-transparent before:to-green-400/10 before:pointer-events-none"
              >
                <CardContent className="relative p-8 z-10">
                  <h3 className="text-xl sm:text-2xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent drop-shadow-2xl animate-gradient-x">
                      Lets Start a Conversation
                    </span>
                  </h3>
                  
                  <p className="text-zinc-200 mb-8 leading-relaxed drop-shadow">
                    I am always interested in hearing about new projects and opportunities. 
                    Whether you are a company looking to hire, or you are someone with an 
                    interesting project, I would love to hear from you.
                  </p>

                  {/* Contact Info */}
                  <div className="space-y-6 mb-8">
                    {contactInfo.map((info) => (
                      <motion.a
                        key={info.label}
                        href={info.href}
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-4 p-4 rounded-lg hover:bg-zinc-800/60 transition-colors group"
                      >
                        <div className="p-3 rounded-lg bg-cyan-400/10 group-hover:bg-cyan-400 group-hover:text-white transition-colors">
                          <info.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-medium text-zinc-100">{info.label}</p>
                          <p className="text-sm text-zinc-400">{info.value}</p>
                        </div>
                      </motion.a>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div>
                    <h4 className="font-semibold mb-4 text-zinc-100">Follow Me</h4>
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
                            whileHover={{ scale: 1.15, y: -4 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-3 rounded-xl bg-gradient-to-br from-zinc-800/90 via-zinc-900/95 to-black/90 border border-cyan-400/40 shadow-lg hover:bg-cyan-400/90 hover:border-cyan-300 transition-all duration-300 group flex items-center justify-center"
                          >
                            <IconComponent className="h-6 w-6 text-cyan-300 group-hover:text-white drop-shadow-[0_2px_8px_rgba(34,211,238,0.7)] transition-colors duration-300" />
                            <span className="sr-only">{link.name}</span>
                          </motion.a>
                        );
                      })}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <Card
                className="relative bg-zinc-900/70 border border-cyan-400/20 shadow-2xl rounded-3xl overflow-hidden backdrop-blur-md transition-all duration-300 group hover:border-cyan-400/60 hover:shadow-cyan-500/20 hover:scale-[1.025] before:absolute before:inset-0 before:bg-gradient-to-br before:from-cyan-400/10 before:via-transparent before:to-green-400/10 before:pointer-events-none"
              >
                <CardContent className="relative p-8 z-10">
                  <h3 className="text-3xl sm:text-4xl font-extrabold mb-6">
                    <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent drop-shadow-2xl animate-gradient-x">
                      Send Me a Message
                    </span>
                  </h3>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-zinc-100">Name *</Label>
                        <Input
                          id="name"
                          {...register("name")}
                          className="mt-1 placeholder:font-normal placeholder:text-zinc-400 bg-zinc-800/80 border border-zinc-700 text-zinc-100"
                          placeholder="Your name"
                        />
                        {errors.name && (
                          <p className="text-sm text-destructive mt-1">
                            {errors.name.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="email" className="text-zinc-100">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          {...register("email")}
                          className="mt-1 placeholder:font-normal placeholder:text-zinc-400 bg-zinc-800/80 border border-zinc-700 text-zinc-100"
                          placeholder="your.email@example.com"
                        />
                        {errors.email && (
                          <p className="text-sm text-destructive mt-1">
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject" className="text-zinc-100">Subject *</Label>
                      <Input
                        id="subject"
                        {...register("subject")}
                        className="mt-1 placeholder:font-normal placeholder:text-zinc-400 bg-zinc-800/80 border border-zinc-700 text-zinc-100"
                        placeholder="What's this about?"
                      />
                      {errors.subject && (
                        <p className="text-sm text-destructive mt-1">
                          {errors.subject.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-zinc-100">Message *</Label>
                      <Textarea
                        id="message"
                        {...register("message")}
                        className="mt-1 min-h-[120px] placeholder:font-normal placeholder:text-zinc-400 bg-zinc-800/80 border border-zinc-700 text-zinc-100"
                        placeholder="Tell me about your project..."
                      />
                      {errors.message && (
                        <p className="text-sm text-destructive mt-1">
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 via-cyan-500 to-green-500 hover:from-blue-700 hover:to-green-600 text-white font-extrabold py-3 rounded-xl shadow-xl transition-all duration-300 border-0 tracking-wide text-lg uppercase drop-shadow-md"
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full"
                        />
                      ) : (
                        <Send className="mr-2 h-4 w-4" />
                      )}
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>

                    {/* Status Messages */}
                    {submitStatus === 'success' && (
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-sm text-green-600 text-center"
                      >
                        Message sent successfully! I will get back to you soon.
                      </motion.p>
                    )}

                    {submitStatus === 'error' && (
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-sm text-destructive text-center"
                      >
                        Something went wrong. Please try again.
                      </motion.p>
                    )}
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
