'use client';

import Image from 'next/image'
import { useState } from 'react'

export default function Seminar() {
  const [selectedPackage, setSelectedPackage] = useState<'pass' | 'full' | null>(null);
  const [hasCopied, setHasCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("3135534712");
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  const amountToPay = selectedPackage === 'pass' ? '₦5,000' : '₦10,000';
  const packageName = selectedPackage === 'pass' ? 'Registration Pass' : 'Full Package';

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-black/10 sticky top-0 bg-white/95 backdrop-blur-sm z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Image
              src="/Logo.png"
              alt="StageCraft Academy"
              width={36}
              height={36}
              className="rounded-lg"
            />
            <div>
              <div className="font-semibold text-sm text-brand-cream">StageCraft Academy</div>
              <div className="text-xs text-brand-muted">Master the Stage</div>
            </div>
          </a>
          <a
            href="#register"
            className="px-6 py-2 bg-brand-accent text-white rounded-full text-sm hover:bg-brand-accent-soft transition-colors"
          >
            Register Now
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block px-3 py-1 bg-brand-accent/20 text-slate-800 text-xs rounded-full mb-6 font-medium">
            ⚡ Second Edition • Limited Seats
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            The Fear That<br />Stops You From<br />Leading.
          </h1>
          <p className="text-xl text-brand-muted mb-6 max-w-2xl leading-relaxed">
            You know your material. You have valuable ideas. But when it's time to present—to a room, to an audience, to decision-makers—something shifts. Your voice wavers. Your mind goes blank. The opportunity slips away.
          </p>
          <p className="text-lg text-brand-cream mb-8 max-w-2xl">
            This doesn't have to be your story anymore.
          </p>
          <a
            href="#register"
            className="inline-block px-8 py-4 bg-brand-accent text-white rounded-full font-medium hover:bg-brand-accent-soft transition-colors text-lg"
          >
            Secure Your Spot →
          </a>
        </div>
      </section>

      {/* The Transformation */}
      <section className="px-6 py-16 md:py-24 bg-black/[0.03] border-t border-b border-black/10">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8">From Trembling<br />to Commanding.</h2>
              <p className="text-lg text-brand-muted mb-6">
                In 12 hours, you'll move from stage fright to stage mastery. You'll learn the exact techniques that turn nervous speakers into confident communicators—the kind of people who own the room and inspire action.
              </p>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-brand-accent font-bold">✓</span>
                  <span>Stop apologizing for taking up space</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-accent font-bold">✓</span>
                  <span>Command attention without shouting</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-accent font-bold">✓</span>
                  <span>Deliver ideas that stick and inspire</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-accent font-bold">✓</span>
                  <span>Handle Q&A with confidence and clarity</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-brand-accent/20 to-brand-accent/5 rounded-2xl p-12 border border-brand-accent/20 flex items-center justify-center min-h-80">
              <div className="text-center">
                <div className="text-6xl mb-4">
                  🚀
                </div>
                <p className="text-brand-muted">Your transformation begins here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside */}
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">What You'll Master</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 border border-black/10 rounded-xl hover:border-brand-accent/30 hover:bg-brand-accent/5 transition-all">
              <div className="text-2xl mb-3">🎯</div>
              <h3 className="text-xl font-semibold mb-2">Stage Presence</h3>
              <p className="text-brand-muted">Own the room from your first step. Learn body language, positioning, and the psychology of presence.</p>
            </div>
            <div className="p-6 border border-black/10 rounded-xl hover:border-brand-accent/30 hover:bg-brand-accent/5 transition-all">
              <div className="text-2xl mb-3">📖</div>
              <h3 className="text-xl font-semibold mb-2">Story Architecture</h3>
              <p className="text-brand-muted">Structure narratives that captivate. Build emotional arcs that lead to action and retention.</p>
            </div>
            <div className="p-6 border border-black/10 rounded-xl hover:border-brand-accent/30 hover:bg-brand-accent/5 transition-all">
              <div className="text-2xl mb-3">🎙️</div>
              <h3 className="text-xl font-semibold mb-2">Voice & Delivery</h3>
              <p className="text-brand-muted">Transform your vocal delivery into a powerful instrument. Master pacing, emphasis, and the art of the pause.</p>
            </div>
            <div className="p-6 border border-black/10 rounded-xl hover:border-brand-accent/30 hover:bg-brand-accent/5 transition-all">
              <div className="text-2xl mb-3">💬</div>
              <h3 className="text-xl font-semibold mb-2">Audience Engagement</h3>
              <p className="text-brand-muted">Turn listeners into participants. Handle Q&A, build rapport, and create memorable interactions.</p>
            </div>
            <div className="p-6 border border-black/10 rounded-xl hover:border-brand-accent/30 hover:bg-brand-accent/5 transition-all">
              <div className="text-2xl mb-3">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Overcoming Fear</h3>
              <p className="text-brand-muted">Practical strategies to silence the inner critic. Real techniques for real speakers in real situations.</p>
            </div>
            <div className="p-6 border border-black/10 rounded-xl hover:border-brand-accent/30 hover:bg-brand-accent/5 transition-all">
              <div className="text-2xl mb-3">🎬</div>
              <h3 className="text-xl font-semibold mb-2">Live Practice</h3>
              <p className="text-brand-muted">Apply everything in real-time. Get feedback, refine, and build muscle memory that lasts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof - Edition 1 Results */}
      <section className="px-6 py-16 md:py-24 bg-black/[0.03] border-t border-b border-black/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">The First Edition Changed Lives</h2>
          <p className="text-center text-brand-muted mb-16 text-lg">What participants from Project Eloquencia 2025 experienced.</p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 border border-black/10 rounded-xl">
              <p className="text-brand-accent font-semibold mb-3 text-sm">⭐⭐⭐⭐⭐</p>
              <p className="text-brand-cream mb-4 italic">
                "I went from avoiding meetings to leading them. The confidence I gained was worth every penny."
              </p>
              <p className="text-sm font-semibold">Tosin, Founder</p>
              <p className="text-xs text-brand-muted">Tech Startup</p>
            </div>
            <div className="p-6 border border-black/10 rounded-xl">
              <p className="text-brand-accent font-semibold mb-3 text-sm">⭐⭐⭐⭐⭐</p>
              <p className="text-brand-cream mb-4 italic">
                "From trembling before presentations to delivering pitches that win deals. This seminar changed everything."
              </p>
              <p className="text-sm font-semibold">Amina, Creative Director</p>
              <p className="text-xs text-brand-muted">Marketing Agency</p>
            </div>
            <div className="p-6 border border-black/10 rounded-xl">
              <p className="text-brand-accent font-semibold mb-3 text-sm">⭐⭐⭐⭐⭐</p>
              <p className="text-brand-cream mb-4 italic">
                "The techniques are practical and immediately applicable. I've already noticed the impact in my career."
              </p>
              <p className="text-sm font-semibold">Chisom, Executive</p>
              <p className="text-xs text-brand-muted">Financial Services</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Join */}
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">This Is For You If You...</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-3">
              <span className="text-brand-accent text-xl">→</span>
              <p>Have ideas worth sharing but struggle to express them effectively</p>
            </div>
            <div className="flex gap-3">
              <span className="text-brand-accent text-xl">→</span>
              <p>Feel anxious about speaking in front of groups or important people</p>
            </div>
            <div className="flex gap-3">
              <span className="text-brand-accent text-xl">→</span>
              <p>Want to advance your career and leadership presence</p>
            </div>
            <div className="flex gap-3">
              <span className="text-brand-accent text-xl">→</span>
              <p>Know speaking skills matter but don't know where to start</p>
            </div>
            <div className="flex gap-3">
              <span className="text-brand-accent text-xl">→</span>
              <p>Want to inspire, persuade, and influence with your words</p>
            </div>
            <div className="flex gap-3">
              <span className="text-brand-accent text-xl">→</span>
              <p>Are ready to invest in yourself and your future</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Registration */}
      <section id="register" className="px-6 py-16 md:py-24 bg-black/[0.03] border-t border-black/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">Secure Your Seat</h2>
          <p className="text-center text-brand-muted mb-12 text-lg">Limited availability for the second edition.</p>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-12">
            {/* Registration Pass */}
            <div className="p-8 border border-black/10 rounded-2xl">
              <h3 className="text-2xl font-bold mb-2">Registration Pass</h3>
              <p className="text-brand-muted mb-6">Core access to the complete seminar</p>
              <div className="mb-8">
                <span className="text-4xl font-bold">₦5,000</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-2 text-sm">
                  <span className="text-brand-accent">✓</span>
                  <span>12 hours of live training</span>
                </li>
                <li className="flex gap-2 text-sm">
                  <span className="text-brand-accent">✓</span>
                  <span>Stage drills and practice</span>
                </li>
                <li className="flex gap-2 text-sm">
                  <span className="text-brand-accent">✓</span>
                  <span>Peer feedback sessions</span>
                </li>
                <li className="flex gap-2 text-sm">
                  <span className="text-brand-accent">✓</span>
                  <span>Digital resources</span>
                </li>
              </ul>
              <button
                onClick={() => setSelectedPackage('pass')}
                className="w-full px-5 py-3 border border-brand-accent text-brand-accent rounded-full hover:bg-brand-accent/10 transition-colors font-medium"
              >
                Select This Option
              </button>
            </div>

            {/* Full Package */}
            <div className="p-8 border-2 border-brand-accent rounded-2xl bg-brand-accent/5 relative">
              <div className="absolute -top-4 left-6 px-3 py-1 bg-brand-accent text-white text-xs font-bold rounded-full">
                BEST VALUE
              </div>
              <h3 className="text-2xl font-bold mb-2">Full Package</h3>
              <p className="text-brand-muted mb-6">Everything + Premium merchandise</p>
              <div className="mb-8">
                <span className="text-4xl font-bold">₦10,000</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-2 text-sm">
                  <span className="text-brand-accent">✓</span>
                  <span>Everything in Registration Pass</span>
                </li>
                <li className="flex gap-2 text-sm">
                  <span className="text-brand-accent">✓</span>
                  <span>Premium T-shirt + Face cap</span>
                </li>
                <li className="flex gap-2 text-sm">
                  <span className="text-brand-accent">✓</span>
                  <span>Priority seating</span>
                </li>
                <li className="flex gap-2 text-sm">
                  <span className="text-brand-accent">✓</span>
                  <span>Lifetime recordings access</span>
                </li>
              </ul>
              <button
                onClick={() => setSelectedPackage('full')}
                className="w-full px-5 py-3 bg-brand-accent text-white rounded-full hover:bg-brand-accent-soft transition-colors font-medium"
              >
                Choose Full Package
              </button>
            </div>
          </div>

          {/* Limited Availability Warning */}
          <div className="text-center">
            <p className="text-sm text-brand-muted mb-2">⏰ Second Edition • Limited Seats Available</p>
            <p className="text-xs text-brand-cream">This is a hands-on program with individual attention. We keep cohorts intentionally small.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">Questions?</h2>

          <div className="space-y-6">
            <div className="p-6 border border-black/10 rounded-xl">
              <h3 className="font-semibold text-brand-cream mb-2">Is this for beginners?</h3>
              <p className="text-brand-muted">Yes and no. Whether you're starting from zero or already speak publicly, this program meets you where you are and takes you further. Everyone leaves as a more confident, effective communicator.</p>
            </div>

            <div className="p-6 border border-black/10 rounded-xl">
              <h3 className="font-semibold text-brand-cream mb-2">What if I have speech anxiety?</h3>
              <p className="text-brand-muted">This is exactly what the program addresses. We focus on practical techniques that help you manage anxiety and build genuine confidence through practice and feedback.</p>
            </div>

            <div className="p-6 border border-black/10 rounded-xl">
              <h3 className="font-semibold text-brand-cream mb-2">Can I access recordings if I miss a session?</h3>
              <p className="text-brand-muted">Yes. Both packages include lifetime access to all recordings, so you can review and catch up at your own pace.</p>
            </div>

            <div className="p-6 border border-black/10 rounded-xl">
              <h3 className="font-semibold text-brand-cream mb-2">When is this happening?</h3>
              <p className="text-brand-muted">Contact us at hello@stagecraft.academy for dates and details. We run sessions throughout the year with limited cohorts per program.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-16 md:py-24 bg-gradient-to-b from-brand-accent/10 to-transparent border-t border-black/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Your Voice Matters.</h2>
          <p className="text-xl text-brand-muted mb-8 max-w-2xl mx-auto">
            The ideas you're sitting on could change minds, influence decisions, and build the future you want. It's time to step into your power and be heard.
          </p>
          <a
            href="#register"
            className="inline-block px-10 py-4 bg-brand-accent text-white rounded-full font-medium hover:bg-brand-accent-soft transition-colors text-lg"
          >
            Reserve Your Seat Today →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/10 px-6 py-12">
        <div className="max-w-6xl mx-auto text-center text-sm text-brand-muted">
          <p>© 2026 StageCraft Academy. All rights reserved.</p>
          <p className="mt-2 text-xs">hello@stagecraft.academy</p>
        </div>
      </footer>

      {/* Payment Modal */}
      {selectedPackage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white rounded-[2rem] w-full max-w-md overflow-hidden shadow-2xl relative animate-in zoom-in-95 duration-300">
            <button 
              onClick={() => setSelectedPackage(null)}
              className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full bg-black/5 hover:bg-black/10 transition-colors text-black/50 hover:text-black z-10"
              aria-label="Close modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="p-8 pb-6 border-b border-black/5">
              <div className="inline-block px-3 py-1 bg-brand-accent/10 text-brand-accent text-xs rounded-full mb-4 font-semibold tracking-wide uppercase">
                {packageName}
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-1">Complete Payment</h3>
              <p className="text-slate-500 text-sm">Transfer the exact amount below to secure your seat.</p>
              
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-5xl font-bold text-slate-900">{amountToPay}</span>
                <span className="text-slate-500 font-medium">NGN</span>
              </div>
            </div>

            <div className="p-8 pt-6 bg-slate-50/50">
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center py-3 border-b border-black/5">
                  <span className="text-slate-500 text-sm">Bank Name</span>
                  <span className="font-semibold text-slate-800">Firstbank Nig</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-black/5">
                  <span className="text-slate-500 text-sm">Account Name</span>
                  <span className="font-semibold text-slate-800">Haruna Abubakar</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-black/5">
                  <span className="text-slate-500 text-sm">Account Number</span>
                  <button 
                    onClick={copyToClipboard}
                    className="flex items-center gap-2 px-3 py-1.5 -mr-3 rounded-lg hover:bg-brand-accent/5 transition-colors group cursor-pointer"
                    title="Copy to clipboard"
                  >
                    <span className="font-mono text-lg font-bold text-brand-accent">3135534712</span>
                    {hasCopied ? (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-green-600">
                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-brand-accent/50 group-hover:text-brand-accent transition-colors">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              <a 
                href={`https://wa.me/2347032191882?text=${encodeURIComponent(`Hello! I just made a payment of ${amountToPay} for the StageCraft Academy ${packageName}. Here is my proof of payment:`)}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex w-full px-4 py-4 bg-[#25D366] text-white text-center rounded-xl font-medium hover:bg-[#128C7E] transition-colors items-center justify-center gap-3 shadow-lg shadow-[#25D366]/20 group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" className="group-hover:scale-110 transition-transform">
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                </svg>
                Send Proof of Payment
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}