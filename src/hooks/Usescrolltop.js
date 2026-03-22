import { useState, useEffect } from 'react'

export function useScrollTop(threshold = 400) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > threshold)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return { visible, scrollToTop }
}