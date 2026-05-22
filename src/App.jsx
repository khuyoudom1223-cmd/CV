import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Experience from './components/Experience'
import FixedGrid from './components/FixedGrid'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AnimatedBackground from './components/AnimatedBackground'

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')

  useEffect(() => {
    const root = window.document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
      root.classList.remove('light')
    } else {
      root.classList.add('light')
      root.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  const isDark = theme === 'dark'
  const bgColorVal = isDark ? '#050508' : '#f8fafc'
  const radial1Val = isDark ? 'rgba(109, 40, 217, 0.15)' : 'rgba(139, 92, 246, 0.04)'
  const radial2Val = isDark ? 'rgba(217, 70, 239, 0.1)' : 'rgba(217, 70, 239, 0.03)'
  const glowVal = isDark ? 'rgba(168,85,247,0.5)' : 'rgba(139, 92, 246, 0.3)'
  const gridOpacity = isDark ? 'opacity-[0.06]' : 'opacity-[0.14]'

  return (
    <div
      className="relative isolate min-h-screen overflow-x-hidden transition-colors duration-1000"
      style={{ backgroundColor: bgColorVal }}
    >
      {/* Dark & Light Modern Responsive Animated Background Layer */}
      <div
        className="fixed inset-0 z-[-10] transition-colors duration-1000"
        style={{ backgroundColor: bgColorVal }}
      >
        <div className="absolute inset-0 transition-all duration-1000" style={{ background: `radial-gradient(ellipse at 20% 0%, ${radial1Val} 0%, transparent 50%)` }} />
        <div className="absolute inset-0 transition-all duration-1000" style={{ background: `radial-gradient(ellipse at 80% 100%, ${radial2Val} 0%, transparent 50%)` }} />
        <div className="absolute inset-0 transition-all duration-1000" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(139, 92, 246, 0.03) 0%, transparent 60%)' }} />
        {/* Grid Overlay */}
        <div
          className={`absolute inset-0 ${gridOpacity} transition-all duration-1000 bg-[radial-gradient(circle_at_1px_1px,var(--glow-color)_1px,transparent_0)] [background-size:28px_28px]`}
          style={{ '--glow-color': glowVal }}
        />
      </div>

      <ScrollProgress />
      <Navbar />

      <motion.main
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.08 }}
        className="container mx-auto px-3 md:px-12 lg:px-24 relative z-10"
      >
        <Hero />
        <About />
        <Services />
        <Experience />
        <FixedGrid />
        <Projects />
        <Testimonials />
        <FAQ />
        <Contact />
      </motion.main>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.18 }}
        className="relative z-10"
      >
        <Footer />
      </motion.div>

      {/* Floating Theme Controller Switch (Sun / Moon) */}
      <div className="fixed bottom-6 left-6 md:bottom-12 md:left-12 z-[100] flex items-center gap-3">
        {/* Toggle Switch */}
        <div 
          onClick={toggleTheme}
          className="h-14 w-28 bg-white/10 dark:bg-dark-card/60 backdrop-blur-3xl rounded-full border border-white/20 dark:border-white/10 p-1 flex items-center justify-between cursor-pointer relative shadow-premium overflow-hidden group select-none"
        >
          {/* Animated sliding knob */}
          <motion.div 
            layout
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            className="absolute top-1 bottom-1 w-12 rounded-full bg-gradient-to-r from-primary to-secondary shadow-glow-primary z-10"
            style={{ left: theme === 'dark' ? 'calc(50% + 2px)' : '4px' }}
          />

          <div className="w-1/2 flex justify-center items-center z-20 text-slate-800 dark:text-slate-400">
            <Sun size={20} className={`${theme === 'light' ? 'text-white' : ''} transition-colors duration-300`} />
          </div>
          <div className="w-1/2 flex justify-center items-center z-20 text-slate-400 dark:text-slate-200">
            <Moon size={20} className={`${theme === 'dark' ? 'text-white' : ''} transition-colors duration-300`} />
          </div>
        </div>
      </div>

      <AnimatedBackground />
    </div>
  )
}

export default App;
