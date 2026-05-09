import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Github, Linkedin, Instagram, Facebook } from 'lucide-react'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Services', href: '#services' },
  { name: 'Experience', href: '#experience' },
  { name: 'Grid', href: '#fixed-grid' },
  { name: 'Projects', href: '#projects' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
]

const socialLinks = [
  { icon: Github, href: 'https://github.com/oudomkhuy' },
  { icon: Linkedin, href: 'https://linkedin.com/in/oudom-khuy-1205423b5' },
  { icon: Instagram, href: 'https://www.instagram.com/oudomkhuy?igsh=cjNlNDlrazExY3o%3D&utm_source=qr' },
  { icon: Facebook, href: 'https://www.facebook.com/share/1CqnRn9LoV/?mibextid=wwXIfr' },
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
      <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'py-3 bg-dark/80 backdrop-blur-2xl border-b border-white/5 shadow-premium' : 'py-6 bg-transparent'}`}>
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl font-black text-gradient tracking-[-0.08em] cursor-pointer drop-shadow-premium"
            onClick={() => scrollToSection('#home')}
          >
            OUDOM
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isContact = link.name === 'Contact'
              return (
              <a
                key={link.name}
                href={isContact ? 'https://t.me/khuyoudom' : link.href}
                target={isContact ? '_blank' : undefined}
                rel={isContact ? 'noopener noreferrer' : undefined}
                onClick={(e) => {
                  if (isContact) return
                  e.preventDefault()
                  setActiveTab(link.name)
                  scrollToSection(link.href)
                }}
                className="relative text-[11px] font-black hover:text-primary-light transition-all py-2 tracking-[0.2em] uppercase text-slate-300"
              >
                {link.name}
                {activeTab === link.name && !isContact && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary rounded-full shadow-glow-primary"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            )})}
            <a
              href="https://t.me/khuyoudom"
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
              className={`relative z-[110] text-white p-3 rounded-2xl transition-all duration-500 ${isOpen ? 'bg-primary shadow-glow-primary scale-110' : 'bg-white/5 border border-white/10 shadow-premium'}`}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 bg-dark/95 backdrop-blur-xl z-[100] md:hidden"
              />

              {/* Menu Content */}
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed inset-0 flex flex-col items-center justify-center z-[105] md:hidden px-6"
              >
                <div className="flex flex-col items-center gap-6 w-full max-w-sm">
                  {navLinks.map((link, i) => {
                    const isContact = link.name === 'Contact'
                    return (
                    <motion.a
                      key={link.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      href={isContact ? 'https://t.me/khuyoudom' : link.href}
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
                      }}
                      className={`text-4xl font-black tracking-tighter transition-all ${activeTab === link.name ? 'text-primary' : 'text-slate-500 hover:text-white'}`}
                    >
                      {link.name.toUpperCase()}
                    </motion.a>
                  )})}

                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex gap-6 mt-12"
                  >
                    {socialLinks.map((social, i) => (
                      <a
                        key={i}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 bg-white/5 rounded-2xl border border-white/10 hover:border-primary/50 transition-all text-slate-400 hover:text-primary hover:-translate-y-2"
                      >
                        <social.icon size={24} />
                      </a>
                    ))}
                  </motion.div>

                  <motion.a
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    href="https://t.me/khuyoudom"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                    className="btn-primary w-full mt-8 py-5 text-lg font-black tracking-widest shadow-premium"
                  >
                    HIRE ME
                  </motion.a>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </>
  )
}

export default Navbar
