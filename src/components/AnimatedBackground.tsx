import { motion, type MotionValue, useTransform } from 'framer-motion'
import { BG_IMAGE } from '../themes'

interface Props {
  px: MotionValue<number>
  py: MotionValue<number>
}

export function AnimatedBackground({ px, py }: Props) {
  // Parallax: background drifts opposite to the cursor, gently.
  const bgX = useTransform(px, [-0.5, 0.5], [22, -22])
  const bgY = useTransform(py, [-0.5, 0.5], [16, -16])

  return (
    <div className="bg-stage" aria-hidden="true">
      <motion.div className="bg-parallax" style={{ x: bgX, y: bgY }}>
        <div className="bg-layer" style={{ backgroundImage: `url(${BG_IMAGE})` }} />
      </motion.div>

      {/* Wash + vignette to keep content readable and premium-light */}
      <div className="bg-wash" />
      {/* Cursor-following glow */}
      <div className="bg-glow" />
    </div>
  )
}
