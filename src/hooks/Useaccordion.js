import { useState, useRef, useCallback } from 'react'
 
export function useAccordion(defaultIndex = 2) {
  const [openIndex, setOpenIndex]   = useState(defaultIndex)
  const [lastOpen,  setLastOpen]    = useState(defaultIndex)
  const rowRef = useRef(null)
 
  const handleEnter = useCallback((index) => {
    setOpenIndex(index)
    setLastOpen(index)
  }, [])
 
  const handleRowLeave = useCallback(() => {
    setOpenIndex(lastOpen)
  }, [lastOpen])
 
  return { openIndex, rowRef, handleEnter, handleRowLeave }
}