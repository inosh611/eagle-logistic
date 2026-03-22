import styles from './AboutHero.module.css'

function AboutHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bg} />
      <div className={styles.overlay} />
      <div className={styles.content}>
        <span className={styles.tag}>Who We Are</span>
        <h1 className={styles.title}>
          Moving the World.<br />
          Powering Sri Lanka's Trade.
        </h1>
        <p className={styles.subtitle}>
          Over two decades of freight forwarding, logistics, and supply chain
          excellence — built on trust, driven by innovation.
        </p>
        <div className={styles.breadcrumb}>
          <a href="/" className={styles.breadcrumbLink}>Home</a>
          <span className={styles.breadcrumbSep}>/</span>
          <span className={styles.breadcrumbActive}>About Us</span>
        </div>
      </div>
    </section>
  )
}

export default AboutHero