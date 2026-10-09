export type TournamentStatus = 'completed' | 'upcoming' | 'scheduled'

export interface Division {
  name: string
  levels: string
  day?: string
  date?: string
}

export interface Tournament {
  id: string
  name: string
  subtitle?: string
  date: string
  displayDate: string
  venue: string
  location: string
  game: string
  participants?: number
  format: string
  matchFormat: string
  grandFinalsFormat: string
  songSelection: string
  scoring?: string
  divisions: Division[]
  entryFee?: string
  prizeDistribution?: string
  status: TournamentStatus
  flyerSrc: string
  flyerAlt: string
  rulesUrl?: string
  flyerUrl?: string
  responsibilities?: string[]
  notes?: string[]
}

export const tournaments: Tournament[] = [
  {
    id: 'ddr-a3-2026',
    name: 'DDR A3 Tournament',
    date: '2026-05-09',
    displayDate: 'May 9, 2026',
    venue: 'Prince UFO',
    location: 'Colonie Center Mall, Colonie, NY',
    game: 'Dance Dance Revolution',
    participants: 18,
    format: 'Double Elimination',
    matchFormat: 'Best of 3',
    grandFinalsFormat: 'Best of 5',
    songSelection: 'Pick-and-ban system',
    divisions: [
      { name: 'Neptune', levels: 'Levels 9–12' },
      { name: 'World', levels: 'Levels 13+' },
    ],
    entryFee: 'Free entry',
    status: 'completed',
    flyerSrc: '/images/DDR_TWO_CHAMPIONS_1.jpg',
    flyerAlt: 'DDR A3 Tournament flyer — May 9, 2026 at Prince UFO Arcade, Colonie Center, NY',
    flyerUrl: 'https://drive.google.com/file/d/1USyNiyFGOfoDa4BzwjqWJ71kPdk6LJlA/view',
    rulesUrl: 'https://drive.google.com/file/d/1m-UgYjG_zhYEMNV-npf5GWCXsTKzcKQE/view',
    responsibilities: [
      'Tournament planning and rule development',
      'Player registration and division placement',
      'Bracket organization and management',
      'On-site event operations and match coordination',
    ],
    notes: [
      'The original event flyer lists single elimination; the tournament was run as double elimination per the official written rules.',
    ],
  },
  {
    id: 'capital-rhythm-2026',
    name: 'Capital Rhythm',
    subtitle: 'DDR Tournament',
    date: '2026-10-17',
    displayDate: 'October 17–18, 2026',
    venue: 'Prince UFO',
    location: 'Colonie Center Mall, Albany, NY',
    game: 'Dance Dance Revolution',
    format: 'Double Elimination',
    matchFormat: 'Best of 3',
    grandFinalsFormat: 'Best of 5 with bracket reset',
    songSelection: 'Randomized eligible charts via DDR Tools',
    scoring: 'EX Score',
    entryFee: '$15 per division',
    prizeDistribution: '70/30 split — Top 3 players',
    divisions: [
      { name: 'Rising Stage', levels: 'Levels 9–12', day: 'Day 1', date: 'Saturday, Oct 17' },
      { name: 'Ultimate Stage', levels: 'Levels 13–16', day: 'Day 2', date: 'Sunday, Oct 18' },
    ],
    status: 'upcoming',
    flyerSrc: '/images/capital-rhythm-flyer.png',
    flyerAlt: 'Capital Rhythm DDR Tournament flyer — October 17–18, 2026 at Prince UFO, Albany NY',
    flyerUrl: 'https://drive.google.com/file/d/1NMTKJ54GXcY_bIHY79rLfXD-LETdVPVm/view',
    rulesUrl: 'https://docs.google.com/document/d/14Cd61PzPfYq3M0E2JigQoFbJuPst1xLK/edit',
    responsibilities: [
      'Full tournament planning and published rulebook',
      'Two-day event structure with separate skill divisions',
      'EX Score–based judging system',
      'Randomized song selection via DDR Tools',
      'Player registration and bracket management',
    ],
  },
]
