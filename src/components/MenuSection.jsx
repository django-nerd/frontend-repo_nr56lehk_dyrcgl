import { useEffect, useState } from 'react'

const sampleMenu = [
  { name: 'Masala Dosa', description: 'Crispy dosa with spiced potato filling', price: 120, category: 'Dosa', is_veg: true },
  { name: 'Mysore Dosa', description: 'Spicy chutney smeared dosa', price: 140, category: 'Dosa', is_veg: true },
  { name: 'Paper Dosa', description: 'Super thin, extra crispy', price: 150, category: 'Dosa', is_veg: true },
  { name: 'Idli Sambar', description: 'Soft idlis served with hot sambar', price: 90, category: 'Idli', is_veg: true },
  { name: 'Filter Coffee', description: 'Authentic South Indian coffee', price: 60, category: 'Drinks', is_veg: true },
]

export default function MenuSection() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadMenu = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/menu`)
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        if (Array.isArray(data) && data.length) setItems(data)
        else setItems(sampleMenu)
      } catch {
        setItems(sampleMenu)
      } finally {
        setLoading(false)
      }
    }
    loadMenu()
  }, [])

  return (
    <section id="menu" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold tracking-tight">Our Signature Menu</h2>
        <p className="text-gray-600 mt-2">Freshly prepared with authentic ingredients.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {(loading ? sampleMenu : items).map((item, i) => (
            <div key={i} className="p-5 rounded-xl border border-black/10 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                </div>
                <span className="font-bold text-emerald-700">₹{item.price}</span>
              </div>
              <div className="mt-3 text-xs text-gray-500">{item.category}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
