'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          <motion.a
            href="#"
            onClick={(e) => scrollToSection(e, 'body')}
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05, textShadow: '0 0 8px rgba(147, 112, 219, 0.5)' }}
          >
            AR
          </motion.a>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-gray-300 hover:text-white transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/abdul-raheem-fast" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><Github /></a>
            <a href="https://www.linkedin.com/in/abdul-raheem-fast/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><Linkedin /></a>
            <motion.a 
              href="mailto:abdulraheemghauri@gmail.com?subject=Portfolio%20Inquiry" 
              rel="noopener noreferrer" 
              whileHover={{ scale: 1.2, rotate: 360 }} 
              whileTap={{ scale: 0.95 }}
              className="text-gray-400 hover:text-white flex items-center justify-center" 
              aria-label="Send email"
            >
              <Mail />
            </motion.a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white">
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="md:hidden absolute top-0 left-0 w-full bg-slate-900/95 backdrop-blur-lg shadow-xl"
          >
            <div className="flex justify-end p-4">
                <button onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white">
                    <X size={28} />
                </button>
            </div>
            <nav className="flex flex-col items-center space-y-6 py-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-2xl text-gray-200 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
               <div className="flex items-center space-x-6 pt-6">
                <a href="https://github.com/abdul-raheem-fast" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><Github size={28}/></a>
                <a href="https://www.linkedin.com/in/abdul-raheem-fast/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white"><Linkedin size={28}/></a>
                <motion.a 
                  href="mailto:abdulraheemghauri@gmail.com?subject=Portfolio%20Inquiry" 
                  rel="noopener noreferrer" 
                  whileHover={{ scale: 1.2, rotate: 360 }} 
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-400 hover:text-white flex items-center justify-center" 
                  aria-label="Send email"
                >
                  <Mail size={28}/>
                </motion.a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}