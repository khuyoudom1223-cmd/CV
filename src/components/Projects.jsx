import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Code2, Layout, Smartphone } from 'lucide-react'

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
    <section id="projects" className="py-12 md:py-24 relative">
      <div className="text-center mb-12 md:mb-16 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-primary font-bold tracking-widest uppercase text-xs md:text-sm mb-3"
        >
          My Portfolio
        </motion.h2>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="section-title mb-3"
        >
          Featured <span className="text-gradient">Projects</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="section-copy max-w-2xl mx-auto text-base md:text-lg"
        >
          Explore a selection of my best work, where design meets functionality
          through modern web technologies and innovative animations.
        </motion.p>
      </div>

      <div className="grid grid-cols-2 gap-3 lg:gap-12">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            onClick={() => setExpandedIdx(expandedIdx === idx ? null : idx)}
            className={`glass-card group flex flex-col h-full overflow-hidden p-0 cursor-pointer transition-all duration-500 ${expandedIdx === idx ? 'ring-2 ring-primary/50' : ''}`}
          >
            {/* Project Preview Area */}
            <div className="h-40 md:h-52 relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-white/5 to-white/10">
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                {project.image.startsWith('/') ? (
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="text-7xl">{project.image}</div>
                )}
              </div>

              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-dark/50 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-wider border border-white/10">
                  {project.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 p-5 md:p-8 flex flex-col">
              <h3 className="text-lg md:text-2xl font-black text-slate-50 mb-2 group-hover:text-primary transition-colors tracking-tight">
                {project.title}
              </h3>

              <motion.div
                initial={false}
                animate={{
                  height: expandedIdx === idx ? 'auto' : 0,
                  opacity: expandedIdx === idx ? 1 : 0
                }}
                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                className="overflow-hidden"
              >
                <p className="card-copy text-sm md:text-base text-slate-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-2.5 py-1 bg-primary/10 rounded-md text-[10px] md:text-xs text-primary font-bold uppercase tracking-wider border border-primary/20">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6 pt-6 border-t border-white/5 mt-auto">
                  <a href={project.link} className="flex items-center gap-2 text-[10px] md:text-xs font-bold text-white hover:text-primary transition-colors group/link uppercase tracking-wider">
                    <ExternalLink size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    <span>Live Demo</span>
                  </a>
                  <a href={project.github} className="flex items-center gap-2 text-[10px] md:text-xs font-bold text-slate-500 hover:text-slate-200 transition-colors uppercase tracking-wider">
                    <Github size={14} />
                    <span>GitHub</span>
                  </a>
                </div>
              </motion.div>

              {/* Status Hint */}
              <div className="mt-auto pt-2">
                <span className="text-[9px] font-bold text-slate-600 uppercase tracking-widest">
                  {expandedIdx === idx ? 'Click to close' : 'Click to view'}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects
