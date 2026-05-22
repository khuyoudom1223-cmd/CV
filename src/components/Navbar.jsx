import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Linkedin, Send } from 'lucide-react'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Experience', href: '#experience' },
  { name: 'Grid', href: '#fixed-grid' },
  { name: 'Projects', href: '#projects' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
]

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/huot-sambath-171a6940b?utm_source=share_via&utm_content=profile&utm_medium=member_ios' },
  { icon: Send, href: 'https://t.me/huot_sambath' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeTab, setActiveTab] = useState('Home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const scrollToSection = (id) => {
    setIsOpen(false)
    const el = document.getElementById(id.replace('#', ''))
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'py-3 bg-white/80 dark:bg-dark/80 backdrop-blur-2xl border-b border-black/5 dark:border-white/5 shadow-premium' : 'py-6 bg-transparent'}`}>
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="brand-logo"
            onClick={() => scrollToSection('#home')}
          >
            SAM BATH
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isContact = link.name === 'Contact'
              return (
              <a
                key={link.name}
                href={isContact ? 'https://t.me/huot_sambath' : link.href}
                target={isContact ? '_blank' : undefined}
                rel={isContact ? 'noopener noreferrer' : undefined}
                onClick={(e) => {
                  if (isContact) return
                  e.preventDefault()
                  setActiveTab(link.name)
                  scrollToSection(link.href)
                }}
                className="nav-link"
              >
                {link.name}
                {activeTab === link.name && !isContact && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-primary to-secondary rounded-full shadow-glow-primary"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            )})}
            <a
              href="https://t.me/huot_sambath"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-[10px] !py-3 !px-6 tracking-widest"
            >
              HIRE ME
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`relative z-[140] text-slate-800 dark:text-slate-100 p-3 rounded-2xl transition-all duration-500 ${isOpen ? 'bg-primary text-white shadow-glow-primary scale-110' : 'bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 shadow-premium'}`}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Placed outside parent nav container to avoid transition height squishing bugs */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-[#020204]/80 backdrop-blur-sm z-[120] md:hidden"
            />

            {/* Slide-In Drawer */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 220 }}
              className="fixed top-0 left-0 bottom-0 w-[290px] sm:w-[320px] bg-[#050508]/98 border-r border-white/5 backdrop-blur-3xl z-[130] md:hidden px-6 py-10 flex flex-col justify-between shadow-premium rounded-r-[2rem] overflow-y-auto"
            >
              {/* Subtle futuristic background glow effects */}
              <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/10 blur-[80px] rounded-full pointer-events-none z-0" />
              <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-48 h-48 bg-secondary/10 blur-[80px] rounded-full pointer-events-none z-0" />

              {/* Top Section */}
              <div className="flex flex-col gap-6 w-full z-10 relative">
                {/* Brand Header */}
                <div className="flex items-center gap-3 px-3 mb-2 mt-4 select-none">
                  <div className="h-2.5 w-2.5 rounded-full bg-primary shadow-glow-primary animate-pulse" />
                  <span className="brand-logo !text-[20px]">SAM BATH</span>
                </div>

                {/* Menu Links */}
                <div className="flex flex-col gap-2 w-full">
                  {navLinks.map((link, i) => {
                    const isContact = link.name === 'Contact'
                    const isActive = activeTab === link.name
                    return (
                      <motion.a
                        key={link.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.04 }}
                        href={isContact ? 'https://t.me/huot_sambath' : link.href}
                        target={isContact ? '_blank' : undefined}
                        rel={isContact ? 'noopener noreferrer' : undefined}
                        onClick={(e) => {
                          if (isContact) {
                            setIsOpen(false)
                            return
                          }
                          e.preventDefault()
                          setActiveTab(link.name)
                          scrollToSection(link.href)
                          setIsOpen(false) // Close drawer upon selection
                        }}
                        className={`font-display font-bold transition-all duration-300 w-full text-left flex items-center gap-3 py-3 px-5 rounded-xl ${
                          isActive
                            ? 'text-gradient-glow text-[15px] tracking-[0.06em] uppercase bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-primary/20 shadow-glow-primary'
                            : 'text-slate-400 text-[14px] tracking-[0.08em] uppercase hover:text-white hover:translate-x-1.5'
                        }`}
                        style={{ fontFamily: 'var(--font-display)' }}
                      >
                        {/* Bullet accent for current active item */}
                        {isActive && <div className="h-1.5 w-1.5 rounded-full bg-primary" />}
                        {link.name}
                      </motion.a>
                    )
                  })}
                </div>
              </div>

              {/* Bottom Section */}
              <div className="flex flex-col gap-5 w-full mt-6 pt-6 border-t border-white/5 z-10 relative">
                {/* Hire Me CTA */}
                <motion.a
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  href="https://t.me/huot_sambath"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary w-full py-4 rounded-full text-xs font-black tracking-[0.15em] shadow-glow-primary border border-white/10 flex items-center justify-center uppercase hover:-translate-y-0.5 active:scale-95 duration-300"
                >
                  HIRE ME
                </motion.a>

                {/* Social links */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.55 }}
                  className="flex justify-center gap-3.5"
                >
                  {socialLinks.map((social, i) => (
                    <a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/5 border border-white/10 rounded-full hover:border-primary/50 hover:bg-white/10 hover:shadow-glow-primary hover:-translate-y-1 transition-all duration-300 flex items-center justify-center backdrop-blur-md shadow-premium text-slate-300 hover:text-primary"
                    >
                      <social.icon size={18} />
                    </a>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
