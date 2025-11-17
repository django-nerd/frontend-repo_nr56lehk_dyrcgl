import { Menu, Phone } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-40 backdrop-blur bg-white/60 border-b border-black/5">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo-dosa.png" alt="Pappa ji ka Dosa" className="h-10 w-10 object-contain" onError={(e)=>{e.currentTarget.style.display='none'}}/>
          <div className="leading-tight">
            <p className="text-xl font-extrabold tracking-tight">Pappa ji ka Dosa</p>
            <p className="text-xs text-emerald-700/80">Crispy • Authentic • Heartwarming</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          <a href="#menu" className="hover:text-emerald-700 transition-colors">Menu</a>
          <a href="#reserve" className="hover:text-emerald-700 transition-colors">Reserve</a>
          <a href="#about" className="hover:text-emerald-700 transition-colors">About</a>
          <a href="#contact" className="hover:text-emerald-700 transition-colors">Contact</a>
        </nav>
        <a href="#reserve" className="hidden md:inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md shadow-sm transition-colors">
          <Phone className="h-4 w-4"/>
          Book a Table
        </a>
        <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-black/10">
          <Menu className="h-5 w-5"/>
        </button>
      </div>
    </header>
  )
}
