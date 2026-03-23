import { pressStats } from '../../../data/press'
import styles from './PressStats.module.css'

function PressStats() {
  return (
    <div className={styles.bar}>
      {pressStats.map((stat, i) => (
        <div key={i} className={styles.item}>
          <div className={styles.value}>{stat.value}</div>
          <div className={styles.label}>{stat.label}</div>
        </div>
      ))}
    </div>
  )
}

export default PressStats