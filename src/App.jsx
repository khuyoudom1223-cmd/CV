import React from 'react'
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
    <div className="relative min-h-screen">
      {/* Background Mesh */}
      <div className="bg-gradient-mesh" />

      {/* Glow effects */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full z-[-1]" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/20 blur-[120px] rounded-full z-[-1]" />

      <ScrollProgress />
      <Navbar />

      <main className="container mx-auto px-6 md:px-12 lg:px-24 overflow-hidden">
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
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
