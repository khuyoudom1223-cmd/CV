import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, Briefcase, GraduationCap, Star } from 'lucide-react'

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
    <section id="experience" className="py-12 md:py-24 relative">
      <div className="text-center mb-12 md:mb-16 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-primary font-bold tracking-widest uppercase text-xs md:text-sm mb-2"
        >
          My Journey
        </motion.h2>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-title mb-2"
        >
          Work <span className="text-gradient">Experience</span>
        </motion.h1>
      </div>

      <div className="relative max-w-4xl mx-auto pl-6 md:pl-8 border-l border-white/5 space-y-6 md:space-y-12">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="relative"
          >
            {/* Timeline Connector Dot */}
            <div className="absolute -left-[29px] md:-left-[45px] top-6 w-3 h-3 md:w-6 md:h-6 rounded-full bg-[#050914] border-2 md:border-4 border-primary shadow-[0_0_12px_rgba(37,99,235,0.4)] z-10" />

            <div className="glass-card group hover:border-white/10 transition-all duration-500 p-5 md:p-8">
              <div className="flex flex-row items-center justify-between gap-2 md:gap-4 mb-3 md:mb-4">
                <div className="flex-1">
                  <h3 className="text-base md:text-lg font-bold text-white group-hover:text-primary transition-colors leading-tight">{exp.role}</h3>
                  <p className="text-secondary font-bold text-sm md:text-base leading-tight mt-1">{exp.company}</p>
                </div>
                <div className="flex items-center gap-1.5 md:gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-surface/50 border border-white/5 rounded-full text-xs md:text-xs font-bold text-slate-400 whitespace-nowrap">
                  <Calendar size={14} className="md:w-4 md:h-4" />
                  {exp.period}
                </div>
              </div>

              <p className="text-slate-400 mb-6 md:mb-6 leading-relaxed text-base md:text-base">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-1 md:gap-2">
                {exp.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="px-3 py-1.5 md:px-3 md:py-1.5 bg-white/5 border border-white/5 rounded-md text-xs md:text-xs text-slate-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Experience
