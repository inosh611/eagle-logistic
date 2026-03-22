import { leadershipTeam } from '../../../data/about'
import styles from './LeadershipTeam.module.css'

function PersonCard({ person }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardImg}>
        <img src={person.image} alt={person.name} />
        <a href={person.linkedin} className={styles.linkedin} target="_blank" rel="noreferrer">
          <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16}>
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </a>
      </div>
      <div className={styles.cardInfo}>
        <div className={styles.cardName}>{person.name}</div>
        <div className={styles.cardRole}>{person.role}</div>
      </div>
    </div>
  )
}

function LeadershipTeam() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className={styles.label}>Our People</div>
        <h2 className={styles.title}>Meet the Leadership Team</h2>
        <p className={styles.subtitle}>
          Experienced leaders who have shaped Eagle Logistic into the
          industry-leading company it is today.
        </p>
      </div>

      {/* Directors */}
      <div className={styles.groupLabel}>Board of Directors</div>
      <div className={styles.directorsGrid}>
        {leadershipTeam.directors.map(person => (
          <PersonCard key={person.id} person={person} />
        ))}
      </div>

      {/* Senior Management */}
      <div className={styles.groupLabel} style={{ marginTop: 56 }}>
        Senior Management
      </div>
      <div className={styles.seniorManagementGrid}>
        {leadershipTeam.seniorManagement.map(person => (
          <PersonCard key={person.id} person={person} />
        ))}
      </div>

      {/* S Management */}
      <div className={styles.groupLabel} style={{ marginTop: 56 }}>
        Management
      </div>
      <div className={styles.managementGrid}>
        {leadershipTeam.management.map(person => (
          <PersonCard key={person.id} person={person} />
        ))}
      </div>
    </section>
  )
}

export default LeadershipTeam