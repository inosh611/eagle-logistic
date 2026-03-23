import { supplyChainForums } from '../../../data/supplyChainCommunity'
import styles from './SupplyChainForums.module.css'

function SupplyChainForums() {
  return (
    <section className={styles.section} id="forums">
      <div className={styles.inner}>

        {/* Left — mosaic grid (matches reference layout exactly) */}
        <div className={styles.mosaicWrap}>
          <div className={styles.mosaic}>
            {/* Column 1 — tall single image */}
            <div className={styles.colSingle}>
              <div className={styles.cell}>
                <img src={supplyChainForums.images[0]} alt="" loading="lazy"/>
                <div className={styles.cellOverlay}/>
              </div>
            </div>

            {/* Column 2 — wide tall (center hero) */}
            <div className={styles.colCenter}>
              <div className={styles.cell}>
                <img src={supplyChainForums.images[1]} alt="" loading="lazy"/>
                <div className={styles.cellOverlay}/>
              </div>
            </div>

            {/* Column 3 — 3 stacked small */}
            <div className={styles.colStack}>
              <div className={styles.cellSmall}>
                <img src={supplyChainForums.images[2]} alt="" loading="lazy"/>
                <div className={styles.cellOverlay}/>
              </div>
              <div className={styles.cellSmall}>
                <img src={supplyChainForums.images[3]} alt="" loading="lazy"/>
                <div className={styles.cellOverlay}/>
              </div>
              <div className={styles.cellSmall}>
                <img src={supplyChainForums.images[4]} alt="" loading="lazy"/>
                <div className={styles.cellOverlay}/>
              </div>
            </div>
          </div>

          {/* Forum event tag */}
          <div className={styles.eventTag}>
            <div className={styles.eventDot}/>
            Live Community Events
          </div>
        </div>

        {/* Right — text content */}
        <div className={styles.right}>
          <div className={styles.label}>Community Initiative</div>
          <h2 className={styles.title}>{supplyChainForums.title}</h2>
          <div className={styles.divider}/>
          <p className={styles.desc}>{supplyChainForums.description}</p>

          {/* Highlights */}
          <div className={styles.highlights}>
            {supplyChainForums.highlights.map((h, i) => (
              <div key={i} className={styles.highlightItem}>
                <div className={styles.highlightIcon}>
                  <svg viewBox="0 0 16 16" fill="none" stroke="white"
                    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                    width={10} height={10}>
                    <path d="M13 4L6 11 3 8"/>
                  </svg>
                </div>
                <span>{h}</span>
              </div>
            ))}
          </div>

          <a href="/contact" className={styles.btn}>
            Attend Next Forum
            <span className={styles.btnCircle}>
              <svg viewBox="0 0 24 24" fill="none" stroke="white"
                strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                width={13} height={13}>
                <line x1="7" y1="17" x2="17" y2="7"/>
                <polyline points="7 7 17 7 17 17"/>
              </svg>
            </span>
          </a>
        </div>

      </div>
    </section>
  )
}

export default SupplyChainForums