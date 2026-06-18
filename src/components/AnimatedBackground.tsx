import { AnimatePresence, motion, type MotionValue, useTransform } from 'framer-motion'
import { THEMES } from '../themes'

interface Props {
  px: MotionValue<number>
  py: MotionValue<number>
  theme: number
}

export function AnimatedBackground({ px, py, theme }: Props) {
  // Parallax: background drifts opposite to the cursor, gently.
  const bgX = useTransform(px, [-0.5, 0.5], [26, -26])
  const bgY = useTransform(py, [-0.5, 0.5], [20, -20])

  const active = THEMES[theme]

  return (
    <div className="bg-stage" aria-hidden="true">
      <motion.div className="bg-parallax" style={{ x: bgX, y: bgY }}>
        <AnimatePresence>
          <motion.div
            key={active.id}
            className="bg-layer"
            style={{ backgroundImage: `url(${active.bg})` }}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.6, ease: 'easeInOut' }}
          />
        </AnimatePresence>
      </motion.div>

      {/* Light premium wash so content always reads on top of imagery */}
      <div className="bg-wash" />
      {/* Soft animated color veil that matches the active theme */}
      <div className="bg-veil" />
      {/* Cursor-following glow */}
      <div className="bg-glow" />
    </div>
  )
}
