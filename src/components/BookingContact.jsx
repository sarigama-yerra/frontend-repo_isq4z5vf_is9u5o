import React, { useState } from 'react'

const phone = '+36 70 614 6428'
const email = 'pannonsh@gmail.com'

export default function BookingContact() {
  const [players, setPlayers] = useState('')
  const [date, setDate] = useState('')
  const [name, setName] = useState('')
  const [emailValue, setEmailValue] = useState('')
  const [phoneValue, setPhoneValue] = useState('')
  const [message, setMessage] = useState('')

  const handleBooking = (e) => {
    e.preventDefault()
    alert('Köszönjük a foglalási igényt! A véglegesítés telefonon történik: ' + phone)
  }

  const handleContact = (e) => {
    e.preventDefault()
    alert('Üzenet elküldve. Hamarosan jelentkezünk: ' + email)
  }

  return (
    <section id="foglalas" className="bg-stone-900 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center">Időpontfoglalás</h2>
        <p className="mt-2 text-center text-stone-300">Amennyiben a következő napra vagy azon belül szeretne foglalni, kérjük hívjon telefonon.</p>

        <div className="mt-10 grid md:grid-cols-2 gap-8">
          {/* Booking form */}
          <form onSubmit={handleBooking} className="p-6 rounded-xl bg-white/5 border border-white/10">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-stone-300">Név</label>
                <input value={name} onChange={(e)=>setName(e.target.value)} required className="mt-1 w-full px-3 py-2 rounded-lg bg-stone-800 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-amber-400" />
              </div>
              <div>
                <label className="block text-sm text-stone-300">E-mail cím</label>
                <input type="email" value={emailValue} onChange={(e)=>setEmailValue(e.target.value)} required className="mt-1 w-full px-3 py-2 rounded-lg bg-stone-800 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-amber-400" />
              </div>
              <div>
                <label className="block text-sm text-stone-300">Telefonszám</label>
                <input value={phoneValue} onChange={(e)=>setPhoneValue(e.target.value)} required className="mt-1 w-full px-3 py-2 rounded-lg bg-stone-800 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-amber-400" />
              </div>
              <div>
                <label className="block text-sm text-stone-300">Játékosok száma</label>
                <input value={players} onChange={(e)=>setPlayers(e.target.value)} required className="mt-1 w-full px-3 py-2 rounded-lg bg-stone-800 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-amber-400" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-stone-300">Időpont</label>
                <input type="datetime-local" value={date} onChange={(e)=>setDate(e.target.value)} required className="mt-1 w-full px-3 py-2 rounded-lg bg-stone-800 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-amber-400" />
              </div>
            </div>
            <button type="submit" className="mt-6 w-full px-5 py-3 rounded-xl bg-amber-400 text-black font-bold hover:brightness-110 transition">Foglalás</button>
            <p className="mt-3 text-xs text-stone-400">A gombra kattintva elfogadja az ÁSZF-et, adatkezelési feltételeket és a szabályzatot.</p>
          </form>

          {/* Contact form */}
          <form id="kapcsolat" onSubmit={handleContact} className="p-6 rounded-xl bg-white/5 border border-white/10">
            <h3 className="text-white font-semibold">Kapcsolat</h3>
            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-stone-300">Név</label>
                <input className="mt-1 w-full px-3 py-2 rounded-lg bg-stone-800 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-amber-400" />
              </div>
              <div>
                <label className="block text-sm text-stone-300">E-mail cím</label>
                <input type="email" className="mt-1 w-full px-3 py-2 rounded-lg bg-stone-800 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-amber-400" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-stone-300">Üzenet</label>
                <textarea rows="4" className="mt-1 w-full px-3 py-2 rounded-lg bg-stone-800 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-amber-400" />
              </div>
            </div>
            <button type="submit" className="mt-6 w-full px-5 py-3 rounded-xl bg-white/10 text-white font-semibold border border-white/20 hover:bg-white/15 transition">Küldés</button>
            <p className="mt-3 text-xs text-stone-400">A Küldés gombbal elfogadja az ÁSZF-et és az adatkezelési nyilatkozatot.</p>

            <div className="mt-6 text-sm text-stone-300">
              <p>Telefon: <a className="underline hover:text-white" href={`tel:${phone.replaceAll(' ', '')}`}>{phone}</a></p>
              <p>E-mail: <a className="underline hover:text-white" href={`mailto:${email}`}>{email}</a></p>
              <p className="mt-2 text-xs text-stone-400">Lemondás üzenetben vagy e-mailben lehetséges.</p>
            </div>
          </form>
        </div>

        <div className="mt-10 text-center text-stone-400 text-sm">
          Ünnepnapokra a foglalás kizárólag telefonos egyeztetés alapján lehetséges.
        </div>
      </div>
    </section>
  )
}
