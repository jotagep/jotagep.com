import { useEffect, useState } from "react"

type DirectionScroll = "down" | "up" | null

export type ScrollY = {
  y: number,
  direction: DirectionScroll
}

const useScrollY = () => {
  const [scrollPosition, setScrollPosition] = useState<ScrollY>({
    y: 0,
    direction: null,
  })

  useEffect(() => {
    let lastKnownScrollPosition = 0
    let directionKnown: DirectionScroll = null
    let ticking = false

    const handleScroll = () => {
      directionKnown = lastKnownScrollPosition <= window.scrollY ? "down" : "up"
      lastKnownScrollPosition = window.scrollY

      if (!ticking) {
        window.requestAnimationFrame(function () {
          setScrollPosition({
            y: lastKnownScrollPosition,
            direction: directionKnown,
          })
          ticking = false
        })

        ticking = true
      }
    }
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return scrollPosition
}
export default useScrollY
