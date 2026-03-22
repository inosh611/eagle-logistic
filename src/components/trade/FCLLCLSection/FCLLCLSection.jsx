import styles from './FCLLCLSection.module.css'

function FCLLCLSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        {/* Left text */}
        <div className={styles.left}>
          <div className={styles.label}>Shipping Modes Explained</div>
          <h2 className={styles.title}>FCL vs LCL — Which Is Right for You?</h2>
          <p className={styles.desc}>
            The trading term should be agreed between buyer and seller at the
            beginning of commercial engagement and documented in a contract.
            We specialize in helping you select the best cost-effective
            shipping mode and incoterms for your procurement arrangements.
          </p>
          <div className={styles.modeCards}>
            <div className={styles.modeCard} style={{ borderColor: '#2563eb', background: 'rgba(37,99,235,0.04)' }}>
              <div className={styles.modeTag} style={{ background: '#2563eb', color: '#fff' }}>FCL</div>
              <div className={styles.modeName}>Full Container Load</div>
              <p className={styles.modeDesc}>
                You book the entire container. Best for large shipments —
                maximum security, fixed transit times, no sharing.
              </p>
              <div className={styles.modeBest}>Best for: High-volume regular shipments</div>
            </div>
            <div className={styles.modeCard} style={{ borderColor: '#f97316', background: 'rgba(249,115,22,0.04)' }}>
              <div className={styles.modeTag} style={{ background: '#f97316', color: '#fff' }}>LCL</div>
              <div className={styles.modeName}>Less Than Container Load</div>
              <p className={styles.modeDesc}>
                Share container space with other shippers.
                Pay only for what you use — ideal for smaller shipments.
              </p>
              <div className={styles.modeBest}>Best for: Small to medium shipments</div>
            </div>
          </div>
          <a href="/contact" className={styles.btn}>
            Get a Free Mode Assessment
            <span className={styles.btnCircle}>
              <svg viewBox="0 0 24 24" fill="none" stroke="white"
                strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                width={13} height={13}>
                <line x1="7" y1="17" x2="17" y2="7"/>
                <polyline points="7 7 17 7 17 17"/>
              </svg>
            </span>
          </a>
        </div>

        {/* Right visual */}
        <div className={styles.right}>
          <div className={styles.visualCard}>

            {/* Header */}
            <div className={styles.visualHeader}>
              <div className={styles.visualTitle}>Container Comparison</div>
              <div className={styles.visualSubtitle}>Tap to see details</div>
            </div>

            {/* FCL visual */}
            <div className={styles.containerWrap}>
              <div className={styles.containerLabel} style={{ background: '#2563eb' }}>FCL</div>
              <div className={styles.containerHook}>
                <svg viewBox="0 0 40 24" fill="none" width={40} height={24}>
                  <line x1="20" y1="0" x2="20" y2="12" stroke="#94a3b8" strokeWidth="2"/>
                  <path d="M14 12 L26 12 L24 20 L16 20 Z" fill="#94a3b8" opacity="0.6"/>
                  <path d="M16 20 Q16 24 20 24 Q24 24 24 20" fill="none" stroke="#94a3b8" strokeWidth="1.5"/>
                </svg>
              </div>
              <div className={styles.container} style={{ background: '#2563eb' }}>
                <div className={styles.containerGrid}>
                  {Array.from({length: 18}).map((_, i) => (
                    <div key={i} className={styles.box} style={{ background: '#fbbf24', border: '1px solid #f59e0b' }}>
                      <div className={styles.boxInner}/>
                    </div>
                  ))}
                </div>
                <div className={styles.containerLabel2}>Your Shipment</div>
              </div>
            </div>

            {/* LCL visual */}
            <div className={styles.containerWrap}>
              <div className={styles.containerLabel} style={{ background: '#f97316' }}>LCL</div>
              <div className={styles.containerHook}>
                <svg viewBox="0 0 40 24" fill="none" width={40} height={24}>
                  <line x1="20" y1="0" x2="20" y2="12" stroke="#94a3b8" strokeWidth="2"/>
                  <path d="M14 12 L26 12 L24 20 L16 20 Z" fill="#94a3b8" opacity="0.6"/>
                  <path d="M16 20 Q16 24 20 24 Q24 24 24 20" fill="none" stroke="#94a3b8" strokeWidth="1.5"/>
                </svg>
              </div>
              <div className={styles.container} style={{ background: '#f97316' }}>
                <div className={styles.containerGrid}>
                  {Array.from({length: 18}).map((_, i) => (
                    <div key={i} className={styles.box}
                      style={{
                        background: i < 8 ? '#fbbf24' : '#10b981',
                        border: i < 8 ? '1px solid #f59e0b' : '1px solid #059669',
                        opacity: i < 8 ? 1 : 0.7
                      }}>
                      <div className={styles.boxInner}/>
                    </div>
                  ))}
                </div>
                <div className={styles.containerLabel2}>Your + Others</div>
              </div>
            </div>

            {/* Legend */}
            <div className={styles.legend}>
              <div className={styles.legendItem}>
                <div className={styles.legendDot} style={{ background: '#fbbf24' }}/>
                <span>Your shipment</span>
              </div>
              <div className={styles.legendItem}>
                <div className={styles.legendDot} style={{ background: '#10b981' }}/>
                <span>Other importers</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default FCLLCLSection