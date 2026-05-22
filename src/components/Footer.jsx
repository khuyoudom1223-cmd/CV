import React from 'react'
import { Linkedin, Send, Heart } from 'lucide-react'

const socialLinks = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/huot-sambath-171a6940b?utm_source=share_via&utm_content=profile&utm_medium=member_ios' },
  { icon: Send, href: 'https://t.me/huot_sambath' }
]

const Footer = () => {
  return (
    <footer className="py-20 border-t border-black/5 dark:border-white/5 bg-slate-50 dark:bg-dark-card/30 backdrop-blur-3xl relative overflow-hidden px-6 transition-colors duration-500">
      <div className="absolute inset-0 bg-primary/5 opacity-30 blur-[100px] -z-10" />
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          {/* Logo & Info */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-black text-gradient mb-4 tracking-tighter">SAM BATH.</h2>
            <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg max-w-sm leading-relaxed font-medium">
              Architecting the digital frontier with precision, 
              creativity, and cutting-edge technology.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 md:gap-6">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-2xl hover:bg-primary hover:border-primary-light hover:-translate-y-2 transition-all duration-500 shadow-premium flex items-center justify-center"
              >
                <social.icon size={24} className="text-slate-700 dark:text-white group-hover:text-white group-hover:scale-110 transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-slate-900 dark:text-white text-lg md:text-xl flex items-center justify-center md:justify-end gap-2 font-black tracking-tight">
              Crafted with <Heart size={20} className="text-primary fill-primary animate-pulse" /> by Sam Bath
            </p>
            <p className="text-slate-500 text-xs md:text-sm mt-3 font-black uppercase tracking-[0.3em]">
              © {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
