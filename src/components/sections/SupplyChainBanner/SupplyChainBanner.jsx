import { supplyStats, supplyChecklist } from '../../../data/supplyChain'
import styles from './SupplyChainBanner.module.css'

function SupplyChainBanner() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        {/* Left */}
        <div className={styles.left}>
          <div className={styles.label}>Our Experience</div>
          <h2 className={styles.title}>
            Leader In Supply<br />Chain Storage &amp;<br />Distribution
          </h2>
          <div className={styles.checklist}>
            {supplyChecklist.map((item, i) => (
              <div key={i} className={styles.checkItem}>
                <span className={styles.checkBox}>
                  <svg viewBox="0 0 12 12" fill="none" stroke="#2563eb" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round" width={11} height={11}>
                    <polyline points="2 6 5 9 10 3" />
                  </svg>
                </span>
                {item}
              </div>
            ))}
          </div>
          <a href="#" className={styles.moreBtn}>
            More Details
            <span className={styles.moreCircle}>
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round" width={14} height={14}>
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </span>
          </a>
        </div>

        {/* Center image */}
        <div className={styles.centerImg}>
          <img
            src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=900&q=80"
            alt="Cargo ship"
          />
          <div className={styles.imgFade} />
        </div>

        {/* Right stats */}
        <div className={styles.right}>
          {supplyStats.map((stat, i) => (
            <div
              key={stat.id}
              className={`${styles.stat} ${i > 0 ? styles.statBorder : ''}`}
            >
              <div className={styles.statRow}>
                <svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)"
                  strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                  width={28} height={28}>
                  <line x1="12" y1="19" x2="12" y2="5" />
                  <polyline points="5 12 12 5 19 12" />
                </svg>
                <span className={styles.statValue}>{stat.value}</span>
              </div>
              <p className={styles.statDesc}>{stat.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default SupplyChainBanner