import { useState } from "react";
import { usefulLinks, serviceLinks, socialLinks } from "../../../data/footer";
import styles from "./Footer.module.css";
import logo from "../../../assets/blue-logo.png";
function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className={styles.footer}>
      {/* Subscribe strip */}
      {/* <div className={styles.subscribe}>
        <h2 className={styles.subscribeTitle}>
          Subscribe for latest
          <br />
          updates &amp; insights
        </h2>
        <div className={styles.subscribeForm}>
          <input
            type="email"
            placeholder="Enter Your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.emailInput}
          />
          <button className={styles.subscribeBtn}>
            Subscribe Now
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              width={14}
              height={14}
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </button>
        </div>
      </div> */}

      {/* Main */}
      <div className={styles.main}>
        {/* Logo col */}
        <div className={styles.logoCol}>
          <a href="/" className={styles.logo}>
            <img
              src={logo}
              alt="Eagle Logistic Logo"
              className={styles.logoImg}
            />
            EAGLE LOGISTICS
          </a>
          <div className={styles.socials}>
            {socialLinks.map((s) => (
              <a
                key={s.id}
                href={s.href}
                aria-label={s.name}
                className={styles.socialLink}
              >
                <SocialIcon name={s.name} />
              </a>
            ))}
          </div>
        </div>

        {/* Say Hello */}
        <div>
          <div className={styles.colTitle}>Say Hello</div>
          <a href="tel:0112577892" className={styles.contactLink}>
            011 2577892
          </a>
          <a
            href="mailto:info@eaglelogisticscmb.com"
            className={styles.contactLink}
          >
            info@eaglelogisticscmb.com
          </a>
        </div>

        {/* Useful Links */}
        <div>
          <div className={styles.colTitle}>Useful Link</div>
          <ul className={styles.linkList}>
            {usefulLinks.map((l) => (
              <li key={l.id}>
                <a href={l.href} className={styles.footerLink}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <div className={styles.colTitle}>Our Services</div>
          <ul className={styles.linkList}>
            {serviceLinks.map((l) => (
              <li key={l.id}>
                <a href={l.href} className={styles.footerLink}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className={styles.copyright}>
        Copyright &copy; {new Date().getFullYear()} <span className={styles.brand}>Eagle Logistics</span>
        , All Rights Reserved.
      </div>
    </footer>
  );
}

function SocialIcon({ name }) {
  switch (name) {
    case "facebook":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18}>
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      );
    case "youtube":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18}>
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      );
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18}>
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      );
    case "instagram":
      return (
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
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      );
    case "tiktok":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18}>
          <path d="M12.525 2.003c1.31 0 2.446.002 3.557.014a.784.784 0 0 1 .773.743c.092 1.488.674 2.868 1.676 3.905A6.866 6.866 0 0 0 22.5 8.272a.776.776 0 0 1 .775.776v3.235a.778.778 0 0 1-.775.777 9.873 9.873 0 0 1-4.025-.867 9.94 9.94 0 0 1-1.95-1.173v7.353c0 4.14-3.36 7.5-7.5 7.5a7.5 7.5 0 0 1-7.5-7.5c0-4.14 3.36-7.5 7.5-7.5.42 0 .83.035 1.23.102a.78.78 0 0 1 .65.766v3.313a.78.78 0 0 1-.65.768 4.453 4.453 0 0 0-1.23-.174 4.5 4.5 0 1 0 4.5 4.5V2.78a.78.78 0 0 1 .775-.777z"/>
        </svg>
      );
    default:
      return null;
  }
}

export default Footer;
