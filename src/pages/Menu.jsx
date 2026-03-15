import React from 'react';
import { Link } from 'react-router-dom';
import MobileBottomNav from '../components/MobileBottomNav';

export default function Menu() {
  return (
    <>
      {/* --- DESKTOP VIEW --- */}
      <div className="hidden md:block flex-1 max-w-7xl mx-auto w-full px-6 py-12">
      {/* Hero Section */}
      <section className="mb-16 relative rounded-xl overflow-hidden min-h-[400px] flex flex-col justify-end p-12 group">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
          data-alt="Close up of gourmet Indian plating with herbs" 
          style={{ backgroundImage: 'linear-gradient(to top, rgba(10, 26, 17, 0.95), rgba(10, 26, 17, 0.2)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBtTFR9M9s4z5egoKA7enO9DrZqU7PDNiUlBMczxhtg7jKiq2y68EJV5EI2U07s5xs69f0m4g91qTGCi6kJXTHazel9TMQmreT7w4T6zUIpaGXIfYTVrmLCN1zRMOeNbLjjJm3RZzNee5pgqt1OX9IJ2-Q-yFQjDTeR8320YG-UscP70VRMJRXvmAEesxggr3ET3u8rxAnAggxqmfyyxLg8YOtoT3amClHkqA_40AKA7LU_K-V_a2bphxvRhMUGj-EAw2qCKxlxu6w")' }}
        ></div>
        <div className="relative z-10 max-w-2xl">
          <span className="text-primary font-serif italic text-xl mb-4 block">The Art of Dining</span>
          <h1 className="text-white text-6xl font-black leading-tight mb-4 font-serif">A Culinary Journey</h1>
          <p className="text-slate-300 text-lg leading-relaxed mb-8">
            Experience the sophisticated flavors of Kochi, where heritage recipes meet contemporary culinary art amidst a lush sanctuary of green and gold.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 botanical-accent opacity-30 pointer-events-none"></div>
      </section>

      {/* Menu Navigation Tabs */}
      <nav className="flex justify-center border-b border-primary/20 mb-12 sticky top-[80px] bg-background-dark z-40">
        <div className="flex gap-12 overflow-x-auto no-scrollbar py-2">
          <a className="flex flex-col items-center gap-2 group" href="#appetizers">
            <span className="text-primary text-sm font-bold tracking-widest uppercase">Appetizers</span>
            <div className="h-1 w-full bg-primary rounded-full"></div>
          </a>
          <a className="flex flex-col items-center gap-2 group opacity-50 hover:opacity-100 transition-opacity" href="#main">
            <span className="text-slate-300 text-sm font-bold tracking-widest uppercase group-hover:text-primary">Main Dishes</span>
            <div className="h-1 w-0 group-hover:w-full bg-primary rounded-full transition-all"></div>
          </a>
          <a className="flex flex-col items-center gap-2 group opacity-50 hover:opacity-100 transition-opacity" href="#seafood">
            <span className="text-slate-300 text-sm font-bold tracking-widest uppercase group-hover:text-primary">Seafood</span>
            <div className="h-1 w-0 group-hover:w-full bg-primary rounded-full transition-all"></div>
          </a>
          <a className="flex flex-col items-center gap-2 group opacity-50 hover:opacity-100 transition-opacity" href="#desserts">
            <span className="text-slate-300 text-sm font-bold tracking-widest uppercase group-hover:text-primary">Desserts</span>
            <div className="h-1 w-0 group-hover:w-full bg-primary rounded-full transition-all"></div>
          </a>
        </div>
      </nav>

      {/* Menu Sections Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 relative">
        {/* Appetizers Column */}
        <div className="space-y-10" id="appetizers">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-primary text-3xl font-serif italic">Appetizers</h2>
            <div className="h-px flex-1 bg-primary/20"></div>
          </div>
          
          <div className="group flex gap-4 border-b border-primary/10 pb-6 transition-all hover:translate-x-1">
            <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border border-primary/30">
              <img className="w-full h-full object-cover" alt="Crispy golden samosas on a platter" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBwdPTXmwIpt8ZN5O-fg7dzvZMQquOdO1MbXPBvsnbpyB4p11iCd0vJ53vZDY15dyk9tr3tloJ8O0godxqOCd5Lw4UN4mjL0Icq5Xsj4ir5CFLw6VWBJPRRzq0_2fcylF4Oktu7-1z2PN-RoGFsNESBhJWsy4ck1j8Y4G5ZUTlGypr-Ok_pqoUrcDX4CXEvVfOibbmCn_7svb8Sk_eh7SkLo-_jVvGnHjH_UfJOj4feMYVb2y0pPkBloF_OuZwOVSmz2Nlo4u3auE"/>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-lg font-bold text-slate-100 group-hover:text-primary transition-colors">Truffle Malabar Samosas</h3>
                <span className="text-primary font-serif">₹450</span>
              </div>
              <p className="text-slate-400 text-sm leading-snug">Hand-folded pastry, woodland mushrooms, black truffle essence, mint foam.</p>
            </div>
          </div>
          
          <div className="group flex gap-4 border-b border-primary/10 pb-6 transition-all hover:translate-x-1">
            <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border border-primary/30">
              <img className="w-full h-full object-cover" alt="Paneer tikka with green chutney" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCuTgSnti8pUreejB-nvDULdOIA1VMOIG3epWMzXkytTdKHdpaICrkTjgzjn6HKwLUz7vyGuNqnbfw3cF_ZqeJF-uKQRDT9XVm7B0Cz9EI7OB00MkbEbuZje7wgIQc4mqeoO-ptgo8wQUZVF9GnyZXx5wzRlfkMC9558E35AE823b_NZPLdX7i1dn0DOO6OYA9VLfa_4qEReQ82eS77J198nZJe-a3EOA6oeLBo-p2bMrtQ-th1B5qISeHwgLF0nOXGP7_ku06GWE"/>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-lg font-bold text-slate-100 group-hover:text-primary transition-colors">Paneer Mille-Feuille</h3>
                <span className="text-primary font-serif">₹525</span>
              </div>
              <p className="text-slate-400 text-sm leading-snug">Layered artisan cottage cheese, spiced apricot chutney, rose petal dust.</p>
            </div>
          </div>
          
          <div className="group flex gap-4 border-b border-primary/10 pb-6 transition-all hover:translate-x-1">
            <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border border-primary/30">
              <img className="w-full h-full object-cover" alt="Spicy grilled chicken wings" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhDj1_S5GvDFMq_9z7XmTUYJ_VsRNUVlZQtNVII5ZqKHb1y2_wfNhxb2AtIicV77QU6QaX2Cno32eni4WLqbpkrkT_ELbbm7nFDrHLAiWaDFnxMFuX0Dvb50OaLiVxPTOoQsPYqg-_wJJjgyBb3TCpp7pJM0LzW2bktesJVoSdcZHaVNh51H4yvG7P4dGbm_GmIbd9hgT6ai2U2xAsrDDoUQ4ILNAM_RLOk-We0H3HJ3esbEf-WGV23TbNUjMkqAQHLOOJPFOnbDk"/>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-lg font-bold text-slate-100 group-hover:text-primary transition-colors">Kochi Chicken 65</h3>
                <span className="text-primary font-serif">₹575</span>
              </div>
              <p className="text-slate-400 text-sm leading-snug">Crispy tempered chicken, curry leaf pesto, pickled radish curls.</p>
            </div>
          </div>
        </div>

        {/* Main Dishes Column */}
        <div className="space-y-10" id="main">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-primary text-3xl font-serif italic">Main Dishes</h2>
            <div className="h-px flex-1 bg-primary/20"></div>
          </div>
          
          <div className="group flex gap-4 border-b border-primary/10 pb-6 transition-all hover:translate-x-1">
            <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border border-primary/30">
              <img className="w-full h-full object-cover" alt="Butter chicken in a copper bowl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzcOYsctQ8hq8cAjPkEtbpKDUNtylZVYGXhT9pIj9m236cpvHMbhXJtTlQGMyXOyKuAHvqzcB6odkE_ojLKm71_xm0tnP036MEMxpWnxjulMGry7PPuE5ltMSNwSKN-OERjMN1xJRPFxAq_UoF5Sj799mN1qPf1Bfd5FrZDa5o8VV9RKHU7HCQ2BMp0x22cYqRTHGs0xA_tIaSuxBIjMBBx4jzAzKe9IkB0mlLqVfpEt6KuUVcFrpr77hYxzWndP3cpbMOZb9H5CM"/>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-lg font-bold text-slate-100 group-hover:text-primary transition-colors">Velvet Butter Chicken</h3>
                <span className="text-primary font-serif">₹895</span>
              </div>
              <p className="text-slate-400 text-sm leading-snug">Smoked tandoori chicken, satin tomato reduction, kasuri methi butter.</p>
            </div>
          </div>
          
          <div className="group flex gap-4 border-b border-primary/10 pb-6 transition-all hover:translate-x-1">
            <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border border-primary/30">
              <img className="w-full h-full object-cover" alt="Aromatic lamb biryani with garnish" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAD7OyAcKu4FhuF3osS6GEMlmm4k0F267C9YeeSJcMHJcQv_aynRcrsFCepzjLYK9ac5c2igpdn80m6N6_vKYDesqCw2S9PAEtzXoTb3jmSf5k263QBspvCTn8DgYror5tPRbT3U6cgYYLzTGhrIo_0PSLV4-3dyZDDpZzvYvDiXAL9uGZPJm64IR8Wz7YNM3Rrx5jEXC3S1Op70sFQaeu_u_wjoylvVeGBmMobjl8SpWNPe2bOhW48yItmZrDFSHhhKE4yfB5s2s"/>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-lg font-bold text-slate-100 group-hover:text-primary transition-colors">Royal Lamb Biryani</h3>
                <span className="text-primary font-serif">₹1,150</span>
              </div>
              <p className="text-slate-400 text-sm leading-snug">Long-grain basmati, slow-braised lamb, saffron infusions, gold leaf.</p>
            </div>
          </div>
          
          <div className="group flex gap-4 border-b border-primary/10 pb-6 transition-all hover:translate-x-1">
            <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border border-primary/30">
              <img className="w-full h-full object-cover" alt="Vegetarian curry with fresh vegetables" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtPvdxYs8VEInf6ytcPGnRZnM6aPiYV5z7RMe8VwRuXb6SvFkbFU_Jy4KXgZKQ97nvvtYMpqrPb0bIHRcUfgMXFjruLvPvsgx_xNJFXqsPt7OlrZem8LdrxStgZBdd4OBjRM3SFfDJIBSZFq34JFDlODaQX2pU0H5Th-TuTA1fbB31grBvfskI0bPzyfIqzLAQRsuE0bKyMe2D5ZboGLAQp7R8ls6j5ZVnheP4rc6SuWtKQSo7IUuEWq-OfTuFSaP_UQfTnfJrS04"/>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-lg font-bold text-slate-100 group-hover:text-primary transition-colors">Heritage Dal Ila</h3>
                <span className="text-primary font-serif">₹625</span>
              </div>
              <p className="text-slate-400 text-sm leading-snug">24-hour slow-cooked black lentils, artisanal butter, fresh cream swirl.</p>
            </div>
          </div>
        </div>

        {/* Seafood Column */}
        <div className="space-y-10" id="seafood">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-primary text-3xl font-serif italic">Seafood</h2>
            <div className="h-px flex-1 bg-primary/20"></div>
          </div>
          
          <div className="group flex gap-4 border-b border-primary/10 pb-6 transition-all hover:translate-x-1">
            <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border border-primary/30">
              <img className="w-full h-full object-cover" alt="South Indian fish curry" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCVz7b4SoS7jObzcPchSFgsTJVCPM_PzB9traPh2CKkqV5pb8xCY1xJPfPp5pinrHzQJ7bJtwQQzNDWYdaEoggglywVoHOO4_4G66OGgRadGwJY2a_9M5kTfeh9_u_wh0ve0-P069WxYSrpN2sPyv06ekaDSYV2s6VNjXlVMAY7nvX9S-Ys_UtlWtY7afrv3zcrSV-qua6xlaK3obUBt781LBwkPuUtvg12X0snR06pBM1Fml5_v8T579wM7_dcuh5VUPmjdPfFTs"/>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-lg font-bold text-slate-100 group-hover:text-primary transition-colors">Backwater Fish Curry</h3>
                <span className="text-primary font-serif">₹925</span>
              </div>
              <p className="text-slate-400 text-sm leading-snug">Kingfish steaks, roasted coconut milk, kudampuli, curry leaves.</p>
            </div>
          </div>
          
          <div className="group flex gap-4 border-b border-primary/10 pb-6 transition-all hover:translate-x-1">
            <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border border-primary/30">
              <img className="w-full h-full object-cover" alt="Grilled prawns with spices" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-PCiIiSXFgabYXt_iwWwcBZErXEznMAaYI1getn0zPjgXuHrWgo_aZuj6wsBwbcKLJNEwBVZU2-Dh8ArM5gpZQlF3-TLkgRyzyDox3el90Oah_qrDpp3sxoCRVsT0EXPh2AltO24p_B7LO2KM3fwdsX05B2HmanbE8WVgO85AWJijkazX7G5wwY_mt3rS2N2hpbD8_E8K0mZaCDnKIlutJLUh6sNzCKsqHwSYApfSdqZromZhQjG_gg-vMUKNVG1Sf0qbui6vCtw"/>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-lg font-bold text-slate-100 group-hover:text-primary transition-colors">Malabar Prawn Roast</h3>
                <span className="text-primary font-serif">₹1,250</span>
              </div>
              <p className="text-slate-400 text-sm leading-snug">Tiger prawns, caramelised onion masala, black pepper, fennel shards.</p>
            </div>
          </div>
          
          <div className="group flex gap-4 border-b border-primary/10 pb-6 transition-all hover:translate-x-1">
            <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border border-primary/30">
              <img className="w-full h-full object-cover" alt="Spicy grilled fish on a banana leaf" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAONgoKWtYAt1BqjkT4cjt4m6KVdJXTL1zJM8l1TCg_eKYBU30aF3F6fbIvHXiWgA5Leq8XfuOZA2ZhNBqGICI_Zsz4DLmNjtYimGqeYQ4X9WhLwNJgnEBirTG6CemFl6i0sWM4pmpB3kkcbDqzvgmLSOwcuJc84eZvX_gC8ZQwYVv0UfutjNwG4DZQ_6RrGb8M_WXEtyYqBM3Nbqh93RocNvBtvpT8Jt6UKcroGqBCotpMmuHIBewhcbKjkaSHbxQiFYcIGpt7nC4"/>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-lg font-bold text-slate-100 group-hover:text-primary transition-colors">Pollichathu Snapper</h3>
                <span className="text-primary font-serif">₹1,400</span>
              </div>
              <p className="text-slate-400 text-sm leading-snug">Pearl spot fish wrapped in banana leaf, charred red chilly paste.</p>
            </div>
          </div>
        </div>
        
        {/* Background Accent Leaf */}
        <div className="absolute -bottom-20 -right-20 w-96 h-96 botanical-accent rotate-12 opacity-10 pointer-events-none"></div>
      </div>

      {/* Specials Banner */}
      <section className="mt-24 p-1 rounded-xl bg-gradient-to-r from-primary/40 via-primary to-primary/40">
        <div className="bg-background-dark rounded-lg p-12 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <span className="text-primary font-serif italic text-xl mb-2 block">Sommelier's Choice</span>
            <h2 className="text-4xl font-serif text-white mb-4">The Golden Vineyard Pairings</h2>
            <p className="text-slate-400 mb-8 max-w-lg">
              Enhance your culinary journey with our curated selection of vintage wines and signature botanical cocktails designed to complement Kochi's bold spices.
            </p>
            <button className="px-8 py-3 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-background-dark transition-all">
              View Drink Menu
            </button>
          </div>
          <div className="w-full md:w-1/3 aspect-[4/5] rounded-xl overflow-hidden relative shadow-2xl shadow-primary/10">
            <img className="w-full h-full object-cover" alt="Elegant wine glass being filled in a dark room" src="https://lh3.googleusercontent.com/aida-public/AB6AXuADOKYL6w0azY4meJ4YauOYbpQXQbf-xwIBKrUvcfLZgEDEph83hKW_4LoqCK-CTCY73wz-xdSSCTkwfEhMnZkIPpo5Ecq876FzfKKXIxMCoxJvYtswe9XyuhLYL8CAEVwZOmLrkLGjyTYMqgF7Imu9m_Vt6wGOX4eeyyU0wRl05eE2cYaiLxcckeIKwDQNNV-N6ODChXdXoAPr3XXzDjeolnCTko95phtTGniZwO1zuqz12MhSeLZDiByJsNMdoDEBbSnf7moz47M"/>
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark/60 to-transparent"></div>
          </div>
        </div>
      </section>
      </div>

      {/* --- MOBILE VIEW (Lush Green) --- */}
      <div className="flex md:hidden bg-[#f6f8f6] dark:bg-[#102213] font-serif antialiased w-full relative flex-1 flex-col overflow-x-hidden">
        {/* Header Section */}
        <div className="sticky top-0 z-50 bg-[#102213]/95 backdrop-blur-sm border-b border-white/10 px-4 py-3">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-[#f3f0e6] p-2 -ml-2 rounded-full hover:bg-white/10 transition-colors">
              <span className="material-symbols-outlined">arrow_back</span>
            </Link>
            <h2 className="text-[#f3f0e6] text-xl font-bold tracking-tight">Ila Kochi</h2>
            <button className="text-[#f3f0e6] p-2 -mr-2 rounded-full hover:bg-white/10 transition-colors">
              <span className="material-symbols-outlined">search</span>
            </button>
          </div>
          {/* Categories Scroll */}
          <div className="mt-4 flex gap-3 overflow-x-auto scrollbar-hide pb-1">
            <button className="whitespace-nowrap rounded-full bg-[#2bee4b] text-[#102213] px-5 py-2 text-sm font-bold shadow-lg shadow-[#2bee4b]/20">All</button>
            <button className="whitespace-nowrap rounded-full bg-[#18281b] border border-white/10 text-[#f3f0e6]/80 px-5 py-2 text-sm font-medium hover:bg-white/5 transition-colors">Starters</button>
            <button className="whitespace-nowrap rounded-full bg-[#18281b] border border-white/10 text-[#f3f0e6]/80 px-5 py-2 text-sm font-medium hover:bg-white/5 transition-colors">Mains</button>
            <button className="whitespace-nowrap rounded-full bg-[#18281b] border border-white/10 text-[#f3f0e6]/80 px-5 py-2 text-sm font-medium hover:bg-white/5 transition-colors">Seafood</button>
            <button className="whitespace-nowrap rounded-full bg-[#18281b] border border-white/10 text-[#f3f0e6]/80 px-5 py-2 text-sm font-medium hover:bg-white/5 transition-colors">Desserts</button>
          </div>
        </div>
        
        {/* Main Content */}
        <main className="flex-1 overflow-y-auto pb-24 px-4 pt-6 space-y-8">
          {/* Catch of the Day Feature */}
          <section className="relative overflow-hidden rounded-2xl border border-[#f3f0e6]/20 bg-[#1a2e1d] p-5 shadow-xl">
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at top right, #d4af37 1px, transparent 1px), radial-gradient(circle at bottom left, #d4af37 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
            <div className="relative z-10 flex flex-col gap-4">
              <div className="flex items-start justify-between">
                <div>
                  <span className="inline-block rounded bg-[#d4af37]/20 px-2 py-1 text-xs font-bold uppercase tracking-wider text-[#d4af37] mb-2">Chef's Special</span>
                  <h3 className="text-2xl font-bold text-[#f3f0e6]">Karimeen Pollichathu</h3>
                  <p className="mt-2 text-sm text-[#f3f0e6]/70 line-clamp-2">Fresh Pearl Spot fish marinated in traditional Kerala spices, wrapped in banana leaf and grilled to perfection.</p>
                </div>
                <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg border border-white/10 bg-neutral-800">
                  <img alt="Grilled fish in banana leaf" className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9L753QB3F9sjw6IwwIVr6ZFAgaLiHzNmqqaaIxBJlYCObHxqhjGmX7EUqydXF0w8MjjjoAK3IPhmiHMUBhnFDC7Pn9mDi58iC4e_2WLJiAfzG-2Qp80TGX6CEQe5VCxW3X0Kk9m2mND7dev4DZ0DtJV_4wyuGVrG5yzwBvZIJb6P6n4GZorGtM2ONYF4WajiLIxAMjYrarnNL0jLyDVkj07xTW4rz23GQ3eqz4ZvjI2r9D3wYxKDQvVCxSswKBW8Fh6ARVx4O0Do"/>
                </div>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-white/10">
                <span className="text-lg font-bold text-[#2bee4b]">₹540</span>
                <button className="flex items-center gap-2 rounded-lg bg-[#f3f0e6] px-4 py-2 text-xs font-bold uppercase tracking-wide text-[#102213] shadow-sm hover:bg-white transition-colors">
                  Add to Order
                  <span className="material-symbols-outlined text-[16px]">add</span>
                </button>
              </div>
            </div>
          </section>

          {/* Menu Section: Starters */}
          <section>
            <div className="flex items-center gap-4 mb-4">
              <h3 className="text-xl font-bold text-[#f3f0e6] min-w-fit">Small Plates</h3>
              <div className="h-[1px] w-full bg-gradient-to-r from-[#d4af37]/50 to-transparent"></div>
            </div>
            <div className="space-y-4">
              {/* Item 1 */}
              <div className="group flex items-center justify-between gap-4 rounded-xl bg-[#18281b] p-3 transition-colors hover:bg-white/5">
                <div className="flex flex-1 flex-col gap-1">
                  <div className="flex items-start justify-between">
                    <h4 className="font-bold text-[#f3f0e6] group-hover:text-[#2bee4b] transition-colors">Kerala Beef Fry</h4>
                  </div>
                  <p className="text-xs text-[#f3f0e6]/60 line-clamp-2">Slow-roasted beef with coconut slices and curry leaves.</p>
                  <span className="mt-1 text-sm font-semibold text-[#d4af37]">₹320</span>
                </div>
                <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg">
                  <img alt="Spicy beef fry dish" className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHLWettcRcooPO8jq9WVmRrlP-Nn1NHH6CKJ99lKnRn5vpt_WoZW3ICx99VvquKGhs7CkguPKlbvv5n7CWiuph1nrc3mX0HVUZC3mozaLiC-Xu8mg_9bgWzuRa4gLNFP_b19kajR-nI5CNNjEIE3ML-Tt1gKxxv9RmszFDAjcrj-DHM8ZSi-9XRYYmWRc4dhJ_3q-NNotDsh3qPZCDKTzY35MQQ_KmWNpN4W1igNg4FqodwdymUq_i8soz8OYacG99FeQ-vMdeusQ"/>
                  <button className="absolute bottom-1 right-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#2bee4b] text-[#102213] shadow-lg">
                    <span className="material-symbols-outlined text-[14px] font-bold">add</span>
                  </button>
                </div>
              </div>
              {/* Item 2 */}
              <div className="group flex items-center justify-between gap-4 rounded-xl bg-[#18281b] p-3 transition-colors hover:bg-white/5">
                <div className="flex flex-1 flex-col gap-1">
                  <div className="flex items-start justify-between">
                    <h4 className="font-bold text-[#f3f0e6] group-hover:text-[#2bee4b] transition-colors">Prawns Roast</h4>
                  </div>
                  <p className="text-xs text-[#f3f0e6]/60 line-clamp-2">Succulent prawns tossed in a spicy onion-tomato masala.</p>
                  <span className="mt-1 text-sm font-semibold text-[#d4af37]">₹450</span>
                </div>
                <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg">
                  <img alt="Spicy prawn roast" className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaI9MAd2R8VBXzH36q0uxeBtf3UKxmgRiRi4CIroc4NyOw1O16pd4b5THazGRKJTesjup6L_-OCeDsQlL7dlOCWoKQvIS2P1iB-6eeQJA5arr1Po2CWH8wQjG7hNu8GXgJ9SkvTppnTI43jDG2-nrfRhZevKWQqUfJobWc3fyO6WawbCaVriF4ut48m6_0W4wZSDAMOVmqIrhblxRmB7TgajXcsfXdAEVBduM8TiQOue4_z_IdeR7I_txgT3OoF7CD-K_FAjZwvKE"/>
                  <button className="absolute bottom-1 right-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#2bee4b] text-[#102213] shadow-lg">
                    <span className="material-symbols-outlined text-[14px] font-bold">add</span>
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Menu Section: Mains */}
          <section>
            <div className="flex items-center gap-4 mb-4">
              <h3 className="text-xl font-bold text-[#f3f0e6] min-w-fit">Mains</h3>
              <div className="h-[1px] w-full bg-gradient-to-r from-[#d4af37]/50 to-transparent"></div>
            </div>
            <div className="space-y-4">
              {/* Item 3 */}
              <div className="group flex items-center justify-between gap-4 rounded-xl bg-[#18281b] p-3 transition-colors hover:bg-white/5">
                <div className="flex flex-1 flex-col gap-1">
                  <div className="flex items-start justify-between">
                    <h4 className="font-bold text-[#f3f0e6] group-hover:text-[#2bee4b] transition-colors">Appam & Stew</h4>
                  </div>
                  <p className="text-xs text-[#f3f0e6]/60 line-clamp-2">Fluffy rice pancakes served with creamy vegetable stew.</p>
                  <span className="mt-1 text-sm font-semibold text-[#d4af37]">₹280</span>
                </div>
                <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg">
                  <img alt="Appam with stew" className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBe46NTKBRZbMPo2NiRKyQXZYvJ4elb_n482APTElAF4pzD5FgkJbj6YBo9UxwIcFYlZZ2dY30Zzb6lRutt4s59qP9Hsx9z51fED17vNQDDMYPEuZZ4iKRr3bxTyKwaP_v70C1k7lFJfp00Rfgwk3Dwr4qa2mteb_FOsFnHUgfh9Xp79MNLoSztKZr6G529A7EGM4ZdB2hO_RPD_UomDEoNjbmHWCcqMul8iXZ3DJPwr0ynNfR-Wo0bMfI4RC7CLjinsWd_hdDxq80"/>
                  <button className="absolute bottom-1 right-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#2bee4b] text-[#102213] shadow-lg">
                    <span className="material-symbols-outlined text-[14px] font-bold">add</span>
                  </button>
                </div>
              </div>
              {/* Item 4 */}
              <div className="group flex items-center justify-between gap-4 rounded-xl bg-[#18281b] p-3 transition-colors hover:bg-white/5">
                <div className="flex flex-1 flex-col gap-1">
                  <div className="flex items-start justify-between">
                    <h4 className="font-bold text-[#f3f0e6] group-hover:text-[#2bee4b] transition-colors">Malabar Biryani</h4>
                  </div>
                  <p className="text-xs text-[#f3f0e6]/60 line-clamp-2">Aromatic kaima rice layered with spiced chicken masala.</p>
                  <span className="mt-1 text-sm font-semibold text-[#d4af37]">₹380</span>
                </div>
                <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg">
                  <img alt="Chicken Biryani" className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsFj4ttUBuS4DVzPXOg7uZrNV5sRbxfMh7gxbyyiNA4KkYgDxi0LIMcSjvUTxQtw3e_hQz4kG7jITh4fME8p1UFEEmoOfY2qzugD1_rssd091fwyfV88uAcbbdTdX_kAuiGH-TeS6NfKnr6odxxp1XQyFKD53WfXbgrPz-YdzkvELX_vTp1qZmV5lCCrwnYezo6JSgbX9zXwHIyMYp4gwkfSWf2nGY36vZmuwaVxKi4_562JiEuSPOS8Ile-dbeUlathIx7Y4wS7k"/>
                  <button className="absolute bottom-1 right-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#2bee4b] text-[#102213] shadow-lg">
                    <span className="material-symbols-outlined text-[14px] font-bold">add</span>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <MobileBottomNav activeTab="menu" />
      </div>
    </>
  );
}
