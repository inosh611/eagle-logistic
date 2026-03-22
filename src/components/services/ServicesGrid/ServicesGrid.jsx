import { servicesList } from '../../../data/services'
import styles from './ServicesGrid.module.css'

function ServiceIcon({ icon }) {
  switch (icon) {
    case 'ship':
      return (
        <svg viewBox="0 0 48 48" fill="none" width={48} height={48}>
          <path d="M8 32 L24 12 L40 32" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
          <path d="M4 38 Q24 44 44 38" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="24" y1="12" x2="24" y2="38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="14" y1="26" x2="34" y2="26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    case 'cpu':
      return (
        <svg viewBox="0 0 48 48" fill="none" width={48} height={48}>
          <rect x="14" y="14" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="2.5" />
          <rect x="19" y="19" width="10" height="10" rx="1" stroke="currentColor" strokeWidth="2" />
          <line x1="20" y1="8" x2="20" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="28" y1="8" x2="28" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="20" y1="34" x2="20" y2="40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="28" y1="34" x2="28" y2="40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="8" y1="20" x2="14" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="8" y1="28" x2="14" y2="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="34" y1="20" x2="40" y2="20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="34" y1="28" x2="40" y2="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    case 'clipboard':
      return (
        <svg viewBox="0 0 48 48" fill="none" width={48} height={48}>
          <rect x="10" y="10" width="28" height="34" rx="3" stroke="currentColor" strokeWidth="2.5" />
          <path d="M18 10 C18 7 30 7 30 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="16" y1="22" x2="32" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="16" y1="29" x2="32" y2="29" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="16" y1="36" x2="24" y2="36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    case 'flask':
      return (
        <svg viewBox="0 0 48 48" fill="none" width={48} height={48}>
          <path d="M18 8 L18 24 L8 40 L40 40 L30 24 L30 8 Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
          <line x1="18" y1="8" x2="30" y2="8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="16" y1="28" x2="32" y2="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 3" />
        </svg>
      )
    default: return null
  }
}

function ServicesGrid() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className={styles.label}>Our Services</div>
        <h2 className={styles.title}>Everything Your Supply Chain Needs</h2>
        <p className={styles.subtitle}>
          Four specialist divisions working together to move your cargo, cut your
          costs and keep your business fully compliant.
        </p>
      </div>

      <div className={styles.grid}>
        {servicesList.map((service, i) => (
          <a
            key={service.id}
            href={service.href}
            className={styles.card}
            style={{ '--service-color': service.color }}
          >
            <div className={styles.cardIcon}>
              <ServiceIcon icon={service.icon} />
            </div>
            <div className={styles.cardNumber}>0{i + 1}</div>
            <div className={styles.cardTag}>{service.subtitle}</div>
            <h3 className={styles.cardTitle}>{service.title}</h3>
            <p className={styles.cardDesc}>{service.shortDesc}</p>
            <div className={styles.cardArrow}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                width={18} height={18}>
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default ServicesGrid