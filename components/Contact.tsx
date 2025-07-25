'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, ExternalLink, Send, Star, Trophy, Zap, Globe, MessageSquare, Calendar, ArrowUpRight, CheckCircle2, Heart, Sparkles, User, Building, Clock, Award } from 'lucide-react';

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/abdul-raheem-fast",
    icon: Github,
    description: "Enterprise-grade code repositories and open source contributions",
    stats: "10+ repositories",
    color: "from-gray-600 to-gray-800",
    highlight: "Active contributor"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/abdul-raheem-fast/",
    icon: Linkedin,
    description: "Professional network and industry connections",
    stats: "500+ connections",
    color: "from-blue-600 to-blue-800",
    highlight: "Open to opportunities"
  },
  {
    name: "Email",
    url: "mailto:abdulraheemghauri@gmail.com",
    icon: Mail,
    description: "Direct professional communication",
    stats: "24h response",
    color: "from-green-600 to-green-800",
    highlight: "Primary contact"
  },
  {
    name: "Portfolio",
    url: "#projects",
    icon: Globe,
    description: "Live projects and case studies",
    stats: "4+ live demos",
    color: "from-purple-600 to-purple-800",
    highlight: "Latest work"
  }
];

const contactReasons = [
  {
    title: "Developer Roles",
    description: "Ready for full-time opportunities at leading tech companies",
    icon: Building,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Freelance Projects",
    description: "Available for enterprise-grade application development",
    icon: Star,
    color: "from-green-500 to-teal-500"
  },
  {
    title: "Technical Consultation",
    description: "Architecture review, AI integration, and technical guidance",
    icon: Zap,
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Collaboration",
    description: "Open source contributions and technical partnerships",
    icon: Heart,
    color: "from-red-500 to-orange-500"
  }
];

const achievements = [
  { label: "Projects Delivered", value: "10+", icon: Trophy },
  { label: "AI Accuracy Rate", value: "92%", icon: Star },
  { label: "Response Time", value: "24h", icon: Clock },
  { label: "Client Satisfaction", value: "100%", icon: CheckCircle2 }
];

const quickLinks = [
  { name: "View Resume", url: "/resume.pdf", icon: ExternalLink },
  { name: "Schedule Call", url: "#calendar", icon: Calendar },
  { name: "Project Inquiry", url: "#projects", icon: MessageSquare },
  { name: "Technical Discussion", url: "#skills", icon: Zap }
];

export default function Contact() {
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);
  const [hoveredReason, setHoveredReason] = useState<string | null>(null);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after success message
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/30 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(168,85,247,0.4),rgba(255,255,255,0))]" />
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
            <Sparkles className="w-5 h-5 text-purple-400" />
            <span className="text-sm font-medium text-gray-300">Let's Connect</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent mb-6">
            Ready to Build Together
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Open for <span className="text-purple-400 font-semibold">developer opportunities</span>, 
            <span className="text-blue-400 font-semibold"> enterprise projects</span>, and 
            <span className="text-green-400 font-semibold"> technical collaborations</span> at leading tech companies
          </p>
        </motion.div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:border-white/20 transition-all duration-300"
            >
              <achievement.icon className="w-8 h-8 mx-auto mb-3 text-purple-400" />
              <div className="text-2xl font-bold text-white mb-1">{achievement.value}</div>
              <div className="text-sm text-gray-400">{achievement.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                <Send className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Start a Conversation</h3>
                <p className="text-gray-400">Let's discuss your next big project</p>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">Message Sent!</h4>
                  <p className="text-gray-400">I'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <motion.form
                  initial={{ opacity: 1 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-4">
                <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        placeholder="your.email@company.com"
                  />
                </div>
              </div>

                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your company or organization"
                    />
              </div>

              <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                      rows={5}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell me about your project, opportunity, or how we can collaborate..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 disabled:from-gray-600 disabled:to-gray-700 text-white py-4 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              >
                {isSubmitting ? (
                  <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                    Sending...
                  </>
                ) : (
                  <>
                        <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Contact Reasons & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-8"
          >
            {/* Why Contact Me */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Trophy className="w-6 h-6 text-yellow-400" />
                Why Connect With Me?
              </h3>

            <div className="space-y-4">
                {contactReasons.map((reason, index) => (
                  <motion.div
                    key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                    onMouseEnter={() => setHoveredReason(reason.title)}
                    onMouseLeave={() => setHoveredReason(null)}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 cursor-pointer group"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${reason.color} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <reason.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                      <h4 className="text-lg font-semibold text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
                        {reason.title}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                        {reason.description}
                    </p>
                  </div>
                  </motion.div>
              ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Globe className="w-6 h-6 text-blue-400" />
                Connect Across Platforms
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target={social.name !== 'Portfolio' ? '_blank' : undefined}
                    rel={social.name !== 'Portfolio' ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                    onMouseEnter={() => setHoveredSocial(social.name)}
                    onMouseLeave={() => setHoveredSocial(null)}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${social.color} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <social.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
                          {social.name}
                        </h4>
                        <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">
                          {social.highlight}
                        </span>
                      </div>
                      <p className="text-gray-400 text-xs mb-1 group-hover:text-gray-300 transition-colors duration-300">
                        {social.description}
                      </p>
                      <div className="text-xs text-purple-400 font-medium">
                        {social.stats}
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors duration-300" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-400" />
                Quick Actions
              </h3>
              
              <div className="grid grid-cols-2 gap-3">
                {quickLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 1 + index * 0.05, duration: 0.3 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 p-3 bg-white/5 border border-white/10 rounded-lg hover:border-white/20 hover:bg-white/10 transition-all duration-300 text-sm text-gray-300 hover:text-white"
                  >
                    <link.icon className="w-4 h-4" />
                    {link.name}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent mb-4">Let's Create Something Amazing</h3>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Ready to bring enterprise-grade development expertise to your team. 
              Whether it's a challenging technical project or a developer role, 
              I'm excited to contribute to your success.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="mailto:abdulraheemghauri@gmail.com"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg flex items-center gap-3 shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
                aria-label="Send email"
              >
                <Mail className="w-6 h-6" />
                Email Me Now
              </motion.a>
              
              <motion.a
                href="https://www.linkedin.com/in/abdul-raheem-fast/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-10 py-4 rounded-full font-bold text-lg flex items-center gap-3 hover:bg-white/20 transition-all duration-300 shadow-lg"
              >
                <Linkedin className="w-6 h-6 text-blue-400" />
                Connect on LinkedIn
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}