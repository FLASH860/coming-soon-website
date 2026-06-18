import { motion, type MotionValue, useTransform } from 'framer-motion'
import { THEMES } from '../themes'
import { DashboardMockup } from './DashboardMockup'

interface Props {
  themeIndex: number
  px: MotionValue<number>
  py: MotionValue<number>
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
}
const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
}

export function Hero({ themeIndex, px, py }: Props) {
  // Floating mockup parallax — moves with cursor for an interactive, alive feel.
  const mockX = useTransform(px, [-0.5, 0.5], [-26, 26])
  const mockY = useTransform(py, [-0.5, 0.5], [-18, 18])
  const copyX = useTransform(px, [-0.5, 0.5], [10, -10])

  return (
    <section className="hero" id="top">
      <div className="container hero__grid">
        <motion.div className="hero__copy" variants={container} initial="hidden" animate="show" style={{ x: copyX }}>
          <motion.span className="eyebrow" variants={item}>
            <span className="dot" /> Private beta · Limited priority spots
          </motion.span>

          <motion.h1 className="hero__title" variants={item}>
            Your Legacy <span className="hero__accent">Secured Digitally</span>
          </motion.h1>

          <motion.p className="hero__sub" variants={item}>
            Organize, protect and pass down your property information with confidence. Never let important records get
            lost across generations.
          </motion.p>

          <motion.div className="hero__cta" variants={item}>
            <a href="#waitlist" className="btn btn--primary btn--lg">
              Become a Priority Member
            </a>
            <a href="#waitlist" className="btn btn--ghost btn--lg">
              Join the Early Access List
            </a>
          </motion.div>

          <motion.div className="hero__themes" variants={item} aria-hidden="true">
            <span className="hero__themes-label">Built for every kind of estate</span>
            <div className="hero__themes-row">
              {THEMES.map((t, i) => (
                <span key={t.id} className={`hero__chip ${i === themeIndex ? 'is-active' : ''}`}>
                  {t.name}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__visual"
          style={{ x: mockX, y: mockY }}
          initial={{ opacity: 0, y: 40, rotateX: 8 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="hero__float"
          >
            <DashboardMockup />
          </motion.div>

          <motion.div
            className="hero__badge hero__badge--1"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <strong>Bank-grade</strong>
            <span>encryption</span>
          </motion.div>
          <motion.div
            className="hero__badge hero__badge--2"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          >
            <strong>Nominees</strong>
            <span>auto-notified</span>
          </motion.div>
        </motion.div>
      </div>

      <a href="#features" className="hero__scroll" aria-label="Scroll to features">
        <span />
      </a>
    </section>
  )
}
