import { processSteps } from '../../../data/prime'
import styles from './PrimeProcess.module.css'

function PrimeProcess() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className={styles.label}>How We Work</div>
        <h2 className={styles.title}>Our Delivery Process</h2>
        <p className={styles.subtitle}>
          A proven five-step process that delivers working software
          on time and within budget — every time.
        </p>
      </div>

      <div className={styles.steps}>
        {processSteps.map((step, i) => (
          <div key={i} className={styles.step}>
            <div className={styles.stepTop}>
              <div className={styles.stepNum}>{step.step}</div>
              {i < processSteps.length - 1 && (
                <div className={styles.connector}>
                  <svg viewBox="0 0 40 12" fill="none" width={40} height={12}>
                    <path d="M0 6 L32 6 M28 2 L34 6 L28 10"
                      stroke="rgba(37,99,235,0.3)" strokeWidth="1.5"
                      strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </div>
            <h3 className={styles.stepTitle}>{step.title}</h3>
            <p className={styles.stepDesc}>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PrimeProcess