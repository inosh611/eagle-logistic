import { consultationServices } from '../../../data/tradeConsultation'
import styles from './ConsultationServices.module.css'
import customImg from "../../../assets/custom.png"

function RegulatoryIcon() {
  return (
     <img
      src={customImg}
      alt="Sri Lanka Customs"
      width={100}
      height={100}
      style={{ objectFit: 'contain' }}
      loading="lazy"
    />
  )
}

function DemurrageIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" width={80} height={80}>
      {/* Truck body */}
      <rect x="8" y="28" width="38" height="26" rx="3"
        fill="rgba(225,29,72,0.1)" stroke="#e11d48" strokeWidth="2"/>
      {/* Truck cab */}
      <path d="M46 38 L58 38 L64 46 L64 54 L46 54 Z"
        fill="rgba(225,29,72,0.1)" stroke="#e11d48" strokeWidth="2"/>
      {/* Wheels */}
      <circle cx="20" cy="56" r="6" fill="#e11d48" opacity="0.15" stroke="#e11d48" strokeWidth="2"/>
      <circle cx="20" cy="56" r="2.5" fill="#e11d48" opacity="0.5"/>
      <circle cx="52" cy="56" r="6" fill="#e11d48" opacity="0.15" stroke="#e11d48" strokeWidth="2"/>
      <circle cx="52" cy="56" r="2.5" fill="#e11d48" opacity="0.5"/>
      {/* X marks */}
      <line x1="18" y1="16" x2="62" y2="70" stroke="#e11d48" strokeWidth="3.5" strokeLinecap="round" opacity="0.7"/>
      <line x1="62" y1="16" x2="18" y2="70" stroke="#e11d48" strokeWidth="3.5" strokeLinecap="round" opacity="0.7"/>
    </svg>
  )
}

function ShippingIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" width={80} height={80}>
      {/* FCL Container */}
      <rect x="6" y="20" width="30" height="22" rx="2"
        fill="#2563eb" stroke="#1d4ed8" strokeWidth="1.5"/>
      {/* FCL boxes inside */}
      {[0,1,2,3,4,5].map(i => (
        <rect key={i}
          x={8 + (i % 3) * 9} y={22 + Math.floor(i/3) * 8}
          width="7" height="6" rx="1"
          fill="rgba(255,255,255,0.3)" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5"/>
      ))}
      <text x="21" y="16" textAnchor="middle"
        fontFamily="Barlow Condensed, sans-serif"
        fontSize="9" fontWeight="800" fill="#1d4ed8">FCL</text>
      {/* Hook */}
      <path d="M21 8 L21 12 Q21 14 23 14 Q25 14 25 12 L25 10"
        stroke="#1d4ed8" strokeWidth="2" fill="none" strokeLinecap="round"/>

      {/* LCL Container */}
      <rect x="44" y="20" width="30" height="22" rx="2"
        fill="#f97316" stroke="#ea580c" strokeWidth="1.5"/>
      {/* Mixed boxes inside */}
      {[0,1,2,3,4,5].map(i => (
        <rect key={i}
          x={46 + (i % 3) * 9} y={22 + Math.floor(i/3) * 8}
          width="7" height="6" rx="1"
          fill={i < 3 ? "rgba(255,255,255,0.35)" : "rgba(16,185,129,0.5)"}
          stroke="rgba(255,255,255,0.2)" strokeWidth="0.5"/>
      ))}
      <text x="59" y="16" textAnchor="middle"
        fontFamily="Barlow Condensed, sans-serif"
        fontSize="9" fontWeight="800" fill="#ea580c">LCL</text>
      <path d="M59 8 L59 12 Q59 14 61 14 Q63 14 63 12 L63 10"
        stroke="#ea580c" strokeWidth="2" fill="none" strokeLinecap="round"/>

      {/* Legend */}
      <rect x="6" y="50" width="8" height="6" rx="1" fill="rgba(255,255,255,0.35)" stroke="#1d4ed8" strokeWidth="0.8"/>
      <text x="17" y="56" fontFamily="sans-serif" fontSize="6" fill="#0f6e56">Your shipment</text>
      <rect x="44" y="50" width="8" height="6" rx="1" fill="rgba(16,185,129,0.5)" stroke="#0f6e56" strokeWidth="0.8"/>
      <text x="55" y="56" fontFamily="sans-serif" fontSize="6" fill="#0f6e56">Other importers</text>
    </svg>
  )
}

const icons = {
  regulatory: RegulatoryIcon,
  demurrage: DemurrageIcon,
  shipping: ShippingIcon,
}

function ConsultationServices() {
  return (
    <section className={styles.section} id="services">
      <div className={styles.header}>
        <div className={styles.label}>Our Consultation Areas</div>
        <h2 className={styles.title}>How We Help Your Business</h2>
        <p className={styles.subtitle}>
          Three core areas where our experience delivers the most
          measurable impact for your logistics operations.
        </p>
      </div>

      <div className={styles.services}>
        {consultationServices.map((svc, i) => {
          const Icon = icons[svc.icon]
          const isLeft = svc.side === 'left'
          return (
            <div
              key={svc.id}
              className={`${styles.serviceRow} ${isLeft ? styles.serviceRowReverse : ''}`}
            >
              {/* Icon side */}
              <div className={styles.iconSide}>
                <div
                  className={styles.iconCard}
                  style={{ background: `${svc.color}0d`, borderColor: `${svc.color}25` }}
                >
                  <Icon />
                  <div className={styles.iconNum} style={{ color: `${svc.color}25` }}>
                    0{svc.id}
                  </div>
                </div>
              </div>

              {/* Text side */}
              <div className={styles.textSide}>
                <div
                  className={styles.serviceTag}
                  style={{ background: `${svc.color}12`, color: svc.color }}
                >
                  {i === 0 ? 'Regulatory Compliance' : i === 1 ? 'Cost Optimization' : 'Shipping Strategy'}
                </div>
                <h3 className={styles.serviceTitle}>{svc.title}</h3>
                <p className={styles.serviceDesc}>{svc.description}</p>
                <a href="/contact"
                  className={styles.serviceBtn}
                  style={{ color: svc.color, borderColor: `${svc.color}30` }}>
                  Learn More
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                    width={14} height={14}>
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </a>
              </div>

              {/* Step number */}
              <div
                className={styles.stepBubble}
                style={{ background: svc.color, boxShadow: `0 8px 24px ${svc.color}40` }}
              >
                {svc.id}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default ConsultationServices