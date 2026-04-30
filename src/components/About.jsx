import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Download, ExternalLink, User, Code, Palette } from 'lucide-react'

const About = () => {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <section id="about" className="py-12 md:py-24 relative overflow-hidden">
      {/* Scroll reveal container */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col lg:flex-row items-center gap-6 md:gap-16"
      >
        {/* Profile Image with Glowing Border */}
        <div className="flex-1 relative group max-w-md mx-auto lg:max-w-none">
          <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-xl md:rounded-[2rem] blur-xl md:blur-2xl opacity-20 animate-pulse" />

          <div className="relative w-full aspect-square rounded-[2rem] overflow-hidden border border-white/5 bg-surface/50 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
            {!imageLoaded && <div className="absolute inset-0 skeleton" />}
            {/* Profile Image with subtle float and hover animation */}
            <motion.img
              src="/photo_2026-04-29_20-38-16.jpg"
              alt="Oudom in a navy suit"
              onLoad={() => setImageLoaded(true)}
              initial={{ y: 0 }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              whileHover={{ scale: 1.03 }}
              className={`w-full h-full object-cover font-sans transition-opacity duration-700 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            />
          </div>

          {/* Floating tag removed per user request */}
        </div>

        {/* Bio Text in Glass Container */}
        <div className="flex-1 glass-card p-6 md:p-12 space-y-6 md:space-y-8">
          <div>
            <h2 className="text-primary font-bold tracking-widest uppercase text-xs md:text-sm mb-3">About Me</h2>
            <h1 className="about-h1 text-3xl xs:text-4xl md:text-5xl font-extrabold mb-4 md:mb-6 leading-tight">
              Designing <span className="text-gradient">Experiences</span>
            </h1>
            <p className="text-slate-400 text-base md:text-lg leading-relaxed">
              Over 2 years of experience in frontend development, specializing in building
              high-performance web applications that combine technical excellence with
              exceptional design.
            </p>
          </div>

          {/* Skill Features */}
          <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 md:gap-6">
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5 group-hover:bg-white/10 transition-colors">
              <div className="p-2 md:p-3 bg-primary/10 rounded-xl text-primary">
                <Code size={20} />
              </div>
              <span className="font-bold text-sm md:text-base">Clean Code</span>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5 group-hover:bg-white/10 transition-colors">
              <div className="p-2 md:p-3 bg-secondary/10 rounded-xl text-secondary">
                <Palette size={20} />
              </div>
              <span className="font-bold text-sm md:text-base">Modern UI/UX</span>
            </div>
          </div>

          <div className="flex flex-col xs:flex-row gap-3 md:gap-4 pt-4 md:pt-6">
            <a 
              href="/Screenshot%202026-04-30%20111303.png" 
              download="Oudom_CV.png"
              className="btn-primary px-8 py-4 text-sm font-bold w-full xs:w-auto flex items-center justify-center gap-2"
            >
              <Download size={18} />
              <span>Download CV</span>
            </a>
            <button 
              onClick={() => {
                const el = document.getElementById('projects')
                if (el) el.scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn-outline px-8 py-4 text-sm font-bold w-full xs:w-auto"
            >
              <ExternalLink size={18} />
              <span>View Portfolio</span>
            </button>
          </div>
        </div>
      </motion.div>

      {/* Decorative background element */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -z-10" />
    </section>
  )
}

export default About
