import { bdpHero } from '../../../data/bdp'
import styles from './BDPHero.module.css'

function BDPHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bg} />
      <div className={styles.overlay} />
      <div className={styles.content}>
        {/* <div className={styles.partnerBadge}>
          <span className={styles.badgeDot} />
          Strategic Partnership
        </div>
        <span className={styles.tag}>{bdpHero.tag}</span> */}
        <h1 className={styles.title} style={{ whiteSpace: 'pre-line' }}>
          {bdpHero.title}
        </h1>
        <p className={styles.subtitle}>{bdpHero.subtitle}</p>
        {/* <div className={styles.logos}>
          <div className={styles.logoBox}>
            <svg viewBox="0 0 36 36" fill="none" width={28} height={28}>
              <rect width="36" height="36" rx="8" fill="#2563eb" />
              <path d="M8 26 L18 8 L28 26 Z" stroke="white" strokeWidth="2.5" strokeLinejoin="round" />
              <path d="M12 20 H24" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span className={styles.logoText}>Eagle Logistic</span>
          </div>
          <div className={styles.logoDivider}>×</div>
          <div className={styles.logoBox}>
            <div className={styles.bdpLogo}>PSA BDP</div>
          </div>
        </div> */}
        <div className={styles.breadcrumb}>
          <a href="/" className={styles.breadcrumbLink}>Home</a>
          <span className={styles.sep}>/</span>
          <span className={styles.breadcrumbActive}>BDP Partnership</span>
        </div>
      </div>
    </section>
  )
}

export default BDPHero