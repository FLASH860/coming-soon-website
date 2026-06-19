import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const LINKS = [{ label: 'Features', href: '#features' }]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      className={`nav ${scrolled ? 'nav--scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
    >
      <div className="container nav__inner">
        <a className="brand" href="#top" aria-label="Property Wallet home">
          <span className="brand__mark" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
              <path
                d="M3 9.5 12 4l9 5.5M5 11v7.5A1.5 1.5 0 0 0 6.5 20h11a1.5 1.5 0 0 0 1.5-1.5V11"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <rect x="14.5" y="12.5" width="5.5" height="4" rx="1" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          </span>
          <span className="brand__name">Property Wallet</span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#top" className="btn btn--primary btn--sm">
          Notify Me
        </a>
      </div>
    </motion.header>
  )
}
