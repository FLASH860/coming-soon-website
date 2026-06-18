import { useState, type FormEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const PERKS = [
  'First access the moment Property Wallet launches',
  'Founding-member pricing locked in for life',
  'Personal onboarding for your family legacy',
  'A say in the features we build next',
]

export function Signup() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '' })

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="signup" id="signup">
      <div className="container">
        <motion.div
          className="signup__shell"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <span className="signup__glow" aria-hidden="true" />

          <div className="signup__copy">
            <span className="eyebrow">
              <span className="dot" /> Priority access
            </span>
            <h2 className="signup__title">Become a Priority Member</h2>
            <p className="signup__sub">
              Reserve your place at the front of the line. Register with your name, email and phone number and you&apos;ll
              be among the very first to step inside Property Wallet.
            </p>
            <ul className="signup__perks">
              {PERKS.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>

          <div className="signup__card">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  className="signup__success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
                >
                  <div className="signup__check" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3>You&apos;re on the priority list</h3>
                  <p>Thanks, {form.name || 'friend'}. We&apos;ll reach out the moment we launch.</p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  className="signup__form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <h3 className="signup__card-title">Register your priority spot</h3>

                  <label className="field">
                    <span className="field__label">Full name</span>
                    <input
                      type="text"
                      className="field__input"
                      placeholder="Jane Doe"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                    />
                  </label>

                  <label className="field">
                    <span className="field__label">Email address</span>
                    <input
                      type="email"
                      className="field__input"
                      placeholder="you@email.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                    />
                  </label>

                  <label className="field">
                    <span className="field__label">Phone number</span>
                    <input
                      type="tel"
                      className="field__input"
                      placeholder="+1 (555) 000-0000"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      required
                    />
                  </label>

                  <button type="submit" className="btn btn--primary btn--lg btn--block">
                    Reserve My Priority Access
                  </button>
                  <p className="signup__fine">We&apos;ll only use your details to notify you about launch. No spam, ever.</p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
