import React from 'react'
import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'

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
  return (
    <section id="testimonials" className="py-20 md:py-32 relative overflow-hidden px-4 md:px-6">
      <div className="text-center mb-16 md:mb-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-kicker"
        >
          Success Stories
        </motion.h2>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Client <span className="text-gradient">Testimonials</span>
        </motion.h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-0 md:px-6">
        {testimonials.map((testimonial, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-full w-full"
          >
            <div className={`glass-card group flex flex-col cursor-pointer transition-all duration-700 h-full p-6 md:p-12 hover:border-primary/20`}>
              <div className="absolute top-4 right-4 text-primary/10 group-hover:text-primary/20 transition-colors">
                <Quote size={40} className="md:w-20 md:h-20" />
              </div>

              <div className="relative z-10 flex flex-col items-center text-center h-full">
                <div className="text-4xl md:text-7xl mb-4 md:mb-8 filter drop-shadow-premium group-hover:scale-110 transition-transform duration-500">{testimonial.avatar}</div>

                <div className="flex justify-center gap-1 mb-4 md:mb-6 text-secondary">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={12} className="md:w-5 md:h-5" fill="currentColor" />
                  ))}
                </div>

                <p className="text-slate-400 italic mb-8 md:mb-10 text-sm md:text-2xl leading-relaxed font-medium flex-1">
                  "{testimonial.content}"
                </p>

                <div className="mt-auto pt-6 border-t border-white/5 w-full">
                  <h4 className="text-base md:text-3xl font-black text-white tracking-tight">{testimonial.name}</h4>
                  <p className="text-primary-light font-black text-[10px] md:text-lg uppercase tracking-widest mt-1">{testimonial.role}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
