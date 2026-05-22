import React from 'react'
import { motion } from 'framer-motion'
import { Layout, Smartphone, Globe, Code2, Zap, ShieldCheck } from 'lucide-react'

const services = [
  {
    title: 'Web Development',
    description: 'Building high-performance, responsive websites using React, Next.js, and modern CSS frameworks.',
    icon: Globe,
    color: 'text-primary'
  },
  {
    title: 'Mobile App Design',
    description: 'Creating stunning and intuitive mobile interfaces with a focus on user experience and gesture-based navigation.',
    icon: Smartphone,
    color: 'text-secondary'
  },
  {
    title: 'UI/UX Design',
    description: 'Designing modern, futuristic interfaces with a deep understanding of user psychology and conversion paths.',
    icon: Layout,
    color: 'text-accent'
  },
  {
    title: 'Performance Optimization',
    description: 'Accelerating existing applications, optimizing assets, and improving core web vitals for a better user experience.',
    icon: Zap,
    color: 'text-yellow-400'
  },
  {
    title: 'Technical Consulting',
    description: 'Providing expert advice on architecture, tech stack selection, and scalability for your next big project.',
    icon: Code2,
    color: 'text-purple-400'
  },
  {
    title: 'Maintenance & Support',
    description: 'Ensuring your digital products stay up-to-date, secure, and running smoothly long after launch.',
    icon: ShieldCheck,
    color: 'text-emerald-400'
  }
]

const Services = () => {
  return (
    <section id="services" className="py-8 md:py-24 relative">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-primary font-bold tracking-widest uppercase text-sm mb-2"
        >
          My Expert Offerings
        </motion.h2>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-black mb-6"
        >
          Services <span className="text-gradient">I Provide</span>
        </motion.h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto px-0 md:px-6">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -10 }}
            className="glass-card group text-center flex flex-col items-center p-6 md:p-8"
          >
            <div className={`p-4 bg-white/5 rounded-2xl mb-4 md:mb-6 group-hover:bg-white/10 transition-colors duration-500 ${service.color}`}>
              <service.icon size={28} className="md:w-8 md:h-8" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-3 leading-tight">{service.title}</h3>
            <p className="text-slate-400 leading-relaxed text-sm md:text-base">
              {service.description}
            </p>
            
            {/* Decoration */}
            <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-white/5 w-full">
              <span className="text-[10px] md:text-xs font-bold text-slate-500 dark:text-gray-500 uppercase tracking-widest group-hover:text-primary transition-colors cursor-pointer">
                Learn More →
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Services
