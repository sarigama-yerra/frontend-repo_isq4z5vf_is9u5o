import React from 'react'

export default function Story() {
  return (
    <section id="tortenet" className="relative py-16 md:py-24 bg-stone-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(251,191,36,0.06),transparent_55%)]" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center">
          Minotaurusz labirintusában
        </h2>
        <p className="mt-4 text-stone-300 text-lg text-center max-w-3xl mx-auto">
          Mágneses és elektromos viharok, napkitörések és más ismeretlen jelenségek megzavarják az időgépek működését. Ilyenkor az időutazók beszorulnak egy idősávba – pont úgy, mint a Bermuda-háromszögben...
        </p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-white/5 border border-white/10">
            <div className="text-2xl">🌀</div>
            <h3 className="mt-3 text-white font-semibold">Időzavar</h3>
            <p className="mt-2 text-stone-300 text-sm">Hogy újraindíthassák a gépeket, szükségük van az eredeti kódokra – ezeket biztonsági okokból nem tarthatják maguknál.</p>
          </div>
          <div className="p-6 rounded-xl bg-white/5 border border-white/10">
            <div className="text-2xl">🏛️</div>
            <h3 className="mt-3 text-white font-semibold">Örök helyszín</h3>
            <p className="mt-2 text-stone-300 text-sm">A kódokat a Minotaurusz labirintusában rejtették el – tudták, hogy minden korban felfedezhető és fennmarad.</p>
          </div>
          <div className="p-6 rounded-xl bg-white/5 border border-white/10">
            <div className="text-2xl">🗝️</div>
            <h3 className="mt-3 text-white font-semibold">Rejtett jelek</h3>
            <p className="mt-2 text-stone-300 text-sm">A feladat: megtalálni a jeleket és kijutni a labirintusból – egymásnak üzenő időutazók nyomában.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
