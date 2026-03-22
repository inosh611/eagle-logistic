import { services } from '../../../data/servicesCarousel'
import { useCarousel } from '../../../hooks/useCarousel'
import styles from './ServicesCarousel.module.css'

function ServicesCarousel() {
  const {
    current, outerRef, translateX,
    goNext, goPrev, onMouseDown, onMouseUp
  } = useCarousel(services.length)

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div>
          <div className={styles.label}>Our Experience</div>
          <h2 className={styles.title}>
            Essential Features<br />of our Services.
          </h2>
        </div>
        <div className={styles.arrows}>
          <button className={styles.arrow} onClick={goPrev} aria-label="Previous">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round" width={18} height={18}>
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button className={styles.arrow} onClick={goNext} aria-label="Next">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round" width={18} height={18}>
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>

      <div
        ref={outerRef}
        className={styles.outer}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
      >
        <div
          className={styles.track}
          style={{ transform: `translateX(-${translateX}px)` }}
        >
          {services.map(card => (
            <div
              key={card.id}
              className={`${styles.card} ${card.featured ? styles.featured : ''}`}
            >
              <div className={styles.cardTop}>
                <div className={styles.cardTitle}>{card.title}</div>
                <div className={styles.cardIcon}>
                  <svg viewBox="0 0 24 24" fill="none"
                    stroke="rgba(255,255,255,0.75)"
                    strokeWidth="1.8" strokeLinecap="round"
                    strokeLinejoin="round" width={22} height={22}>
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
              </div>
              <p className={styles.cardDesc}>{card.description}</p>
              <div className={styles.cardImg}>
                <img src={card.image} alt={card.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesCarousel