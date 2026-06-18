// Self-contained animated "particle network" background.
// Mounts its own fixed canvas behind the app and continuously animates
// drifting dots connected by thin lines. Imported once from main.tsx.

type Particle = {
  x: number
  y: number
  vx: number
  vy: number
  r: number
}

function startParticleBackground() {
  if (typeof document === 'undefined') return
  if (document.getElementById('particle-bg')) return

  const canvas = document.createElement('canvas')
  canvas.id = 'particle-bg'
  document.body.appendChild(canvas)

  const ctx = canvas.getContext('2d')
  if (!ctx) return

  let width = 0
  let height = 0
  let dpr = Math.min(window.devicePixelRatio || 1, 2)
  let particles: Particle[] = []

  const LINK_DIST = 150

  function buildParticles() {
    const area = width * height
    const count = Math.max(70, Math.min(170, Math.round(area / 9000)))
    particles = []
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        r: Math.random() * 2 + 1.6,
      })
    }
  }

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2)
    width = window.innerWidth
    height = window.innerHeight
    canvas.width = Math.floor(width * dpr)
    canvas.height = Math.floor(height * dpr)
    canvas.style.width = width + 'px'
    canvas.style.height = height + 'px'
    ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)
    buildParticles()
  }

  function frame() {
    ctx!.clearRect(0, 0, width, height)

    for (const p of particles) {
      p.x += p.vx
      p.y += p.vy
      if (p.x < 0 || p.x > width) p.vx *= -1
      if (p.y < 0 || p.y > height) p.vy *= -1
    }

    // Connecting lines
    for (let i = 0; i < particles.length; i++) {
      const a = particles[i]
      for (let j = i + 1; j < particles.length; j++) {
        const b = particles[j]
        const dx = a.x - b.x
        const dy = a.y - b.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < LINK_DIST) {
          const alpha = (1 - dist / LINK_DIST) * 0.7
          ctx!.strokeStyle = `rgba(45, 51, 60, ${alpha})`
          ctx!.lineWidth = 1.1
          ctx!.beginPath()
          ctx!.moveTo(a.x, a.y)
          ctx!.lineTo(b.x, b.y)
          ctx!.stroke()
        }
      }
    }

    // Dots
    for (const p of particles) {
      ctx!.fillStyle = 'rgba(35, 41, 50, 0.95)'
      ctx!.beginPath()
      ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2)
      ctx!.fill()
    }

    requestAnimationFrame(frame)
  }

  resize()
  window.addEventListener('resize', resize)
  requestAnimationFrame(frame)
}

startParticleBackground()
