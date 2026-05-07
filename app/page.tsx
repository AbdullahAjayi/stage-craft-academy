import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/Logo.png"
              alt="StageCraft Academy"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <div>
              <div className="font-semibold text-brand-cream">StageCraft Academy</div>
              <div className="text-xs text-brand-muted">Master the Stage</div>
            </div>
          </div>
          <nav className="flex gap-8">
            <a href="#" className="text-sm text-brand-muted hover:text-brand-cream transition-colors">Programs</a>
            <a href="#" className="text-sm text-brand-muted hover:text-brand-cream transition-colors">About</a>
            <a href="#" className="text-sm text-brand-muted hover:text-brand-cream transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="text-center max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            StageCraft<br />Academy
          </h1>
          <p className="text-xl text-brand-muted mb-8 leading-relaxed">
            We empower individuals to express themselves with clarity, confidence, and impact by mastering the art of public speaking.
          </p>
          <a
            href="/seminar"
            className="inline-block px-8 py-4 bg-brand-accent text-white rounded-full font-medium hover:bg-brand-accent-soft transition-colors"
          >
            Explore Project Eloquencia
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center text-sm text-brand-muted">
          <p>© 2024 StageCraft Academy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}