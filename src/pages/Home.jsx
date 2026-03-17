import { useState } from 'react';
import { Link } from 'react-router-dom';
import MobileBottomNav from '../components/MobileBottomNav';

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Leaf Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-20 leaf-pattern hidden md:block"></div>

      {/* --- DESKTOP VIEW --- */}
      <div className="hidden md:flex flex-1 flex-col relative">

        {/* Hero Section */}
        <main className="flex-grow flex flex-col items-center justify-center px-6 py-12 lg:py-20 relative">
          <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="order-2 lg:order-1 text-center lg:text-left space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                The Emerald of Kochi
              </div>
              <h2 className="text-5xl lg:text-7xl font-black leading-tight text-slate-100">
                Taste the Soul of <span className="text-primary italic">Kerala</span>
              </h2>
              <p className="text-slate-400 text-lg lg:text-xl max-w-xl leading-relaxed font-light">
                Experience a symphony of indigenous spices and heritage recipes served in a deep forest sanctuary. Where luxury meets nature's finest.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <Link to="/menu" className="bg-primary text-background-dark px-10 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-primary/20 transition-all flex items-center justify-center gap-2">
                  Explore the Menu
                  <span className="material-symbols-outlined">restaurant_menu</span>
                </Link>
                <Link to="/about" className="border border-slate-700 hover:border-primary px-10 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 group">
                  Our Heritage
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
              </div>
            </div>
            {/* Hero Image (Circular Kerala Dish) */}
            <div className="order-1 lg:order-2 flex justify-center relative">
              <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl transform scale-110"></div>
              <div className="relative group">
                <div className="absolute -inset-4 border border-primary/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
                <div className="w-72 h-72 lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden border-8 border-forest-accent shadow-2xl relative">
                  <img alt="Signature Kerala Meen Pollichathu fish dish" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_poZQQ31QivpALxwPPi8RPS4Egp44v4kjiVzLf_Bs6bmzC0Pxp4bfaba1B9Vfvwt00Uky6dB311wdLf9hiFTor-fEr6X0JcupvhQ4LVN4OyktCI4LAA94mNTQcZkDdRpCFEs4wVy2E_PNlhd5Z1ofr1SSYmoY9NsqFQuA2Xi4QVObZenh_zBbOlFTfeAqHZbjl6ms9hkgZL2giXI0sAkctd-x8nXbSSVAdA5-bjwePL3jdz1s5XajhcveppABEsE1yzd742KWYlE"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-background-dark/40 to-transparent"></div>
                </div>
                {/* Floating Badge */}
                <div className="absolute bottom-10 -left-6 bg-forest-accent p-4 rounded-2xl shadow-2xl border border-primary/20 backdrop-blur-sm hidden lg:block">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/20 p-2 rounded-lg">
                      <span className="material-symbols-outlined text-primary">workspace_premium</span>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 uppercase font-bold tracking-tighter">Award Winning</p>
                      <p className="text-sm font-bold text-slate-100">Best Fine Dining 2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Features Section */}
        <section className="py-20 px-6 bg-forest-accent/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="p-8 rounded-3xl bg-background-dark/50 border border-primary/5 hover:border-primary/20 transition-all group">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <span className="material-symbols-outlined text-primary group-hover:text-background-dark text-3xl">potted_plant</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary">Farm to Foliage</h3>
                <p className="text-slate-400 leading-relaxed">Sourcing every spice and produce directly from the lush plantations of Wayanad and Idukki.</p>
              </div>
              {/* Feature 2 */}
              <div className="p-8 rounded-3xl bg-background-dark/50 border border-primary/5 hover:border-primary/20 transition-all group">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <span className="material-symbols-outlined text-primary group-hover:text-background-dark text-3xl">skillet</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary">Ancestral Flavors</h3>
                <p className="text-slate-400 leading-relaxed">Our master chefs recreate thousand-year-old recipes with modern culinary precision.</p>
              </div>
              {/* Feature 3 */}
              <div className="p-8 rounded-3xl bg-background-dark/50 border border-primary/5 hover:border-primary/20 transition-all group">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <span className="material-symbols-outlined text-primary group-hover:text-background-dark text-3xl">spa</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary">Sanctuary Ambiance</h3>
                <p className="text-slate-400 leading-relaxed">Dine amidst tropical flora and soothing water features in our architectural masterpiece.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Signature Categories Grid */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="space-y-4">
              <h2 className="text-4xl font-black">Our <span className="text-primary">Curations</span></h2>
              <p className="text-slate-400 max-w-md">Discover the distinct textures and vibrant colors of the Malabar coast across our curated courses.</p>
            </div>
            <div className="flex gap-2">
              <button className="p-3 border border-slate-700 rounded-full hover:border-primary text-slate-400 hover:text-primary transition-all">
                <span className="material-symbols-outlined">arrow_back</span>
              </button>
              <button className="p-3 bg-primary rounded-full text-background-dark hover:scale-105 transition-all">
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Category 1 */}
            <div className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer">
              <img alt="Traditional Kerala Starters" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBk7ytpTK-J_g7bOfKOqysiwPwYSGadr5aUj5Vn699Rqzgk183aA1iQLtk6W7Ox1j3hhhiqoARxYssYEzv2OMXqk2XQW_JsfWDsvby6KPknibZ6ktgIKhN8Ucv9VlMq64_eA6tQeYfj61Dt52bNebNfrA-vNxdUD4k26fLb98F6CFGhvDbtQpW_cGXdbph4u6VovpYpiDHyyGHHQzxPhhhygD6T_euhFdOrMMWB_6czOnFriHILsJZTNvyPb4s7YUr8UbR9exKdzLU"/>
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-background-dark/20 to-transparent"></div>
              <div className="absolute bottom-0 p-8 w-full translate-y-2 group-hover:translate-y-0 transition-transform">
                <p className="text-primary font-bold text-sm mb-2 opacity-0 group-hover:opacity-100 transition-opacity">Spiced &amp; Fresh</p>
                <h4 className="text-2xl font-bold text-white mb-4">Appetizers</h4>
                <div className="h-1 w-0 bg-primary group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>
            {/* Category 2 */}
            <div className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer">
              <img alt="Kerala Curry Main Course" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEyb65rHkbWfBUr3cvm-LCAE_rJtxZFmT1plARUgRoMrhMzMXFpJO5sVQLNse9d3_FXZ_tlXwyjAvU1kIdty1pKNJ2kmCQ9h2-oKtsU5aXbW2lWZM_4_EPDYEA4GwQUILT_FLK9tp413hKx_DuFpkCX8KHNQcGi7O5VkabeytHuDcvYcqj2IuaBFW88698dJOeSZdow1fLBwRYDLm5nk6GMWVeH1VgavURjBSPrRwzttTB_m2GqevDF7dchnvwIf0XCbMDIxaCf3w"/>
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-background-dark/20 to-transparent"></div>
              <div className="absolute bottom-0 p-8 w-full translate-y-2 group-hover:translate-y-0 transition-transform">
                <p className="text-primary font-bold text-sm mb-2 opacity-0 group-hover:opacity-100 transition-opacity">Hearty &amp; Rich</p>
                <h4 className="text-2xl font-bold text-white mb-4">Main Course</h4>
                <div className="h-1 w-0 bg-primary group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>
            {/* Category 3 */}
            <div className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer">
              <img alt="Fresh Seafood Specialty" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAy7IoMTRj84vh3FSQA8I5dn01cyIQozGyITJkKOGor17eNhA14laNvwYS0P4tsz5cOocyZvGI-IeCdUFVH38myws-U-hZizF7nEvNRhDGnmUlAQnEolwLgIVjfF2q7x4HGZnclin7Lv8Lds2oZ4Wv659pfNPhNtbKtHAuYiiaES6oUOet9IP_Ng1gjMtdbRKvFy9AoU5hDt4MAkcjeWPjg06Q7XDECVkcysj3fPd7asXI9x77iKePVSFr0dIyXk20zr3BC6CZGA1I"/>
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-background-dark/20 to-transparent"></div>
              <div className="absolute bottom-0 p-8 w-full translate-y-2 group-hover:translate-y-0 transition-transform">
                <p className="text-primary font-bold text-sm mb-2 opacity-0 group-hover:opacity-100 transition-opacity">Ocean's Bounty</p>
                <h4 className="text-2xl font-bold text-white mb-4">Seafood</h4>
                <div className="h-1 w-0 bg-primary group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>
            {/* Category 4 */}
            <div className="group relative h-[400px] rounded-3xl overflow-hidden cursor-pointer">
              <img alt="Exotic Kerala Desserts" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0iwD_1SR2rnli3mHLMwKb1gOv7y3owN1ttln6JS6cgbeIQMDkcTerds5-6YAkg6ygoXP3cJanqUgNq4wKOc92ahECWtp948xjMyQ86YUbAiSBVekZQo1k9skOCxkOkKKUSyrJtvtSWcEdMZZXM8Me1utRi9hIn7-PdhuTGQtBJO60eL4UljVyTiTrUpDYD9SB-2E8zAZKlh-Z81iwmOW3jLTh3EajMbCT8FCKAnCyx7aNpvwpQHEcOtSA2_39xwGE9Sd4-LJA3Ww"/>
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-background-dark/20 to-transparent"></div>
              <div className="absolute bottom-0 p-8 w-full translate-y-2 group-hover:translate-y-0 transition-transform">
                <p className="text-primary font-bold text-sm mb-2 opacity-0 group-hover:opacity-100 transition-opacity">Sweet Endings</p>
                <h4 className="text-2xl font-bold text-white mb-4">Desserts</h4>
                <div className="h-1 w-0 bg-primary group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* --- MOBILE VIEW (Lush Green) --- */}
      <div className="flex md:hidden relative flex-1 flex-col overflow-hidden w-full bg-[#102213] text-[#f0f2e6]">
        {/* Header */}
        <header className="flex items-center justify-between px-6 py-5 z-50 sticky top-0 bg-[#102213]/95 backdrop-blur-sm border-b border-white/5">
          <button 
            className="text-[#f0f2e6]/80 hover:text-[#f2cc0d] transition-colors p-2 -ml-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="material-symbols-outlined text-[28px]">{isMobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#f2cc0d] text-[24px]">eco</span>
            <h1 className="text-[#f0f2e6] text-xl font-bold tracking-wide font-serif">ILA KOCHI</h1>
          </div>
          <button className="text-[#f0f2e6]/80 hover:text-[#f2cc0d] transition-colors">
            <span className="material-symbols-outlined text-[28px]">search</span>
          </button>
        </header>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute top-[80px] left-0 w-full bg-[#102213] border-b border-[#f2cc0d]/20 shadow-2xl z-40 flex flex-col py-6 px-10 gap-6 animate-fade-in-down">
            <Link onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold tracking-widest uppercase hover:text-[#f2cc0d] transition-colors" to="/">Home</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold tracking-widest uppercase hover:text-[#f2cc0d] transition-colors" to="/menu">Menu</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold tracking-widest uppercase hover:text-[#f2cc0d] transition-colors" to="/about">Our Story</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold tracking-widest uppercase hover:text-[#f2cc0d] transition-colors" to="/gallery">Gallery</Link>
            <Link onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold tracking-widest uppercase hover:text-[#f2cc0d] transition-colors" to="/contact">Contact</Link>
          </div>
        )}

        {/* Main Content Scroll Area */}
        <main className="flex-1 overflow-y-auto scrollbar-hide pb-24 relative bg-[#102213]/50">
          
          {/* Hero Section with Leaf Texture Background */}
          <div className="relative w-full flex flex-col items-center pt-8 pb-12 px-6">
            <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://placeholder.pics/svg/400')] bg-repeat bg-[length:200px]"></div>
            
            {/* Logo Container */}
            <div className="relative z-10 mb-8 mt-4 group">
              <div className="absolute inset-0 bg-[#f2cc0d]/20 rounded-full blur-xl transform scale-110 shadow-lg"></div>
              <div className="w-64 h-64 rounded-full border-4 border-[#f2cc0d]/30 overflow-hidden relative shadow-2xl shadow-black/50 bg-[#102213] flex items-center justify-center p-8">
                <img alt="Ila Kochi Logo" className="w-full h-full object-contain" src="/logo.png"/>
              </div>
            </div>
            
            {/* Text Content */}
            <div className="text-center z-10 space-y-4 max-w-xs mx-auto">
              <h2 className="text-[#f0f2e6] text-4xl font-serif font-medium leading-tight">
                  A Heritage <br/> <span className="italic text-[#f2cc0d]/90">of Spice</span>
              </h2>
              <p className="text-[#f0f2e6]/70 text-sm leading-relaxed px-2">
                  Experience the soul of Kerala's coastal cuisine, crafted with tradition and nature's finest ingredients amidst the lush greens.
              </p>
            </div>
            
          </div>

          {/* Featured Categories */}
          <div className="pl-6 mb-8 relative z-10">
            <h3 className="text-[#f0f2e6]/90 text-lg font-medium mb-4 px-1">Discover Flavors</h3>
            <div className="flex gap-4 overflow-x-auto scrollbar-hide pr-6 pb-4">
              <div className="flex-shrink-0 w-36 h-48 rounded-2xl overflow-hidden relative group cursor-pointer">
                <img alt="Seafood" className="absolute inset-0 w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYqS3WLEDNbnCIBNPc2u7E8s4N_4q8SQeatIc80BOWQnXJQo0OR-Nq7YX71PFy_zrtBRD7hKmkT2VNjnuCR6pKc4d6XDNx8T_U8QWDoOEp8Oqk0Zl56-P7W7htDbVlzEz6qbaFYLba9oBuYLTAzgcOHOCtTpj8HgxeqmnZRw_UV0EN7L8vWpEkb--TbZrnE-nDKFIGTxU4OsJ4JBEeHgqRv3e_Dxo5K2hEuoOTIndScoL3bcogE8NMQXEH9iJTdviE4NJcjeGaZhs"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <span className="absolute bottom-3 left-3 text-white font-medium">Coastal <br/>Catch</span>
              </div>
              <div className="flex-shrink-0 w-36 h-48 rounded-2xl overflow-hidden relative group cursor-pointer">
                <img alt="Vegetarian" className="absolute inset-0 w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCO5jSZNKJwl9aeKQMsD_T2rhncPbOID52dM8du1whOVXUd5SxVl9bQ_xppiW3ypZur50z_ss7QfjPZiM9-WWGIksrAMG7ujHkSBSTA5w-5ZWU17ST_jaM4lk1ZEjc7gB8-zKcDu0tRSAYBaExi0HtsIQjjfMz0axijCfV-p7PqFho7t_dqobnFhSRQ37eofnVXflAooaBBNzoSEeloD9uRpJMLBnWvtfzJOSNZWBwiUZRZ509Noe3SHmICHUNw__k6B4TRNMk8gRs"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <span className="absolute bottom-3 left-3 text-white font-medium">Garden <br/>Fresh</span>
              </div>
              <div className="flex-shrink-0 w-36 h-48 rounded-2xl overflow-hidden relative group cursor-pointer">
                <img alt="Desserts" className="absolute inset-0 w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4wNxz6gYgZ0EAmUNB20CdZchR1_6G_5VBAn_S6SYBEg7STSZ-ona563ZkBAmhcCrEDzHaV012bgdDP6LRlVHOpHkNok-GId68Bhxsdylh7vdatTKcyKLTn8aPryF8T3ozBgCtp0cyHwAoDCsiF_hzqjttmJvCHi8lEWTTFefzP4TGkA8L5FQvec2O8VVJ55o2uy1Rw4eVZ8yFhYoJSzi2wXpuMWLuzQ_WYDHY98zvxUvtIIRSdxKyskH83sebu-MVaejuv8bAq08"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <span className="absolute bottom-3 left-3 text-white font-medium">Sweet <br/>Endings</span>
              </div>
            </div>
          </div>

          {/* Why Ila Kochi - Feature Highlights */}
          <div className="px-6 mb-10 relative z-10">
            <h3 className="text-[#f2cc0d] text-xs font-bold uppercase tracking-[0.2em] mb-6">Why Ila Kochi</h3>
            <div className="grid grid-cols-3 gap-3">
              <div className="flex flex-col items-center text-center p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="w-10 h-10 rounded-full bg-[#f2cc0d]/10 flex items-center justify-center mb-3">
                  <span className="material-symbols-outlined text-[#f2cc0d] text-[20px]">eco</span>
                </div>
                <p className="text-[#f0f2e6] text-[11px] font-bold leading-tight">Farm to Table</p>
                <p className="text-[#f0f2e6]/40 text-[9px] mt-1">Local organic produce</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="w-10 h-10 rounded-full bg-[#f2cc0d]/10 flex items-center justify-center mb-3">
                  <span className="material-symbols-outlined text-[#f2cc0d] text-[20px]">workspace_premium</span>
                </div>
                <p className="text-[#f0f2e6] text-[11px] font-bold leading-tight">Award Winner</p>
                <p className="text-[#f0f2e6]/40 text-[9px] mt-1">Best dining 2024</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="w-10 h-10 rounded-full bg-[#f2cc0d]/10 flex items-center justify-center mb-3">
                  <span className="material-symbols-outlined text-[#f2cc0d] text-[20px]">spa</span>
                </div>
                <p className="text-[#f0f2e6] text-[11px] font-bold leading-tight">Lush Ambiance</p>
                <p className="text-[#f0f2e6]/40 text-[9px] mt-1">Tropical sanctuary</p>
              </div>
            </div>
          </div>

          {/* Signature Dishes */}
          <div className="mb-10 relative z-10">
            <div className="flex justify-between items-center px-6 mb-5">
              <h3 className="text-[#f0f2e6] text-lg font-bold">Chef's Signatures</h3>
              <Link to="/menu" className="text-[#f2cc0d] text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                Full Menu <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </Link>
            </div>
            <div className="flex gap-4 overflow-x-auto scrollbar-hide pl-6 pr-6 pb-4">
              {/* Dish 1 */}
              <div className="flex-shrink-0 w-56 bg-white/5 border border-white/5 rounded-2xl overflow-hidden">
                <div className="w-full h-36 overflow-hidden">
                  <img alt="Karimeen Pollichathu" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmVDQE_nXjnKlvda3qRwUtciJ1GfcXVzQ0rNKa1YJM-uO_JAH9Df_puAKFyA_1FPIOS2GwkvWKYU7ecdRR2q_vrfzPB_L5b6Bh-Z0av4J6WTXdaetDwLnxXbaWhjFYE1zRErgT_cfxTYalmA_Zmid6no08AuCbTTkUPmO73kqaCDOM5MomdlYXfh-j7JIkNcJYVG4xF5s26Jy8rrdqZb_JJFCvvhG9hE_Ws1PeO5OvvLQEMlV7OfCftWeSijVUJXRu9fsplw6bWVQ"/>
                </div>
                <div className="p-4">
                  <h4 className="text-[#f0f2e6] font-bold text-sm">Karimeen Pollichathu</h4>
                  <p className="text-[#f0f2e6]/50 text-xs mt-1 line-clamp-2">Pearl spot in banana leaf with traditional masala</p>
                  <div className="flex justify-between items-center mt-3">
                    <span className="text-[#f2cc0d] font-bold text-sm">₹1,250</span>
                    <span className="material-symbols-outlined text-[#f2cc0d]/60 text-[18px]">add_circle</span>
                  </div>
                </div>
              </div>
              {/* Dish 2 */}
              <div className="flex-shrink-0 w-56 bg-white/5 border border-white/5 rounded-2xl overflow-hidden">
                <div className="w-full h-36 overflow-hidden">
                  <img alt="Aleppey Prawn Curry" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQ-ebGLiGO0MOb5sIzRdJk49k45jlyq8pKM11FskscTeEkB-h35UDkf-ZXeDXYCcEfslJ24duechMLpqo-PFoG24Q97yNg8_0z4iIxgymHH0-J-QOLzvZRM4EC9SnTLRkAqVz_jZWO_xMr41Op2etKUIiKJ6LJgIGhi-lBAcRty_Wys6Maj6jZrpLlv7XTgqOYmPIVmtyVlfxBbkvaYAj1F9VuDRJ4ZeU3teVmFO2QcSmmQV82aFTEs5Pwy0HGodBtebE-l7yOiMc"/>
                </div>
                <div className="p-4">
                  <h4 className="text-[#f0f2e6] font-bold text-sm">Aleppey Prawn Curry</h4>
                  <p className="text-[#f0f2e6]/50 text-xs mt-1 line-clamp-2">Succulent prawns in coconut & raw mango reduction</p>
                  <div className="flex justify-between items-center mt-3">
                    <span className="text-[#f2cc0d] font-bold text-sm">₹950</span>
                    <span className="material-symbols-outlined text-[#f2cc0d]/60 text-[18px]">add_circle</span>
                  </div>
                </div>
              </div>
              {/* Dish 3 */}
              <div className="flex-shrink-0 w-56 bg-white/5 border border-white/5 rounded-2xl overflow-hidden">
                <div className="w-full h-36 overflow-hidden">
                  <img alt="Nadan Beef Roast" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuClcCMnAa4_jDLc0I8fnLgU9kHJqvIZ473prVcliWDu2Q2n9XQsiiIWGhYUmt4YuftZKHHDgjM7jShnd1hZIjHgMV1kLb2IpGFSMP_wT5y36Ik_JNJOIaEf7b4SC4ZOPqwnH0fO1wFwiWoEOM59MCaaQJaQdXfmi8E84pEoXH-53ejWpcjhdMb0zGkR4UYJuqBujpR-6KS7mdkmewvt-aJvYPILuCwOfDj2La82sME8tWeOm7vN6FHBr2kZcjC0yqJjOt2hqTPCEkk"/>
                </div>
                <div className="p-4">
                  <h4 className="text-[#f0f2e6] font-bold text-sm">Nadan Beef Roast</h4>
                  <p className="text-[#f0f2e6]/50 text-xs mt-1 line-clamp-2">Slow-fried with coconut slivers & Malabar spices</p>
                  <div className="flex justify-between items-center mt-3">
                    <span className="text-[#f2cc0d] font-bold text-sm">₹850</span>
                    <span className="material-symbols-outlined text-[#f2cc0d]/60 text-[18px]">add_circle</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Today's Special */}
          <div className="px-6 mb-10 relative z-10">
            <h3 className="text-[#f2cc0d] text-xs font-bold uppercase tracking-[0.2em] mb-4">Today's Special</h3>
            <div className="bg-[#102213] border border-[#f2cc0d]/10 rounded-2xl p-5 flex items-center gap-4 shadow-lg">
              <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                <img alt="Meen Pollichathu" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAv4Rlay-wAZluLz0yPV6VHut-xWWO-pJahuBdARWEw3XQ08k4Fdu5sqgDwRoqYGIbgfSB9-ax3RNCVXq4QSEGRC0fSYIAJ9cnKmR5jGbG2vtLYqcQ0YRVCuL1b4ArOue-Mrw5zKLHIvkiDjPCBV5Ae6CBtbSznJgRa-AWmQtjajhgYExbJIaZWNvLZKKlimw9G1V3ZQLPcZRpdm2mDGGFcRj46svgLVGwmafxC9GpJuc_F6ZyeeRKNIS3q6mJw694nG0qZFXkZiaI"/>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h4 className="text-[#f0f2e6] font-bold text-lg">Meen Pollichathu</h4>
                  <span className="text-[#f2cc0d] font-bold text-sm">₹540</span>
                </div>
                <p className="text-[#f0f2e6]/50 text-xs mt-1 line-clamp-2">Pearl spot fish marinated in spicy masala and grilled in banana leaf.</p>
                <button className="mt-3 text-[#f2cc0d] text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                    Add to Order <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>

          {/* Customer Testimonial */}
          <div className="px-6 mb-10 relative z-10">
            <div className="bg-gradient-to-br from-[#f2cc0d]/5 to-transparent border border-[#f2cc0d]/10 rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute top-3 right-4 text-[#f2cc0d]/10 text-6xl font-serif leading-none">"</div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#f2cc0d]/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#f2cc0d] text-[18px]">format_quote</span>
                </div>
                <div>
                  <p className="text-[#f0f2e6] text-sm font-bold">Priya Menon</p>
                  <div className="flex gap-0.5 mt-0.5">
                    <span className="material-symbols-outlined text-[#f2cc0d] text-[12px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                    <span className="material-symbols-outlined text-[#f2cc0d] text-[12px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                    <span className="material-symbols-outlined text-[#f2cc0d] text-[12px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                    <span className="material-symbols-outlined text-[#f2cc0d] text-[12px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                    <span className="material-symbols-outlined text-[#f2cc0d] text-[12px]" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                  </div>
                </div>
              </div>
              <p className="text-[#f0f2e6]/80 text-sm leading-relaxed italic">
                "An absolutely mesmerizing experience. The flavors transported me straight to the backwaters of Kerala. The Karimeen was perfection on a plate!"
              </p>
            </div>
          </div>

          {/* Ambiance Gallery */}
          <div className="mb-10 relative z-10">
            <div className="flex justify-between items-center px-6 mb-5">
              <h3 className="text-[#f0f2e6] text-lg font-bold">Our Ambiance</h3>
              <Link to="/gallery" className="text-[#f2cc0d] text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                Gallery <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </Link>
            </div>
            <div className="px-6 grid grid-cols-2 gap-3">
              <div className="aspect-[3/4] rounded-xl overflow-hidden relative">
                <img alt="Interior dining" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZWLWcnGspF8BIckfaPzJ_iV2QZJFvDyFy16G4JhveAWvL1pZMkalswmIhSnH7H24JD7wpcapbPiP9GhMK11EGmqpYqeAvKRnQ757NvZ60LXWD2AO-rmZ2_dMN6tO7QTnh835_yof6cKAHj_fh1KtePxM_VdTg-hryHFHybGKae_zSDRfoBLH9p001kWT_Hs1Ij6I8H_T9LaIPIG05pFVsIw72ySxluoVHb5D_Az7Aor5MuEthFwTieNc8lh1XXZlxs_soXvR6iUk"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <span className="absolute bottom-3 left-3 text-white text-xs font-bold uppercase tracking-wider">The Veranda</span>
              </div>
              <div className="flex flex-col gap-3">
                <div className="aspect-square rounded-xl overflow-hidden relative">
                  <img alt="Outdoor seating" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcct9nb9Nss5mmsivaWSFib_CqIxCbflUamDAosJPM8jJFr8q4W9tsjCpsdGxpQ2hB3_DPKhLF8FEheJFa_npFAK-EsWMMzGf_1M3Asiq_M1iXqDU0dpkrn2YzqQk2loCXDlDI1L5fD10sC61epddh--Na-TCqCuhnOwZJnIH_obuJoOhi-TT2igXaMZO_2rpRVeVVvfnY85YSZXuYdUaz3I2PNnccHrnfUoC06FlL-wf-nop9kraxde3JMzowzL4z6vnEPE17blU"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <span className="absolute bottom-2 left-2 text-white text-[10px] font-bold uppercase tracking-wider">Garden</span>
                </div>
                <div className="aspect-square rounded-xl overflow-hidden relative">
                  <img alt="Food presentation" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6o8MiTT1zXZoJ6RqgU9tmDIrUwgl3PBJkmRXoZdNqPAopq5sK6blOyi9jaZvhfBUfZGT_NJd8J6VYHW02C6TIiPqH-4pw4rU74G1CCg1fdip-z4_oLNEaT8HL_4BZAcNLZ5tZyakTfnU9dmf7f4G3Qzqe6DUCGkBAAe5TdK3vTrowVBuhVUDEQTZgmuuUraege4THuI0oEvhmgQOC7XfyhJdR7_mUyXcZ69Yk3BOooWxNsP1KwKeOYJYImFTL4mNcIqqUutiQhyA"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <span className="absolute bottom-2 left-2 text-white text-[10px] font-bold uppercase tracking-wider">Plating</span>
                </div>
              </div>
            </div>
          </div>

          {/* Location & Hours */}
          <div className="px-6 mb-10 relative z-10">
            <div className="bg-white/5 border border-white/5 rounded-2xl overflow-hidden">
              <div className="w-full h-40 relative overflow-hidden">
                <img 
                  alt="Fort Kochi location" 
                  className="w-full h-full object-cover opacity-70" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9EkbwhrW6U5JixUDOdDWL4wvOBDKAji0KX34y6kiVL7Tda5RFQ04yloIG4SoPREHrQdV4PJIqz_fPyKORZLyrotRm6_3iqAM6quCuucJlfa2q6uCnzMYuL5RAGz1oJ-QI128ERnWRcNpRpbaF2bHgcgcyuOUlU6_2vdYj0LSVsuoCwZLMjtTDfrbniQCf3GtrmaYmUq6iRXH6LE8vhha3wJZpN_jrR3PRpiE9cSFwp3j0X7mZ9Z_ZpZQYbSN7sT_ZBnUudlULCpo"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102213] to-transparent"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="material-symbols-outlined text-[#f2cc0d] text-4xl animate-bounce">location_on</span>
                </div>
              </div>
              <div className="p-5 space-y-4">
                <div>
                  <h4 className="text-[#f0f2e6] font-bold text-base">Fort Kochi, Kerala</h4>
                  <p className="text-[#f0f2e6]/50 text-xs mt-1">123 Coastal Road, Heritage Block, Cochin 682001</p>
                </div>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#f2cc0d] text-[16px]">schedule</span>
                    <div>
                      <p className="text-[#f0f2e6]/80 text-[11px]">Lunch: 12:00 - 15:30</p>
                      <p className="text-[#f0f2e6]/80 text-[11px]">Dinner: 19:00 - 23:00</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <a href="tel:+914842304500" className="flex-1 bg-white/5 border border-white/10 rounded-xl py-3 flex items-center justify-center gap-2 text-[#f0f2e6] text-xs font-bold">
                    <span className="material-symbols-outlined text-[16px]">call</span>
                    Call Us
                  </a>
                  <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#25D366]/10 border border-[#25D366]/20 rounded-xl py-3 flex items-center justify-center gap-2 text-[#25D366] text-xs font-bold">
                    <span className="material-symbols-outlined text-[16px]">chat</span>
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Quote */}
          <div className="px-8 pb-6 text-center relative z-10">
            <div className="w-8 h-[1px] bg-[#f2cc0d]/30 mx-auto mb-4"></div>
            <p className="text-[#f2cc0d]/60 text-xs italic font-serif">Where the backwaters meet the plate.</p>
            <p className="text-[#f0f2e6]/30 text-[10px] mt-3 uppercase tracking-widest">© 2024 Ila Kochi</p>
          </div>

        </main>

        <MobileBottomNav activeTab="home" />
      </div>
    </>
  );
}
