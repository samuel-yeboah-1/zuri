import { useEffect, useRef, useState } from 'react'

const clientFlags = ['🇬🇭', '🇬🇧', '🇺🇸', '🇿🇦', '🇨🇦', '🇩🇪', '🇫🇷', '🇰🇪', '🇦🇺', '🇳🇱']

const stats = [
  { end: 200, suffix: '+', label: 'Happy Clients' },
  { end: 12,  suffix: '+', label: 'Destinations' },
  { end: 60,  suffix: '+', label: 'Trips Completed' },
  { end: 4,   suffix: ' yrs', label: 'Of Excellence' },
]

function useCountUp(end: number, duration = 1600, triggered: boolean) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!triggered) return
    let startTime: number | null = null
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [triggered, end, duration])
  return count
}

function StatItem({ end, suffix, label, triggered, delay }: { end: number; suffix: string; label: string; triggered: boolean; delay: number }) {
  const count = useCountUp(end, 1600, triggered)
  return (
    <div
      className="flex flex-col items-center gap-3 text-center transition-all duration-700"
      style={{ transitionDelay: `${delay}ms`, opacity: triggered ? 1 : 0, transform: triggered ? 'none' : 'translateY(20px)' }}
    >
      <span className="font-display text-6xl font-bold tabular-nums text-[var(--text)] md:text-7xl">
        {count}<span className="text-[#C49A3C]">{suffix}</span>
      </span>
      <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--text-f)]">
        {label}
      </span>
    </div>
  )
}

export default function Stats() {
  const ref = useRef<HTMLElement>(null)
  const [triggered, setTriggered] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTriggered(true); observer.disconnect() } },
      { threshold: 0.25 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="bg-[var(--bg)] py-16 md:py-20">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10 xl:px-16">

        {/* Stats row */}
        <div className="grid grid-cols-2 gap-y-12 md:grid-cols-4">
          {stats.map((s, i) => (
            <div key={s.label} className="relative">
              {/* Vertical divider — not after last in each row */}
              {i % 2 !== 1 && (
                <div className="absolute right-0 top-1/2 hidden h-12 w-px -translate-y-1/2 bg-[var(--border)] md:block" />
              )}
              {i !== 3 && (
                <div className="absolute right-0 top-1/2 hidden h-12 w-px -translate-y-1/2 bg-[var(--border)] md:block" />
              )}
              <StatItem {...s} triggered={triggered} delay={i * 120} />
            </div>
          ))}
        </div>

        {/* Divider */}
        <div
          className="my-12 h-px bg-[var(--border)] transition-all duration-700 delay-500"
          style={{ opacity: triggered ? 1 : 0 }}
        />

        {/* Flags */}
        <div
          className="flex flex-col items-center gap-5 transition-all duration-700 delay-[600ms]"
          style={{ opacity: triggered ? 1 : 0, transform: triggered ? 'none' : 'translateY(12px)' }}
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--text-f)]">
            Clients joining us from
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {clientFlags.map((flag, i) => (
              <span
                key={flag}
                className="text-2xl transition-transform duration-200 hover:scale-125"
                style={{
                  transitionDelay: `${680 + i * 50}ms`,
                  opacity: triggered ? 1 : 0,
                  transform: triggered ? 'none' : 'scale(0.6)',
                  transition: 'opacity 0.4s ease, transform 0.4s cubic-bezier(0.34,1.56,0.64,1)',
                }}
                title={flag}
              >
                {flag}
              </span>
            ))}
            <span
              className="flex items-center rounded-full border border-[var(--border)] px-3 py-1 text-[11px] font-semibold text-[var(--text-f)]"
              style={{ transitionDelay: `${680 + clientFlags.length * 50}ms`, opacity: triggered ? 1 : 0, transition: 'opacity 0.4s ease' }}
            >
              + more
            </span>
          </div>
        </div>

      </div>
    </section>
  )
}
