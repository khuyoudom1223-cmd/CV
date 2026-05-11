// import React, { useEffect, useRef } from 'react'

// const AnimatedBackground = () => {
//   const canvasRef = useRef(null)
//   const mouseRef = useRef({ x: 0, y: 0, active: false })

//   useEffect(() => {
//     const canvas = canvasRef.current
//     const ctx = canvas.getContext('2d')
//     let raf
//     let rain = []
//     let lightningAlpha = 0
//     let lightningBolts = null

//     const isMob = () => window.innerWidth < 768
//     const SC = () => isMob() ? 0.7 : 1.2

//     // Monster
//     const M = {
//       segs: [],
//       n: isMob() ? 30 : 50,
//       dist: isMob() ? 16 : 24,
//       tX: window.innerWidth / 2,
//       tY: window.innerHeight / 2,
//       wander: 0,
//       eyeT: 0,
//       blinkT: 100,
//       blink: false,
//       scan: 0,
//       legT: 0,
//       scrollY: window.scrollY,
//       smoke: []
//     }
//     for (let i = 0; i < M.n; i++) M.segs.push({ x: M.tX, y: M.tY, a: 0, leg: i > 4 && i < M.n - 4 && i % 4 === 0 })

//     const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; initRain() }

//     const initRain = () => {
//       rain = []
//       for (let i = 0; i < (isMob() ? 20 : 50); i++)
//         rain.push({ x: Math.random() * canvas.width * 1.3, y: Math.random() * canvas.height, s: Math.random() * 12 + 8, o: Math.random() * 0.08 + 0.03 })
//     }

//     // --- DRAWING HELPERS ---
//     const bone = (x1, y1, x2, y2, w, bright) => {
//       const c = bright ? '#fff' : '#d4d4dc'
//       const d = bright ? '#ccc' : '#8a8a95'
//       // Main shaft
//       ctx.strokeStyle = c; ctx.lineWidth = w; ctx.lineCap = 'round'
//       ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke()
//       // Dark edge
//       ctx.strokeStyle = d; ctx.lineWidth = w * 0.4
//       ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke()
//       // Knobs
//       ctx.fillStyle = c
//       ctx.beginPath(); ctx.arc(x1, y1, w * 0.8, 0, Math.PI * 2); ctx.fill()
//       ctx.beginPath(); ctx.arc(x2, y2, w * 0.8, 0, Math.PI * 2); ctx.fill()
//       // Dark outline on knobs
//       ctx.strokeStyle = 'rgba(0,0,0,0.3)'; ctx.lineWidth = 1
//       ctx.beginPath(); ctx.arc(x1, y1, w * 0.8, 0, Math.PI * 2); ctx.stroke()
//       ctx.beginPath(); ctx.arc(x2, y2, w * 0.8, 0, Math.PI * 2); ctx.stroke()
//     }

//     const drawSkull = (x, y, a, sc) => {
//       const lit = lightningAlpha > 0.5
//       const bc = lit ? '#fff' : '#e0e0e8'
//       const dc = lit ? '#ddd' : '#9090a0'
//       ctx.save(); ctx.translate(x, y); ctx.rotate(a + Math.PI / 2 + M.scan)

//       // Shadow under skull
//       ctx.fillStyle = 'rgba(0,0,0,0.15)'
//       ctx.beginPath(); ctx.ellipse(3, 5, 20 * sc, 12 * sc, 0, 0, Math.PI * 2); ctx.fill()

//       // Cranium
//       ctx.fillStyle = bc
//       ctx.beginPath()
//       ctx.moveTo(-20 * sc, 2 * sc)
//       ctx.bezierCurveTo(-22 * sc, -35 * sc, 22 * sc, -35 * sc, 20 * sc, 2 * sc)
//       ctx.closePath(); ctx.fill()
//       ctx.strokeStyle = dc; ctx.lineWidth = 1.5; ctx.stroke()

//       // Cranium suture lines
//       ctx.strokeStyle = 'rgba(0,0,0,0.12)'; ctx.lineWidth = 0.8
//       ctx.beginPath(); ctx.moveTo(0, -32 * sc); ctx.bezierCurveTo(-5 * sc, -18 * sc, 5 * sc, -10 * sc, 0, 0); ctx.stroke()

//       // Lower jaw
//       ctx.fillStyle = bc
//       ctx.beginPath()
//       ctx.moveTo(-18 * sc, 2 * sc); ctx.lineTo(-14 * sc, 35 * sc); ctx.lineTo(14 * sc, 35 * sc); ctx.lineTo(18 * sc, 2 * sc)
//       ctx.closePath(); ctx.fill()
//       ctx.strokeStyle = dc; ctx.lineWidth = 1.5; ctx.stroke()

//       // Teeth
//       ctx.fillStyle = lit ? '#fff' : '#f0f0f0'
//       for (let i = -3; i <= 3; i++) {
//         const tx = i * 4 * sc
//         ctx.beginPath()
//         ctx.moveTo(tx - 2 * sc, 28 * sc); ctx.lineTo(tx, 35 * sc); ctx.lineTo(tx + 2 * sc, 28 * sc)
//         ctx.closePath(); ctx.fill()
//       }
//       ctx.strokeStyle = 'rgba(0,0,0,0.2)'; ctx.lineWidth = 0.5
//       for (let i = -3; i <= 3; i++) {
//         const tx = i * 4 * sc
//         ctx.beginPath(); ctx.moveTo(tx - 2 * sc, 28 * sc); ctx.lineTo(tx, 35 * sc); ctx.lineTo(tx + 2 * sc, 28 * sc); ctx.closePath(); ctx.stroke()
//       }

//       // Nose hole
//       ctx.fillStyle = '#0a0a12'
//       ctx.beginPath(); ctx.moveTo(-4 * sc, 12 * sc); ctx.lineTo(0, 20 * sc); ctx.lineTo(4 * sc, 12 * sc); ctx.closePath(); ctx.fill()

//       // Cheekbones
//       ctx.strokeStyle = dc; ctx.lineWidth = 2 * sc
//       ctx.beginPath(); ctx.moveTo(-18 * sc, 2 * sc); ctx.lineTo(-12 * sc, 10 * sc); ctx.stroke()
//       ctx.beginPath(); ctx.moveTo(18 * sc, 2 * sc); ctx.lineTo(12 * sc, 10 * sc); ctx.stroke()

//       // Eye sockets
//       ctx.fillStyle = '#08080f'
//       ctx.beginPath()
//       ctx.ellipse(-9 * sc, -8 * sc, 7 * sc, 9 * sc, 0.15, 0, Math.PI * 2); ctx.fill()
//       ctx.ellipse(9 * sc, -8 * sc, 7 * sc, 9 * sc, -0.15, 0, Math.PI * 2); ctx.fill()
//       // Socket rim
//       ctx.strokeStyle = dc; ctx.lineWidth = 1.2
//       ctx.beginPath(); ctx.ellipse(-9 * sc, -8 * sc, 7 * sc, 9 * sc, 0.15, 0, Math.PI * 2); ctx.stroke()
//       ctx.beginPath(); ctx.ellipse(9 * sc, -8 * sc, 7 * sc, 9 * sc, -0.15, 0, Math.PI * 2); ctx.stroke()

//       // Glowing eyes
//       if (!M.blink) {
//         const g = Math.sin(M.eyeT) * 0.5 + 0.5
//         ctx.shadowBlur = 8 + g * 8; ctx.shadowColor = '#ff1100'
//         ctx.fillStyle = `rgba(255,20,0,${0.8 + g * 0.2})`
//         ctx.beginPath(); ctx.arc(-9 * sc, -8 * sc, 3.5 * sc, 0, Math.PI * 2); ctx.fill()
//         ctx.beginPath(); ctx.arc(9 * sc, -8 * sc, 3.5 * sc, 0, Math.PI * 2); ctx.fill()
//         // White glint
//         ctx.shadowBlur = 0; ctx.fillStyle = '#fff'
//         ctx.beginPath(); ctx.arc(-8 * sc, -9 * sc, 1 * sc, 0, Math.PI * 2); ctx.fill()
//         ctx.beginPath(); ctx.arc(10 * sc, -9 * sc, 1 * sc, 0, Math.PI * 2); ctx.fill()
//       }
//       ctx.shadowBlur = 0
//       ctx.restore()
//     }

//     const drawVert = (x, y, a, sc, idx) => {
//       const lit = lightningAlpha > 0.5
//       const progress = idx / M.n
//       const sz = (20 - progress * 16) * sc
//       const bc = lit ? '#fff' : '#d0d0d8'
//       const dc = lit ? '#ddd' : '#7a7a88'

//       ctx.save(); ctx.translate(x, y); ctx.rotate(a)

//       // Shadow
//       ctx.fillStyle = 'rgba(0,0,0,0.1)'
//       ctx.beginPath(); ctx.ellipse(2, 2, sz * 0.7, sz, 0, 0, Math.PI * 2); ctx.fill()

//       // Core vertebra
//       ctx.fillStyle = bc
//       ctx.beginPath(); ctx.roundRect(-sz * 0.5, -sz * 0.9, sz, sz * 1.8, sz * 0.3); ctx.fill()
//       ctx.strokeStyle = dc; ctx.lineWidth = 1; ctx.stroke()

//       // Spinous process (spike on top)
//       ctx.fillStyle = bc
//       ctx.beginPath()
//       ctx.moveTo(0, -sz * 0.9); ctx.lineTo(-2 * sc, -sz * 1.5); ctx.lineTo(2 * sc, -sz * 1.5)
//       ctx.closePath(); ctx.fill()
//       ctx.strokeStyle = dc; ctx.lineWidth = 0.8; ctx.stroke()

//       // Ribs (transverse processes)
//       const rw = sz * 1.2
//       ctx.strokeStyle = bc; ctx.lineWidth = 2.5 * sc; ctx.lineCap = 'round'
//       ctx.beginPath(); ctx.moveTo(-rw, -sz * 0.2); ctx.lineTo(rw, -sz * 0.2); ctx.stroke()
//       ctx.strokeStyle = dc; ctx.lineWidth = 1
//       ctx.beginPath(); ctx.moveTo(-rw, -sz * 0.2); ctx.lineTo(rw, -sz * 0.2); ctx.stroke()

//       // Smaller lower rib
//       ctx.strokeStyle = bc; ctx.lineWidth = 2 * sc
//       ctx.beginPath(); ctx.moveTo(-rw * 0.7, sz * 0.3); ctx.lineTo(rw * 0.7, sz * 0.3); ctx.stroke()

//       ctx.restore()
//     }

//     const drawLeg = (sx, sy, a, side, cyc, sc) => {
//       const lit = lightningAlpha > 0.5
//       const c = lit ? '#fff' : '#c8c8d0'
//       const jc = lit ? '#eee' : '#909098'

//       const la = a + (side === 'R' ? Math.PI / 1.8 : -Math.PI / 1.8)
//       const lift = Math.sin(cyc) * 22 * sc
//       const ext = 55 * sc + Math.cos(cyc) * 12 * sc

//       const kx = sx + Math.cos(la + (side === 'R' ? 0.4 : -0.4)) * 38 * sc
//       const ky = sy + Math.sin(la + (side === 'R' ? 0.4 : -0.4)) * 38 * sc - lift
//       const cx = kx + Math.cos(la + (side === 'R' ? 1 : -1)) * ext
//       const cy2 = ky + Math.sin(la + (side === 'R' ? 1 : -1)) * ext + lift * 0.5

//       // Femur
//       bone(sx, sy, kx, ky, 5 * sc, lit)
//       // Tibia
//       bone(kx, ky, cx, cy2, 4 * sc, lit)

//       // Claw (3 prongs)
//       ctx.fillStyle = lit ? '#fff' : '#b0b0b8'; ctx.strokeStyle = 'rgba(0,0,0,0.3)'; ctx.lineWidth = 1
//       const dir = side === 'R' ? 1 : -1
//       for (let p = -1; p <= 1; p++) {
//         ctx.beginPath()
//         ctx.moveTo(cx, cy2)
//         ctx.lineTo(cx + (10 + p * 4) * dir * sc, cy2 + (16 - Math.abs(p) * 4) * sc)
//         ctx.lineTo(cx + (4 + p * 2) * dir * sc, cy2 + 6 * sc)
//         ctx.closePath(); ctx.fill(); ctx.stroke()
//       }

//       // Knee joint
//       ctx.fillStyle = jc
//       ctx.beginPath(); ctx.arc(kx, ky, 6 * sc, 0, Math.PI * 2); ctx.fill()
//       ctx.strokeStyle = 'rgba(0,0,0,0.2)'; ctx.lineWidth = 1; ctx.stroke()
//     }

//     // --- UPDATE ---
//     const update = () => {
//       const t = Date.now() * 0.001
//       M.eyeT += 0.12
//       M.scan = Math.sin(t * 1.2) * 0.25
//       M.legT += 0.08

//       M.blinkT--
//       if (M.blinkT <= 0) { M.blink = !M.blink; M.blinkT = M.blink ? 6 : Math.random() * 200 + 100 }

//       // Smooth autonomous wandering (no random jitter)
//       M.wander += 0.012
//       const wanderRadius = Math.min(canvas.width, canvas.height) * 0.35
//       M.tX = canvas.width / 2 + Math.cos(M.wander * 0.7) * wanderRadius + Math.sin(M.wander * 1.3) * wanderRadius * 0.4
//       M.tY = canvas.height / 2 + Math.sin(M.wander * 0.9) * wanderRadius * 0.7 + Math.cos(M.wander * 1.6) * wanderRadius * 0.25

//       // Clamp target to viewport
//       M.tX = Math.max(60, Math.min(canvas.width - 60, M.tX))
//       M.tY = Math.max(60, Math.min(canvas.height - 60, M.tY))

//       // Smooth head interpolation
//       const dx = M.tX - M.segs[0].x, dy = M.tY - M.segs[0].y
//       M.segs[0].a = Math.atan2(dy, dx)
//       M.segs[0].x += dx * 0.03; M.segs[0].y += dy * 0.03

//       for (let i = 1; i < M.n; i++) {
//         const p = M.segs[i - 1], c = M.segs[i]
//         const ddx = p.x - c.x, ddy = p.y - c.y
//         c.a = Math.atan2(ddy, ddx)
//         const d = Math.sqrt(ddx * ddx + ddy * ddy)
//         if (d > M.dist) { c.x = p.x - Math.cos(c.a) * M.dist; c.y = p.y - Math.sin(c.a) * M.dist }
//       }

//       // Tiny smoke wisps
//       if (Math.random() < 0.06) {
//         M.smoke.push({ x: M.segs[0].x + (Math.random() - 0.5) * 20, y: M.segs[0].y + (Math.random() - 0.5) * 20, vx: (Math.random() - 0.5) * 0.8, vy: -Math.random() * 0.5, life: 1, size: Math.random() * 12 + 5 })
//       }
//     }

//     // --- RENDER ---
//     const draw = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height)
//       const sc = SC()

//       // Rain
//       rain.forEach(r => {
//         ctx.strokeStyle = `rgba(140,120,200,${r.o + lightningAlpha * 0.15})`; ctx.lineWidth = 0.6
//         ctx.beginPath(); ctx.moveTo(r.x, r.y); ctx.lineTo(r.x + 2, r.y + r.s); ctx.stroke()
//         r.y += 12; if (r.y > canvas.height) r.y = -15
//       })

//       // Smoke
//       for (let i = M.smoke.length - 1; i >= 0; i--) {
//         const s = M.smoke[i]
//         ctx.globalAlpha = s.life * 0.04; ctx.fillStyle = '#3b1570'
//         ctx.beginPath(); ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2); ctx.fill()
//         s.life -= 0.02; s.x += s.vx; s.y += s.vy
//         if (s.life <= 0) M.smoke.splice(i, 1)
//       }
//       ctx.globalAlpha = 1

//       // Body segments + legs (back to front)
//       for (let i = M.n - 1; i >= 0; i--) {
//         const seg = M.segs[i]
//         if (seg.leg) {
//           const cyc = M.legT + i * 0.6
//           drawLeg(seg.x, seg.y, seg.a, 'R', cyc, sc)
//           drawLeg(seg.x, seg.y, seg.a, 'L', cyc + Math.PI, sc)
//         }
//         if (i === 0) drawSkull(seg.x, seg.y, seg.a, sc)
//         else drawVert(seg.x, seg.y, seg.a, sc, i)
//       }

//       // Lightning
//       if (Math.random() < 0.004 && lightningAlpha <= 0) {
//         lightningAlpha = 1; lightningBolts = genBolt(Math.random() * canvas.width, 0, 100, Math.PI / 2, 9)
//       }
//       if (lightningAlpha > 0) {
//         ctx.save()
//         ctx.fillStyle = `rgba(130,100,200,${lightningAlpha * 0.04})`; ctx.fillRect(0, 0, canvas.width, canvas.height)
//         ctx.strokeStyle = '#fff'; ctx.lineWidth = 2; ctx.shadowBlur = 15; ctx.shadowColor = '#a855f7'
//         ctx.beginPath(); lightningBolts.forEach(b => { ctx.moveTo(b.x1, b.y1); ctx.lineTo(b.x2, b.y2) }); ctx.stroke()
//         ctx.restore(); lightningAlpha -= 0.04
//       }

//       raf = requestAnimationFrame(() => { update(); draw() })
//     }

//     const genBolt = (x, y, l, a, d) => {
//       if (d <= 0) return []
//       const ex = x + Math.cos(a) * l, ey = y + Math.sin(a) * l
//       return [{ x1: x, y1: y, x2: ex, y2: ey }, ...genBolt(ex, ey, l * 0.87, a + (Math.random() - 0.5) * 0.7, d - 1)]
//     }

//     window.addEventListener('resize', resize)
//     window.addEventListener('mousemove', e => mouseRef.current = { x: e.clientX, y: e.clientY, active: true })
//     window.addEventListener('touchstart', e => mouseRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY, active: true })

//     resize(); update(); draw()
//     return () => { window.removeEventListener('resize', resize); cancelAnimationFrame(raf) }
//   }, [])

//   return (
//     <div className="fixed inset-0 z-[9999] overflow-hidden pointer-events-none">
//       <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" aria-hidden="true" />
//     </div>
//   )
// }

// export default AnimatedBackground
