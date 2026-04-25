import { motion } from 'motion/react'
import { LineReveal } from './ui/LineReveal'
import { BlurFade } from './ui/BlurFade'
import { SocialIcon } from './ui/SocialIcon'
import { socials } from '../data/socials'

export default function Contact() {
  return (
    <section id="contact" className="bg-[var(--surface-2)] py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10 xl:px-16">

        {/* Header */}
        <div className="mb-12 text-center">
          <LineReveal delay={0.05} className="flex justify-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--pri)]">
              ✦ &nbsp; Reach Out
            </p>
          </LineReveal>
          <h2 className="mt-3 font-display text-4xl font-bold leading-[1.08] text-[var(--text)] md:text-5xl">
            <LineReveal delay={0.15} className="flex justify-center">
              Let's Talk <span className="text-shimmer italic ml-3">Travel</span>
            </LineReveal>
          </h2>
          <BlurFade delay={0.35} className="mx-auto mt-4 max-w-[48ch] text-base leading-relaxed text-[var(--text-m)]">
            Have a trip in mind? Want a fully custom itinerary? Reach us on any
            platform — we respond fast.
          </BlurFade>
        </div>

        {/* Single social card */}
        <motion.div
          className="mx-auto max-w-sm rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
        >
          <p className="mb-6 text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--text-f)]">
            Find us on
          </p>
          <div className="flex items-center justify-around">
            {socials.map(s => <SocialIcon key={s.name} {...s} />)}
          </div>
        </motion.div>

        {/* WhatsApp CTA */}
        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.5 }}
        >
          {(() => {
            const wa = socials.find(s => s.name === 'WhatsApp')!
            return (
              <a
                href={wa.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-[#25D366] px-9 py-4 text-sm font-bold text-[#0A1A0A] transition-all duration-200 hover:bg-[#1DB954] hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface-2)]"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d={wa.path} />
                </svg>
                Chat on WhatsApp
              </a>
            )
          })()}
        </motion.div>
      </div>
    </section>
  )
}
