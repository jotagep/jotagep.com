import { useEffect } from 'react'
import Atropos from 'atropos/react'

export default function Card3D({
  children,
  className,
  activeOffset = 100,
  shadowScale = 0.8,
  ...props
}: Atropos) {
  useEffect(() => {
    import('atropos/atropos.min.css')
  }, [])

  return (
    <Atropos
      className={className}
      activeOffset={activeOffset}
      shadowScale={shadowScale}
      {...props}
    >
      {children}
    </Atropos>
  )
}
