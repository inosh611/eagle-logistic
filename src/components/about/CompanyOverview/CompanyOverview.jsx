import { companyOverview } from '../../../data/about'
import styles from './CompanyOverview.module.css'

function CompanyOverview() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        {/* Left text */}
        <div className={styles.left}>
          <div className={styles.label}>Our Story</div>
          <h2 className={styles.title}>
            From a Single Vision to<br />
            <span className={styles.highlight}>Sri Lanka's Leading Logistics Partner</span>
          </h2>
          <p className={styles.desc}>{companyOverview.description}</p>
          <a href="#timeline" className={styles.btn}>
            Our Journey
            <span className={styles.btnCircle}>
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round" width={14} height={14}>
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </span>
          </a>
        </div>

        {/* Right image + stats */}
        <div className={styles.right}>
          <div className={styles.imgWrap}>
            <img
              src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80"
              alt="Eagle Logistic Operations"
            />
            <div className={styles.foundedBadge}>
              <div className={styles.foundedYear}>{companyOverview.founded}</div>
              <div className={styles.foundedLabel}>Est.</div>
            </div>
          </div>

          <div className={styles.statsGrid}>
            {companyOverview.stats.map(stat => (
              <div key={stat.id} className={styles.statCard}>
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default CompanyOverview