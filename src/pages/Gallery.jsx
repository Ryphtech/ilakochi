import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MobileBottomNav from '../components/MobileBottomNav';
import { supabase } from '../lib/supabase';

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const { data } = await supabase
        .from('gallery_images')
        .select('*')
        .order('display_order');
      if (!cancelled) {
        setImages(data || []);
        setLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, []);

  const filterCategories = [
    { key: 'all', label: 'All' },
    { key: 'food', label: 'Food' },
    { key: 'ambience', label: 'Ambience' },
    { key: 'people', label: 'People' },
  ];

  const filteredImages = activeFilter === 'all' ? images : images.filter(i => i.category === activeFilter);

  // Masonry size classes cycling
  const sizeClasses = ['masonry-item-tall', 'masonry-item-medium', 'masonry-item-short', 'masonry-item-medium', 'masonry-item-tall', 'masonry-item-medium'];
  const rotations = ['-1deg', '2deg', '1deg', '-2deg', '1.5deg', '-1.5deg'];
  const aspects = ['4/5', '1/1', '4/3', '3/4', '1/1', '4/5'];

  return (
    <>
      {/* --- DESKTOP VIEW --- */}
      <div className="hidden md:flex flex-1 flex-col items-center px-6 lg:px-40 py-12 w-full">
      {/* Hero */}
      <div className="w-full max-w-[1200px] mb-12 flex flex-col items-center text-center">
        <span className="text-primary font-semibold tracking-[0.2em] uppercase text-xs mb-4">Curated Moments</span>
        <h1 className="text-slate-900 dark:text-slate-100 text-5xl md:text-6xl font-black leading-tight tracking-tighter mb-6">Gallery</h1>
        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl">
          A visual journey through the flavors and soul of Ila Kochi. Each plate tells a story of tradition, refined for the modern palate.
        </p>
      </div>

      {/* Filters */}
      <div className="flex gap-4 p-3 flex-wrap justify-center mb-16">
        {filterCategories.map(cat => (
          <button
            key={cat.key}
            onClick={() => setActiveFilter(cat.key)}
            className={`flex h-10 items-center justify-center px-8 rounded-full font-bold text-sm transition-all ${
              activeFilter === cat.key
                ? 'bg-primary text-background-dark shadow-lg shadow-primary/10'
                : 'border border-primary/40 text-primary hover:bg-primary/10'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      {loading ? (
        <div className="masonry-grid w-full max-w-[1200px] gap-6">
          {[1,2,3,4,5,6].map(i => (
            <div key={i} className={`${sizeClasses[i % sizeClasses.length]} bg-white/5 animate-pulse rounded-xl`}></div>
          ))}
        </div>
      ) : (
        <div className="masonry-grid w-full max-w-[1200px] gap-6">
          {filteredImages.map((img, index) => (
            <div
              key={img.id}
              className={`${sizeClasses[index % sizeClasses.length]} group relative overflow-hidden rounded-xl border-[6px] border-background-light dark:border-background-dark shadow-2xl cursor-pointer`}
              onClick={() => setLightboxImage(img)}
            >
              <div
                className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url("${img.image_url}")` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-primary text-xs font-bold uppercase tracking-widest mb-1">{img.category}</span>
                <h3 className="text-white font-bold text-lg">{img.title}</h3>
              </div>
            </div>
          ))}
          {filteredImages.length === 0 && (
            <div className="col-span-full text-center py-20 text-slate-400">
              <span className="material-symbols-outlined text-5xl mb-3 block">photo_library</span>
              <p>No images in this category yet.</p>
            </div>
          )}
        </div>
      )}

      {/* CTA */}
      <div className="w-full max-w-[1200px] mt-24 mb-16 px-8 py-20 rounded-3xl bg-primary/10 border border-primary/20 flex flex-col items-center text-center">
        <h2 className="text-slate-900 dark:text-slate-100 text-4xl font-black mb-4">Experience it yourself</h2>
        <p className="text-slate-600 dark:text-slate-400 text-lg mb-10 max-w-xl">
            Join us for an unforgettable culinary experience in the heart of Kochi. Our doors are open for dinner every night.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/menu" className="bg-transparent border-2 border-primary/50 text-primary px-10 py-4 rounded-xl font-bold text-lg hover:bg-primary/10 transition-colors">
            View Full Menu
          </Link>
        </div>
      </div>
      </div>

      {/* Desktop Lightbox */}
      {lightboxImage && (
        <div className="hidden md:flex fixed inset-0 z-[100] bg-black/90 items-center justify-center p-8" onClick={() => setLightboxImage(null)}>
          <button className="absolute top-6 right-6 text-white hover:text-primary transition-colors" onClick={() => setLightboxImage(null)}>
            <span className="material-symbols-outlined text-3xl">close</span>
          </button>
          <div className="max-w-3xl w-full" onClick={e => e.stopPropagation()}>
            <img src={lightboxImage.image_url} alt={lightboxImage.title} className="w-full rounded-xl shadow-2xl" />
            <div className="mt-4 text-center">
              <h3 className="text-white font-bold text-xl">{lightboxImage.title}</h3>
              <p className="text-primary text-sm uppercase tracking-widest mt-1">{lightboxImage.category}</p>
            </div>
          </div>
        </div>
      )}

      {/* --- MOBILE VIEW --- */}
      <div className="flex md:hidden relative flex-1 flex-col w-full bg-[#f6f8f6] dark:bg-[#102213] text-slate-900 dark:text-slate-100 font-['Noto_Sans',_sans-serif]">
        {/* Header */}
        <div className="flex items-center bg-[#f6f8f6] dark:bg-[#102213] p-4 pb-2 justify-between sticky top-0 z-10 border-b border-[#11d432]/10">
          <Link to="/" className="text-slate-900 dark:text-[#f3f0e6] flex size-12 shrink-0 items-center">
            <span className="material-symbols-outlined text-2xl">arrow_back</span>
          </Link>
          <h2 className="text-slate-900 dark:text-[#f3f0e6] text-lg font-['Noto_Serif',_serif] font-bold leading-tight tracking-[-0.015em] flex-1 text-center">Gallery Wall</h2>
          <div className="flex w-12 items-center justify-end">
            <button className="flex cursor-pointer items-center justify-center rounded-lg h-12 bg-transparent text-slate-900 dark:text-[#f3f0e6]">
              <span className="material-symbols-outlined text-2xl">share</span>
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="pb-3 bg-[#f6f8f6] dark:bg-[#102213]">
          <div className="flex overflow-x-auto scrollbar-hide px-4 gap-6 py-4">
            {[{key: 'all', label: 'View All'}, {key: 'food', label: 'Cuisine'}, {key: 'ambience', label: 'Ambience'}, {key: 'people', label: 'People'}].map(cat => (
              <button
                key={cat.key}
                onClick={() => setActiveFilter(cat.key)}
                className={`flex flex-col items-center justify-center border-b-2 whitespace-nowrap ${
                  activeFilter === cat.key
                    ? 'border-[#11d432] text-[#11d432]'
                    : 'border-transparent text-slate-500 dark:text-[#f3f0e6]/60'
                }`}
              >
                <p className="text-sm font-bold leading-normal tracking-wide font-['Noto_Serif',_serif]">{cat.label}</p>
              </button>
            ))}
          </div>
        </div>

        <main className="flex-1 pb-24 overflow-x-hidden">
          {loading ? (
            <div className="grid grid-cols-2 gap-4 p-4">
              {[1,2,3,4].map(i => (
                <div key={i} className="bg-[#f3f0e6] p-2 shadow-xl animate-pulse">
                  <div className="w-full aspect-[4/5] bg-gray-300"></div>
                  <div className="mt-2 h-3 bg-gray-300 rounded w-3/4 mx-auto"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4 p-4 mb-20">
              {filteredImages.map((img, index) => (
                <div
                  key={img.id}
                  className="flex flex-col p-2 bg-[#f3f0e6] dark:bg-[#f3f0e6] shadow-xl hover:rotate-0 transition-transform duration-300 cursor-pointer"
                  style={{ transform: `rotate(${rotations[index % rotations.length]})`, marginTop: index % 2 === 1 ? `${(index * 8) % 32}px` : '0' }}
                  onClick={() => setLightboxImage(img)}
                >
                  <div
                    className="w-full bg-center bg-no-repeat bg-cover"
                    style={{ backgroundImage: `url("${img.image_url}")`, aspectRatio: aspects[index % aspects.length] }}
                  ></div>
                  <p className="mt-2 text-[10px] uppercase tracking-widest text-[#102213] text-center font-bold">{img.title}</p>
                </div>
              ))}
              {filteredImages.length === 0 && (
                <div className="col-span-2 text-center py-16 text-[#f3f0e6]/50">
                  <span className="material-symbols-outlined text-4xl mb-2 block">photo_library</span>
                  <p>No images found.</p>
                </div>
              )}
            </div>
          )}

          {/* Mobile Lightbox */}
          {lightboxImage && (
            <div className="fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-center p-6" onClick={() => setLightboxImage(null)}>
              <button className="absolute top-4 right-4 text-white" onClick={() => setLightboxImage(null)}>
                <span className="material-symbols-outlined text-3xl">close</span>
              </button>
              <div className="w-full max-w-md border-[12px] border-[#f3f0e6] shadow-2xl" onClick={e => e.stopPropagation()}>
                <img src={lightboxImage.image_url} alt={lightboxImage.title} className="w-full" />
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-[#f3f0e6] font-['Noto_Serif',_serif] text-xl font-bold">{lightboxImage.title}</h3>
                <p className="text-[#f3f0e6]/70 text-sm mt-2 capitalize">{lightboxImage.category}</p>
              </div>
            </div>
          )}
        </main>

        <MobileBottomNav activeTab="gallery" />
      </div>
    </>
  );
}
