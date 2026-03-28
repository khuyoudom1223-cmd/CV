import React from 'react'
import { motion } from 'framer-motion'
import { Code, Database, Terminal, Cpu, Palette, Globe, Layers, Coffee } from 'lucide-react'

const skillCategories = [
  {
    title: 'Frontend',
    icon: Palette,
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
    icon: Database,
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
    icon: Terminal,
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
  return (
    <section id="skills" className="py-8 md:py-24 relative overflow-hidden">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-primary font-bold tracking-widest uppercase text-sm mb-2"
        >
          My Tech Stack
        </motion.h2>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black mb-6"
        >
          Expertise & <span className="text-gradient">Tools</span>
        </motion.h1>
      </div>

      <div className="grid grid-cols-3 gap-2 md:gap-8">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="glass-card group p-2 md:p-8"
          >
            <div className="flex flex-col md:flex-row items-center md:items-center gap-2 md:gap-4 mb-4 md:mb-8">
              <div className="p-1.5 md:p-3 bg-primary/10 rounded-lg md:rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <category.icon size={14} className="md:w-6 md:h-6" />
              </div>
              <h3 className="text-[10px] md:text-2xl font-bold text-center md:text-left leading-none">{category.title}</h3>
            </div>

            <div className="space-y-3 md:space-y-6">
              {category.skills.map((skill, sIdx) => (
                <div key={sIdx} className="space-y-1 md:space-y-2">
                  <div className="flex justify-between text-[6px] md:text-sm">
                    <span className="font-medium text-gray-300 truncate max-w-[40px] md:max-w-none">{skill.name}</span>
                    <span className="text-primary hidden md:inline">{skill.level}%</span>
                  </div>
                  <div className="h-1 md:h-2 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + idx * 0.1 }}
                      className="h-full bg-gradient-to-r from-primary to-secondary"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Decorative background blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] rounded-full z-[-1]" />
    </section>
  )
}

export default Skills
