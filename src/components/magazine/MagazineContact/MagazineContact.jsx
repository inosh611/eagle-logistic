import { magazineCoordinator } from '../../../data/magazine'
import styles from './MagazineContact.module.css'

function MagazineContact() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        {/* Header */}
        <div className={styles.header}>
          <div className={styles.label}>Get Involved</div>
          <h2 className={styles.title}>
            For Article and Advertisement Inquiries
          </h2>
          <p className={styles.subtitle}>
            Want to contribute an article, feature your company or advertise
            in the next edition of E-Visible? Our magazine coordinator will
            be happy to help.
          </p>
        </div>

        {/* Contact card */}
        <div className={styles.contactCard}>

          {/* Photo side */}
          <div className={styles.photoSide}>
            <div className={styles.photoWrap}>
              <img
                src={magazineCoordinator.image}
                alt={magazineCoordinator.name}
                loading="lazy"
              />
            </div>
            <div className={styles.photoDecor} />
          </div>

          {/* Info side */}
          <div className={styles.infoSide}>
            <div className={styles.roleBadge}>Magazine Team</div>
            <h3 className={styles.name}>{magazineCoordinator.name}</h3>
            <div className={styles.role}>{magazineCoordinator.role}</div>

            <div className={styles.divider} />

            <div className={styles.contactLinks}>
              <a href={`tel:${magazineCoordinator.phone}`} className={styles.contactLink}>
                <div className={styles.contactLinkIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    width={18} height={18}>
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.85a16 16 0 0 0 6 6l1.27-.9a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.02z"/>
                  </svg>
                </div>
                <div>
                  <div className={styles.contactLinkLabel}>Phone</div>
                  <div className={styles.contactLinkValue}>{magazineCoordinator.phone}</div>
                </div>
              </a>

              <a href={`mailto:${magazineCoordinator.email}`} className={styles.contactLink}>
                <div className={styles.contactLinkIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    width={18} height={18}>
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <div className={styles.contactLinkLabel}>Email</div>
                  <div className={styles.contactLinkValue}>{magazineCoordinator.email}</div>
                </div>
              </a>
            </div>

            <div className={styles.actions}>
              <a href={`tel:${magazineCoordinator.phone}`} className={styles.btnPrimary}>
                Call Now
                <span className={styles.btnCircle}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="white"
                    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                    width={13} height={13}>
                    <line x1="7" y1="17" x2="17" y2="7"/>
                    <polyline points="7 7 17 7 17 17"/>
                  </svg>
                </span>
              </a>
              <a href={`mailto:${magazineCoordinator.email}`} className={styles.btnOutline}>
                Send Email
              </a>
            </div>
          </div>

        </div>

        {/* What you can do */}
        <div className={styles.options}>
          {[
            { icon: 'write', title: 'Submit an Article', desc: 'Share your expertise with 500+ supply chain professionals across Sri Lanka.' },
            { icon: 'ad', title: 'Advertise with Us', desc: 'Reach a targeted audience of decision-makers in the supply chain industry.' },
            { icon: 'feature', title: 'Get Featured', desc: 'Showcase your company story, leadership or innovations in our next edition.' },
          ].map((opt, i) => (
            <div key={i} className={styles.optionCard}>
              <div className={styles.optionIcon}>
                {opt.icon === 'write' && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    width={22} height={22}>
                    <path d="M12 20h9"/>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
                  </svg>
                )}
                {opt.icon === 'ad' && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    width={22} height={22}>
                    <rect x="2" y="3" width="20" height="14" rx="2"/>
                    <line x1="8" y1="21" x2="16" y2="21"/>
                    <line x1="12" y1="17" x2="12" y2="21"/>
                  </svg>
                )}
                {opt.icon === 'feature' && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    width={22} height={22}>
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                )}
              </div>
              <h4 className={styles.optionTitle}>{opt.title}</h4>
              <p className={styles.optionDesc}>{opt.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default MagazineContact