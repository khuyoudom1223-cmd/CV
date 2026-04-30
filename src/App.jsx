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

function App() {
  return (
    <div className="relative isolate min-h-screen">
      {/* Background Mesh */}
      <div className="bg-gradient-mesh" />
      <div className="fixed inset-0 z-[-3] animated-gradient-bg opacity-[0.08] pointer-events-none" />

      {/* Glow effects */}
      <div className="floating-orb orb-primary top-[-12%] left-[-8%] w-[34vw] h-[34vw]" />
      <div className="floating-orb orb-accent top-[18%] right-[-10%] w-[28vw] h-[28vw]" />
      <div className="floating-orb orb-secondary bottom-[-12%] left-[18%] w-[26vw] h-[26vw]" />
      <div className="floating-light orb-yellow top-[14%] left-[-16%] w-[42vw] h-[20vw]" />
      <div className="fixed inset-0 z-[-2] opacity-[0.14] bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.35)_1px,transparent_0)] [background-size:22px_22px]" />

      <ScrollProgress />
      <Navbar />

      <motion.main
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.08 }}
        className="container mx-auto px-4 md:px-12 lg:px-24"
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
      >
        <Footer />
      </motion.div>
      <ScrollToTop />
    </div>
  )
}

export default App
