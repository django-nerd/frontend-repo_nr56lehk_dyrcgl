export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.15),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.12),transparent_40%)]"/>
      <div className="max-w-6xl mx-auto px-4 py-20 relative">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
              Taste the Magic of South India
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
              From classic Masala Dosa to fiery Mysore specials — freshly made with love and the crunch you crave.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#menu" className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-md shadow">
                Explore Menu
              </a>
              <a href="#reserve" className="bg-white hover:bg-gray-50 text-gray-900 px-6 py-3 rounded-md border border-black/10">
                Reserve a Table
              </a>
            </div>
            <div className="mt-6 flex items-center gap-3 text-sm text-gray-500">
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500"/>
              Open today 9:00 AM – 11:00 PM
            </div>
          </div>
          <div className="relative">
            <img src="/hero-dosa.jpg" alt="Crispy Dosa" className="rounded-xl shadow-lg w-full object-cover max-h-[420px]" onError={(e)=>{e.currentTarget.src='https://images.unsplash.com/photo-1604908812210-c6fbc69b56fa?q=80&w=1400&auto=format&fit=crop'}}/>
            <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur p-4 rounded-lg shadow border border-black/5">
              <p className="text-sm text-gray-600">1000+ happy customers served every week</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
