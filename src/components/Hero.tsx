export default function Hero() {
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-20"
      style={{ background: 'var(--bg)' }}
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,212,200,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,212,200,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Glow */}
      <div
        className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,212,200,0.06) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 py-24 w-full">
        {/* Tag */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-[2px]" style={{ background: 'var(--accent)' }} />
          <span className="text-xs font-semibold tracking-[0.25em] uppercase" style={{ color: 'var(--accent)' }}>
            Tournament Organizer · Albany, NY
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-black text-white leading-[1.05] tracking-tight mb-6" style={{ fontSize: 'clamp(2.8rem, 7vw, 6rem)' }}>
          Victor Rodriguez
          <br />
          <span style={{ color: 'var(--accent)' }}>GhoulKing</span>
        </h1>

        {/* Sub */}
        <p className="text-lg leading-relaxed mb-12 max-w-xl" style={{ color: 'var(--muted)', fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}>
          I organize competitive gaming events — DDR tournaments, rhythm games, and fighting games — with structured rulesets, skill-based divisions, and proper operations.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => go('tournaments')}
            className="px-7 py-3.5 text-sm font-bold text-black rounded transition-opacity hover:opacity-85"
            style={{ background: 'var(--accent)' }}
          >
            View My Events
          </button>
          <button
            onClick={() => go('contact')}
            className="px-7 py-3.5 text-sm font-semibold rounded transition-colors hover:text-white"
            style={{
              color: 'var(--muted)',
              border: '1px solid var(--border)',
            }}
          >
            Work With Me
          </button>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-12 mt-20 pt-8" style={{ borderTop: '1px solid var(--border)' }}>
          {[
            { value: '2', label: 'Events Organized' },
            { value: '18', label: 'Competitors' },
            { value: 'DDR', label: 'Specialty' },
            { value: 'NY', label: 'Based' },
          ].map(({ value, label }) => (
            <div key={label}>
              <div className="font-black text-3xl text-white">{value}</div>
              <div className="text-xs tracking-wider uppercase mt-1" style={{ color: 'var(--muted)' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
