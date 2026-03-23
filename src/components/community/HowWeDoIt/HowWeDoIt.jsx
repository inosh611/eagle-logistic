import { howWeDoIt } from '../../../data/supplyChainCommunity'
import styles from './HowWeDoIt.module.css'

function HowWeDoIt() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.dividerLine} />
        <div className={styles.content}>
          <h2 className={styles.title}>{howWeDoIt.title}</h2>
          <p className={styles.subtitle}>{howWeDoIt.subtitle}</p>
        </div>
        <div className={styles.dividerLine} />
      </div>
    </section>
  )
}

export default HowWeDoIt