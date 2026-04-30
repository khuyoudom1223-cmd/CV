import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO at TechNova',
    content: 'The attention to detail and creative animations brought our vision to life. A truly exceptional developer who understands modern UI/UX.',
    avatar: '👩‍💼',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'Product Manager',
    content: 'Incredible performance and clean code. The glassmorphism design is stunning, and the animations are buttery smooth.',
    avatar: '👨‍💻',
    rating: 5
  },
  {
    name: 'Emma Williams',
    role: 'Founder of GreenStep',
    content: 'Professional, responsive, and highly skilled. The interactive elements truly engage our users and set us apart from competitors.',
    avatar: '👩‍🎨',
    rating: 5
  }
]

const Testimonials = () => {
  const [index, setIndex] = useState(0)

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length)
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section id="testimonials" className="py-12 md:py-24 relative">
      <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="section-kicker mb-3"
        >
          What Clients Say
        </motion.h2>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title mb-3"
        >
          Client <span className="text-gradient">Testimonials</span>
        </motion.h1>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 md:px-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="glass-card text-center py-6 px-4 md:py-16 md:px-24 relative overflow-hidden"
          >
            <div className="absolute top-2 left-2 md:top-8 md:left-8 text-primary/10">
              <Quote size={32} className="md:w-16 md:h-16" />
            </div>

            <div className="text-3xl md:text-6xl mb-3 md:mb-8">{testimonials[index].avatar}</div>

            <p className="text-slate-300 italic mb-4 md:mb-8 line-clamp-3 md:line-clamp-none text-base md:text-lg leading-relaxed font-medium">
              "{testimonials[index].content}"
            </p>

            <div className="flex justify-center gap-0.5 md:gap-1 mb-4 md:mb-6 text-accent">
              {[...Array(testimonials[index].rating)].map((_, i) => (
                <Star key={i} size={14} className="md:w-5 md:h-5" fill="currentColor" />
              ))}
            </div>

            <h4 className="text-base md:text-lg font-bold text-white">{testimonials[index].name}</h4>
            <p className="text-primary font-semibold text-sm md:text-base leading-tight mt-1">{testimonials[index].role}</p>
          </motion.div>
        </AnimatePresence>

        {/* Controls - smaller for mobile */}
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 p-2 md:p-4 glass rounded-full hover:bg-white/10 transition-colors z-20"
        >
          <ChevronLeft size={16} className="md:w-6 md:h-6" />
        </button>
        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 p-2 md:p-4 glass rounded-full hover:bg-white/10 transition-colors z-20"
        >
          <ChevronRight size={16} className="md:w-6 md:h-6" />
        </button>

        {/* Indicators */}
        <div className="flex justify-center gap-1 md:gap-2 mt-4 md:mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1 md:h-2 rounded-full transition-all duration-300 ${i === index ? 'w-4 md:w-8 bg-primary' : 'w-1 md:w-2 bg-white/20 hover:bg-white/40'
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
