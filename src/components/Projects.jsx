import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Code2 } from 'lucide-react'

const projects = [
  {
    title: 'E-Commerce Fusion',
    description: 'A futuristic shopping experience with real-time tracking and 3D product previews.',
    tech: ['Next.js', 'Three.js', 'Tailwind'],
    image: '/e-commerce-online-shopping-digital-marketing-internet-business-technology-concept-on-virtual-screen-free-photo.jpg',
    link: '#',
    github: '#',
    category: 'Web App'
  },
  {
    title: 'Dashboard',
    description: 'Premium admin interface with glassmorphism UI and complex data visualizations.',
    tech: ['React', 'Framer Motion', 'Chart.js'],
    image: '/infographic-dashboard-user-panel_52683-30026.avif',
    link: '#',
    github: '#',
    category: 'Dashboard'
  },
  {
    title: 'Project Management',
    description: 'Advanced management platform with Gantt charts, milestone tracking, and futuristic task scheduling.',
    tech: ['React', 'D3.js', 'Tailwind'],
    image: '/project-manager-working-on-tablet-and-updating-tasks-and-milestones-progress-planning-with-gantt-chart-scheduling-interface-for-company-on-virtual-screen-business-project-management-system-photo.jpg',
    link: '#',
    github: '#',
    category: 'System'
  },
  {
    title: 'Mobile App',
    description: 'A sustainable lifestyle tracker with smooth gesture-based navigation.',
    tech: ['React Native', 'Firebase', 'Reanimated'],
    image: '/64aee54818043c827e76067b_services-design-dev-img.jpg',
    link: '#',
    github: '#',
    category: 'Mobile'
  }
]

const Projects = () => {
  const [expandedIdx, setExpandedIdx] = React.useState(null)

  return (
    <section id="projects" className="py-20 md:py-32 relative px-4 md:px-6">
      <div className="text-center mb-16 md:mb-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-kicker"
        >
          My Portfolio
        </motion.h2>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Featured <span className="text-gradient">Projects</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-copy mx-auto"
        >
          A curated selection of my most impactful work, combining pixel-perfect design
          with high-performance engineering.
        </motion.p>
      </div>

      <div className="flex overflow-x-auto md:grid md:grid-cols-2 snap-x snap-mandatory no-scrollbar gap-4 md:gap-8 lg:gap-12 max-w-7xl mx-auto pb-8 md:pb-0">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            onClick={() => setExpandedIdx(expandedIdx === idx ? null : idx)}
            className={`glass-card group flex flex-col h-full overflow-hidden p-0 cursor-pointer transition-all duration-700 snap-center min-w-[280px] w-[85%] md:w-full shrink-0 ${expandedIdx === idx ? 'border-primary/40 ring-2 ring-primary/5' : 'border-white/5 hover:border-white/10'}`}
          >
            {/* Project Preview Area */}
            <div className="h-48 md:h-72 relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
              <motion.div 
                className="w-full h-full"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </motion.div>

              <div className="absolute top-4 left-4 md:top-6 md:left-6 z-20">
                <span className="px-3 py-1 bg-dark/60 backdrop-blur-xl rounded-full text-[10px] md:text-xs font-black uppercase tracking-[0.15em] border border-white/10 text-white">
                  {project.category}
                </span>
              </div>
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-transparent to-transparent z-10" />
            </div>

            {/* Content */}
            <div className="flex-1 p-6 md:p-10 flex flex-col">
              <div className="flex justify-between items-start mb-4 md:mb-6">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-white group-hover:text-primary-light transition-colors tracking-tight leading-tight">
                  {project.title}
                </h3>
              </div>

              <motion.div
                initial={false}
                animate={{
                  height: expandedIdx === idx ? 'auto' : 0,
                  opacity: expandedIdx === idx ? 1 : 0
                }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <p className="text-slate-400 text-sm md:text-lg mb-6 md:mb-8 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8 md:mb-10">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-2 py-0.5 bg-primary/10 rounded-lg text-[10px] md:text-xs text-primary-light font-black uppercase tracking-[0.1em] border border-primary/20">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 md:gap-8 pt-6 md:pt-8 border-t border-white/10 mt-auto">
                  <a href={project.link} className="flex items-center gap-1.5 text-[10px] md:text-xs font-black text-white hover:text-primary-light transition-all group/link uppercase tracking-[0.15em]">
                    <ExternalLink size={14} className="md:w-4 md:h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    <span>Live</span>
                  </a>
                  <a href={project.github} className="flex items-center gap-1.5 text-[10px] md:text-xs font-black text-slate-500 hover:text-white transition-all uppercase tracking-[0.15em]">
                    <Github size={14} className="md:w-4 md:h-4" />
                    <span>Code</span>
                  </a>
                </div>
              </motion.div>

              {/* Status Hint / Button Style */}
              <div className="mt-auto pt-6 border-t border-white/5 flex justify-center">
                <div className={`w-full py-3 rounded-2xl border text-[10px] md:text-xs font-black uppercase tracking-[0.2em] transition-all duration-500 flex items-center justify-center gap-2 ${expandedIdx === idx ? 'bg-primary border-primary-light text-white shadow-glow-primary' : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10'}`}>
                  <span>{expandedIdx === idx ? 'VIEW LESS' : 'VIEW DETAILS'}</span>
                  {expandedIdx !== idx && <Code2 size={14} />}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects
