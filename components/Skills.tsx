'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Brain, Palette, Server, Globe, Zap, Star, Trophy, Target, ChevronRight, Cpu, Shield, Rocket, Layers, Command, GitBranch, Settings, Cloud, Lock, BarChart3, Sparkles } from 'lucide-react';

const skillCategories = [
  { id: 'all', name: 'All Skills', icon: Globe, color: 'from-purple-500 to-blue-500' },
  { id: 'frontend', name: 'Frontend', icon: Palette, color: 'from-blue-500 to-cyan-500' },
  { id: 'backend', name: 'Backend', icon: Server, color: 'from-green-500 to-teal-500' },
  { id: 'database', name: 'Database', icon: Database, color: 'from-orange-500 to-red-500' },
  { id: 'ai-ml', name: 'AI/ML', icon: Brain, color: 'from-purple-500 to-pink-500' },
  { id: 'tools', name: 'Tools & DevOps', icon: Settings, color: 'from-gray-500 to-slate-600' }
];

const skills = [
  // Frontend
  {
    name: "Next.js",
    level: 95,
    category: "frontend",
    icon: "⚛️",
    iconPath: "/icons/tech/nextjs.svg",
    description: "Advanced Next.js development with App Router, SSR, SSG, and performance optimization",
    projects: ["Mental Health AI Platform", "Blog Summarizer", "Quote Generator"],
    experience: "2+ years",
    certifications: ["Web Development Advanced"],
    color: "from-white to-gray-300"
  },
  {
    name: "React.js",
    level: 98,
    category: "frontend",
    icon: "⚛️",
    iconPath: "/icons/tech/react.svg",
    description: "Expert-level React development with hooks, context, performance optimization, and modern patterns",
    projects: ["E-commerce Platform", "Mental Health Tracker", "Web Development Projects"],
    experience: "3+ years",
    certifications: ["Production Proven"],
    color: "from-blue-400 to-blue-600"
  },
  {
    name: "TypeScript",
    level: 92,
    category: "frontend",
    icon: "📘",
    iconPath: "/icons/tech/typescript.svg",
    description: "Strong TypeScript implementation with advanced types, generics, and enterprise patterns",
    projects: ["All Major Projects", "Enterprise Solutions"],
    experience: "2+ years",
    certifications: ["Industry Standard"],
    color: "from-blue-500 to-indigo-600"
  },
  {
    name: "Tailwind CSS",
    level: 94,
    category: "frontend",
    icon: "🎨",
    iconPath: "/icons/tech/tailwindcss.svg",
    description: "Advanced Tailwind CSS with custom components, responsive design, and modern UI patterns",
    projects: ["Portfolio", "All Modern Projects"],
    experience: "2+ years",
    certifications: ["Design Systems"],
    color: "from-cyan-400 to-blue-500"
  },
  {
    name: "Framer Motion",
    level: 90,
    category: "frontend",
    icon: "🎭",
    iconPath: "/icons/tech/framer-motion.svg",
    description: "Complex animations, page transitions, and interactive motion design",
    projects: ["Portfolio", "Interactive Dashboards"],
    experience: "1+ years",
    certifications: ["Animation Expert"],
    color: "from-pink-400 to-purple-500"
  },

  // Backend
  {
    name: "Node.js",
    level: 90,
    category: "backend",
    icon: "🟢",
    iconPath: "/icons/tech/nodejs.svg",
    description: "Server-side JavaScript development with Express.js, API design, and performance optimization",
    projects: ["E-commerce Backend", "API Services"],
    experience: "2+ years",
    certifications: ["Backend Specialist"],
    color: "from-green-400 to-green-600"
  },
  {
    name: "Python",
    level: 85,
    category: "backend",
    icon: "🐍",
    iconPath: "/icons/tech/python.svg",
    description: "Python development for AI/ML integration, data processing, and backend services",
    projects: ["Mental Health AI", "ML Pipeline"],
    experience: "2+ years",
    certifications: ["AI Integration"],
    color: "from-yellow-400 to-orange-500"
  },
  {
    name: "Express.js",
    level: 88,
    category: "backend",
    icon: "🚂",
    iconPath: "/icons/tech/expressjs.svg",
    description: "RESTful API development, middleware implementation, and server architecture",
    projects: ["E-commerce API", "Authentication Systems"],
    experience: "2+ years",
    certifications: ["API Expert"],
    color: "from-gray-600 to-gray-800"
  },

  // Database
  {
    name: "SQL Server",
    level: 95,
    category: "database",
    icon: "🗄️",
    iconPath: "/icons/tech/sqlserver-icon.svg",
    description: "Expert-level SQL Server implementation with advanced database design, normalized schemas, stored procedures, and high-performance query optimization",
    projects: ["E-commerce Database", "Enterprise Systems", "HIPAA Compliant Healthcare DB"],
    experience: "3+ years",
    certifications: ["Database Architect", "SQL Server Expert"],
    color: "from-red-400 to-red-600"
  },
  {
    name: "PostgreSQL",
    level: 88,
    category: "database",
    icon: "🐘",
    iconPath: "/icons/tech/postgresql.svg",
    description: "Production PostgreSQL with advanced queries, indexing, and scalability patterns",
    projects: ["Mental Health Platform", "Enterprise Solutions"],
    experience: "1+ years",
    certifications: ["Production Ready"],
    color: "from-blue-600 to-indigo-700"
  },
  {
    name: "MongoDB",
    level: 85,
    category: "database",
    icon: "🍃",
    iconPath: "/icons/tech/mongodb.svg",
    description: "NoSQL database design, aggregation pipelines, and document modeling",
    projects: ["Blog Summarizer", "Analytics Platform"],
    experience: "1+ years",
    certifications: ["NoSQL Expert"],
    color: "from-green-500 to-green-700"
  },
  {
    name: "Supabase",
    level: 87,
    category: "database",
    icon: "⚡",
    iconPath: "/icons/tech/supabase.svg",
    description: "Real-time database features, authentication, and serverless backend solutions",
    projects: ["Blog Analytics", "Real-time Apps"],
    experience: "1+ years",
    certifications: ["Modern Backend"],
    color: "from-green-400 to-teal-500"
  },

  // AI/ML
  {
    name: "AI/ML APIs",
    level: 88,
    category: "ai-ml",
    icon: "🤖",
    iconPath: "/icons/tech/ai-ml.svg",
    description: "Integration of AI/ML services, prompt engineering, and intelligent application development",
    projects: ["Mental Health AI", "Content Summarization"],
    experience: "1+ years",
    certifications: ["AI Integration Specialist"],
    color: "from-purple-400 to-pink-500"
  },
  {
    name: "Predictive Analytics",
    level: 85,
    category: "ai-ml",
    icon: "📊",
    description: "Machine learning models for prediction, pattern recognition, and data-driven insights",
    projects: ["92% Accuracy Mental Health Predictions"],
    experience: "1+ years",
    certifications: ["ML Practitioner"],
    color: "from-blue-500 to-purple-500"
  },
  {
    name: "Natural Language Processing",
    level: 82,
    category: "ai-ml",
    icon: "💬",
    description: "Text processing, sentiment analysis, and language translation systems",
    projects: ["Blog Summarizer", "Multi-language Support"],
    experience: "1+ years",
    certifications: ["NLP Specialist"],
    color: "from-green-400 to-blue-500"
  },

  // Tools & DevOps
  {
    name: "Git & GitHub",
    level: 94,
    category: "tools",
    icon: "🌿",
    iconPath: "/icons/tech/github.svg",
    description: "Advanced version control, branching strategies, and collaborative development",
    projects: ["All Projects", "Open Source Contributions"],
    experience: "3+ years",
    certifications: ["Version Control Expert"],
    color: "from-orange-500 to-red-500"
  },
  {
    name: "Vercel",
    level: 90,
    category: "tools",
    icon: "▲",
    iconPath: "/icons/tech/vercel.svg",
    description: "Production deployments, CI/CD pipelines, and performance optimization",
    projects: ["All Deployed Projects", "Production Apps"],
    experience: "2+ years",
    certifications: ["Deployment Specialist"],
    color: "from-black to-gray-700"
  },
  {
    name: "VS Code",
    level: 96,
    category: "tools",
    icon: "💻",
    iconPath: "/icons/tech/vscode.svg",
    description: "Advanced IDE usage, extensions, debugging, and productivity optimization",
    projects: ["All Development Work"],
    experience: "3+ years",
    certifications: ["Power User"],
    color: "from-blue-500 to-blue-700"
  },
  {
    name: "Webhooks & Automation",
    level: 85,
    category: "tools",
    icon: "🔗",
    iconPath: "/icons/tech/n8n.svg",
    description: "n8n workflows, automation systems, and integration development",
    projects: ["Blog Summarizer Automation"],
    experience: "1+ years",
    certifications: ["Automation Expert"],
    color: "from-purple-500 to-indigo-500"
  }
];

const achievements = [
  { 
    title: "92% AI Prediction Accuracy",
    description: "Achieved industry-leading accuracy in mental health pattern prediction",
    icon: Target,
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Enterprise-Grade Solutions",
    description: "Built production-ready applications with enterprise architecture",
    icon: Shield,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Full-Stack Mastery",
    description: "Complete end-to-end development from frontend to database",
    icon: Layers,
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "AI Integration Expert",
    description: "Successfully integrated AI/ML into multiple production applications",
    icon: Brain,
    color: "from-orange-500 to-red-500"
  }
];

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const filteredSkills = selectedCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  const categoryStats = skillCategories.slice(1).map(category => ({
    ...category,
    count: skills.filter(skill => skill.category === category.id).length,
    avgLevel: Math.round(
      skills
        .filter(skill => skill.category === category.id)
        .reduce((sum, skill) => sum + skill.level, 0) /
      skills.filter(skill => skill.category === category.id).length
    )
  }));

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.3),rgba(255,255,255,0))]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3 mb-6"
          >
            <Code className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-medium text-gray-300">Technical Expertise</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent mb-6">
            Mastery in Action
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Demonstrating <span className="text-blue-400 font-semibold">enterprise-level proficiency</span> across 
            modern technologies with <span className="text-purple-400 font-semibold">production-proven results</span> and 
            <span className="text-green-400 font-semibold">innovative applications</span>
          </p>
        </motion.div>

        {/* Achievement Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/20 transition-all duration-300"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${achievement.color} rounded-lg flex items-center justify-center mb-4`}>
                <achievement.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{achievement.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{achievement.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Category Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mb-12"
        >
          {categoryStats.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
              className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center"
            >
              <category.icon className="w-8 h-8 mx-auto mb-2 text-blue-400" />
              <div className="text-2xl font-bold text-white mb-1">{category.count}</div>
              <div className="text-sm text-gray-400 mb-1">{category.name}</div>
              <div className="text-xs text-purple-400 font-medium">{category.avgLevel}% avg</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {skillCategories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg shadow-blue-500/25`
                  : 'bg-white/5 backdrop-blur-sm border border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20'
              }`}
            >
              <category.icon className="w-4 h-4" />
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
          <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          layout
        >
          <AnimatePresence mode="wait">
            {filteredSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-all duration-500"
              >
                {/* Skill Header */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {skill.iconPath ? (
                        <div className="w-8 h-8 flex items-center justify-center">
                          <img src={skill.iconPath} alt={skill.name} className="w-6 h-6" />
                        </div>
                      ) : (
                        <div className="text-2xl">{skill.icon}</div>
                      )}
                      <div>
                        <h3 className="text-lg font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                          {skill.name}
                        </h3>
                        <div className="text-sm text-gray-400">{skill.experience} experience</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white mb-1">{skill.level}%</div>
                      <div className="text-xs text-gray-500">Proficiency</div>
                    </div>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-gray-700 rounded-full h-3 mb-4">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : {}}
                      transition={{ delay: 0.8 + index * 0.05, duration: 1, ease: "easeOut" }}
                      className={`h-3 rounded-full bg-gradient-to-r ${skill.color} relative overflow-hidden`}
                    >
                      <motion.div
                        className="absolute inset-0 bg-white/20"
                        animate={{ x: ['100%', '-100%'] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      />
                    </motion.div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {skill.description}
                  </p>

                  {/* Certifications & Experience */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Trophy className="w-4 h-4 text-yellow-400" />
                      <span className="text-xs text-yellow-400 font-medium">{skill.certifications[0]}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-purple-400" />
                      <span className="text-xs text-purple-400 font-medium">{skill.projects.length} Projects</span>
                    </div>
                  </div>

                  {/* Toggle Details Button */}
                  <motion.button
                    onClick={() => setSelectedSkill(selectedSkill === skill.name ? null : skill.name)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-white/10 backdrop-blur-sm border border-white/20 text-white py-2 px-4 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-white/20 transition-all duration-300"
                  >
                    <span className="text-sm">View Details</span>
                    <motion.div
                      animate={{ rotate: selectedSkill === skill.name ? 90 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronRight className="w-4 h-4" />
                </motion.div>
                  </motion.button>
                </div>

                {/* Expanded Details */}
                <AnimatePresence>
                  {selectedSkill === skill.name && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-white/10 bg-white/5 backdrop-blur-sm"
                    >
                      <div className="p-6">
                        <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                          <Rocket className="w-4 h-4 text-blue-400" />
                          Featured Projects
                        </h4>
                        <div className="space-y-2 mb-4">
                          {skill.projects.map((project, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                              <span className="text-xs text-gray-300">{project}</span>
                            </div>
                          ))}
                        </div>
                        
                        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg p-3 border border-blue-500/20">
                          <div className="flex items-center gap-2 mb-1">
                            <BarChart3 className="w-4 h-4 text-green-400" />
                            <span className="text-sm font-medium text-white">Performance Metrics</span>
                          </div>
                          <div className="text-xs text-gray-400">
                            Production proven • Enterprise ready • Industry standards
                          </div>
                        </div>
            </div>
          </motion.div>
        )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Tech Stack Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center justify-center gap-2">
              <Sparkles className="w-6 h-6 text-purple-400" />
              Technology Stack Overview
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A comprehensive view of my technical expertise across modern development stack
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Frontend Excellence</h4>
              <p className="text-gray-400 text-sm mb-3">Modern React, Next.js, and TypeScript development</p>
              <div className="text-2xl font-bold text-blue-400">95%</div>
              <div className="text-xs text-gray-500">Average Proficiency</div>
            </div>

              <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Server className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Backend & Database</h4>
              <p className="text-gray-400 text-sm mb-3">Node.js, Python, and enterprise database design</p>
              <div className="text-2xl font-bold text-green-400">88%</div>
              <div className="text-xs text-gray-500">Average Proficiency</div>
            </div>

              <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">AI & Innovation</h4>
              <p className="text-gray-400 text-sm mb-3">AI/ML integration and predictive analytics</p>
              <div className="text-2xl font-bold text-purple-400">85%</div>
              <div className="text-xs text-gray-500">Average Proficiency</div>
            </div>
              </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Leverage These Skills</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              With production-proven expertise across modern tech stack and enterprise-grade 
              solutions, I'm ready to contribute to your team's success from day one.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              >
                <Rocket className="w-5 h-5" />
                View Projects
              </motion.a>
              
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-white/20 transition-all duration-300"
              >
                <Zap className="w-5 h-5" />
                Let's Collaborate
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}