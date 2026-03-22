import styles from './AboutCTA.module.css'

function AboutCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.text}>
          <h2 className={styles.title}>
            Ready to partner with<br />Sri Lanka's leading logistics team?
          </h2>
          <p className={styles.desc}>
            Whether you need freight forwarding, customs consultancy, or a full
            BPO solution — we are ready to build something great together.
          </p>
        </div>
        <div className={styles.actions}>
          <a href="/contact" className={styles.btnPrimary}>
            Get in Touch
            <span className={styles.btnCircle}>
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round" width={14} height={14}>
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </span>
          </a>
          <a href="/services" className={styles.btnOutline}>
            Explore Services
          </a>
        </div>
      </div>
    </section>
  )
}

export default AboutCTA