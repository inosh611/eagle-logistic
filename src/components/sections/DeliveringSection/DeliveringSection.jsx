import styles from './DeliveringSection.module.css'

const checklist = [
  'We will never compromise the safety of our people',
  'Four decades of experience providing solutions',
  'See projects through and proactively develop solutions',
]

const svcItems = ['Air Freight', 'Warehousing', 'Sea Freight']
const doubled = [...svcItems, ...svcItems]

function DeliveringSection() {
  return (
    <div className={styles.section}>
      <div className={styles.grid}>

        {/* Truck image */}
        <div className={styles.imgCard}>
          <img
            src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80"
            alt="Truck"
          />
        </div>

        {/* Stats card */}
        <div className={styles.statsCard}>
          <div className={styles.statsTitle}>
            Delivering Monster for industry leaders
          </div>
          <svg className={styles.circles} viewBox="0 0 200 200">
            {[30, 50, 70, 90, 110, 130].map(r => (
              <circle
                key={r}
                cx="100" cy="100" r={r}
                fill="none"
                stroke="rgba(13,27,62,0.1)"
                strokeWidth="1"
              />
            ))}
          </svg>
          <div className={styles.statsBottom}>
            <div className={styles.statNum}>245<sup>+</sup></div>
            <div className={styles.statLabel}>
              Cargo Delivered Per<br />Month
            </div>
          </div>
        </div>

        {/* Text column */}
        <div className={styles.textCol}>
          <p className={styles.desc}>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
            aut fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt dolores suspendisse ultrices gravida risus.
          </p>
          <ul className={styles.checklist}>
            {checklist.map((item, i) => (
              <li key={i} className={styles.checkItem}>
                <svg viewBox="0 0 24 24" fill="none" width={18} height={18} style={{ flexShrink: 0, marginTop: 1 }}>
                  <path d="M20 6L9 17l-5-5" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
          <a href="#" className={styles.knowBtn}>
            Know About Us
            <span className={styles.knowCircle}>
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round" width={14} height={14}>
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </span>
          </a>
        </div>

      </div>

      {/* Services scrolling marquee */}
      <div className={styles.svcMarquee}>
        <div className={styles.svcTrack}>
          {doubled.map((svc, i) => (
            <div key={i} className={styles.svcItem}>
              <span className={styles.svcLabel}>{svc}</span>
              <div className={styles.svcDot}>
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"
                  strokeLinecap="round" strokeLinejoin="round" width={22} height={22}>
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DeliveringSection