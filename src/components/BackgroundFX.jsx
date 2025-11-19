import React, { useEffect, useRef } from 'react'

// Lightweight particle + fog background
// - Particles: floating glowing motes (no heavy deps)
// - Fog: animated blurred radial gradients drifting across
export default function BackgroundFX({ density = 60, color = '255, 60, 60' }) {
  const canvasRef = useRef(null)
  const rafRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { alpha: true })

    let w = canvas.width = canvas.offsetWidth
    let h = canvas.height = canvas.offsetHeight

    const onResize = () => {
      w = canvas.width = canvas.offsetWidth
      h = canvas.height = canvas.offsetHeight
      init()
    }

    const particles = []
    const rand = (min, max) => Math.random() * (max - min) + min

    const init = () => {
      particles.length = 0
      const count = Math.floor((w * h) / (12000)) + density
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: rand(0.6, 2.2),
          a: rand(0.2, 0.9),
          vx: rand(-0.1, 0.1),
          vy: rand(-0.05, 0.05),
          tw: rand(2, 6),
          t: Math.random() * Math.PI * 2,
        })
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      // subtle vignette
      const grad = ctx.createRadialGradient(w/2, h/2, Math.min(w,h)/4, w/2, h/2, Math.max(w,h)/1.2)
      grad.addColorStop(0, 'rgba(0,0,0,0)')
      grad.addColorStop(1, 'rgba(0,0,0,0.35)')
      ctx.fillStyle = grad
      ctx.fillRect(0,0,w,h)

      for (let p of particles) {
        p.t += 0.02
        p.x += p.vx + Math.sin(p.t / p.tw) * 0.1
        p.y += p.vy + Math.cos(p.t / p.tw) * 0.08
        if (p.x < -5) p.x = w + 5
        if (p.x > w + 5) p.x = -5
        if (p.y < -5) p.y = h + 5
        if (p.y > h + 5) p.y = -5
        const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 6)
        glow.addColorStop(0, `rgba(${color}, ${0.35 * p.a})`)
        glow.addColorStop(1, 'rgba(0,0,0,0)')
        ctx.fillStyle = glow
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r * 6, 0, Math.PI * 2)
        ctx.fill()
        ctx.fillStyle = `rgba(${color}, ${0.75 * p.a})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      }
      rafRef.current = requestAnimationFrame(draw)
    }

    init()
    draw()

    const resizeObs = new ResizeObserver(onResize)
    resizeObs.observe(canvas)

    return () => {
      cancelAnimationFrame(rafRef.current)
      resizeObs.disconnect()
    }
  }, [density, color])

  return (
    <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
      {/* Fog layers using CSS animations */}
      <div className="absolute -inset-1 opacity-30 mix-blend-screen">
        <div className="absolute -left-1/3 top-0 w-[120%] h-64 blur-3xl animate-cloud-slow bg-[radial-gradient(60%_60%_at_50%_50%,rgba(255,80,80,0.15),rgba(255,0,0,0)_70%)]" />
        <div className="absolute left-0 top-1/3 w-[140%] h-72 blur-3xl animate-cloud-med bg-[radial-gradient(60%_60%_at_50%_50%,rgba(255,120,120,0.12),rgba(255,0,0,0)_70%)]" />
        <div className="absolute -right-1/3 bottom-0 w-[120%] h-64 blur-3xl animate-cloud-fast bg-[radial-gradient(60%_60%_at_50%_50%,rgba(255,40,40,0.12),rgba(255,0,0,0)_70%)]" />
      </div>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  )
}
