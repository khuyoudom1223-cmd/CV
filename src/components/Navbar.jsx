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
      <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${scrolled ? 'py-3 bg-surface/80 backdrop-blur-2xl border-b border-white/5 shadow-lg' : 'py-5 bg-transparent'}`}>
        <div className="container mx-auto px-5 md:px-12 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-gradient tracking-tighter cursor-pointer"
            onClick={() => scrollToSection('#home')}
          >
            OUDOM
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
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
                className="relative text-sm font-semibold hover:text-primary transition-colors py-2 tracking-wide text-slate-300"
              >
                {link.name}
                {activeTab === link.name && !isContact && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            )})}
            <a
              href="https://t.me/khuyoudom"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs !py-2 !px-6 block text-center"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-200 hover:text-white transition-all p-2 bg-white/5 rounded-lg border border-white/10"
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
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[90] md:hidden"
              />

              {/* Menu Content */}
              <motion.div
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed top-0 right-0 h-screen w-[280px] bg-[#050914] z-[100] md:hidden border-l border-white/5 shadow-2xl overflow-y-auto"
              >
                <div className="flex flex-col h-full">
                  <div className="p-6 flex justify-between items-center border-b border-white/5">
                    <span className="text-xl font-bold text-gradient">MENU</span>
                    <button onClick={() => setIsOpen(false)} className="p-2 bg-white/5 rounded-lg">
                      <X size={20} />
                    </button>
                  </div>

                  <div className="flex flex-col px-6 py-8 gap-4 flex-1">
                    {/* Socials at Top */}
                    <div className="flex gap-4 mb-6">
                      {socialLinks.map((social, i) => (
                        <a
                          key={i}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 bg-white/5 rounded-full border border-white/10 hover:border-primary/50 transition-colors text-slate-400 hover:text-primary"
                        >
                          <social.icon size={18} />
                        </a>
                      ))}
                    </div>

                    {/* Nav Links */}
                    {navLinks.map((link) => {
                      const isContact = link.name === 'Contact'
                      return (
                      <a
                        key={link.name}
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
                        className={`text-lg font-bold transition-all flex items-center justify-between group ${activeTab === link.name ? 'text-primary' : 'text-slate-400'}`}
                      >
                        <span>{link.name}</span>
                        <motion.span
                          initial={{ x: -10, opacity: 0 }}
                          animate={{ x: activeTab === link.name ? 0 : -10, opacity: activeTab === link.name ? 1 : 0 }}
                          className="text-primary"
                        >
                          →
                        </motion.span>
                      </a>
                    )})}

                    <a
                      href="https://t.me/khuyoudom"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                      className="btn-primary w-full mt-8 py-4 text-base font-bold shadow-lg block text-center"
                    >
                      Hire Me
                    </a>
                  </div>
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
