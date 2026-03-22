import { useState } from 'react'
import { milestones } from '../../../data/about'
import styles from './MilestonesTimeline.module.css'

function MilestonesTimeline() {
  const [active, setActive] = useState(0)

  return (
    <section className={styles.section} id="timeline">
      <div className={styles.header}>
        <div className={styles.label}>Our Journey</div>
        <h2 className={styles.title}>Two Decades of Growth</h2>
        <p className={styles.subtitle}>
          From a single office in Colombo to a nationwide logistics network —
          every milestone tells our story.
        </p>
      </div>

      {/* Year tabs (scrollable) */}
      <div className={styles.tabs}>
        {milestones.map((m, i) => (
          <button
            key={m.id}
            className={`${styles.tab} ${i === active ? styles.tabActive : ''}`}
            onClick={() => setActive(i)}
          >
            {m.year}
          </button>
        ))}
      </div>

      {/* Timeline track */}
      <div className={styles.track}>
        <div className={styles.line} />
        {milestones.map((m, i) => (
          <div
            key={m.id}
            className={`${styles.node} ${i === active ? styles.nodeActive : ''} ${i < active ? styles.nodePast : ''}`}
            onClick={() => setActive(i)}
          >
            <div className={styles.dot} />
            <div className={styles.nodeYear}>{m.year}</div>
          </div>
        ))}
      </div>

      {/* Active milestone detail card */}
      <div key={active} className={styles.card}>
        <div className={styles.cardYear}>{milestones[active].year}</div>
        <h3 className={styles.cardTitle}>{milestones[active].title}</h3>
        <p className={styles.cardDesc}>{milestones[active].description}</p>

        <div className={styles.cardNav}>
          <button
            className={styles.navBtn}
            onClick={() => setActive(i => Math.max(0, i - 1))}
            disabled={active === 0}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
              strokeLinecap="round" strokeLinejoin="round" width={18} height={18}>
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Prev
          </button>
          <span className={styles.navCount}>
            {active + 1} / {milestones.length}
          </span>
          <button
            className={styles.navBtn}
            onClick={() => setActive(i => Math.min(milestones.length - 1, i + 1))}
            disabled={active === milestones.length - 1}
          >
            Next
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
              strokeLinecap="round" strokeLinejoin="round" width={18} height={18}>
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>

    </section>
  )
}

export default MilestonesTimeline