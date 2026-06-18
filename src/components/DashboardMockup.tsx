import { motion } from 'framer-motion'

const assets = [
  { name: 'Hillcrest Villa', type: 'Residential · Owned', value: '₹4.2 Cr', tone: 'a' },
  { name: 'Marina Tower 14F', type: 'Commercial · Leased', value: '₹2.8 Cr', tone: 'b' },
  { name: 'Greenfield Estate', type: 'Land · Inherited', value: '₹6.1 Cr', tone: 'c' },
]

export function DashboardMockup() {
  return (
    <div className="mock">
      <div className="mock__bar">
        <span className="mock__dot" />
        <span className="mock__dot" />
        <span className="mock__dot" />
        <span className="mock__url">app.propertywallet.com</span>
      </div>

      <div className="mock__body">
        <div className="mock__head">
          <div>
            <p className="mock__label">Total estate value</p>
            <p className="mock__value">₹13.1 Cr</p>
          </div>
          <span className="mock__pill">
            <span className="mock__pill-dot" /> Secured
          </span>
        </div>

        <div className="mock__assets">
          {assets.map((a, i) => (
            <motion.div
              className="mock__asset"
              key={a.name}
              initial={{ opacity: 0, x: 14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.12, duration: 0.5 }}
            >
              <span className={`mock__thumb mock__thumb--${a.tone}`} aria-hidden="true" />
              <span className="mock__asset-text">
                <strong>{a.name}</strong>
                <em>{a.type}</em>
              </span>
              <span className="mock__asset-val">{a.value}</span>
            </motion.div>
          ))}
        </div>

        <div className="mock__foot">
          <div className="mock__stat">
            <span>Documents</span>
            <strong>48 stored</strong>
          </div>
          <div className="mock__stat">
            <span>Nominees</span>
            <strong>3 assigned</strong>
          </div>
        </div>
      </div>
    </div>
  )
}
