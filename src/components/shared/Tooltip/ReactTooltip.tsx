import React, { useEffect } from 'react'
import type { Props as TooltipProps } from 'tippy.js'
import tippy from 'tippy.js'

export interface ReactTooltipProps {
  id: string
  children?: React.ReactNode
  content?: string
  options?: Partial<TooltipProps>
}

export default function ReactTooltip({
  children,
  content,
  id,
  options,
}: ReactTooltipProps) {
  useEffect(() => {
    tippy(`#${id}`, {
      allowHTML: true,
      content: content,
      ...options,
    })
  }, [id, content])

  return children
}
