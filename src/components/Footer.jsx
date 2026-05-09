import React from 'react'
import { Github, Linkedin, Instagram, Facebook, Heart } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="py-20 border-t border-white/5 bg-dark relative overflow-hidden px-6">
      <div className="absolute inset-0 bg-primary/5 opacity-30 blur-[100px] -z-10" />
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          {/* Logo & Info */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-black text-gradient mb-4 tracking-tighter">KHUY OUDOM.</h2>
            <p className="text-slate-400 text-base md:text-lg max-w-sm leading-relaxed font-medium">
              Architecting the digital frontier with precision, 
              creativity, and cutting-edge technology.
            </p>
          </div>

          {/* Social Links */}
          <div className="grid grid-cols-2 gap-4 md:flex md:gap-6">
            {[Github, Linkedin, Instagram, Facebook].map((Icon, idx) => {
              const href =
                Icon === Github ? 'https://github.com/oudomkhuy' :
                Icon === Linkedin ? 'https://linkedin.com/in/oudom-khuy-1205423b5' :
                Icon === Instagram ? 'https://www.instagram.com/oudomkhuy?igsh=cjNlNDlrazExY3o%3D&utm_source=qr' :
                Icon === Facebook ? 'https://www.facebook.com/share/1CqnRn9LoV/?mibextid=wwXIfr' :
                '#'
              
              return (
                <a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-primary hover:border-primary-light hover:-translate-y-2 transition-all duration-500 shadow-premium"
                >
                  <Icon size={24} className="text-white group-hover:scale-110 transition-transform" />
                </a>
              )
            })}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-white text-lg md:text-xl flex items-center justify-center md:justify-end gap-2 font-black tracking-tight">
              Crafted with <Heart size={20} className="text-primary fill-primary animate-pulse" /> by Oudom
            </p>
            <p className="text-slate-500 text-xs md:text-sm mt-3 font-black uppercase tracking-[0.3em]">
              © {new Date().getFullYear()} PRE-RELEASE V2.0
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
