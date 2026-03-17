import { Link } from 'react-router-dom';

export default function MobileBottomNav({ activeTab }) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-background-dark/10 dark:border-[#28392b] bg-background-light/95 dark:bg-[#1c271d]/95 backdrop-blur-md pb-safe md:hidden">
      <div className="flex px-2 pb-3 pt-2 justify-between max-w-md mx-auto">
        <Link 
          to="/" 
          className={`flex flex-1 flex-col items-center justify-end gap-1 group relative transition-colors ${activeTab === 'home' ? 'text-[#11d432]' : 'text-slate-500 dark:text-[#9db9a1] hover:text-[#11d432] dark:hover:text-[#11d432]'}`}
        >
          {activeTab === 'home' && <div className="absolute -top-2 w-8 h-1 bg-[#11d432] rounded-b-full shadow-[0_0_10px_rgba(17,212,50,0.5)]"></div>}
          <div className={`flex h-8 items-center justify-center ${activeTab !== 'home' ? 'group-hover:-translate-y-1 transition-transform duration-300' : ''}`}>
            <span className={`material-symbols-outlined text-[24px] ${activeTab === 'home' ? 'font-variation-settings-fill' : ''}`}>home</span>
          </div>
          <span className={`text-[10px] leading-normal tracking-wide uppercase ${activeTab === 'home' ? 'font-bold' : 'font-medium'}`}>Home</span>
        </Link>

        <Link 
          to="/menu" 
          className={`flex flex-1 flex-col items-center justify-end gap-1 group relative transition-colors ${activeTab === 'menu' ? 'text-[#11d432]' : 'text-slate-500 dark:text-[#9db9a1] hover:text-[#11d432] dark:hover:text-[#11d432]'}`}
        >
          {activeTab === 'menu' && <div className="absolute -top-2 w-8 h-1 bg-[#11d432] rounded-b-full shadow-[0_0_10px_rgba(17,212,50,0.5)]"></div>}
          <div className={`flex h-8 items-center justify-center ${activeTab !== 'menu' ? 'group-hover:-translate-y-1 transition-transform duration-300' : ''}`}>
            <span className={`material-symbols-outlined text-[24px] ${activeTab === 'menu' ? 'font-variation-settings-fill' : ''}`}>menu_book</span>
          </div>
          <span className={`text-[10px] leading-normal tracking-wide uppercase ${activeTab === 'menu' ? 'font-bold' : 'font-medium'}`}>Menu</span>
        </Link>
        
        <Link 
          to="/about" 
          className={`flex flex-1 flex-col items-center justify-end gap-1 group relative transition-colors ${activeTab === 'about' ? 'text-[#11d432]' : 'text-slate-500 dark:text-[#9db9a1] hover:text-[#11d432] dark:hover:text-[#11d432]'}`}
        >
          {activeTab === 'about' && <div className="absolute -top-2 w-8 h-1 bg-[#11d432] rounded-b-full shadow-[0_0_10px_rgba(17,212,50,0.5)]"></div>}
          <div className={`flex h-8 items-center justify-center ${activeTab !== 'about' ? 'group-hover:-translate-y-1 transition-transform duration-300' : ''}`}>
            <span className={`material-symbols-outlined text-[24px] ${activeTab === 'about' ? 'font-variation-settings-fill' : ''}`}>info</span>
          </div>
          <span className={`text-[10px] leading-normal tracking-wide uppercase ${activeTab === 'about' ? 'font-bold' : 'font-medium'}`}>About</span>
        </Link>

        <Link 
          to="/gallery" 
          className={`flex flex-1 flex-col items-center justify-end gap-1 group relative transition-colors ${activeTab === 'gallery' ? 'text-[#11d432]' : 'text-slate-500 dark:text-[#9db9a1] hover:text-[#11d432] dark:hover:text-[#11d432]'}`}
        >
          {activeTab === 'gallery' && <div className="absolute -top-2 w-8 h-1 bg-[#11d432] rounded-b-full shadow-[0_0_10px_rgba(17,212,50,0.5)]"></div>}
          <div className={`flex h-8 items-center justify-center ${activeTab !== 'gallery' ? 'group-hover:-translate-y-1 transition-transform duration-300' : ''}`}>
            <span className={`material-symbols-outlined text-[24px] ${activeTab === 'gallery' ? 'font-variation-settings-fill' : ''}`}>photo_library</span>
          </div>
          <span className={`text-[10px] leading-normal tracking-wide uppercase ${activeTab === 'gallery' ? 'font-bold' : 'font-medium'}`}>Gallery</span>
        </Link>

        <Link 
          to="/contact" 
          className={`flex flex-1 flex-col items-center justify-end gap-1 group relative transition-colors ${activeTab === 'contact' ? 'text-[#11d432]' : 'text-slate-500 dark:text-[#9db9a1] hover:text-[#11d432] dark:hover:text-[#11d432]'}`}
        >
          {activeTab === 'contact' && <div className="absolute -top-2 w-8 h-1 bg-[#11d432] rounded-b-full shadow-[0_0_10px_rgba(17,212,50,0.5)]"></div>}
          <div className={`flex h-8 items-center justify-center ${activeTab !== 'contact' ? 'group-hover:-translate-y-1 transition-transform duration-300' : ''}`}>
            <span className={`material-symbols-outlined text-[24px] ${activeTab === 'contact' ? 'font-variation-settings-fill' : ''}`}>mail</span>
          </div>
          <span className={`text-[10px] leading-normal tracking-wide uppercase ${activeTab === 'contact' ? 'font-bold' : 'font-medium'}`}>Contact</span>
        </Link>
      </div>
      <div className="h-1 w-full"></div>
    </nav>
  );
}
