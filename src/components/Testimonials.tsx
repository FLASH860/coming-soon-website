import { motion } from 'framer-motion'

const ITEMS = [
  {
    quote:
      'When my father passed, finding his property papers took us months. Property Wallet means my children will never go through that.',
    name: 'Ananya Mehta',
    role: 'Family estate, Pune',
  },
  {
    quote:
      'I manage six commercial units across two cities. For the first time, ownership and nominees are all in one calm dashboard.',
    name: 'Rohan Verma',
    role: 'Commercial investor, Mumbai',
  },
  {
    quote:
      'It feels less like software and more like peace of mind. My whole family finally understands what we own and why.',
    name: 'Sunita Iyer',
    role: 'Homeowner, Bengaluru',
  },
]

export function Testimonials() {
  return (
    <section className="section section--soft" id="stories">
      <div className="container">
        <div className="section__head">
          <span className="eyebrow">
            <span className="dot" /> Stories
          </span>
          <h2 className="section__title">Families already planning ahead</h2>
        </div>

        <div className="stories">
          {ITEMS.map((t, i) => (
            <motion.figure
              className="story"
              key={t.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="story__stars" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, k) => (
                  <svg key={k} viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                    <path d="M12 2l2.9 6.3 6.9.7-5.1 4.7 1.4 6.8L12 17.8 5.9 20.5l1.4-6.8L2.2 9l6.9-.7L12 2z" />
                  </svg>
                ))}
              </div>
              <blockquote>{t.quote}</blockquote>
              <figcaption>
                <span className="story__avatar" aria-hidden="true">
                  {t.name.charAt(0)}
                </span>
                <span>
                  <strong>{t.name}</strong>
                  <em>{t.role}</em>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
