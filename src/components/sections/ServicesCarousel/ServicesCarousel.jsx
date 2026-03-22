import { services } from '../../../data/servicesCarousel';
import { Icons } from './ServiceIcons';
import { useCarousel } from '../../../hooks/useCarousel';
import styles from './ServicesCarousel.module.css';

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
          {/* <button className={styles.arrow} onClick={goPrev} aria-label="Previous">
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
          </button> */}
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
          {services.map(card => {
            const IconComponent = Icons[card.icon]
            return (
              <div
                key={card.id}
                className={`${styles.card} ${card.featured ? styles.featured : ''}`}
              >
                <div className={styles.cardTop}>
                  <div className={styles.cardTitle}>{card.title}</div>
                  <div className={styles.cardIcon}>
                    {IconComponent && <IconComponent />}
                  </div>
                </div>
                <p className={styles.cardDesc}>{card.description}</p>
                <div className={styles.cardImg}>
                  <img
                    src={card.image}
                    alt={card.title}
                    loading="lazy"
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ServicesCarousel