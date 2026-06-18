import { AnimatePresence, motion, type MotionValue, useTransform } from 'framer-motion'
import { THEMES } from '../themes'

interface Props {
  index: number
  px: MotionValue<number>
  py: MotionValue<number>
}

export function AnimatedBackground({ index, px, py }: Props) {
  const theme = THEMES[index]

  // Parallax: background drifts opposite to the cursor, gently.
  const bgX = useTransform(px, [-0.5, 0.5], [22, -22])
  const bgY = useTransform(py, [-0.5, 0.5], [16, -16])

  return (
    <div className="bg-stage" aria-hidden="true">
      <motion.div className="bg-parallax" style={{ x: bgX, y: bgY }}>
        <AnimatePresence mode="sync">
          <motion.div
            key={theme.id}
            className="bg-layer"
            style={{ backgroundImage: `url(${theme.image})` }}
            initial={{ opacity: 0, scale: 1.12 }}
            animate={{ opacity: 1, scale: 1.05 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ opacity: { duration: 1.8, ease: 'easeInOut' }, scale: { duration: 6, ease: 'easeOut' } }}
          />
        </AnimatePresence>
      </motion.div>

      {/* Wash + vignette to keep content readable and premium-light */}
      <div className="bg-wash" />
      {/* Cursor-following glow */}
      <div className="bg-glow" />
    </div>
  )
}
