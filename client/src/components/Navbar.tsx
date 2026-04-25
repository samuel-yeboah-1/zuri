import { useState, useEffect } from 'react'
import ThemeToggle from './ThemeToggle'

const links = [
  { label: 'Experiences', href: '#experiences' },
  { label: 'Trips',       href: '#trips' },
  { label: 'Gallery',     href: '#gallery' },
  { label: 'Contact',     href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <>
      {/* ── Desktop navbar ── */}
      <nav className="fixed inset-x-0 top-0 z-[200] hidden px-5 pt-4 md:block sm:px-8 lg:px-10 xl:px-16">
        <div className="mx-auto max-w-[1280px]">
          <div
            className={`flex h-14 items-center justify-between rounded-xl border border-[var(--border)] px-4 backdrop-blur-md transition-shadow duration-300 ${scrolled ? 'shadow-md shadow-black/5' : ''}`}
            style={{ backgroundColor: 'var(--nav-bg)' }}
          >
            <a href="#" className="shrink-0">
              <img
                src="/images/Zuri Travels Logo PNG (B).png"
                alt="Zuri Travels"
                className="zuri-logo h-10 w-auto object-contain"
              />
            </a>

            <div className="flex items-center gap-1">
              {links.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="rounded-lg px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-[var(--text-m)] transition-colors duration-200 hover:bg-[var(--surface-2)] hover:text-[var(--pri)]"
                >
                  {label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <ThemeToggle />
              <a
                href="#trips"
                className="flex items-center rounded-full bg-[var(--pri)] px-5 py-2 text-sm font-semibold text-white transition-all duration-200 hover:bg-[var(--pri-h)]"
              >
                Book a Trip
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* ── Mobile Dynamic Island ── */}
      <div className="fixed inset-x-0 top-0 z-[200] flex justify-center pt-3 md:hidden">
        <div
          className="relative"
          style={{
            width: open ? 'calc(100vw - 32px)' : '160px',
            transition: 'width 0.5s cubic-bezier(0.32, 0.72, 0, 1)',
          }}
        >
          {/* The island itself */}
          <div
            className="overflow-hidden border border-[var(--border)]"
            style={{
              backgroundColor: 'var(--nav-bg)',
              borderRadius: open ? '20px' : '999px',
              transition: 'border-radius 0.5s cubic-bezier(0.32, 0.72, 0, 1), box-shadow 0.3s ease',
              boxShadow: open
                ? '0 8px 32px rgba(0,0,0,0.15)'
                : scrolled
                  ? '0 2px 12px rgba(0,0,0,0.08)'
                  : '0 1px 6px rgba(0,0,0,0.06)',
            }}
          >
            {/* Collapsed pill — always visible */}
            <div
              className="flex items-center justify-between px-4"
              style={{ height: '40px' }}
            >
              <a href="#" className="shrink-0">
                <img
                  src="/images/Zuri Travels Logo PNG (B).png"
                  alt="Zuri Travels"
                  className="zuri-logo h-8 w-auto object-contain"
                />
              </a>

              <button
                onClick={() => setOpen(o => !o)}
                aria-label={open ? 'Close menu' : 'Open menu'}
                aria-expanded={open}
                className="flex items-center justify-center rounded-full p-1 focus-visible:outline-none"
              >
                <div className="flex flex-col justify-center gap-[4px]">
                  <span
                    className="block h-[1.5px] rounded-full bg-[var(--text-m)] transition-all duration-500"
                    style={{
                      width: '16px',
                      transform: open ? 'translateY(5.5px) rotate(45deg)' : 'none',
                    }}
                  />
                  <span
                    className="block h-[1.5px] rounded-full bg-[var(--text-m)] transition-all duration-500"
                    style={{
                      width: '16px',
                      opacity: open ? 0 : 1,
                    }}
                  />
                  <span
                    className="block h-[1.5px] rounded-full bg-[var(--text-m)] transition-all duration-500"
                    style={{
                      width: '16px',
                      transform: open ? 'translateY(-5.5px) rotate(-45deg)' : 'none',
                    }}
                  />
                </div>
              </button>
            </div>

            {/* Expanded content */}
            <div
              className="overflow-hidden"
              style={{
                maxHeight: open ? '400px' : '0px',
                transition: 'max-height 0.5s cubic-bezier(0.32, 0.72, 0, 1)',
              }}
            >
              <div className="px-4 pb-5 pt-1">
                {/* Divider */}
                <div className="mb-4 h-px bg-[var(--border)]" />

                {/* Nav links */}
                <nav className="flex flex-col gap-1">
                  {links.map(({ label, href }) => (
                    <a
                      key={label}
                      href={href}
                      onClick={() => setOpen(false)}
                      className="rounded-xl px-3 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--text-m)] transition-colors duration-200 hover:bg-[var(--surface-2)] hover:text-[var(--pri)]"
                    >
                      {label}
                    </a>
                  ))}
                </nav>

                {/* Bottom row */}
                <div className="mt-4 flex items-center justify-between border-t border-[var(--border)] pt-4">
                  <ThemeToggle />
                  <a
                    href="#trips"
                    onClick={() => setOpen(false)}
                    className="rounded-full bg-[var(--pri)] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-colors duration-200 hover:bg-[var(--pri-h)]"
                  >
                    Book a Trip
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
