import React from 'react'
import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'
import { Send, Linkedin, ArrowRight, Sparkles } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-24 pb-20 md:pt-48 md:pb-32 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24 overflow-hidden px-6 max-w-7xl mx-auto">
      {/* Left Content */}
      <div className="w-full lg:flex-1 text-center lg:text-left z-10 order-2 lg:order-1">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2
            className="text-sm md:text-xl font-bold mb-4 tracking-[0.35em] uppercase text-primary-light"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            Hello, I'm Sam Bath
          </h2>
          <h1 className="hero-h1 mb-6 md:mb-10">
            Frontend <span className="text-gradient-glow">Developer</span>
          </h1>

          <div className="text-xl md:text-4xl font-bold mb-8 md:mb-12 min-h-[3rem] md:min-h-[4rem] flex flex-wrap justify-center lg:justify-start items-center gap-x-2">
            <span className="text-slate-400 whitespace-nowrap">I build</span>
            <span className="text-white bg-white/5 px-4 py-1.5 rounded-xl border border-white/10 shadow-premium inline-block">
              <Typewriter
                words={['Modern UI', 'Animated UX', 'Scalable Apps']}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </div>

          <p className="text-slate-400 text-lg md:text-xl mb-10 md:mb-16 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Crafting visually stunning and highly interactive web experiences
            with a focus on performance and <span className="text-white font-semibold">premium aesthetics</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center lg:justify-start">
            <button 
              onClick={() => {
                const el = document.getElementById('projects')
                if (el) el.scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn-primary group"
            >
              <span>EXPLORE PROJECTS</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <a 
              href="https://t.me/huot_sambath"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              LET'S TALK
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-12 md:mt-20 flex justify-center lg:justify-start gap-5">
            {[
              { Icon: Linkedin, href: 'https://www.linkedin.com/in/huot-sambath-171a6940b?utm_source=share_via&utm_content=profile&utm_medium=member_ios' },
              { Icon: Send, href: 'https://t.me/huot_sambath' },
            ].map(({ Icon, href }, idx) => (
              <motion.a
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -8, scale: 1.1 }}
                className="p-4 bg-white/5 rounded-2xl border border-white/10 text-slate-400 hover:text-primary-light hover:border-primary/30 transition-all shadow-premium"
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Right Content - Visual */}
      <div className="w-full lg:flex-1 relative max-w-[320px] md:max-w-xl mx-auto lg:max-w-none order-1 lg:order-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative group"
        >
          {/* Decorative Orbs */}
          <div className="absolute -top-10 -right-10 w-32 md:w-64 h-32 md:h-64 bg-primary/20 rounded-full blur-[80px] md:blur-[120px] animate-pulse" />
          <div className="absolute -bottom-10 -left-10 w-32 md:w-64 h-32 md:h-64 bg-accent/20 rounded-full blur-[80px] md:blur-[120px] animate-pulse delay-700" />

          <div className="relative z-10 w-full aspect-square md:aspect-[4/5] lg:aspect-square overflow-hidden rounded-[2.5rem] md:rounded-[4rem] shadow-premium border border-white/10 bg-dark-card">
            <motion.img
              src="/photo_2026-04-29_21-03-51.jpg"
              alt="Sam Bath - Frontend Developer"
              initial={{ scale: 1.1 }}
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              whileHover={{ scale: 1.05 }}
              className="w-full h-full object-cover transition-transform duration-700"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Floating Badge */}
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-6 -right-4 md:bottom-12 md:-right-8 z-20 bg-dark-card backdrop-blur-2xl border border-white/10 p-5 md:p-8 rounded-[2rem] shadow-premium-hover scale-90 md:scale-100"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary animate-spinSlow">
                <Sparkles size={24} className="md:w-8 md:h-8" />
              </div>
              <div>
                <p className="text-[10px] md:text-sm text-slate-400 font-black tracking-widest uppercase mb-1">Experience</p>
                <p className="text-xl md:text-3xl font-black text-white">2+ YEARS</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
