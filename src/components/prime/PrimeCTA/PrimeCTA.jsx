import styles from './PrimeCTA.module.css'

function PrimeCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.bg} />
      <div className={styles.inner}>
        <div className={styles.text}>
          <div className={styles.tag}>Ready to Think Big?</div>
          <h2 className={styles.title}>
            Let's Build Something Extraordinary Together
          </h2>
          <p className={styles.desc}>
            Book a free consultation with our technology team and discover
            how Prime Business Solutions can transform your business.
          </p>
        </div>
        <div className={styles.actions}>
          <a href="/contact" className={styles.btnPrimary}>
            Book Free Consultation
            <span className={styles.btnCircle}>
              <svg viewBox="0 0 24 24" fill="none" stroke="white"
                strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                width={14} height={14}>
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </span>
          </a>
          <a href="/services" className={styles.btnOutline}>
            View All Services
          </a>
        </div>
      </div>
    </section>
  )
}

export default PrimeCTA