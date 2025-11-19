import React from 'react'
import { motion } from 'framer-motion'

export default function Birthday() {
  return (
    <section className="bg-stone-950 py-16 md:py-24 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-20 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,0,0,0.2),rgba(0,0,0,0)_60%)]" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ y: 10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl md:text-4xl font-extrabold text-white text-center">Szülinapi parti csomagok</motion.h2>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {[
            {title:'Alap csomag', price:'6 főig: 29.000 Ft • 8 főig bővíthető +2.000 Ft/fő', items:['2 órás időtartam','Szabadulószoba használata','Labirintus korlátlan használata','Szülinapi asztal és helyszín előkészítése','Szülinapi zenék','A játékélmény érdekében, maximum 8 főig']},
            {title:'Bővített csomag', price:'Max 8 főig: 45.000 Ft', items:['2,5 órás időtartam','Szabadulószoba használata','Labirintus korlátlan használata','Szülinapi asztal és helyszín előkészítése','Szülinapi zenék','+1 játék, ahol nem csak a győztes kap ajándékot','A játékélmény érdekében, maximum 8 főig']}
          ].map((card, i) => (
            <motion.div key={card.title} initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i*0.08 }} className="p-6 rounded-xl bg-white/5 border border-white/10 relative overflow-hidden">
              <div className="absolute -inset-1 opacity-0 hover:opacity-10 transition bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,0,0,0.6),rgba(0,0,0,0)_60%)]" />
              <h3 className="text-white font-semibold">{card.title}</h3>
              <ul className="mt-3 text-stone-300 text-sm list-disc pl-5 space-y-1">
                {card.items.map((it)=> <li key={it}>{it}</li>)}
              </ul>
              <div className="mt-4 text-red-300 font-semibold">{card.price}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center text-stone-300">
          <p>Kiknek ajánljuk? Érdeklődjön telefonon.</p>
          <p className="mt-1">Ajándékutalvány vásárolható – beváltási határidő: 6 hónap.</p>
        </div>
      </div>
    </section>
  )
}
