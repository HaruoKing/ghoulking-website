const currentYear = new Date().getFullYear()

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Tournaments', href: '#tournaments' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-[hsl(215,28%,9%)] border-t border-[hsl(215,21%,24%)] py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-10">
          <div>
            <div className="text-[hsl(214,27%,96%)] font-black text-lg tracking-widest uppercase mb-1">
              GHOULKING
            </div>
            <div className="text-[hsl(213,15%,67%)] text-xs">Victor Rodriguez</div>
            <div className="text-[hsl(213,15%,67%)] text-xs">Independent Gaming Tournament Organizer</div>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[hsl(213,15%,67%)] hover:text-[hsl(214,27%,96%)] text-xs tracking-wide transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="border-t border-[hsl(215,21%,24%)] pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[hsl(213,15%,67%)] text-xs">
            © {currentYear} GhoulKing. All rights reserved.
          </p>
          <a
            href="mailto:XxGhoulkingxX6@gmail.com"
            className="text-[hsl(213,15%,67%)] hover:text-[hsl(220,100%,65%)] text-xs transition-colors"
          >
            XxGhoulkingxX6@gmail.com
          </a>
        </div>
      </div>
    </footer>
  )
}
