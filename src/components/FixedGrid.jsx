import React from 'react'
import { motion } from 'framer-motion'
import { Box, Layers, Zap, Target } from 'lucide-react'

const fixedItems = [
  { label: 'Speed', icon: Zap, color: 'text-yellow-400' },
  { label: 'Design', icon: Layers, color: 'text-purple-400' },
  { label: 'Quality', icon: Target, color: 'text-emerald-400' },
  { label: 'Scope', icon: Box, color: 'text-blue-400' }
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
          <p className="text-gray-400 text-sm md:text-base">
            Identical column structure across all devices - No stacking, No scrolling.
          </p>
        </div>

        {/* Fixed Grid Container: 4 columns on ALL screen sizes */}
        <div className="grid grid-cols-4 gap-2 md:gap-6 lg:gap-8 w-full border border-white/5 p-4 md:p-8 rounded-[2rem] bg-white/5 backdrop-blur-md">
          {fixedItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center justify-center p-2 md:p-6 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors group aspect-square md:aspect-auto"
            >
              <div className={`mb-2 md:mb-4 p-2 md:p-4 bg-white/5 rounded-xl group-hover:scale-110 transition-transform ${item.color}`}>
                <item.icon className="w-5 h-5 md:w-8 md:h-8 lg:w-10 lg:h-10" />
              </div>
              <span className="text-[10px] md:text-sm lg:text-base font-bold text-white uppercase tracking-tighter md:tracking-widest">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-6 md:mt-12 grid grid-cols-3 gap-2 md:gap-6 text-center text-[6px] md:text-xs text-gray-500 uppercase tracking-widest leading-tight">
          <div className="p-2 md:p-4 glass rounded-lg md:rounded-xl flex items-center justify-center">100% Widths</div>
          <div className="p-2 md:p-4 glass rounded-lg md:rounded-xl flex items-center justify-center">No Stacking</div>
          <div className="p-2 md:p-4 glass rounded-lg md:rounded-xl flex items-center justify-center">Scalable Elements</div>
        </div>
      </div>
    </section>
  )
}

export default FixedGrid
