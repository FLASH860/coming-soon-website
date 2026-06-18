import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { BRAND_SHIELD } from '../themes'

const LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'Register', href: '#signup' },
]

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
          <img className="brand__shield" src={BRAND_SHIELD} alt="" aria-hidden="true" />
          <span className="brand__name">Property Wallet</span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#signup" className="btn btn--primary btn--sm">
          Become a Priority Member
        </a>
      </div>
    </motion.header>
  )
}
