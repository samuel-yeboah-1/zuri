import { motion } from 'motion/react'
import { LineReveal } from './ui/LineReveal'
import { BlurFade } from './ui/BlurFade'

const trips = [
  {
    name: 'Cape Town Escape',
    dates: 'June 14 – 20, 2026',
    duration: '6 Nights',
    spots: 4,
    price: '$2,200',
    tag: 'Most Popular',
    tagStyle: 'bg-[#0B7A6E] text-white',
    highlights: ['Two Oceans Aquarium', 'Table Mountain', 'V&A Waterfront Nightlife', 'Clifton Beach'],
    media: { type: 'image', src: '/images/IMG_6897.JPG' },
  },
  {
    name: 'Durban Coastal Retreat',
    dates: 'July 4 – 8, 2026',
    duration: '4 Nights',
    spots: 8,
    price: '$1,500',
    tag: 'New',
    tagStyle: 'bg-[#1B5FA8] text-white',
    highlights: ['uShaka Marine World', 'Golden Mile Beach', 'Umhlanga Rocks', 'Street Food Tour'],
    media: { type: 'image', src: '/images/0D4BE216-B227-43BE-B690-7581BC22E4F4.jpg' },
  },
  {
    name: 'Garden Route Road Trip',
    dates: 'Aug 15 – 22, 2026',
    duration: '7 Nights',
    spots: 6,
    price: '$3,100',
    tag: 'Premium',
    tagStyle: 'bg-[#C49A3C] text-[#1A0E05]',
    highlights: ['Knysna Lagoon', 'Tsitsikamma Forest', 'Mossel Bay', 'Plettenberg Bay'],
    media: { type: 'video', src: '/videos/E5A07AD0-CBC2-45A9-AE7D-C914447582BD.mp4' },
  },
]

function onMouseMove(e: React.MouseEvent<HTMLElement>) {
  const rect = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`)
  e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`)
}

export default function UpcomingTrips() {
  return (
    <section id="trips" className="bg-[var(--surface-2)] py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10 xl:px-16">

        {/* Header */}
        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <LineReveal delay={0.05}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--pri)]">
                ✦ &nbsp; Next Departures
              </p>
            </LineReveal>
            <h2 className="mt-3 font-display text-4xl font-bold leading-[1.08] text-[var(--text)] md:text-5xl">
              <LineReveal delay={0.15}>Your Next Adventure</LineReveal>
              <LineReveal delay={0.27}><span className="text-shimmer italic">Starts Here</span></LineReveal>
            </h2>
          </div>
          <BlurFade delay={0.4} className="max-w-[40ch] text-sm leading-relaxed text-[var(--text-m)]">
            Groups stay small — every client gets a personal experience, not a tour bus.
          </BlurFade>
        </div>

        {/* Cards */}
        <div className="grid gap-5 md:grid-cols-3">
          {trips.map(({ name, dates, duration, spots, price, tag, tagStyle, highlights, media }, i) => (
            <motion.article
              key={name}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: i * 0.13 }}
              whileHover={{ y: -8, transition: { type: 'spring', stiffness: 350, damping: 22 } }}
              className="flashlight-card flex flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-sm hover:border-[var(--border-s)] hover:shadow-2xl transition-[border-color,box-shadow] duration-300"
              onMouseMove={onMouseMove}
            >
              {/* Header — destination photo */}
              <div className="relative flex h-48 flex-col justify-between overflow-hidden p-5">
                {media.type === 'video' ? (
                  <video
                    src={media.src}
                    className="absolute inset-0 h-full w-full object-cover"
                    autoPlay muted loop playsInline
                  />
                ) : (
                  <img
                    src={media.src}
                    alt={name}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                )}
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />

                <span className={`relative z-10 self-start rounded px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${tagStyle}`}>
                  {tag}
                </span>
                <div className="relative z-10">
                  <h3 className="font-display text-2xl font-bold leading-tight text-white">
                    {name}
                  </h3>
                  <p className="mt-1 text-xs text-white/60">{dates}</p>
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-1 flex-col gap-4 p-5">

                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-[var(--text-f)]">
                  <span className="flex items-center gap-1.5">
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.4" />
                      <path d="M8 4.5V8l2 1.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                    </svg>
                    {duration}
                  </span>
                  <span>·</span>
                  <span className={spots <= 4 ? 'font-semibold text-amber-600 dark:text-amber-400' : ''}>
                    {spots} spots left
                  </span>
                </div>

                {/* Highlights */}
                <ul className="flex flex-col gap-1.5">
                  {highlights.map(h => (
                    <li key={h} className="flex items-center gap-2.5 text-sm text-[var(--text-m)]">
                      <span className="h-1 w-1 shrink-0 rounded-full bg-[var(--pri)]" aria-hidden="true" />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Footer */}
                <div className="mt-auto flex items-center justify-between border-t border-[var(--border)] pt-4">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-[var(--text-f)]">From</p>
                    <p className="font-display text-2xl font-bold text-[var(--text)]">{price}</p>
                  </div>
                  <a
                    href="#contact"
                    className="rounded-full border border-[var(--border)] bg-[var(--surface-2)] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[var(--text)] transition-all duration-200 hover:border-[var(--pri)] hover:bg-[var(--pri)] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pri)] focus-visible:ring-offset-2"
                  >
                    Join Trip
                  </a>
                </div>
              </div>
          </motion.article>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-[var(--text-f)]">
          Want something custom?{' '}
          <a href="#contact" className="font-semibold text-[var(--pri)] underline underline-offset-4 hover:text-[var(--pri-h)]">
            We'll build your itinerary from scratch.
          </a>
        </p>
      </div>
    </section>
  )
}
