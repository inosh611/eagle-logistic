import { partnershipBenefits } from '../../../data/bdp'
import styles from './PartnershipBenefits.module.css'

function PartnershipBenefits() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        {/* Left */}
        <div className={styles.left}>
          <div className={styles.label}>Why This Partnership</div>
          <h2 className={styles.title}>
            The Best of Both Worlds —<br />
            Global Reach, Local Expertise
          </h2>
          <p className={styles.desc}>
            The Eagle Logistic and PSA BDP partnership gives Sri Lankan businesses
            something unique — the power of one of the world's largest logistics
            networks, delivered with the personal service and local knowledge that
            only a Sri Lanka-based team can provide.
          </p>
          <a href="/contact" className={styles.btn}>
            Partner With Us
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

        {/* Right benefits */}
        <div className={styles.right}>
          {partnershipBenefits.map((b, i) => (
            <div key={b.id} className={styles.benefitRow}>
              <div className={styles.benefitNum}>0{i + 1}</div>
              <div className={styles.benefitContent}>
                <h3 className={styles.benefitTitle}>{b.title}</h3>
                <p className={styles.benefitDesc}>{b.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default PartnershipBenefits