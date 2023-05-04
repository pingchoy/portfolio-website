import { useEffect, useMemo, useRef, useState, RefObject } from 'react'

export function useOnScreen (ref: RefObject<HTMLElement>) {
  const [isOnScreen, setIsOnScreen] = useState(false)
  const observerRef: any = useRef(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(([entry]) =>
      setIsOnScreen(entry.isIntersecting)
    )
  }, [])

  useEffect(() => {
    observerRef.current.observe(ref.current)

    return () => {
      observerRef.current.disconnect()
    }
  }, [ref])

  return isOnScreen
}
