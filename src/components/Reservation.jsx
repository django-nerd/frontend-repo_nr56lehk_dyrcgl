import { useState } from 'react'

export default function Reservation() {
  const [form, setForm] = useState({ name: '', phone: '', date: '', time: '', guests: 2, notes: '' })
  const [status, setStatus] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Submitting...')
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/reservations`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, guests: Number(form.guests) })
      })
      if (!res.ok) throw new Error('Failed')
      const data = await res.json()
      setStatus('Reservation confirmed!')
      setForm({ name: '', phone: '', date: '', time: '', guests: 2, notes: '' })
    } catch (e) {
      setStatus('Could not submit reservation right now.')
    }
  }

  return (
    <section id="reserve" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold tracking-tight">Reserve a Table</h2>
        <p className="text-gray-600 mt-2">We’ll save you the crispiest corner.</p>
        <form onSubmit={submit} className="mt-8 grid md:grid-cols-2 gap-6 bg-white p-6 rounded-xl border border-black/10">
          <input required placeholder="Your name" className="px-4 py-3 rounded border border-black/10" value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/>
          <input required placeholder="Phone number" className="px-4 py-3 rounded border border-black/10" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})}/>
          <input type="date" required className="px-4 py-3 rounded border border-black/10" value={form.date} onChange={e=>setForm({...form,date:e.target.value})}/>
          <input type="time" required className="px-4 py-3 rounded border border-black/10" value={form.time} onChange={e=>setForm({...form,time:e.target.value})}/>
          <input type="number" min="1" max="20" className="px-4 py-3 rounded border border-black/10" value={form.guests} onChange={e=>setForm({...form,guests:e.target.value})}/>
          <input placeholder="Notes (optional)" className="px-4 py-3 rounded border border-black/10 md:col-span-2" value={form.notes} onChange={e=>setForm({...form,notes:e.target.value})}/>
          <div className="md:col-span-2 flex items-center justify-between">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-md">Book Now</button>
            {status && <p className="text-sm text-gray-600">{status}</p>}
          </div>
        </form>
      </div>
    </section>
  )
}
