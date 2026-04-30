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
    <section id="services" className="py-12 md:py-24 relative overflow-hidden">
      <div className="text-center mb-8 md:mb-16 max-w-3xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-kicker mb-3"
        >
          My Expert Offerings
        </motion.h2>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-title mb-3"
        >
          Services <span className="text-gradient">I Provide</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="section-copy text-base md:text-lg"
        >
          Clean interfaces, consistent motion, and polished execution across web and mobile experiences.
        </motion.p>
      </div>

      <div className="grid grid-cols-2 xl:grid-cols-3 gap-3 md:gap-8">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            onClick={() => setExpandedIdx(expandedIdx === idx ? null : idx)}
            className={`glass-card group flex flex-col h-full overflow-hidden p-0 cursor-pointer transition-all duration-500 ${expandedIdx === idx ? 'ring-2 ring-primary/50' : ''}`}
          >
            {/* Full-width Image Header */}
            <div className="relative h-40 md:h-56 overflow-hidden">
              <div className={`absolute inset-0 bg-surface/50 transition-colors duration-500 group-hover:bg-primary/10 ${typeof service.icon !== 'string' ? service.color : ''}`} />
              {typeof service.icon === 'string' ? (
                <img src={service.icon} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <service.icon size={48} className="md:w-16 md:h-16 group-hover:scale-110 transition-transform duration-500" />
                </div>
              )}
              {/* Subtle Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050914] to-transparent opacity-60" />
            </div>

            <div className="p-5 md:p-8 flex-1 flex flex-col">
              <h3 className="text-lg md:text-2xl font-black text-slate-50 mb-2 group-hover:text-primary transition-colors tracking-tight">
                {service.title}
              </h3>

              <motion.div
                initial={false}
                animate={{
                  height: expandedIdx === idx ? 'auto' : 0,
                  opacity: expandedIdx === idx ? 1 : 0
                }}
                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                className="overflow-hidden"
              >
                <p className="card-copy text-sm md:text-base text-slate-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Navigation Link */}
                <div className="pt-4 border-t border-white/5 w-full">
                  <span className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-[0.2em] group-hover:text-primary transition-colors cursor-pointer flex items-center gap-2 group/btn">
                    <span>Explore Service</span>
                    <span className="transform group-hover/btn:translate-x-1.5 transition-transform duration-300">→</span>
                  </span>
                </div>
              </motion.div>

              {/* Status Hint */}
              <div className="mt-auto pt-2">
                <span className="text-[9px] font-bold text-slate-600 uppercase tracking-widest">
                  {expandedIdx === idx ? 'Click to close' : 'Click to view'}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Services
