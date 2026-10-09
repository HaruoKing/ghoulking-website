const points = [
  {
    heading: 'Verified Event Experience',
    body: 'I have planned and executed a full 18-player competitive DDR tournament — rulebook authorship, bracket design, player registration, division placement, and on-site match operations. Documentation is available upon request.',
  },
  {
    heading: 'Published Rules for Every Event',
    body: 'Both tournaments operate under official written rulebooks covering match format, song selection, division eligibility, bracket procedures, and conduct standards. Nothing is run on informal agreements.',
  },
  {
    heading: 'Iterative Event Design',
    body: 'Capital Rhythm was built directly on lessons from the first tournament. Improvements include EX Score judging, DDR Tools–based randomized song selection, and an expanded published rulebook — each addressing specific gaps identified from the prior event.',
  },
  {
    heading: 'Structured Skill Divisions',
    body: 'Events are organized so competitors face opponents at comparable skill levels. Level-based division systems ensure the tournament is both accessible to newer competitors and genuinely competitive for advanced players.',
  },
  {
    heading: 'Venue-Ready Competitive Format',
    body: 'I bring a complete event structure to your space — organized format, player communication, bracket management, and on-site coordination. Venues focus on operations; I handle the competitive side.',
  },
  {
    heading: 'Building Toward New York City',
    body: 'Current events are established in the Albany area. I am actively pursuing partnerships with NYC arcades, gaming lounges, and esports venues and am open to discussing formats and scheduling that fit your location.',
  },
]

export default function WhyGhoulKing() {
  return (
    <section id="why" className="py-28 bg-[hsl(215,28%,9%)]">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-[hsl(220,100%,65%)] text-xs font-semibold tracking-[0.25em] uppercase mb-4">
          Why Work With GhoulKing
        </p>
        <div className="w-12 h-px bg-[hsl(220,100%,65%)] mb-12" />

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          <h2 className="text-[hsl(214,27%,96%)] font-black text-4xl lg:text-5xl tracking-tight">
            A Track Record, Not a Proposal
          </h2>
          <p className="text-[hsl(213,15%,67%)] text-lg leading-relaxed self-end">
            Every claim on this site is backed by documented events, published rulebooks, and real competitive results. Here is what working with GhoulKing looks like in practice.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {points.map((point, i) => (
            <div key={i} className="flex gap-5">
              <div className="flex-shrink-0 mt-1">
                <div className="w-6 h-6 border border-[hsl(220,100%,65%)] flex items-center justify-center">
                  <span className="text-[hsl(220,100%,65%)] font-black text-xs">{String(i + 1).padStart(2, '0')}</span>
                </div>
              </div>
              <div>
                <h3 className="text-[hsl(214,27%,96%)] font-bold text-base mb-2">{point.heading}</h3>
                <p className="text-[hsl(213,15%,67%)] text-sm leading-relaxed">{point.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
