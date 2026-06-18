import { useState, type FormEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

interface FormState {
  name: string
  phone: string
  email: string
}

const EMPTY: FormState = { name: '', phone: '', email: '' }

export function Waitlist() {
  const [values, setValues] = useState<FormState>(EMPTY)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  function update(field: keyof FormState, value: string) {
    setValues((v) => ({ ...v, [field]: value }))
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!values.name.trim() || !values.phone.trim() || !values.email.trim()) {
      setError('Please fill in all fields to reserve your spot.')
      return
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(values.email)) {
      setError('Please enter a valid email address.')
      return
    }
    setError('')
    setSubmitted(true)
  }

  return (
    <section className="section" id="waitlist">
      <div className="container">
        <div className="waitlist">
          <div className="waitlist__glow" aria-hidden="true" />

          <div className="waitlist__copy">
            <span className="eyebrow">
              <span className="dot" /> Priority access
            </span>
            <h2 className="section__title">Become a Priority Member</h2>
            <p className="section__lede">
              Get early access, exclusive launch benefits, and priority onboarding. Priority spots in our private beta
              are limited.
            </p>
            <ul className="waitlist__perks">
              <li>Skip the line at public launch</li>
              <li>Founding-member pricing, locked for life</li>
              <li>1-on-1 onboarding for your estate</li>
            </ul>
          </div>

          <div className="waitlist__card">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  className="waitlist__success"
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
                >
                  <span className="waitlist__check" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12l4 4 10-11" />
                    </svg>
                  </span>
                  <h3>You&apos;re officially on the priority list.</h3>
                  <p>
                    Welcome aboard, {values.name.split(' ')[0]}. We&apos;ll reach out to {values.email} with your early
                    access details soon.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  className="waitlist__form"
                  onSubmit={handleSubmit}
                  noValidate
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="field">
                    <label htmlFor="name">Full Name</label>
                    <input
                      id="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Your full name"
                      value={values.name}
                      onChange={(e) => update('name', e.target.value)}
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      id="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="+91 90000 00000"
                      value={values.phone}
                      onChange={(e) => update('phone', e.target.value)}
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="email">Email Address</label>
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@email.com"
                      value={values.email}
                      onChange={(e) => update('email', e.target.value)}
                    />
                  </div>

                  {error && (
                    <p className="field__error" role="alert">
                      {error}
                    </p>
                  )}

                  <button type="submit" className="btn btn--primary btn--lg btn--block">
                    Reserve My Priority Access
                  </button>
                  <p className="waitlist__fine">No spam. We&apos;ll only contact you about early access.</p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
