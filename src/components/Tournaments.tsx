import { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { X, ExternalLink, Calendar, MapPin, Users } from 'lucide-react'
import { tournaments, type Tournament } from '@/data/tournaments'

function FlyerModal({ tournament, open, onClose }: { tournament: Tournament; open: boolean; onClose: () => void }) {
  return (
    <Dialog.Root open={open} onOpenChange={(v) => !v && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm" />
        <Dialog.Content className="fixed inset-4 md:inset-16 z-50 flex items-center justify-center outline-none">
          <Dialog.Title className="sr-only">{tournament.name} flyer</Dialog.Title>
          <div className="relative max-h-full max-w-full">
            <img
              src={tournament.flyerSrc}
              alt={tournament.flyerAlt}
              className="max-h-[85vh] max-w-full object-contain rounded"
            />
            <Dialog.Close asChild>
              <button
                className="absolute -top-3 -right-3 w-8 h-8 flex items-center justify-center rounded-full hover:text-white transition-colors"
                style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--muted)' }}
              >
                <X size={14} />
              </button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

function TournamentCard({ tournament }: { tournament: Tournament }) {
  const [flyerOpen, setFlyerOpen] = useState(false)

  return (
    <div className="rounded-xl overflow-hidden" style={{ border: '1px solid var(--border)', background: 'var(--surface)' }}>
      <div className="grid lg:grid-cols-[1fr_280px]">
        {/* Content */}
        <div className="p-8">
          {/* Status + date row */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            {tournament.status === 'completed' ? (
              <span
                className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide px-3 py-1 rounded-full"
                style={{ background: 'rgba(52,211,153,0.1)', color: 'rgb(52,211,153)', border: '1px solid rgba(52,211,153,0.2)' }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Completed
              </span>
            ) : (
              <span
                className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide px-3 py-1 rounded-full"
                style={{ background: 'var(--accent-dim)', color: 'var(--accent)', border: '1px solid rgba(0,212,200,0.2)' }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
                Upcoming
              </span>
            )}
            <span className="text-xs" style={{ color: 'var(--muted)' }}>{tournament.displayDate}</span>
          </div>

          {/* Title */}
          <h3 className="font-black text-white tracking-tight mb-1" style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}>
            {tournament.name}
          </h3>
          {tournament.subtitle && (
            <p className="text-sm mb-5" style={{ color: 'var(--muted)' }}>{tournament.subtitle}</p>
          )}

          {/* Meta row */}
          <div className="flex flex-wrap gap-5 mb-7 mt-4">
            <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--muted)' }}>
              <Calendar size={13} style={{ color: 'var(--accent)' }} />
              {tournament.displayDate}
            </div>
            <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--muted)' }}>
              <MapPin size={13} style={{ color: 'var(--accent)' }} />
              {tournament.venue} · {tournament.location}
            </div>
            {tournament.participants && (
              <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--muted)' }}>
                <Users size={13} style={{ color: 'var(--accent)' }} />
                {tournament.participants} players
              </div>
            )}
          </div>

          <div style={{ borderTop: '1px solid var(--border)', marginBottom: '1.5rem' }} />

          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-5 mb-7">
            {/* Format */}
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-2" style={{ color: 'var(--muted-dim)' }}>Format</p>
              <div className="space-y-1">
                {[
                  [tournament.format, 'Bracket'],
                  [tournament.matchFormat, 'Matches'],
                  [tournament.grandFinalsFormat, 'Grand Finals'],
                ].map(([val, lbl]) => (
                  <div key={lbl} className="flex gap-2 text-sm">
                    <span style={{ color: 'var(--muted)' }}>{lbl}:</span>
                    <span className="text-white">{val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Divisions */}
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-2" style={{ color: 'var(--muted-dim)' }}>Divisions</p>
              <div className="space-y-2">
                {tournament.divisions.map((div) => (
                  <div key={div.name} className="flex items-start gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: 'var(--accent)' }} />
                    <div>
                      <span className="text-white font-medium">{div.name}</span>
                      <span style={{ color: 'var(--muted)' }}> · {div.levels}</span>
                      {div.date && <span style={{ color: 'var(--muted)' }}> · {div.date}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Extra fields */}
            {(tournament.entryFee || tournament.prizeDistribution || tournament.scoring) && (
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-2" style={{ color: 'var(--muted-dim)' }}>Details</p>
                <div className="space-y-1">
                  {tournament.entryFee && (
                    <div className="flex gap-2 text-sm">
                      <span style={{ color: 'var(--muted)' }}>Entry:</span>
                      <span className="text-white">{tournament.entryFee}</span>
                    </div>
                  )}
                  {tournament.prizeDistribution && (
                    <div className="flex gap-2 text-sm">
                      <span style={{ color: 'var(--muted)' }}>Prize:</span>
                      <span className="text-white">{tournament.prizeDistribution}</span>
                    </div>
                  )}
                  {tournament.scoring && (
                    <div className="flex gap-2 text-sm">
                      <span style={{ color: 'var(--muted)' }}>Scoring:</span>
                      <span className="text-white">{tournament.scoring}</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Responsibilities */}
            {tournament.responsibilities && (
              <div className="sm:col-span-2">
                <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-2" style={{ color: 'var(--muted-dim)' }}>
                  {tournament.status === 'completed' ? 'My Role' : 'Planned Scope'}
                </p>
                <ul className="space-y-1">
                  {tournament.responsibilities.map((r) => (
                    <li key={r} className="flex items-start gap-2 text-sm" style={{ color: 'var(--muted)' }}>
                      <span style={{ color: 'var(--accent)' }}>·</span>
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Notes */}
          {tournament.notes && tournament.notes.length > 0 && (
            <div className="rounded-lg p-4 mb-7" style={{ background: 'var(--surface-2)', border: '1px solid var(--border)' }}>
              {tournament.notes.map((note) => (
                <p key={note} className="text-xs leading-relaxed" style={{ color: 'var(--muted)' }}>
                  <span className="font-semibold" style={{ color: 'var(--accent)' }}>Note: </span>
                  {note}
                </p>
              ))}
            </div>
          )}

          {/* Links */}
          <div className="flex flex-wrap gap-4">
            {tournament.flyerUrl && (
              <a
                href={tournament.flyerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold hover:text-white transition-colors"
                style={{ color: 'var(--muted)' }}
              >
                Original Flyer <ExternalLink size={11} />
              </a>
            )}
            {tournament.rulesUrl && (
              <a
                href={tournament.rulesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold hover:text-white transition-colors"
                style={{ color: 'var(--muted)' }}
              >
                Official Rules <ExternalLink size={11} />
              </a>
            )}
          </div>
        </div>

        {/* Flyer */}
        <div
          className="relative cursor-zoom-in group overflow-hidden"
          style={{ borderLeft: '1px solid var(--border)' }}
          onClick={() => setFlyerOpen(true)}
        >
          <img
            src={tournament.flyerSrc}
            alt={tournament.flyerAlt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            style={{ minHeight: '280px' }}
            loading="lazy"
          />
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
            style={{ background: 'rgba(0,212,200,0.08)' }}
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-white bg-black/60 px-4 py-2 rounded">
              View Flyer
            </span>
          </div>
        </div>
      </div>

      <FlyerModal tournament={tournament} open={flyerOpen} onClose={() => setFlyerOpen(false)} />
    </div>
  )
}

export default function Tournaments() {
  return (
    <section id="tournaments" className="py-28" style={{ background: 'var(--bg)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-[2px]" style={{ background: 'var(--accent)' }} />
          <span className="text-xs font-semibold tracking-[0.25em] uppercase" style={{ color: 'var(--accent)' }}>
            Tournament Portfolio
          </span>
        </div>
        <h2 className="font-black text-white tracking-tight mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
          Events
        </h2>
        <p className="text-base mb-14 max-w-lg" style={{ color: 'var(--muted)' }}>
          Every event is fully documented — rules, formats, divisions, and operations.
        </p>

        <div className="space-y-6">
          {tournaments.map((t) => (
            <TournamentCard key={t.id} tournament={t} />
          ))}
        </div>
      </div>
    </section>
  )
}
