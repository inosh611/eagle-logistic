import { communityHero } from '../../../data/supplyChainCommunity'
import styles from './CommunityHero.module.css'

function CommunityHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bg} />
      <div className={styles.overlay} />
      <div className={styles.content}>
        <span className={styles.tag}>{communityHero.tag}</span>
        <h1 className={styles.title} style={{ whiteSpace: 'pre-line' }}>
          {communityHero.title}
        </h1>
        <p className={styles.subtitle}>{communityHero.subtitle}</p>
        <div className={styles.actions}>
          <a href="#forums" className={styles.btnPrimary}>
            Explore Community
            <span className={styles.btnCircle}>
              <svg viewBox="0 0 24 24" fill="none" stroke="white"
                strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                width={13} height={13}>
                <line x1="7" y1="17" x2="17" y2="7"/>
                <polyline points="7 7 17 7 17 17"/>
              </svg>
            </span>
          </a>
          <a href="/contact" className={styles.btnOutline}>Join the Network</a>
        </div>
        <div className={styles.breadcrumb}>
          <a href="/" className={styles.breadLink}>Home</a>
          <span className={styles.sep}>/</span>
          <span className={styles.breadActive}>Supply Chain Community</span>
        </div>
      </div>

      {/* Floating community badge */}
      <div className={styles.floatBadge}>
        <div className={styles.floatBadgeNum}>500+</div>
        <div className={styles.floatBadgeLabel}>Professionals<br/>Connected</div>
      </div>
    </section>
  )
}

export default CommunityHero