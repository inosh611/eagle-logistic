import { teamMembers } from '../../../data/team'
import styles from './TeamSection.module.css'

function TeamSection() {
  return (
    <section className={styles.section}>
      <div className={styles.layout}>

        <div className={styles.header}>
          <div className={styles.label}>Our Experience</div>
          <h2 className={styles.title}>
            Meet Our Special Support Team Members!
          </h2>
        </div>

        <div className={styles.grid}>
          {teamMembers.map(member => (
            <div key={member.id} className={styles.avatar}>
              <img src={member.image} alt={member.name} />
              <div className={styles.overlay}>
                <span className={styles.memberName}>{member.name}</span>
                <small className={styles.memberRole}>{member.role}</small>
              </div>
            </div>
          ))}

          <a href="#" className={styles.viewAll}>
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"
              strokeLinecap="round" strokeLinejoin="round" width={22} height={22}>
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
            <span className={styles.viewAllText}>View All<br />Members</span>
          </a>
        </div>

      </div>
    </section>
  )
}

export default TeamSection