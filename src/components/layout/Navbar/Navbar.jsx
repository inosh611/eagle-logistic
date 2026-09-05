import { useState } from "react";
import { navItems } from "../../../data/navItems";
import NavDropdown from "./NavDropdown";
import MobileMenu from "./MobileMenu";
import styles from "./Navbar.module.css";
import logo from "../../../assets/logo.png";
function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className={styles.nav}>
        {/* Logo */}
        <a href="/" className={styles.logo}>
          <img
            src={logo}
            alt="Eagle Logistic Logo"
            className={styles.logoImg}
          />
          EAGLE LOGISTICS
        </a>

        <div className={styles.pill}>
          {navItems.map((item) =>
            item.dropdown ? (
              <NavDropdown key={item.id} item={item} />
            ) : (
              <a key={item.id} href={item.href} className={styles.pillLink}>
                {item.label}
              </a>
            ),
          )}
        </div>

        {/* Right side */}
        <div className={styles.right}>
          {/* Socials */}
          <div className={styles.socials}>
            <a href="https://facebook.com/EagleLogisticsCMB" aria-label="Facebook" target="_blank" rel="noreferrer">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width={18}
                height={18}
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="https://youtube.com/@EagleLogisticsCMB" aria-label="YouTube" target="_blank" rel="noreferrer">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width={18}
                height={18}
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a href="https://instagram.com/eagle_logistics_cmb" aria-label="Instagram" target="_blank" rel="noreferrer">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                width={18}
                height={18}
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a href="https://linkedin.com/company/eagle-logistics-cmb" aria-label="LinkedIn" target="_blank" rel="noreferrer">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width={18}
                height={18}
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a href="https://tiktok.com/@eaglelogistics" aria-label="TikTok" target="_blank" rel="noreferrer">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width={18}
                height={18}
              >
                <path d="M12.525 2.003c1.31 0 2.446.002 3.557.014a.784.784 0 0 1 .773.743c.092 1.488.674 2.868 1.676 3.905A6.866 6.866 0 0 0 22.5 8.272a.776.776 0 0 1 .775.776v3.235a.778.778 0 0 1-.775.777 9.873 9.873 0 0 1-4.025-.867 9.94 9.94 0 0 1-1.95-1.173v7.353c0 4.14-3.36 7.5-7.5 7.5a7.5 7.5 0 0 1-7.5-7.5c0-4.14 3.36-7.5 7.5-7.5.42 0 .83.035 1.23.102a.78.78 0 0 1 .65.766v3.313a.78.78 0 0 1-.65.768 4.453 4.453 0 0 0-1.23-.174 4.5 4.5 0 1 0 4.5 4.5V2.78a.78.78 0 0 1 .775-.777z"/>
              </svg>
            </a>
          </div>

          {/* Hamburger */}
          <button
            className={styles.hamburger}
            onClick={() => setMobileOpen((p) => !p)}
            aria-label="Menu"
          >
            {mobileOpen ? (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                width={22}
                height={22}
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                width={22}
                height={22}
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile nav */}
      {mobileOpen && <MobileMenu items={navItems} />}
    </>
  );
}

export default Navbar;
