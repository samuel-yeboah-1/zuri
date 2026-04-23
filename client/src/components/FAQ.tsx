import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { LineReveal } from './ui/LineReveal'
import { BlurFade } from './ui/BlurFade'

const faqs = [
  {
    q: 'Do I need a visa for my destination?',
    a: 'It depends on your passport and where you\'re going. We check your specific requirements before you book and walk you through every step — so there are zero surprises at the border.',
  },
  {
    q: "What's included in a Zuri trip package?",
    a: 'Every package covers accommodation, airport transfers, curated activities, and 24/7 support on the ground. Flights are separate unless you opt into our full-service plan, where we handle everything from departure to return.',
  },
  {
    q: 'Can I customise my itinerary?',
    a: "Absolutely — that's our specialty. Tell us your dates, vibe (adventure, luxury, nightlife, wine country), and budget, and we'll build something around you from scratch. No off-the-shelf packages if you don't want them.",
  },
  {
    q: 'How far in advance should I book?',
    a: 'We recommend at least 4–6 weeks for standard trips, and 8–12 weeks for peak season (December–January) or fully custom itineraries. That said, reach out even if your trip is next month — we often make it work.',
  },
  {
    q: 'Is it safe to travel to my chosen destination?',
    a: "Yes, when you know where you're going — which is exactly what we're here for. We stick to vetted areas, trusted transport, and safe, well-reviewed venues. Our clients travel confidently because we've already done the groundwork.",
  },
  {
    q: 'What currency will I need, and can I use my card?',
    a: 'It varies by destination, and we brief you on all of it — local currency, exchange tips, where cards are accepted, and the best ways to access money without fees. Nothing catches you off guard.',
  },
  {
    q: 'What happens if something goes wrong during my trip?',
    a: 'You have our number and we pick up. Every Zuri client gets direct WhatsApp access to their trip manager for the entire duration of their stay. We handle rebooking, emergencies, and anything in between.',
  },
]

function Item({ q, a, i }: { q: string; a: string; i: number }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: i * 0.07 }}
      className="border-b border-[var(--border)] last:border-0"
    >
      <button
        onClick={() => setOpen(v => !v)}
        aria-expanded={open}
        className="flex w-full items-start justify-between gap-6 py-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pri)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
      >
        <span className="text-base font-semibold text-[var(--text)] md:text-lg">{q}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-0.5 shrink-0 text-[var(--pri)]"
          aria-hidden="true"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="10" y1="3" x2="10" y2="17" />
            <line x1="3" y1="10" x2="17" y2="10" />
          </svg>
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ overflow: 'hidden' }}
          >
            <p className="pb-6 text-sm leading-relaxed text-[var(--text-m)] md:text-base md:max-w-[80%]">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="bg-[var(--bg)] py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10 xl:px-16">

        <div className="flex flex-col gap-14 lg:flex-row lg:gap-20">

          {/* Left — sticky header */}
          <div className="lg:w-[340px] lg:shrink-0">
            <div className="lg:sticky lg:top-32">
              <LineReveal delay={0.05}>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--pri)]">
                  ✦ &nbsp; Questions
                </p>
              </LineReveal>
              <h2 className="mt-3 font-display text-4xl font-bold leading-[1.08] text-[var(--text)] md:text-5xl">
                <LineReveal delay={0.15}>Everything</LineReveal>
                <LineReveal delay={0.27}>
                  You Want to <span className="text-shimmer italic">Know.</span>
                </LineReveal>
              </h2>
              <BlurFade delay={0.4}>
                <p className="mt-5 text-sm leading-relaxed text-[var(--text-m)]">
                  Still have questions? Reach us directly on WhatsApp — we typically reply within the hour.
                </p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--pri)] transition-colors duration-200 hover:text-[var(--pri-h)]"
                >
                  Chat with us
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M2 7h10M7 2l5 5-5 5" />
                  </svg>
                </a>
              </BlurFade>
            </div>
          </div>

          {/* Right — accordion */}
          <div className="flex-1">
            {faqs.map(({ q, a }, i) => (
              <Item key={q} q={q} a={a} i={i} />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
