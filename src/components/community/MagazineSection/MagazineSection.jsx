import { magazineInfo } from '../../../data/supplyChainCommunity'
import styles from './MagazineSection.module.css'

function MagazineSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        {/* Magazine mock covers */}
        <div className={styles.covers}>
          {[
            { issue: 'Issue 12', quarter: 'Q1 2025', img: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&q=80' },
            { issue: 'Issue 11', quarter: 'Q4 2024', img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&q=80' },
            { issue: 'Issue 10', quarter: 'Q3 2024', img: 'https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=400&q=80' },
          ].map((mag, i) => (
            <div
              key={i}
              className={styles.cover}
              style={{
                transform: `rotate(${[-4, 0, 4][i]}deg)`,
                zIndex: [1, 3, 1][i],
              }}
            >
              <img src={mag.img} alt={mag.issue} loading="lazy"/>
              <div className={styles.coverOverlay}/>
              <div className={styles.coverInfo}>
                <div className={styles.coverMagName}>E-VISIBLE</div>
                <div className={styles.coverIssue}>{mag.issue}</div>
                <div className={styles.coverQuarter}>{mag.quarter}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Text */}
        <div className={styles.content}>
          <div className={styles.label}>Publication</div>
          <h2 className={styles.title}>{magazineInfo.title}</h2>
          <div className={styles.divider}/>
          <p className={styles.desc}>{magazineInfo.description}</p>

          <div className={styles.magStats}>
            <div className={styles.magStat}>
              <div className={styles.magStatVal}>{magazineInfo.issues}</div>
              <div className={styles.magStatLabel}>Archive</div>
            </div>
            <div className={styles.magStatDivider}/>
            <div className={styles.magStat}>
              <div className={styles.magStatVal}>{magazineInfo.subscribers}</div>
              <div className={styles.magStatLabel}>Readers</div>
            </div>
          </div>

          <div className={styles.actions}>
            <a href="/magazine" className={styles.btnPrimary}>
              Read Latest Issue
              <span className={styles.btnCircle}>
                <svg viewBox="0 0 24 24" fill="none" stroke="white"
                  strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                  width={13} height={13}>
                  <line x1="7" y1="17" x2="17" y2="7"/>
                  <polyline points="7 7 17 7 17 17"/>
                </svg>
              </span>
            </a>
            <a href="/magazine" className={styles.btnOutline}>
              View All Issues
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default MagazineSection