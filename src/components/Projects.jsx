import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

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
  const containerRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const handleMouseDown = (e) => {
    setIsDragging(true)
    setStartX(e.pageX - containerRef.current.offsetLeft)
    setScrollLeft(containerRef.current.scrollLeft)
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - containerRef.current.offsetLeft
    const walk = (x - startX) * 1.5 // Scroll multiplier
    containerRef.current.scrollLeft = scrollLeft - walk
  }

  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden px-4 md:px-6">
      <div className="text-center mb-12 md:mb-16">
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
          A curated selection of my most impactful work, designed for smooth swipe exploration.
        </motion.p>
      </div>

      {/* Horizontal Swipe/Scroll Wrapper */}
      <div className="max-w-7xl mx-auto relative px-0 md:px-6">
        <div
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className="flex overflow-x-auto gap-6 md:gap-8 py-6 px-4 md:px-8 no-scrollbar scroll-smooth snap-x snap-mandatory cursor-grab active:cursor-grabbing select-none"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="snap-center shrink-0 w-[285px] sm:w-[325px] md:w-[410px] glass-card flex flex-col h-[490px] md:h-[550px] overflow-hidden p-0 rounded-[2rem] border border-black/5 dark:border-white/5 hover:border-primary/20 dark:hover:border-primary/30 hover:shadow-glow-primary transition-all duration-500 group select-none relative"
            >
              {/* Project Image */}
              <div className="h-44 md:h-60 overflow-hidden relative select-none">
                <div className="absolute inset-0 bg-primary/25 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 select-none" 
                  draggable="false"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 bg-[#050508]/85 backdrop-blur-md rounded-full text-[9px] font-black uppercase tracking-[0.15em] border border-white/10 text-white select-none">
                    {project.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent z-10" />
              </div>

              {/* Content Area */}
              <div className="p-6 md:p-8 flex flex-col justify-between flex-1 select-none">
                <div>
                  <h3 className="text-xl md:text-2.5xl font-black text-slate-900 dark:text-white mb-2.5 group-hover:text-primary-light transition-colors select-none tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-xs md:text-[14px] leading-relaxed mb-4 select-none">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-2 py-0.5 bg-primary/10 rounded-lg text-[9px] text-primary-light font-black uppercase tracking-[0.1em] border border-primary/20 select-none">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-4 pt-4 border-t border-black/5 dark:border-white/5 select-none mt-auto">
                  <a 
                    href={project.link} 
                    className="flex-1 py-3 rounded-2xl bg-gradient-to-r from-primary to-secondary hover:shadow-glow-primary hover:-translate-y-0.5 border border-primary-light/10 text-[10px] md:text-xs font-black text-white uppercase tracking-[0.15em] transition-all flex items-center justify-center gap-1.5 select-none"
                  >
                    <ExternalLink size={12} />
                    <span>VIEW LIVE</span>
                  </a>
                  <a 
                    href={project.github} 
                    className="p-3 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 border border-black/5 dark:border-white/10 rounded-2xl text-slate-500 hover:text-slate-800 dark:hover:text-white transition-all flex items-center justify-center select-none"
                  >
                    <Github size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Swipe Hint Visual Aid */}
      <div className="flex justify-center items-center gap-3 mt-8 md:mt-12 select-none z-20 relative">
        <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.25em] text-slate-500 flex items-center gap-2">
          <span>←</span> Swipe / Drag to Explore <span>→</span>
        </span>
      </div>
    </section>
  )
}

export default Projects
