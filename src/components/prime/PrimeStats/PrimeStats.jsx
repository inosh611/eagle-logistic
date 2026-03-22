import { primeStats } from '../../../data/prime'
import styles from './PrimeStats.module.css'

function PrimeStats() {
  return (
    <div className={styles.bar}>
      {primeStats.map(stat => (
        <div key={stat.id} className={styles.item}>
          <div className={styles.value}>{stat.value}</div>
          <div className={styles.label}>{stat.label}</div>
        </div>
      ))}
    </div>
  )
}

export default PrimeStats