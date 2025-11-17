import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MenuSection from './components/MenuSection'
import Reservation from './components/Reservation'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white text-gray-900">
      <Navbar />
      <Hero />
      <MenuSection />
      <section id="about" className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <img className="rounded-xl border border-black/10" src="/about-dosa.jpg" alt="About" onError={(e)=>{e.currentTarget.src='https://images.unsplash.com/photo-1604908554007-85934f0715d2?q=80&w=1400&auto=format&fit=crop'}}/>
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight">Our Story</h2>
            <p className="mt-4 text-gray-600">A humble kitchen, a sizzling tawa, and a dream to share authentic South Indian flavors. Every dosa we serve is made with care, from family recipes passed down with love.</p>
            <ul className="mt-6 space-y-2 text-gray-700 list-disc pl-5">
              <li>Stone-ground batter fermented naturally</li>
              <li>Pure ghee and the freshest ingredients</li>
              <li>Chutneys made every morning</li>
            </ul>
          </div>
        </div>
      </section>
      <Reservation />
      <Footer />
    </div>
  )
}

export default App