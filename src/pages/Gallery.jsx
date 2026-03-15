import React from 'react';
import { Link } from 'react-router-dom';
import MobileBottomNav from '../components/MobileBottomNav';

export default function Gallery() {
  return (
    <>
      {/* --- DESKTOP VIEW --- */}
      <div className="hidden md:flex flex-1 flex-col items-center px-6 lg:px-40 py-12 w-full">
      {/* Hero Section / Title */}
      <div className="w-full max-w-[1200px] mb-12 flex flex-col items-center text-center">
        <span className="text-primary font-semibold tracking-[0.2em] uppercase text-xs mb-4">Curated Moments</span>
        <h1 className="text-slate-900 dark:text-slate-100 text-5xl md:text-6xl font-black leading-tight tracking-tighter mb-6">Gallery</h1>
        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl">
          A visual journey through the flavors and soul of Ila Kochi. Each plate tells a story of tradition, refined for the modern palate.
        </p>
      </div>

      {/* Filters */}
      <div className="flex gap-4 p-3 flex-wrap justify-center mb-16">
        <button className="flex h-10 items-center justify-center px-8 rounded-full bg-primary text-background-dark font-bold text-sm shadow-lg shadow-primary/10">
          All
        </button>
        <button className="flex h-10 items-center justify-center px-8 rounded-full border border-primary/40 text-primary hover:bg-primary/10 font-bold text-sm transition-all">
          Food
        </button>
        <button className="flex h-10 items-center justify-center px-8 rounded-full border border-primary/40 text-primary hover:bg-primary/10 font-bold text-sm transition-all">
          Ambience
        </button>
        <button className="flex h-10 items-center justify-center px-8 rounded-full border border-primary/40 text-primary hover:bg-primary/10 font-bold text-sm transition-all">
          People
        </button>
      </div>

      {/* Masonry Gallery Grid */}
      <div className="masonry-grid w-full max-w-[1200px] gap-6">
        {/* Item 1 - Food */}
        <div className="masonry-item-tall group relative overflow-hidden rounded-xl border-[6px] border-background-light dark:border-background-dark shadow-2xl">
          <div 
            className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-700 group-hover:scale-110" 
            data-alt="Gourmet fusion dish with vibrant edible flowers" 
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCqqSMYHVY01LBRqPpJoPlvzxr75NDHwutAZLOsxhN-aGSHo8QVEoO8GbKFR9L0njSQhMoG6w9f0cY3NvCaSn3RDbTiY6-RjvQMttEmJ0artI5llkRrzkEP2HXWl-n_SgvwJyEeWTf3rMIKdMp7IQzKXBPSYZU9rzs1-Moy5PYYZbhNR2htVZJ_BEnad9ueX5nXYJ1ad3xFDoHutYyfFkxzDxudfiuFOMyFqmMZDK0TJ2tWp6i2B-RkDHJo9PH2jn49NHxtPPlL928")' }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
            <span className="text-primary text-xs font-bold uppercase tracking-widest mb-1">Food</span>
            <h3 className="text-white font-bold text-lg">Signature Sea Bass</h3>
          </div>
        </div>
        
        {/* Item 2 - Ambience */}
        <div className="masonry-item-medium group relative overflow-hidden rounded-xl border-[6px] border-background-light dark:border-background-dark shadow-2xl">
          <div 
            className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-700 group-hover:scale-110" 
            data-alt="Interior view of elegant restaurant dining room" 
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDmNu0BcwBccm0nzA4TSqDcqidvCwZuVY-Grukvab_aINtpSAzUlOP6AENYN2DqSk2NlzrjjQZuduKwfeYsPwN6z3lpw3AzTTdGtfxoINYefv7ImuZSScZPaZj-L33rGiTRZJJ8NEAVrzq7TiCL1UzSLGX2CJRasE_ZxJCb76nXMR1u8rWecWGuhFlNqAYE165KwT3roKJ4cks3nQHBykvgatg_mWdonrA6iyrHWkFu_BzX9qxsXafMgK6vdAbUmBsV0EcWz0BG-WM")' }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
            <span className="text-primary text-xs font-bold uppercase tracking-widest mb-1">Ambience</span>
            <h3 className="text-white font-bold text-lg">The Evening Glow</h3>
          </div>
        </div>
        
        {/* Item 3 - People */}
        <div className="masonry-item-short group relative overflow-hidden rounded-xl border-[6px] border-background-light dark:border-background-dark shadow-2xl">
          <div 
            className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-700 group-hover:scale-110" 
            data-alt="Chef plating a dish with precision" 
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAojaPMyF6ZuDe2gTlkycWXWdJb3UrMOUtT39K2iaSNGqYF7KT_sWab5fzgMWTaZmNbAANpvTUC3q9u4Z0BvcdD_k2WltrFiyMgUQYDeQVaFNhA-Ph3dLFr2QYHB92aBc4lgJSI86RihI6LzsYESTGfIo_LguX5PrF4X8oP53EKDDKTxtjiFk_NZQSB96xMC57gUg-hBh8MOvOf6LKU7Zdv9GPmEYeW4DqLR7fp09AlABxOGU_nSmXefg6NazfdBc0-BsLRdFTCJp8")' }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
            <span className="text-primary text-xs font-bold uppercase tracking-widest mb-1">People</span>
            <h3 className="text-white font-bold text-lg">Culinary Artistry</h3>
          </div>
        </div>
        
        {/* Item 4 - Food */}
        <div className="masonry-item-medium group relative overflow-hidden rounded-xl border-[6px] border-background-light dark:border-background-dark shadow-2xl">
          <div 
            className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-700 group-hover:scale-110" 
            data-alt="Colorful salad with fresh local ingredients" 
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBa1OZlR1Xk6fyjzxoy2_NpOew2uLMDcln3vnVFhhck35j1gbSBhgYO-et4rFx1KPPlqzDXTOlr4Hi_bcjohfjTepBcPBNRdSOuXiSGfdBDGHgtdjdTImaXEKOWfjDspRO1WKofXNwh45fOLo5d_Tpgywl1wLcQM0L9piQNUavscTvlL1XeRTbAnyjIbelI6fNSeBPXh2cYftxkIzLHIyXasc3ldBXLPzV1nTeJ62AU0lzl4Hyqm2hguaaNPo61L8Yjk02-_fY3Sg8")' }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
            <span className="text-primary text-xs font-bold uppercase tracking-widest mb-1">Food</span>
            <h3 className="text-white font-bold text-lg">Farm to Table</h3>
          </div>
        </div>
        
        {/* Item 5 - Ambience */}
        <div className="masonry-item-tall group relative overflow-hidden rounded-xl border-[6px] border-background-light dark:border-background-dark shadow-2xl">
          <div 
            className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-700 group-hover:scale-110" 
            data-alt="Table setting with wine glasses and candlelight" 
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAg15fEtIc8aq5ae0XZFImms7mOYQ4GdDE5889xMfKHalKxRMcvnB-Of5bFYhlur05FwqTlVhoJRKXbLBc-wnCapvrne63RB7R7rQMqzyKYSD3MquFUqEzx8PF-UEsUg_6sgqizMTJfHQix4pLIgIQpCBNvfh98wT4VoRwixsCgpVlZkafU456fq3hGF34dYlclZdjlyxtJDFMmaom8FAJ90ZYjQv9t-9x2QVPle3GbEVoxoNpDqysw456h4ERzEmSQh7KJkjsrzP0")' }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
            <span className="text-primary text-xs font-bold uppercase tracking-widest mb-1">Ambience</span>
            <h3 className="text-white font-bold text-lg">Intimate Settings</h3>
          </div>
        </div>
        
        {/* Item 6 - Food */}
        <div className="masonry-item-medium group relative overflow-hidden rounded-xl border-[6px] border-background-light dark:border-background-dark shadow-2xl">
          <div 
            className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-700 group-hover:scale-110" 
            data-alt="Exotic dessert with chocolate and gold leaf" 
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDM893qDw4vYx1S2LFeq1J_VJGoticunoLXRDcLL3rDp1Fks96rrgq1QHcSvbpLQ5APsZFM_hx7CHlsmA3pV4Va1Zrni1hc8ZT-r7xRE9wCjX-BaNX8N9KVjfukjCLr5zB0xCGkHNJUgl0KMg56Jc4jZqOIT7sCoZ5iuq57ntXCikHdOizf2Tmoz0BXXi5tPbUzVEIT29IPk8PSlEAeWIwAOPgsIHcLXFz9NOvlVELwE323jqLCCoA5JslJp5rkK2R2nOnOgC88W0I")' }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
            <span className="text-primary text-xs font-bold uppercase tracking-widest mb-1">Food</span>
            <h3 className="text-white font-bold text-lg">The Golden Finish</h3>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="w-full max-w-[1200px] mt-24 mb-16 px-8 py-20 rounded-3xl bg-primary/10 border border-primary/20 flex flex-col items-center text-center">
        <h2 className="text-slate-900 dark:text-slate-100 text-4xl font-black mb-4">Experience it yourself</h2>
        <p className="text-slate-600 dark:text-slate-400 text-lg mb-10 max-w-xl">
            Join us for an unforgettable culinary experience in the heart of Kochi. Our doors are open for dinner every night.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-primary text-background-dark px-10 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-xl shadow-primary/20">
            Reserve Now
          </button>
          <button className="bg-transparent border-2 border-primary/50 text-primary px-10 py-4 rounded-xl font-bold text-lg hover:bg-primary/10 transition-colors">
            View Full Menu
          </button>
        </div>
      </div>
      </div>

      {/* --- MOBILE VIEW (Gallery Wall) --- */}
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

        {/* Filters: Simple Cream-colored links */}
        <div className="pb-3 bg-[#f6f8f6] dark:bg-[#102213]">
          <div className="flex overflow-x-auto scrollbar-hide px-4 gap-6 py-4">
            <button className="flex flex-col items-center justify-center border-b-2 border-[#11d432] text-[#11d432] whitespace-nowrap">
              <p className="text-sm font-bold leading-normal tracking-wide font-['Noto_Serif',_serif]">View All</p>
            </button>
            <button className="flex flex-col items-center justify-center border-b-2 border-transparent text-slate-500 dark:text-[#f3f0e6]/60 whitespace-nowrap">
              <p className="text-sm font-bold leading-normal tracking-wide font-['Noto_Serif',_serif]">Cuisine</p>
            </button>
            <button className="flex flex-col items-center justify-center border-b-2 border-transparent text-slate-500 dark:text-[#f3f0e6]/60 whitespace-nowrap">
              <p className="text-sm font-bold leading-normal tracking-wide font-['Noto_Serif',_serif]">Ambience</p>
            </button>
            <button className="flex flex-col items-center justify-center border-b-2 border-transparent text-slate-500 dark:text-[#f3f0e6]/60 whitespace-nowrap">
              <p className="text-sm font-bold leading-normal tracking-wide font-['Noto_Serif',_serif]">Kerala Coastal</p>
            </button>
            <button className="flex flex-col items-center justify-center border-b-2 border-transparent text-slate-500 dark:text-[#f3f0e6]/60 whitespace-nowrap">
              <p className="text-sm font-bold leading-normal tracking-wide font-['Noto_Serif',_serif]">Nature</p>
            </button>
          </div>
        </div>

        <main className="flex-1 pb-24 overflow-x-hidden">
          {/* Masonry Grid with Gallery-Wall effect (Cream borders) */}
          <div className="grid grid-cols-2 gap-4 p-4 mb-20">
            {/* Item 1 */}
            <div className="flex flex-col p-2 bg-[#f3f0e6] dark:bg-[#f3f0e6] shadow-xl rotate-[-1deg] hover:rotate-0 transition-transform duration-300">
              <div className="w-full bg-center bg-no-repeat aspect-[4/5] bg-cover" data-alt="Fresh vibrant green salad with Kerala spices" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD6o8MiTT1zXZoJ6RqgU9tmDIrUwgl3PBJkmRXoZdNqPAopq5sK6blOyi9jaZvhfBUfZGT_NJd8J6VYHW02C6TIiPqH-4pw4rU74G1CCg1fdip-z4_oLNEaT8HL_4BZAcNLZ5tZyakTfnU9dmf7f4G3Qzqe6DUCGkBAAe5TdK3vTrowVBuhVUDEQTZgmuuUraege4THuI0oEvhmgQOC7XfyhJdR7_mUyXcZ69Yk3BOooWxNsP1KwKeOYJYImFTL4mNcIqqUutiQhyA")'}}></div>
              <p className="mt-2 text-[10px] uppercase tracking-widest text-[#102213] text-center font-bold">Local Greens</p>
            </div>
            {/* Item 2 */}
            <div className="flex flex-col p-2 bg-[#f3f0e6] dark:bg-[#f3f0e6] shadow-xl rotate-[2deg] hover:rotate-0 transition-transform duration-300 mt-8">
              <div className="w-full bg-center bg-no-repeat aspect-[1/1] bg-cover" data-alt="Traditional Kerala seafood curry in clay pot" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBX03Ff5LKkS_pKfQcVFtOYjTs_CoXExoLG12KdgOQ5TIGIObe1uID5jvB6Chra8a2MHrg1lCS57bX9WQKGFhQ4pIVcpmB25vZJJPNupFHS3axPtEO_Zp9YEdPfZwdPRTqeGRCDa3zpkFM53SqoPsOZORsQN7TmoYDmSO-DYbb89HuZ7qu2XgcKhJWCePUdJgNEqnuBiMJQrUnGaZ0Ud1ujArx3GZaOcbqyYlZ5GJG05ZJdiVUl_pK-FbwtzMvPgULE61vwUho7dS4")'}}></div>
              <p className="mt-2 text-[10px] uppercase tracking-widest text-[#102213] text-center font-bold">Coastal Catch</p>
            </div>
            {/* Item 3 */}
            <div className="flex flex-col p-2 bg-[#f3f0e6] dark:bg-[#f3f0e6] shadow-xl rotate-[1deg] hover:rotate-0 transition-transform duration-300 -mt-4">
              <div className="w-full bg-center bg-no-repeat aspect-[4/3] bg-cover" data-alt="Interior of a lush green plant-filled restaurant" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBZWLWcnGspF8BIckfaPzJ_iV2QZJFvDyFy16G4JhveAWvL1pZMkalswmIhSnH7H24JD7wpcapbPiP9GhMK11EGmqpYqeAvKRnQ757NvZ60LXWD2AO-rmZ2_dMN6tO7QTnh835_yof6cKAHj_fh1KtePxM_VdTg-hryHFHybGKae_zSDRfoBLH9p001kWT_Hs1Ij6I8H_T9LaIPIG05pFVsIw72ySxluoVHb5D_Az7Aor5MuEthFwTieNc8lh1XXZlxs_soXvR6iUk")'}}></div>
              <p className="mt-2 text-[10px] uppercase tracking-widest text-[#102213] text-center font-bold">The Veranda</p>
            </div>
            {/* Item 4 */}
            <div className="flex flex-col p-2 bg-[#f3f0e6] dark:bg-[#f3f0e6] shadow-xl rotate-[-2deg] hover:rotate-0 transition-transform duration-300 mt-2">
              <div className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover" data-alt="Close up of traditional Kerala sadhya meal" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCchDHDfCDkw7K6ELRUfQ1jkyf-ZagSDO7h3FTIo99ie8nJTqzF1puwOVNTreumE66-_QraVSvFfV5eR_XHr-KC40l3DFxswe6-ikyn0vnY4XorZzZ3OIg-yjC2pF_qwgV8qP9Vpx3gSnKnXzU2rIy6Mi8jWSJt3k6hAZQSKvnuQ2bxoq__gMbMTNFUmU1JOOHEY9vdxfDl9OdTjOB3rmxfU-oF5MwqkXWFJym141J494169_8QvqaML0xAX6eBgQ23eTOl2oRxK8g")'}}></div>
              <p className="mt-2 text-[10px] uppercase tracking-widest text-[#102213] text-center font-bold">Heritage Feast</p>
            </div>
            {/* Item 5 */}
            <div className="flex flex-col p-2 bg-[#f3f0e6] dark:bg-[#f3f0e6] shadow-xl rotate-[1.5deg] hover:rotate-0 transition-transform duration-300">
              <div className="w-full bg-center bg-no-repeat aspect-[1/1] bg-cover" data-alt="Coconut based drink served in shell" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCnf7E7QI6QKJApMLrUkvzLhdOlfoee_hRMPmEBoaPrE-gyX_RACUf1c3EcuqaB2Dv5witxZhDaVmf4n8O75hcqfaZw8InaL3T6CFhhrTjjdFmiAVUmK0c8z74KWHxpjbVVFzvOyJ__IDP-JUuCbBYFmWCZvSeEo1e8CWl8gU_mXqjFmkXbWorPh-roC1uo0bFnWHFruUs-YIRN2u5BIvs08blgeYa0XhbmSMQmSDUsOTYYe8orabQTdAWZx21PWO2gBUv6LXx-84E")'}}></div>
              <p className="mt-2 text-[10px] uppercase tracking-widest text-[#102213] text-center font-bold">Island Refresh</p>
            </div>
            {/* Item 6 */}
            <div className="flex flex-col p-2 bg-[#f3f0e6] dark:bg-[#f3f0e6] shadow-xl rotate-[-1.5deg] hover:rotate-0 transition-transform duration-300 -mt-6">
              <div className="w-full bg-center bg-no-repeat aspect-[4/5] bg-cover" data-alt="Sunlit tropical garden outdoor seating area" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBcct9nb9Nss5mmsivaWSFib_CqIxCbflUamDAosJPM8jJFr8q4W9tsjCpsdGxpQ2hB3_DPKhLF8FEheJFa_npFAK-EsWMMzGf_1M3Asiq_M1iXqDU0dpkrn2YzqQk2loCXDlDI1L5fD10sC61epddh--Na-TCqCuhnOwZJnIH_obuJoOhi-TT2igXaMZO_2rpRVeVVvfnY85YSZXuYdUaz3I2PNnccHrnfUoC06FlL-wf-nop9kraxde3JMzowzL4z6vnEPE17blU")'}}></div>
              <p className="mt-2 text-[10px] uppercase tracking-widest text-[#102213] text-center font-bold">Sunlight Dining</p>
            </div>
          </div>
          
          {/* Lightbox Placeholder Effect */}
          <div className="hidden fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-center p-6">
            <div className="absolute top-4 right-4 text-white">
              <span className="material-symbols-outlined text-3xl">close</span>
            </div>
            <div className="w-full max-w-md border-[12px] border-[#f3f0e6] shadow-2xl">
              <div className="w-full aspect-[4/5] bg-cover bg-center" data-alt="Expanded view of vibrant food" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuChrN1xyjlmdiqwmINgnQs5ezJFLOR2WlyaVzVoaBhqZLnttNulnMms6uy-kMJsTTpGPrnu2JbuBMhGDio8UoY-2ow3S8V0yPdHNce8gQp5dRvjHVI9eKxQ8vHIsks_QKiSXqseSR-mD58Z55BTY_8qMSL6LvdlRxXJqE9VBR17hI35Kl_I2fOGfvyHRxCmAY9NTaHqZoGyg147uLOutrGiiK-I2Og9f1lOtT5IR5Z7NpzjJyP1DZvSBh-DjjqajC-NMEMFalTSjOs')"}}></div>
            </div>
            <div className="mt-6 text-center">
              <h3 className="text-[#f3f0e6] font-['Noto_Serif',_serif] text-xl font-bold">Harvest Bowl</h3>
              <p className="text-[#f3f0e6]/70 text-sm mt-2">A symphony of Kerala's organic local greens and spices.</p>
            </div>
          </div>
        </main>

        <MobileBottomNav activeTab="gallery" />
      </div>
    </>
  );
}
