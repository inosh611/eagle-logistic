import styles from './FreightDetail.module.css'

// ── Ocean Freight images ──────────────────────────────────
const oceanImages = [
  'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&q=80',
  'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&q=80',
  'https://images.unsplash.com/photo-1553829783-8e36e037f4dc?w=600&q=80',
  'https://images.unsplash.com/photo-1566936737687-8f392a237b8b?w=600&q=80',
  'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
  'https://images.unsplash.com/photo-1520637836862-4d197d17c93a?w=600&q=80',
]

// ── Air Freight images ────────────────────────────────────
const airImages = [
  'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80',
  'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=600&q=80',
  'https://images.unsplash.com/photo-1569629743817-70d8db6c323b?w=600&q=80',
  'https://images.unsplash.com/photo-1548858806-e6a6a15e95e3?w=600&q=80',
  'https://images.unsplash.com/photo-1583967395832-30b42e56aafb?w=600&q=80',
  'https://images.unsplash.com/photo-1530822847156-5df684ec5933?w=600&q=80',
]

const oceanServices = [
  { label: 'LCL & FCL Services' },
  { label: 'RO/RO & Break Bulk' },
  { label: 'CY to CY / CFS to CFS' },
  { label: 'Port to Port & Door to Door' },
  { label: 'Freight Consolidation' },
  { label: 'Multi-Modal Transport' },
]

const airServices = [
  { label: 'Door to Door Services' },
  { label: 'Door to Airport Services' },
  { label: 'Express Freight' },
  { label: 'Same Day Departure' },
  { label: 'Heavy Equipment Freight' },
  { label: 'Time-Critical Shipments' },
]

const stats = [
  { value: '240+', label: 'Cities Worldwide' },
  { value: '20+',  label: 'Years Experience' },
  { value: '100%', label: 'On-Time Documentation' },
]

function ImageGrid({ images }) {
  return (
    <div className={styles.imageGrid}>
      <div className={styles.imgCol}>
        <div className={styles.imgWrap}>
          <img src={images[0]} alt="" loading="lazy" />
        </div>
        <div className={styles.imgWrap}>
          <img src={images[3]} alt="" loading="lazy" />
        </div>
      </div>
      <div className={styles.imgColMid}>
        <div className={`${styles.imgWrap} ${styles.imgTall}`}>
          <img src={images[1]} alt="" loading="lazy" />
        </div>
        <div className={styles.imgWrap}>
          <img src={images[4]} alt="" loading="lazy" />
        </div>
      </div>
      <div className={styles.imgCol}>
        <div className={styles.imgWrap}>
          <img src={images[2]} alt="" loading="lazy" />
        </div>
        <div className={styles.imgWrap}>
          <img src={images[5]} alt="" loading="lazy" />
        </div>
      </div>
    </div>
  )
}

function FreightDetail() {
  return (
    <div className={styles.wrapper}>

      {/* ── Stats bar ── */}
      <div className={styles.statsBar}>
        {stats.map((s, i) => (
          <div key={i} className={styles.statItem}>
            <div className={styles.statValue}>{s.value}</div>
            <div className={styles.statLabel}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* ── Intro ── */}
      <section className={styles.intro}>
        <div className={styles.introInner}>
          <div className={styles.introLeft}>
            <div className={styles.label}>International Trade</div>
            <h2 className={styles.introTitle}>
              Ocean & Air Freight —<br />LCL and FCL
            </h2>
          </div>
          <p className={styles.introDesc}>
            Eagle Logistic offers a full range of International Trade services,
            connecting Sri Lankan businesses to global markets. Our expert team
            handles everything from booking and documentation to customs clearance
            and final delivery - ensuring your cargo arrives safely, on time, and
            in full compliance with all regulations.
          </p>
        </div>
      </section>

      
      {/* ── Ocean Freight ── */}
      <section className={styles.freightSection}>
        <div className={styles.freightInner}>

          {/* Left — text */}
          <div className={styles.textSide}>
            <div className={styles.serviceTag} style={{ background: 'rgba(37,99,235,0.1)', color: '#2563eb' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                width={14} height={14}>
                <path d="M4 16l8-8 8 8" />
                <path d="M2 20 Q12 23 22 20" />
                <line x1="12" y1="8" x2="12" y2="20" />
              </svg>
              Ocean Freight
            </div>

            <h2 className={styles.serviceTitle}>
              Global Ocean Freight<br />Solutions
            </h2>

            <p className={styles.serviceDesc}>
              In today's Global Business Environment, companies are in dire need to
              effectively use Ocean Freight services to transport finished goods and
              spare parts. The Ocean Transportation unit at Eagle Logistics has
              experience in handling the most delicate and time-sensitive
              consignments — to and from anywhere across the globe.
            </p>

            <p className={styles.serviceDesc}>
              In conjunction with our Global Network of Offices and Agents, we
              offer our clients a multitude of ocean carriers and services at
              competitive prices — ensuring reliability, speed and full compliance
              at every port of call.
            </p>

            {/* Services grid */}
            <div className={styles.servicesLabel}>Our Ocean Freight Services</div>
            <div className={styles.servicesList}>
              {oceanServices.map((s, i) => (
                <div key={i} className={styles.serviceItem}>
                  <div className={styles.serviceItemDot} style={{ background: '#2563eb' }} />
                  {s.label}
                </div>
              ))}
            </div>

            <a href="/contact" className={styles.ctaBtn} style={{ background: '#2563eb' }}>
              Get an Ocean Freight Quote
              <span className={styles.ctaBtnCircle}>
                <svg viewBox="0 0 24 24" fill="none" stroke="white"
                  strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                  width={13} height={13}>
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </span>
            </a>
          </div>

          {/* Right — image grid */}
          <div className={styles.imageSide}>
            <ImageGrid images={oceanImages} />
          </div>

        </div>
      </section>

      {/* ── Divider ── */}
      {/* <div className={styles.divider}>
        <div className={styles.dividerLine} />
        <div className={styles.dividerIcon}>
          <svg viewBox="0 0 24 24" fill="none" stroke="white"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            width={18} height={18}>
            <line x1="12" y1="5" x2="12" y2="19" />
            <polyline points="19 12 12 19 5 12" />
          </svg>
        </div>
        <div className={styles.dividerLine} />
      </div> */}

      {/* ── Air Freight ── */}
      <section className={styles.freightSection}>
        <div className={`${styles.freightInner} ${styles.freightReverse}`}>

          {/* Left — image grid */}
          <div className={styles.imageSide}>
            <ImageGrid images={airImages} />
          </div>

          {/* Right — text */}
          <div className={styles.textSide}>
            <div className={styles.serviceTag} style={{ background: 'rgba(15,110,86,0.1)', color: '#0f6e56' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                width={14} height={14}>
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
              </svg>
              Air Freight
            </div>

            <h2 className={styles.serviceTitle}>
              Express Air Freight<br />Worldwide
            </h2>

            <p className={styles.serviceDesc}>
              We specialize in Air Freight Services to Worldwide Destinations.
              Your shipments are allocated onto the next-available-flight-out
              basis and are routed for same day departure — ensuring your
              time-critical cargo arrives exactly when it needs to.
            </p>

            <p className={styles.serviceDesc}>
              We air-freight even the smallest of parcels subject to sensitive
              time-constraints, through to heavy equipment requiring expedited
              service. Our services fully comply with aircraft compliances while
              ensuring you get the best service out there.
            </p>

            {/* Services grid */}
            <div className={styles.servicesLabel}>Our Air Freight Services</div>
            <div className={styles.servicesList}>
              {airServices.map((s, i) => (
                <div key={i} className={styles.serviceItem}>
                  <div className={styles.serviceItemDot} style={{ background: '#0f6e56' }} />
                  {s.label}
                </div>
              ))}
            </div>

            <a href="/contact" className={styles.ctaBtn} style={{ background: '#0f6e56' }}>
              Get an Air Freight Quote
              <span className={styles.ctaBtnCircle}>
                <svg viewBox="0 0 24 24" fill="none" stroke="white"
                  strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                  width={13} height={13}>
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </span>
            </a>
          </div>

        </div>
      </section>

    </div>
  )
}

export default FreightDetail