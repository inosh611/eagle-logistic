import { bpoData } from '../../../data/services'
import styles from './BPODetail.module.css'

function BPODetail() {
  return (
    <>
      {/* Intro */}
      <section className={styles.intro}>
        <div className={styles.introInner}>
          <div className={styles.introLeft}>
            <div className={styles.label}>Logistics BPO</div>
            <h2 className={styles.introTitle}>{bpoData.intro.title}</h2>
          </div>
          <p className={styles.introDesc}>{bpoData.intro.description}</p>
        </div>
      </section>

      {/* Benefits */}
      <section className={styles.benefits}>
        <div className={styles.benefitsHeader}>
          <div className={styles.label}>Why Eagle BPO</div>
          <h2 className={styles.benefitsTitle}>
            Six Reasons Clients Choose Our BPO
          </h2>
        </div>
        <div className={styles.benefitsGrid}>
          {bpoData.benefits.map((b, i) => (
            <div key={b.id} className={styles.benefitCard}>
              <div className={styles.benefitNum}>0{i + 1}</div>
              <h3 className={styles.benefitTitle}>{b.title}</h3>
              <p className={styles.benefitDesc}>{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className={styles.process}>
        <div className={styles.processHeader}>
          <div className={styles.labelLight}>How It Works</div>
          <h2 className={styles.processTitle}>
            Our BPO Onboarding Process
          </h2>
        </div>
        <div className={styles.processSteps}>
          {bpoData.process.map((step, i) => (
            <div key={i} className={styles.processStep}>
              <div className={styles.processStepNum}>{step.step}</div>
              <div className={styles.processConnector} />
              <h3 className={styles.processStepTitle}>{step.title}</h3>
              <p className={styles.processStepDesc}>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default BPODetail