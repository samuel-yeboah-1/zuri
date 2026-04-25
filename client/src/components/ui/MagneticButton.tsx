interface Props {
  children: React.ReactNode
  href: string
  className?: string
  onClick?: () => void
}

export function MagneticButton({ children, href, className, onClick }: Props) {
  return (
    <a href={href} onClick={onClick} className={className}>
      {children}
    </a>
  )
}
