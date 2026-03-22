import { eagleSpirit } from '../../../data/about'
import styles from './EagleSpirit.module.css'

function ValueIcon({ icon }) {
  switch (icon) {
    case 'integrity':
      return (
        <svg viewBox="0 0 40 40" fill="none" width={40} height={40}>
          <circle cx="20" cy="20" r="18" stroke="#2563eb" strokeWidth="2" />
          <path d="M13 20l5 5 9-10" stroke="#2563eb" strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'agility':
      return (
        <svg viewBox="0 0 40 40" fill="none" width={40} height={40}>
          <path d="M8 32 L20 8 L32 32 Z" stroke="#2563eb" strokeWidth="2"
            strokeLinejoin="round" />
          <line x1="20" y1="20" x2="20" y2="32" stroke="#2563eb" strokeWidth="2"
            strokeLinecap="round" />
        </svg>
      )
    case 'excellence':
      return (
        <svg viewBox="0 0 40 40" fill="none" width={40} height={40}>
          <polygon points="20,4 24.5,15 36,15 27,22.5 30.5,34 20,27 9.5,34 13,22.5 4,15 15.5,15"
            stroke="#2563eb" strokeWidth="2" strokeLinejoin="round" />
        </svg>
      )
    case 'partnership':
      return (
        <svg viewBox="0 0 40 40" fill="none" width={40} height={40}>
          <path d="M8 28 C8 22 12 18 20 18 C28 18 32 22 32 28"
            stroke="#2563eb" strokeWidth="2" strokeLinecap="round" />
          <circle cx="20" cy="12" r="6" stroke="#2563eb" strokeWidth="2" />
          <path d="M28 24 C32 20 36 22 36 26" stroke="#2563eb"
            strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    default: return null
  }
}

function EagleSpirit() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        {/* Left image */}
        <div className={styles.imgWrap}>
          <img
            src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=900&q=80"
            alt="Eagle Logistic Team"
          />
          <div className={styles.imgOverlay}>
            <div className={styles.imgQuote}>
              "We don't just move cargo —<br />we move businesses forward."
            </div>
          </div>
        </div>

        {/* Right content */}
        <div className={styles.content}>
          <div className={styles.label}>{eagleSpirit.subtitle}</div>
          <h2 className={styles.title}>{eagleSpirit.title}</h2>
          <p className={styles.desc}>{eagleSpirit.description}</p>

          <div className={styles.valuesGrid}>
            {eagleSpirit.values.map(value => (
              <div key={value.id} className={styles.valueCard}>
                <div className={styles.valueIcon}>
                  <ValueIcon icon={value.icon} />
                </div>
                <div className={styles.valueTitle}>{value.title}</div>
                <p className={styles.valueDesc}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default EagleSpirit