import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Code2, Layout, Smartphone } from 'lucide-react'

const projects = [
  {
    title: 'E-Commerce Fusion',
    description: 'A futuristic shopping experience with real-time tracking and 3D product previews.',
    tech: ['Next.js', 'Three.js', 'Tailwind'],
    image: '🛍️',
    link: '#',
    github: '#',
    category: 'Web App'
  },
  {
    title: 'Anima Dashboard',
    description: 'Premium admin interface with glassmorphism UI and complex data visualizations.',
    tech: ['React', 'Framer Motion', 'Chart.js'],
    image: '📊',
    link: '#',
    github: '#',
    category: 'Dashboard'
  },
  {
    title: 'Crypto Pulse',
    description: 'Real-time cryptocurrency tracker with animated market trends and dark mode.',
    tech: ['React', 'API Integration', 'Tailwind'],
    image: '₿',
    link: '#',
    github: '#',
    category: 'Finance'
  },
  {
    title: 'Eco Mobile App',
    description: 'A sustainable lifestyle tracker with smooth gesture-based navigation.',
    tech: ['React Native', 'Firebase', 'Reanimated'],
    image: '🌿',
    link: '#',
    github: '#',
    category: 'Mobile'
  }
]

const Projects = () => {
  return (
    <section id="projects" className="py-8 md:py-24 relative">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-primary font-bold tracking-widest uppercase text-sm mb-2"
        >
          My Portfolio
        </motion.h2>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-black mb-6"
        >
          Featured <span className="text-gradient">Projects</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 max-w-2xl mx-auto"
        >
          Explore a selection of my best work, where design meets functionality 
          through modern web technologies and innovative animations.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -10 }}
            className="glass-card group flex flex-col h-full overflow-hidden"
          >
            {/* Project Preview Area */}
            <div className="h-48 relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-white/5 to-white/10 mb-6 rounded-xl">
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="text-7xl group-hover:scale-125 transition-transform duration-500">{project.image}</div>
              
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 bg-dark/50 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-wider border border-white/10">
                  {project.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((t, i) => (
                  <span key={i} className="px-2 py-1 bg-primary/10 rounded text-[10px] text-primary font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4 border-t border-white/5">
              <a href={project.link} className="flex items-center gap-2 text-sm font-bold text-white hover:text-primary transition-colors">
                <ExternalLink size={16} /> Live Demo
              </a>
              <a href={project.github} className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-white transition-colors">
                <Github size={16} /> GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects
