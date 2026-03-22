import { customsData } from '../../../data/services'
import styles from './CustomsDetail.module.css'

function CustomsDetail() {
  return (
    <>
      {/* Intro */}
      <section className={styles.intro}>
        <div className={styles.inner}>
          <div className={styles.left}>
            <div className={styles.label}>Customs & Consultancy</div>
            <h2 className={styles.title}>{customsData.intro.title}</h2>
            <p className={styles.desc}>{customsData.intro.description}</p>
          </div>
          <div className={styles.imgWrap}>
            <img
              src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=900&q=80"
              alt="Customs Services"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className={styles.services}>
        <div className={styles.servicesHeader}>
          <div className={styles.label}>What We Cover</div>
          <h2 className={styles.servicesTitle}>
            Complete Customs Services
          </h2>
        </div>
        <div className={styles.servicesGrid}>
          {customsData.services.map((s, i) => (
            <div key={s.id} className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#2563eb"
                  strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                  width={22} height={22}>
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <div>
                <h3 className={styles.serviceTitle}>{s.title}</h3>
                <p className={styles.serviceDesc}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default CustomsDetail