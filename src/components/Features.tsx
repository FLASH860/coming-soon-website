import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import type { ReactNode } from 'react'

interface Feature {
  title: string
  desc: string
  icon: ReactNode
}

const FEATURES: Feature[] = [
  {
    title: 'Digital Property Vault',
    desc: 'Every property, deed and asset in one encrypted, always-accessible place.',
    icon: (
      <path d="M4 7l8-4 8 4v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7z M12 11v3" />
    ),
  },
  {
    title: 'Nominee Management',
    desc: 'Assign nominees per asset and control exactly who inherits what, and when.',
    icon: <path d="M9 11a3 3 0 100-6 3 3 0 000 6zM3 20a6 6 0 0112 0M17 8l2 2 3-3" />,
  },
  {
    title: 'Family Property Records',
    desc: 'A shared, living record of your family estate across cities and generations.',
    icon: <path d="M4 20V9l8-5 8 5v11M9 20v-5h6v5M4 20h16" />,
  },
  {
    title: 'Legacy Transfer Planning',
    desc: 'Map succession ahead of time so transitions happen smoothly, not painfully.',
    icon: <path d="M5 4h9l5 5v11H5zM14 4v5h5M8 14h7M8 17h5" />,
  },
  {
    title: 'Secure Document Storage',
    desc: 'Title deeds, agreements and tax papers — encrypted and instantly retrievable.',
    icon: <path d="M7 3h7l4 4v14H7zM14 3v4h4M10 13l2 2 3-4" />,
  },
  {
    title: 'Ownership Tracking',
    desc: 'See current ownership, share splits and historical changes at a glance.',
    icon: <path d="M4 19V5M4 19h16M8 16l3-4 3 2 4-6" />,
  },
]

function Card({ feature, i }: { feature: Feature; i: number }) {
  const mx = useMotionValue(50)
  const my = useMotionValue(50)
  const rx = useMotionValue(0)
  const ry = useMotionValue(0)
  const glow = useMotionTemplate`radial-gradient(420px circle at ${mx}% ${my}%, var(--accent-soft), transparent 70%)`

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width
    const y = (e.clientY - r.top) / r.height
    mx.set(x * 100)
    my.set(y * 100)
    ry.set((x - 0.5) * 9)
    rx.set((0.5 - y) * 9)
  }
  function onLeave() {
    rx.set(0)
    ry.set(0)
  }

  return (
    <motion.div
      className="feat-card"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
    >
      <motion.span className="feat-card__glow" style={{ background: glow }} aria-hidden="true" />
      <span className="feat-card__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          {feature.icon}
        </svg>
      </span>
      <h3>{feature.title}</h3>
      <p>{feature.desc}</p>
    </motion.div>
  )
}

export function Features() {
  return (
    <section className="section" id="features">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow">
            <span className="dot" /> Everything in one wallet
          </span>
          <h2 className="section__title">A complete home for your property legacy</h2>
          <p className="section__lede">
            Property Wallet brings scattered documents, ownership records and family plans into one secure, elegant
            system — designed to outlast paperwork and outlive memory.
          </p>
        </div>

        <div className="feat-grid">
          {FEATURES.map((f, i) => (
            <Card key={f.title} feature={f} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
