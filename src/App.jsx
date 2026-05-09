import React from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import Hero from './components/Hero'
import About from './components/About'
import Stats from './components/Stats'
import Skills from './components/Skills'
import Services from './components/Services'
import Experience from './components/Experience'
import FixedGrid from './components/FixedGrid'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import AnimatedBackground from './components/AnimatedBackground'

function App() {
  return (
    <div className="relative isolate min-h-screen bg-[#050508]">
      {/* Dark Fantasy Background Layer (behind everything) */}
      <div className="fixed inset-0 z-[-10] bg-[#050508]">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 20% 0%, rgba(109, 40, 217, 0.15) 0%, transparent 50%)' }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 80% 100%, rgba(217, 70, 239, 0.1) 0%, transparent 50%)' }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(139, 92, 246, 0.05) 0%, transparent 60%)' }} />
        {/* Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_1px_1px,rgba(168,85,247,0.5)_1px,transparent_0)] [background-size:28px_28px]" />
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
        <Stats />
        <Skills />
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
      <ScrollToTop />

      {/* Skeleton Monster Creature — ALWAYS ON TOP */}
      <AnimatedBackground />
    </div>
  )
}

export default App
