import { internshipProgram } from '../../../data/careers'
import styles from './InternshipProgram.module.css'

function InternshipProgram() {
  return (
    <section className={styles.section} id="internship">
      <div className={styles.inner}>

        {/* Left content */}
        <div className={styles.content}>
          <div className={styles.label}>Internship Program</div>
          <h2 className={styles.title}>{internshipProgram.title}</h2>
          <div className={styles.subtitle}>{internshipProgram.subtitle}</div>
          <p className={styles.desc}>{internshipProgram.description}</p>

          {/* Duration + Departments */}
          <div className={styles.infoRow}>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  width={20} height={20}>
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div>
                <div className={styles.infoLabel}>Duration</div>
                <div className={styles.infoValue}>{internshipProgram.duration}</div>
              </div>
            </div>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  width={20} height={20}>
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div>
                <div className={styles.infoLabel}>Open To</div>
                <div className={styles.infoValue}>School Leavers & Undergrads</div>
              </div>
            </div>
          </div>

          {/* Departments */}
          <div className={styles.deptLabel}>Available Departments</div>
          <div className={styles.depts}>
            {internshipProgram.departments.map((dept, i) => (
              <span key={i} className={styles.deptTag}>{dept}</span>
            ))}
          </div>
        </div>

        {/* Right — benefits + contact */}
        <div className={styles.right}>

          {/* Benefits */}
          <div className={styles.benefitsCard}>
            <div className={styles.benefitsTitle}>What You Will Gain</div>
            <ul className={styles.benefits}>
              {internshipProgram.benefits.map((b, i) => (
                <li key={i} className={styles.benefitItem}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="#2563eb"
                    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                    width={16} height={16}>
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* Eligibility */}
          <div className={styles.eligibilityCard}>
            <div className={styles.eligibilityTitle}>Who Can Apply</div>
            <ul className={styles.eligibility}>
              {internshipProgram.eligibility.map((e, i) => (
                <li key={i} className={styles.eligibilityItem}>
                  <span className={styles.eligibilityDot} />
                  {e}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact person */}
          <div className={styles.contactCard}>
            <div className={styles.contactAvatar}>
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80"
                alt={internshipProgram.contact.name}
              />
            </div>
            <div className={styles.contactInfo}>
              <div className={styles.contactLabel}>Contact for Internships</div>
              <div className={styles.contactName}>{internshipProgram.contact.name}</div>
              <div className={styles.contactRole}>{internshipProgram.contact.role}</div>
              <a href={`mailto:${internshipProgram.contact.email}`} className={styles.contactEmail}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  width={14} height={14}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                {internshipProgram.contact.email}
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default InternshipProgram