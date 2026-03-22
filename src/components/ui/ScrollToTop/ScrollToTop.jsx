import { useScrollTop } from '../../../hooks/useScrollTop'
import styles from './ScrollToTop.module.css'

function ScrollToTop() {
  const { visible, scrollToTop } = useScrollTop()

  if (!visible) return null

  return (
    <button
      className={styles.btn}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        width={20}
        height={20}
      >
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  )
}

export default ScrollToTop