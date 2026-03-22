import { specializedData } from '../../../data/services'
import styles from './SpecializedDetail.module.css'

function SpecializedDetail() {
  return (
    <div>
      {specializedData.divisions.map((div, i) => (
        <section
          key={div.id}
          className={`${styles.division} ${i % 2 !== 0 ? styles.divisionAlt : ''}`}
        >
          <div className={styles.inner}>
            <div className={styles.content}>
              <span className={styles.tag}>{div.tag}</span>
              <h2 className={styles.title}>{div.title}</h2>
              <p className={styles.desc}>{div.description}</p>
              <ul className={styles.features}>
                {div.features.map((f, j) => (
                  <li key={j} className={styles.featureItem}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="#2563eb"
                      strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                      width={16} height={16}>
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#" className={styles.btn}
                style={{ background: div.color }}>
                Learn More
                <span className={styles.btnCircle}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="white"
                    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                    width={14} height={14}>
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </span>
              </a>
            </div>
            <div className={styles.imgWrap}>
              <img src={div.image} alt={div.name} />
              <div className={styles.imgBadge} style={{ background: div.color }}>
                {div.name}
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}

export default SpecializedDetail