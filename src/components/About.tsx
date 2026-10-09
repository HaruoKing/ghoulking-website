export default function About() {
  return (
    <section id="about" className="py-28 bg-[hsl(215,24%,12%)]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <p className="text-[hsl(220,100%,65%)] text-xs font-semibold tracking-[0.25em] uppercase mb-4">
          About
        </p>
        <div className="w-12 h-px bg-[hsl(220,100%,65%)] mb-12" />

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: prose */}
          <div>
            <h2 className="text-[hsl(214,27%,96%)] font-black text-4xl lg:text-5xl leading-tight tracking-tight mb-8">
              GhoulKing
            </h2>
            <div className="space-y-5 text-[hsl(213,15%,67%)] leading-relaxed">
              <p>
                I'm Victor Rodriguez, an independent gaming tournament organizer operating under the brand GhoulKing. My focus is on producing competitive gaming events that are structured, fair, and built around the player experience.
              </p>
              <p>
                In May 2026, I planned and executed an 18-player Dance Dance Revolution tournament at Prince UFO in Colonie Center Mall, Colonie, New York. I managed every component of the event: rulebook authorship, bracket format design, player registration, skill-based division placement, and full on-site tournament operations.
              </p>
              <p>
                My second event, Capital Rhythm, is a two-day DDR tournament scheduled for October 17–18, 2026 — designed from the ground up with refined structure: EX Score–based judging, randomized song selection via DDR Tools, a published rulebook, and separate competition days for each skill division.
              </p>
              <p>
                My goal is to establish a consistent competitive gaming calendar across New York, beginning with rhythm games and expanding into fighting-game tournaments at arcades, gaming lounges, and esports venues throughout the state.
              </p>
            </div>
          </div>

          {/* Right: detail grid */}
          <div className="space-y-0 border border-[hsl(215,21%,24%)]">
            {[
              { label: 'Role', value: 'Independent Tournament Organizer' },
              { label: 'Specialization', value: 'Dance Dance Revolution & Rhythm Games' },
              { label: 'Location', value: 'New York' },
              { label: 'First Event', value: 'DDR A3 Tournament — May 9, 2026' },
              { label: 'Next Event', value: 'Capital Rhythm — October 17–18, 2026' },
              { label: 'Expanding Into', value: 'NYC venues, fighting-game tournaments' },
            ].map((item, i) => (
              <div
                key={i}
                className="flex border-b border-[hsl(215,21%,24%)] last:border-b-0"
              >
                <div className="w-36 flex-shrink-0 px-5 py-4 bg-[hsl(215,28%,9%)] text-[hsl(213,15%,67%)] text-xs font-semibold tracking-wider uppercase flex items-center">
                  {item.label}
                </div>
                <div className="flex-1 px-5 py-4 text-[hsl(214,27%,96%)] text-sm font-medium">
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
