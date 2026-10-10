import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Events', href: '#tournaments' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (href: string) => {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(8,12,16,0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        }}
      >
        {/* Cyan top line */}
        <div className="h-[2px] w-full" style={{ background: 'var(--accent)' }} />

        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); go('#home') }}
            className="font-black text-white text-lg tracking-[0.15em] uppercase hover:opacity-80 transition-opacity"
          >
            GHOULKING
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); go(link.href) }}
                className="px-4 py-2 text-sm font-medium rounded transition-colors hover:text-white"
                style={{ color: 'var(--muted)' }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); go('#contact') }}
              className="ml-4 px-5 py-2 text-sm font-bold rounded text-black transition-opacity hover:opacity-85"
              style={{ background: 'var(--accent)' }}
            >
              Work With Me
            </a>
          </nav>

          <button
            className="md:hidden p-1.5 rounded"
            style={{ color: 'var(--muted)' }}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-40 bg-black/70" onClick={() => setOpen(false)} />
      )}
      <div
        className={`fixed top-0 right-0 h-full w-72 z-50 flex flex-col transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ background: 'var(--surface)', borderLeft: '1px solid var(--border)' }}
      >
        <div className="h-[2px]" style={{ background: 'var(--accent)' }} />
        <div className="h-16 flex items-center justify-between px-6" style={{ borderBottom: '1px solid var(--border)' }}>
          <span className="font-black text-white tracking-[0.15em] uppercase">GHOULKING</span>
          <button onClick={() => setOpen(false)} style={{ color: 'var(--muted)' }}>
            <X size={20} />
          </button>
        </div>
        <nav className="flex flex-col gap-1 p-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); go(link.href) }}
              className="px-4 py-3 text-sm font-medium rounded hover:text-white transition-colors"
              style={{ color: 'var(--muted)' }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:XxGhoulkingxX6@gmail.com"
            className="mt-4 px-4 py-3 text-sm font-bold text-center text-black rounded transition-opacity hover:opacity-85"
            style={{ background: 'var(--accent)' }}
          >
            Work With Me
          </a>
        </nav>
      </div>
    </>
  )
}
