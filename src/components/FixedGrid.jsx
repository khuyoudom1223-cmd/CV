import React from 'react'
import { motion } from 'framer-motion'

const fixedItems = [
  { label: 'Speed', imgSrc: '/360_F_254140299_FLjwcdPkhMRElMZNsxwmzbX2zTgfr54x.jpg', color: 'text-yellow-400' },
  { label: 'Design', imgSrc: '/cartoon-graphic-design-landing-page_52683-70881.avif', color: 'text-purple-400' },
  { label: 'Quality', imgSrc: '/quality-improve-manager-businessman-coach-leadership-plan-to-55602145.webp', color: 'text-emerald-400' },
  { label: 'Scope', imgSrc: '/360_F_822779686_nI4astVestJUB5P4lgyKu9mPPcT8r8Vc.jpg', color: 'text-blue-400' }
]

const FixedGrid = () => {
  return (
    <section id="fixed-grid" className="py-8 md:py-24 px-4 md:px-12 lg:px-24">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black mb-4"
          >
            Fixed <span className="text-gradient">Proportional</span> Layout
          </motion.h1>
          <p className="text-slate-600 dark:text-gray-400 text-sm md:text-base">
            Identical column structure across all devices - No stacking, No scrolling.
          </p>
        </div>

        {/* Fixed Grid Container: 4 columns on ALL screen sizes */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 lg:gap-8 w-full border border-white/5 p-4 md:p-8 rounded-[2rem] bg-white/5 backdrop-blur-md">
          {fixedItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="flex flex-col items-center justify-center p-2 md:p-6 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors group aspect-square md:aspect-auto"
            >
              <div className={`mb-2 md:mb-4 p-2 md:p-4 bg-white/5 rounded-xl group-hover:scale-110 transition-transform ${item.color} flex items-center justify-center overflow-hidden`}>
                <img src={item.imgSrc} alt={item.label} className="w-12 h-12 md:w-16 md:h-16 lg:w-24 lg:h-24 object-cover rounded-lg" />
              </div>
              <span className="text-[10px] md:text-sm lg:text-base font-bold text-slate-900 dark:text-white uppercase tracking-tighter md:tracking-widest">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-6 md:mt-12 grid grid-cols-3 gap-2 md:gap-6 text-center text-[6px] md:text-xs text-slate-500 dark:text-gray-500 uppercase tracking-widest leading-tight">
          <div className="p-2 md:p-4 glass rounded-lg md:rounded-xl flex items-center justify-center">100% Widths</div>
          <div className="p-2 md:p-4 glass rounded-lg md:rounded-xl flex items-center justify-center">No Stacking</div>
          <div className="p-2 md:p-4 glass rounded-lg md:rounded-xl flex items-center justify-center">Scalable Elements</div>
        </div>
      </div>
    </section>
  )
}

export default FixedGrid
