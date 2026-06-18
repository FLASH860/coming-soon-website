import { motion } from 'framer-motion'

const STEPS = [
  {
    no: '01',
    title: 'Store',
    desc: 'Add your properties, deeds and documents to a single encrypted vault in minutes.',
  },
  {
    no: '02',
    title: 'Organize',
    desc: 'Tag ownership, assign nominees and structure your estate exactly the way your family understands it.',
  },
  {
    no: '03',
    title: 'Secure Your Legacy',
    desc: 'Lock in succession plans so the right people inherit the right assets — without confusion or loss.',
  },
]

export function Timeline() {
  return (
    <section className="section section--soft" id="how">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow">
            <span className="dot" /> How it works
          </span>
          <h2 className="section__title">Three steps to a protected legacy</h2>
          <p className="section__lede">
            No legal jargon. No scattered files. Just a clear path from today&apos;s paperwork to a future your family
            can trust.
          </p>
        </div>

        <div className="steps">
          <div className="steps__line" aria-hidden="true" />
          {STEPS.map((s, i) => (
            <motion.div
              className="step"
              key={s.no}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.14 }}
            >
              <span className="step__no">{s.no}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
