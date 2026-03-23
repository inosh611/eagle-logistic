import { magazineHero } from '../../../data/magazine'
import styles from './MagazineHero.module.css'

function MagazineHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bg} />
      <div className={styles.overlay} />
      <div className={styles.content}>
        <span className={styles.tag}>{magazineHero.tag}</span>
        <h1 className={styles.title} style={{ whiteSpace: 'pre-line' }}>
          {magazineHero.title}
        </h1>
        <p className={styles.subtitle}>{magazineHero.subtitle}</p>
        {/* <div className={styles.actions}>
          <a href="#latest" className={styles.btnPrimary}>
            Read Latest Edition
            <span className={styles.btnCircle}>
              <svg viewBox="0 0 24 24" fill="none" stroke="white"
                strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                width={13} height={13}>
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </span>
          </a>
          <a href="#archive" className={styles.btnOutline}>Browse All Editions</a>
        </div> */}
        <div className={styles.breadcrumb}>
          <a href="/" className={styles.breadLink}>Home</a>
          <span className={styles.sep}>/</span>
          <a href="/news" className={styles.breadLink}>News</a>
          <span className={styles.sep}>/</span>
          <span className={styles.breadActive}>E-Visible Magazine</span>
        </div>
      </div>

      {/* Floating magazine badge */}
      <div className={styles.floatBadge}>
        <div className={styles.floatMagName}>e-VISIBLE</div>
        <div className={styles.floatTagline}>Supply Chain Magazine</div>
        <div className={styles.floatDivider} />
        <div className={styles.floatEdition}>19th Edition</div>
        <div className={styles.floatYear}>Est. 2014</div>
      </div>
    </section>
  )
}

export default MagazineHero