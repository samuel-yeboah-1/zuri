import { useRef } from 'react'
import { motion, useInView } from 'motion/react'

interface Props {
  children: React.ReactNode
  delay?: number
  duration?: number
  className?: string
}

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94]

// Each child line is masked by overflow:hidden so it "births" upward from a surface
export function LineReveal({ children, delay = 0, duration = 0.9, className }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <div ref={ref} style={{ overflow: 'hidden' }} className={className}>
      <motion.div
        initial={{ y: '105%' }}
        animate={inView ? { y: '0%' } : { y: '105%' }}
        transition={{ duration, ease: EASE, delay }}
      >
        {children}
      </motion.div>
    </div>
  )
}
