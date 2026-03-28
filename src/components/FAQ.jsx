import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, HelpCircle } from 'lucide-react'

const faqs = [
  {
    question: 'How long does a typical project take?',
    answer: 'A standard portfolio website takes 2-3 weeks, while more complex web applications with backend integration pueden mean 6-8 weeks depending on the scope.'
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
    <div className="border-b border-white/5 last:border-none">
      <button 
        onClick={toggle}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-primary' : 'text-white group-hover:text-primary'}`}>
          {faq.question}
        </span>
        <div className={`p-2 rounded-lg transition-all duration-300 ${isOpen ? 'bg-primary text-white' : 'bg-white/5 text-gray-400 group-hover:bg-white/10'}`}>
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pb-6 text-gray-400 leading-relaxed">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="py-8 md:py-24 relative max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-secondary font-bold tracking-widest uppercase text-sm mb-2"
        >
          Common Questions
        </motion.h2>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black mb-6"
        >
          Frequently Asked <span className="text-gradient">Questions</span>
        </motion.h1>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card p-4 md:p-8"
      >
        {faqs.map((faq, idx) => (
          <FAQItem 
            key={idx} 
            faq={faq} 
            isOpen={openIndex === idx} 
            toggle={() => setOpenIndex(openIndex === idx ? -1 : idx)}
          />
        ))}
      </motion.div>

      <div className="mt-12 text-center p-8 glass rounded-2xl border border-primary/20">
        <div className="flex items-center justify-center gap-4 mb-4">
          <HelpCircle className="text-primary" size={32} />
          <h3 className="text-xl font-bold">Still have questions?</h3>
        </div>
        <p className="text-gray-400 mb-6">Can't find what you're looking for? Reach out and I'll get back to you.</p>
        <a href="#contact" className="btn-outline">
          Contact Me Directly
        </a>
      </div>
    </section>
  )
}

export default FAQ
