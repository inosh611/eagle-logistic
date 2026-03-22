import { primeHero } from '../../../data/prime'
import styles from './PrimeHero.module.css'

function PrimeHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bg} />
      <div className={styles.overlay} />

      {/* Animated grid lines */}
      <div className={styles.gridLines}>
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className={styles.gridLine} />
        ))}
      </div>

      <div className={styles.content}>
        <div className={styles.partnerBadge}>
          <span className={styles.badgeDot} />
          AI & Technology Division
        </div>
        <span className={styles.tag}>{primeHero.tag}</span>
        <h1 className={styles.title} style={{ whiteSpace: 'pre-line' }}>
          {primeHero.title}
        </h1>
        <p className={styles.subtitle}>{primeHero.subtitle}</p>
        <div className={styles.actions}>
          <a href="#services" className={styles.btnPrimary}>
            Explore Solutions
            <span className={styles.btnCircle}>
              <svg viewBox="0 0 24 24" fill="none" stroke="white"
                strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                width={14} height={14}>
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </span>
          </a>
          <a href="/contact" className={styles.btnOutline}>
            Book a Consultation
          </a>
        </div>
        <div className={styles.breadcrumb}>
          <a href="/" className={styles.breadcrumbLink}>Home</a>
          <span className={styles.sep}>/</span>
          <span className={styles.breadcrumbActive}>Prime Business Solutions</span>
        </div>
      </div>

      {/* Floating tech cards */}
      <div className={styles.floatingCards}>
        <div className={styles.floatCard}>
          <div className={styles.floatCardIcon}>🤖</div>
          <div className={styles.floatCardText}>AI Analytics</div>
        </div>
        <div className={`${styles.floatCard} ${styles.floatCard2}`}>
          <div className={styles.floatCardIcon}>⚡</div>
          <div className={styles.floatCardText}>Automation</div>
        </div>
        <div className={`${styles.floatCard} ${styles.floatCard3}`}>
          <div className={styles.floatCardIcon}>☁️</div>
          <div className={styles.floatCardText}>Cloud</div>
        </div>
      </div>
    </section>
  )
}

export default PrimeHero