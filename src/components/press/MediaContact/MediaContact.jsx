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
            <a href="mailto:info@eaglelogisticscmb.com" className={styles.contactItem}>
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
                <div className={styles.contactValue}>info@eaglelogisticscmb.com</div>
              </div>
            </a>

            <a href="tel:0112577892" className={styles.contactItem}>
              <div className={styles.contactIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  width={18} height={18}>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.85a16 16 0 0 0 6 6l1.27-.9a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.02z"/>
                </svg>
              </div>
              <div>
                <div className={styles.contactLabel}>Phone</div>
                <div className={styles.contactValue}>011 2577892</div>
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
                { name: 'Facebook', icon: 'facebook', href: 'https://facebook.com/EagleLogisticsCMB' },
                { name: 'YouTube', icon: 'youtube', href: 'https://youtube.com/@EagleLogisticsCMB' },
                { name: 'Instagram', icon: 'instagram', href: 'https://instagram.com/eagle_logistics_cmb' },
                { name: 'LinkedIn', icon: 'linkedin', href: 'https://linkedin.com/company/eagle-logistics-cmb' },
                { name: 'TikTok', icon: 'tiktok', href: 'https://tiktok.com/@eaglelogistics' },
              ].map(s => (
                <a key={s.name} href={s.href} target="_blank" rel="noreferrer" className={styles.socialLink}>
                  <div className={styles.socialIcon}>
                    {s.icon === 'facebook' && (
                      <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16}>
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                      </svg>
                    )}
                    {s.icon === 'youtube' && (
                      <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16}>
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
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
                    {s.icon === 'linkedin' && (
                      <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16}>
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/>
                        <rect x="2" y="9" width="4" height="12"/>
                        <circle cx="4" cy="4" r="2"/>
                      </svg>
                    )}
                    {s.icon === 'tiktok' && (
                      <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16}>
                        <path d="M12.525 2.003c1.31 0 2.446.002 3.557.014a.784.784 0 0 1 .773.743c.092 1.488.674 2.868 1.676 3.905A6.866 6.866 0 0 0 22.5 8.272a.776.776 0 0 1 .775.776v3.235a.778.778 0 0 1-.775.777 9.873 9.873 0 0 1-4.025-.867 9.94 9.94 0 0 1-1.95-1.173v7.353c0 4.14-3.36 7.5-7.5 7.5a7.5 7.5 0 0 1-7.5-7.5c0-4.14 3.36-7.5 7.5-7.5.42 0 .83.035 1.23.102a.78.78 0 0 1 .65.766v3.313a.78.78 0 0 1-.65.768 4.453 4.453 0 0 0-1.23-.174 4.5 4.5 0 1 0 4.5 4.5V2.78a.78.78 0 0 1 .775-.777z"/>
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