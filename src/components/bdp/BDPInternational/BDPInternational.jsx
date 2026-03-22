import { bdpInternational } from '../../../data/bdp'
import styles from './BDPInternational.module.css'

function BDPInternational() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        {/* Left — mosaic grid */}
        <div className={styles.left}>
          <div className={styles.mosaic}>
            <div className={styles.mosaicCol1}>
              <div className={styles.cell}>
                <img src={bdpInternational.images[0]} alt="" loading="lazy"/>
                <div className={styles.cellOverlay}/>
              </div>
              <div className={styles.cell}>
                <img src={bdpInternational.images[3]} alt="" loading="lazy"/>
                <div className={styles.cellOverlay}/>
              </div>
            </div>
            <div className={styles.mosaicColMid}>
              <div className={`${styles.cell} ${styles.cellTall}`}>
                <img src={bdpInternational.images[1]} alt="" loading="lazy"/>
                <div className={styles.cellOverlay}/>
              </div>
              <div className={styles.cell}>
                <img src={bdpInternational.images[4]} alt="" loading="lazy"/>
                <div className={styles.cellOverlay}/>
              </div>
            </div>
            <div className={styles.mosaicCol1}>
              <div className={styles.cell}>
                <img src={bdpInternational.images[2]} alt="" loading="lazy"/>
                <div className={styles.cellOverlay}/>
              </div>
              <div className={styles.cell}>
                <img src={bdpInternational.images[5]} alt="" loading="lazy"/>
                <div className={styles.cellOverlay}/>
              </div>
            </div>
          </div>

          {/* 50 years badge */}
          <div className={styles.yearsBadge}>
            <div className={styles.yearsNum}>5+</div>
            <div className={styles.yearsLabel}>Decades of<br/>Global Logistics</div>
          </div>
        </div>

        {/* Right — content */}
        <div className={styles.right}>

          {/* Header */}
          <div className={styles.header}>
            <div className={styles.label}>Global Logistics Leader</div>
            <h2 className={styles.title}>{bdpInternational.title}</h2>
            <a
              href={`https://${bdpInternational.website}`}
              target="_blank"
              rel="noreferrer"
              className={styles.website}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                width={14} height={14}>
                <circle cx="12" cy="12" r="10"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
              {bdpInternational.website}
            </a>
          </div>

          {/* Intro text */}
          <p className={styles.intro}>{bdpInternational.intro}</p>

          {/* Approach */}
          <div className={styles.approachCard}>
            <div className={styles.approachIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                width={18} height={18}>
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <div>
              <div className={styles.approachTitle}>The BDP Approach</div>
              <p className={styles.approachText}>{bdpInternational.approach}</p>
            </div>
          </div>

          {/* Fast-track list */}
          <div className={styles.fastTrack}>
            <div className={styles.fastTrackHeader}>
              <div className={styles.fastTrackDot}/>
              BDP helps fast-track businesses by:
            </div>
            <div className={styles.fastTrackList}>
              {bdpInternational.fastTrack.map((item, i) => (
                <div key={i} className={styles.fastTrackItem}>
                  <div className={styles.fastTrackNum}>{i + 1}</div>
                  <span className={styles.fastTrackText}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Closing */}
          <div className={styles.closing}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              width={16} height={16}>
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
            </svg>
            <p>{bdpInternational.closing}</p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default BDPInternational