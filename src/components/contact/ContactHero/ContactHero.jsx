import { contactHero } from '../../../data/contact'
import styles from './ContactHero.module.css'

function ContactHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bg} />
      <div className={styles.overlay} />
      <div className={styles.content}>
        <span className={styles.tag}>{contactHero.tag}</span>
        <h1 className={styles.title} style={{ whiteSpace: 'pre-line' }}>
          {contactHero.title}
        </h1>
        <p className={styles.subtitle}>{contactHero.subtitle}</p>
        <div className={styles.actions}>
          <a href="#contact-form" className={styles.btnPrimary}>
            Send a Message
            <span className={styles.btnCircle}>
              <svg viewBox="0 0 24 24" fill="none" stroke="white"
                strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                width={14} height={14}>
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </span>
          </a>
          <a href="tel:+9411XXXXXXX" className={styles.btnOutline}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              width={16} height={16}>
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.85a16 16 0 0 0 6 6l1.27-.9a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.02z" />
            </svg>
            Call Us Now
          </a>
        </div>
        <div className={styles.breadcrumb}>
          <a href="/" className={styles.breadcrumbLink}>Home</a>
          <span className={styles.sep}>/</span>
          <span className={styles.breadcrumbActive}>Contact Us</span>
        </div>
      </div>
    </section>
  )
}

export default ContactHero