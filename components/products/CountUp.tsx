'use client'

import { useEffect, useRef } from 'react'
import { useInView, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'

export default function CountUp({ end, duration = 2 }: { end: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const value = useMotionValue(0)
  const spring = useSpring(value, { duration: duration * 1000, bounce: 0 })
  const inView = useInView(ref, { once: true })
  const reduce = useReducedMotion()

  useEffect(() => {
    if (inView && !reduce) value.set(end)
  }, [inView, end, value, reduce])

  useEffect(
    () =>
      spring.on('change', (latest) => {
        if (ref.current) ref.current.textContent = Math.round(latest).toString()
      }),
    [spring],
  )

  return <span ref={ref}>{reduce ? end : 0}</span>
}
