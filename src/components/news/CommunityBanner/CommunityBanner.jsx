import { communityStats } from '../../../data/news'
import styles from './CommunityBanner.module.css'

function CommunityBanner() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <div className={styles.label}>Supply Chain Community</div>
          <h2 className={styles.title}>
            Sri Lanka's Largest Supply<br />Chain Professional Network
          </h2>
          <p className={styles.desc}>
            Join over 500 supply chain, logistics and trade professionals
            who connect, learn and grow through Eagle Logistic's community
            platform, events and magazine.
          </p>
          <a href="/contact" className={styles.joinBtn}>
            Join the Community
            <span className={styles.joinCircle}>
              <svg viewBox="0 0 24 24" fill="none" stroke="white"
                strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                width={14} height={14}>
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </span>
          </a>
        </div>

        <div className={styles.stats}>
          {communityStats.map(stat => (
            <div key={stat.id} className={styles.statCard}>
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CommunityBanner