import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { LineReveal } from './ui/LineReveal'
import { BlurFade } from './ui/BlurFade'

const items = [
  {
    label: 'Sandton Nightlife',
    sub: 'Johannesburg',
    isVideo: true,
    wide: true,
    tall: false,
    src: '/videos/39AE36FC-5A5F-4F93-92C3-9B2DCE211996.mp4',
  },
  {
    label: 'Cape Town Tour',
    sub: 'Western Cape',
    isVideo: false,
    wide: false,
    tall: false,
    src: '/images/0D4BE216-B227-43BE-B690-7581BC22E4F4.jpg',
  },
  {
    label: 'Two Oceans Aquarium',
    sub: 'V&A Waterfront',
    isVideo: true,
    wide: false,
    tall: true,
    src: '/videos/77D66C80-D5EC-4834-B501-494FD912C93D.mp4',
  },
  {
    label: 'Cape Town Streets',
    sub: 'Cape Town',
    isVideo: false,
    wide: false,
    tall: false,
    src: '/images/IMG_6897.JPG',
  },
  {
    label: 'Cape Winelands',
    sub: 'Stellenbosch',
    isVideo: true,
    wide: true,
    tall: false,
    src: '/videos/CC604151-CF63-4CF3-AC23-567016C584CA.mp4',
  },
  {
    label: 'Garden Route',
    sub: 'George to Plett',
    isVideo: true,
    wide: false,
    tall: false,
    src: '/videos/E5A07AD0-CBC2-45A9-AE7D-C914447582BD.mp4',
  },
]

function formatTime(s: number) {
  const m = Math.floor(s / 60)
  const sec = Math.floor(s % 60)
  return `${m}:${sec.toString().padStart(2, '0')}`
}

function VideoModal({ src, label, sub, onClose }: { src: string; label: string; sub: string; onClose: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(true)
  const [muted, setMuted] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
      if (e.key === ' ') { e.preventDefault(); toggle() }
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  function toggle() {
    const v = videoRef.current
    if (!v) return
    if (v.paused) { v.play(); setPlaying(true) }
    else { v.pause(); setPlaying(false) }
  }

  function toggleMute() {
    const v = videoRef.current
    if (!v) return
    v.muted = !v.muted
    setMuted(v.muted)
  }

  function skip(secs: number) {
    const v = videoRef.current
    if (!v) return
    v.currentTime = Math.min(Math.max(v.currentTime + secs, 0), v.duration)
  }

  function onTimeUpdate() {
    const v = videoRef.current
    if (!v || !v.duration) return
    setCurrent(v.currentTime)
    setProgress(v.currentTime / v.duration)
  }

  function onLoadedMetadata() {
    setDuration(videoRef.current?.duration ?? 0)
  }

  function seek(e: React.MouseEvent<HTMLDivElement>) {
    const v = videoRef.current
    if (!v) return
    const rect = e.currentTarget.getBoundingClientRect()
    v.currentTime = ((e.clientX - rect.left) / rect.width) * v.duration
  }

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex items-center justify-center p-6 sm:p-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />

        <motion.div
          className="relative z-10 w-full max-w-2xl"
          initial={{ scale: 0.9, opacity: 0, y: 16 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 16 }}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          onClick={e => e.stopPropagation()}
        >
          {/* Card */}
          <div className="overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10">

            {/* Video — click to toggle play */}
            <div className="relative cursor-pointer flex justify-center" onClick={toggle}>
              <video
                ref={videoRef}
                src={src}
                style={{ maxHeight: '65vh', maxWidth: '100%', width: 'auto', display: 'block' }}
                autoPlay
                playsInline
                onTimeUpdate={onTimeUpdate}
                onLoadedMetadata={onLoadedMetadata}
                onEnded={() => setPlaying(false)}
              />
              {/* Big play overlay when paused */}
              {!playing && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                </div>
              )}
            </div>

            {/* Controls bar */}
            <div className="flex flex-col gap-3 bg-[#111] px-4 pb-4 pt-3">

              {/* Progress track */}
              <div
                className="group relative h-1 w-full cursor-pointer rounded-full bg-white/15"
                onClick={seek}
              >
                <div
                  className="h-full rounded-full bg-[#C49A3C] transition-none"
                  style={{ width: `${progress * 100}%` }}
                />
                <div
                  className="absolute top-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-[#C49A3C] shadow opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ left: `${progress * 100}%`, transform: 'translate(-50%, -50%)' }}
                />
              </div>

              {/* Buttons + time */}
              <div className="flex items-center gap-3">

                {/* Rewind 10s */}
                <button onClick={() => skip(-10)} aria-label="Rewind 10 seconds" className="text-white/60 hover:text-white transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"/>
                    <text x="12" y="15" textAnchor="middle" fontSize="5" fill="currentColor" fontFamily="sans-serif">10</text>
                  </svg>
                </button>

                {/* Play / Pause */}
                <button onClick={toggle} aria-label={playing ? 'Pause' : 'Play'} className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black transition-transform hover:scale-105 active:scale-95">
                  {playing ? (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>
                    </svg>
                  ) : (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  )}
                </button>

                {/* Forward 10s */}
                <button onClick={() => skip(10)} aria-label="Forward 10 seconds" className="text-white/60 hover:text-white transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 5V1l5 5-5 5V7c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6h2c0 4.42-3.58 8-8 8s-8-3.58-8-8 3.58-8 8-8z"/>
                    <text x="12" y="15" textAnchor="middle" fontSize="5" fill="currentColor" fontFamily="sans-serif">10</text>
                  </svg>
                </button>

                {/* Time */}
                <span className="ml-1 text-[11px] tabular-nums text-white/40">
                  {formatTime(current)} / {formatTime(duration)}
                </span>

                {/* Mute */}
                <button onClick={toggleMute} aria-label={muted ? 'Unmute' : 'Mute'} className="ml-auto text-white/60 hover:text-white transition-colors">
                  {muted ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M16.5 12A4.5 4.5 0 0 0 14 7.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0 0 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06A8.99 8.99 0 0 0 17.73 18L19 19.27 20.27 18 5.27 3 4.27 3zM12 4 9.91 6.09 12 8.18V4z"/>
                    </svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                    </svg>
                  )}
                </button>

                {/* Close */}
                <button onClick={onClose} aria-label="Close" className="text-white/40 hover:text-white transition-colors">
                  <svg width="16" height="16" viewBox="0 0 16 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                    <line x1="2" y1="2" x2="14" y2="14"/><line x1="14" y1="2" x2="2" y2="14"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Caption below card */}
          <div className="mt-3 flex items-baseline gap-2 px-1">
            <p className="text-sm font-semibold text-white">{label}</p>
            <span className="text-white/30">·</span>
            <p className="text-xs text-white/40">{sub}</p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default function Gallery() {
  const [modal, setModal] = useState<{ src: string; label: string; sub: string } | null>(null)

  return (
    <section id="gallery" className="bg-[var(--bg)] py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-10 xl:px-16">

        {/* Header */}
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <LineReveal delay={0.05}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--pri)]">
                ✦ &nbsp; Moments to Remember
              </p>
            </LineReveal>
            <h2 className="mt-3 font-display text-4xl font-bold leading-[1.08] text-[var(--text)] md:text-5xl">
              <LineReveal delay={0.15}>We've Been There.</LineReveal>
              <LineReveal delay={0.27}><span className="text-shimmer italic">You're Next.</span></LineReveal>
            </h2>
          </div>
          <BlurFade delay={0.4} className="max-w-[40ch] text-sm leading-relaxed text-[var(--text-m)]">
            Clips and photos captured by our clients across every destination.
            Real trips, real people, real moments.
          </BlurFade>
        </div>

        {/* Masonry grid */}
        <div
          className="grid grid-cols-2 gap-3 md:grid-cols-3"
          style={{ gridAutoRows: '200px' }}
        >
          {items.map(({ label, sub, isVideo, wide, tall, src }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94], delay: i * 0.08 }}
              onClick={() => isVideo && setModal({ src, label, sub })}
              className={[
                'group relative overflow-hidden rounded-2xl bg-[var(--surface-2)]',
                wide ? 'col-span-2' : '',
                tall ? 'row-span-2' : '',
                isVideo ? 'cursor-pointer' : '',
              ].join(' ')}
            >
              {/* Media */}
              {isVideo ? (
                <video
                  src={src}
                  className="absolute inset-0 h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              ) : (
                <img
                  src={src}
                  alt={label}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
              )}

              {/* Overlays */}
              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/35" />
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/60 to-transparent" />

              {isVideo && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-black/20 backdrop-blur-sm transition-all duration-200 group-hover:scale-110 group-hover:border-white/60 group-hover:bg-black/30">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              )}

              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-[12px] font-semibold text-white/50 transition-opacity duration-300 group-hover:opacity-0">
                  {label}
                </p>
                <div className="translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm font-bold text-white">{label}</p>
                  <p className="text-xs text-white/50">{sub}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-[var(--text-f)]">
          Follow us for daily content &nbsp;·&nbsp;
          <a
            href="#contact"
            className="font-semibold text-[#C49A3C] underline underline-offset-4 transition-colors duration-200 hover:text-[#D4AA55]"
          >
            @ZuriTravel
          </a>
        </p>
      </div>

      {/* Video modal */}
      {modal && (
        <VideoModal
          src={modal.src}
          label={modal.label}
          sub={modal.sub}
          onClose={() => setModal(null)}
        />
      )}
    </section>
  )
}
