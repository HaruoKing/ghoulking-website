export default function About() {
  return (
    <section id="about" className="py-28" style={{ background: 'var(--surface)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[2px]" style={{ background: 'var(--accent)' }} />
              <span className="text-xs font-semibold tracking-[0.25em] uppercase" style={{ color: 'var(--accent)' }}>
                About
              </span>
            </div>
            <h2 className="font-black text-white leading-tight tracking-tight mb-6" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              The person behind the bracket
            </h2>
            <div className="space-y-4 text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
              <p>
                I'm Victor Rodriguez — I organize competitive gaming events under the name GhoulKing. I handle everything from writing the rulebook to running match operations on the day.
              </p>
              <p>
                My first event was an 18-player DDR tournament at Prince UFO, Colonie Center Mall, in May 2026. My second, Capital Rhythm, is a two-day tournament on October 17–18, 2026 — built around EX Score judging, randomized song selection, and a published rulebook.
              </p>
              <p>
                I'm building toward a regular schedule of rhythm-game and fighting-game tournaments at venues across New York.
              </p>
            </div>
          </div>

          {/* Right: quick facts */}
          <div className="space-y-0 rounded-lg overflow-hidden" style={{ border: '1px solid var(--border)' }}>
            {[
              { label: 'Role', value: 'Independent Tournament Organizer' },
              { label: 'Specialty', value: 'Dance Dance Revolution & Rhythm Games' },
              { label: 'Location', value: 'Albany, New York' },
              { label: 'First Event', value: 'DDR A3 — May 9, 2026' },
              { label: 'Next Event', value: 'Capital Rhythm — Oct 17–18, 2026' },
              { label: 'Expanding Into', value: 'NYC venues & fighting-game events' },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start"
                style={{ borderBottom: i < 5 ? '1px solid var(--border)' : 'none' }}
              >
                <div
                  className="w-32 flex-shrink-0 px-5 py-4 text-xs font-semibold tracking-wider uppercase"
                  style={{ color: 'var(--muted-dim)', background: 'var(--surface-2)' }}
                >
                  {item.label}
                </div>
                <div className="flex-1 px-5 py-4 text-sm text-white font-medium">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
