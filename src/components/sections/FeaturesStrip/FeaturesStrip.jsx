import { features } from '../../../data/features'
import styles from './FeaturesStrip.module.css'

function FeatureIcon({ icon }) {
  if (icon === 'globe-pin') return (
    <svg viewBox="0 0 64 64" fill="none" width={64} height={64}>
      <circle cx="30" cy="36" r="20" stroke="#1d3faa" strokeWidth="2.5" />
      <ellipse cx="30" cy="36" rx="9" ry="20" stroke="#1d3faa" strokeWidth="2" />
      <line x1="10" y1="36" x2="50" y2="36" stroke="#1d3faa" strokeWidth="2" strokeLinecap="round" />
      <line x1="13" y1="26" x2="47" y2="26" stroke="#1d3faa" strokeWidth="2" strokeLinecap="round" />
      <circle cx="44" cy="14" r="7" fill="#1d3faa" />
      <path d="M44 21 L44 28" stroke="#1d3faa" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="44" cy="14" r="2.5" fill="white" />
    </svg>
  )
  if (icon === 'box-shield') return (
    <svg viewBox="0 0 64 64" fill="none" width={64} height={64}>
      <path d="M12 20 L32 12 L52 20 L52 46 L32 54 L12 46 Z" stroke="#1d3faa" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M12 20 L32 28 L52 20" stroke="#1d3faa" strokeWidth="2.5" strokeLinejoin="round" />
      <line x1="32" y1="28" x2="32" y2="54" stroke="#1d3faa" strokeWidth="2.5" />
      <path d="M20 31 Q20 38 28 42 Q36 38 36 31 L28 29 Z" fill="#1d3faa" opacity="0.85" />
      <path d="M23 33 L26 36 L31 30" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
  if (icon === 'truck-check') return (
    <svg viewBox="0 0 64 64" fill="none" width={64} height={64}>
      <rect x="4" y="26" width="34" height="22" rx="3" fill="#1d3faa" />
      <path d="M38 34 L50 34 L56 42 L56 48 L38 48 Z" fill="#1d3faa" />
      <rect x="8" y="30" width="12" height="10" rx="2" fill="white" opacity="0.25" />
      <circle cx="14" cy="50" r="6" fill="#0d1b3e" stroke="#1d3faa" strokeWidth="2" />
      <circle cx="14" cy="50" r="2.5" fill="white" />
      <circle cx="46" cy="50" r="6" fill="#0d1b3e" stroke="#1d3faa" strokeWidth="2" />
      <circle cx="46" cy="50" r="2.5" fill="white" />
      <circle cx="50" cy="22" r="10" fill="#1d3faa" stroke="white" strokeWidth="2" />
      <path d="M44 22 L48 26 L56 16" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
  return null
}

function FeaturesStrip() {
  return (
    <div className={styles.section}>
      <div className={styles.grid}>
        {features.map((f, i) => (
          <div
            key={f.id}
            className={`${styles.item} ${i < features.length - 1 ? styles.itemBorder : ''}`}
          >
            <FeatureIcon icon={f.icon} />
            <div className={styles.text}>
              <div className={styles.title}>{f.title}</div>
              <p className={styles.desc}>{f.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeaturesStrip