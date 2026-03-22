import styles from './ServicesCTA.module.css'

function ServicesCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>
          Ready to streamline your logistics?
        </h2>
        <p className={styles.desc}>
          Talk to our team today and get a free consultation tailored
          to your specific supply chain needs.
        </p>
        <div className={styles.actions}>
          <a href="/contact" className={styles.btnPrimary}>
            Get a Free Consultation
            <span className={styles.circle}>
              <svg viewBox="0 0 24 24" fill="none" stroke="white"
                strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                width={14} height={14}>
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </span>
          </a>
          <a href="/services" className={styles.btnOutline}>
            All Services
          </a>
        </div>
      </div>
    </section>
  )
}

export default ServicesCTA