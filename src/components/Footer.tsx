const links = [
  { label: 'Events', href: '#tournaments' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
      <div className="h-[2px] w-full" style={{ background: 'var(--accent)' }} />
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row justify-between items-center gap-6">
        <div>
          <p className="font-black text-white tracking-[0.15em] uppercase text-sm">GHOULKING</p>
          <p className="text-xs mt-1" style={{ color: 'var(--muted)' }}>Victor Rodriguez · Tournament Organizer</p>
        </div>
        <nav className="flex gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs hover:text-white transition-colors"
              style={{ color: 'var(--muted)' }}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <p className="text-xs" style={{ color: 'var(--muted-dim)' }}>
          © {new Date().getFullYear()} GhoulKing. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
