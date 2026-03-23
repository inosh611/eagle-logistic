import { connectingProfessionals } from '../../../data/supplyChainCommunity'
import styles from './ConnectingProfessionals.module.css'

function ConnectingProfessionals() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        {/* Left — text */}
        <div className={styles.left}>
          <div className={styles.label}>Eagle Professional Network</div>
          <h2 className={styles.title}>{connectingProfessionals.title}</h2>
          <div className={styles.divider}/>

          {connectingProfessionals.paragraphs.map((p, i) => (
            <p key={i} className={styles.para}>{p}</p>
          ))}

          {/* Network highlight */}
          <div className={styles.networkHighlight}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              width={20} height={20}>
              <circle cx="12" cy="12" r="10"/>
              <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"/>
            </svg>
            <p>{connectingProfessionals.networkStats}</p>
          </div>

          <p className={styles.closingText}>{connectingProfessionals.closing}</p>

          <a href="/contact" className={styles.btn}>
            Join the Network
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

        {/* Right — mosaic (matches reference: 3-col grid) */}
        <div className={styles.mosaicWrap}>
          <div className={styles.mosaic}>
            {/* Col 1 */}
            <div className={styles.mosaicCol}>
              <div className={`${styles.cell} ${styles.cellTall}`}>
                <img src={connectingProfessionals.images[0]} alt="" loading="lazy"/>
                <div className={styles.cellOverlay}/>
              </div>
              <div className={styles.cell}>
                <img src={connectingProfessionals.images[3]} alt="" loading="lazy"/>
                <div className={styles.cellOverlay}/>
              </div>
            </div>

            {/* Col 2 — featured */}
            <div className={styles.mosaicColFeatured}>
              <div className={styles.cell}>
                <img src={connectingProfessionals.images[1]} alt="" loading="lazy"/>
                <div className={styles.cellOverlay}/>
              </div>
              <div className={styles.cell}>
                <img src={connectingProfessionals.images[4]} alt="" loading="lazy"/>
                <div className={styles.cellOverlay}/>
              </div>
            </div>

            {/* Col 3 */}
            <div className={styles.mosaicCol}>
              <div className={styles.cell}>
                <img src={connectingProfessionals.images[2]} alt="" loading="lazy"/>
                <div className={styles.cellOverlay}/>
              </div>
              <div className={styles.cell}>
                <img src={connectingProfessionals.images[5]} alt="" loading="lazy"/>
                <div className={styles.cellOverlay}/>
              </div>
            </div>
          </div>

          {/* Stats overlay on mosaic */}
          <div className={styles.mosaicBadge}>
            <div className={styles.mosaicBadgeVal}>300+</div>
            <div className={styles.mosaicBadgeLabel}>Corporate<br/>Companies</div>
          </div>
        </div>
      </div>

      {/* Bottom full-width highlight text */}
      <div className={styles.bottomBanner}>
        <div className={styles.bottomBannerInner}>
          <div className={styles.bottomBannerIcon}>
            <svg viewBox="0 0 24 24" fill="none" stroke="white"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              width={20} height={20}>
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
          </div>
          <p className={styles.bottomBannerText}>
            The Eagle Network covers more than{' '}
            <strong>500 Supply Chain Professionals</strong> in more than{' '}
            <strong>300 Corporate Companies</strong> in Sri Lanka.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ConnectingProfessionals