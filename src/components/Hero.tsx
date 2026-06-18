import { useEffect, useState } from 'react'
import { AnimatePresence, motion, type MotionValue, useTransform } from 'framer-motion'
import { SHIELD_SLIDES } from '../themes'

interface Props {
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

const SLIDE_MS = 4000

export function Hero({ px, py }: Props) {
  const [slide, setSlide] = useState(0)

  // Auto-rotate the shield images every 4 seconds.
  useEffect(() => {
    const id = setInterval(() => {
      setSlide((s) => (s + 1) % SHIELD_SLIDES.length)
    }, SLIDE_MS)
    return () => clearInterval(id)
  }, [])

  // Floating visual parallax — moves with cursor for an interactive feel.
  const visX = useTransform(px, [-0.5, 0.5], [-22, 22])
  const visY = useTransform(py, [-0.5, 0.5], [-16, 16])
  const copyX = useTransform(px, [-0.5, 0.5], [8, -8])

  const active = SHIELD_SLIDES[slide]

  return (
    <section className="hero" id="top">
      <div className="container hero__grid">
        <motion.div className="hero__copy" variants={container} initial="hidden" animate="show" style={{ x: copyX }}>
          <motion.span className="eyebrow" variants={item}>
            <span className="dot" /> Coming soon
          </motion.span>

          <motion.h1 className="hero__title" variants={item}>
            Your Legacy <span className="hero__accent">Secured Digitally</span>
          </motion.h1>

          <motion.p className="hero__sub" variants={item}>
            Property Wallet is on its way. We&apos;re building a secure home for your property records, deeds and family
            legacy. The site isn&apos;t live just yet — leave your email and you&apos;ll be the first to know when we launch.
          </motion.p>

          <motion.form className="notify" variants={item} onSubmit={(e) => e.preventDefault()}>
            <input type="email" className="notify__input" placeholder="you@email.com" aria-label="Email address" required />
            <button type="submit" className="btn btn--primary btn--lg">
              Notify Me
            </button>
          </motion.form>
        </motion.div>

        <motion.div
          className="hero__visual"
          style={{ x: visX, y: visY }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="hero__float"
          >
            <div className="shield-frame">
              <AnimatePresence mode="wait">
                <motion.img
                  key={active.id}
                  src={active.src}
                  alt={active.alt}
                  className="shield-img"
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.8, ease: 'easeInOut' }}
                />
              </AnimatePresence>

              <div className="shield-dots" role="tablist" aria-label="Shield image">
                {SHIELD_SLIDES.map((s, i) => (
                  <button
                    key={s.id}
                    type="button"
                    className={`shield-dot ${i === slide ? 'is-active' : ''}`}
                    aria-label={`Show image ${i + 1}`}
                    aria-selected={i === slide}
                    role="tab"
                    onClick={() => setSlide(i)}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <a href="#features" className="hero__scroll" aria-label="Scroll to features">
        <span />
      </a>
    </section>
  )
}
