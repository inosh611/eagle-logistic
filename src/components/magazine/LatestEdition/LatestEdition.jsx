import { useState } from 'react'
import { magazineHero, magazineAbout, magazineIssues } from '../../../data/magazine'
import styles from './LatestEdition.module.css'

function LatestEdition() {
  const latest = magazineIssues.find(m => m.isLatest)
  const [flipLoaded, setFlipLoaded] = useState(false)

  return (
    <section className={styles.section} id="latest">

      {/* Flipbook viewer */}
      <div className={styles.flipbookSection}>
        <div className={styles.flipbookHeader}>
          <div className={styles.label}>Latest Magazine</div>
          <h2 className={styles.flipbookTitle}>Read the Latest Edition Online</h2>
          <p className={styles.flipbookSub}>
            Flip through the pages of our latest edition — featuring exclusive
            interviews, industry insights and supply chain innovations.
          </p>
        </div>

        <div className={styles.flipbookWrap}>
          {!flipLoaded && (
            <div className={styles.flipPlaceholder}>
              <div className={styles.flipPlaceholderIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="white"
                  strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                  width={40} height={40}>
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                </svg>
              </div>
              <div className={styles.flipPlaceholderTitle}>E-Visible Magazine</div>
              <div className={styles.flipPlaceholderSub}>
                Replace the iframe src with your AnyFlip URL
              </div>
              <button
                className={styles.flipLoadBtn}
                onClick={() => setFlipLoaded(true)}
              >
                Load Flipbook
              </button>
            </div>
          )}
          {flipLoaded && (
            <iframe
              allowFullScreen
              scrolling="no"
              src={magazineHero.anyflipUrl}
              width="100%"
              height="620px"
              frameBorder="0"
              title="E-Visible Supply Chain Magazine"
              className={styles.flipbook}
            />
          )}
        </div>
      </div>

      {/* Latest edition detail */}
      <div className={styles.editionDetail} id="edition-detail">
        <div className={styles.editionInner}>

          {/* Cover preview */}
          <div className={styles.coverWrap}>
            <div className={styles.coverCard}>
              <div className={styles.coverImg}>
                <img
                  src={latest?.image || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80'}
                  alt="Latest Edition Cover"
                  loading="lazy"
                />
                <div className={styles.coverGradient}/>
              </div>
              <div className={styles.coverBranding}>
                <div className={styles.coverMagName}>e-VISIBLE</div>
                <div className={styles.coverTagline}>SUPPLY CHAIN MAGAZINE</div>
              </div>
              <div className={styles.coverBottom}>
                <div className={styles.coverEdition}>{latest?.edition}</div>
                <div className={styles.coverDate}>{latest?.date}</div>
              </div>
            </div>

            {/* Decorative shadow covers */}
            <div className={styles.coverShadow1} />
            <div className={styles.coverShadow2} />
          </div>

          {/* Edition info */}
          <div className={styles.editionInfo}>
            <div className={styles.editionLabel}>Latest Edition</div>
            <h2 className={styles.editionTitle}>{magazineAbout.title}</h2>
            <p className={styles.editionDesc}>{magazineAbout.description}</p>

            {latest && (
              <div className={styles.coverPersonCard}>
                <div className={styles.coverPersonAvatar}>
                  <img src={latest.image} alt={latest.coverPerson} loading="lazy"/>
                </div>
                <div>
                  <div className={styles.coverPersonName}>{latest.coverPerson}</div>
                  <div className={styles.coverPersonTitle}>{latest.coverPersonTitle}</div>
                </div>
              </div>
            )}

            <div className={styles.editionActions}>
              <button
                onClick={() => {
                  setFlipLoaded(true)
                  document.getElementById('latest')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className={styles.editionBtnPrimary}
              >
                Read Online
                <span className={styles.editionBtnCircle}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="white"
                    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                    width={13} height={13}>
                    <line x1="7" y1="17" x2="17" y2="7"/>
                    <polyline points="7 7 17 7 17 17"/>
                  </svg>
                </span>
              </button>
              <a href="#" className={styles.editionBtnOutline}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  width={16} height={16}>
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download PDF
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default LatestEdition