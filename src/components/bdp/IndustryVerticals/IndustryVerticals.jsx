import { industryVerticals } from '../../../data/bdp'
import styles from './IndustryVerticals.module.css'

function IndustryIcon({ icon }) {
  if (icon === 'chemical') return (
    <svg viewBox="0 0 48 48" fill="none" width={44} height={44}>
      <path d="M18 8 L18 22 L8 40 L40 40 L30 22 L30 8 Z"
        stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      <line x1="18" y1="8" x2="30" y2="8"
        stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="20" cy="32" r="2" fill="currentColor" opacity="0.6" />
      <circle cx="28" cy="28" r="2" fill="currentColor" opacity="0.6" />
      <circle cx="24" cy="35" r="1.5" fill="currentColor" opacity="0.4" />
    </svg>
  )
  if (icon === 'retail') return (
    <svg viewBox="0 0 48 48" fill="none" width={44} height={44}>
      <path d="M8 12 L12 6 L36 6 L40 12 L40 16 C40 18 38 20 36 20 C34 20 32 18 32 16 C32 18 30 20 28 20 C26 20 24 18 24 16 C24 18 22 20 20 20 C18 20 16 18 16 16 C16 18 14 20 12 20 C10 20 8 18 8 16 Z"
        stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M10 20 L10 42 L38 42 L38 20"
        stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <rect x="18" y="30" width="12" height="12" rx="2"
        stroke="currentColor" strokeWidth="2" />
    </svg>
  )
  if (icon === 'consumer') return (
    <svg viewBox="0 0 48 48" fill="none" width={44} height={44}>
      <rect x="8" y="18" width="32" height="24" rx="3"
        stroke="currentColor" strokeWidth="2.5" />
      <path d="M16 18 C16 12 32 12 32 18"
        stroke="currentColor" strokeWidth="2.5"
        strokeLinecap="round" fill="none" />
      <line x1="8" y1="28" x2="40" y2="28"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="24" cy="23" r="2.5" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
  return null
}

function IndustryVerticals() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className={styles.label}>Industry Verticals</div>
        <h2 className={styles.title}>Sectors We Serve Globally</h2>
        <p className={styles.subtitle}>
          PSA BDP specialises in three core industry sectors — delivering
          tailored logistics solutions for the world's most demanding supply chains.
        </p>
      </div>

      <div className={styles.grid}>
        {industryVerticals.map(vertical => (
          <div
            key={vertical.id}
            className={styles.card}
            style={{ '--card-color': vertical.color }}
          >
            <div className={styles.cardTop}>
              <div className={styles.iconWrap} style={{ color: vertical.color, background: `${vertical.color}14` }}>
                <IndustryIcon icon={vertical.icon} />
              </div>
              <div className={styles.cardNum}>0{vertical.id}</div>
            </div>
            <h3 className={styles.cardTitle}>{vertical.name}</h3>
            <p className={styles.cardDesc}>{vertical.description}</p>
            <div className={styles.cardBar} style={{ background: vertical.color }} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default IndustryVerticals