import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="hidden md:block bg-background-dark border-t border-primary/20 py-16 px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <Link to="/" className="inline-block group mb-2">
            <img 
              src="/logo.png" 
              alt="Ila Kochi Logo" 
              className="h-16 object-contain group-hover:scale-105 transition-transform" 
            />
          </Link>
          <p className="text-slate-400 text-sm leading-relaxed">A sanctuary for the senses, bringing the essence of Kerala's heritage to your table.</p>
          <div className="flex gap-4">
            <a className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-background-dark transition-all" href="#">
              <span className="material-symbols-outlined text-xl">language</span>
            </a>
            <a className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-background-dark transition-all" href="#">
              <span className="material-symbols-outlined text-xl">share</span>
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6">Location</h4>
          <p className="text-slate-400 text-sm mb-4">12 Marina Drive, Kochi<br/>Kerala, India 682001</p>
          <div className="w-full h-32 rounded-lg bg-slate-800/50 flex items-center justify-center overflow-hidden">
            <img className="w-full h-full object-cover opacity-50" alt="Map of Kochi city center" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrJNywHlYVUmrGchKUfRHHRgFpMy66iAxB2tP4OhU74iyHEVsqqj1e7QfRl5OkmM9Lj36cUMB_jiPxLr4CwHaO0LTNBXRUpHEYpQTIB9XX0hMaym5kQgf7_OKPmv8Cy8L46KK7AGfBw0cqSB1wvt-5zk_0Hu40SYhKHDTsCDJGDLbIH_wxNZ9QbfiAyZLwWX0pZPIkGz9kFe1jSyDT3LueuWubwkf4QdVY92tur1xKNXgl5sIie40r1uIzTiYGq0StqARqrKW_QE8"/>
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6">Opening Hours</h4>
          <ul className="text-slate-400 text-sm space-y-2">
            <li className="flex justify-between"><span>Mon - Thu</span> <span>12:00 - 23:00</span></li>
            <li className="flex justify-between"><span>Fri - Sat</span> <span>12:00 - 01:00</span></li>
            <li className="flex justify-between"><span>Sunday</span> <span>11:00 - 22:00</span></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6">Newsletter</h4>
          <p className="text-slate-400 text-sm mb-4">Join our inner circle for exclusive events.</p>
          <div className="flex flex-col gap-2">
            <input className="bg-primary/5 border border-primary/20 rounded-lg px-4 py-2 text-sm text-white focus:border-primary focus:outline-none" placeholder="Your email address" type="email"/>
            <button className="w-full py-2 bg-primary text-background-dark rounded-lg text-sm font-bold">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-primary/10 text-center text-slate-500 text-xs">
        © {new Date().getFullYear()} Ila Kochi Fine Dining. All rights reserved.
      </div>
    </footer>
  );
}
