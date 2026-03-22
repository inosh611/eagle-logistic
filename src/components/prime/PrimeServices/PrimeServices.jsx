import { services } from '../../../data/prime'
import styles from './PrimeServices.module.css'

function ServiceIcon({ icon }) {
  switch (icon) {
    case 'enterprise':
      return (
        <svg viewBox="0 0 48 48" fill="none" width={40} height={40}>
          <rect x="6" y="14" width="36" height="28" rx="3"
            stroke="currentColor" strokeWidth="2.5" />
          <path d="M16 14 V10 C16 8 32 8 32 10 V14"
            stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
          <line x1="6" y1="26" x2="42" y2="26"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <rect x="20" y="26" width="8" height="8"
            stroke="currentColor" strokeWidth="2" />
        </svg>
      )
    case 'automation':
      return (
        <svg viewBox="0 0 48 48" fill="none" width={40} height={40}>
          <rect x="10" y="10" width="12" height="12" rx="2"
            stroke="currentColor" strokeWidth="2.5" />
          <rect x="26" y="10" width="12" height="12" rx="2"
            stroke="currentColor" strokeWidth="2.5" />
          <rect x="10" y="26" width="12" height="12" rx="2"
            stroke="currentColor" strokeWidth="2.5" />
          <rect x="26" y="26" width="12" height="12" rx="2"
            stroke="currentColor" strokeWidth="2.5" />
          <line x1="22" y1="16" x2="26" y2="16"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="16" y1="22" x2="16" y2="26"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="32" y1="22" x2="32" y2="26"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="22" y1="32" x2="26" y2="32"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    case 'consult':
      return (
        <svg viewBox="0 0 48 48" fill="none" width={40} height={40}>
          <circle cx="18" cy="16" r="8" stroke="currentColor" strokeWidth="2.5" />
          <path d="M6 40 C6 33 11 28 18 28 C25 28 30 33 30 40"
            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="34" y1="20" x2="42" y2="20"
            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="34" y1="26" x2="42" y2="26"
            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="34" y1="32" x2="38" y2="32"
            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      )
    default: return null
  }
}

function PrimeServices() {
  return (
    <section className={styles.section} id="services">
      <div className={styles.header}>
        <div className={styles.label}>Our Services</div>
        <h2 className={styles.title}>Three Core Service Lines</h2>
        <p className={styles.subtitle}>
          Everything your business needs to harness technology
          for competitive advantage.
        </p>
      </div>

      <div className={styles.grid}>
        {services.map((service, i) => (
          <div
            key={service.id}
            className={styles.card}
            style={{ '--svc-color': service.color }}
          >
            <div className={styles.cardNumber}>0{i + 1}</div>
            <div className={styles.iconWrap} style={{ color: service.color, background: `${service.color}12` }}>
              <ServiceIcon icon={service.icon} />
            </div>
            <h3 className={styles.cardTitle}>{service.title}</h3>
            <p className={styles.cardDesc}>{service.description}</p>
            <ul className={styles.features}>
              {service.features.map((f, j) => (
                <li key={j} className={styles.featureItem}>
                  <svg viewBox="0 0 16 16" fill="none"
                    stroke={service.color} strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round"
                    width={13} height={13}>
                    <path d="M13 4L6 11 3 8" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
            <a href="/contact" className={styles.cardBtn}
              style={{ color: service.color, borderColor: `${service.color}40` }}>
              Get Started
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                width={14} height={14}>
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>
            <div className={styles.cardBar} style={{ background: service.color }} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default PrimeServices