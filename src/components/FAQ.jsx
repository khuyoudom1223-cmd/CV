import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HelpCircle, ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'How long does a typical project take?',
    answer: 'A standard portfolio website takes 2-3 weeks, while more complex web applications with backend integration can mean 6-8 weeks depending on the scope.'
  },
  {
    question: 'Do you offer custom design services?',
    answer: 'Yes! Every project I build starts with a unique design phase tailored to your brand identity, ensuring a truly custom look that stands out.'
  },
  {
    question: 'What technologies do you follow?',
    answer: 'I specialize in the modern web ecosystem, primarily focusing on React, Next.js, Tailwind CSS, and Framer Motion for high-impact frontend experiences.'
  },
  {
    question: 'Do you provide maintenance after launch?',
    answer: 'Absolutely. I offer various support packages to ensure your website remains secure, fast, and up-to-date with the latest web standards.'
  },
  {
    question: 'Can you work with existing codebases?',
    answer: 'I can certainly help optimize or add features to your current project. I perform a quick audit first to understand the architecture and suggest the best path forward.'
  }
]

const FAQItem = ({ faq, isOpen, toggle }) => {
  return (
    <motion.div 
      layout
      className={`glass-card group flex flex-col cursor-pointer transition-all duration-700 h-full p-6 md:p-10 w-full ${isOpen ? 'border-primary/40 ring-2 ring-primary/5 bg-dark-card' : 'border-white/5 hover:border-white/10'}`}
      onClick={toggle}
    >
      <div className="flex flex-col gap-6">
        <div className={`p-4 w-fit rounded-2xl transition-all duration-500 shadow-premium ${isOpen ? 'bg-primary border-primary-light text-white' : 'bg-white/5 text-slate-400 border border-white/10'}`}>
          <ChevronDown size={20} className={`transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} />
        </div>
        <span className={`text-sm md:text-2xl font-black leading-tight transition-all duration-500 ${isOpen ? 'text-primary-light' : 'text-white'}`}>
          {faq.question}
        </span>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pt-6 md:pt-8 text-slate-400 text-xs md:text-xl leading-relaxed font-medium border-t border-white/5 mt-6">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {!isOpen && (
        <div className="mt-auto pt-6 border-t border-white/5 text-[10px] text-slate-600 font-black tracking-widest uppercase">
          TAP TO REVEAL
        </div>
      )}
    </motion.div>
  )
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="py-20 md:py-32 relative max-w-7xl mx-auto px-4 md:px-6 overflow-hidden">
      <div className="text-center mb-16 md:mb-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-kicker"
        >
          Common Queries
        </motion.h2>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Frequently Asked <span className="text-gradient">Questions</span>
        </motion.h1>
      </div>

      <div className="grid grid-cols-1 gap-6 mb-16 px-0 md:px-6">
        {faqs.map((faq, idx) => (
          <FAQItem
            key={idx}
            faq={faq}
            isOpen={openIndex === idx}
            toggle={() => setOpenIndex(openIndex === idx ? -1 : idx)}
          />
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="text-center p-10 md:p-16 glass-card border-primary/20 bg-primary/5"
      >
        <div className="flex flex-col items-center gap-6">
          <div className="p-5 bg-primary/10 rounded-[2rem] text-primary shadow-glow-primary">
            <HelpCircle size={48} />
          </div>
          <h3 className="text-2xl md:text-3xl font-black text-white">Still have questions?</h3>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl">Can't find what you're looking for? Reach out and I'll get back to you soon.</p>
          <a href="#contact" className="btn-primary !px-10">
            CONTACT ME
          </a>
        </div>
      </motion.div>
    </section>
  )
}

export default FAQ
