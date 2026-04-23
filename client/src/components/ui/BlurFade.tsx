import { useRef } from 'react'
import { motion, useInView } from 'motion/react'

interface Props {
  children: React.ReactNode
  delay?: number
  duration?: number
  className?: string
}

// Vercel / Linear body text entrance: blur clears as element fades and rises
export function BlurFade({ children, delay = 0, duration = 0.9, className }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, filter: 'blur(10px)', y: 18 }}
      animate={inView
        ? { opacity: 1, filter: 'blur(0px)', y: 0 }
        : { opacity: 0, filter: 'blur(10px)', y: 18 }
      }
      transition={{ duration, ease: [0.25, 0.46, 0.45, 0.94], delay }}
    >
      {children}
    </motion.div>
  )
}
