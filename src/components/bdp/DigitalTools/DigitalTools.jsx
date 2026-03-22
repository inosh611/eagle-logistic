import { useState } from 'react'
import { digitalTools } from '../../../data/bdp'
import styles from './DigitalTools.module.css'

function ToolIcon({ icon }) {
  if (icon === 'monitor') return (
    <svg viewBox="0 0 48 48" fill="none" width={40} height={40}>
      <rect x="6" y="8" width="36" height="26" rx="3"
        stroke="currentColor" strokeWidth="2.5" />
      <line x1="16" y1="40" x2="32" y2="40"
        stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="24" y1="34" x2="24" y2="40"
        stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M14 22 L18 18 L22 22 L28 16 L34 20"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="34" cy="12" r="3" fill="currentColor" opacity="0.5" />
    </svg>
  )
  if (icon === 'dashboard') return (
    <svg viewBox="0 0 48 48" fill="none" width={40} height={40}>
      <rect x="6" y="6" width="16" height="18" rx="3"
        stroke="currentColor" strokeWidth="2.5" />
      <rect x="26" y="6" width="16" height="10" rx="3"
        stroke="currentColor" strokeWidth="2.5" />
      <rect x="26" y="20" width="16" height="22" rx="3"
        stroke="currentColor" strokeWidth="2.5" />
      <rect x="6" y="28" width="16" height="14" rx="3"
        stroke="currentColor" strokeWidth="2.5" />
    </svg>
  )
  return null
}

function DigitalTools() {
  const [active, setActive] = useState(0)
  const tool = digitalTools[active]

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className={styles.label}>Digital Tools</div>
        <h2 className={styles.title}>Technology That Powers Your Supply Chain</h2>
        <p className={styles.subtitle}>
          Access world-class digital tools through our PSA BDP partnership —
          giving you visibility, control and resilience across your supply chain.
        </p>
      </div>

      {/* Tab buttons */}
      <div className={styles.tabs}>
        {digitalTools.map((t, i) => (
          <button
            key={t.id}
            className={`${styles.tab} ${active === i ? styles.tabActive : ''}`}
            onClick={() => setActive(i)}
            style={active === i ? { borderColor: t.color, color: t.color } : {}}
          >
            <div className={styles.tabIcon} style={active === i ? { color: t.color } : {}}>
              <ToolIcon icon={t.icon} />
            </div>
            <div>
              <div className={styles.tabName}>{t.name}</div>
              <div className={styles.tabTag}>{t.tag}</div>
            </div>
          </button>
        ))}
      </div>

      {/* Active tool detail */}
      <div key={tool.id} className={styles.toolDetail}>
        <div className={styles.toolLeft}>
          <div className={styles.toolIconWrap} style={{ background: `${tool.color}18`, color: tool.color }}>
            <ToolIcon icon={tool.icon} />
          </div>
          <div className={styles.toolTag} style={{ color: tool.color }}>{tool.tag}</div>
          <h3 className={styles.toolName}>{tool.name}</h3>
          <p className={styles.toolDesc}>{tool.description}</p>
          <a href="/contact" className={styles.toolBtn} style={{ background: tool.color }}>
            Learn More About {tool.name}
            <span className={styles.toolBtnCircle}>
              <svg viewBox="0 0 24 24" fill="none" stroke="white"
                strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                width={14} height={14}>
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </span>
          </a>
        </div>

        <div className={styles.toolRight}>
          <div className={styles.featuresTitle}>Key Features</div>
          <div className={styles.features}>
            {tool.features.map((f, i) => (
              <div key={i} className={styles.featureItem}>
                <div className={styles.featureNum} style={{ color: tool.color }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className={styles.featureText}>{f}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default DigitalTools