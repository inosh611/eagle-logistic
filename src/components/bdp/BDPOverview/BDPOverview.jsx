import { bdpOverview } from '../../../data/bdp'
import styles from './BDPOverview.module.css'

function BDPOverview() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        {/* Left */}
        <div className={styles.left}>
          <div className={styles.label}>The Partnership</div>
          <h2 className={styles.title}>{bdpOverview.title}</h2>
          <p className={styles.desc}>{bdpOverview.description}</p>
          <a href="#network" className={styles.btn}>
            Explore the Network
            <span className={styles.btnCircle}>
              <svg viewBox="0 0 24 24" fill="none" stroke="white"
                strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                width={14} height={14}>
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </span>
          </a>
        </div>

        {/* Right stats */}
        <div className={styles.right}>
          <div className={styles.statsGrid}>
            {bdpOverview.stats.map(stat => (
              <div key={stat.id} className={styles.statCard}>
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
          <div className={styles.imgWrap}>
            <img
              src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=900&q=80"
              alt="Global Logistics Network"
            />
            <div className={styles.imgOverlay}>
              <span className={styles.imgTag}>PSA BDP Global Partner</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default BDPOverview