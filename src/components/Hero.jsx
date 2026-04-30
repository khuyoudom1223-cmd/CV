import React from 'react'
import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'
import { Github, Linkedin, Instagram, ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-12 md:pt-40 md:pb-24 flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-20 overflow-hidden">
      {/* Left Content */}
      <div className="flex-1 text-left">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-sm xs:text-base md:text-2xl font-bold text-primary mb-2 md:mb-4 tracking-wider">Hello, I'm Oudom</h2>
          <h1 className="hero-h1 text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-4 md:mb-8 tracking-tight leading-[1.1] text-white">
            Frontend <span className="text-gradient">Developer</span>
          </h1>

          <div className="text-lg xs:text-xl md:text-3xl font-bold mb-6 md:mb-10 h-10 md:h-12">
            <span className="inline">I build{' '}</span>
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

          <p className="text-slate-400 text-sm xs:text-base md:text-lg mb-8 md:mb-12 max-w-xl leading-relaxed">
            Passionate about creating visually stunning and highly interactive web experiences
            with modern technologies.
          </p>

          <div className="flex flex-row gap-3 md:gap-4 items-start">
            <button 
              onClick={() => {
                const el = document.getElementById('projects')
                if (el) el.scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn-primary px-6 py-4 md:px-8 md:py-4 text-sm font-bold"
            >
              <span className="inline">Projects</span>
              <ArrowRight size={18} />
            </button>
            <a 
              href="https://t.me/khuyoudom"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline px-6 py-4 md:px-8 md:py-4 text-sm font-bold block text-center"
            >
              Contact
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-8 md:mt-12 flex gap-4 md:gap-6">
            {[Github, Linkedin, Instagram].map((Icon, idx) => {
              const href =
                Icon === Github ? 'https://github.com/oudomkhuy' :
                  Icon === Linkedin ? 'https://linkedin.com/in/oudom-khuy-1205423b5' :
                    Icon === Instagram ? 'https://www.instagram.com/oudomkhuy?igsh=cjNlNDlrazExY3o%3D&utm_source=qr' :
                      '#'
              const external = href !== '#'
              return (
                <motion.a
                  key={idx}
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  whileHover={{ y: -5, color: '#8B5CF6' }}
                  className="p-2 md:p-3 glass rounded-full border border-white/5"
                >
                  <Icon size={14} className="md:w-6 md:h-6" />
                </motion.a>
              )
            })}
          </div>
        </motion.div>
      </div>

      <div className="hidden lg:block flex-1 relative w-full max-w-lg mx-auto lg:max-w-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="w-full aspect-square md:aspect-auto overflow-hidden rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.5)] border border-white/5 bg-surface/50">
            <motion.img
              src="/photo_2026-04-29_21-03-51.jpg"
              alt="Developer illustration"
              initial={{ y: 0 }}
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              whileHover={{ scale: 1.05 }}
              className="w-full h-full md:h-[500px] lg:h-[600px] object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
