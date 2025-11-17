export default function Footer(){
  return (
    <footer id="contact" className="bg-white border-t border-black/10 py-10">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        <div>
          <h4 className="font-bold">Pappa ji ka Dosa</h4>
          <p className="text-sm text-gray-600 mt-2">123 Flavor Street, Food City</p>
          <p className="text-sm text-gray-600">+91 98765 43210</p>
        </div>
        <div>
          <h4 className="font-bold">Hours</h4>
          <p className="text-sm text-gray-600 mt-2">Mon–Fri: 10:00 AM – 10:00 PM</p>
          <p className="text-sm text-gray-600">Sat–Sun: 9:00 AM – 11:00 PM</p>
        </div>
        <div>
          <h4 className="font-bold">Follow</h4>
          <p className="text-sm text-gray-600 mt-2">Instagram • Facebook • Maps</p>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 mt-8">© {new Date().getFullYear()} Pappa ji ka Dosa. All rights reserved.</div>
    </footer>
  )
}
