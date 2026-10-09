import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Tournaments', href: '#tournaments' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          scrolled
            ? 'bg-[hsl(215,28%,9%)] border-b border-[hsl(215,21%,24%)] shadow-lg shadow-black/20'
            : 'bg-[hsl(215,28%,9%)] border-b border-[hsl(215,21%,24%)]'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Wordmark */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick('#home') }}
            className="text-[hsl(214,27%,96%)] font-black text-xl tracking-widest uppercase hover:text-[hsl(220,100%,65%)] transition-colors"
          >
            GHOULKING
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.slice(1, -1).map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                className="text-sm text-[hsl(213,15%,67%)] hover:text-[hsl(214,27%,96%)] transition-colors font-medium tracking-wide"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
              className="text-sm bg-[hsl(220,100%,65%)] text-white font-semibold px-5 py-2 hover:bg-[hsl(220,100%,58%)] transition-colors tracking-wide"
            >
              Contact Me
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-[hsl(213,15%,67%)] hover:text-white transition-colors p-1"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile drawer overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 z-50 bg-[hsl(215,24%,12%)] border-l border-[hsl(215,21%,24%)] flex flex-col transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-16 flex items-center justify-between px-6 border-b border-[hsl(215,21%,24%)]">
          <span className="text-[hsl(214,27%,96%)] font-black text-lg tracking-widest uppercase">GHOULKING</span>
          <button
            onClick={() => setIsOpen(false)}
            className="text-[hsl(213,15%,67%)] hover:text-white transition-colors p-1"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>
        <nav className="flex flex-col gap-1 p-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
              className="text-[hsl(213,15%,67%)] hover:text-[hsl(214,27%,96%)] font-medium py-3 text-base border-b border-[hsl(215,21%,24%)] last:border-0 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="mailto:XxGhoulkingxX6@gmail.com"
            className="mt-6 text-center text-sm bg-[hsl(220,100%,65%)] text-white font-semibold px-5 py-3 hover:bg-[hsl(220,100%,58%)] transition-colors tracking-wide"
          >
            Contact Me
          </a>
        </nav>
      </div>
    </>
  )
}
