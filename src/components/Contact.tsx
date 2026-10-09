import { Mail, MessageSquare } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-28 bg-[hsl(215,24%,12%)]">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-[hsl(220,100%,65%)] text-xs font-semibold tracking-[0.25em] uppercase mb-4">
          Contact
        </p>
        <div className="w-12 h-px bg-[hsl(220,100%,65%)] mb-6" />
        <h2 className="text-[hsl(214,27%,96%)] font-black text-4xl lg:text-5xl tracking-tight mb-4">
          Get in Touch
        </h2>
        <p className="text-[hsl(213,15%,67%)] text-lg max-w-xl mb-16">
          Available for venue partnerships, tournament collaborations, and competitive gaming event planning throughout New York.
        </p>

        <div className="grid lg:grid-cols-2 gap-px bg-[hsl(215,21%,24%)] border border-[hsl(215,21%,24%)]">
          {/* Left: identity + contact */}
          <div className="bg-[hsl(215,24%,12%)] p-10 flex flex-col gap-10">
            <div>
              <p className="text-[hsl(214,27%,96%)] font-black text-2xl tracking-tight">Victor Rodriguez</p>
              <p className="text-[hsl(220,100%,65%)] text-sm font-semibold tracking-wider uppercase mt-1">
                GhoulKing · Tournament Organizer
              </p>
            </div>

            <div className="space-y-1">
              <p className="text-[hsl(213,15%,50%)] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Contact</p>
              <a
                href="mailto:XxGhoulkingxX6@gmail.com"
                className="flex items-center gap-4 py-3 border-b border-[hsl(215,21%,24%)] text-[hsl(213,15%,67%)] hover:text-[hsl(214,27%,96%)] transition-colors group"
              >
                <Mail size={15} className="text-[hsl(220,100%,65%)] flex-shrink-0" />
                <div>
                  <p className="text-xs text-[hsl(213,15%,50%)] mb-0.5">Email</p>
                  <p className="text-sm font-medium">XxGhoulkingxX6@gmail.com</p>
                </div>
              </a>
              <div className="flex items-center gap-4 py-3 border-b border-[hsl(215,21%,24%)] text-[hsl(213,15%,67%)]">
                <MessageSquare size={15} className="text-[hsl(220,100%,65%)] flex-shrink-0" />
                <div>
                  <p className="text-xs text-[hsl(213,15%,50%)] mb-0.5">Discord</p>
                  <p className="text-sm font-medium">XxGhoulkingxX</p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-[hsl(213,15%,50%)] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Based In</p>
              <p className="text-sm text-[hsl(213,15%,67%)]">Albany, New York</p>
            </div>
          </div>

          {/* Right: scope + CTA */}
          <div className="bg-[hsl(215,28%,9%)] p-10 flex flex-col justify-between gap-10">
            <div>
              <p className="text-[hsl(213,15%,50%)] text-xs font-semibold tracking-[0.2em] uppercase mb-6">Areas of Collaboration</p>
              <ul className="space-y-4">
                {[
                  ['Venue Partnerships', 'Arcade operators and gaming venues looking to host competitive events.'],
                  ['Tournament Planning', 'Full event structure, rulebooks, brackets, and on-site operations.'],
                  ['Community Programming', 'Building recurring competitive scenes at established locations.'],
                  ['Sponsorship & Outreach', 'Brand alignment with grassroots competitive gaming events.'],
                ].map(([title, desc]) => (
                  <li key={title} className="flex gap-4">
                    <span className="text-[hsl(220,100%,65%)] mt-0.5 flex-shrink-0">—</span>
                    <div>
                      <p className="text-sm font-semibold text-[hsl(214,27%,96%)]">{title}</p>
                      <p className="text-xs text-[hsl(213,15%,50%)] mt-0.5 leading-relaxed">{desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="mailto:XxGhoulkingxX6@gmail.com?subject=Collaboration Inquiry — GhoulKing"
              className="w-full text-center bg-[hsl(220,100%,65%)] text-white font-bold text-sm px-8 py-4 hover:bg-[hsl(220,100%,58%)] transition-colors tracking-widest uppercase block"
            >
              Send an Email
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
