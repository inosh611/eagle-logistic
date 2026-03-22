import { howItWorks } from '../../../data/howItWorks'
import { useAccordion } from '../../../hooks/useAccordion'
import styles from './HowItWorks.module.css'

function HowItWorks() {
  const { openIndex, rowRef, handleEnter, handleRowLeave } = useAccordion(2)

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className={styles.label}>How It Works</div>
        <h2 className={styles.title}>
          Logistics Solutions to<br />Help Businesses
        </h2>
      </div>

      <div
        className={styles.row}
        ref={rowRef}
        onMouseLeave={handleRowLeave}
      >
        {howItWorks.map((panel, i) => {
          const isOpen = openIndex === i
          return (
            <div
              key={panel.id}
              className={`${styles.panel} ${isOpen ? styles.panelOpen : ''}`}
              onMouseEnter={() => handleEnter(i)}
            >
              {/* Collapsed state */}
              <div className={`${styles.collapsed} ${isOpen ? styles.collapsedHidden : ''}`}>
                <div className={styles.stepNum}>{panel.step}</div>
                <span className={styles.vertLabel}>{panel.title}</span>
              </div>

              {/* Expanded state */}
              <div className={`${styles.expanded} ${isOpen ? styles.expandedVisible : ''}`}>
                {!panel.textOnly && (
                  <div className={styles.imgWrap}>
                    <img src={panel.image} alt={panel.title} />
                  </div>
                )}
                {!panel.imageOnly && (
                  <div className={`${styles.info} ${panel.textOnly ? styles.infoFull : ''}`}>
                    <div className={styles.stepNum}>{panel.step}</div>
                    <div className={`${styles.panelTitle} ${panel.textOnly ? styles.panelTitleLg : ''}`}>
                      {panel.title}
                    </div>
                    {panel.description && (
                      <p className={styles.panelDesc}>{panel.description}</p>
                    )}
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default HowItWorks