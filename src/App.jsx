import React from 'react'
import Hero from './components/Hero'
import Story from './components/Story'
import Pricing from './components/Pricing'
import Birthday from './components/Birthday'
import BookingContact from './components/BookingContact'
import BackgroundFX from './components/BackgroundFX'

function App() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <BackgroundFX density={70} color="255, 40, 40" />
      <Hero />
      <Story />
      <Pricing />
      <Birthday />
      <BookingContact />

      <footer className="relative bg-stone-950 border-t border-white/10 py-10 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-20 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,0,0,0.15),rgba(0,0,0,0)_60%)]" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-stone-400 text-sm relative">
          <p>Copyright © Pannon Safe Home Kft. minden jog fenntartva</p>
        </div>
      </footer>
    </div>
  )
}

export default App
