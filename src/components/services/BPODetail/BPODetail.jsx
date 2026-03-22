import { bpoData } from '../../../data/services'
import styles from './BPODetail.module.css'

const stepColors = ['#f97316', '#ef4444', '#3b82f6', '#0f6e56']

// ── BPO mosaic images ─────────────────────────────────────
const bpoImages = [
  'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&q=80',
  'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&q=80',
  'https://images.unsplash.com/photo-1553829783-8e36e037f4dc?w=600&q=80',
  'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&q=80',
  'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
  'https://images.unsplash.com/photo-1520637836862-4d197d17c93a?w=600&q=80',
  'https://images.unsplash.com/photo-1566936737687-8f392a237b8b?w=600&q=80',
  'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80',
  'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80',
]

function BPODetail() {
  return (
    <>
      {/* ── Intro ── */}
      <section className={styles.intro}>
        <div className={styles.introInner}>
          <div className={styles.introLeft}>
            <div className={styles.label}>Logistics BPO</div>
            <h2 className={styles.introTitle}>{bpoData.intro.title}</h2>
          </div>
          <p className={styles.introDesc}>{bpoData.intro.description}</p>
        </div>
      </section>

      {/* ── Logistics isn't easy ── */}
      <section className={styles.notEasy}>
        <div className={styles.notEasyInner}>

          {/* Left text */}
          <div className={styles.notEasyText}>
            <div className={styles.label}>The Challenge</div>
            <h2 className={styles.notEasyTitle}>
              Logistics and Shipping<br />
              <span className={styles.notEasyAccent}>isn't easy.</span>
            </h2>
            <p className={styles.notEasyDesc}>
              Our optimized Logistics Business Process Outsourcing Services are
              designed to scale your business and its operations. While you focus
              on strategic growth, our teams ensure that your back-end Supply Chain
              Processes are equipped to deliver on that vision.
            </p>
            <p className={styles.notEasyDesc}>
              From data entry and shipment tracking to invoice processing and
              compliance reporting — Eagle Logistic's BPO division takes on the
              complexity so you don't have to.
            </p>

            {/* Key points */}
            <div className={styles.keyPoints}>
              {[
                'Scale without hiring',
                'Reduce operational costs by 45%',
                'Ensure 100% compliance',
                'Focus on your core business',
              ].map((point, i) => (
                <div key={i} className={styles.keyPoint}>
                  <div className={styles.keyPointIcon}>
                    <svg viewBox="0 0 16 16" fill="none"
                      stroke="white" strokeWidth="2.5"
                      strokeLinecap="round" strokeLinejoin="round"
                      width={10} height={10}>
                      <path d="M13 4L6 11 3 8" />
                    </svg>
                  </div>
                  {point}
                </div>
              ))}
            </div>

            <a href="/contact" className={styles.notEasyBtn}>
              Talk to Our BPO Team
              <span className={styles.notEasyBtnCircle}>
                <svg viewBox="0 0 24 24" fill="none" stroke="white"
                  strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                  width={13} height={13}>
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </span>
            </a>
          </div>

          {/* Right — 3x3 mosaic grid */}
          <div className={styles.mosaicWrap}>
            <div className={styles.mosaic}>
              {bpoImages.map((img, i) => (
                <div
                  key={i}
                  className={`${styles.mosaicCell} ${
                    i === 4 ? styles.mosaicCellCenter : ''
                  }`}
                >
                  <img src={img} alt="" loading="lazy" />
                  <div className={styles.mosaicOverlay} />
                </div>
              ))}
            </div>

            {/* Floating stat badge */}
            <div className={styles.mosaicBadge}>
              <div className={styles.mosaicBadgeValue}>45%</div>
              <div className={styles.mosaicBadgeLabel}>Average cost<br />reduction</div>
            </div>
          </div>

        </div>
      </section>

      {/* ── Benefits ── */}
      <section className={styles.benefits}>
        <div className={styles.benefitsHeader}>
          <div className={styles.label}>Why Eagle BPO</div>
          <h2 className={styles.benefitsTitle}>
            Six Reasons Clients Choose Our BPO
          </h2>
        </div>
        <div className={styles.benefitsGrid}>
          {bpoData.benefits.map((b, i) => (
            <div key={b.id} className={styles.benefitCard}>
              <div className={styles.benefitNum}>0{i + 1}</div>
              <h3 className={styles.benefitTitle}>{b.title}</h3>
              <p className={styles.benefitDesc}>{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Snake Process ── */}
      <section className={styles.processSection}>
        <div className={styles.processHeader}>
          <div className={styles.labelLight}>How It Works</div>
          <h2 className={styles.processTitle}>Our BPO Onboarding Process</h2>
          <p className={styles.processSub}>
            A simple, proven four-step process that gets you live
            fast and delivering results from day one.
          </p>
        </div>

        <div className={styles.snake}>
          <svg
            className={styles.snakePath}
            viewBox="0 0 600 520"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M 300 40
                 C 480 40, 520 140, 520 160
                 C 520 180, 480 260, 300 260
                 C 120 260, 80 340, 80 360
                 C 80 380, 120 460, 300 480"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="3"
              strokeDasharray="10 8"
              fill="none"
            />
          </svg>

          {bpoData.process.map((step, i) => {
            const isRight = i % 2 === 0
            const color = stepColors[i % stepColors.length]
            return (
              <div
                key={i}
                className={`${styles.snakeStep} ${isRight ? styles.snakeRight : styles.snakeLeft}`}
              >
                <div
                  className={styles.snakeCard}
                  style={{ '--step-color': color }}
                >
                  <div className={styles.snakeCardInner}>
                    <h3 className={styles.snakeTitle}>{step.title}</h3>
                    <p className={styles.snakeDesc}>{step.desc}</p>
                  </div>
                  <div
                    className={`${styles.snakeNum} ${isRight ? styles.snakeNumRight : styles.snakeNumLeft}`}
                    style={{ background: color }}
                  >
                    {step.step}
                  </div>
                  <div
                    className={`${styles.snakeDot} ${isRight ? styles.snakeDotRight : styles.snakeDotLeft}`}
                    style={{ borderColor: color }}
                  >
                    <div className={styles.snakeDotInner} style={{ background: color }} />
                  </div>
                </div>
                {i < bpoData.process.length - 1 && (
                  <div className={styles.snakeConnector}>
                    <svg viewBox="0 0 120 60" fill="none" width="120" height="60">
                      <path
                        d={isRight
                          ? "M 10 10 C 60 10, 60 50, 110 50"
                          : "M 110 10 C 60 10, 60 50, 10 50"
                        }
                        stroke={`${color}50`}
                        strokeWidth="2.5"
                        strokeDasharray="6 5"
                        fill="none"
                      />
                      <circle cx={isRight ? "110" : "10"} cy="50" r="4"
                        fill={color} opacity="0.7" />
                    </svg>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default BPODetail