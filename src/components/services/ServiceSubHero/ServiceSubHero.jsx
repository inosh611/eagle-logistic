import styles from './ServiceSubHero.module.css'

function ServiceSubHero({ data }) {
  return (
    <section className={styles.hero}>
      <div
        className={styles.bg}
        style={{ backgroundImage: `url(${data.image})` }}
      />
      <div className={styles.overlay} />
      <div className={styles.content}>
        <span className={styles.tag}>{data.tag}</span>
        <h1 className={styles.title} style={{ whiteSpace: 'pre-line' }}>
          {data.title}
        </h1>
        <p className={styles.subtitle}>{data.subtitle}</p>
        <div className={styles.breadcrumb}>
          <a href="/" className={styles.link}>Home</a>
          <span className={styles.sep}>/</span>
          <a href="/services" className={styles.link}>Services</a>
          <span className={styles.sep}>/</span>
          <span className={styles.active}>{data.tag}</span>
        </div>
      </div>
    </section>
  )
}

export default ServiceSubHero