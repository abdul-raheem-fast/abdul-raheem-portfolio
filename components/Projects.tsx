'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Calendar, Users, Database, Brain, ShoppingCart, FileText, Heart, Zap, Award, TrendingUp, Star, Rocket, Shield, Code, Globe, Target, BarChart3, CheckCircle2, Trophy, Cpu, Lock, Sparkles } from 'lucide-react';

const projectCategories = [
  { id: 'all', name: 'All Projects', icon: Globe },
  { id: 'ai-ml', name: 'AI/ML', icon: Brain },
  { id: 'full-stack', name: 'Full-Stack', icon: Code },
  { id: 'enterprise', name: 'Enterprise', icon: Shield },
];

const projects = [
  {
    id: 1,
    title: "Mental Health Tracker - AI-Powered Wellness Platform",
    subtitle: "Revolutionary Enterprise-Grade Solution",
    description: "Enterprise-grade mental wellness platform empowering organizations to proactively monitor wellness through AI-driven insights, achieving 92% accuracy in mood pattern predictions.",
    longDescription: "Revolutionary mental health tracking platform that empowers individuals and organizations to proactively monitor, understand, and improve mental wellness through AI-driven insights and personalized support. Features workplace integration, crisis support system, and comprehensive analytics.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=800&fit=crop&q=80",
    category: "ai-ml",
    status: "In Development",
    priority: "high",
    tech: ["Next.js", "TypeScript", "Python/ML", "PostgreSQL", "AI/ML APIs", "Enterprise Integrations", "HIPAA Compliance"],
    techIcons: ["/icons/tech/nextjs.svg", "/icons/tech/typescript.svg", "/icons/tech/python.svg", "/icons/tech/postgresql.svg", "/icons/tech/ai-ml.svg"],
    features: [
      "92% accuracy in mood pattern predictions",
      "Workplace Slack/Teams integration with smart scheduling",
      "End-to-end encryption & HIPAA compliance",
      "Crisis support with early warning system",
      "Multi-language support and cultural sensitivity",
      "ROI tracking and business impact analytics",
      "Professional network connections",
      "Predictive analytics dashboard"
    ],
    metrics: {
      accuracy: "92%",
      impact: "40% burnout reduction target",
      users: "1000+ enterprise users (6-month goal)",
      languages: "Multi-language support",
      compliance: "HIPAA, GDPR compliant"
    },
    achievements: [
      "Predictive Mental Health Analytics with 92% accuracy",
      "Enterprise workplace integration (Slack/Teams)",
      "Cultural sensitivity with multi-language support",
      "Professional network integration",
      "Target: Prevent 1M workplace burnout cases annually"
    ],
    githubUrl: "https://github.com/abdul-raheem-fast/web-development-projects",
    liveUrl: "#",
    documentationUrl: "#",
    isStarred: true,
    gradient: "from-purple-600 via-blue-600 to-cyan-500"
  },
  {
    id: 2,
    title: "E-Commerce Database Platform",
    subtitle: "Full-Stack Enterprise Solution",
    description: "Comprehensive e-commerce application with React.js 19.0.0 frontend and Node.js backend, featuring normalized SQL Server database architecture for efficient data management.",
    longDescription: "Full-stack e-commerce application built with modern technologies, featuring secure authentication, comprehensive product catalog, real-time shopping cart updates, advanced voucher system, complete order management, and responsive design optimized for both desktop and mobile devices.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop&q=80",
    category: "full-stack",
    status: "Production Ready",
    priority: "high",
    tech: ["React.js 19.0.0", "Node.js", "Express.js", "SQL Server", "CSS3", "Session Authentication", "RESTful APIs"],
    techIcons: ["/icons/tech/react.svg", "/icons/tech/nodejs.svg", "/icons/tech/expressjs.svg", "/icons/tech/sqlserver.svg"],
    features: [
      "Normalized SQL Server database schema",
      "Real-time shopping cart with live updates",
      "Secure session-based authentication system",
      "Advanced voucher system (cart-wide & item-specific)",
      "Comprehensive order management & history",
      "Wishlist functionality with persistent storage",
      "Admin panel for products, orders & user management",
      "Responsive design for all device types",
      "Product search, filtering & categorization"
    ],
    metrics: {
      database: "Fully Normalized Schema",
      performance: "Real-time Updates",
      security: "Session-based Auth",
      scalability: "Enterprise Ready",
      compatibility: "Cross-platform"
    },
    achievements: [
      "Normalized database architecture with optimized queries",
      "Real-time cart updates with efficient state management",
      "Comprehensive admin panel with full CRUD operations",
      "Advanced voucher system with flexible discount rules",
      "Production-ready with full error handling"
    ],
    githubUrl: "#",
    liveUrl: "#",
    documentationUrl: "#",
    isStarred: true,
    gradient: "from-blue-600 via-purple-600 to-pink-500"
  },
  {
    id: 3,
    title: "Blog Summarizer & Analytics Platform",
    subtitle: "Advanced AI Integration",
    description: "Advanced web platform that automatically scrapes, summarizes, and analyzes blog content with multi-language support, featuring AI-powered summarization and real-time analytics.",
    longDescription: "Comprehensive blog processing platform with intelligent content scraping, AI-powered summarization, English to Urdu translation, real-time analytics dashboard, n8n webhook integration, and dual database architecture for optimal performance.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop&q=80",
    category: "ai-ml",
    status: "Deployed Live",
    priority: "high",
    tech: ["Next.js", "TypeScript", "Supabase", "MongoDB", "n8n Webhooks", "Cheerio", "AI APIs", "Analytics"],
    techIcons: ["/icons/tech/nextjs.svg", "/icons/tech/typescript.svg", "/icons/tech/supabase.svg", "/icons/tech/mongodb.svg", "/icons/tech/n8n.svg", "/icons/tech/ai-ml.svg"],
    features: [
      "Intelligent blog content scraping and extraction",
      "AI-powered content summarization with high accuracy",
      "English to Urdu translation capabilities",
      "Real-time analytics dashboard with detailed insights",
      "n8n webhook integration for automation workflows",
      "Dual database architecture (Supabase + MongoDB)",
      "RESTful API endpoints with error handling",
      "Content processing pipeline optimization"
    ],
    metrics: {
      processing: "Real-time",
      languages: "Multi-language",
      databases: "Dual Architecture",
      automation: "Webhook Integration",
      analytics: "Live Dashboard"
    },
    achievements: [
      "Advanced full-stack development with dual databases",
      "AI integration for content processing and analysis",
      "Webhook automation with n8n workflows",
      "Multi-language translation system",
      "Real-time analytics and data visualization"
    ],
    githubUrl: "https://github.com/abdul-raheem-fast/web-development-projects",
    liveUrl: "#",
    documentationUrl: "#",
    isStarred: true,
    gradient: "from-green-600 via-teal-600 to-blue-500"
  },
  {
    id: 4,
    title: "Quote Generator Web App",
    subtitle: "Modern UI/UX",
    description: "Modern, responsive web application that generates inspirational quotes based on user-selected topics, built with Next.js and featuring beautiful ShadCN UI components.",
    longDescription: "Elegant quote generation platform with topic-based filtering, modern ShadCN UI interface, responsive design for all devices, local JSON data management, and clean TypeScript implementation following best practices.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop&q=80",
    category: "full-stack",
    status: "Deployed Live",
    priority: "medium",
    tech: ["Next.js", "TypeScript", "ShadCN UI", "Tailwind CSS", "Vercel", "Responsive Design"],
    techIcons: ["/icons/tech/nextjs.svg", "/icons/tech/typescript.svg", "/icons/tech/shadcnui.svg", "/icons/tech/tailwindcss.svg", "/icons/tech/vercel.svg"],
    features: [
      "Modern ShadCN UI interface with beautiful design",
      "Topic-based quote generation system",
      "Responsive design optimized for all devices",
      "Local JSON data management for fast performance",
      "Clean, maintainable TypeScript codebase",
      "Next.js App Router implementation",
      "Component-based architecture",
      "Modern UI/UX design principles"
    ],
    metrics: {
      framework: "Next.js",
      design: "ShadCN UI",
      performance: "Optimized",
      deployment: "Vercel",
      code: "TypeScript"
    },
    achievements: [
      "Next.js fundamentals and App Router mastery",
      "Modern UI/UX design implementation",
      "Component-based architecture",
      "TypeScript best practices",
      "Production deployment on Vercel"
    ],
    githubUrl: "https://github.com/abdul-raheem-fast/web-development-projects",
    liveUrl: "#",
    documentationUrl: "#",
    isStarred: false,
    gradient: "from-orange-500 via-red-500 to-pink-500"
  }
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
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
            <Rocket className="w-5 h-5 text-purple-400" />
            <span className="text-sm font-medium text-gray-300">Featured Projects</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent mb-6">
            Enterprise-Grade Solutions
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Showcasing production-ready applications with <span className="text-purple-400 font-semibold">AI integration</span>, 
            <span className="text-blue-400 font-semibold"> enterprise architecture</span>, and 
            <span className="text-green-400 font-semibold"> modern technologies</span>
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {projectCategories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg shadow-purple-500/25'
                  : 'bg-white/5 backdrop-blur-sm border border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20'
              }`}
            >
              <category.icon className="w-4 h-4" />
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid lg:grid-cols-2 gap-8 mb-16"
          layout
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-500"
              >
                {/* Priority Badge */}
                {project.priority === 'high' && (
                  <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    Featured
          </div>
        )}
          
          {/* Status Badge */}
                <div className="absolute top-4 right-4 z-20">
                  <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.status === 'Production Ready' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                    project.status === 'Deployed Live' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                    'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                  }`}>
              {project.status}
          </div>
        </div>

                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-60`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
              {project.title}
            </h3>
                      <p className="text-sm text-gray-400 font-medium">{project.subtitle}</p>
                    </div>
                    {project.isStarred && (
                      <Trophy className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                    )}
          </div>

                  <p className="text-gray-300 leading-relaxed mb-6">
            {project.description}
          </p>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {Object.entries(project.metrics).slice(0, 4).map(([key, value]) => (
                      <div key={key} className="bg-white/5 rounded-lg p-3 border border-white/10">
                        <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">{key}</div>
                        <div className="text-sm font-semibold text-white">{value}</div>
                </div>
              ))}
          </div>

          {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 6).map((tech, techIndex) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-medium text-gray-300 flex items-center gap-1"
                        >
                          {project.techIcons && project.techIcons[techIndex] && (
                            <img src={project.techIcons[techIndex]} alt={tech} className="w-4 h-4" />
                          )}
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 6 && (
                        <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-xs font-medium text-purple-400">
                          +{project.tech.length - 6} more
                </span>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
                    <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-white/10 backdrop-blur-sm border border-white/20 text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-white/20 transition-all duration-300"
            >
              <Github className="w-4 h-4" />
                      GitHub
                    </motion.a>
                    
                    <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex-1 bg-gradient-to-r ${project.gradient} text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300`}
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
                    </motion.a>
                    
                    <motion.button
                      onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-purple-500/20 border border-purple-500/30 text-purple-400 py-3 px-4 rounded-lg font-medium flex items-center justify-center hover:bg-purple-500/30 transition-all duration-300"
                    >
                      <FileText className="w-4 h-4" />
                    </motion.button>
        </div>
      </div>

                {/* Expanded Details */}
                <AnimatePresence>
                  {selectedProject === project.id && (
        <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-white/10 bg-white/5 backdrop-blur-sm"
                    >
                      <div className="p-8">
                        <h4 className="text-lg font-semibold text-white mb-4">Key Features & Achievements</h4>
                        <div className="grid gap-3 mb-6">
                          {project.features.slice(0, 6).map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-300 text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                        
                        <h4 className="text-lg font-semibold text-white mb-4">Technical Achievements</h4>
                        <div className="grid gap-2">
                          {project.achievements.map((achievement, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <Award className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-1" />
                              <span className="text-gray-300 text-sm">{achievement}</span>
                            </div>
                          ))}
                        </div>
          </div>
                    </motion.div>
                  )}
                </AnimatePresence>
        </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready for Enterprise Challenges</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              These projects demonstrate expertise in AI/ML integration, enterprise architecture, 
              full-stack development, and production-ready solutions. Ready to bring this level 
              of excellence to your organization.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              >
                <Sparkles className="w-5 h-5" />
                Let's Build Together
              </motion.a>
              
              <motion.a
                href="https://github.com/abdul-raheem-fast"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-white/20 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
                View All Projects
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}