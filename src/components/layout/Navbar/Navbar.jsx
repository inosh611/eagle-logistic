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
            <a href="#" aria-label="Facebook">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width={18}
                height={18}
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="#" aria-label="Twitter/X">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width={18}
                height={18}
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231z" />
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn">
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
            <a href="#" aria-label="Instagram">
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
