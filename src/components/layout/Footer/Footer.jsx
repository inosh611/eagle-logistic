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
          <a href="tel:+18001234567" className={styles.contactLink}>
            +1-800123-456-789
          </a>
          <a
            href="mailto:no-reply@pbminfotech.com"
            className={styles.contactLink}
          >
            no-reply@pbminfotech.com
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
        Copyright &copy; 2026 <span className={styles.brand}>Shipex Demo1</span>
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
    case "twitter":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18}>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231z" />
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
    default:
      return null;
  }
}

export default Footer;
