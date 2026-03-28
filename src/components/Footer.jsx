import React from 'react'
import { Github, Linkedin, Instagram, Mail, Heart } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-dark/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo & Info */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-gradient mb-2 tracking-tighter">KHUY OUDOM.</h2>
            <p className="text-gray-500 text-sm max-w-xs">
              Building the future of web experiences with modern tech and futuristic designs.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {[Github, Linkedin, Instagram, Mail].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="p-3 glass rounded-xl hover:text-primary hover:border-primary/50 transition-all duration-300"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-gray-500 text-sm flex items-center justify-center md:justify-end gap-1">
              Khuy<Heart size={14} className="text-primary fill-primary" /> Oudom
            </p>
            <p className="text-gray-600 text-xs mt-1">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
