import { useEffect } from 'react'
import Atropos from 'atropos/react'

import 'atropos/atropos.min.css'

export default function Card3D({
  children,
  activeOffset = 100,
  shadowScale = 0.8,
  ...props
}: Atropos) {
  return (
    <Atropos activeOffset={activeOffset} shadowScale={shadowScale} {...props}>
      {children}
    </Atropos>
  )
}
