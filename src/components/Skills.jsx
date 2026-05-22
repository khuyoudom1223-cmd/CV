import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Sparkles } from 'lucide-react'

const skillCategories = [
  {
    title: 'Frontend',
    icon: '/frontend.png',
    skills: [
      { name: 'React.js', level: 95 },
      { name: 'Next.js', level: 90 },
      { name: 'Tailwind CSS', level: 98 },
      { name: 'Framer Motion', level: 85 },
      { name: 'TypeScript', level: 88 }
    ]
  },
  {
    title: 'Backend',
    icon: '/backend-is.png',
    skills: [
      { name: 'Node.js', level: 82 },
      { name: 'PostgreSQL', level: 75 },
      { name: 'REST APIs', level: 90 },
      { name: 'GraphQL', level: 70 },
      { name: 'Firebase', level: 85 }
    ]
  },
  {
    title: 'Tools & DevOps',
    icon: '/DevOps-Tools-DevOps-Tutorial-Edureka-1.png',
    skills: [
      { name: 'Git / GitHub', level: 95 },
      { name: 'Docker', level: 65 },
      { name: 'Vite', level: 92 },
      { name: 'CI/CD Pipelines', level: 70 },
      { name: 'Cloud Hosting', level: 80 }
    ]
  }
]

const Skills = () => {
  const [expandedIdx, setExpandedIdx] = useState(null)

  return (
    <section id="skills" className="py-20 md:py-32 relative overflow-hidden px-4">
      <div className="text-center mb-16 md:mb-24 max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-kicker"
        >
          My Tech Stack
        </motion.h2>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Expertise & <span className="text-gradient">Tools</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-copy mx-auto"
        >
          A meticulously curated stack focused on building high-performance, 
          pixel-perfect, and highly interactive user interfaces.
        </motion.p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-12 max-w-7xl mx-auto">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            onClick={() => setExpandedIdx(expandedIdx === idx ? null : idx)}
            className={`glass-card group flex flex-col h-full overflow-hidden p-0 cursor-pointer transition-all duration-700 ${
              expandedIdx === idx 
                ? 'border-primary/40 ring-2 ring-primary/5' 
                : ''
            }`}
          >
            {/* Header Image Area */}
            <div className="relative h-64 md:h-80 overflow-hidden">
              <div className={`absolute inset-0 bg-primary/20 transition-opacity duration-700 z-10 ${expandedIdx === idx ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
              <img 
                src={category.icon} 
                alt={category.title} 
                className={`w-full h-full object-cover transition-transform duration-1000 ease-out z-0 ${expandedIdx === idx ? 'scale-110 blur-[1px]' : 'group-hover:scale-110'}`} 
              />
              
              {/* Overlay Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 md:p-8 bg-gradient-to-t from-dark/95 via-dark/40 to-transparent z-20">
                <motion.div
                  animate={{ y: expandedIdx === idx ? -10 : 0 }}
                  className="text-center flex flex-col items-center"
                >
                  <h3 className="text-lg md:text-3xl font-black mb-2 md:mb-4 text-white tracking-tight leading-tight uppercase">{category.title}</h3>
                  <div className="inline-flex items-center gap-1 md:gap-2 px-3 md:px-5 py-1 md:py-2 rounded-full bg-primary/20 backdrop-blur-xl border border-primary/30 text-[8px] md:text-xs uppercase tracking-[0.2em] font-black text-white shadow-glow-primary">
                    <span># {category.skills.length} TECH</span>
                  </div>
                  
                  {/* Chevron Button */}
                  <div className="mt-4 md:mt-8">
                    <motion.div
                      animate={{ 
                        y: [0, 5, 0],
                        rotate: expandedIdx === idx ? 180 : 0
                      }}
                      transition={{ 
                        y: { repeat: Infinity, duration: 2.5, ease: 'easeInOut' },
                        rotate: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
                      }}
                      className={`p-2.5 md:p-4 rounded-full border backdrop-blur-xl shadow-premium transition-colors duration-500 ${expandedIdx === idx ? 'bg-primary border-primary-light text-white' : 'bg-white/10 border-white/10 text-white'}`}
                    >
                      <ChevronDown size={16} className="md:w-6 md:h-6" />
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Expandable Content */}
            <AnimatePresence>
              {expandedIdx === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden bg-black/5 dark:bg-dark/40"
                >
                  <div className="p-6 md:p-12 space-y-8 md:space-y-12 border-t border-black/5 dark:border-white/10">
                    {category.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="space-y-3 md:space-y-4">
                        <div className="flex justify-between items-end">
                          <span className="font-black text-white text-xs md:text-base uppercase tracking-widest">{skill.name}</span>
                          <span className="text-primary-light font-black text-sm md:text-xl">{skill.level}%</span>
                        </div>
                        <div className="h-2.5 md:h-4 w-full bg-white/5 rounded-full overflow-hidden p-[2px] border border-white/5">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1.5, delay: 0.2 + sIdx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="h-full rounded-full bg-gradient-to-r from-primary-dark via-primary to-secondary relative"
                          >
                            <div className="absolute inset-0 bg-white/20 animate-pulse" />
                          </motion.div>
                        </div>
                      </div>
                    ))}
                    
                    <div className="pt-6 text-center border-t border-white/5">
                      <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">
                        COLLAPSE DETAILS
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* View All Footer */}
            <div className={`py-4 md:py-6 text-center transition-colors duration-500 mt-auto ${expandedIdx === idx ? 'bg-primary/10' : 'bg-black/5 dark:bg-black/40 border-t border-black/5 dark:border-white/5'}`}>
              <span className={`text-[10px] md:text-xs font-black uppercase tracking-[0.3em] transition-all duration-300 ${expandedIdx === idx ? 'text-primary' : 'text-slate-400 group-hover:text-white group-hover:tracking-[0.4em]'}`}>
                {expandedIdx === idx ? 'CLOSE' : 'VIEW ALL'}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Decorative background blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[150px] rounded-full z-[-1]" />
    </section>
  )
}

export default Skills
