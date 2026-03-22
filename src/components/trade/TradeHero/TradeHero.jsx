import { tradeHero } from '../../../data/tradeConsultation'
import styles from './TradeHero.module.css'

function TradeHero() {
  return (
    <section className={styles.hero}>
      <div
        className={styles.bg}
        style={{ backgroundImage: `url(${tradeHero.image})` }}
      />
      <div className={styles.overlay} />
      <div className={styles.content}>
        <span className={styles.tag}>{tradeHero.tag}</span>
        <h1 className={styles.title} style={{ whiteSpace: 'pre-line' }}>
          {tradeHero.title}
        </h1>
        <p className={styles.subtitle}>{tradeHero.subtitle}</p>
        <div className={styles.actions}>
          <a href="#services" className={styles.btnPrimary}>
            Explore Services
            <span className={styles.btnCircle}>
              <svg viewBox="0 0 24 24" fill="none" stroke="white"
                strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                width={13} height={13}>
                <line x1="7" y1="17" x2="17" y2="7"/>
                <polyline points="7 7 17 7 17 17"/>
              </svg>
            </span>
          </a>
          <a href="/contact" className={styles.btnOutline}>Book a Consultation</a>
        </div>
        <div className={styles.breadcrumb}>
          <a href="/" className={styles.breadLink}>Home</a>
          <span className={styles.sep}>/</span>
          <a href="/services" className={styles.breadLink}>Services</a>
          <span className={styles.sep}>/</span>
          <span className={styles.breadActive}>Trade Consultation</span>
        </div>
      </div>
    </section>
  )
}

export default TradeHero