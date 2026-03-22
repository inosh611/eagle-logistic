import { useState, useEffect, useRef, useCallback } from 'react'

const DURATION = 6000

export function useSlider(totalSlides) {
  const [current, setCurrent]   = useState(0)
  const [progress, setProgress] = useState(0)
  const timerRef   = useRef(null)
  const progRef    = useRef(null)

  const clearTimers = () => {
    if (timerRef.current)  clearInterval(timerRef.current)
    if (progRef.current)   clearInterval(progRef.current)
  }

  const startAuto = useCallback(() => {
    clearTimers()
    setProgress(0)
    const step = 100 / (DURATION / 50)
    progRef.current  = setInterval(() => setProgress(p => Math.min(p + step, 100)), 50)
    timerRef.current = setInterval(() => {
      setCurrent(c => (c + 1) % totalSlides)
      setProgress(0)
    }, DURATION)
  }, [totalSlides])

  const goTo = useCallback((index) => {
    setCurrent((index + totalSlides) % totalSlides)
    setProgress(0)
  }, [totalSlides])

  const goNext = useCallback(() => { goTo(current + 1); startAuto() }, [current, goTo, startAuto])
  const goPrev = useCallback(() => { goTo(current - 1); startAuto() }, [current, goTo, startAuto])

  const goToIndex = useCallback((index) => { goTo(index); startAuto() }, [goTo, startAuto])

  useEffect(() => {
    startAuto()
    return () => clearTimers()
  }, [startAuto])

  return { current, progress, goNext, goPrev, goToIndex }
}