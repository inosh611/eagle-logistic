import { freightData } from '../../../data/services'
import styles from './FreightDetail.module.css'

function FreightDetail() {
  return (
    <>
      {/* Intro */}
      <section className={styles.intro}>
        <div className={styles.introInner}>
          <div className={styles.introLeft}>
            <div className={styles.label}>Freight Forwarding</div>
            <h2 className={styles.introTitle}>{freightData.intro.title}</h2>
          </div>
          <p className={styles.introDesc}>{freightData.intro.description}</p>
        </div>
      </section>

      {/* Stats bar */}
      <div className={styles.statsBar}>
        {freightData.stats.map(stat => (
          <div key={stat.id} className={styles.statItem}>
            <div className={styles.statValue}>{stat.value}</div>
            <div className={styles.statLabel}>{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Services detail */}
      <section className={styles.services}>
        <div className={styles.servicesGrid}>
          {freightData.services.map(s => (
            <div key={s.id} className={styles.serviceCard}>
              <div className={styles.serviceNum}>0{s.id}</div>
              <h3 className={styles.serviceTitle}>{s.title}</h3>
              <p className={styles.serviceDesc}>{s.description}</p>
            </div>
          ))}
        </div>

        {/* Image */}
        <div className={styles.serviceImg}>
          <img
            src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=900&q=80"
            alt="Freight Forwarding"
          />
        </div>
      </section>
    </>
  )
}

export default FreightDetail