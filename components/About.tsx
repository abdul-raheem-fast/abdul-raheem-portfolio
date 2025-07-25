'use client';

import { motion } from 'framer-motion';
import { Download, Briefcase, Zap, Target } from 'lucide-react';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
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
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <section id="about" className="py-20 sm:py-32 bg-slate-900/50">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
            About <span className="text-purple-400">Me</span>
          </h2>
          <p className="text-lg text-gray-400 text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            A passionate engineer dedicated to building robust, scalable, and innovative solutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-5 gap-12 items-center"
        >
          {/* Left Column: Skills/Expertise Graphic - Now moved to right side on desktop */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 md:order-last flex justify-center items-center"
          >
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-xl blur-xl opacity-50 transform -rotate-3"></div>
              <div className="relative bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 shadow-xl">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Zap className="w-5 h-5 text-purple-400 mr-2" />
                  Core Expertise
                </h3>
                <div className="space-y-4">
                  {[
                    { skill: "AI & Machine Learning", level: 92 },
                    { skill: "Full-Stack Development", level: 95 },
                    { skill: "Enterprise Architecture", level: 90 },
                    { skill: "Database Design", level: 88 }
                  ].map((item, index) => (
                    <div key={index} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-300">{item.skill}</span>
                        <span className="text-purple-400 font-medium">{item.level}%</span>
                      </div>
                      <div className="w-full h-2 bg-slate-700/50 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Content - Now moved to left side on desktop */}
          <motion.div variants={itemVariants} className="md:col-span-3 md:order-first">
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              As a Full-Stack Developer and AI Engineer, I thrive on solving complex challenges and turning innovative ideas into reality. My expertise in the MERN stack, combined with a deep understanding of AI and machine learning, allows me to build intelligent, high-performance applications from the ground up.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-slate-800/50 p-4 rounded-lg flex items-start space-x-4">
                    <Zap className="w-8 h-8 text-blue-400 mt-1" />
                    <div>
                        <h3 className="font-bold text-white">Dynamic Solutions</h3>
                        <p className="text-gray-400 text-sm">Crafting dynamic, responsive applications that provide seamless user experiences.</p>
                    </div>
                </div>
                <div className="bg-slate-800/50 p-4 rounded-lg flex items-start space-x-4">
                    <Target className="w-8 h-8 text-purple-400 mt-1" />
                    <div>
                        <h3 className="font-bold text-white">Result-Oriented</h3>
                        <p className="text-gray-400 text-sm">Focused on delivering measurable results and business value through technology.</p>
                    </div>
                </div>
            </div>

            <motion.a
              href="/resume.pdf" // Make sure you have a resume.pdf in your /public folder
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={20} />
              Download Resume
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;