import { newsHero } from '../../../data/news'
import styles from './NewsHero.module.css'

function NewsHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bg} />
      <div className={styles.overlay} />
      <div className={styles.content}>
        <span className={styles.tag}>{newsHero.tag}</span>
        <h1 className={styles.title} style={{ whiteSpace: 'pre-line' }}>
          {newsHero.title}
        </h1>
        <p className={styles.subtitle}>{newsHero.subtitle}</p>
        <div className={styles.actions}>
          <a href="#articles" className={styles.btnPrimary}>
            Read Latest Articles
            <span className={styles.btnCircle}>
              <svg viewBox="0 0 24 24" fill="none" stroke="white"
                strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                width={14} height={14}>
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </span>
          </a>
          <a href="#magazine" className={styles.btnOutline}>
            Magazine Archive
          </a>
        </div>
        <div className={styles.breadcrumb}>
          <a href="/" className={styles.breadcrumbLink}>Home</a>
          <span className={styles.sep}>/</span>
          <span className={styles.breadcrumbActive}>News & Insights</span>
        </div>
      </div>
    </section>
  )
}

export default NewsHero