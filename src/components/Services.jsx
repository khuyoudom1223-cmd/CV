import React from 'react'
import { motion } from 'framer-motion'
import { Layout, Smartphone, Globe, Code2, Zap, ShieldCheck } from 'lucide-react'

const services = [
  {
    title: 'Web Development',
    description: 'Building high-performance, responsive websites using React, Next.js, and modern CSS frameworks.',
    icon: '/download.jpeg',
    color: 'text-primary'
  },
  {
    title: 'Mobile App Design',
    description: 'Creating stunning and intuitive mobile interfaces with a focus on user experience and gesture-based navigation.',
    icon: '/Top-11-sources-for-stunning-mobile-app-design-ideas.jpg',
    color: 'text-secondary'
  },
  {
    title: 'UI/UX Design',
    description: 'Designing modern, futuristic interfaces with a deep understanding of user psychology and conversion paths.',
    icon: '/gradient-style-ui-ux-background_52683-69621.avif',
    color: 'text-accent'
  },
  {
    title: 'Performance Optimization',
    description: 'Accelerating existing applications, optimizing assets, and improving core web vitals for a better user experience.',
    icon: '/images.jpeg',
    color: 'text-yellow-400'
  },
  {
    title: 'Technical Consulting',
    description: 'Providing expert advice on architecture, tech stack selection, and scalability for your next big project.',
    icon: '/person-working-html-computer_23-2150038853.avif',
    color: 'text-purple-400'
  },
  {
    title: 'Maintenance & Support',
    description: 'Ensuring your digital products stay up-to-date, secure, and running smoothly long after launch.',
    icon: '/images (1).jpeg',
    color: 'text-emerald-400'
  }
]

const Services = () => {
  const [expandedIdx, setExpandedIdx] = React.useState(null)

  return (
    <section id="services" className="py-20 md:py-32 relative overflow-hidden px-6">
      <div className="text-center mb-16 md:mb-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-kicker"
        >
          My Expert Offerings
        </motion.h2>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Services <span className="text-gradient">I Provide</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-copy mx-auto"
        >
          Delivering high-impact digital solutions through technical excellence 
          and human-centric design.
        </motion.p>
      </div>

      <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3 snap-x snap-mandatory no-scrollbar gap-4 md:gap-8 lg:gap-12 max-w-7xl mx-auto pb-8 md:pb-0">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            onClick={() => setExpandedIdx(expandedIdx === idx ? null : idx)}
            className={`glass-card group flex flex-col h-full overflow-hidden p-0 cursor-pointer transition-all duration-700 snap-center min-w-[280px] w-[85%] md:w-full shrink-0 ${expandedIdx === idx ? 'border-primary/40 ring-2 ring-primary/5' : 'border-white/5 hover:border-white/10'}`}
          >
            {/* Image Header */}
            <div className="relative h-48 md:h-64 overflow-hidden">
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
              <img 
                src={service.icon} 
                alt={service.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-transparent to-transparent z-10" />
            </div>

            <div className="p-6 md:p-10 flex-1 flex flex-col">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-white group-hover:text-primary-light transition-colors tracking-tight mb-4 md:mb-6 leading-tight">
                {service.title}
              </h3>

              <motion.div
                initial={false}
                animate={{
                  height: expandedIdx === idx ? 'auto' : 0,
                  opacity: expandedIdx === idx ? 1 : 0
                }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <p className="text-slate-400 text-sm md:text-lg mb-6 md:mb-8 leading-relaxed">
                  {service.description}
                </p>

                <div className="pt-4 md:pt-6 border-t border-white/10 w-full mb-6">
                  <span className="text-[10px] md:text-xs font-black text-primary-light uppercase tracking-[0.2em] flex items-center gap-2 group/btn">
                    <span>EXPLORE</span>
                    <span className="transform group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                </div>
              </motion.div>

              {/* Status Hint / Button Style */}
              <div className="mt-auto pt-6 border-t border-white/5 flex justify-center">
                <div className={`w-full py-3 rounded-2xl border text-[10px] md:text-xs font-black uppercase tracking-[0.2em] transition-all duration-500 flex items-center justify-center gap-2 ${expandedIdx === idx ? 'bg-primary border-primary-light text-white shadow-glow-primary' : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10'}`}>
                  <span>{expandedIdx === idx ? 'VIEW LESS' : 'VIEW DETAILS'}</span>
                  {expandedIdx !== idx && <div className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-white/20`} />}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Services
