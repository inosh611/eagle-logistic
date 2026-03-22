import { whyJoinUs } from '../../../data/careers'
import styles from './WhyJoinUs.module.css'

function WhyIcon({ icon }) {
  switch (icon) {
    case 'growth':
      return (
        <svg viewBox="0 0 48 48" fill="none" width={40} height={40}>
          <polyline points="6 36 16 22 24 28 36 12 42 18"
            stroke="currentColor" strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="36 12 42 12 42 18"
            stroke="currentColor" strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'culture':
      return (
        <svg viewBox="0 0 48 48" fill="none" width={40} height={40}>
          <path d="M24 8 C24 8 10 14 10 26 C10 34 16 40 24 40 C32 40 38 34 38 26 C38 14 24 8 24 8Z"
            stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
          <path d="M18 28 C18 28 20 32 24 32 C28 32 30 28 30 28"
            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      )
    case 'global':
      return (
        <svg viewBox="0 0 48 48" fill="none" width={40} height={40}>
          <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2.5" />
          <ellipse cx="24" cy="24" rx="7" ry="16" stroke="currentColor" strokeWidth="2" />
          <line x1="8" y1="24" x2="40" y2="24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="10" y1="17" x2="38" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="10" y1="31" x2="38" y2="31" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    case 'innovation':
      return (
        <svg viewBox="0 0 48 48" fill="none" width={40} height={40}>
          <path d="M24 8 C17 8 12 13 12 20 C12 25 15 29 20 31 L20 36 L28 36 L28 31 C33 29 36 25 36 20 C36 13 31 8 24 8Z"
            stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
          <line x1="20" y1="39" x2="28" y2="39" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="22" y1="42" x2="26" y2="42" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      )
    default: return null
  }
}

function WhyJoinUs() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className={styles.label}>Why Eagle Logistic</div>
        <h2 className={styles.title}>A Place Where Careers Take Flight</h2>
        <p className={styles.subtitle}>
          Join a team of passionate logistics professionals who are shaping
          the future of Sri Lanka's supply chain industry.
        </p>
      </div>

      <div className={styles.grid}>
        {whyJoinUs.map(item => (
          <div key={item.id} className={styles.card}>
            <div className={styles.iconWrap}>
              <WhyIcon icon={item.icon} />
            </div>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardDesc}>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhyJoinUs