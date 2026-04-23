import React from 'react'
import { motion } from 'motion/react'
import { LineReveal } from './ui/LineReveal'
import { BlurFade } from './ui/BlurFade'
import { MagneticButton } from './ui/MagneticButton'

const previewTrips = [
  { name: 'Cape Town Escape',       dates: 'June 14 – 20, 2026', duration: '6 nights', spots: 4, color: '#0B7A6E' },
  { name: 'Garden Route Road Trip', dates: 'Aug 15 – 22, 2026',  duration: '7 nights', spots: 6, color: '#1B5FA8' },
  { name: 'Durban Coastal Retreat', dates: 'July 4 – 8, 2026',   duration: '4 nights', spots: 8, color: '#C49A3C' },
]

function TripPreviewCard({
  trip,
  className = '',
  style,
}: {
  trip: (typeof previewTrips)[number]
  className?: string
  style?: React.CSSProperties
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-lg ${className}`}
      style={style}
    >
      <div className="h-1.5 w-full" style={{ backgroundColor: trip.color }} />
      <div className="p-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[var(--text-f)]">
          Upcoming
        </p>
        <p className="mt-1.5 font-display text-base font-bold text-[var(--text)]">{trip.name}</p>
        <p className="mt-0.5 text-xs text-[var(--text-m)]">{trip.dates}</p>
        <div className="mt-3 flex items-center gap-3 text-[11px] text-[var(--text-f)]">
          <span>{trip.duration}</span>
          <span>·</span>
          <span className="text-[#C49A3C]">{trip.spots} spots left</span>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-[var(--bg)]">

      {/* Dot-grid texture */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle, var(--border) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Subtle bottom fade */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-48"
        style={{ background: 'linear-gradient(to top, var(--bg), transparent)' }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-5 pb-16 pt-28 sm:px-8 lg:px-10 xl:px-16">
        <div className="flex flex-col gap-16 lg:flex-row lg:items-center lg:gap-20">

          {/* Left — copy */}
          <div className="max-w-xl flex-1">
            <LineReveal delay={0.1}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--pri)]">
                ✦ &nbsp; Luxury Travel · Curated Experiences
              </p>
            </LineReveal>

            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.07] text-[var(--text)] sm:text-6xl lg:text-7xl">
              <LineReveal delay={0.2}>Travel the World</LineReveal>
              <LineReveal delay={0.32}>
                in Complete{' '}
                <span className="text-shimmer italic">Luxury</span>
              </LineReveal>
            </h1>

            <BlurFade delay={0.55} className="mt-6 max-w-[52ch] text-base leading-relaxed text-[var(--text-m)]">
              We build your trip from the ground up — private hotel pickups,
              world-class experiences, vibrant nightlife, safari landscapes,
              and coastal escapes. You show up. We handle everything else.
            </BlurFade>

            <motion.div
              className="mt-10 flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.75 }}
            >
              <MagneticButton
                href="#trips"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--pri)] px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[var(--pri-h)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pri)] focus-visible:ring-offset-2"
              >
                See Upcoming Trips
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </MagneticButton>
              <MagneticButton
                href="#gallery"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border-s)] px-7 py-3.5 text-sm font-semibold text-[var(--text-m)] transition-colors duration-200 hover:text-[var(--text)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pri)] focus-visible:ring-offset-2"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Watch Client Videos
              </MagneticButton>
            </motion.div>

            {/* Trust signals */}
            <BlurFade delay={0.95} className="mt-12 flex items-center gap-6 border-t border-[var(--border)] pt-8">
              {[['200+', 'Clients'], ['60+', 'Trips'], ['4 yrs', 'Running']].map(([val, label]) => (
                <div key={label}>
                  <p className="font-display text-xl font-bold text-[#C49A3C]">{val}</p>
                  <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--text-f)]">{label}</p>
                </div>
              ))}
            </BlurFade>
          </div>

          {/* Right — stacked trip preview cards */}
          <motion.div
            className="hidden w-full max-w-sm flex-shrink-0 lg:block animate-float"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.5 }}
          >
            <div className="relative flex flex-col">
              {previewTrips.map((trip, i) => (
                <TripPreviewCard
                  key={trip.name}
                  trip={trip}
                  className={i > 0 ? '-mt-3 ml-4' : ''}
                  style={{ zIndex: previewTrips.length - i }}
                />
              ))}
            </div>
            <p className="mt-5 text-center text-[11px] font-semibold uppercase tracking-[0.15em] text-[var(--text-f)]">
              Limited spots per trip
            </p>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2">
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-[var(--border-s)] p-1.5">
          <div className="animate-scroll-dot h-2 w-0.5 rounded-full bg-[var(--text-f)]" />
        </div>
      </div>
    </section>
  )
}
