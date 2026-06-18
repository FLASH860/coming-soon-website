import { useEffect } from 'react'
import { useMotionValue, useSpring } from 'framer-motion'

/**
 * Tracks the pointer position and exposes smoothed, normalized values.
 * nx / ny are in the range [-0.5, 0.5] relative to the viewport center.
 * Also publishes the raw pixel position to CSS vars (--mx / --my) for glow effects.
 */
export function usePointer() {
  const nx = useMotionValue(0)
  const ny = useMotionValue(0)

  const sx = useSpring(nx, { stiffness: 60, damping: 18, mass: 0.6 })
  const sy = useSpring(ny, { stiffness: 60, damping: 18, mass: 0.6 })

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let frame = 0
    const handle = (e: PointerEvent) => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        const w = window.innerWidth
        const h = window.innerHeight
        nx.set(e.clientX / w - 0.5)
        ny.set(e.clientY / h - 0.5)
        document.documentElement.style.setProperty('--mx', `${e.clientX}px`)
        document.documentElement.style.setProperty('--my', `${e.clientY}px`)
      })
    }

    window.addEventListener('pointermove', handle, { passive: true })
    return () => {
      window.removeEventListener('pointermove', handle)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [nx, ny])

  return { x: sx, y: sy }
}
