import { valueProp } from '../../../data/prime'
import styles from './ValueProp.module.css'

function ValueProp() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        {/* Left */}
        <div className={styles.left}>
          <div className={styles.label}>Why Prime</div>
          <h2 className={styles.title} style={{ whiteSpace: 'pre-line' }}>
            {valueProp.title}
          </h2>
          <p className={styles.desc}>{valueProp.description}</p>
          <div className={styles.actions}>
            <a href="/contact" className={styles.btn}>
              Start Your Digital Journey
              <span className={styles.btnCircle}>
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

        {/* Right points */}
        <div className={styles.right}>
          {valueProp.points.map((point, i) => (
            <div key={point.id} className={styles.point}>
              <div className={styles.pointNum}>0{i + 1}</div>
              <div className={styles.pointContent}>
                <h3 className={styles.pointTitle}>{point.title}</h3>
                <p className={styles.pointDesc}>{point.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default ValueProp