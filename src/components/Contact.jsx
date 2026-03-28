import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Send, Phone, MapPin, CheckCircle } from 'lucide-react'

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
      
      // Reset form after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000)
    }, 1500)
  }

  return (
    <section id="contact" className="py-8 md:py-24 relative">
      <div className="flex flex-row gap-4 md:gap-16 items-start">
        {/* Left Side: Info */}
        <div className="flex-1">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-widest uppercase text-[10px] md:text-sm mb-1 md:mb-2"
          >
            Connect
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg xs:text-2xl md:text-5xl font-black mb-4 md:mb-8 leading-tight"
          >
            Let's <span className="text-gradient">Talk</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-[8px] xs:text-sm mb-6 md:mb-12 line-clamp-2 md:line-clamp-none"
          >
            Have a project idea? Let's bridge the gap between imagination and implementation.
          </motion.p>

          <div className="space-y-4 md:space-y-6">
            {[
              { icon: Mail, label: 'Email', value: 'khuyoudom2024@gmail.com', color: 'text-primary' },
              { icon: Phone, label: 'Phone', value: '(096) 777 888 53', color: 'text-secondary' },
            ].map((info, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex items-center gap-2 md:gap-4 group cursor-pointer"
              >
                <div className="p-1.5 md:p-3 glass rounded-lg md:rounded-xl group-hover:bg-white/10 transition-colors">
                  <info.icon size={14} className={`${info.color} md:w-5 md:h-5`} />
                </div>
                <div>
                  <p className="hidden md:block text-[10px] text-gray-500 uppercase tracking-widest leading-none mb-1">{info.label}</p>
                  <p className="text-white font-bold text-[8px] xs:text-[10px] md:text-sm leading-none">{info.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side: Form */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex-1 glass-card p-4 md:p-12 relative overflow-hidden"
        >
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form 
                key="contact-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-3 md:space-y-6" 
                onSubmit={handleSubmit}
              >
                <div className="space-y-1">
                  <label className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-gray-400">Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-lg md:rounded-xl px-2 py-1.5 md:px-4 md:py-3 text-[10px] md:text-sm outline-none focus:border-primary/50"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-gray-400">Email</label>
                  <input 
                    required
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-lg md:rounded-xl px-2 py-1.5 md:px-4 md:py-3 text-[10px] md:text-sm outline-none focus:border-primary/50"
                  />
                </div>
                
                <div className="space-y-1">
                  <label className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-gray-400">Message</label>
                  <textarea 
                    required
                    rows="2"
                    placeholder="Tell me more..."
                    className="w-full bg-white/5 border border-white/10 rounded-lg md:rounded-xl px-2 py-1.5 md:px-4 md:py-3 text-[10px] md:text-sm outline-none focus:border-primary/50 resize-none"
                  ></textarea>
                </div>

                <button 
                  disabled={isLoading}
                  className="w-full py-2 md:py-4 bg-primary rounded-lg md:rounded-xl text-[10px] md:text-sm font-bold flex items-center justify-center gap-2 group"
                >
                  <span className={isLoading ? 'opacity-0' : 'flex items-center justify-center gap-2'}>
                    <span className="hidden xs:inline">Send</span>
                    <Send size={14} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  
                  {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    </div>
                  )}
                </button>
              </motion.form>
            ) : (
              <motion.div 
                key="success-message"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-4 md:py-12"
              >
                <div className="w-10 h-10 md:w-20 md:h-20 bg-accent/20 rounded-full flex items-center justify-center text-accent mb-3 md:mb-6 animate-glow">
                  <CheckCircle size={20} className="md:w-10 md:h-10" />
                </div>
                <h3 className="text-sm md:text-2xl font-bold mb-1">Sent!</h3>
                <p className="text-[8px] md:text-sm text-gray-400">
                  I'll get back to you shortly.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 text-primary font-bold text-[8px] md:text-sm hover:underline"
                >
                  Again?
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
