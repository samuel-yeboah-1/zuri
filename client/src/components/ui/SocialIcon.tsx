interface Props {
  name: string
  handle: string
  href: string
  hoverBg: string
  path: string
  size?: number
}

export function SocialIcon({ name, handle, href, hoverBg, path, size = 20 }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${name}: ${handle}`}
      className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-f)] transition-all duration-200 hover:scale-110 hover:border-transparent hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pri)]"
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = hoverBg }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = '' }}
    >
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d={path} />
      </svg>
    </a>
  )
}
