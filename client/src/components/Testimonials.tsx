import { useState, useRef, useEffect, useCallback } from 'react'
import { motion } from 'motion/react'
import { LineReveal } from './ui/LineReveal'
import { BlurFade } from './ui/BlurFade'

const testimonials = [
  {
    quote: "I genuinely didn't think a trip could change me, but Cape Town did. The itinerary was perfect — the aquarium, the nightlife, the hotel pickup. Zero stress, total joy.",
    name: 'Amara D.',
    initials: 'AD',
    trip: 'Cape Town Escape · 2025',
    color: '#0B3D35',
  },
  {
    quote: "This wasn't just a vacation. Zuri handled everything and we just showed up and lived. The Garden Route was beyond anything we imagined. Absolute perfection.",
    name: 'Kofi & Ama B.',
    initials: 'KB',
    trip: 'Garden Route Road Trip · 2025',
    color: '#0D2A4A',
  },
  {
    quote: "I've travelled a lot, but South Africa with Zuri hit different. The spots they took us to — especially the wine tour — you'd never find those on your own.",
    name: 'Chinonso E.',
    initials: 'CE',
    trip: 'Cape Winelands · 2024',
    color: '#3D1A08',
  },
  {
    quote: "From the second we landed, everything was sorted. Hotel pickup, restaurant reservations, the works. Zuri made us feel like VIPs the entire time.",
    name: 'Temi & Jide A.',
    initials: 'TA',
    trip: 'Durban Coastal Retreat · 2024',
    color: '#1A3D0A',
  },
  {
    quote: "The nightlife in Joburg is on another level, and Zuri knew exactly where to take us. We made memories we'll talk about for years.",
    name: 'Blessing O.',
    initials: 'BO',
    trip: 'Sandton Nightlife Experience · 2025',
    color: '#2A0A3D',
  },
]

function Stars() {
  return (
    <div className="flex gap-0.5 text-[#C49A3C]" aria-label="5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
          <path d="M8 1l1.85 3.75 4.15.6-3 2.92.71 4.13L8 10.35l-3.71 1.95.71-4.13L2 5.35l4.15-.6z" />
        </svg>
      ))}
    </div>
  )
}

// Stacked swipeable card deck for mobile — DOM-direct drag, zero re-renders during swipe
function CardDeck() {
  const [index, setIndex] = useState(0)
  const topCardRef = useRef<HTMLDivElement>(null)
  const startX = useRef(0)
  const currentX = useRef(0)
  const dragging = useRef(false)
  const animating = useRef(false)
  const total = testimonials.length
  const stackDepth = 3
  const THRESHOLD = 80

  const setTopCardStyle = useCallback((x: number, rotate: number, transition: string, opacity = 1, shadow = '0 4px 16px rgba(0,0,0,0.06)') => {
    const el = topCardRef.current
    if (!el) return
    el.style.transition = transition
    el.style.transform = `translateX(${x}px) rotate(${rotate}deg)`
    el.style.opacity = String(opacity)
    el.style.boxShadow = shadow
  }, [])

  const dismiss = useCallback((dir: 'left' | 'right') => {
    if (animating.current) return
    animating.current = true
    const flyX = dir === 'left' ? -500 : 500
    const flyR = dir === 'left' ? -28 : 28
    setTopCardStyle(flyX, flyR, 'transform 0.35s cubic-bezier(0.32,0.72,0,1), opacity 0.35s ease', 0)
    setTimeout(() => {
      setIndex(i => (i + 1) % total)
      animating.current = false
    }, 350)
  }, [total, setTopCardStyle])

  // Attach native (non-passive) touch listeners so we can prevent scroll during drag
  useEffect(() => {
    const el = topCardRef.current
    if (!el) return

    function onTouchStart(e: TouchEvent) {
      if (animating.current) return
      startX.current = e.touches[0].clientX
      currentX.current = 0
      dragging.current = true
      // Remove transition so drag is instant
      el!.style.transition = 'none'
      el!.style.boxShadow = '0 16px 40px rgba(0,0,0,0.14)'
    }

    function onTouchMove(e: TouchEvent) {
      if (!dragging.current) return
      e.preventDefault() // prevent page scroll while swiping
      const dx = e.touches[0].clientX - startX.current
      currentX.current = dx
      const rotate = dx * 0.045
      el!.style.transform = `translateX(${dx}px) rotate(${rotate}deg)`
    }

    function onTouchEnd() {
      if (!dragging.current) return
      dragging.current = false
      const dx = currentX.current
      if (Math.abs(dx) > THRESHOLD) {
        dismiss(dx < 0 ? 'left' : 'right')
      } else {
        // Spring back
        setTopCardStyle(0, 0, 'transform 0.45s cubic-bezier(0.34,1.56,0.64,1)', 1, '0 4px 16px rgba(0,0,0,0.06)')
      }
    }

    el.addEventListener('touchstart', onTouchStart, { passive: true })
    el.addEventListener('touchmove', onTouchMove, { passive: false })
    el.addEventListener('touchend', onTouchEnd)
    return () => {
      el.removeEventListener('touchstart', onTouchStart)
      el.removeEventListener('touchmove', onTouchMove)
      el.removeEventListener('touchend', onTouchEnd)
    }
  }, [index, dismiss, setTopCardStyle])

  const t = testimonials[index]

  return (
    <div className="relative mx-auto w-full" style={{ height: '360px' }}>
      {/* Back cards */}
      {Array.from({ length: stackDepth }).map((_, d) => {
        const depth = stackDepth - d
        const cardIndex = (index + depth) % total
        const tc = testimonials[cardIndex]
        const scale = 1 - depth * 0.05
        const translateY = depth * 10
        const rotate = depth * 1.8 * (depth % 2 === 0 ? 1 : -1)
        return (
          <div
            key={`back-${depth}`}
            className="absolute inset-x-0 top-0 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5"
            style={{
              transform: `translateY(${translateY}px) scale(${scale}) rotate(${rotate}deg)`,
              transformOrigin: 'bottom center',
              zIndex: stackDepth - depth,
            }}
          >
            <Stars />
            <p className="mt-3 text-sm leading-[1.75] text-[var(--text-m)]">"{tc.quote}"</p>
            <div className="mt-4 flex items-center gap-3 border-t border-[var(--border)] pt-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white" style={{ backgroundColor: tc.color }}>
                {tc.initials}
              </div>
              <div>
                <p className="text-sm font-semibold text-[var(--text)]">{tc.name}</p>
                <p className="text-[11px] text-[var(--text-f)]">{tc.trip}</p>
              </div>
            </div>
          </div>
        )
      })}

      {/* Top card — DOM-driven drag */}
      <div
        ref={topCardRef}
        key={index}
        className="absolute inset-x-0 top-0 cursor-grab rounded-2xl border border-[var(--border-s)] bg-[var(--surface)] p-5 active:cursor-grabbing"
        style={{
          zIndex: stackDepth + 1,
          transform: 'translateX(0) rotate(0deg)',
          boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
          willChange: 'transform',
        }}
      >
        <Stars />
        <p className="mt-3 text-sm leading-[1.75] text-[var(--text-m)]">"{t.quote}"</p>
        <div className="mt-4 flex items-center gap-3 border-t border-[var(--border)] pt-4">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white" style={{ backgroundColor: t.color }}>
            {t.initials}
          </div>
          <div>
            <p className="text-sm font-semibold text-[var(--text)]">{t.name}</p>
            <p className="text-[11px] text-[var(--text-f)]">{t.trip}</p>
          </div>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="absolute -bottom-8 inset-x-0 flex justify-center gap-1.5">
        {testimonials.map((_, i) => (
          <div
            key={i}
            className="h-1 rounded-full transition-all duration-300"
            style={{
              width: i === index ? '20px' : '6px',
              backgroundColor: i === index ? 'var(--pri)' : 'var(--border-s)',
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default function Testimonials() {
  const featured = testimonials[0]
  const rest = testimonials.slice(1)

  return (
    <section id="testimonials" className="bg-[var(--surface-2)] py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10 xl:px-16">

        {/* Header */}
        <div className="mb-14 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <LineReveal delay={0.05}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--pri)]">
                ✦ &nbsp; Straight from Our Clients
              </p>
            </LineReveal>
            <h2 className="mt-3 font-display text-4xl font-bold leading-[1.08] text-[var(--text)] md:text-5xl">
              <LineReveal delay={0.15}>Don't Take Our Word</LineReveal>
              <LineReveal delay={0.27}><span className="text-shimmer italic">for It.</span></LineReveal>
            </h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
            className="flex items-center gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-6 py-4 self-start md:self-auto"
          >
            <div>
              <p className="font-display text-3xl font-bold text-[#C49A3C]">5.0</p>
              <Stars />
            </div>
            <div className="h-10 w-px bg-[var(--border)]" />
            <div>
              <p className="text-sm font-semibold text-[var(--text)]">200+ Reviews</p>
              <p className="text-xs text-[var(--text-f)]">All verified clients</p>
            </div>
          </motion.div>
        </div>

        {/* Mobile — swipeable card deck */}
        <motion.div
          className="mb-16 md:hidden"
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
        >
          <CardDeck />
        </motion.div>

        {/* Desktop — featured + grid */}
        <div className="hidden md:block">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.15 }}
            className="mb-6 rounded-2xl border border-[var(--border-s)] bg-[var(--surface)] p-8 md:p-10 lg:p-12"
          >
            <Stars />
            <blockquote className="mt-5 font-display text-xl font-medium italic leading-[1.6] text-[var(--text)] md:text-2xl lg:text-3xl lg:max-w-[80%]">
              "{featured.quote}"
            </blockquote>
            <div className="mt-7 flex items-center gap-3">
              <div
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                style={{ backgroundColor: featured.color }}
              >
                {featured.initials}
              </div>
              <div>
                <p className="text-sm font-semibold text-[var(--text)]">{featured.name}</p>
                <p className="text-xs text-[var(--text-f)]">{featured.trip}</p>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {rest.map(({ quote, name, initials, trip, color }, i) => (
              <motion.article
                key={name}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 + i * 0.08 }}
                whileHover={{ y: -6, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
                className="flex flex-col gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 hover:border-[var(--border-s)] hover:shadow-lg transition-[border-color,box-shadow] duration-300"
              >
                <Stars />
                <p className="flex-1 text-sm leading-[1.75] text-[var(--text-m)]">"{quote}"</p>
                <div className="flex items-center gap-3 border-t border-[var(--border)] pt-4">
                  <div
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white"
                    style={{ backgroundColor: color }}
                  >
                    {initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[var(--text)]">{name}</p>
                    <p className="text-[11px] text-[var(--text-f)]">{trip}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
