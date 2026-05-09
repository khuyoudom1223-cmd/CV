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
      className="fixed top-0 left-0 right-0 h-1.5 z-[100] origin-left shadow-[0_0_18px_rgba(139,92,246,0.5)] bg-[linear-gradient(90deg,#6d28d9_0%,#d946ef_35%,#f472b6_68%,#a855f7_100%)] bg-[length:220%_100%] animate-gradientShift"
      style={{ scaleX }}
    />
  )
}

export default ScrollProgress
