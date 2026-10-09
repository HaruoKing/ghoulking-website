import { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { ExternalLink, X, Calendar, MapPin, Users, Trophy } from 'lucide-react'
import { tournaments, type Tournament } from '@/data/tournaments'

function StatusBadge({ status }: { status: Tournament['status'] }) {
  if (status === 'completed') {
    return (
      <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase px-3 py-1 bg-emerald-950/60 text-emerald-400 border border-emerald-800/50">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
        Completed
      </span>
    )
  }
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase px-3 py-1 bg-amber-950/60 text-amber-400 border border-amber-800/50">
      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
      Upcoming
    </span>
  )
}

function FlyerLightbox({ tournament }: { tournament: Tournament }) {
  const [open, setOpen] = useState(false)
  const [imgError, setImgError] = useState(false)
  const isPdf = tournament.flyerSrc.endsWith('.pdf')

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button
          className="group relative overflow-hidden border border-[hsl(215,21%,24%)] hover:border-[hsl(220,100%,65%)] transition-all duration-200 cursor-zoom-in w-full"
          aria-label={`View ${tournament.name} flyer`}
        >
          {isPdf ? (
            <div className="aspect-[3/4] bg-[hsl(215,28%,9%)] flex flex-col items-center justify-center gap-3 text-[hsl(213,15%,67%)]">
              <div className="text-center px-6">
                <p className="text-sm font-medium mb-1">Tournament Flyer</p>
                <p className="text-xs text-[hsl(213,15%,50%)]">Click to view PDF</p>
              </div>
            </div>
          ) : imgError ? (
            <div className="aspect-[3/4] bg-[hsl(215,28%,9%)] flex flex-col items-center justify-center gap-3 text-[hsl(213,15%,67%)]">
              <div className="text-center px-6">
                <p className="text-sm font-medium mb-2">Flyer image not found</p>
                <p className="text-xs text-[hsl(213,15%,50%)]">
                  Add <code className="font-mono">{tournament.flyerSrc}</code> to the{' '}
                  <code className="font-mono">public/</code> directory
                </p>
              </div>
            </div>
          ) : (
            <img
              src={tournament.flyerSrc}
              alt={tournament.flyerAlt}
              onError={() => setImgError(true)}
              className="w-full h-auto block group-hover:scale-[1.02] transition-transform duration-300"
              loading="lazy"
            />
          )}
          <div className="absolute inset-0 bg-[hsl(220,100%,65%)]/0 group-hover:bg-[hsl(220,100%,65%)]/5 transition-colors duration-200" />
          {!imgError && (
            <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-black/70 text-white text-xs px-2 py-1 font-medium">
              View full size
            </div>
          )}
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/85 z-50 backdrop-blur-sm" />
        <Dialog.Content className="fixed inset-4 md:inset-8 lg:inset-16 z-50 flex items-center justify-center outline-none">
          <Dialog.Title className="sr-only">{tournament.name} flyer</Dialog.Title>
          <div className="relative max-h-full max-w-full w-full h-full flex items-center justify-center">
            {isPdf ? (
              <embed
                src={tournament.flyerSrc}
                type="application/pdf"
                className="w-full h-[85vh]"
                title={tournament.flyerAlt}
              />
            ) : (
              <img
                src={tournament.flyerSrc}
                alt={tournament.flyerAlt}
                className="max-h-[85vh] max-w-full h-auto object-contain"
              />
            )}
            <Dialog.Close asChild>
              <button
                className="absolute -top-3 -right-3 bg-[hsl(215,28%,9%)] border border-[hsl(215,21%,24%)] text-[hsl(213,15%,67%)] hover:text-white w-8 h-8 flex items-center justify-center transition-colors"
                aria-label="Close flyer"
              >
                <X size={16} />
              </button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

function TournamentCard({ tournament }: { tournament: Tournament }) {
  return (
    <article className="border-t border-[hsl(215,21%,24%)] pt-16 pb-16">
      {/* Header */}
      <div className="flex flex-wrap items-start gap-4 mb-10">
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <StatusBadge status={tournament.status} />
            <span className="text-[hsl(213,15%,67%)] text-xs tracking-wider">{tournament.displayDate}</span>
          </div>
          <h3 className="text-[hsl(214,27%,96%)] font-black text-3xl lg:text-4xl tracking-tight">
            {tournament.name}
            {tournament.subtitle && (
              <span className="text-[hsl(213,15%,67%)] font-normal text-xl lg:text-2xl ml-3">
                — {tournament.subtitle}
              </span>
            )}
          </h3>
        </div>
        <div className="flex flex-wrap gap-3">
          {tournament.flyerUrl && (
            <a
              href={tournament.flyerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[hsl(213,15%,67%)] border border-[hsl(215,21%,24%)] px-4 py-2 hover:text-[hsl(214,27%,96%)] hover:border-[hsl(213,15%,67%)] transition-colors tracking-wide"
            >
              Original Flyer <ExternalLink size={12} />
            </a>
          )}
          {tournament.rulesUrl && (
            <a
              href={tournament.rulesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[hsl(213,15%,67%)] border border-[hsl(215,21%,24%)] px-4 py-2 hover:text-[hsl(214,27%,96%)] hover:border-[hsl(213,15%,67%)] transition-colors tracking-wide"
            >
              Official Rules <ExternalLink size={12} />
            </a>
          )}
        </div>
      </div>

      {/* Body: details + flyer */}
      <div className="grid lg:grid-cols-[1fr_340px] gap-10 items-start">
        {/* Left: event details */}
        <div>
          {/* Quick facts row */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[hsl(215,21%,24%)] border border-[hsl(215,21%,24%)] mb-8">
            <div className="bg-[hsl(215,28%,9%)] px-5 py-4">
              <div className="flex items-center gap-2 text-[hsl(213,15%,67%)] text-xs tracking-wider uppercase mb-2">
                <Calendar size={12} /> Date
              </div>
              <div className="text-[hsl(214,27%,96%)] text-sm font-semibold">{tournament.displayDate}</div>
            </div>
            <div className="bg-[hsl(215,28%,9%)] px-5 py-4">
              <div className="flex items-center gap-2 text-[hsl(213,15%,67%)] text-xs tracking-wider uppercase mb-2">
                <MapPin size={12} /> Venue
              </div>
              <div className="text-[hsl(214,27%,96%)] text-sm font-semibold">{tournament.venue}</div>
              <div className="text-[hsl(213,15%,67%)] text-xs mt-0.5">{tournament.location}</div>
            </div>
            {tournament.participants && (
              <div className="bg-[hsl(215,28%,9%)] px-5 py-4">
                <div className="flex items-center gap-2 text-[hsl(213,15%,67%)] text-xs tracking-wider uppercase mb-2">
                  <Users size={12} /> Participants
                </div>
                <div className="text-[hsl(214,27%,96%)] text-sm font-semibold">{tournament.participants} players</div>
              </div>
            )}
            {tournament.entryFee && (
              <div className="bg-[hsl(215,28%,9%)] px-5 py-4">
                <div className="flex items-center gap-2 text-[hsl(213,15%,67%)] text-xs tracking-wider uppercase mb-2">
                  Entry Fee
                </div>
                <div className="text-[hsl(214,27%,96%)] text-sm font-semibold">{tournament.entryFee}</div>
              </div>
            )}
            {tournament.prizeDistribution && (
              <div className="bg-[hsl(215,28%,9%)] px-5 py-4">
                <div className="flex items-center gap-2 text-[hsl(213,15%,67%)] text-xs tracking-wider uppercase mb-2">
                  <Trophy size={12} /> Prize Split
                </div>
                <div className="text-[hsl(214,27%,96%)] text-sm font-semibold">{tournament.prizeDistribution}</div>
              </div>
            )}
          </div>

          {/* Format details */}
          <div className="mb-8">
            <h4 className="text-[hsl(213,15%,67%)] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Format</h4>
            <div className="space-y-2">
              {[
                { label: 'Bracket', value: tournament.format },
                { label: 'Match Format', value: tournament.matchFormat },
                { label: 'Grand Finals', value: tournament.grandFinalsFormat },
                { label: 'Song Selection', value: tournament.songSelection },
                ...(tournament.scoring ? [{ label: 'Scoring', value: tournament.scoring }] : []),
              ].map((row) => (
                <div key={row.label} className="flex gap-4 text-sm">
                  <span className="text-[hsl(213,15%,67%)] w-28 flex-shrink-0">{row.label}</span>
                  <span className="text-[hsl(214,27%,96%)] font-medium">{row.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Divisions */}
          <div className="mb-8">
            <h4 className="text-[hsl(213,15%,67%)] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Divisions</h4>
            <div className="space-y-2">
              {tournament.divisions.map((div) => (
                <div key={div.name} className="flex items-start gap-4 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-[hsl(220,100%,65%)] mt-1.5 flex-shrink-0" />
                  <div>
                    <span className="text-[hsl(214,27%,96%)] font-semibold">{div.name}</span>
                    <span className="text-[hsl(213,15%,67%)] ml-2">{div.levels}</span>
                    {div.date && <span className="text-[hsl(213,15%,67%)] ml-2">— {div.date}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Responsibilities */}
          {tournament.responsibilities && (
            <div className="mb-8">
              <h4 className="text-[hsl(213,15%,67%)] text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                {tournament.status === 'completed' ? 'Responsibilities' : 'Planned Scope'}
              </h4>
              <ul className="space-y-2">
                {tournament.responsibilities.map((r) => (
                  <li key={r} className="flex items-start gap-3 text-sm text-[hsl(213,15%,67%)]">
                    <span className="text-[hsl(220,100%,65%)] mt-0.5">—</span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Notes */}
          {tournament.notes && tournament.notes.length > 0 && (
            <div className="border-l-2 border-[hsl(220,100%,65%)]/40 pl-4">
              {tournament.notes.map((note) => (
                <p key={note} className="text-xs text-[hsl(213,15%,67%)] leading-relaxed">
                  <span className="text-[hsl(220,100%,65%)] font-semibold">Note: </span>{note}
                </p>
              ))}
            </div>
          )}
        </div>

        {/* Right: flyer */}
        <div className="lg:sticky lg:top-24">
          <FlyerLightbox tournament={tournament} />
        </div>
      </div>
    </article>
  )
}

export default function Tournaments() {
  return (
    <section id="tournaments" className="py-28 bg-[hsl(215,28%,9%)]">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-[hsl(220,100%,65%)] text-xs font-semibold tracking-[0.25em] uppercase mb-4">
          Tournament Portfolio
        </p>
        <div className="w-12 h-px bg-[hsl(220,100%,65%)] mb-6" />
        <h2 className="text-[hsl(214,27%,96%)] font-black text-4xl lg:text-5xl tracking-tight mb-4">
          Events
        </h2>
        <p className="text-[hsl(213,15%,67%)] text-lg max-w-xl mb-16">
          Every event I organize is documented: rules, formats, divisions, and operations. Here's the record.
        </p>

        {tournaments.map((tournament) => (
          <TournamentCard key={tournament.id} tournament={tournament} />
        ))}
      </div>
    </section>
  )
}
