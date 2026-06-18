import { motion } from 'framer-motion'

const STATS = [
  { value: '₹0', label: 'Lost to misplaced paperwork', sub: 'when records live in your wallet' },
  { value: '256-bit', label: 'AES encryption', sub: 'every document, at rest and in transit' },
  { value: '3 gen', label: 'Built to span generations', sub: 'designed for long-term continuity' },
  { value: '24/7', label: 'Always-on access', sub: 'for you and your assigned nominees' },
]

const INDICATORS = ['Bank-grade encryption', 'Private by default', 'Nominee-verified transfers', 'Audit trail on every change']

export function Trust() {
  return (
    <section className="section" id="trust">
      <div className="container">
        <div className="trust">
          <motion.div
            className="trust__intro"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow">
              <span className="dot" /> Trust &amp; security
            </span>
            <h2 className="section__title">Built for Families. Designed for Generations.</h2>
            <p className="section__lede">
              Property Wallet treats your family&apos;s legacy with the seriousness it deserves — security-first
              architecture, transparent ownership, and a calm, clear experience anyone can use.
            </p>
            <div className="trust__indicators">
              {INDICATORS.map((t) => (
                <span key={t} className="trust__chip">
                  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12l4 4 10-10" />
                  </svg>
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="trust__stats">
            {STATS.map((s, i) => (
              <motion.div
                className="trust__stat"
                key={s.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <strong>{s.value}</strong>
                <span className="trust__stat-label">{s.label}</span>
                <span className="trust__stat-sub">{s.sub}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
