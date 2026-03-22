import { useState } from 'react'
import styles from './Navbar.module.css'

function MobileMenu({ items }) {
  const [openId, setOpenId] = useState(null)

  const toggle = (id) => setOpenId(prev => prev === id ? null : id)

  return (
    <div className={styles.mobileMenu}>
      {items.map(item => (
        <div key={item.id} className={styles.mobileItem}>
          {item.dropdown ? (
            <>
              <div
                className={styles.mobileHeader}
                onClick={() => toggle(item.id)}
              >
                {item.label}
                <svg
                  viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                  width={16} height={16}
                  className={`${styles.chevron} ${openId === item.id ? styles.chevronOpen : ''}`}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>

              {openId === item.id && (
                <div className={styles.mobileSub}>
                  {item.dropdown.map(sub => (
                    <a key={sub.label} href={sub.href} className={styles.mobileSubLink}>
                      – {sub.label}
                    </a>
                  ))}
                </div>
              )}
            </>
          ) : (
            <a href={item.href} className={styles.mobileHeader}>{item.label}</a>
          )}
        </div>
      ))}
    </div>
  )
}

export default MobileMenu