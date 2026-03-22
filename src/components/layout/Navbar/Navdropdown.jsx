import styles from './Navbar.module.css'

function NavDropdown({ item }) {
  return (
    <div className={styles.dropdownWrap}>

      {/* Trigger link */}
      <a href={item.href} className={styles.pillLink}>
        {item.label}
        <svg
          className={styles.chevron}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          width={13}
          height={13}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </a>

      {/* Invisible bridge — fills the gap so hover doesn't break */}
      <div className={styles.dropdownBridge} />

      {/* Dropdown panel */}
      <div className={styles.dropdown}>
        {item.dropdown.map(sub => (
          <a
            key={sub.label}
            href={sub.href}
            className={styles.dropdownLink}
          >
            <span className={styles.dropdownDot} />
            {sub.label}
          </a>
        ))}
      </div>

    </div>
  )
}

export default NavDropdown