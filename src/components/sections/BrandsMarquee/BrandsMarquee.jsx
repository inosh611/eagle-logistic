import { brands } from '../../../data/brands'
import styles from './BrandsMarquee.module.css'

// Double the array so the marquee loops seamlessly
const doubled = [...brands, ...brands, ...brands, ...brands]

function BrandsMarquee() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.fadeLeft} />
      <div className={styles.fadeRight} />
      <div
        className={styles.track}
        onMouseEnter={e => e.currentTarget.style.animationPlayState = 'paused'}
        onMouseLeave={e => e.currentTarget.style.animationPlayState = 'running'}
      >
        {doubled.map((brand, i) => (
          <div key={i} className={styles.item}>
            <span
              className={styles.name}
              style={{
                fontStyle: brand.italic ? 'italic' : 'normal',
                color: brand.blue ? 'var(--accent-dark)' : 'var(--navy-mid)',
                letterSpacing: brand.name === 'DRONE' ? '3px' : brand.name === 'EXPR' ? '-1px' : undefined,
              }}
            >
              {brand.prefix}{brand.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BrandsMarquee