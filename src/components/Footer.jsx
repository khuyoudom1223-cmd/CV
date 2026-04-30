import React from 'react'
import { Github, Linkedin, Instagram, Facebook, Heart } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-[#050914]/80 backdrop-blur-xl relative overflow-hidden">
      <div className="absolute inset-0 animated-gradient-bg opacity-[0.06]" />
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo & Info */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-gradient mb-2 tracking-tight">KHUY OUDOM.</h2>
            <p className="text-slate-400 text-sm md:text-base max-w-xs mt-2 leading-relaxed font-medium">
              Building the future of web experiences with modern tech and futuristic designs.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {[Github, Linkedin, Instagram, Facebook].map((Icon, idx) => {
              const href =
                Icon === Github ? 'https://github.com/oudomkhuy' :
                  Icon === Linkedin ? 'https://linkedin.com/in/oudom-khuy-1205423b5' :
                    Icon === Instagram ? 'https://www.instagram.com/oudomkhuy?igsh=cjNlNDlrazExY3o%3D&utm_source=qr' :
                  Icon === Facebook ? 'https://www.facebook.com/share/1CqnRn9LoV/?mibextid=wwXIfr' :
                    '#'
              const external = href !== '#'
              return (
                <a
                  key={idx}
                  href={href}
                  target={external && !href.startsWith('mailto:') ? '_blank' : undefined}
                  rel={external && !href.startsWith('mailto:') ? 'noopener noreferrer' : undefined}
                  className="group p-3 bg-surface/50 border border-white/5 rounded-xl hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 shadow-[0_4px_16px_rgba(0,0,0,0.2)] cursor-pointer relative z-20"
                >
                  <Icon size={20} className="group-hover:scale-110 transition-transform duration-300" />
                </a>
              )
            })}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-slate-200 text-sm md:text-base flex items-center justify-center md:justify-end gap-1 font-semibold">
              Khuy<Heart size={16} className="text-primary fill-primary" /> Oudom
            </p>
            <p className="text-slate-400 text-xs md:text-sm mt-2 font-medium">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
