import { contactStats } from '../../../data/contact'
import styles from './ContactStats.module.css'

function ContactStats() {
  return (
    <div className={styles.bar}>
      {contactStats.map((stat, i) => (
        <div
          key={stat.id}
          className={styles.item}
        >
          <div className={styles.value}>{stat.value}</div>
          <div className={styles.label}>{stat.label}</div>
        </div>
      ))}
    </div>
  )
}

export default ContactStats