import { useState } from 'react'
import { techStack } from '../../../data/prime'
import styles from './TechStack.module.css'

function TechIcon({ icon, color }) {
  switch (icon) {
    case 'brain':
      return (
        <svg viewBox="0 0 48 48" fill="none" width={36} height={36}>
          <path d="M24 8 C18 8 13 12 13 18 C10 18 8 20 8 23 C8 26 10 28 13 28 C13 32 16 35 20 36 L20 40 L28 40 L28 36 C32 35 35 32 35 28 C38 28 40 26 40 23 C40 20 38 18 35 18 C35 12 30 8 24 8Z"
            stroke={color} strokeWidth="2.5" strokeLinejoin="round" />
          <line x1="24" y1="8"  x2="24" y2="16" stroke={color} strokeWidth="2" strokeLinecap="round" />
          <line x1="16" y1="20" x2="20" y2="24" stroke={color} strokeWidth="2" strokeLinecap="round" />
          <line x1="32" y1="20" x2="28" y2="24" stroke={color} strokeWidth="2" strokeLinecap="round" />
          <line x1="24" y1="24" x2="24" y2="30" stroke={color} strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    case 'gear':
      return (
        <svg viewBox="0 0 48 48" fill="none" width={36} height={36}>
          <circle cx="24" cy="24" r="6" stroke={color} strokeWidth="2.5" />
          <path d="M24 8 L26 12 L30 10 L32 14 L36 14 L36 18 L40 20 L38 24 L40 28 L36 30 L36 34 L32 34 L30 38 L26 36 L24 40 L22 36 L18 38 L16 34 L12 34 L12 30 L8 28 L10 24 L8 20 L12 18 L12 14 L16 14 L18 10 L22 12 Z"
            stroke={color} strokeWidth="2.5" strokeLinejoin="round" />
        </svg>
      )
    case 'code':
      return (
        <svg viewBox="0 0 48 48" fill="none" width={36} height={36}>
          <polyline points="16 14 6 24 16 34" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="32 14 42 24 32 34" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="28" y1="10" x2="20" y2="38" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      )
    case 'consult':
      return (
        <svg viewBox="0 0 48 48" fill="none" width={36} height={36}>
          <path d="M8 10 H40 V32 H28 L24 40 L20 32 H8 Z"
            stroke={color} strokeWidth="2.5" strokeLinejoin="round" />
          <line x1="16" y1="20" x2="32" y2="20" stroke={color} strokeWidth="2" strokeLinecap="round" />
          <line x1="16" y1="26" x2="26" y2="26" stroke={color} strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    default: return null
  }
}

function TechStack() {
  const [active, setActive] = useState(0)
  const item = techStack[active]

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className={styles.label}>Technology Stack</div>
        <h2 className={styles.title}>Our Technology Capabilities</h2>
        <p className={styles.subtitle}>
          Four core technology disciplines — each backed by a specialist
          team with deep industry experience.
        </p>
      </div>

      <div className={styles.inner}>
        {/* Left tabs */}
        <div className={styles.tabs}>
          {techStack.map((t, i) => (
            <button
              key={t.id}
              className={`${styles.tab} ${active === i ? styles.tabActive : ''}`}
              onClick={() => setActive(i)}
              style={active === i ? {
                borderColor: t.color,
                background: `${t.color}10`,
              } : {}}
            >
              <div className={styles.tabIcon} style={{ color: active === i ? t.color : 'var(--text-muted)' }}>
                <TechIcon icon={t.icon} color={active === i ? t.color : '#6b7fa3'} />
              </div>
              <div>
                <div className={styles.tabTitle}
                  style={{ color: active === i ? 'var(--navy-mid)' : 'var(--text-muted)' }}>
                  {t.category}
                </div>
                <div className={styles.tabCount}>{t.technologies.length} technologies</div>
              </div>
              {active === i && (
                <div className={styles.tabArrow} style={{ color: t.color }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                    width={16} height={16}>
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Right detail */}
        <div key={item.id} className={styles.detail}>
          <div className={styles.detailIconWrap} style={{ background: `${item.color}14`, color: item.color }}>
            <TechIcon icon={item.icon} color={item.color} />
          </div>
          <div className={styles.detailTag} style={{ color: item.color }}>
            {item.category}
          </div>
          <h3 className={styles.detailTitle}>{item.category}</h3>
          <p className={styles.detailDesc}>{item.description}</p>

          <div className={styles.techList}>
            <div className={styles.techListTitle}>Technologies & Services</div>
            <div className={styles.techGrid}>
              {item.technologies.map((tech, i) => (
                <div key={i} className={styles.techTag} style={{ borderColor: `${item.color}40` }}>
                  <span className={styles.techDot} style={{ background: item.color }} />
                  {tech}
                </div>
              ))}
            </div>
          </div>

          <a href="/contact" className={styles.detailBtn} style={{ background: item.color }}>
            Discuss Your {item.category} Needs
            <span className={styles.detailBtnCircle}>
              <svg viewBox="0 0 24 24" fill="none" stroke="white"
                strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                width={14} height={14}>
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default TechStack