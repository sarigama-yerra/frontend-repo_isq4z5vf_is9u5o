import React from 'react'
import { motion } from 'framer-motion'

export default function Story() {
  return (
    <section id="tortenet" className="relative py-16 md:py-24 bg-stone-950 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(255,60,60,0.08),transparent_55%)]" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.h2 initial={{ y: 10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-3xl md:text-4xl font-extrabold text-white text-center">
          Minotaurusz labirintusában
        </motion.h2>
        <motion.p initial={{ y: 10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="mt-4 text-stone-300 text-lg text-center max-w-3xl mx-auto">
          Mágneses és elektromos viharok, napkitörések és más ismeretlen jelenségek megzavarják az időgépek működését. Ilyenkor az időutazók beszorulnak egy idősávba – pont úgy, mint a Bermuda-háromszögben...
        </motion.p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[{icon:'🌀', title:'Időzavar', text:'Hogy újraindíthassák a gépeket, szükségük van az eredeti kódokra – ezeket biztonsági okokból nem tarthatják maguknál.'},{icon:'🏛️', title:'Örök helyszín', text:'A kódokat a Minotaurusz labirintusában rejtették el – tudták, hogy minden korban felfedezhető és fennmarad.'},{icon:'🗝️', title:'Rejtett jelek', text:'A feladat: megtalálni a jeleket és kijutni a labirintusból – egymásnak üzenő időutazók nyomában.'}].map((c, i)=> (
            <motion.div key={c.title} initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i*0.08 }} className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-red-500/40 transition relative overflow-hidden">
              <div className="absolute -inset-1 opacity-0 hover:opacity-10 transition bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,0,0,0.6),rgba(0,0,0,0)_60%)]" />
              <div className="text-2xl">{c.icon}</div>
              <h3 className="mt-3 text-white font-semibold">{c.title}</h3>
              <p className="mt-2 text-stone-300 text-sm">{c.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
