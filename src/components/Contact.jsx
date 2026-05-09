import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden px-6">
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full"
        >
          <h2 className="section-kicker">Get In Touch</h2>
          <h1 className="section-title">
            Let's <span className="text-gradient">Talk</span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="section-copy mx-auto mb-16"
          >
            Have a project idea or just want to say hi? My inbox is always open. 
            Let's create something extraordinary together.
          </motion.p>

          <div className="grid grid-cols-2 gap-4 md:gap-8 w-full max-w-2xl mx-auto mb-16">
            {[
              { icon: Mail, label: 'Email', value: 'khuyoudom2024@gmail.com', color: 'text-primary', href: 'mailto:khuyoudom2024@gmail.com' },
              { icon: Phone, label: 'Call', value: '(096) 77 888 52', color: 'text-secondary', href: 'tel:+855967788852' },
            ].map((info, i) => (
              <motion.a
                key={i}
                href={info.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="glass-card group flex flex-col items-center p-5 md:p-8 hover:border-primary/20 transition-all h-full"
              >
                <div className="p-3 md:p-5 bg-white/5 rounded-2xl md:rounded-[2rem] border border-white/5 group-hover:bg-white/10 transition-colors mb-4 md:mb-6">
                  <info.icon size={20} className={`${info.color} md:w-8 md:h-8`} />
                </div>
                <p className="text-[8px] md:text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-1 md:mb-2">{info.label}</p>
                <p className="text-white font-black text-[9px] md:text-xl tracking-tight text-center break-all">{info.value}</p>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <a 
              href="https://t.me/khuyoudom"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary !px-12 !py-6 text-xl font-black tracking-widest shadow-glow-primary"
            >
              SEND A MESSAGE
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Orbs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-secondary/10 rounded-full blur-[120px] -z-10" />
    </section>
  )
}

export default Contact
