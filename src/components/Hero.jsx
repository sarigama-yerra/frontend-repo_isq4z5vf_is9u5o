import React from 'react'
import { motion } from 'framer-motion'

const phone = '+36 70 614 6428'

export default function Hero() {
  return (
    <header className="relative overflow-hidden">
      {/* Red primary gradients and subtle particles handled by BackgroundFX */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-red-900 via-stone-900 to-black" />
      <div className="absolute inset-0 -z-10 opacity-30 bg-[radial-gradient(circle_at_20%_10%,rgba(255,80,80,0.35),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(255,0,0,0.25),transparent_40%),radial-gradient(circle_at_50%_90%,rgba(255,80,80,0.25),transparent_45%)]" />

      {/* Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <motion.div initial={{ scale: 0.8, rotate: -10, opacity: 0 }} animate={{ scale: 1, rotate: 0, opacity: 1 }} transition={{ type: 'spring', stiffness: 120, damping: 14 }} className="h-10 w-10 rounded-xl bg-red-500/20 border border-red-400/30 flex items-center justify-center shadow-inner">
            <span className="text-red-300 font-black">Π</span>
          </motion.div>
          <div className="text-left">
            <div className="text-red-200 tracking-wide text-sm uppercase">Para túra</div>
            <div className="text-white/90 text-xs">Szabadulószoba – Szombathely</div>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#arak" className="text-white/80 hover:text-white transition">Árak</a>
          <a href="#foglalas" className="text-white/80 hover:text-white transition">Időpontfoglalás</a>
          <a href="#kapcsolat" className="text-white/80 hover:text-white transition">Kapcsolat</a>
          <a href={`tel:${phone.replaceAll(' ', '')}`} className="ml-2 inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-red-500 text-black font-semibold hover:brightness-110 transition shadow">
            Hívás: {phone}
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-8 md:pt-16">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <motion.h1 initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
              Legendák, mondák és jóslatok nyomában...
            </motion.h1>
            <motion.p initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="mt-5 text-lg text-red-100/90 max-w-2xl">
              Elsősorban gyermekeknek, 2–5 fős csapatoknak, kalandvágyóknak 8 éves kortól. Lehetőség van felnőtt kíséretre – igény esetén gyermekes családoknak egyéni játék is.
            </motion.p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} href="#foglalas" className="px-5 py-3 rounded-xl bg-red-500 text-black font-bold hover:brightness-110 transition shadow-lg shadow-red-500/20">
                Időpontfoglalás
              </motion.a>
              <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} href="#tortenet" className="px-5 py-3 rounded-xl bg-white/10 text-white/90 font-semibold hover:bg-white/15 transition border border-white/10">
                Mi a történet?
              </motion.a>
            </div>
            <div className="mt-6 text-red-200/80 text-sm">
              Kitűnő beltéri program rossz idő esetén is • Nyáron hűvös pince (16–19 °C)
            </div>
          </div>

          <div className="relative">
            <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="aspect-[4/3] rounded-2xl border border-white/10 bg-gradient-to-br from-stone-800 to-stone-900 p-0 shadow-2xl overflow-hidden">
              {/* Image area with overlay */}
              <div className="relative h-full w-full">
                <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1600&auto=format&fit=crop" alt="Labirintus és rejtvények" className="h-full w-full object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div className="backdrop-blur-md bg-black/30 border border-white/10 text-white rounded-lg px-3 py-2 text-sm">
                    <div className="font-semibold">130 m² játékterület</div>
                    <div className="text-white/70">Labirintus, jelek, rejtvények, kaland</div>
                  </div>
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="hidden md:flex items-center gap-2 text-white/80">
                    <span className="inline-block h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                    <span>Élmény üzemmód</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
            <div className="absolute -bottom-4 -left-4 bg-red-500 text-black text-sm font-bold px-4 py-2 rounded-lg shadow">
              Szombathely
            </div>
          </div>
        </div>
      </section>
    </header>
  )
}
