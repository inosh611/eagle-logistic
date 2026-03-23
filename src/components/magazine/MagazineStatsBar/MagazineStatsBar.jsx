import { magazineAbout } from '../../../data/magazine'
import styles from './MagazineStatsBar.module.css'

function MagazineStatsBar() {
  return (
    <div className={styles.bar}>
      {magazineAbout.stats.map((s, i) => (
        <div key={i} className={styles.item}>
          <div className={styles.value}>{s.value}</div>
          <div className={styles.label}>{s.label}</div>
        </div>
      ))}
    </div>
  )
}

export default MagazineStatsBar