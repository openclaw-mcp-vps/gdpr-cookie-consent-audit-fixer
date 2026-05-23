export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          GDPR Compliance
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-5">
          Fix GDPR violations<br />
          <span className="text-[#58a6ff]">before you get fined</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Instantly scan any website for cookie consent violations, get a detailed legal audit report, and download ready-to-use compliant consent code — no lawyers needed.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Audit for $12/mo
        </a>
        <p className="mt-4 text-xs text-[#484f58]">Cancel anytime. Covers unlimited scans for your domain.</p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {[
            { icon: '🔍', title: 'Deep Cookie Scan', desc: 'Headless browser crawls your site and detects all cookies, trackers, and third-party scripts.' },
            { icon: '⚖️', title: 'Legal Violation Report', desc: 'Maps findings to specific GDPR articles and ePrivacy Directive clauses with severity ratings.' },
            { icon: '💾', title: 'Compliant Code Snippets', desc: 'Download plug-and-play consent banner code tailored to your tech stack.' },
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <h3 className="text-white font-semibold mb-1">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-extrabold text-white mb-1">$12<span className="text-xl font-normal text-[#8b949e]">/mo</span></p>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to stay compliant</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited website scans',
              'Full GDPR & ePrivacy audit report',
              'Downloadable consent code snippets',
              'Violation severity ratings',
              'Email PDF report delivery',
              'Priority support',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'What exactly does the scanner check?',
              a: 'It uses a headless browser to load your site and detects all cookies set before consent, third-party trackers, missing consent banners, and non-compliant cookie policies — mapped to specific GDPR articles.',
            },
            {
              q: 'Do I need technical knowledge to use the code snippets?',
              a: 'No. The generated snippets include plain HTML/JS and framework-specific versions (React, Vue, WordPress). Each comes with step-by-step integration instructions.',
            },
            {
              q: 'Is this a substitute for legal advice?',
              a: 'The tool provides technical compliance checks based on current GDPR and ePrivacy requirements. For complex legal situations, we recommend consulting a data protection officer.',
            },
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="text-white font-semibold mb-2">{item.q}</p>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#484f58]">
        © {new Date().getFullYear()} GDPR Cookie Audit Fixer. Not legal advice.
      </footer>
    </main>
  )
}
