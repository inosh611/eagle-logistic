import styles from './MediaContact.module.css'

function MediaContact() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        {/* Left */}
        <div className={styles.left}>
          <div className={styles.label}>For Media</div>
          <h2 className={styles.title}>
            Media Enquiries &<br />Press Kit Downloads
          </h2>
          <p className={styles.desc}>
            For press enquiries, interview requests, high-resolution images
            or brand assets, please contact our media team directly. We aim
            to respond to all media enquiries within 24 hours.
          </p>

          {/* Contact details */}
          <div className={styles.contacts}>
            <a href="mailto:info@eaglelogistic.lk" className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  width={18} height={18}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div>
                <div className={styles.contactLabel}>Email</div>
                <div className={styles.contactValue}>info@eaglelogistic.lk</div>
              </div>
            </a>

            <a href="tel:+94XXXXXXXXX" className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  width={18} height={18}>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.85a16 16 0 0 0 6 6l1.27-.9a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.02z"/>
                </svg>
              </div>
              <div>
                <div className={styles.contactLabel}>Phone</div>
                <div className={styles.contactValue}>+94 11 XXX XXXX</div>
              </div>
            </a>
          </div>
        </div>

        {/* Right — press kit + social */}
        <div className={styles.right}>

          {/* Press kit download */}
          <div className={styles.pressKit}>
            <div className={styles.pressKitIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                width={28} height={28}>
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
            </div>
            <div className={styles.pressKitContent}>
              <div className={styles.pressKitTitle}>Download Press Kit</div>
              <div className={styles.pressKitSub}>
                Logos, brand assets, executive bios and company fact sheet
              </div>
            </div>
            <a href="#" className={styles.pressKitBtn}>
              Download
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                width={14} height={14}>
                <line x1="7" y1="17" x2="17" y2="7"/>
                <polyline points="7 7 17 7 17 17"/>
              </svg>
            </a>
          </div>

          {/* Social media */}
          <div className={styles.social}>
            <div className={styles.socialTitle}>Follow Our Story</div>
            <div className={styles.socialLinks}>
              {[
                { name: 'LinkedIn', icon: 'linkedin', href: '#' },
                { name: 'Facebook', icon: 'facebook', href: '#' },
                { name: 'Twitter / X', icon: 'twitter', href: '#' },
                { name: 'Instagram', icon: 'instagram', href: '#' },
              ].map(s => (
                <a key={s.name} href={s.href} className={styles.socialLink}>
                  <div className={styles.socialIcon}>
                    {s.icon === 'linkedin' && (
                      <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16}>
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/>
                        <rect x="2" y="9" width="4" height="12"/>
                        <circle cx="4" cy="4" r="2"/>
                      </svg>
                    )}
                    {s.icon === 'facebook' && (
                      <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16}>
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                      </svg>
                    )}
                    {s.icon === 'twitter' && (
                      <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16}>
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    )}
                    {s.icon === 'instagram' && (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        width={16} height={16}>
                        <rect x="2" y="2" width="20" height="20" rx="5"/>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                      </svg>
                    )}
                  </div>
                  <span>{s.name}</span>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default MediaContact