import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useScrollTop } from '../../../hooks/useScrollTop'
import styles from './ScrollToTop.module.css'

function ScrollToTop() {
  const { visible, scrollToTop } = useScrollTop()
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      const el = document.getElementById(id)
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' })
        }, 150)
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

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