import styles from './VideoCallSection.module.css'
import videoThumbnail from '../../../assets/video-thumbnail.jpg'

function VideoCallSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        {/* Left video */}
        <div className={styles.video}>
          <img
            src={videoThumbnail}
            alt="Logistics team"
            className={styles.videoImg}
            loading='lazy'
          />
          <div className={styles.videoOverlay} />
          <div className={styles.playBtn}>
            <svg viewBox="0 0 24 24" fill="#1d3faa" width={24} height={24} style={{ marginLeft: 4 }}>
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          </div>
        </div>

        {/* Right call card */}
        <div className={styles.callCard}>
          <svg className={styles.circles} viewBox="0 0 280 280">
            {[40, 65, 90, 115, 140].map(r => (
              <circle key={r} cx="140" cy="140" r={r} fill="none" stroke="white" strokeWidth="1.5" />
            ))}
          </svg>

          <div className={styles.dash} />
          <h3 className={styles.callTitle}>
            We know that every decision has an impact
          </h3>

          <div className={styles.phoneRow}>
            <div className={styles.phoneIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="#1d3faa" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round" width={26} height={26}>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.85a16 16 0 0 0 6 6l1.27-.9a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.02z" />
              </svg>
            </div>
            <div>
              <div className={styles.phoneLabel}>Call for free</div>
              <div className={styles.phoneNumber}>+92 (9800) 6869</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default VideoCallSection