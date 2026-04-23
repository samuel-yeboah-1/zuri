import { motion } from 'motion/react'

const quickLinks = [
  { label: 'Experiences',    href: '#experiences' },
  { label: 'Upcoming Trips', href: '#trips' },
  { label: 'Gallery',        href: '#gallery' },
  { label: 'Testimonials',   href: '#testimonials' },
  { label: 'FAQ',            href: '#faq' },
  { label: 'Contact',        href: '#contact' },
]

const destinations = ['Cape Town', 'Johannesburg', 'Durban', 'Garden Route', 'Dubai', 'Zanzibar', 'Accra', 'Nairobi']

const colVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  }),
}

export default function Footer() {
  return (
    <footer className="bg-[var(--bg)] text-[var(--text)]">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10 xl:px-16">

        {/* Main grid */}
        <div className="grid gap-12 border-b border-[var(--border)] py-16 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <motion.div custom={0} variants={colVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="inline-block overflow-hidden rounded-xl bg-white" style={{ width: '120px', height: '60px' }}>
              <img
                src="/images/IMG_6472.JPG"
                alt="Zuri Travels"
                className="h-full w-full object-cover scale-[1.35]"
              />
            </a>
            <p className="mt-4 max-w-[34ch] text-sm leading-relaxed text-[var(--text-m)]">
              We take you anywhere in the world and make sure every single moment
              feels like it was made for you — luxurious, adventurous, unforgettable.
            </p>
          </motion.div>

          {/* Quick links */}
          <motion.div custom={1} variants={colVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--text-f)]">
              Explore
            </p>
            <ul className="flex flex-col gap-3">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm text-[var(--text-m)] transition-colors duration-200 hover:text-[#C49A3C]"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Destinations */}
          <motion.div custom={2} variants={colVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--text-f)]">
              Destinations
            </p>
            <ul className="flex flex-col gap-3">
              {destinations.map(d => (
                <li key={d}>
                  <a
                    href="#trips"
                    className="text-sm text-[var(--text-m)] transition-colors duration-200 hover:text-[#C49A3C]"
                  >
                    {d}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div custom={3} variants={colVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--text-f)]">
              Get in Touch
            </p>
            <ul className="flex flex-col gap-3 text-sm text-[var(--text-m)]">
              <li><a href="#" className="hover:text-[#C49A3C] transition-colors duration-200">@zuri.travel</a></li>
              <li><a href="#" className="hover:text-[#C49A3C] transition-colors duration-200">@zuri.travel on TikTok</a></li>
              <li><a href="#" className="hover:text-[#C49A3C] transition-colors duration-200">+000 000 0000</a></li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 py-8 text-xs text-[var(--text-f)] sm:flex-row">
          <p>© {new Date().getFullYear()} Zuri Travel. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Made with <span className="text-[#C49A3C]">♥</span> for travellers everywhere
          </p>
        </div>
      </div>
    </footer>
  )
}
