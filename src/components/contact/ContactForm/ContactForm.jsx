import { useState } from 'react'
import styles from './ContactForm.module.css'

const services = [
  'Freight Forwarding',
  'Logistics BPO',
  'Customs & Consultancy',
  'Specialized Logistics',
  'BDP Partnership',
  'Prime Business Solutions',
  'General Inquiry',
]

const initialForm = {
  name: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  message: '',
}

function ContactForm() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (field) => (e) =>
    setForm(prev => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    // Simulate API call — connect to your backend here
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1200)
  }

  if (submitted) {
    return (
      <section className={styles.section} id="contact-form">
        <div className={styles.successWrap}>
          <div className={styles.successIcon}>
            <svg viewBox="0 0 24 24" fill="none" stroke="white"
              strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
              width={32} height={32}>
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </div>
          <h2 className={styles.successTitle}>Message Sent!</h2>
          <p className={styles.successDesc}>
            Thank you for reaching out. Our team will review your message
            and get back to you within 24 hours.
          </p>
          <button
            className={styles.successBtn}
            onClick={() => setSubmitted(false)}
          >
            Send Another Message
          </button>
        </div>
      </section>
    )
  }

  return (
    <section className={styles.section} id="contact-form">
      <div className={styles.inner}>

        {/* Left info */}
        <div className={styles.info}>
          <div className={styles.label}>Send a Message</div>
          <h2 className={styles.title}>Let's Start a Conversation</h2>
          <p className={styles.desc}>
            Fill in the form and one of our specialists will get back
            to you within 24 hours — often much sooner.
          </p>

          {/* Quick contact */}
          <div className={styles.quickContact}>
            <a href="tel:+9411XXXXXXX" className={styles.quickItem}>
              <div className={styles.quickIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  width={20} height={20}>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.85a16 16 0 0 0 6 6l1.27-.9a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.02z" />
                </svg>
              </div>
              <div>
                <div className={styles.quickLabel}>Call us directly</div>
                <div className={styles.quickValue}>+94 11 XXX XXXX</div>
              </div>
            </a>

            <a href="mailto:info@eaglelogistic.lk" className={styles.quickItem}>
              <div className={styles.quickIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  width={20} height={20}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <div className={styles.quickLabel}>Email us</div>
                <div className={styles.quickValue}>info@eaglelogistic.lk</div>
              </div>
            </a>

            <div className={styles.quickItem}>
              <div className={styles.quickIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  width={20} height={20}>
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div>
                <div className={styles.quickLabel}>Response time</div>
                <div className={styles.quickValue}>Within 24 hours</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right form */}
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.row2}>
            <div className={styles.field}>
              <label className={styles.fieldLabel}>Full Name *</label>
              <input
                className={styles.input}
                type="text"
                placeholder="Your full name"
                value={form.name}
                onChange={handleChange('name')}
                required
              />
            </div>
            <div className={styles.field}>
              <label className={styles.fieldLabel}>Email Address *</label>
              <input
                className={styles.input}
                type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange('email')}
                required
              />
            </div>
          </div>

          <div className={styles.row2}>
            <div className={styles.field}>
              <label className={styles.fieldLabel}>Phone Number</label>
              <input
                className={styles.input}
                type="tel"
                placeholder="+94 XX XXX XXXX"
                value={form.phone}
                onChange={handleChange('phone')}
              />
            </div>
            <div className={styles.field}>
              <label className={styles.fieldLabel}>Company Name</label>
              <input
                className={styles.input}
                type="text"
                placeholder="Your company"
                value={form.company}
                onChange={handleChange('company')}
              />
            </div>
          </div>

          <div className={styles.field}>
            <label className={styles.fieldLabel}>Service Interested In *</label>
            <select
              className={styles.input}
              value={form.service}
              onChange={handleChange('service')}
              required
            >
              <option value="">Select a service...</option>
              {services.map(s => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          <div className={styles.field}>
            <label className={styles.fieldLabel}>Message *</label>
            <textarea
              className={`${styles.input} ${styles.textarea}`}
              placeholder="Tell us about your logistics needs, cargo type, routes or any specific requirements..."
              value={form.message}
              onChange={handleChange('message')}
              rows={5}
              required
            />
          </div>

          <button
            type="submit"
            className={styles.submitBtn}
            disabled={loading}
          >
            {loading ? (
              <>
                <div className={styles.spinner} />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <span className={styles.submitCircle}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="white"
                    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                    width={14} height={14}>
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </span>
              </>
            )}
          </button>
        </form>

      </div>
    </section>
  )
}

export default ContactForm