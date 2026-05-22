import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Download, ExternalLink, User, Code, Palette } from 'lucide-react'

const About = () => {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col lg:flex-row items-center gap-12 md:gap-24"
      >
        {/* Profile Image with Glowing Border */}
        <div className="flex-1 relative group w-full max-w-md mx-auto lg:max-w-none">
          <div className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-[2.5rem] md:rounded-[4rem] blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700" />

          <div className="relative w-full aspect-square rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/10 bg-dark-card shadow-premium">
            {!imageLoaded && <div className="absolute inset-0 skeleton" />}
            <motion.img
              src="/IMG_5128.PNG"
              alt="Sam Bath"
              onLoad={() => setImageLoaded(true)}
              initial={{ scale: 1.1 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              whileHover={{ scale: 1.05 }}
              className={`w-full h-full object-cover transition-opacity duration-1000 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Bio Text in Glass Container */}
        <div className="flex-1 space-y-8 md:space-y-12">
          <div>
            <h2 className="section-kicker">Professional Journey</h2>
            <h1 className="about-h1 mb-6 md:mb-8">
              Designing <span className="text-gradient">Experiences</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl">
              With over <span className="text-white font-bold">2 years of expertise</span> in frontend development, 
              I specialize in crafting high-performance web applications that bridge technical 
              excellence with <span className="text-white font-bold">breathtaking design</span>.
            </p>
          </div>

          {/* Skill Features */}
          <div className="grid grid-cols-2 gap-3 md:gap-6">
            {[
              { icon: Code, title: 'Clean Code', desc: 'Maintainable systems' },
              { icon: Palette, title: 'Modern UI', desc: 'Engaging interfaces' }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-3 p-4 md:p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-primary/20 hover:bg-white/[0.08] transition-all group">
                <div className="p-3 md:p-4 bg-primary/10 rounded-2xl text-primary group-hover:scale-110 transition-transform">
                  <item.icon size={20} className="md:w-6 md:h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-xs md:text-lg mb-1">{item.title}</h3>
                  <p className="text-slate-500 text-[9px] md:text-sm leading-tight">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 pt-4">
            <a 
              href="/SambathCV.pdf" 
              download="SambathCV.pdf"
              className="btn-primary w-full sm:w-auto"
            >
              <Download size={20} />
              <span>DOWNLOAD CV</span>
            </a>
            <button 
              onClick={() => {
                const el = document.getElementById('projects')
                if (el) el.scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn-outline w-full sm:w-auto"
            >
              <ExternalLink size={20} />
              <span>VIEW PORTFOLIO</span>
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
