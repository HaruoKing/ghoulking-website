import { ClipboardList, GitBranch, Users, Monitor, Music } from 'lucide-react'

const services = [
  {
    icon: ClipboardList,
    title: 'Tournament Planning',
    items: [
      'Competition formats and bracket structures',
      'Scheduling and event flow',
      'Skill-based divisions',
      'Rulebook development and event documentation',
    ],
  },
  {
    icon: GitBranch,
    title: 'Bracket & Match Management',
    items: [
      'Double-elimination bracket administration',
      'Match procedures and rulings',
      'Scoring system implementation',
      'Bracket resets and Grand Finals format',
    ],
  },
  {
    icon: Users,
    title: 'Player Coordination',
    items: [
      'Registration and check-in',
      'Participant communication',
      'Division placement by skill level',
      'Match announcements and scheduling',
    ],
  },
  {
    icon: Monitor,
    title: 'Event Operations',
    items: [
      'Tournament-day coordination and logistics',
      'Match progression and timing',
      'Schedule management',
      'Competitive fairness and on-site rulings',
    ],
  },
  {
    icon: Music,
    title: 'Community Events',
    items: [
      'Rhythm-game tournaments (DDR, etc.)',
      'Multi-division event structures',
      'Future fighting-game events',
      'Venue partnership coordination',
    ],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-28 bg-[hsl(215,24%,12%)]">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-[hsl(220,100%,65%)] text-xs font-semibold tracking-[0.25em] uppercase mb-4">
          Services
        </p>
        <div className="w-12 h-px bg-[hsl(220,100%,65%)] mb-12" />

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <h2 className="text-[hsl(214,27%,96%)] font-black text-4xl lg:text-5xl tracking-tight">
            Organizing Capabilities
          </h2>
          <p className="text-[hsl(213,15%,67%)] text-lg leading-relaxed self-end">
            Full-service tournament coordination for competitive gaming events. I manage structure, logistics, and on-site operations — so venues can focus on providing the space and the community.
          </p>
        </div>

        <div
          className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[hsl(215,21%,24%)]"
        >
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="p-8 border-b border-r border-[hsl(215,21%,24%)]"
              >
                <div className="w-8 h-8 flex items-center justify-center mb-5">
                  <Icon size={20} className="text-[hsl(220,100%,65%)]" />
                </div>
                <h3 className="text-[hsl(214,27%,96%)] font-bold text-base mb-4 tracking-tight">{service.title}</h3>
                <ul className="space-y-2.5">
                  {service.items.map((item) => (
                    <li key={item} className="text-sm text-[hsl(213,15%,67%)] leading-relaxed flex items-start gap-2">
                      <span className="text-[hsl(220,100%,65%)] mt-1 flex-shrink-0 text-xs">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
