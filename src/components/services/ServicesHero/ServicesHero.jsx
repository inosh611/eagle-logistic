import { servicesHero } from '../../../data/services'
import styles from './ServicesHero.module.css'

function ServicesHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bg} />
      <div className={styles.overlay} />
      <div className={styles.content}>
        <span className={styles.tag}>{servicesHero.tag}</span>
        <h1 className={styles.title} style={{ whiteSpace: 'pre-line' }}>
          {servicesHero.title}
        </h1>
        <p className={styles.subtitle}>{servicesHero.subtitle}</p>
        <div className={styles.breadcrumb}>
          <a href="/" className={styles.breadcrumbLink}>Home</a>
          <span className={styles.sep}>/</span>
          <span className={styles.breadcrumbActive}>Services</span>
        </div>
      </div>
    </section>
  )
}

export default ServicesHero