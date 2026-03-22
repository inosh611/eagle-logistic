import { slides } from '../../../data/slides'
import { useSlider } from '../../../hooks/useSlider'
import styles from './HeroSlider.module.css'

function HeroSlider() {
  const { current, progress, goNext, goPrev, goToIndex } = useSlider(slides.length)

  return (
    <section className={styles.slider}>
      {slides.map((slide, i) => (
        <div key={slide.id} className={`${styles.slide} ${i === current ? styles.active : ''}`}>
          {/* Background */}
          <div
            className={`${styles.bg} ${i === current ? styles.bgZoom : ''}`}
            style={{ backgroundImage: `url(${slide.bgImage})` }}
          />
          {/* Overlay */}
          <div className={styles.overlay} />

          {/* Content */}
          <div className={`${styles.content} ${i === current ? styles.contentVisible : ''}`}>
            <span className={styles.tag}>{slide.tag}</span>
            <h1 className={styles.title} style={{ whiteSpace: 'pre-line' }}>{slide.title}</h1>
            <div className={styles.ctaWrap}>
              <a href="#" className={styles.cta}>
                <span className={styles.ctaCircle}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"
                    strokeLinecap="round" strokeLinejoin="round" width={16} height={16}>
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </span>
                {slide.cta}
              </a>
            </div>
          </div>

          {/* Description */}
          <p className={`${styles.description} ${i === current ? styles.descVisible : ''}`}>
            {slide.description}
          </p>
        </div>
      ))}

      {/* Dots */}
      <div className={styles.dots}>
        {slides.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
            onClick={() => goToIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Arrows */}
      <button className={`${styles.arrow} ${styles.arrowPrev}`} onClick={goPrev} aria-label="Previous">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round" width={18} height={18}>
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button className={`${styles.arrow} ${styles.arrowNext}`} onClick={goNext} aria-label="Next">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round" width={18} height={18}>
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Counter */}
      <div className={styles.counter}>
        <span className={styles.counterCurrent}>{String(current + 1).padStart(2, '0')}</span>
        {' / '}
        {String(slides.length).padStart(2, '0')}
      </div>

      {/* Progress bar */}
      <div className={styles.progress} style={{ width: `${progress}%` }} />
    </section>
  )
}

export default HeroSlider