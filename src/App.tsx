import { useEffect, useState } from 'react'
import { THEMES } from './themes'
import { usePointer } from './hooks/usePointer'
import { AnimatedBackground } from './components/AnimatedBackground'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Timeline } from './components/Timeline'
import { Trust } from './components/Trust'
import { Testimonials } from './components/Testimonials'
import { Waitlist } from './components/Waitlist'
import { Footer } from './components/Footer'
import './app.css'

const CYCLE_MS = 6500

export default function App() {
  const [themeIndex, setThemeIndex] = useState(0)
  const { x, y } = usePointer()

  // Auto-cycle through the three premium visual worlds.
  useEffect(() => {
    const id = setInterval(() => {
      setThemeIndex((i) => (i + 1) % THEMES.length)
    }, CYCLE_MS)
    return () => clearInterval(id)
  }, [])

  // Push the active theme's accent palette into CSS custom properties.
  useEffect(() => {
    const t = THEMES[themeIndex]
    const root = document.documentElement.style
    root.setProperty('--accent', t.accent)
    root.setProperty('--accent-2', t.accent2)
    root.setProperty('--accent-soft', t.accentSoft)
    root.setProperty('--glow', t.glow)
  }, [themeIndex])

  return (
    <div className="app">
      <AnimatedBackground index={themeIndex} px={x} py={y} />
      <Nav />
      <main>
        <Hero themeIndex={themeIndex} px={x} py={y} />
        <Features />
        <Timeline />
        <Trust />
        <Testimonials />
        <Waitlist />
      </main>
      <Footer />
    </div>
  )
}
