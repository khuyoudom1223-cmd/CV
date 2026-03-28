import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, Briefcase, GraduationCap, Star } from 'lucide-react'

const experiences = [
  {
    role: 'Senior Frontend Developer',
    company: 'TechFlow Systems',
    period: '2022 - Present',
    description: 'Leading the development of high-performance React applications, optimizing user flows, and mentoring junior developers on modern frontend practices.',
    type: 'work',
    skills: ['React', 'Next.js', 'System Architecture']
  },
  {
    role: 'UX/UI Designer & Developer',
    company: 'Creative Studio',
    period: '2020 - 2022',
    description: 'Designed and implemented intuitive user interfaces for diverse clients, bridging the gap between design vision and technical execution.',
    type: 'work',
    skills: ['Framer Motion', 'Adobe Suite', 'Tailwind']
  },
  {
    role: 'Frontend Developer Intern',
    company: 'Innovate Hub',
    period: '2019 - 2020',
    description: 'Assisted in building responsive web components and optimizing site performance using modern JavaScript frameworks.',
    type: 'work',
    skills: ['JavaScript', 'HTML/CSS', 'Responsive Design']
  },
  {
    role: 'Computer Science Graduate',
    company: 'University of Technology',
    period: '2015 - 2019',
    description: 'Focused on software engineering, data structures, and human-computer interaction.',
    type: 'education',
    skills: ['Computer Science', 'Data Structures', 'Algorithms']
  }
]

const Experience = () => {
  return (
    <section id="experience" className="py-8 md:py-24 relative">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-primary font-bold tracking-widest uppercase text-sm mb-2"
        >
          My Journey
        </motion.h2>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-black mb-6"
        >
          Work <span className="text-gradient">Experience</span>
        </motion.h1>
      </div>

      <div className="relative max-w-4xl mx-auto pl-4 md:pl-8 border-l border-white/10 space-y-6 md:space-y-12">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            className="relative"
          >
            {/* Timeline Connector Dot */}
            <div className="absolute -left-[21px] md:-left-[45px] top-4 w-2.5 h-2.5 md:w-6 md:h-6 rounded-full bg-dark border-2 md:border-4 border-primary shadow-[0_0_10px_rgba(139,92,246,0.3)] z-10" />
            
            <div className="glass-card group hover:border-primary/30 transition-all duration-500 p-3 md:p-8">
              <div className="flex flex-row items-center justify-between gap-2 md:gap-4 mb-2 md:mb-4">
                <div className="flex-1">
                  <h3 className="text-[10px] md:text-xl font-bold text-white group-hover:text-primary transition-colors leading-tight">{exp.role}</h3>
                  <p className="text-secondary font-medium text-[8px] md:text-base leading-tight mt-0.5">{exp.company}</p>
                </div>
                <div className="flex items-center gap-1 md:gap-2 px-1.5 py-0.5 md:px-4 md:py-1 glass rounded-full text-[6px] md:text-xs font-bold text-gray-400 whitespace-nowrap">
                  <Calendar size={8} className="md:w-3 md:h-3" />
                  {exp.period}
                </div>
              </div>

              <p className="text-gray-400 mb-3 md:mb-6 leading-tight text-[8px] md:text-lg line-clamp-2 md:line-clamp-none">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-1 md:gap-2">
                {exp.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="px-1 py-0.5 md:px-2 md:py-1 bg-white/5 border border-white/5 rounded text-[6px] md:text-[10px] text-gray-300">
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
