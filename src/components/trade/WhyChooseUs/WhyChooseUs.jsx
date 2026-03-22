import { whyChooseUs } from '../../../data/tradeConsultation'
import styles from './WhyChooseUs.module.css'

function WhyIcon({ icon }) {
  switch (icon) {
    case 'hands':
      return (
        <svg viewBox="0 0 48 48" fill="none" width={36} height={36}>
          <path d="M14 22 L14 14 C14 12 16 10 18 10 C20 10 22 12 22 14 L22 22"
            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M22 16 C22 14 24 12 26 12 C28 12 30 14 30 16 L30 22"
            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M30 18 C30 16 32 15 34 16 L34 30 C34 36 30 40 24 40 L20 40 C16 40 14 38 12 34 L8 26 C7 24 8 22 10 22 C11 22 13 23 14 25"
            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    case 'local':
      return (
        <svg viewBox="0 0 48 48" fill="none" width={36} height={36}>
          <circle cx="24" cy="20" r="8" stroke="currentColor" strokeWidth="2.5"/>
          <path d="M12 42 C12 34 36 34 36 42" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="24" cy="20" r="3" fill="currentColor" opacity="0.4"/>
        </svg>
      )
    case 'cost':
      return (
        <svg viewBox="0 0 48 48" fill="none" width={36} height={36}>
          <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2.5"/>
          <path d="M24 14 L24 16 M24 32 L24 34"
            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M18 19 C18 16 30 16 30 21 C30 26 18 24 18 29 C18 34 30 34 30 31"
            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
      )
    case 'support':
      return (
        <svg viewBox="0 0 48 48" fill="none" width={36} height={36}>
          <path d="M8 20 C8 12 15 6 24 6 C33 6 40 12 40 20"
            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <rect x="6" y="20" width="8" height="12" rx="4"
            stroke="currentColor" strokeWidth="2.5"/>
          <rect x="34" y="20" width="8" height="12" rx="4"
            stroke="currentColor" strokeWidth="2.5"/>
          <path d="M40 32 C40 38 33 42 24 42"
            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="24" cy="42" r="2" fill="currentColor"/>
        </svg>
      )
    default: return null
  }
}

const colors = ['#2563eb', '#0f6e56', '#854f0b', '#993556']

function WhyChooseUs() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        {/* Left heading */}
        <div className={styles.left}>
          <div className={styles.label}>Why Eagle Logistic</div>
          <h2 className={styles.title}>
            The Consultation Partner<br />
            That Delivers Results
          </h2>
          <p className={styles.desc}>
            We don't just advise — we roll up our sleeves and work alongside
            your team to implement real, measurable improvements in your
            logistics operations.
          </p>
          <div className={styles.imgWrap}>
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80"
              alt="Consultation team"
              loading="lazy"
            />
            <div className={styles.imgBadge}>
              <div className={styles.imgBadgeNum}>15+</div>
              <div className={styles.imgBadgeLabel}>Years of<br/>Experience</div>
            </div>
          </div>
        </div>

        {/* Right cards */}
        <div className={styles.right}>
          {whyChooseUs.map((item, i) => (
            <div
              key={item.id}
              className={styles.card}
              style={{ '--card-color': colors[i] }}
            >
              <div
                className={styles.cardIcon}
                style={{ color: colors[i], background: `${colors[i]}12` }}
              >
                <WhyIcon icon={item.icon} />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.description}</p>
              </div>
              <div className={styles.cardArrow} style={{ color: colors[i] }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                  width={16} height={16}>
                  <line x1="7" y1="17" x2="17" y2="7"/>
                  <polyline points="7 7 17 7 17 17"/>
                </svg>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default WhyChooseUs