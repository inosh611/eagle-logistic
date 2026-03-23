import styles from './CommunityCTA.module.css'

function CommunityCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        {/* Left */}
        <div className={styles.left}>
          <div className={styles.tag}>Be Part of Something Bigger</div>
          <h2 className={styles.title}>
            Join Sri Lanka's #1<br />Supply Chain Community
          </h2>
          <p className={styles.desc}>
            Whether you're a seasoned logistics professional, a fresh graduate
            or a company looking to connect with the right partners — the Eagle
            Supply Chain Network has a place for you.
          </p>
        </div>

        {/* Right */}
        <div className={styles.right}>
          <div className={styles.cards}>
            <div className={styles.card}>
              <div className={styles.cardIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="white"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  width={20} height={20}>
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <div className={styles.cardText}>
                <div className={styles.cardTitle}>Professional Network</div>
                <div className={styles.cardSub}>Connect with 500+ professionals</div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="white"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  width={20} height={20}>
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              </div>
              <div className={styles.cardText}>
                <div className={styles.cardTitle}>Industry Events</div>
                <div className={styles.cardSub}>50+ events hosted annually</div>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="white"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  width={20} height={20}>
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                </svg>
              </div>
              <div className={styles.cardText}>
                <div className={styles.cardTitle}>Magazine Access</div>
                <div className={styles.cardSub}>12+ quarterly issues</div>
              </div>
            </div>
          </div>

          <div className={styles.ctaActions}>
            <a href="/contact" className={styles.btnPrimary}>
              Join the Community
              <span className={styles.btnCircle}>
                <svg viewBox="0 0 24 24" fill="none" stroke="white"
                  strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                  width={13} height={13}>
                  <line x1="7" y1="17" x2="17" y2="7"/>
                  <polyline points="7 7 17 7 17 17"/>
                </svg>
              </span>
            </a>
            <a href="/news" className={styles.btnOutline}>
              View Magazine
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default CommunityCTA