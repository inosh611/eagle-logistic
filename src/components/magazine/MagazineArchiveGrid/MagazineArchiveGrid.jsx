import { useState } from 'react'
import { magazineIssues, themeColors } from '../../../data/magazine'
import styles from './MagazineArchiveGrid.module.css'

function MagazineCoverCard({ issue, onRead }) {
  return (
    <div className={styles.card} onClick={() => onRead(issue)}>
      {/* Cover image */}
      <div className={styles.cardCover}>
        <img src={issue.image} alt={issue.edition} loading="lazy"/>
        <div className={styles.cardOverlay}/>

        {/* Branding overlay */}
        <div className={styles.cardBranding}>
          <div className={styles.cardMagName}>e-VISIBLE</div>
          <div className={styles.cardMagTagline}>SUPPLY CHAIN MAGAZINE</div>
        </div>

        {/* Theme badge */}
        <div
          className={styles.cardTheme}
          style={{ background: themeColors[issue.theme] || 'var(--accent)' }}
        >
          {issue.theme}
        </div>

        {/* Latest badge */}
        {issue.isLatest && (
          <div className={styles.cardLatest}>Latest</div>
        )}

        {/* Hover overlay */}
        <div className={styles.cardHoverOverlay}>
          <div className={styles.cardReadBtn}>
            <svg viewBox="0 0 24 24" fill="none" stroke="white"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              width={20} height={20}>
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
            </svg>
            Read Online
          </div>
        </div>
      </div>

      {/* Card info */}
      <div className={styles.cardInfo}>
        <div className={styles.cardEdition}>{issue.edition}</div>
        <div className={styles.cardDate}>{issue.date}</div>
        <div className={styles.cardPerson}>{issue.coverPerson}</div>
      </div>
    </div>
  )
}

function MagazineArchiveGrid() {
  const [selectedIssue, setSelectedIssue] = useState(null)

  const handleRead = (issue) => {
    setSelectedIssue(issue)
    setTimeout(() => {
      document.getElementById('flipbook-modal')?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  const archives = magazineIssues.filter(m => !m.isLatest)

  return (
    <section className={styles.section} id="archive">
      <div className={styles.header}>
        <div className={styles.label}>Magazine Archive</div>
        <h2 className={styles.title}>All Editions</h2>
        <p className={styles.subtitle}>
          Browse every issue of the e-VISIBLE Supply Chain Magazine.
          Click any cover to read it online.
        </p>
      </div>

      {/* Archive grid */}
      <div className={styles.grid}>
        {archives.map(issue => (
          <MagazineCoverCard
            key={issue.id}
            issue={issue}
            onRead={handleRead}
          />
        ))}
      </div>

      {/* Selected issue flipbook modal */}
      {selectedIssue && (
        <div className={styles.modal} id="flipbook-modal">
          <div className={styles.modalHeader}>
            <div className={styles.modalTitle}>
              {selectedIssue.edition} — {selectedIssue.date}
            </div>
            <button
              className={styles.modalClose}
              onClick={() => setSelectedIssue(null)}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                width={18} height={18}>
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
              Close
            </button>
          </div>
          <div className={styles.modalFlipbook}>
            {selectedIssue.anyflipUrl !== '#' ? (
              <iframe
                allowFullScreen
                scrolling="no"
                src={selectedIssue.anyflipUrl}
                width="100%"
                height="580px"
                frameBorder="0"
                title={selectedIssue.edition}
              />
            ) : (
              <div className={styles.comingSoon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="white"
                  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                  width={36} height={36}>
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                </svg>
                <div className={styles.comingSoonTitle}>
                  {selectedIssue.edition} — Coming Soon Online
                </div>
                <div className={styles.comingSoonSub}>
                  This edition will be available to read online shortly.
                  Contact us to request a copy.
                </div>
                <a href="/contact" className={styles.comingSoonBtn}>
                  Request a Copy
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  )
}

export default MagazineArchiveGrid