import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView, useSpring, useTransform } from 'framer-motion'
import { Trophy, Code2, Briefcase, GraduationCap } from 'lucide-react'

const Counter = ({ value, duration = 2 }) => {
  const [count, setCount] = useState(0)
  const nodeRef = useRef(null)
  const isInView = useInView(nodeRef, { once: true })
  
  const springValue = useSpring(0, {
    stiffness: 100,
    damping: 30,
    duration: duration * 1000
  })
  
  const displayValue = useTransform(springValue, (latest) => Math.floor(latest))
  
  useEffect(() => {
    if (isInView) {
      springValue.set(value)
    }
  }, [isInView, value, springValue])
  
  useEffect(() => {
    return displayValue.onChange((latest) => setCount(latest))
  }, [displayValue])
  
  return <span ref={nodeRef}>{count}</span>
}

const stats = [
  { 
    label: 'Total Projects', 
    value: 50, 
    suffix: '+', 
    icon: Code2, 
    color: 'from-primary/20 to-primary/5' 
  },
  { 
    label: 'Certificates', 
    value: 12, 
    suffix: '', 
    icon: Trophy, 
    color: 'from-accent/20 to-accent/5' 
  },
  { 
    label: 'Years of Experience', 
    value: 5, 
    suffix: '+', 
    icon: Briefcase, 
    color: 'from-secondary/20 to-secondary/5' 
  },
  { 
    label: 'Satisfied Clients', 
    value: 30, 
    suffix: '+', 
    icon: GraduationCap, 
    color: 'from-purple-500/20 to-purple-500/5' 
  },
]

const Stats = () => {
  return (
    <section id="stats" className="py-8 md:py-24">
      <div className="grid grid-cols-4 gap-2 md:gap-8">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -10 }}
            className={`glass-card group relative overflow-hidden flex flex-col items-center text-center p-2 md:p-8`}
          >
            {/* Background Glow */}
            <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            
            <div className={`p-1.5 md:p-4 rounded-lg md:rounded-2xl mb-1.5 md:mb-4 bg-white/5 border border-white/10 text-primary group-hover:text-white transition-colors duration-500 relative z-10`}>
              <stat.icon size={16} className="md:w-8 md:h-8" />
            </div>
            
            <h3 className="text-xs xs:text-sm md:text-4xl font-black mb-0.5 md:mb-2 relative z-10 leading-tight">
              <Counter value={stat.value} />{stat.suffix}
            </h3>
            
            <p className="text-gray-400 font-medium relative z-10 uppercase tracking-tighter md:tracking-wider text-[6px] md:text-xs text-center border-t border-white/5 pt-1 mt-1 md:border-t-0 md:pt-0 md:mt-0">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Stats
