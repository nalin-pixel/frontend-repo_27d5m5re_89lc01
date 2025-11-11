import React, { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail,
  HeartHandshake,
  Sparkles,
  Facebook,
  Instagram,
} from 'lucide-react'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const Section = ({ id, title, subtitle, children }) => (
  <section id={id} className="relative py-20 sm:py-24">
    <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-white/40" />
    <div className="container mx-auto px-4">
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
        className="max-w-4xl mx-auto text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-3 text-base sm:text-lg text-gray-600">{subtitle}</p>
        )}
      </motion.div>
      {children}
    </div>
  </section>
)

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 ${
        scrolled ? 'bg-white/70 backdrop-blur border-b border-white/40 shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-3 group">
            <span className="relative inline-flex h-8 w-8 items-center justify-center">
              <span className="absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-60 blur-sm group-hover:opacity-80 transition" />
              <span className="relative inline-flex h-8 w-8 rounded-full bg-gradient-to-tr from-yellow-500 to-orange-500" />
            </span>
            <div className="leading-tight">
              <div className="text-sm uppercase tracking-widest text-yellow-700">Vadakkumpuram</div>
              <div className="-mt-0.5 font-bold text-gray-900">Sree Vishnumaya Devasthanam</div>
            </div>
          </a>
          <div className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#about" className="text-gray-700 hover:text-gray-900">About</a>
            <a href="#seva" className="text-gray-700 hover:text-gray-900">Seva</a>
            <a href="#timings" className="text-gray-700 hover:text-gray-900">Timings</a>
            <a href="#events" className="text-gray-700 hover:text-gray-900">Events</a>
            <a href="#visit" className="text-gray-700 hover:text-gray-900">Visit</a>
            <a href="#donate" className="text-gray-700 hover:text-gray-900">Donate</a>
          </div>
          <a
            href="#donate"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 px-4 py-2 text-white font-medium shadow-md hover:shadow-lg focus:outline-none"
          >
            <HeartHandshake className="h-4 w-4" /> Support
          </a>
        </div>
      </div>
    </motion.nav>
  )
}

const Hero = () => {
  const floating = {
    animate: {
      y: [0, -8, 0],
      transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
    },
  }

  const particles = useMemo(() =>
    Array.from({ length: 28 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: Math.random() * 6 + 2,
      delay: Math.random() * 4,
      opacity: Math.random() * 0.6 + 0.2,
    })),
    []
  )

  return (
    <div id="home" className="relative pt-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(253,224,71,0.25),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(251,146,60,0.25),transparent_35%),radial-gradient(circle_at_50%_80%,rgba(34,197,94,0.2),transparent_35%)]" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/0 via-white/30 to-white" />

      <div className="relative container mx-auto px-4">
        {/* Decorative particles */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          {particles.map((p) => (
            <span
              key={p.id}
              style={{ left: p.left, top: p.top, width: p.size, height: p.size, opacity: p.opacity, animationDelay: `${p.delay}s` }}
              className="absolute rounded-full bg-yellow-400/70 blur-[1px] animate-ping"
            />
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center min-h-[70vh] py-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/30 bg-yellow-50 px-3 py-1 text-yellow-700">
              <Sparkles className="h-4 w-4" />
              Divine abode of Sree Vishnumaya
            </div>
            <h1 className="mt-4 text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900">
              Vadakkumpuram Sree Vishnumaya Devasthanam
            </h1>
            <p className="mt-4 text-lg text-gray-700 max-w-2xl">
              A sacred space of devotion and blessings. Experience the vibrant rituals, divine darshan, and serene ambience surrounded by the rich traditions of Kerala.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <a href="#visit" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 px-6 py-3 text-white font-semibold shadow-lg hover:shadow-xl">
                Plan Your Visit
              </a>
              <a href="#events" className="inline-flex items-center justify-center rounded-full border border-gray-300 px-6 py-3 text-gray-800 font-semibold hover:bg-gray-50">
                Upcoming Events
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={floating}
            animate="animate"
            className="relative mx-auto max-w-md w-full"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-200 via-orange-100 to-emerald-100" />
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjI4MTk5MTl8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="text-white/90">Sree Vishnumaya</div>
                <div className="text-white text-2xl font-bold">Divine Presence</div>
              </div>
            </div>
            <motion.div
              className="absolute -top-6 -left-6 h-24 w-24 rounded-full bg-yellow-400/40 blur-2xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-orange-400/40 blur-2xl"
              animate={{ scale: [1.2, 1, 1.2] }}
              transition={{ duration: 4.5, repeat: Infinity }}
            />
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 py-6">
          {[
            { label: 'Daily Devotees', value: '500+' },
            { label: 'Sevas Offered', value: '25+' },
            { label: 'Festival Days', value: '30+' },
            { label: 'Years of Heritage', value: '200+' },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-yellow-500/20 bg-white/70 backdrop-blur p-4 text-center shadow-sm"
            >
              <div className="text-2xl font-extrabold text-gray-900">{s.value}</div>
              <div className="text-xs uppercase tracking-wide text-gray-500">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

const About = () => (
  <Section
    id="about"
    title="About the Temple"
    subtitle="A sacred kshetram rooted in devotion, protection, and prosperity"
  >
    <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="rounded-3xl overflow-hidden border border-yellow-500/20 bg-white/70 backdrop-blur shadow-lg"
      >
        <div className="aspect-video bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjI4MTk5MTl8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center" />
        <div className="p-6 sm:p-8">
          <p className="text-gray-700 leading-relaxed">
            Vadakkumpuram Sree Vishnumaya Devasthanam is a traditional Kerala temple known for its powerful rituals and compassionate grace of Sree Vishnumaya. Devotees from near and far visit to seek blessings for protection, success, and harmony.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            The temple conducts daily poojas, special sevas, and grand festivals in accordance with agamic traditions. The tranquil surroundings and sacred chants offer a deeply spiritual experience.
          </p>
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="rounded-3xl border border-yellow-500/20 bg-gradient-to-br from-yellow-50 to-orange-50 p-6 sm:p-8 shadow-inner"
      >
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            {
              title: 'Powerful Sevas',
              desc: 'Prasadam, Rahu-Ketu pooja, Udayasthamaya pooja, and more for protection and prosperity.',
            },
            {
              title: 'Traditional Rituals',
              desc: 'Daily poojas by experienced thanthris and pujaries in authentic Kerala style.',
            },
            {
              title: 'Festivals',
              desc: 'Colorful celebrations with bhajans, annadanam, kavadi, and vibrant decorations.',
            },
            {
              title: 'Community',
              desc: 'Service initiatives and cultural programs bringing devotees together.',
            },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl bg-white/80 backdrop-blur p-5 border border-yellow-500/20 shadow">
              <div className="text-lg font-bold text-gray-900">{item.title}</div>
              <p className="text-gray-600 mt-1 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-2xl border border-yellow-500/30 p-5 bg-white/80">
          <div className="flex items-center gap-3 text-yellow-800">
            <Sparkles className="h-5 w-5" />
            Blessings for all who seek with faith and devotion.
          </div>
        </div>
      </motion.div>
    </div>
  </Section>
)

const Seva = () => (
  <Section
    id="seva"
    title="Sevas & Offerings"
    subtitle="Participate in sacred rituals and receive divine blessings"
  >
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {[
        { name: 'Udayasthamaya Pooja', desc: 'Full-day worship for prosperity and success.' },
        { name: 'Rahu-Ketu Pooja', desc: 'For relief from doshas and obstacles.' },
        { name: 'Guruthi Pooja', desc: 'Powerful ritual for protection and strength.' },
        { name: 'Bhagavathi Seva', desc: 'Divine blessings for family harmony.' },
        { name: 'Ayilya Pooja', desc: 'Seek healing and well-being.' },
        { name: 'Annadanam', desc: 'Offer food to devotees as sacred service.' },
      ].map((s, i) => (
        <motion.div
          key={s.name}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05 }}
          whileHover={{ y: -4, scale: 1.01 }}
          className="group rounded-2xl border border-yellow-500/20 bg-white/80 backdrop-blur p-6 shadow-sm hover:shadow-md"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-gray-900">{s.name}</h3>
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 shadow" />
          </div>
          <p className="mt-2 text-gray-600 text-sm">{s.desc}</p>
          <a href="#visit" className="mt-4 inline-flex text-sm font-medium text-yellow-700 group-hover:text-yellow-800">Learn more →</a>
        </motion.div>
      ))}
    </div>
  </Section>
)

const Timings = () => (
  <Section id="timings" title="Darshan Timings" subtitle="Timings may vary on special festival days">
    <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6">
      {[
        { title: 'Morning', slots: ['05:30 AM – Nirmalya Darshan', '06:00 AM – Usha Pooja', '07:30 AM – Ucha Pooja'] },
        { title: 'Evening', slots: ['05:30 PM – Deeparadhana', '07:00 PM – Athazha Pooja'] },
      ].map((t) => (
        <motion.div
          key={t.title}
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="rounded-2xl border border-yellow-500/20 bg-white/80 backdrop-blur p-6 shadow"
        >
          <div className="flex items-center gap-2 text-gray-900 font-bold">
            <Clock className="h-5 w-5 text-yellow-700" /> {t.title}
          </div>
          <ul className="mt-3 space-y-2 text-gray-700">
            {t.slots.map((s) => (
              <li key={s} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-yellow-600" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="sm:col-span-2 rounded-2xl border border-yellow-500/20 bg-yellow-50/70 p-6"
      >
        <div className="flex items-start gap-3 text-yellow-900">
          <Calendar className="h-5 w-5" />
          <p>
            On auspicious days and festivals, special poojas and extended darshan are conducted. Please check announcements below for updates.
          </p>
        </div>
      </motion.div>
    </div>
  </Section>
)

const Events = () => (
  <Section id="events" title="Announcements & Upcoming Events" subtitle="Join us in prayer and celebration">
    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
      {[
        { date: 'Nov 24', title: 'Special Guruthi Pooja', desc: 'Powerful protection ritual after Deeparadhana.' },
        { date: 'Dec 01', title: 'Annadanam Seva', desc: 'All devotees are welcome to partake and volunteer.' },
        { date: 'Dec 15', title: 'Bhajan Sandhya', desc: 'Evening of devotional songs and prayer.' },
        { date: 'Dec 29', title: 'Ulsavam Preparations', desc: 'Volunteers meeting for annual festival.' },
      ].map((e, i) => (
        <motion.div
          key={e.title}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05 }}
          className="rounded-2xl border border-yellow-500/20 bg-white/80 backdrop-blur p-6 shadow"
        >
          <div className="flex items-center justify-between">
            <div className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-600">
              {e.date}
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Calendar className="h-4 w-4" /> Upcoming
            </div>
          </div>
          <div className="mt-2 text-lg font-bold text-gray-900">{e.title}</div>
          <p className="text-gray-600 mt-1">{e.desc}</p>
        </motion.div>
      ))}
    </div>
  </Section>
)

const Donate = () => (
  <Section id="donate" title="Support the Temple" subtitle="Your contribution helps maintain rituals, annadanam, and community service">
    <motion.div
      variants={fadeIn}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="max-w-5xl mx-auto rounded-3xl overflow-hidden border border-yellow-500/20 bg-white/80 backdrop-blur shadow"
    >
      <div className="grid lg:grid-cols-2">
        <div className="p-8 sm:p-10">
          <div className="text-2xl font-extrabold text-gray-900">Make a Donation</div>
          <p className="mt-2 text-gray-600">
            Contribute towards poojas, annadanam, and temple development. Every bit counts and is gratefully acknowledged.
          </p>
          <div className="mt-6 space-y-3">
            <div className="rounded-xl border border-yellow-500/30 p-4">
              <div className="text-sm text-gray-600">UPI ID</div>
              <div className="font-mono text-lg">vishnumaya@upi</div>
            </div>
            <div className="rounded-xl border border-yellow-500/30 p-4">
              <div className="text-sm text-gray-600">Bank Transfer</div>
              <div className="text-sm">Account Name: Vadakkumpuram Sree Vishnumaya Devasthanam</div>
              <div className="text-sm">A/C: 1234567890 • IFSC: ABCD0123456 • Branch: Vadakkumpuram</div>
            </div>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 px-6 py-3 text-white font-semibold shadow-lg hover:shadow-xl">
              Donate Now
            </a>
            <a href="mailto:info@vishnumaya-temple.org" className="inline-flex items-center justify-center rounded-full border border-gray-300 px-6 py-3 text-gray-800 font-semibold hover:bg-gray-50">
              <Mail className="h-4 w-4 mr-2" /> Get Receipt via Email
            </a>
          </div>
        </div>
        <div className="relative min-h-[280px] lg:min-h-[100%] bg-gradient-to-br from-yellow-200 via-orange-100 to-emerald-100">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjI4MTk5MTl8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
        </div>
      </div>
    </motion.div>
  </Section>
)

const Gallery = () => {
  const images = [
    'https://images.unsplash.com/photo-1523419409543-a9a1161a8fd9?q=80&w=1470&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1623966370206-996f51022635?q=80&w=1470&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1548013146-c6838f3d3be9?q=80&w=1470&auto=format&fit=crop',
  ]
  const [index, setIndex] = useState(0)
  const next = () => setIndex((i) => (i + 1) % images.length)
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length)

  useEffect(() => {
    const t = setInterval(next, 5000)
    return () => clearInterval(t)
  }, [])

  return (
    <Section id="gallery" title="Temple Gallery" subtitle="Glimpses of devotion and tradition">
      <div className="max-w-5xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl border border-yellow-500/20 shadow bg-white/70 backdrop-blur">
          <div className="aspect-[16/9]">
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
                style={{ backgroundImage: `url(${images[index]})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              />
            </AnimatePresence>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
          <div className="absolute inset-0 flex items-center justify-between p-4">
            <button onClick={prev} className="rounded-full bg-white/80 hover:bg-white text-gray-900 px-4 py-2 shadow">‹</button>
            <button onClick={next} className="rounded-full bg-white/80 hover:bg-white text-gray-900 px-4 py-2 shadow">›</button>
          </div>
        </div>
        <div className="mt-4 flex justify-center gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 w-2 rounded-full ${i === index ? 'bg-yellow-600' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>
    </Section>
  )
}

const Visit = () => (
  <Section id="visit" title="Plan Your Visit" subtitle="We welcome you to seek the blessings of Sree Vishnumaya">
    <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-6">
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="rounded-2xl border border-yellow-500/20 bg-white/80 backdrop-blur p-6 shadow"
      >
        <div className="flex items-center gap-2 text-gray-900 font-bold">
          <MapPin className="h-5 w-5 text-yellow-700" /> Location
        </div>
        <p className="mt-2 text-gray-700">
          Vadakkumpuram, Kerala, India
        </p>
        <a
          href="https://www.google.com/maps/search/?api=1&query=Vadakkumpuram+Sree+Vishnumaya+Devasthanam"
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-flex text-sm text-yellow-700 font-medium"
        >
          Open in Google Maps →
        </a>
        <div className="mt-6 grid sm:grid-cols-2 gap-4">
          <div className="rounded-xl border border-yellow-500/20 p-4">
            <div className="text-sm text-gray-600">Temple Phone</div>
            <a href="tel:+919000000000" className="font-semibold text-gray-900">+91 90000 00000</a>
          </div>
          <div className="rounded-xl border border-yellow-500/20 p-4">
            <div className="text-sm text-gray-600">Email</div>
            <a href="mailto:info@vishnumaya-temple.org" className="font-semibold text-gray-900">info@vishnumaya-temple.org</a>
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="rounded-2xl overflow-hidden border border-yellow-500/20 shadow"
      >
        <div className="aspect-[4/3] bg-[url('https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1470&auto=format&fit=crop')] bg-cover bg-center" />
      </motion.div>
    </div>
  </Section>
)

const Footer = () => (
  <footer className="relative mt-16">
    <div className="absolute inset-0 -z-10 bg-gradient-to-t from-yellow-100 via-orange-50 to-transparent" />
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="relative inline-flex h-9 w-9 items-center justify-center">
              <span className="absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-60 blur-sm" />
              <span className="relative inline-flex h-9 w-9 rounded-full bg-gradient-to-tr from-yellow-500 to-orange-500" />
            </span>
            <div className="font-bold text-gray-900">Sree Vishnumaya Devasthanam</div>
          </div>
          <p className="mt-4 text-sm text-gray-600 max-w-xs">
            A sanctuary of faith, service, and community.
          </p>
        </div>
        <div className="text-sm">
          <div className="font-semibold text-gray-900">Quick Links</div>
          <ul className="mt-2 space-y-1 text-gray-600">
            <li><a href="#about" className="hover:text-gray-900">About</a></li>
            <li><a href="#seva" className="hover:text-gray-900">Sevas</a></li>
            <li><a href="#timings" className="hover:text-gray-900">Timings</a></li>
            <li><a href="#events" className="hover:text-gray-900">Events</a></li>
          </ul>
        </div>
        <div className="text-sm">
          <div className="font-semibold text-gray-900">Connect</div>
          <div className="mt-2 flex items-center gap-3 text-gray-700">
            <a href="#" className="inline-flex items-center gap-2 hover:text-gray-900"><Facebook className="h-4 w-4" /> Facebook</a>
            <a href="#" className="inline-flex items-center gap-2 hover:text-gray-900"><Instagram className="h-4 w-4" /> Instagram</a>
          </div>
          <div className="mt-3 text-gray-700">© {new Date().getFullYear()} Vadakkumpuram Sree Vishnumaya Devasthanam</div>
        </div>
      </div>
    </div>
  </footer>
)

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-yellow-200 selection:text-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Seva />
      <Timings />
      <Events />
      <Gallery />
      <Visit />
      <Donate />
      <Footer />
    </div>
  )
}
