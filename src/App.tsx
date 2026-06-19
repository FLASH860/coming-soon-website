import { useEffect } from 'react'
import { GREEN } from './themes'
import { usePointer } from './hooks/usePointer'
import { AnimatedBackground } from './components/AnimatedBackground'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Footer } from './components/Footer'
import './app.css'

export default function App() {
  const { x, y } = usePointer()

  // Lock the green palette into CSS custom properties once.
  useEffect(() => {
    const root = document.documentElement.style
    root.setProperty('--accent', GREEN.accent)
    root.setProperty('--accent-2', GREEN.accent2)
    root.setProperty('--accent-soft', GREEN.accentSoft)
    root.setProperty('--glow', GREEN.glow)
  }, [])

  return (
    <div className="app">
      <AnimatedBackground px={x} py={y} />
      <Nav />
      <main>
        <Hero px={x} py={y} />
        <Features />
      </main>
      <Footer />
    </div>
  )
}
