import { motion } from 'motion/react'
import { LineReveal } from './ui/LineReveal'
import { BlurFade } from './ui/BlurFade'

const experiences = [
  { tag: 'Iconic',     title: 'Two Oceans Aquarium',  desc: "Dive into Cape Town's spectacular marine world where the Atlantic and Indian oceans converge — sharks, rays, and thousands of sea creatures in one extraordinary space." },
  { tag: 'After Dark', title: 'Vibrant Nightlife',    desc: "From rooftop terraces to waterside clubs — every destination's nightlife has its own pulse, and we know exactly where to take you." },
  { tag: 'Exclusive',  title: 'Luxury Hotel Pickups', desc: 'Every transfer, every check-in, every detail coordinated. You travel door-to-door in comfort between the finest boutique stays and 5-star properties on your itinerary.' },
  { tag: 'Wild',       title: 'Safari Excursions',    desc: "Track the Big Five across iconic reserves — from Kruger's vast plains to private game lodges where golden hour belongs entirely to you." },
  { tag: 'Indulgent',  title: 'Wine & Fine Dining',   desc: "From vineyard valleys to Michelin-starred tables — we pair every destination with culinary experiences that make the trip unforgettable on its own." },
  { tag: 'Scenic',     title: 'Coastal Adventures',   desc: "Powdery sands, dramatic cliffs, crystal waters — we take you to coastlines that stop you in your tracks, wherever in the world they happen to be." },
]

export default function Experiences() {
  return (
    <section id="experiences" className="bg-[var(--bg)] py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10 xl:px-16">

        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <LineReveal delay={0.05}>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--pri)]">
              ✦ &nbsp; What Awaits You
            </p>
          </LineReveal>

          <h2 className="mt-3 font-display text-4xl font-bold leading-[1.08] text-[var(--text)] md:text-5xl">
            <LineReveal delay={0.15}>Experiences Crafted</LineReveal>
            <LineReveal delay={0.27}>
              for the <span className="text-shimmer italic">Discerning Traveller</span>
            </LineReveal>
          </h2>

          <BlurFade delay={0.45} className="mt-4 max-w-[52ch] text-base leading-relaxed text-[var(--text-m)]">
            Every trip balances iconic landmarks with the hidden discoveries
            only locals know. You get both.
          </BlurFade>
        </div>

        {/* List */}
        <div className="grid gap-0 sm:grid-cols-2">
          {experiences.map(({ tag, title, desc }, i) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: i * 0.08 }}
              className="group relative border-t border-[var(--border)] px-0 py-8 sm:px-8 transition-colors duration-300 [&:nth-child(odd)]:sm:pl-0 [&:nth-child(2)]:sm:border-l [&:nth-child(4)]:sm:border-l [&:nth-child(6)]:sm:border-l"
            >
              {/* Animated top line on hover */}
              <div className="absolute top-0 left-0 h-[2px] w-0 bg-[var(--pri)] transition-all duration-500 group-hover:w-full" />

              <div className="flex items-baseline justify-between gap-4 mb-4">
                <span className="font-display text-[13px] font-semibold tabular-nums text-[var(--pri)]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--text-f)]">
                  {tag}
                </span>
              </div>

              <h3 className="font-display text-2xl font-semibold leading-snug text-[var(--text)] transition-colors duration-200 group-hover:text-[var(--pri)] md:text-[26px]">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-m)]">{desc}</p>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  )
}
