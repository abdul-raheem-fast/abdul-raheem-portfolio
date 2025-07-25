'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, ExternalLink, ChevronRight, Trophy, TrendingUp, Users, Globe, Brain, Code, Database, Star, Award, Rocket, Target, CheckCircle2, Sparkles, Building, Clock, ArrowUpRight, Zap, Shield } from 'lucide-react';

const experiences = [
  {
    id: 1,
    company: "Web Development Agency",
    position: "AI-First Web Development Intern",
    type: "Internship",
    location: "Remote",
    duration: "30-Day Intensive Program",
    period: "2024",
    status: "Completed with Distinction",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=100&h=100&fit=crop&q=80",
    companyDescription: "Leading AI-First Web Development Training Institution",
    description: "Completed intensive 30-day AI-first web development program focusing on building modern, scalable applications using cutting-edge technologies and AI-driven development practices.",
    achievements: [
      "Graduated as Top Performer with 2 Production-Ready Applications",
      "Built Mental Health AI Platform with 92% prediction accuracy",
      "Developed full-stack e-commerce solution with advanced features",
      "Mastered AI integration and machine learning implementation",
      "Achieved enterprise-grade development skills in record time",
      "Completed advanced projects exceeding basic requirements"
    ],
    keyProjects: [
      {
        title: "Mental Health Tracker - AI Platform",
        description: "Revolutionary AI-powered wellness platform with 92% prediction accuracy",
        impact: "Enterprise-grade solution targeting 1000+ users",
        tech: ["Next.js", "Python/ML", "PostgreSQL", "AI APIs"],
        techIcons: ["/icons/tech/nextjs.svg", "/icons/tech/python.svg", "/icons/tech/postgresql.svg", "/icons/tech/ai-ml.svg"],
        status: "Enterprise Ready"
      },
      {
        title: "Blog Summarizer & Analytics",
        description: "Advanced AI-powered content processing with multi-language support",
        impact: "Real-time analytics with dual database architecture",
        tech: ["Next.js", "Supabase", "MongoDB", "n8n"],
        techIcons: ["/icons/tech/nextjs.svg", "/icons/tech/supabase.svg", "/icons/tech/mongodb.svg", "/icons/tech/n8n.svg"],
        status: "Deployed Live"
      },
      {
        title: "Quote Generator Web App",
        description: "Modern React application with beautiful ShadCN UI",
        impact: "Production-ready with optimized performance",
        tech: ["Next.js", "TypeScript", "ShadCN UI"],
        techIcons: ["/icons/tech/nextjs.svg", "/icons/tech/typescript.svg", "/icons/tech/shadcnui.svg"],
        status: "Deployed Live"
      }
    ],
    skills: [
      "Next.js & React Mastery",
      "AI/ML Integration",
      "Full-Stack Development",
      "Database Architecture",
      "Enterprise Solutions",
      "Production Deployment"
    ],
    metrics: {
      projects: "3 Production Applications",
      accuracy: "92% AI Prediction Rate",
      technologies: "15+ Technologies Mastered",
      deployment: "100% Live Deployment Rate"
    },
    highlights: [
      "Top Graduate with Advanced Project Portfolio",
      "Enterprise-Grade AI Platform Development",
      "Production-Ready Full-Stack Solutions",
      "Advanced ML/AI Integration Expertise"
    ],
    certificate: "AI-First Web Development Certification",
    grade: "Outstanding Performance",
    color: "from-purple-600 to-blue-600",
    featured: true
  },
  {
    id: 2,
    company: "Self-Directed Projects",
    position: "Independent Full-Stack Developer",
    type: "Projects",
    location: "Pakistan",
    duration: "Ongoing",
    period: "2023 - Present",
    status: "Active Development",
    logo: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=100&h=100&fit=crop&q=80",
    companyDescription: "Personal Development & Learning Journey",
    description: "Self-directed learning and development of enterprise-grade applications, focusing on modern web technologies, database architecture, and user experience design.",
    achievements: [
      "Built comprehensive e-commerce platform with normalized database",
      "Implemented advanced authentication and security systems",
      "Developed real-time cart and order management systems",
      "Created responsive designs for cross-platform compatibility",
      "Mastered React 19.0.0 and modern JavaScript frameworks",
      "Established strong foundation in database design principles"
    ],
    keyProjects: [
      {
        title: "E-Commerce Database Platform",
        description: "Full-stack e-commerce with normalized SQL Server architecture",
        impact: "Production-ready with admin panel and real-time updates",
        tech: ["React 19.0.0", "Node.js", "SQL Server", "Express"],
        techIcons: ["/icons/tech/react.svg", "/icons/tech/nodejs.svg", "/icons/tech/sqlserver.svg", "/icons/tech/expressjs.svg"],
        status: "Production Ready"
      }
    ],
    skills: [
      "React.js 19.0.0",
      "Database Design",
      "Node.js & Express",
      "SQL Server",
      "Authentication Systems",
      "Responsive Design"
    ],
    metrics: {
      projects: "Multiple Production Apps",
      database: "Normalized Architecture",
      features: "Complete E-commerce Suite",
      responsive: "Cross-platform Support"
    },
    highlights: [
      "Independent Learning & Development",
      "Modern Technology Stack Mastery",
      "Production-Quality Code Standards",
      "User-Centric Design Approach"
    ],
    color: "from-blue-600 to-green-600",
    featured: false
  }
];

const skills = [
  { name: "Next.js", level: 95, category: "Frontend", color: "text-gray-300" },
  { name: "React.js", level: 98, category: "Frontend", color: "text-blue-400" },
  { name: "TypeScript", level: 92, category: "Language", color: "text-blue-500" },
  { name: "AI/ML Integration", level: 88, category: "AI", color: "text-purple-400" },
  { name: "Python", level: 85, category: "Backend", color: "text-yellow-400" },
  { name: "Node.js", level: 90, category: "Backend", color: "text-green-400" },
  { name: "Database Design", level: 92, category: "Data", color: "text-cyan-400" },
  { name: "Enterprise Architecture", level: 87, category: "System", color: "text-red-400" }
];

export default function Experience() {
  const [selectedExperience, setSelectedExperience] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'projects' | 'skills'>('overview');
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/30 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(139,92,246,0.3),rgba(255,255,255,0))]" />
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
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3 mb-6"
          >
            <Trophy className="w-5 h-5 text-purple-400" />
            <span className="text-sm font-medium text-gray-300">Professional Experience</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent mb-6">
            Excellence in Action
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Demonstrating <span className="text-purple-400 font-semibold">enterprise-level expertise</span> through 
            intensive training, <span className="text-blue-400 font-semibold">production-ready projects</span>, and 
            <span className="text-green-400 font-semibold">outstanding achievements</span>
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="max-w-6xl mx-auto">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative mb-16 last:mb-0"
            >
              {/* Experience Card */}
              <div className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-500 ${experience.featured ? 'ring-2 ring-purple-500/30' : ''}`}>
                {/* Featured Badge */}
                {experience.featured && (
                  <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    Featured
                                </div>
                )}

                {/* Header Section */}
                <div className="p-8 border-b border-white/10">
                  <div className="flex items-start gap-6">
                    {/* Company Logo */}
                    <div className="relative">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 p-0.5">
                        <div className="w-full h-full rounded-xl bg-gray-900 flex items-center justify-center overflow-hidden">
                          <img 
                            src={experience.logo} 
                            alt={experience.company}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className={`absolute -bottom-2 -right-2 w-6 h-6 bg-gradient-to-r ${experience.color} rounded-full flex items-center justify-center`}>
                        <Building className="w-3 h-3 text-white" />
                      </div>
                    </div>

                    {/* Experience Info */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
                            {experience.position}
                          </h3>
                          <div className="flex items-center gap-2 text-purple-400 font-semibold mb-2">
                            <span>{experience.company}</span>
                            <span className="text-gray-500">•</span>
                            <span className="text-sm text-gray-400">{experience.companyDescription}</span>
                          </div>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {experience.period}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {experience.duration}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {experience.location}
                            </div>
                                  </div>
                          </div>

                        <div className="text-right">
                          <div className={`px-3 py-1 rounded-full text-xs font-semibold mb-2 ${
                            experience.status.includes('Completed') ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                            experience.status.includes('Active') ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                            'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                          }`}>
                            {experience.status}
                          </div>
                          <div className="text-xs text-gray-500">{experience.type}</div>
                        </div>
                      </div>

                      <p className="text-gray-300 leading-relaxed mb-6">
                        {experience.description}
                      </p>

                  {/* Key Metrics */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                        {Object.entries(experience.metrics).map(([key, value]) => (
                          <div key={key} className="bg-white/5 rounded-lg p-3 border border-white/10">
                            <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">{key}</div>
                            <div className="text-sm font-semibold text-white">{value}</div>
                          </div>
                        ))}
                      </div>

                      {/* Navigation Tabs */}
                      <div className="flex gap-2 mb-6">
                        {['overview', 'projects', 'skills'].map((tab) => (
                          <motion.button
                            key={tab}
                            onClick={() => {
                              setActiveTab(tab as any);
                              setSelectedExperience(experience.id);
                            }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                              activeTab === tab && selectedExperience === experience.id
                                ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                                : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                            }`}
                          >
                            {tab === 'overview' && <Trophy className="w-4 h-4 inline mr-2" />}
                            {tab === 'projects' && <Rocket className="w-4 h-4 inline mr-2" />}
                            {tab === 'skills' && <Code className="w-4 h-4 inline mr-2" />}
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                          </motion.button>
                        ))}
                      </div>
                    </div>
                    </div>
                  </div>

                {/* Content Sections */}
                <AnimatePresence mode="wait">
                  {selectedExperience === experience.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-white/10"
                    >
                      {activeTab === 'overview' && (
                        <div className="p-8">
                          <h4 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                            <Award className="w-5 h-5 text-yellow-400" />
                            Key Achievements & Highlights
                          </h4>
                          <div className="grid gap-4 mb-8">
                            {experience.achievements.map((achievement, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex items-start gap-3"
                              >
                                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-300">{achievement}</span>
                              </motion.div>
                            ))}
                          </div>

                          <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                            <Sparkles className="w-5 h-5 text-purple-400" />
                            Career Highlights
                          </h4>
                          <div className="grid md:grid-cols-2 gap-4">
                            {experience.highlights.map((highlight, idx) => (
                              <div key={idx} className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-lg p-4 border border-purple-500/20">
                                <div className="flex items-center gap-2">
                                  <Target className="w-4 h-4 text-purple-400" />
                                  <span className="text-gray-300 font-medium">{highlight}</span>
                                </div>
                              </div>
                      ))}
                    </div>
                  </div>
                      )}

                      {activeTab === 'projects' && (
                        <div className="p-8">
                          <h4 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                            <Rocket className="w-5 h-5 text-blue-400" />
                            Key Projects & Contributions
                          </h4>
                          <div className="grid gap-6">
                            {experience.keyProjects.map((project, idx) => (
                              <motion.div
                          key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
                              >
                                <div className="flex items-start justify-between mb-4">
                                  <div>
                                    <h5 className="text-lg font-semibold text-white mb-2">{project.title}</h5>
                                    <p className="text-gray-400 mb-3">{project.description}</p>
                                    <div className="flex items-center gap-2 text-sm text-green-400">
                                      <TrendingUp className="w-4 h-4" />
                                      {project.impact}
                                    </div>
                                  </div>
                                  <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                    project.status === 'Enterprise Ready' ? 'bg-purple-500/20 text-purple-400' :
                                    project.status === 'Deployed Live' ? 'bg-green-500/20 text-green-400' :
                                    'bg-blue-500/20 text-blue-400'
                                  }`}>
                                    {project.status}
                                  </div>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                  {project.tech.map((tech, techIndex) => (
                                    <span key={tech} className="px-2 py-1 bg-white/10 rounded-md text-xs text-gray-300 flex items-center gap-1">
                                      {project.techIcons && project.techIcons[techIndex] && (
                                        <img src={project.techIcons[techIndex]} alt={tech} className="w-4 h-4" />
                                      )}
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      )}

                      {activeTab === 'skills' && (
                        <div className="p-8">
                          <h4 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                            <Code className="w-5 h-5 text-green-400" />
                            Technical Skills & Expertise
                          </h4>
                          <div className="grid md:grid-cols-2 gap-4 mb-8">
                            {experience.skills.map((skill, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex items-center gap-3 bg-white/5 rounded-lg p-3 border border-white/10"
                              >
                                <Zap className="w-4 h-4 text-yellow-400" />
                                <span className="text-gray-300">{skill}</span>
                              </motion.div>
                            ))}
                          </div>

                          {experience.certificate && (
                            <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-xl p-6 border border-yellow-500/20">
                              <div className="flex items-center gap-3 mb-2">
                                <Shield className="w-6 h-6 text-yellow-400" />
                                <h5 className="text-lg font-semibold text-white">Certification</h5>
                              </div>
                              <p className="text-gray-300 mb-1">{experience.certificate}</p>
                              <p className="text-sm text-yellow-400 font-medium">Grade: {experience.grade}</p>
                            </div>
                          )}
                </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center gap-2">
              <Brain className="w-6 h-6 text-purple-400" />
              Core Technical Expertise
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-medium text-white">{skill.name}</span>
                    <span className={`text-sm ${skill.color}`}>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : {}}
                      transition={{ delay: 1 + index * 0.1, duration: 1 }}
                      className={`h-2 rounded-full bg-gradient-to-r ${skill.color === 'text-gray-300' ? 'from-gray-300 to-gray-400' : 
                        skill.color === 'text-blue-400' ? 'from-blue-400 to-blue-600' :
                        skill.color === 'text-blue-500' ? 'from-blue-500 to-indigo-600' :
                        skill.color === 'text-purple-400' ? 'from-purple-400 to-pink-500' :
                        skill.color === 'text-yellow-400' ? 'from-yellow-400 to-orange-500' :
                        skill.color === 'text-green-400' ? 'from-green-400 to-green-600' :
                        skill.color === 'text-cyan-400' ? 'from-cyan-400 to-blue-500' :
                        'from-red-400 to-red-600'}`}
                    />
                  </div>
                  <span className="text-xs text-gray-500">{skill.category}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready for New Opportunities</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Demonstrated excellence in enterprise-grade development, AI integration, 
              and production-ready solutions. Ready to bring this expertise to your team.
            </p>
            
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            >
              <ArrowUpRight className="w-5 h-5" />
              Let's Discuss Opportunities
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}