import React from 'react'

const tiers = [
  { people: '2 fő', price: '4.500 Ft / fő' },
  { people: '3 fő', price: '4.000 Ft / fő' },
  { people: '4 fő', price: '3.500 Ft / fő' },
  { people: '5+ fő', price: '3.000 Ft / fő' },
]

export default function Pricing() {
  return (
    <section id="arak" className="bg-stone-900 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center">Árak</h2>
        <p className="mt-3 text-stone-300 text-center">Szülinapi parti és egyéb opciók esetén keressenek telefonon</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {tiers.map((t) => (
            <div key={t.people} className="p-6 rounded-xl bg-white/5 border border-white/10 text-center">
              <div className="text-stone-300">{t.people} esetén</div>
              <div className="mt-2 text-2xl font-bold text-white">{t.price}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-white/5 border border-white/10">
            <h3 className="text-white font-semibold">Nyitvatartás</h3>
            <p className="mt-2 text-stone-300 text-sm">Hétköznap: 17:00–21:00<br/>Hétvégén: 10:00–21:00<br/>A foglalások függvényében</p>
          </div>
          <div className="p-6 rounded-xl bg-white/5 border border-white/10">
            <h3 className="text-white font-semibold">Körülmények</h3>
            <p className="mt-2 text-stone-300 text-sm">Pince hőmérséklet (16–19 °C) – réteges öltözködés javasolt. A helyszín nem akadálymentesített. Kamerával megfigyelt terület.</p>
          </div>
          <div className="p-6 rounded-xl bg-white/5 border border-white/10">
            <h3 className="text-white font-semibold">Játékterület</h3>
            <p className="mt-2 text-stone-300 text-sm">130 m² labirintus, rejtvények és kaland – rossz időben is kiváló program!</p>
          </div>
        </div>
      </div>
    </section>
  )
}
