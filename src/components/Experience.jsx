import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, Briefcase } from 'lucide-react'

const experiences = [
  {
    role: 'Frontend Developer',
    company: 'TSD Solution Development',
    period: '2026 - Present',
    description: 'Assisted in building responsive web components and optimizing site performance using modern JavaScript frameworks.',
    type: 'work',
    skills: ['JavaScript', 'HTML/CSS', 'Responsive Design']
  },
  {
    role: 'UX/UI Designer & Developer',
    company: 'Creative Studio',
    period: '2025 - 2026',
    description: 'Designed and implemented intuitive user interfaces for diverse clients, bridging the gap between design vision and technical execution.',
    type: 'work',
    skills: ['Framer Motion', 'Adobe Suite', 'Tailwind']
  },
  {
    role: 'Senior Frontend Developer',
    company: 'TechFlow Systems',
    period: '2024 - Present',
    description: 'Leading the development of high-performance React applications, optimizing user flows, and mentoring junior developers on modern frontend practices.',
    type: 'work',
    skills: ['React', 'Next.js', 'System Architecture']
  },
  {
    role: 'Computer Science',
    company: 'University of Phnom Penh',
    period: '2024 - Present',
    description: 'Focused on software engineering, data structures, and human-computer interaction.',
    type: 'education',
    skills: ['Computer Science', 'Data Structures', 'Algorithms']
  }
]

const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-32 relative overflow-hidden px-6">
      <div className="text-center mb-16 md:mb-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-kicker"
        >
          My Journey
        </motion.h2>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Professional <span className="text-gradient">Milestones</span>
        </motion.h1>
      </div>

      <div className="grid grid-cols-1 gap-6 max-w-7xl mx-auto px-0 md:px-6 lg:pl-12 lg:border-l-2 lg:border-white/5 lg:space-y-8">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-full w-full"
          >
            {/* Timeline Connector Dot - Hidden on Mobile Grid */}
            <div className="hidden lg:block absolute -left-[41px] md:-left-[57px] top-8 w-5 h-5 md:w-7 md:h-7 rounded-full bg-dark border-4 border-primary shadow-glow-primary z-10" />

            <div className="glass-card group p-6 md:p-12 hover:border-primary/20 transition-all h-full flex flex-col">
              <div className="flex flex-col gap-4 mb-8">
                <div>
                  <h3 className="text-xl md:text-3xl font-black text-white group-hover:text-primary-light transition-colors tracking-tight leading-tight">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-3 mt-2">
                    <Briefcase size={16} className="text-primary-light md:w-5 md:h-5" />
                    <p className="text-primary-light font-black text-sm md:text-lg uppercase tracking-wider">{exp.company}</p>
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-2xl text-[10px] md:text-sm font-black text-slate-400 uppercase tracking-widest w-fit">
                  <Calendar size={14} className="md:w-4 md:h-4" />
                  {exp.period}
                </div>
              </div>

              <p className="text-slate-400 mb-8 leading-relaxed text-base md:text-xl flex-1">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto mb-8">
                {exp.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="px-3 py-1 bg-white/5 border border-white/10 rounded-xl text-[9px] md:text-xs font-black text-slate-400 uppercase tracking-widest">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-6 border-t border-white/5">
                <div className="w-full py-3 rounded-2xl border border-white/10 bg-white/5 text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-[0.2em] flex items-center justify-center gap-2 group-hover:bg-white/10 transition-all">
                  <span>VIEW DETAILS</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Experience
