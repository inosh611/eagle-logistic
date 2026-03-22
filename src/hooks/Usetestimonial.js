import { useState, useEffect, useCallback } from 'react'

export function useTestimonial(total, interval = 5000) {
  const [current, setCurrent] = useState(0)

  const goTo = useCallback((index) => {
    setCurrent((index + total) % total)
  }, [total])

  useEffect(() => {
    const timer = setInterval(() => goTo(current + 1), interval)
    return () => clearInterval(timer)
  }, [current, goTo, interval])

  return { current, goTo }
}