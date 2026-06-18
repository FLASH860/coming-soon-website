import { useEffect, useState } from 'react'
import { THEMES } from './themes'
import { usePointer } from './hooks/usePointer'
import { AnimatedBackground } from './components/AnimatedBackground'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Signup } from './components/Signup'
import { Footer } from './components/Footer'
import './app.css'

const THEME_MS = 6000

export default function App() {
  const { x, y } = usePointer()
  const [theme, setTheme] = useState(0)

  // Rotate through the three visual themes automatically.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => {
      setTheme((t) => (t + 1) % THEMES.length)
    }, THEME_MS)
    return () => clearInterval(id)
  }, [])

  // Drive the active theme's palette into CSS custom properties.
  useEffect(() => {
    const active = THEMES[theme]
    const root = document.documentElement.style
    root.setProperty('--accent', active.accent)
    root.setProperty('--accent-2', active.accent2)
    root.setProperty('--accent-soft', active.accentSoft)
    root.setProperty('--glow', active.glow)
  }, [theme])

  return (
    <div className="app">
      <AnimatedBackground px={x} py={y} theme={theme} />
      <Nav />
      <main>
        <Hero px={x} py={y} theme={theme} onThemeChange={setTheme} />
        <Features />
        <Signup />
      </main>
      <Footer />
    </div>
  )
}
