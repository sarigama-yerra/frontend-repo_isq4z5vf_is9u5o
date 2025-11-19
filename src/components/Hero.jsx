import React from 'react'

const phone = '+36 70 614 6428'

export default function Hero() {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-amber-900 via-stone-900 to-black" />
      <div className="absolute inset-0 -z-10 opacity-30 bg-[radial-gradient(circle_at_20%_10%,rgba(251,191,36,0.35),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(34,197,94,0.25),transparent_40%),radial-gradient(circle_at_50%_90%,rgba(59,130,246,0.25),transparent_45%)]" />

      {/* Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center shadow-inner">
            <span className="text-amber-300 font-black">Π</span>
          </div>
          <div className="text-left">
            <div className="text-amber-200 tracking-wide text-sm uppercase">Para túra</div>
            <div className="text-white/90 text-xs">Szabadulószoba – Szombathely</div>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#arak" className="text-white/80 hover:text-white transition">Árak</a>
          <a href="#foglalas" className="text-white/80 hover:text-white transition">Időpontfoglalás</a>
          <a href="#kapcsolat" className="text-white/80 hover:text-white transition">Kapcsolat</a>
          <a href={`tel:${phone.replaceAll(' ', '')}`} className="ml-2 inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-amber-500 text-black font-semibold hover:brightness-110 transition shadow">
            Hívás: {phone}
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-8 md:pt-16">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
              Legendák, mondák és jóslatok nyomában...
            </h1>
            <p className="mt-5 text-lg text-amber-100/90 max-w-2xl">
              Elsősorban gyermekeknek, 2–5 fős csapatoknak, kalandvágyóknak 8 éves kortól. Lehetőség van felnőtt kíséretre – igény esetén gyermekes családoknak egyéni játék is.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#foglalas" className="px-5 py-3 rounded-xl bg-amber-400 text-black font-bold hover:brightness-110 transition shadow-lg shadow-amber-400/20">
                Időpontfoglalás
              </a>
              <a href="#tortenet" className="px-5 py-3 rounded-xl bg-white/10 text-white/90 font-semibold hover:bg-white/15 transition border border-white/10">
                Mi a történet?
              </a>
            </div>
            <div className="mt-6 text-amber-200/80 text-sm">
              Kitűnő beltéri program rossz idő esetén is • Nyáron hűvös pince (16–19 °C)
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl border border-white/10 bg-gradient-to-br from-stone-800 to-stone-900 p-6 shadow-2xl">
              <div className="h-full w-full rounded-xl bg-[radial-gradient(circle_at_30%_30%,rgba(251,191,36,0.15),transparent_40%),radial-gradient(circle_at_70%_70%,rgba(96,165,250,0.12),transparent_45%)] flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl md:text-7xl">🧭</div>
                  <div className="mt-3 text-white/90 font-semibold">130 m² játékterület</div>
                  <div className="mt-1 text-white/60 text-sm">Labirintus, jelek, rejtvények, kaland</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-amber-500 text-black text-sm font-bold px-4 py-2 rounded-lg shadow">
              Szombathely
            </div>
          </div>
        </div>
      </section>
    </header>
  )
}
