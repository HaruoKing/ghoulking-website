export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden"
      style={{
        background: 'hsl(215,28%,9%)',
      }}
    >
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(214,27%,96%) 1px, transparent 1px),
            linear-gradient(90deg, hsl(214,27%,96%) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Accent rule — top left decorative element */}
      <div className="absolute top-32 left-0 w-1 h-32 bg-[hsl(220,100%,65%)] hidden lg:block" />

      <div className="relative max-w-6xl mx-auto px-6 py-24">
        {/* Overline */}
        <p className="text-[hsl(220,100%,65%)] text-xs font-semibold tracking-[0.25em] uppercase mb-8">
          Victor Rodriguez · GhoulKing
        </p>

        {/* Main headline */}
        <h1 className="text-[hsl(214,27%,96%)] font-black text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] tracking-tight mb-8 max-w-4xl">
          Competitive<br />
          Events.<br />
          <span className="text-[hsl(220,100%,65%)]">Organized</span><br />
          With Purpose.
        </h1>

        {/* Subtitle */}
        <p className="text-[hsl(213,15%,67%)] text-lg sm:text-xl max-w-xl leading-relaxed mb-4">
          Full-service tournament coordination for rhythm games, fighting games, and competitive gaming events across New York.
        </p>

        {/* Title line */}
        <p className="text-[hsl(213,15%,55%)] text-sm tracking-wide mb-12">
          Independent Gaming Tournament Organizer · Albany, NY
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => scrollTo('tournaments')}
            className="inline-flex items-center justify-center bg-[hsl(220,100%,65%)] text-white font-semibold text-sm px-8 py-4 hover:bg-[hsl(220,100%,58%)] transition-colors tracking-wide"
          >
            View My Tournaments
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="inline-flex items-center justify-center border border-[hsl(215,21%,24%)] text-[hsl(213,15%,67%)] font-semibold text-sm px-8 py-4 hover:border-[hsl(220,100%,65%)] hover:text-[hsl(214,27%,96%)] transition-colors tracking-wide"
          >
            Get in Touch
          </button>
        </div>

        {/* Bottom stat strip */}
        <div className="mt-24 pt-8 border-t border-[hsl(215,21%,24%)] flex flex-wrap gap-8">
          <div>
            <div className="text-[hsl(214,27%,96%)] font-black text-3xl">2</div>
            <div className="text-[hsl(213,15%,67%)] text-xs tracking-wider uppercase mt-1">DDR Tournaments</div>
          </div>
          <div className="w-px bg-[hsl(215,21%,24%)] self-stretch" />
          <div>
            <div className="text-[hsl(214,27%,96%)] font-black text-3xl">18</div>
            <div className="text-[hsl(213,15%,67%)] text-xs tracking-wider uppercase mt-1">Competitors</div>
          </div>
          <div className="w-px bg-[hsl(215,21%,24%)] self-stretch" />
          <div>
            <div className="text-[hsl(214,27%,96%)] font-black text-3xl">NY</div>
            <div className="text-[hsl(213,15%,67%)] text-xs tracking-wider uppercase mt-1">Based</div>
          </div>
        </div>
      </div>
    </section>
  )
}
