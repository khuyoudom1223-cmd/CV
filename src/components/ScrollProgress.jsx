import React from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1.5 z-[100] origin-left shadow-[0_0_18px_rgba(6,182,212,0.35)] bg-[linear-gradient(90deg,#2563eb_0%,#7c3aed_35%,#ec4899_68%,#f97316_100%)] bg-[length:220%_100%] animate-gradientShift"
      style={{ scaleX }}
    />
  )
}

export default ScrollProgress
