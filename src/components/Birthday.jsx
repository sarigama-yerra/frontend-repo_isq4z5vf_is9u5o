import React from 'react'

export default function Birthday() {
  return (
    <section className="bg-stone-950 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center">Szülinapi parti csomagok</h2>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl bg-white/5 border border-white/10">
            <h3 className="text-white font-semibold">Alap csomag</h3>
            <ul className="mt-3 text-stone-300 text-sm list-disc pl-5 space-y-1">
              <li>2 órás időtartam</li>
              <li>Szabadulószoba használata</li>
              <li>Labirintus korlátlan használata</li>
              <li>Szülinapi asztal és helyszín előkészítése</li>
              <li>Szülinapi zenék</li>
              <li>A játékélmény érdekében, maximum 8 főig</li>
            </ul>
            <div className="mt-4 text-amber-300 font-semibold">6 főig: 29.000 Ft • 8 főig bővíthető +2.000 Ft/fő</div>
          </div>

          <div className="p-6 rounded-xl bg-white/5 border border-white/10">
            <h3 className="text-white font-semibold">Bővített csomag</h3>
            <ul className="mt-3 text-stone-300 text-sm list-disc pl-5 space-y-1">
              <li>2,5 órás időtartam</li>
              <li>Szabadulószoba használata</li>
              <li>Labirintus korlátlan használata</li>
              <li>Szülinapi asztal és helyszín előkészítése</li>
              <li>Szülinapi zenék</li>
              <li>+1 játék, ahol nem csak a győztes kap ajándékot</li>
              <li>A játékélmény érdekében, maximum 8 főig</li>
            </ul>
            <div className="mt-4 text-amber-300 font-semibold">Max 8 főig: 45.000 Ft</div>
          </div>
        </div>

        <div className="mt-8 text-center text-stone-300">
          <p>Kiknek ajánljuk? Érdeklődjön telefonon.</p>
          <p className="mt-1">Ajándékutalvány vásárolható – beváltási határidő: 6 hónap.</p>
        </div>
      </div>
    </section>
  )
}
