import { useState } from 'react'
import { industries } from '../../../data/industries'
import styles from './IndustryVerticals.module.css'

function IndustryIcon({ icon, size = 28 }) {
  switch (icon) {
    case 'fashion':
      return (
        <svg viewBox="0 0 32 32" fill="none" stroke="currentColor"
          strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
          width={size} height={size}>
          <path d="M12 4 L8 10 L4 8 L8 24 L24 24 L28 8 L24 10 L20 4 C20 4 18 8 16 8 C14 8 12 4 12 4Z"/>
        </svg>
      )
    case 'medical':
      return (
        <svg viewBox="0 0 32 32" fill="none" stroke="currentColor"
          strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
          width={size} height={size}>
          <rect x="10" y="4" width="12" height="24" rx="3"/>
          <rect x="4" y="10" width="24" height="12" rx="3"/>
          <line x1="16" y1="10" x2="16" y2="22"/>
          <line x1="10" y1="16" x2="22" y2="16"/>
        </svg>
      )
    case 'fmcg':
      return (
        <svg viewBox="0 0 32 32" fill="none" stroke="currentColor"
          strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
          width={size} height={size}>
          <path d="M6 12 L4 28 L28 28 L26 12 Z"/>
          <path d="M11 12 C11 8 21 8 21 12"/>
          <line x1="16" y1="16" x2="16" y2="24"/>
          <line x1="12" y1="20" x2="20" y2="20"/>
        </svg>
      )
    case 'chemical':
      return (
        <svg viewBox="0 0 32 32" fill="none" stroke="currentColor"
          strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
          width={size} height={size}>
          <path d="M12 4 L12 16 L5 26 C5 26 5 28 7 28 L25 28 C27 28 27 26 27 26 L20 16 L20 4"/>
          <line x1="10" y1="8" x2="22" y2="8"/>
          <circle cx="12" cy="22" r="2" fill="currentColor" opacity="0.5"/>
          <circle cx="20" cy="24" r="1.5" fill="currentColor" opacity="0.5"/>
        </svg>
      )
    case 'auto':
      return (
        <svg viewBox="0 0 32 32" fill="none" stroke="currentColor"
          strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
          width={size} height={size}>
          <path d="M4 20 L7 12 L10 10 L22 10 L25 12 L28 20 L28 24 L4 24 Z"/>
          <circle cx="10" cy="24" r="3"/>
          <circle cx="22" cy="24" r="3"/>
          <path d="M4 20 L28 20"/>
          <path d="M10 14 L13 10"/>
          <path d="M22 14 L19 10"/>
        </svg>
      )
    default: return null
  }
}

function IndustryVerticals() {
  const [active, setActive] = useState(0)

  return (
    <section className={styles.section}>

      {/* Section header */}
      <div className={styles.header}>
        <div className={styles.label}>Industries We Serve</div>
        <h2 className={styles.title}>
          Specialized Solutions for<br />Every Industry
        </h2>
        <p className={styles.subtitle}>
          From fashion to pharmaceuticals — we bring deep
          industry expertise to every shipment.
        </p>
      </div>

      {/* Main panel */}
      <div className={styles.panel}>

        {/* Left — tabs */}
        <div className={styles.tabs}>
          {industries.map((ind, i) => (
            <button
              key={ind.id}
              className={`${styles.tab} ${i === active ? styles.tabActive : ''}`}
              style={i === active ? {
                '--tab-color': ind.color,
                borderColor: `${ind.color}40`,
                background: `${ind.color}12`,
              } : {}}
              onMouseEnter={() => setActive(i)}
              onClick={() => setActive(i)}
            >
              {/* Icon */}
              <div
                className={styles.tabIcon}
                style={i === active ? {
                  background: `${ind.color}20`,
                  color: ind.color,
                } : {}}
              >
                <IndustryIcon icon={ind.icon} size={20} />
              </div>

              {/* Text */}
              <div className={styles.tabText}>
                <div className={styles.tabName}>{ind.short}</div>
                <div className={styles.tabStat}>{ind.stats}</div>
              </div>

              {/* Active indicator */}
              <div
                className={styles.tabIndicator}
                style={{ background: ind.color }}
              />
            </button>
          ))}
        </div>

        {/* Right — content */}
        <div className={styles.content}>
          {industries.map((ind, i) => (
            <div
              key={ind.id}
              className={`${styles.contentPanel} ${i === active ? styles.contentPanelActive : ''}`}
            >
              {/* Background image */}
              <div className={styles.contentBg}>
                <img src={ind.image} alt={ind.short} loading="lazy"/>
                <div
                  className={styles.contentBgOverlay}
                  style={{ background: `linear-gradient(135deg, ${ind.bgColor} 0%, ${ind.bgColor}cc 40%, ${ind.bgColor}66 70%, transparent 100%)` }}
                />
              </div>

              {/* Content overlay */}
              <div className={styles.contentOverlay}>

                {/* Top — icon + tag */}
                <div className={styles.contentTop}>
                  <div
                    className={styles.contentIconWrap}
                    style={{ background: `${ind.color}25`, border: `1px solid ${ind.color}40` }}
                  >
                    <div style={{ color: ind.color }}>
                      <IndustryIcon icon={ind.icon} size={28} />
                    </div>
                  </div>
                  <div
                    className={styles.contentTag}
                    style={{ background: ind.color }}
                  >
                    {ind.short}
                  </div>
                </div>

                {/* Middle — title + description */}
                <div className={styles.contentBody}>
                  <h3
                    className={styles.contentTitle}
                    style={{ whiteSpace: 'pre-line' }}
                  >
                    {ind.name}
                  </h3>
                  <p className={styles.contentDesc}>{ind.description}</p>

                  {/* Services list */}
                  <div className={styles.servicesList}>
                    {ind.services.map((svc, si) => (
                      <span
                        key={si}
                        className={styles.serviceChip}
                        style={{
                          borderColor: `${ind.color}50`,
                          color: ind.color,
                          background: `${ind.color}12`,
                        }}
                      >
                        {svc}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom — stat + CTA */}
                <div className={styles.contentBottom}>
                  <div className={styles.contentStat}>
                    <div
                      className={styles.contentStatDot}
                      style={{ background: ind.color }}
                    />
                    {ind.stats}
                  </div>
                  <a href="/contact" className={styles.contentBtn}
                    style={{ background: ind.color }}>
                    Get a Quote
                    <svg viewBox="0 0 24 24" fill="none" stroke="white"
                      strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                      width={14} height={14}>
                      <line x1="7" y1="17" x2="17" y2="7"/>
                      <polyline points="7 7 17 7 17 17"/>
                    </svg>
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom — mobile cards */}
      <div className={styles.mobileCards}>
        {industries.map((ind, i) => (
          <div
            key={ind.id}
            className={styles.mobileCard}
            style={{ '--mcard-color': ind.color }}
          >
            <div className={styles.mobileCardImg}>
              <img src={ind.image} alt={ind.short} loading="lazy"/>
              <div
                className={styles.mobileCardOverlay}
                style={{ background: `linear-gradient(to top, ${ind.bgColor} 0%, transparent 60%)` }}
              />
              <div
                className={styles.mobileCardTag}
                style={{ background: ind.color }}
              >
                {ind.short}
              </div>
            </div>
            <div className={styles.mobileCardBody}>
              <div style={{ color: ind.color }}>
                <IndustryIcon icon={ind.icon} size={22} />
              </div>
              <h4 className={styles.mobileCardTitle}
                style={{ whiteSpace: 'pre-line' }}>
                {ind.name}
              </h4>
              <p className={styles.mobileCardDesc}>{ind.description}</p>
              <div className={styles.mobileCardChips}>
                {ind.services.map((s, si) => (
                  <span key={si} className={styles.mobileCardChip}
                    style={{ color: ind.color, background: `${ind.color}12`, borderColor: `${ind.color}30` }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}

export default IndustryVerticals