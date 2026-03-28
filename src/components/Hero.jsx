import React from 'react'
import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'
import { Github, Linkedin, Instagram, ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-8 md:pt-32 md:pb-12 flex flex-row items-center justify-center gap-4 md:gap-12 overflow-hidden">
      {/* Left Content */}
      <div className="flex-1 text-left">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xs xs:text-sm md:text-2xl font-medium text-primary mb-2 md:mb-4 tracking-wider">Hello, I'm</h2>
          <h1 className="text-xl xs:text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-black mb-4 md:mb-6 tracking-tight leading-tight">
            Frontend <span className="text-gradient">Developer</span>
          </h1>
          
          <div className="text-sm xs:text-base md:text-3xl font-semibold mb-6 md:mb-8 h-8 md:h-10">
            <span className="hidden xs:inline">I build{' '}</span>
            <span className="text-secondary">
              <Typewriter
                words={['Modern UI', 'Animated UX', 'Scalable Apps']}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </div>

          <p className="text-gray-400 text-[10px] xs:text-xs md:text-lg mb-6 md:mb-10 max-w-xl line-clamp-2 md:line-clamp-none">
            Passionate about creating visually stunning and highly interactive web experiences 
            with modern technologies.
          </p>

          <div className="flex flex-col xs:flex-row gap-2 md:gap-4 items-start">
            <button className="px-3 py-1.5 xs:px-6 xs:py-3 bg-primary rounded-xl text-[10px] xs:text-sm font-bold flex items-center gap-2">
              <span className="hidden xs:inline">Projects</span>
              <ArrowRight size={14} />
            </button>
            <button className="px-3 py-1.5 xs:px-6 xs:py-3 border border-white/10 rounded-xl text-[10px] xs:text-sm font-bold">
              Contact
            </button>
          </div>

          {/* Social Links */}
          <div className="mt-6 md:mt-12 flex gap-2 md:gap-6">
            {[Github, Linkedin, Instagram].map((Icon, idx) => (
              <motion.a
                key={idx}
                href="#"
                whileHover={{ y: -5, color: '#8B5CF6' }}
                className="p-2 md:p-3 glass rounded-full border border-white/5"
              >
                <Icon size={14} className="md:w-6 md:h-6" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Right Side: Animated Illustration */}
      <div className="flex-1 relative w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Main Floating Image/Illustration Mockup */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-48 xs:h-64 sm:h-80 md:h-[400px] lg:h-[500px] glass-card flex items-center justify-center relative z-10 overflow-hidden rounded-[1.5rem] md:rounded-[2.5rem]"
          >
            <img 
              src="/IMG_6203.JPG" 
              alt="Hero Illustration" 
              className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700"
            />
            
            {/* Visual elements - reduced for mobile */}
            <div className="absolute top-4 left-4 w-10 md:w-20 h-1 md:h-2 bg-primary/30 rounded-full" />
            <div className="absolute bottom-10 right-4 w-16 md:w-32 h-1 md:h-2 bg-secondary/30 rounded-full" />
          </motion.div>

          {/* Minimal decorative bits for mobile */}
          <motion.div
            animate={{ x: [0, 5, 0], y: [0, -5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-3 -right-3 md:-top-6 md:-right-6 w-10 h-10 md:w-24 md:h-24 glass rounded-xl md:rounded-3xl z-20 flex items-center justify-center"
          >
            <span className="text-lg md:text-3xl">✨</span>
          </motion.div>

          <motion.div
            animate={{ x: [0, -5, 0], y: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-5 -left-5 px-3 py-2 md:px-6 md:py-4 glass rounded-xl md:rounded-2xl z-20 flex items-center gap-1 md:gap-3"
          >
            <div className="flex flex-col">
              <span className="text-[6px] md:text-xs text-gray-400 leading-tight">Oudom</span>
              <span className="text-[8px] md:text-sm font-bold leading-tight">Dev</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
