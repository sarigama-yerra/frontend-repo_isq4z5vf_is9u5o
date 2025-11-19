import React from 'react'
import Hero from './components/Hero'
import Story from './components/Story'
import Pricing from './components/Pricing'
import Birthday from './components/Birthday'
import BookingContact from './components/BookingContact'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <Story />
      <Pricing />
      <Birthday />
      <BookingContact />

      <footer className="bg-stone-950 border-t border-white/10 py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-stone-400 text-sm">
          <p>Copyright © Pannon Safe Home Kft. minden jog fenntartva</p>
        </div>
      </footer>
    </div>
  )
}

export default App
