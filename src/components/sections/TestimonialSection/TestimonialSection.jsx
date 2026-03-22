import { testimonials } from '../../../data/testimonials'
import { useTestimonial } from '../../../hooks/useTestimonial'
import styles from './TestimonialSection.module.css'

function TestimonialSection() {
  const { current, goTo } = useTestimonial(testimonials.length)
  const testi = testimonials[current]

  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        {/* Rotating badge */}
        <div className={styles.badge}>
          <svg className={styles.badgeCircle} viewBox="0 0 200 200">
            <defs>
              <path id="badgePath" d="M 100,100 m -72,0 a 72,72 0 1,1 144,0 a 72,72 0 1,1 -144,0" />
            </defs>
            <text fontFamily="'Barlow', sans-serif" fontSize="13.5" fontWeight="700" fill="#6b7fa3" letterSpacing="7">
              <textPath href="#badgePath">TRUSTED BY CLIENTS - TESTIMONIAL -</textPath>
            </text>
          </svg>
          <div className={styles.badgeCenter}>
            <svg viewBox="0 0 24 24" fill="white" width={48} height={48}>
              <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
            </svg>
          </div>
        </div>

        {/* Quote — key forces re-animation */}
        <div key={current} className={styles.content}>
          <div className={styles.stars}>
            {Array.from({ length: testi.rating }).map((_, i) => (
              <svg key={i} viewBox="0 0 24 24" fill="#f59e0b" width={22} height={22}>
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          <p className={styles.quote}>{testi.quote}</p>
          <div className={styles.author}>
            <div className={styles.authorImg}>
              <img src={testi.avatar} alt={testi.name} />
            </div>
            <div>
              <div className={styles.authorName}>{testi.name}</div>
              <div className={styles.authorRole}>{testi.role}</div>
            </div>
          </div>
        </div>
        
        {/* Vertical dots */}
        <div className={styles.dots}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default TestimonialSection