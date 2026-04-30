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
    return displayValue.on("change", (latest) => setCount(latest))
  }, [displayValue])

  return <span ref={nodeRef}>{count}</span>
}

const stats = [
  {
    label: 'Total Projects',
    value: 10,
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
    value: 2,
    suffix: '+',
    icon: Briefcase,
    color: 'from-secondary/20 to-secondary/5'
  },
  {
    label: 'Satisfied Clients',
    value: 10,
    suffix: '+',
    icon: GraduationCap,
    color: 'from-purple-500/20 to-purple-500/5'
  },
]

const Stats = () => {
  return (
    <section id="stats" className="py-12 md:py-24 px-4">
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 md:gap-8">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -4, scale: 1.02 }}
            className={`glass-card group relative overflow-hidden flex flex-col items-center text-center p-6 md:p-8`}
          >
            {/* Background Glow */}
            <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

            <div className={`p-2.5 md:p-4 rounded-xl md:rounded-2xl mb-2 md:mb-4 bg-surface/50 border border-white/5 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-[0_4px_16px_rgba(0,0,0,0.2)] relative z-10`}>
              <stat.icon size={18} className="md:w-7 md:h-7" />
            </div>

            <h3 className="text-2xl md:text-4xl font-black mb-2 md:mb-2 relative z-10 leading-tight text-white group-hover:text-primary transition-colors">
              <Counter value={stat.value} />{stat.suffix}
            </h3>

            <p className="text-slate-300 font-bold relative z-10 uppercase tracking-widest text-xs md:text-xs text-center border-t border-white/5 pt-2 md:pt-4 mt-3 md:mt-4 w-full group-hover:border-primary/20 transition-colors">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Stats
