import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone } from 'lucide-react'

const Contact = () => {


  return (
    <section id="contact" className="py-12 md:py-24 relative">
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto px-4 py-8">
        <div className="w-full">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-widest uppercase text-xs md:text-sm mb-2 md:mb-3"
          >
            Connect
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-title mb-2"
          >
            Let's <span className="text-gradient">Talk</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="section-copy text-base md:text-lg"
          >
            Have a project idea? Let's bridge the gap between imagination and implementation.
          </motion.p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 w-full">
            {[
              { icon: Mail, label: 'Email', value: 'khuyoudom2024@gmail.com', color: 'text-primary' },
              { icon: Phone, label: 'Phone', value: '(096) 77 888 52', color: 'text-secondary' },
            ].map((info, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex items-center gap-2 md:gap-4 group cursor-pointer"
              >
                <div className="p-2.5 md:p-3 bg-surface/50 border border-white/5 rounded-xl md:rounded-2xl group-hover:bg-white/5 transition-colors shadow-[0_4px_16px_rgba(0,0,0,0.2)]">
                  <info.icon size={16} className={`${info.color} md:w-6 md:h-6`} />
                </div>
                <div className="text-left">
                  <p className="hidden md:block text-xs text-slate-500 uppercase tracking-widest leading-none mb-1">{info.label}</p>
                  <p className="text-white font-bold text-sm md:text-base leading-tight">{info.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>


      </div>
    </section>
  )
}

export default Contact
