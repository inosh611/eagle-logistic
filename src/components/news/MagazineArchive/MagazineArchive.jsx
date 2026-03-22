import { useState } from 'react'
import { magazineIssues } from '../../../data/news'
import styles from './MagazineArchive.module.css'

function MagazineArchive() {
  const [flipped, setFlipped] = useState(null)

  return (
    <section className={styles.section} id="magazine">
      <div className={styles.header}>
        <div className={styles.label}>Magazine Archive</div>
        <h2 className={styles.title}>Supply Chain Magazine</h2>
        <p className={styles.subtitle}>
          Eagle Logistic's quarterly publication for supply chain professionals —
          featuring industry insights, regulatory updates and expert interviews.
        </p>
      </div>

      <div className={styles.grid}>
        {magazineIssues.map(issue => (
          <div
            key={issue.id}
            className={`${styles.flipCard} ${flipped === issue.id ? styles.flipped : ''}`}
            onClick={() => setFlipped(flipped === issue.id ? null : issue.id)}
          >
            {/* Front */}
            <div className={styles.flipFront}>
              {issue.featured && (
                <div className={styles.latestBadge}>Latest Issue</div>
              )}
              <div className={styles.coverWrap}>
                <img src={issue.cover} alt={issue.issue} />
                <div className={styles.coverOverlay}>
                  <div className={styles.coverTitle}>{issue.title}</div>
                  <div className={styles.coverIssue}>{issue.issue}</div>
                </div>
              </div>
              <div className={styles.frontInfo}>
                <div className={styles.frontIssue}>{issue.issue}</div>
                <div className={styles.frontPages}>{issue.pages} pages</div>
                <div className={styles.flipHint}>Click to preview →</div>
              </div>
            </div>

            {/* Back */}
            <div className={styles.flipBack}>
              <div className={styles.backIssue}>{issue.issue}</div>
              <h3 className={styles.backTitle}>{issue.title}</h3>
              <p className={styles.backDesc}>{issue.description}</p>
              <div className={styles.backMeta}>
                <span>{issue.pages} pages</span>
                <span>Quarterly</span>
              </div>
              <div className={styles.backActions}>
                <a
                  href={issue.pdfUrl}
                  className={styles.downloadBtn}
                  onClick={e => e.stopPropagation()}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                    width={16} height={16}>
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Read / Download
                </a>
                <button
                  className={styles.closeBtn}
                  onClick={e => { e.stopPropagation(); setFlipped(null) }}
                >
                  ✕
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default MagazineArchive