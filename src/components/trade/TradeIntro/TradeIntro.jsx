import { tradeIntro } from '../../../data/tradeConsultation'
import styles from './TradeIntro.module.css'

function TradeIntro() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        {/* Left */}
        <div className={styles.left}>
          <div className={styles.label}>{tradeIntro.tag}</div>
          <h2 className={styles.title}>{tradeIntro.title}</h2>
          <p className={styles.desc}>{tradeIntro.description}</p>
          <a href="/contact" className={styles.btn}>
            Talk to a Consultant
            <span className={styles.btnCircle}>
              <svg viewBox="0 0 24 24" fill="none" stroke="white"
                strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                width={13} height={13}>
                <line x1="7" y1="17" x2="17" y2="7"/>
                <polyline points="7 7 17 7 17 17"/>
              </svg>
            </span>
          </a>
        </div>

        {/* Right — stats */}
        <div className={styles.right}>
          {/* Big decorative number */}
          <div className={styles.bigNum}>15<span className={styles.bigNumPlus}>+</span></div>
          <div className={styles.bigNumLabel}>Years of Global Trade Experience</div>

          <div className={styles.statsGrid}>
            {tradeIntro.stats.map(stat => (
              <div key={stat.label} className={styles.statCard}>
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

export default TradeIntro