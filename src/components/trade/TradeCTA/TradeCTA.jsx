import styles from './TradeCTA.module.css'

function TradeCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <div className={styles.tag}>Ready to Optimize?</div>
          <h2 className={styles.title}>
            Let's review your logistics<br />and find the savings.
          </h2>
          <p className={styles.desc}>
            Book a free consultation with our trade specialists.
            We'll audit your current operations and show you exactly
            where you can save — no commitment required.
          </p>
        </div>
        <div className={styles.right}>
          <a href="/contact" className={styles.btnPrimary}>
            Book Free Consultation
            <span className={styles.btnCircle}>
              <svg viewBox="0 0 24 24" fill="none" stroke="white"
                strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                width={14} height={14}>
                <line x1="7" y1="17" x2="17" y2="7"/>
                <polyline points="7 7 17 7 17 17"/>
              </svg>
            </span>
          </a>
          <a href="/contact" className={styles.btnOutline}>
            Call Us Directly
          </a>
          <div className={styles.note}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              width={14} height={14}>
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
            Response within 24 hours
          </div>
        </div>
      </div>
    </section>
  )
}

export default TradeCTA