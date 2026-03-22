import { companyValues } from '../../../data/about'
import styles from './VisionMission.module.css'

function VisionIcon() {
  return (
    <svg viewBox="0 0 56 56" fill="none" width={32} height={32}>
      <circle cx="28" cy="28" r="10" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="28" cy="28" r="3" fill="currentColor" />
      <path d="M4 28 Q16 10 28 28 Q40 46 52 28" stroke="currentColor"
        strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <line x1="28" y1="6"  x2="28" y2="12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="28" y1="44" x2="28" y2="50" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="6"  y1="28" x2="12" y2="28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="44" y1="28" x2="50" y2="28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
}

function MissionIcon() {
  return (
    <svg viewBox="0 0 56 56" fill="none" width={32} height={32}>
      <circle cx="28" cy="28" r="22" stroke="currentColor" strokeWidth="2.5" />
      <circle cx="28" cy="28" r="14" stroke="currentColor" strokeWidth="2" strokeDasharray="4 3" />
      <circle cx="28" cy="28" r="6"  stroke="currentColor" strokeWidth="2.5" />
      <circle cx="28" cy="28" r="2"  fill="currentColor" />
      <line x1="28" y1="6"  x2="28" y2="14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="28" y1="42" x2="28" y2="50" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
}

function QualityIcon() {
  return (
    <svg viewBox="0 0 56 56" fill="none" width={32} height={32}>
      <path d="M28 4 L34 18 L50 20 L39 31 L42 48 L28 40 L14 48 L17 31 L6 20 L22 18 Z"
        stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M20 28 L25 33 L36 22"
        stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function VisionMission() {
  const { vision, mission, quality } = companyValues

  return (
    <section className={styles.section}>

      {/* Section header */}
      <div className={styles.header}>
        <div className={styles.label}>Who We Are</div>
        <h2 className={styles.title}>Our Purpose & Commitment</h2>
        <p className={styles.subtitle}>
          Every decision we make is guided by a clear vision, a powerful mission
          and an unwavering commitment to quality.
        </p>
      </div>

      {/* Top row — Vision + Mission side by side */}
      <div className={styles.topRow}>

        {/* Vision */}
        <div className={styles.vmCard} style={{ '--vmcolor': vision.color }}>
          <div className={styles.cardInner}>
            <div className={styles.iconWrap} style={{ color: vision.color, background: `${vision.color}14` }}>
              <VisionIcon />
            </div>
            <div className={styles.cardLabel} style={{ color: vision.color }}>
              {vision.title}
            </div>
            <h3 className={styles.cardTitle}>Think Differently</h3>
            <p className={styles.cardStatement}>{vision.statement}</p>
            <div className={styles.cardDeco} style={{ background: vision.color }} />
          </div>
        </div>

        {/* Mission */}
        <div className={styles.vmCard} style={{ '--vmcolor': mission.color }}>
          <div className={styles.cardInner}>
            <div className={styles.iconWrap} style={{ color: mission.color, background: `${mission.color}14` }}>
              <MissionIcon />
            </div>
            <div className={styles.cardLabel} style={{ color: mission.color }}>
              {mission.title}
            </div>
            <h3 className={styles.cardTitle}>Revolutionize Logistics</h3>
            <p className={styles.cardStatement}>{mission.statement}</p>
            <div className={styles.cardDeco} style={{ background: mission.color }} />
          </div>
        </div>

      </div>

      {/* Bottom — Quality Policy full width */}
      <div className={styles.qualityCard}>
        <div className={styles.qualityLeft}>
          <div className={styles.iconWrap} style={{ color: quality.color, background: `${quality.color}14` }}>
            <QualityIcon />
          </div>
          <div className={styles.cardLabel} style={{ color: quality.color }}>
            {quality.title}
          </div>
          <h3 className={styles.qualityTitle}>Excellence in Every Step</h3>
          <p className={styles.qualityStatement}>{quality.statement}</p>
          <div className={styles.qualityBar} style={{ background: quality.color }} />
        </div>

        <div className={styles.qualityRight}>
          <div className={styles.pointsTitle}>Our Commitments</div>
          <div className={styles.points}>
            {quality.points.map((point, i) => (
              <div key={i} className={styles.point}>
                <div
                  className={styles.pointNum}
                  style={{ color: quality.color, borderColor: `${quality.color}30` }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
                <p className={styles.pointText}>{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}

export default VisionMission