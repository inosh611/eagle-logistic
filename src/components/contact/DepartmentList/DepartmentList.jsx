import { departments } from '../../../data/contact'
import styles from './DepartmentList.module.css'

function DeptIcon({ icon }) {
  switch (icon) {
    case 'mail':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          width={22} height={22}>
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      )
    case 'ship':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          width={22} height={22}>
          <path d="M4 16l8-8 8 8" />
          <path d="M2 20 Q12 23 22 20" />
          <line x1="12" y1="8" x2="12" y2="20" />
          <line x1="7" y1="13" x2="17" y2="13" />
        </svg>
      )
    case 'clipboard':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          width={22} height={22}>
          <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
          <rect x="9" y="3" width="6" height="4" rx="2" />
          <line x1="9" y1="12" x2="15" y2="12" />
          <line x1="9" y1="16" x2="12" y2="16" />
        </svg>
      )
    case 'people':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          width={22} height={22}>
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    case 'cpu':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          width={22} height={22}>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <rect x="9" y="9" width="6" height="6" />
          <line x1="9" y1="1" x2="9" y2="4" />
          <line x1="15" y1="1" x2="15" y2="4" />
          <line x1="9" y1="20" x2="9" y2="23" />
          <line x1="15" y1="20" x2="15" y2="23" />
          <line x1="20" y1="9" x2="23" y2="9" />
          <line x1="20" y1="14" x2="23" y2="14" />
          <line x1="1" y1="9" x2="4" y2="9" />
          <line x1="1" y1="14" x2="4" y2="14" />
        </svg>
      )
    case 'code':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          width={22} height={22}>
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      )
    default: return null
  }
}

function DepartmentList() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className={styles.label}>Direct Inquiries</div>
        <h2 className={styles.title}>Contact the Right Team Directly</h2>
        <p className={styles.subtitle}>
          Skip the queue — send your inquiry directly to the specialist
          team that handles your type of request.
        </p>
      </div>

      <div className={styles.grid}>
        {departments.map(dept => (
          <a
            key={dept.id}
            href={`mailto:${dept.email}`}
            className={styles.card}
          >
            <div className={styles.cardTop}>
              <div className={styles.iconWrap}>
                <DeptIcon icon={dept.icon} />
              </div>
              <div className={styles.emailTag}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  width={12} height={12}>
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </div>
            </div>
            <h3 className={styles.cardName}>{dept.name}</h3>
            <p className={styles.cardDesc}>{dept.description}</p>
            <div className={styles.cardEmail}>{dept.email}</div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default DepartmentList