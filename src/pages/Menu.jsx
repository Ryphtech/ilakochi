import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MobileBottomNav from '../components/MobileBottomNav';
import { supabase } from '../lib/supabase';

// Loading skeleton
const MenuSkeleton = () => (
  <div className="animate-pulse space-y-6">
    {[1,2,3].map(i => (
      <div key={i} className="flex gap-4">
        <div className="w-20 h-20 bg-white/5 rounded-lg"></div>
        <div className="flex-1 space-y-2 py-2">
          <div className="h-4 bg-white/5 rounded w-3/4"></div>
          <div className="h-3 bg-white/5 rounded w-1/2"></div>
        </div>
      </div>
    ))}
  </div>
);

// Desktop menu item card
const DesktopMenuItem = ({ item }) => (
  <div className="group flex gap-4 border-b border-primary/10 pb-6 transition-all hover:translate-x-1">
    <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border border-primary/30">
      {item.image_url && <img className="w-full h-full object-cover" alt={item.name} src={item.image_url} />}
    </div>
    <div className="flex-1">
      <div className="flex justify-between items-baseline mb-1">
        <h3 className="text-lg font-bold text-slate-100 group-hover:text-primary transition-colors">{item.name}</h3>
        <span className="text-primary font-serif">₹{item.price.toLocaleString()}</span>
      </div>
      <p className="text-slate-400 text-sm leading-snug">{item.description}</p>
    </div>
  </div>
);

// Mobile menu item card
const MobileMenuItem = ({ item }) => (
  <div className="group flex items-center justify-between gap-4 rounded-xl bg-[#18281b] p-3 transition-colors hover:bg-white/5">
    <div className="flex flex-1 flex-col gap-1">
      <h4 className="font-bold text-[#f3f0e6] group-hover:text-[#2bee4b] transition-colors">{item.name}</h4>
      <p className="text-xs text-[#f3f0e6]/60 line-clamp-2">{item.description}</p>
      <span className="mt-1 text-sm font-semibold text-[#d4af37]">₹{item.price.toLocaleString()}</span>
    </div>
    <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg">
      {item.image_url && <img alt={item.name} className="h-full w-full object-cover" src={item.image_url} />}
      <button className="absolute bottom-1 right-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#2bee4b] text-[#102213] shadow-lg">
        <span className="material-symbols-outlined text-[14px] font-bold">add</span>
      </button>
    </div>
  </div>
);

export default function Menu() {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const { data } = await supabase
        .from('menu_items')
        .select('*')
        .eq('is_available', true)
        .order('display_order');
      if (!cancelled) {
        setMenuItems(data || []);
        setLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, []);

  const categories = [
    { key: 'all', label: 'All' },
    { key: 'appetizers', label: 'Appetizers' },
    { key: 'main', label: 'Main Dishes' },
    { key: 'seafood', label: 'Seafood' },
    { key: 'desserts', label: 'Desserts' },
  ];

  const filteredItems = activeFilter === 'all' ? menuItems : menuItems.filter(i => i.category === activeFilter);
  const getByCategory = (cat) => menuItems.filter(i => i.category === cat);

  return (
    <>
      {/* --- DESKTOP VIEW --- */}
      <div className="hidden md:block flex-1 max-w-7xl mx-auto w-full px-6 py-12">
      {/* Hero Section */}
      <section className="mb-16 relative rounded-xl overflow-hidden min-h-[400px] flex flex-col justify-end p-12 group">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" 
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
          {categories.filter(c => c.key !== 'all').map(cat => (
            <a key={cat.key} className={`flex flex-col items-center gap-2 group ${activeFilter === cat.key ? '' : 'opacity-50 hover:opacity-100'} transition-opacity cursor-pointer`} href={`#${cat.key}`} onClick={(e) => { e.preventDefault(); setActiveFilter(cat.key === activeFilter ? 'all' : cat.key); }}>
              <span className={`text-sm font-bold tracking-widest uppercase ${activeFilter === cat.key ? 'text-primary' : 'text-slate-300 group-hover:text-primary'}`}>{cat.label}</span>
              <div className={`h-1 ${activeFilter === cat.key ? 'w-full' : 'w-0 group-hover:w-full'} bg-primary rounded-full transition-all`}></div>
            </a>
          ))}
        </div>
      </nav>

      {/* Menu Grid */}
      {loading ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <MenuSkeleton /><MenuSkeleton /><MenuSkeleton />
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 relative">
          {(activeFilter === 'all' ? ['appetizers', 'main', 'seafood'] : [activeFilter]).map(cat => {
            const items = getByCategory(cat);
            if (items.length === 0) return null;
            const catLabel = categories.find(c => c.key === cat)?.label || cat;
            return (
              <div key={cat} className="space-y-10" id={cat}>
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="text-primary text-3xl font-serif italic">{catLabel}</h2>
                  <div className="h-px flex-1 bg-primary/20"></div>
                </div>
                {items.map(item => <DesktopMenuItem key={item.id} item={item} />)}
              </div>
            );
          })}
          <div className="absolute -bottom-20 -right-20 w-96 h-96 botanical-accent rotate-12 opacity-10 pointer-events-none"></div>
        </div>
      )}

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

      {/* --- MOBILE VIEW --- */}
      <div className="flex md:hidden bg-[#f6f8f6] dark:bg-[#102213] font-serif antialiased w-full relative flex-1 flex-col overflow-x-hidden">
        {/* Header */}
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
            {categories.map(cat => (
              <button
                key={cat.key}
                onClick={() => setActiveFilter(cat.key)}
                className={`whitespace-nowrap rounded-full px-5 py-2 text-sm font-bold transition-colors ${
                  activeFilter === cat.key
                    ? 'bg-[#2bee4b] text-[#102213] shadow-lg shadow-[#2bee4b]/20'
                    : 'bg-[#18281b] border border-white/10 text-[#f3f0e6]/80 font-medium hover:bg-white/5'
                }`}
              >
                {cat.label === 'All' ? 'All' : cat.label === 'Appetizers' ? 'Starters' : cat.label === 'Main Dishes' ? 'Mains' : cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto pb-24 px-4 pt-6 space-y-8">
          {loading ? (
            <div className="space-y-4">
              {[1,2,3,4].map(i => (
                <div key={i} className="animate-pulse flex gap-4 bg-[#18281b] rounded-xl p-3">
                  <div className="flex-1 space-y-2 py-2">
                    <div className="h-4 bg-white/10 rounded w-3/4"></div>
                    <div className="h-3 bg-white/10 rounded w-1/2"></div>
                  </div>
                  <div className="w-20 h-20 bg-white/10 rounded-lg"></div>
                </div>
              ))}
            </div>
          ) : (
            <>
              {/* Chef's Special - show first seafood item */}
              {menuItems.length > 0 && (
                <section className="relative overflow-hidden rounded-2xl border border-[#f3f0e6]/20 bg-[#1a2e1d] p-5 shadow-xl">
                  <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at top right, #d4af37 1px, transparent 1px), radial-gradient(circle at bottom left, #d4af37 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                  <div className="relative z-10 flex flex-col gap-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="inline-block rounded bg-[#d4af37]/20 px-2 py-1 text-xs font-bold uppercase tracking-wider text-[#d4af37] mb-2">Chef's Special</span>
                        <h3 className="text-2xl font-bold text-[#f3f0e6]">{menuItems[0].name}</h3>
                        <p className="mt-2 text-sm text-[#f3f0e6]/70 line-clamp-2">{menuItems[0].description}</p>
                      </div>
                      {menuItems[0].image_url && (
                        <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg border border-white/10 bg-neutral-800">
                          <img alt={menuItems[0].name} className="h-full w-full object-cover" src={menuItems[0].image_url} />
                        </div>
                      )}
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-white/10">
                      <span className="text-lg font-bold text-[#2bee4b]">₹{menuItems[0].price.toLocaleString()}</span>
                      <button className="flex items-center gap-2 rounded-lg bg-[#f3f0e6] px-4 py-2 text-xs font-bold uppercase tracking-wide text-[#102213] shadow-sm hover:bg-white transition-colors">
                        Add to Order
                        <span className="material-symbols-outlined text-[16px]">add</span>
                      </button>
                    </div>
                  </div>
                </section>
              )}

              {/* Menu Items by category */}
              {(activeFilter === 'all' ? ['appetizers', 'main', 'seafood', 'desserts'] : [activeFilter]).map(cat => {
                const items = getByCategory(cat).slice(activeFilter === 'all' ? 0 : 0);
                if (items.length === 0) return null;
                const catLabel = cat === 'appetizers' ? 'Small Plates' : cat === 'main' ? 'Mains' : categories.find(c => c.key === cat)?.label || cat;
                return (
                  <section key={cat}>
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-xl font-bold text-[#f3f0e6] min-w-fit">{catLabel}</h3>
                      <div className="h-[1px] w-full bg-gradient-to-r from-[#d4af37]/50 to-transparent"></div>
                    </div>
                    <div className="space-y-4">
                      {items.map(item => <MobileMenuItem key={item.id} item={item} />)}
                    </div>
                  </section>
                );
              })}

              {filteredItems.length === 0 && (
                <div className="text-center py-12 text-[#f3f0e6]/50">
                  <span className="material-symbols-outlined text-4xl mb-2 block">restaurant_menu</span>
                  <p>No items in this category yet.</p>
                </div>
              )}
            </>
          )}
        </main>
        
        <MobileBottomNav activeTab="menu" />
      </div>
    </>
  );
}
