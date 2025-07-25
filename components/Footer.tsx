'use client'

import { motion } from 'framer-motion'
import { Heart, ArrowUp, Github, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-12 border-t border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left side - Branding */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold gradient-text mb-2">Abdul Raheem</h3>
            <p className="text-gray-400 text-sm">
              Full Stack Developer & AI Engineer
            </p>
          </div>

          {/* Center - Copyright */}
          <div className="text-center">
            <p className="text-gray-400 text-sm flex items-center justify-center gap-1">
              © {currentYear} Made with 
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              by Abdul Raheem
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Built with Next.js, Tailwind CSS & Framer Motion
            </p>
          </div>

          {/* Right side - Social Links & Scroll to Top */}
          <div className="flex items-center justify-center md:justify-end gap-4">
            <div className="flex gap-3">
              <motion.a
                href="https://github.com/abdul-raheem-fast"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 bg-slate-700/50 rounded-lg text-gray-400 hover:text-white hover:bg-slate-600/50 transition-all duration-300"
              >
                <Github size={18} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/abdul-raheem-fast/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 bg-slate-700/50 rounded-lg text-gray-400 hover:text-blue-400 hover:bg-slate-600/50 transition-all duration-300"
              >
                <Linkedin size={18} />
              </motion.a>
              <motion.a 
                href="mailto:abdulraheemghauri@gmail.com" 
                rel="noopener noreferrer" 
                whileHover={{ scale: 1.2, rotate: 360 }} 
                whileTap={{ scale: 0.95 }}
                className="p-2 bg-slate-700/50 rounded-lg text-gray-400 hover:text-green-400 hover:bg-slate-600/50 transition-all duration-300 flex items-center justify-center" 
                aria-label="Send email"
              >
                <Mail size={18} />
              </motion.a>
            </div>

            {/* Scroll to top button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            >
              <ArrowUp size={18} />
            </motion.button>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-8 pt-6 border-t border-slate-700/30 text-center">
          <p className="text-gray-500 text-xs">
            Available for freelance projects and full-time opportunities. Let's build something amazing together!
          </p>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-64 h-32 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl -z-10"></div>
    </footer>
  )
}

export default Footer