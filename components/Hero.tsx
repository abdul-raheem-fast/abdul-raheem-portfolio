'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Sparkles, Code, Database, Brain, Zap, Github, Linkedin, Mail, Download, ExternalLink, Award, TrendingUp, Users, Globe, Star, Target, Cpu, Shield, Rocket, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const roles = [
  "AI Engineer & Architect",
  "Full-Stack Developer", 
  "Enterprise Solution Expert",
  "ML & Predictive Analytics",
  "Web Developer",
  "Database Architect"
];

const achievements = [
  { icon: Brain, text: "92% AI Prediction Accuracy", color: "text-purple-400", bg: "bg-purple-500/10" },
  { icon: Users, text: "Enterprise-Grade Solutions", color: "text-blue-400", bg: "bg-blue-500/10" },
  { icon: TrendingUp, text: "1000+ Target Users Platform", color: "text-green-400", bg: "bg-green-500/10" },
  { icon: Database, text: "Normalized DB Architecture", color: "text-cyan-400", bg: "bg-cyan-500/10" },
  { icon: Shield, text: "HIPAA Compliant Systems", color: "text-red-400", bg: "bg-red-500/10" },
  { icon: Cpu, text: "SQL Server Expert", color: "text-orange-400", bg: "bg-orange-500/10" }
];

const techStack = [
  { name: "Next.js", level: 95, color: "from-white to-gray-300", icon: "/icons/tech/nextjs.svg" },
  { name: "React", level: 98, color: "from-blue-400 to-blue-600", icon: "/icons/tech/react.svg" },
  { name: "TypeScript", level: 92, color: "from-blue-500 to-indigo-600", icon: "/icons/tech/typescript.svg" },
  { name: "Node.js", level: 90, color: "from-green-400 to-green-600", icon: "/icons/tech/nodejs.svg" },
  { name: "Python/ML", level: 88, color: "from-yellow-400 to-orange-500", icon: "/icons/tech/python.svg" },
  { name: "AI/ML APIs", level: 85, color: "from-purple-400 to-pink-500", icon: "/icons/tech/ai-ml.svg" },
  { name: "SQL Server", level: 95, color: "from-red-400 to-red-600", icon: "/icons/tech/sqlserver-icon.svg" },
  { name: "Framer Motion", level: 90, color: "from-pink-400 to-purple-500", icon: "/icons/tech/framer-motion.svg" }
];

const floatingElements = [
  { icon: Code, x: 10, y: 20, delay: 0 },
  { icon: Database, x: 85, y: 15, delay: 0.5 },
  { icon: Brain, x: 15, y: 70, delay: 1 },
  { icon: Zap, x: 80, y: 75, delay: 1.5 },
  { icon: Star, x: 50, y: 10, delay: 2 },
  { icon: Rocket, x: 90, y: 50, delay: 2.5 }
];

const projectHighlights = [
  {
    title: "Mental Health AI Platform",
    description: "92% prediction accuracy • Enterprise grade • HIPAA compliant",
    status: "Revolutionary",
    color: "from-purple-500 to-pink-500",
    image: "/images/projects/mental-health-ai.svg"
  },
  {
    title: "E-Commerce Database System",
    description: "Normalized architecture • Real-time updates • Full-stack",
    status: "Production Ready",
    color: "from-blue-500 to-cyan-500",
    image: "/images/projects/ecommerce-database.svg"
  },
  {
    title: "Web Development Projects",
    description: "Blog Summarizer • Quote Generator • AI Integration",
    status: "Deployed Live",
    color: "from-green-500 to-teal-500",
    image: "/images/projects/quote-generator.svg"
  }
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showProjects, setShowProjects] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = roles[currentRole];
      
      if (isDeleting) {
        setDisplayText(current.substring(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      } else {
        setDisplayText(current.substring(0, displayText.length + 1));
        if (displayText === current) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  useEffect(() => {
    const timer = setTimeout(() => setShowProjects(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/30 relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      {/* Floating Elements - Only visible on larger screens */}
      <div className="hidden md:block">
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            className="absolute z-10"
            style={{ left: `${element.x}%`, top: `${element.y}%` }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.4, scale: 1 }}
            transition={{ delay: element.delay, duration: 1, repeat: Infinity, repeatType: "reverse", repeatDelay: 3 }}
          >
            <element.icon className="w-6 h-6 text-blue-400/30" />
          </motion.div>
        ))}
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="relative z-20 container mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between min-h-screen">
        {/* Left Content - Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center md:text-left md:pr-8 mb-12 md:mb-0"
        >
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent mb-6">
            Abdul Raheem
          </h1>
          
          <div className="text-2xl md:text-3xl text-gray-300 mb-4">
            <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-bold min-h-[1.2em] inline-block">
              {displayText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                className="text-purple-400 ml-1"
              >
                |
              </motion.span>
            </span>
          </div>

          <p className="text-xl text-gray-400 max-w-xl leading-relaxed mb-8">
            Building enterprise-grade AI solutions with <span className="text-purple-400 font-semibold">92% accuracy</span> • 
            Mastering full-stack development • Creating impact at <span className="text-blue-400 font-semibold">scale</span>
          </p>
          
          {/* Call to action buttons */}
          <div className="flex flex-wrap gap-4">
            <motion.a
            href="mailto:abdulraheemghauri@gmail.com?subject=Portfolio%20Inquiry"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 360 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-3 rounded-full font-bold text-lg flex items-center gap-2 shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
            aria-label="Send email"
          >
            <Mail className="w-5 h-5" />
            Contact Me
          </motion.a>
            
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-3 rounded-full font-bold text-lg flex items-center gap-2 hover:bg-white/20 transition-all duration-300"
            >
              <ArrowDown className="w-5 h-5" />
              View Projects
            </motion.a>
          </div>
        </motion.div>
        
        {/* Right Content - Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2 flex justify-center"
        >
          <div className="relative">
              {/* Glowing circle background */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 blur-2xl opacity-40 scale-150 animate-pulse-slow"></div>
              <div className="absolute inset-0 rounded-full bg-blue-500 blur-3xl opacity-30 scale-125 animate-pulse" style={{ animationDelay: '1s' }}></div>
              
              {/* Profile Image with Advanced Effects */}
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, type: "spring", stiffness: 100 }}
                className="relative z-10"
              >
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 p-2 shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/70 transition-all duration-300">
                  <div className="w-full h-full rounded-full bg-gray-900/70 p-1 overflow-hidden">
                    <div className="relative w-full h-full rounded-full overflow-hidden">
                      <Image
                        src="/Picsart_25-07-14_10-07-40-211.png"
                        alt="Abdul Raheem"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority
                        className="object-cover bg-transparent hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Rotating Ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 bg-clip-border"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>
        </div>

      <div className="container mx-auto px-6 pb-20">
        {/* Achievement Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12 w-full max-w-6xl mx-auto"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`${achievement.bg} backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center hover:border-white/20 transition-all duration-300`}
            >
              <achievement.icon className={`w-8 h-8 ${achievement.color} mx-auto mb-2`} />
              <p className="text-sm text-gray-300 font-medium leading-tight">{achievement.text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="w-full max-w-4xl mb-12 mx-auto"
        >
          <h3 className="text-xl font-semibold text-gray-300 mb-6 text-center">Technology Mastery</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.7 + index * 0.1, duration: 0.5 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    {tech.icon && (
                      <Image 
                        src={tech.icon} 
                        alt={tech.name} 
                        width={16} 
                        height={16} 
                        className="object-contain" 
                      />
                    )}
                    <span className="text-sm font-medium text-gray-300">{tech.name}</span>
                  </div>
                  <span className="text-xs text-gray-400">{tech.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${tech.level}%` }}
                    transition={{ delay: 2 + index * 0.1, duration: 1, ease: "easeOut" }}
                    className={`h-2 rounded-full bg-gradient-to-r ${tech.color}`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Project Highlights */}
        <AnimatePresence>
          {showProjects && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-full max-w-6xl mb-12 mx-auto"
            >
              <h3 className="text-2xl font-bold text-gray-200 mb-8 text-center">Featured Projects</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {projectHighlights.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.2, duration: 0.6 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-all duration-300"
                >
                  <div className={`h-2 bg-gradient-to-r ${project.color}`} />
                  {project.image && (
                    <div className="w-full h-40 relative">
                      <Image 
                        src={project.image} 
                        alt={project.title} 
                        fill 
                        className="object-cover" 
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-lg font-semibold text-white">{project.title}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${project.color} text-white`}>
                        {project.status}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
                  </div>
                </motion.div>
              ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="flex flex-wrap gap-4 justify-center mb-12 mx-auto"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
          >
            <Rocket className="w-5 h-5" />
            Explore Projects
          </motion.a>
          
          <motion.a
            href="mailto:abdulraheemghauri@gmail.com?subject=Portfolio%20Inquiry"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 360 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-white/20 transition-all duration-300"
            aria-label="Send email"
          >
            <Mail className="w-5 h-5" />
            Get In Touch
          </motion.a>
          
          <motion.a
            href="/resume.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 shadow-lg hover:shadow-green-500/25 transition-all duration-300"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
          className="flex gap-6 mb-8 justify-center"
        >
          <motion.a
            href="https://github.com/abdul-raheem-fast"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 360 }}
            className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
          >
            <Github className="w-6 h-6 text-gray-300" />
          </motion.a>
          
          <motion.a
            href="https://www.linkedin.com/in/abdul-raheem-fast"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 360 }}
            className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
          >
            <Linkedin className="w-6 h-6 text-blue-400" />
          </motion.a>
          
          <motion.a
            href="mailto:abdulraheemghauri@gmail.com?subject=Portfolio%20Inquiry"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 360 }}
            className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300"
          >
            <Mail className="w-6 h-6 text-green-400" />
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors cursor-pointer"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}