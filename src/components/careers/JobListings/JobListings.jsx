import { useState } from 'react'
import { jobListings } from '../../../data/careers'
import styles from './JobListings.module.css'

const departments = ['All', 'Freight Forwarding', 'Logistics BPO', 'Customs & Consultancy', 'Sales & Marketing', 'Prime Business Solutions', 'Operations']

function JobListings() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [expandedId, setExpandedId] = useState(null)

  const filtered = activeFilter === 'All'
    ? jobListings
    : jobListings.filter(j => j.department === activeFilter)

  const toggle = (id) => setExpandedId(prev => prev === id ? null : id)

  return (
    <section className={styles.section} id="jobs">
      <div className={styles.header}>
        <div className={styles.label}>Open Positions</div>
        <h2 className={styles.title}>Current Job Openings</h2>
        <p className={styles.subtitle}>
          We are always looking for talented people to join our team.
          Explore our current openings below.
        </p>
      </div>

      {/* Filter tabs */}
      <div className={styles.filters}>
        {departments.map(dept => (
          <button
            key={dept}
            className={`${styles.filter} ${activeFilter === dept ? styles.filterActive : ''}`}
            onClick={() => setActiveFilter(dept)}
          >
            {dept}
          </button>
        ))}
      </div>

      {/* Job cards */}
      <div className={styles.list}>
        {filtered.length === 0 ? (
          <div className={styles.empty}>No openings in this department right now. Check back soon!</div>
        ) : (
          filtered.map(job => (
            <div key={job.id} className={styles.jobCard}>
              <div
                className={styles.jobHeader}
                onClick={() => toggle(job.id)}
              >
                <div className={styles.jobLeft}>
                  <div className={styles.jobTitle}>{job.title}</div>
                  <div className={styles.jobMeta}>
                    <span className={styles.metaTag}>{job.department}</span>
                    <span className={styles.metaDot} />
                    <span className={styles.metaText}>
                      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor"
                        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                        width={13} height={13}>
                        <path d="M8 1.5C5.5 1.5 3.5 3.5 3.5 6C3.5 9.5 8 14.5 8 14.5C8 14.5 12.5 9.5 12.5 6C12.5 3.5 10.5 1.5 8 1.5Z" />
                        <circle cx="8" cy="6" r="1.5" />
                      </svg>
                      {job.location}
                    </span>
                    <span className={styles.metaDot} />
                    <span className={styles.metaText}>{job.experience}</span>
                  </div>
                </div>
                <div className={styles.jobRight}>
                  <span className={styles.jobType}>{job.type}</span>
                  <svg
                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                    width={18} height={18}
                    className={`${styles.chevron} ${expandedId === job.id ? styles.chevronOpen : ''}`}
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </div>

              {expandedId === job.id && (
                <div className={styles.jobBody}>
                  <p className={styles.jobDesc}>{job.description}</p>
                  <a href="#apply" className={styles.applyBtn}>
                    Apply for This Role
                    <span className={styles.applyCircle}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="white"
                        strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                        width={13} height={13}>
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                      </svg>
                    </span>
                  </a>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </section>
  )
}

export default JobListings