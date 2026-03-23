import { pressHero } from '../../../data/press'
import styles from './PressHero.module.css'

function PressHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bg} />
      <div className={styles.overlay} />
      <div className={styles.content}>
        <span className={styles.tag}>{pressHero.tag}</span>
        <h1 className={styles.title} style={{ whiteSpace: 'pre-line' }}>
          {pressHero.title}
        </h1>
        <p className={styles.subtitle}>{pressHero.subtitle}</p>
        {/* <div className={styles.actions}>
          <a href="#press-grid" className={styles.btnPrimary}>
            Read Latest News
            <span className={styles.btnCircle}>
              <svg viewBox="0 0 24 24" fill="none" stroke="white"
                strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                width={13} height={13}>
                <line x1="7" y1="17" x2="17" y2="7"/>
                <polyline points="7 7 17 7 17 17"/>
              </svg>
            </span>
          </a>
          <a href="/contact" className={styles.btnOutline}>Media Enquiries</a>
        </div> */}
        <div className={styles.breadcrumb}>
          <a href="/" className={styles.breadLink}>Home</a>
          <span className={styles.sep}>/</span>
          <span className={styles.breadActive}>Press & Media</span>
        </div>
      </div>
    </section>
  )
}

export default PressHero