import React from 'react'
import { motion } from 'framer-motion'
import { Download, ExternalLink, User, Code, Palette } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="py-8 md:py-24 relative overflow-hidden">
      {/* Scroll reveal container */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-row items-center gap-4 md:gap-16"
      >
        {/* Profile Image with Glowing Border */}
        <div className="flex-1 relative group">
          <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-xl md:rounded-[2rem] blur-xl md:blur-2xl opacity-20 animate-pulse" />
          
          <div className="relative w-full aspect-square rounded-xl md:rounded-[2rem] overflow-hidden border border-white/10 bg-dark shadow-2xl">
            {/* Profile Image */}
            <img 
              src="/IMG_6203.JPG" 
              alt="Profile" 
              className="w-full h-full object-cover font-sans"
            />
          </div>
          
          {/* Floating tags - simplified for mobile */}
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -top-3 right-0 bg-accent/20 backdrop-blur-md px-2 py-1 md:px-4 md:py-2 rounded-full border border-accent/30 text-accent text-[8px] md:text-sm font-bold"
          >
            Available
          </motion.div>
        </div>

        {/* Bio Text */}
        <div className="flex-1 space-y-4 md:space-y-8">
          <div>
            <h2 className="text-primary font-bold tracking-widest uppercase text-[10px] md:text-sm mb-1 md:mb-2">About Me</h2>
            <h1 className="text-lg xs:text-2xl md:text-5xl font-extrabold mb-3 md:mb-6 leading-tight">
              Designing <span className="text-gradient">Experiences</span>
            </h1>
            <p className="text-gray-400 text-[10px] xs:text-xs md:text-lg leading-relaxed line-clamp-3 md:line-clamp-none">
              Over 5 years of experience in frontend development, specializing in building 
              high-performance web applications that combine technical excellence with 
              exceptional design.
            </p>
          </div>

          {/* Skill Grid - Stacked to save horizontal space */}
          <div className="space-y-3 md:space-y-6">
            <div className="flex items-center gap-2 md:gap-4">
              <div className="p-1.5 md:p-3 glass rounded-lg md:rounded-xl text-primary">
                <Code size={14} className="md:w-6 md:h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white text-[10px] md:text-lg">Clean Code</h4>
              </div>
            </div>
            <div className="flex items-center gap-2 md:gap-4">
              <div className="p-1.5 md:p-3 glass rounded-lg md:rounded-xl text-secondary">
                <Palette size={14} className="md:w-6 md:h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white text-[10px] md:text-lg">Modern UI/UX</h4>
              </div>
            </div>
          </div>

          <div className="flex flex-col xs:flex-row gap-2 md:gap-4 pt-2 md:pt-4">
            <button className="px-3 py-1.5 xs:px-6 xs:py-3 bg-primary rounded-xl text-[10px] xs:text-sm font-bold flex items-center justify-center gap-2">
              <Download size={14} className="md:w-5 md:h-5" />
              <span>CV</span>
            </button>
            <button className="px-3 py-1.5 xs:px-6 xs:py-3 border border-white/10 rounded-xl text-[10px] xs:text-sm font-bold flex items-center justify-center gap-2">
              <ExternalLink size={14} className="md:w-5 md:h-5" />
              <span>Projects</span>
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
