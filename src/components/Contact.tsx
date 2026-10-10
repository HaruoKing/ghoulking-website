import { Download } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-28" style={{ background: 'var(--surface)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-[2px]" style={{ background: 'var(--accent)' }} />
          <span className="text-xs font-semibold tracking-[0.25em] uppercase" style={{ color: 'var(--accent)' }}>
            Contact
          </span>
        </div>
        <h2 className="font-black text-white tracking-tight mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
          Let's Build Something
        </h2>
        <p className="text-base mb-16 max-w-lg" style={{ color: 'var(--muted)' }}>
          Looking to host a competitive gaming event at your venue? Want to collaborate on a tournament? Reach out directly.
        </p>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* CTA card */}
          <div
            className="rounded-xl p-8 flex flex-col gap-6"
            style={{ background: 'var(--surface-2)', border: '1px solid var(--border)' }}
          >
            <div>
              <h3 className="font-bold text-white text-lg mb-2">Venue Partnerships</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                I bring structured competitive formats, player communities, and full event operations to your space. Arcades, gaming lounges, esports venues — let's talk.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-white text-lg mb-2">Tournament Coordination</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                Rulebook development, bracket management, player registration, on-site operations. I handle the competitive side end to end.
              </p>
            </div>
            <a
              href="mailto:XxGhoulkingxX6@gmail.com?subject=Collaboration Inquiry — GhoulKing"
              className="mt-2 inline-block text-center text-sm font-bold text-black px-6 py-3.5 rounded transition-opacity hover:opacity-85"
              style={{ background: 'var(--accent)' }}
            >
              Send an Email
            </a>
          </div>

          {/* Info */}
          <div className="flex flex-col gap-6">
            <div
              className="rounded-xl p-6"
              style={{ background: 'var(--surface-2)', border: '1px solid var(--border)' }}
            >
              <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: 'var(--muted-dim)' }}>
                Victor Rodriguez · GhoulKing
              </p>
              <div className="space-y-4">
                {[
                  { label: 'Email', value: 'XxGhoulkingxX6@gmail.com', href: 'mailto:XxGhoulkingxX6@gmail.com' },
                  { label: 'Discord', value: 'XxGhoulkingxX', href: null },
                  { label: 'Based in', value: 'Albany, New York', href: null },
                ].map(({ label, value, href }) => (
                  <div key={label}>
                    <p className="text-xs mb-1" style={{ color: 'var(--muted-dim)' }}>{label}</p>
                    {href ? (
                      <a href={href} className="text-sm text-white font-medium hover:opacity-75 transition-opacity">{value}</a>
                    ) : (
                      <p className="text-sm text-white font-medium">{value}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div
              className="rounded-xl p-6"
              style={{ background: 'var(--accent-dim)', border: '1px solid rgba(0,212,200,0.15)' }}
            >
              <p className="text-sm font-medium mb-1" style={{ color: 'var(--accent)' }}>Expanding to NYC</p>
              <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--muted)' }}>
                Events are currently based in the Albany area. Actively seeking partnerships with New York City venues to grow the competitive scene.
              </p>
              <a
                href="/images/Victor_Rodriguez_GhoulKing_Portfolio.pdf"
                download="Victor_Rodriguez_GhoulKing_Portfolio.pdf"
                className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2.5 rounded transition-opacity hover:opacity-80"
                style={{ background: 'var(--surface)', color: 'var(--accent)', border: '1px solid rgba(0,212,200,0.3)' }}
              >
                <Download size={14} />
                Download Organizer Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
