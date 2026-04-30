import React, { useEffect, useRef } from 'react'

const AnimatedBackground = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationFrameId
    let raindrops = []
    let splashes = []
    let ripples = []
    let lightningStrike = null
    let lightningAlpha = 0
    let cloudOffset = 0
    let shockwaves = []
    const windAngle = 0.12

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    const initParticles = () => {
      raindrops = []
      const isMobile = window.innerWidth < 768
      const rainCount = isMobile ? 80 : 180
      
      for (let i = 0; i < rainCount; i++) {
        raindrops.push({
          x: Math.random() * canvas.width * 1.6 - (canvas.width * 0.3),
          y: Math.random() * canvas.height,
          vy: Math.random() * 30 + 35,
          length: Math.random() * 20 + 15,
          width: Math.random() * 0.8 + 0.4,
          opacity: Math.random() * 0.6 + 0.3
        })
      }
    }

    const drawClouds = () => {
      ctx.save()
      for (let i = 0; i < 6; i++) {
        const x = ((cloudOffset * (i + 1) * 0.1) % (canvas.width * 2))
        const yPos = 40 + i * 45
        const size = 350 + i * 50
        ctx.globalAlpha = 0.6 + (lightningAlpha * 0.4)
        ctx.fillStyle = i % 2 === 0 ? '#0a0a0f' : '#14141c'
        ctx.beginPath()
        ctx.arc(x - canvas.width * 0.5, yPos, size, 0, Math.PI * 2)
        ctx.arc(x + 300 - canvas.width * 0.5, yPos + 40, size * 0.8, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.restore()
    }

    const generateLightning = (x, y, length, angle, depth) => {
      if (depth <= 0) return []
      const endX = x + Math.cos(angle) * length
      const endY = y + Math.sin(angle) * length
      const segments = [{ x1: x, y1: y, x2: endX, y2: endY }]
      if (Math.random() < 0.35) {
        const branchAngle = angle + (Math.random() - 0.5) * 1.8
        segments.push(...generateLightning(endX, endY, length * 0.65, branchAngle, depth - 1))
      }
      segments.push(...generateLightning(endX, endY, length * 0.9, angle + (Math.random() - 0.5) * 0.4, depth - 1))
      return segments
    }

    const drawLightning = () => {
      if (Math.random() < 0.007 && lightningAlpha <= 0) {
        lightningAlpha = 1.0
        const startX = Math.random() * canvas.width
        lightningStrike = generateLightning(startX, 0, 70, Math.PI / 2, 9)
        // Add "Loud Thunder" Shockwave
        shockwaves.push({ x: startX, y: 0, r: 0, alpha: 0.8 })
      }

      if (lightningAlpha > 0) {
        ctx.save()
        const flashColor = lightningAlpha > 0.8 ? 
          `rgba(255, 255, 255, ${lightningAlpha * 0.5})` : 
          `rgba(255, 225, 120, ${lightningAlpha * 0.4})`
        ctx.fillStyle = flashColor
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        
        ctx.strokeStyle = '#ffd700'
        ctx.lineWidth = 6
        ctx.shadowBlur = 45
        ctx.shadowColor = '#ffcc00'
        ctx.beginPath()
        lightningStrike.forEach(s => {
          ctx.moveTo(s.x1, s.y1); ctx.lineTo(s.x2, s.y2)
        })
        ctx.stroke()

        ctx.strokeStyle = '#ffffff'
        ctx.lineWidth = 2
        ctx.shadowBlur = 10
        ctx.shadowColor = '#ffffff'
        ctx.beginPath()
        lightningStrike.forEach(s => {
          ctx.moveTo(s.x1, s.y1); ctx.lineTo(s.x2, s.y2)
        })
        ctx.stroke()
        ctx.restore()
        lightningAlpha -= 0.06
      } else {
        lightningStrike = null
      }
    }

    const drawShockwaves = () => {
      ctx.save()
      for (let i = shockwaves.length - 1; i >= 0; i--) {
        const sw = shockwaves[i]
        ctx.strokeStyle = `rgba(255, 255, 255, ${sw.alpha * 0.4})`
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.arc(sw.x, sw.y, sw.r, 0, Math.PI * 2)
        ctx.stroke()
        sw.r += 20; sw.alpha -= 0.02
        if (sw.alpha <= 0) shockwaves.splice(i, 1)
      }
      ctx.restore()
    }

    const drawRain = () => {
      raindrops.forEach(p => {
        const currentOpacity = p.opacity + (lightningAlpha * 0.4)
        const grad = ctx.createLinearGradient(p.x, p.y, p.x + p.length * windAngle, p.y + p.length)
        grad.addColorStop(0, 'rgba(255, 255, 255, 0)')
        grad.addColorStop(0.5, `rgba(180, 210, 255, ${currentOpacity})`)
        grad.addColorStop(1, `rgba(255, 255, 255, ${currentOpacity * 1.5})`)
        ctx.strokeStyle = grad; ctx.lineWidth = p.width; ctx.beginPath()
        ctx.moveTo(p.x, p.y); ctx.lineTo(p.x + p.length * windAngle, p.y + p.length); ctx.stroke()
        p.y += p.vy; p.x += p.vy * windAngle
        if (p.y > canvas.height) {
          if (splashes.length < 150) {
            for(let i=0; i<3; i++) {
              splashes.push({
                x: p.x, y: canvas.height - 3, vx: (Math.random() - 0.5) * 10,
                vy: -Math.random() * 6 - 4, life: 1.0, size: Math.random() * 2 + 0.5
              })
            }
          }
          if (ripples.length < 50) {
            ripples.push({
              x: p.x, y: canvas.height - 3, r: 3, alpha: 0.6, maxR: Math.random() * 35 + 25
            })
          }
          p.y = -p.length; p.x = Math.random() * canvas.width * 1.6 - (canvas.width * 0.3)
        }
      })
    }

    const drawSplashes = () => {
      ctx.save()
      for (let i = splashes.length - 1; i >= 0; i--) {
        const s = splashes[i]
        ctx.fillStyle = `rgba(255, 255, 255, ${s.life * (0.6 + lightningAlpha * 0.4)})`
        ctx.beginPath(); ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2); ctx.fill()
        s.x += s.vx; s.y += s.vy; s.vy += 0.45; s.life -= 0.05
        if (s.life <= 0) splashes.splice(i, 1)
      }
      ctx.restore()
    }

    const drawRipples = () => {
      ctx.save()
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i]
        ctx.strokeStyle = `rgba(255, 255, 255, ${r.alpha * (0.5 + lightningAlpha * 0.5)})`
        ctx.lineWidth = 1.5; ctx.beginPath()
        ctx.ellipse(r.x, r.y, r.r, r.r * 0.25, 0, 0, Math.PI * 2); ctx.stroke()
        r.r += 2.5; r.alpha -= 0.02
        if (r.alpha <= 0) ripples.splice(i, 1)
      }
      ctx.restore()
    }

    const drawFog = () => {
      ctx.save()
      const fogAlpha = 0.5 + (lightningAlpha * 0.4)
      const grad = ctx.createLinearGradient(0, canvas.height - 300, 0, canvas.height)
      grad.addColorStop(0, 'rgba(5, 5, 8, 0)'); grad.addColorStop(1, `rgba(15, 15, 25, ${fogAlpha})`)
      ctx.fillStyle = grad; ctx.fillRect(0, canvas.height - 300, canvas.width, 300); ctx.restore()
    }

    const drawParticles = () => {
      ctx.fillStyle = '#020204'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      const shake = lightningAlpha > 0 ? (Math.random() - 0.5) * 20 : (Math.random() - 0.5) * 1.5
      ctx.save(); ctx.translate(shake, shake)
      cloudOffset += 0.35; drawClouds(); drawShockwaves(); drawRipples(); drawRain(); drawSplashes(); drawFog(); drawLightning()
      ctx.restore()
      animationFrameId = requestAnimationFrame(drawParticles)
    }

    window.addEventListener('resize', resizeCanvas)
    resizeCanvas(); drawParticles()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="fixed inset-0 z-[-10] overflow-hidden pointer-events-none bg-[#020204]">
      <div className="absolute inset-0 opacity-100" style={{ background: 'radial-gradient(circle at top, #14141c 0%, #020204 100%)' }} />
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" aria-hidden="true" />
    </div>
  )
}

export default AnimatedBackground
