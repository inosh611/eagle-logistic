import styles from './ExperienceSection.module.css'

function ExperienceSection() {
  return (
    <div className={styles.section}>
      <div className={styles.grid}>
        <div className={styles.label}>Our Experience</div>
        <h2 className={styles.headline}>
          We are a Leading one-Stop Logistic Service provider helps to Reach Your
          exact delivery destination on Time Without{' '}
          <span className={styles.highlight}>Delay and Damages.</span>
        </h2>
      </div>
    </div>
  )
}

export default ExperienceSection