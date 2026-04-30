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
    <section id="skills" className="py-12 md:py-24 relative overflow-hidden">
      <div className="text-center mb-10 md:mb-20 max-w-3xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="section-kicker mb-3"
        >
          My Tech Stack
        </motion.h2>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title mb-4"
        >
          Expertise & <span className="text-gradient">Tools</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-copy text-base md:text-lg"
        >
          A focused stack built for polished UI systems, responsive layouts, and smooth motion.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 container mx-auto px-6">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            onClick={() => setExpandedIdx(expandedIdx === idx ? null : idx)}
            className={`glass-card group flex flex-col h-fit overflow-hidden p-0 cursor-pointer border transition-all duration-500 ${
              expandedIdx === idx 
                ? 'border-primary/50 shadow-[0_0_40px_rgba(139,92,246,0.15)] bg-surface/80' 
                : 'border-white/5 hover:border-white/10'
            }`}
          >
            {/* Header Image */}
            <div className="relative h-44 md:h-52 overflow-hidden">
              <div className={`absolute inset-0 bg-primary/20 transition-opacity duration-500 ${expandedIdx === idx ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
              <img 
                src={category.icon} 
                alt={category.title} 
                className={`w-full h-full object-cover transition-transform duration-700 ${expandedIdx === idx ? 'scale-110 blur-sm' : 'group-hover:scale-110'}`} 
              />
              
              {/* Overlay Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-gradient-to-t from-[#050914] via-[#050914]/40 to-transparent">
                <motion.div
                  animate={{ y: expandedIdx === idx ? -10 : 0 }}
                  className="text-center"
                >
                  <h3 className="card-title text-xl md:text-2xl font-black mb-2">{category.title}</h3>
                  <div className="flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">
                    <Sparkles size={12} className="text-primary" />
                    <span>{category.skills.length} Techs</span>
                  </div>
                </motion.div>
              </div>

              {/* Expansion Hint */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                <motion.div
                  animate={{ 
                    y: [0, 5, 0],
                    rotate: expandedIdx === idx ? 180 : 0
                  }}
                  transition={{ 
                    y: { repeat: Infinity, duration: 2 },
                    rotate: { duration: 0.3 }
                  }}
                  className={`p-2 rounded-full border border-white/10 backdrop-blur-md ${expandedIdx === idx ? 'bg-primary text-white' : 'bg-white/5 text-slate-400'}`}
                >
                  <ChevronDown size={16} />
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
                  transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                  className="overflow-hidden"
                >
                  <div className="p-8 md:p-10 space-y-8 border-t border-white/5">
                    {category.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="space-y-3">
                        <div className="flex justify-between items-end">
                          <span className="font-black text-white text-xs md:text-sm uppercase tracking-widest">{skill.name}</span>
                          <span className="text-primary font-black text-sm">{skill.level}%</span>
                        </div>
                        <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden p-[2px] border border-white/5">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.2 + sIdx * 0.1 }}
                            className="h-full rounded-full bg-gradient-to-r from-primary via-accent to-secondary relative group/bar"
                          >
                            <div className="absolute inset-0 bg-white/20 animate-pulse" />
                          </motion.div>
                        </div>
                      </div>
                    ))}
                    
                    <div className="pt-4 text-center">
                      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                        Click again to close
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Collapsed Hint */}
            {!expandedIdx && (
              <div className="py-4 text-center bg-white/5">
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest group-hover:text-primary transition-colors">
                  Click to explore stack
                </span>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Decorative background blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] rounded-full z-[-1]" />
    </section>
  )
}

export default Skills
