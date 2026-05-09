import React from 'react'
import { motion } from 'framer-motion'
import { Zap, Layout, ShieldCheck, Target } from 'lucide-react'

const stats = [
  { 
    label: 'SPEED', 
    value: '99%', 
    icon: Zap, 
    color: 'text-yellow-400', 
    bg: 'bg-yellow-400/10',
    image: '/64aee54818043c827e76067b_services-design-dev-img.jpg'
  },
  { 
    label: 'DESIGN', 
    value: 'High', 
    icon: Layout, 
    color: 'text-primary-light', 
    bg: 'bg-primary/10',
    image: '/infographic-dashboard-user-panel_52683-30026.avif'
  },
  { 
    label: 'QUALITY', 
    value: 'Clean', 
    icon: ShieldCheck, 
    color: 'text-secondary-light', 
    bg: 'bg-secondary/10',
    image: '/project-manager-working-on-tablet-and-updating-tasks-and-milestones-progress-planning-with-gantt-chart-scheduling-interface-for-company-on-virtual-screen-business-project-management-system-photo.jpg'
  },
  { 
    label: 'SCOPE', 
    value: 'Global', 
    icon: Target, 
    color: 'text-accent-light', 
    bg: 'bg-accent/10',
    image: '/e-commerce-online-shopping-digital-marketing-internet-business-technology-concept-on-virtual-screen-free-photo.jpg'
  },
]

const Stats = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-slate-500 font-black text-[10px] md:text-sm uppercase tracking-[0.4em] mb-4">
            Identical column structure across all devices - No stacking, No scrolling.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 max-w-6xl mx-auto">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card group p-0 overflow-hidden h-64 md:h-80 flex flex-col items-center justify-center relative"
            >
              <div className="absolute inset-0 bg-dark/40 group-hover:bg-dark/20 transition-colors duration-700 z-10" />
              <img src={stat.image} alt={stat.label} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-40 group-hover:opacity-60" />
              
              <div className="relative z-20 flex flex-col items-center gap-4 md:gap-6">
                <div className={`p-4 md:p-6 rounded-[2rem] bg-dark/60 backdrop-blur-xl border border-white/10 shadow-premium group-hover:border-primary/50 transition-all duration-500`}>
                  <stat.icon size={32} className={`${stat.color} md:w-12 md:h-12`} />
                </div>
                <div className="text-center">
                  <h4 className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-1">{stat.label}</h4>
                  <p className="text-xl md:text-3xl font-black text-white tracking-tighter">{stat.value}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-6 mt-12 md:mt-16">
          {['100% WIDTHS', 'NO STACKING', 'SCALABLE ELEMENTS'].map((tag, i) => (
            <div key={i} className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl text-[8px] md:text-[10px] font-black text-slate-500 uppercase tracking-widest hover:text-white hover:border-primary/50 transition-all cursor-default">
              {tag}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
