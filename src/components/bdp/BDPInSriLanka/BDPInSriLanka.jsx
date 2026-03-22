import { bdpInSriLanka } from '../../../data/bdp'
import styles from './BDPInSriLanka.module.css'

function BDPInSriLanka() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        {/* Left — text */}
        <div className={styles.left}>
          <div className={styles.label}>Exclusive Sri Lanka Partner</div>
          <h2 className={styles.title}>{bdpInSriLanka.title}</h2>
          <div className={styles.divider} />
          <p className={styles.desc}>{bdpInSriLanka.description}</p>

          {/* Exclusive badge */}
          <div className={styles.badge}>
            <div className={styles.badgeIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                width={18} height={18}>
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <div>
              <div className={styles.badgeTitle}>Exclusive Agent & Partner</div>
              <div className={styles.badgeSub}>For all BDP Operations in Sri Lanka</div>
            </div>
          </div>

          <a href="https://www.bdpinternational.com"
            target="_blank"
            rel="noreferrer"
            className={styles.btn}>
            Visit BDP International
            <svg viewBox="0 0 24 24" fill="none" stroke="white"
              strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
              width={14} height={14}>
              <line x1="7" y1="17" x2="17" y2="7"/>
              <polyline points="7 7 17 7 17 17"/>
            </svg>
          </a>
        </div>

        {/* Right — mosaic grid + BDP logo */}
        <div className={styles.right}>

          {/* BDP Logo area */}
          <div className={styles.logoBar}>
            <div className={styles.logoWrap}>
              <div className={styles.logoIcon}>
                <svg viewBox="0 0 48 48" fill="none" width={36} height={36}>
                  <circle cx="24" cy="24" r="20" stroke="#2563eb" strokeWidth="2.5"/>
                  <path d="M8 24 Q16 14 24 24 Q32 34 40 24"
                    stroke="#2563eb" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
                  <path d="M8 24 Q16 34 24 24 Q32 14 40 24"
                    stroke="#2563eb" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.4"/>
                </svg>
              </div>
              <div className={styles.logoTextWrap}>
                <span className={styles.logoText}>BDP</span>
                <span className={styles.logoSub}>INTERNATIONAL</span>
              </div>
            </div>
            <div className={styles.logoCities}>240+ Cities Worldwide</div>
          </div>

          {/* Mosaic grid — matches reference image layout */}
          <div className={styles.mosaic}>
            {/* Row 1: small top-right + tall center-left */}
            <div className={styles.mosaicGrid}>
              <div className={`${styles.cell} ${styles.cellTall}`}>
                <img src={bdpInSriLanka.images[0]} alt="" loading="lazy"/>
                <div className={styles.cellOverlay}/>
              </div>
              <div className={`${styles.cell} ${styles.cellTall}`}>
                <img src={bdpInSriLanka.images[1]} alt="" loading="lazy"/>
                <div className={styles.cellOverlay}/>
              </div>
              <div className={styles.cellCol}>
                <div className={styles.cell}>
                  <img src={bdpInSriLanka.images[2]} alt="" loading="lazy"/>
                  <div className={styles.cellOverlay}/>
                </div>
                <div className={styles.cell}>
                  <img src={bdpInSriLanka.images[3]} alt="" loading="lazy"/>
                  <div className={styles.cellOverlay}/>
                </div>
              </div>
            </div>
            {/* Row 2 */}
            <div className={styles.mosaicRow2}>
              <div className={styles.cell}>
                <img src={bdpInSriLanka.images[4]} alt="" loading="lazy"/>
                <div className={styles.cellOverlay}/>
              </div>
              <div className={styles.cell}>
                <img src={bdpInSriLanka.images[5]} alt="" loading="lazy"/>
                <div className={styles.cellOverlay}/>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default BDPInSriLanka