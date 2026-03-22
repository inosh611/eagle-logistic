import { useState, useRef, useCallback } from 'react'

const CARD_WIDTH = 310 + 22 // card width + gap

export function useCarousel(totalCards) {
  const [current, setCurrent] = useState(0)
  const outerRef  = useRef(null)
  const startXRef = useRef(0)

  const getMaxIndex = useCallback(() => {
    const visible = Math.floor((outerRef.current?.offsetWidth ?? 0) / CARD_WIDTH)
    return Math.max(0, totalCards - visible)
  }, [totalCards])

  const slideTo = useCallback((index) => {
    setCurrent(Math.max(0, Math.min(index, getMaxIndex())))
  }, [getMaxIndex])

  const goNext = () => slideTo(current + 1)
  const goPrev = () => slideTo(current - 1)

  const onMouseDown = (e) => { startXRef.current = e.clientX }
  const onMouseUp   = (e) => {
    const diff = startXRef.current - e.clientX
    if (Math.abs(diff) > 60) slideTo(current + (diff > 0 ? 1 : -1))
  }

  const translateX = current * CARD_WIDTH

  return { current, outerRef, translateX, goNext, goPrev, onMouseDown, onMouseUp }
}