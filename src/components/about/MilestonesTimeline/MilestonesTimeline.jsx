import { useState } from 'react'
import { milestones } from '../../../data/about'
import styles from './MilestonesTimeline.module.css'

const colors = [
  '#f59e0b', // amber
  '#ec4899', // pink
  '#8b5cf6', // purple
  '#3b82f6', // blue
  '#10b981', // green
  '#f97316', // orange
  '#06b6d4', // cyan
  '#e11d48', // rose
]

function MilestonesTimeline() {
  const [active, setActive] = useState(null)

  const toggle = (i) => setActive(active === i ? null : i)

  return (
    <section className={styles.section} id="timeline">

      {/* Header */}
      <div className={styles.header}>
        <div className={styles.label}>Our Journey</div>
        <h2 className={styles.title}>Two Decades of Growth</h2>
        <p className={styles.subtitle}>
          From a single office in Colombo to a nationwide logistics network —
          every milestone tells our story.
        </p>
      </div>

      {/* Vertical timeline */}
      <div className={styles.timeline}>

        {/* Center vertical line */}
        <div className={styles.centerLine} />

        {milestones.map((m, i) => {
          const color = colors[i % colors.length]
          const isLeft = i % 2 === 0
          const isActive = active === i

          return (
            <div
              key={m.id}
              className={`${styles.row} ${isLeft ? styles.rowLeft : styles.rowRight}`}
              onClick={() => toggle(i)}
            >
              {/* Content card */}
              <div
                className={`${styles.content} ${isActive ? styles.contentActive : ''}`}
                style={{ '--card-color': color }}
              >
                {/* Tag */}
                <span className={styles.tag} style={{ background: color }}>
                  {m.title.split(' ').slice(0, 2).join(' ')}
                </span>

                {/* Year */}
                <div className={styles.year} style={{ color }}>
                  {m.year}
                </div>

                {/* Description */}
                <p className={styles.desc}>{m.description}</p>

                {/* Dashed connector */}
                <div className={`${styles.connector} ${isLeft ? styles.connectorLeft : styles.connectorRight}`} />
              </div>

              {/* Center number circle */}
              <div
                className={styles.circle}
                style={{
                  background: color,
                  boxShadow: `0 0 0 4px ${color}30, 0 0 0 8px ${color}15`
                }}
              >
                <span className={styles.circleNum}>{i + 1}</span>
              </div>

              {/* Empty side (for spacing) */}
              <div className={styles.empty} />
            </div>
          )
        })}

      </div>
    </section>
  )
}

export default MilestonesTimeline