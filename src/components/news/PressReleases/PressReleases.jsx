import { pressReleases } from '../../../data/news'
import styles from './PressReleases.module.css'

function PressReleases() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        {/* Left header */}
        <div className={styles.left}>
          <div className={styles.label}>Press Releases</div>
          <h2 className={styles.title}>Latest Company Updates</h2>
          <p className={styles.desc}>
            Official announcements, milestones and news from
            Eagle Logistic Services.
          </p>
          <a href="/contact" className={styles.mediaBtn}>
            Media Enquiries
            <span className={styles.mediaBtnCircle}>
              <svg viewBox="0 0 24 24" fill="none" stroke="white"
                strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                width={14} height={14}>
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </span>
          </a>
        </div>

        {/* Right releases */}
        <div className={styles.right}>
          {pressReleases.map((pr, i) => (
            <div key={pr.id} className={styles.release}>
              <div className={styles.releaseDate}>{pr.date}</div>
              <div className={styles.releaseContent}>
                <h3 className={styles.releaseTitle}>{pr.title}</h3>
                <p className={styles.releaseExcerpt}>{pr.excerpt}</p>
                <a href="#" className={styles.releaseLink}>
                  Read Full Release
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                    width={14} height={14}>
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default PressReleases