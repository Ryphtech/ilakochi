import React from 'react';
import { Link } from 'react-router-dom';
import MobileBottomNav from '../components/MobileBottomNav';

export default function About() {
  return (
    <>
      {/* --- DESKTOP VIEW --- */}
      <div className="hidden md:block flex-1 w-full">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000" 
          data-alt="Serene Kochi backwaters with traditional wooden boats at sunset" 
          style={{ backgroundImage: 'linear-gradient(0deg, rgba(13, 26, 13, 1) 0%, rgba(13, 26, 13, 0.2) 50%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuD5OIyFY9EdcACjO4u3iJoFjNDWgBlpZ6s2UAHz5D0toQ44NcZ-Qn_pth5UBNkk74iUo2FUJg3mKqsSfepDn18i0wrd3Pwty2RQnpcjiDC5IlOWX6_n0-N21vLtWMhu36mCQvmZAwEdsOqtDcrGjczzlk0REe7f6Gx4TI0I_vE484W0NZ0VTe8jWTYmmflmIvsyMI0BdeyUG1KyhjwLGXIr07B3Zw4UEqh06bScFERcLtDiFyLxitg2MjOFQ35owi1bS8bTECAr0Xc")' }}
        ></div>
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-primary text-5xl md:text-7xl font-black mb-6 tracking-tighter">Our Story</h1>
          <p className="text-cream max-w-2xl text-lg md:text-xl font-light leading-relaxed">
            A sanctuary of flavor where the Arabian Sea meets the verdant soul of Kerala.
          </p>
        </div>
      </section>

      {/* Heritage Section */}
      <section className="py-24 px-10 md:px-40 bg-background-dark">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-8">
            <span className="text-primary font-bold tracking-widest uppercase text-sm">Since 1924</span>
            <h2 className="text-4xl md:text-5xl font-black leading-tight text-cream">The Heritage of Ila</h2>
            <p className="text-cream/70 text-lg leading-relaxed">
                Named after the Malayalam word for 'leaf', Ila Kochi stands as a testament to the century-old culinary traditions of the Malabar coast. Our restaurant is housed in a restored colonial warehouse, where the scent of aged teak blends with the aroma of freshly ground cardamom.
            </p>
            <p className="text-cream/70 text-lg leading-relaxed">
                We honor the ancient techniques of slow-cooking, clay-pot seasoning, and open-fire roasting that have defined Kerala's kitchens for generations.
            </p>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 text-primary font-bold group">
                <span>Explore Our Archive</span>
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 h-[500px]">
            <div 
              className="rounded-xl overflow-hidden shadow-2xl bg-cover bg-center h-full translate-y-8" 
              data-alt="Intricate traditional wooden architecture of a Kerala home" 
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAZ7lenZd1qpzA72sXKn1PIHSyH84XhHbpLeKrDmq3YGtAPAvabntNTE3K2aZhGAjs87-Br6IPZOlIaDHqGHaud7IpcjtzhyhMjqfsEMXxJng61QJ_ih3j6W7UmQrgseAQan5Ii2yh5_fKsDPA9BaadNAneXmRj6VyI9mP_5KbYTN_tsuWx57SgSyEcJ2sXkc8CGwmIawSv6g4M30RTFhFEb99eu01kvhbS0BF9pgASiZrVWwLpE4895yHZKn3Td9lSb3vA-e-FU_k")' }}
            ></div>
            <div 
              className="rounded-xl overflow-hidden shadow-2xl bg-cover bg-center h-full -translate-y-8" 
              data-alt="Fine dining table setting with golden accents and lush plants" 
              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDTN7kEsrbyhDujvowTccGnCIhKxDW4rW49jA54y2xL_pJm9amJP8kGBtDl-ozoCfOZyT1sDVJpKlduq9ZKtEjEMef6Kb8FrrCduJKxJ0tDSvECdytGRN2CCqFhVqzdMowWuS-fxYTS0Iz7cxglUqT0COQ7PcawdkvaZTiBqqsI2fBoKsk-Me5dF_cGi_4P9MWEDv-yQdXamprVogrWtlJQSg5oXg5dNJ34nojraiDhlevYaKx1nxQFivMaSDxtj5ZzZLONZzX8gcw")' }}
            ></div>
          </div>
        </div>
      </section>

      {/* The Chef Section */}
      <section className="py-24 bg-forest-accent/30">
        <div className="max-w-[1200px] mx-auto px-10">
          <div className="flex flex-col md:flex-row gap-16 items-center bg-background-dark p-12 rounded-3xl border border-primary/10">
            <div className="w-full md:w-1/3 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
              <img 
                alt="Chef" 
                className="w-full h-full object-cover" 
                data-alt="Portrait of a visionary chef in a professional kitchen" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9gt8QF3FPdSgSzYl6PBxMQKiMii3q6jAMDPCIqgd2CfsEatFOuxXfKQIGOO5DDMYma1Em8CuWXQUX3okZA-geRl7Ot9xn7edMzu4T7k1E-e9FOOFf5RrXh-j605NGWR2Pyj3yfxCtrZX3huWYJAm-rQbxYJDcw1F3XfDckBBtDGoQa5qSrocDRB1GgfoOmiCg60QDxtLiRdpFh6EssizdZpjIc1vh45GiNT9IX85fnAVOuuyQt9eAQK5XeA9h3rLEuYOI0o2DfFI"
              />
            </div>
            <div className="w-full md:w-2/3 flex flex-col gap-6">
              <h2 className="text-primary text-4xl font-black">The Visionary</h2>
              <h3 className="text-2xl font-bold text-cream">Chef Arun Nair</h3>
              <p className="text-cream/70 text-lg italic leading-relaxed">
                  "Cooking is not just about ingredients; it's about the memory of the land. At Ila, we serve the geography of Kochi on a plate."
              </p>
              <p className="text-cream/70 text-base leading-relaxed">
                  With over two decades of experience in Michelin-starred kitchens across Europe, Chef Arun returned to his roots to rediscover the nuances of South Indian spice blends. His philosophy focuses on minimal intervention and maximum flavor.
              </p>
              <div className="flex gap-8 border-t border-primary/20 pt-8 mt-4">
                <div>
                  <p className="text-primary font-bold text-2xl">20+</p>
                  <p className="text-cream/50 text-xs uppercase tracking-widest">Years of Mastery</p>
                </div>
                <div>
                  <p className="text-primary font-bold text-2xl">12</p>
                  <p className="text-cream/50 text-xs uppercase tracking-widest">Awards Won</p>
                </div>
                <div>
                  <p className="text-primary font-bold text-2xl">0</p>
                  <p className="text-cream/50 text-xs uppercase tracking-widest">Waste Philosophy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-24 px-10 md:px-40 bg-background-dark overflow-hidden relative">
        <div className="max-w-[1200px] mx-auto text-center mb-16 relative z-10">
          <h2 className="text-primary text-4xl md:text-5xl font-black mb-6">Sustainable Sourcing</h2>
          <p className="text-cream/70 max-w-3xl mx-auto text-lg">
              We believe that fine dining should nourish the Earth as much as it nourishes the soul. 90% of our ingredients are sourced within a 50-mile radius of the restaurant.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto relative z-10">
          <div className="bg-forest-accent p-8 rounded-2xl border border-primary/5 hover:border-primary/30 transition-all">
            <span className="material-symbols-outlined text-primary text-4xl mb-4">tsunami</span>
            <h4 className="text-xl font-bold text-cream mb-3">Responsible Sea-Farming</h4>
            <p className="text-cream/60 text-sm leading-relaxed">We partner with local fishermen who use traditional pole-and-line methods to protect our marine ecosystems.</p>
          </div>
          
          <div className="bg-forest-accent p-8 rounded-2xl border border-primary/5 hover:border-primary/30 transition-all">
            <span className="material-symbols-outlined text-primary text-4xl mb-4">eco</span>
            <h4 className="text-xl font-bold text-cream mb-3">Organic Homesteads</h4>
            <p className="text-cream/60 text-sm leading-relaxed">Our vegetables come from certified organic homestead farms where ancient permaculture techniques are still practiced.</p>
          </div>
          
          <div className="bg-forest-accent p-8 rounded-2xl border border-primary/5 hover:border-primary/30 transition-all">
            <span className="material-symbols-outlined text-primary text-4xl mb-4">recycling</span>
            <h4 className="text-xl font-bold text-cream mb-3">Closed-Loop Waste</h4>
            <p className="text-cream/60 text-sm leading-relaxed">Every scrap of organic waste from our kitchen is composted and returned to the very soil that grows our produce.</p>
          </div>
        </div>
      </section>

      {/* Visual Gallery */}
      <section className="pb-24 px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[400px]">
          <div 
            className="bg-cover bg-center rounded-xl" 
            data-alt="Fresh spices being ground in a stone mortar" 
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC_Z_QKyoOIt6fvG3M56ULosBc0v5ZwTVjVeO5cIjzGo9bY88VArW-uWBB_0t-8H17yIE_INIcViPs-c_WjJRNUpxOhsoLS1Rk5UT3IBYx0NfN90HBljZ9TqDMgyyCV-V3SNctQbN7EGHEVFU48Nr5WOL181D8tjrDIs5My5Y9mQD1ktKbUF2RuiuFlOmkLwkOW7fqHwsk9JCddws4ssD8IoXhTQOASUa1HF3lwdqlwQS6iw75_u15AVQCqUuFg2dGm2-GYPRL0k9g")' }}
          ></div>
          <div 
            className="bg-cover bg-center rounded-xl md:mt-12" 
            data-alt="Artisanal cocktails with tropical fruit garnishes" 
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAVGAui5r3GqqHAK0U5o-uOSxcqB-N_YYUTc8UJWr746BJemfSgkAnfic7fYBtKuZjiAVM3xb2y3ibO8G8zL4IfEnIgQK_AHRlQQiqc0I5YDG_E1easM4-C7fcTIdPoVE3027cxTAKezSHp93QuipEagTAIfFHGPjr_LUtv9dvqUs4g-iwZqGl8G2_IabT-hwilKo0X5pjRqNzQoA6SKyJqEO3eTMb9ep4vZF2a7xNDfrS3zSeFHyffFGOmwavFk66qMRHCYdKV3k8")' }}
          ></div>
          <div 
            className="bg-cover bg-center rounded-xl" 
            data-alt="Traditional Kerala fish curry served in a clay pot" 
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBx4t0mk3XCfhLAg60fzsFKZDQhaVXd_pId12l3j06WEL_q_z84tjr1meQVeCN6cy5tjash-ww-VfRdDrFNroFqOJIVN22SR8ZMwh59z63D15y1W9c1lx7FMMGrEPYUaecg4ePqIsQdkt0FO2yjtDrVCpMS8Ee2OsAdCKNBgJhlYTP15UTcKPRgJdvULLdekqdXA308Q4Rcs5POdkk_YPHBd0EMosG6kbSNP6MlR0GCUPvCwRMD6-y9UbhYsC-Cxai1C8cdv_WQ6Kg")' }}
          ></div>
          <div 
            className="bg-cover bg-center rounded-xl md:mt-12" 
            data-alt="Atmospheric night view of the restaurant lighting" 
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDvDSV9MAzQBuU6d87xK16olc7HINjqFYlGVruveLhwNaTOrLXlOIt56qun_5GjNiDOrc6Uren6_yO1ZqVQnwyqbIOvdUfvfNV0oJ86qKAFEUBsBv0-0hj94aqUziapJ0HOi3zffu73dJQNDtsrt6oY5YRAJO76ukvDX-Kk848_4kjt6UBShgt1ECPBSV8EDbE9d8lXY2BB9olnKPbrYfLQFadNzebeHiajj7PO65rxk8gsOcmgzWXmQERtaESPBhsWkJ0p_nL_6U4")' }}
          ></div>
        </div>
      </section>
      </div>

      {/* --- MOBILE VIEW (Our Story) --- */}
      <div className="flex md:hidden relative flex-1 flex-col w-full shadow-2xl overflow-hidden bg-[#f6f8f6] dark:bg-[#102213] font-['Noto_Serif',_serif]">
        {/* Header */}
        <div className="sticky top-0 z-20 flex items-center bg-[#f6f8f6]/95 dark:bg-[#102213]/95 backdrop-blur-sm p-4 justify-between border-b border-[#102213]/10 dark:border-white/10">
          <Link to="/" className="text-slate-900 dark:text-white flex size-12 shrink-0 items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
            <span className="material-symbols-outlined text-[24px]">arrow_back</span>
          </Link>
          <h2 className="text-slate-900 dark:text-[#f3f0e6] font-bold leading-tight flex-1 text-center uppercase tracking-widest text-sm">Our Story</h2>
          <div className="flex w-12 items-center justify-end">
            <button className="flex size-12 cursor-pointer items-center justify-center rounded-full bg-transparent text-slate-900 dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
              <span className="material-symbols-outlined text-[24px]">share</span>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-1 pb-24">
          {/* Hero Section */}
          <div className="@container">
            <div className="px-0 pb-4">
              <div 
                className="relative flex flex-col justify-end overflow-hidden bg-[#102213] h-[400px] bg-cover bg-center" 
                data-alt="Lush green Kerala backwaters with coconut trees reflecting in water" 
                style={{backgroundImage: 'linear-gradient(180deg, rgba(16, 34, 19, 0) 0%, rgba(16, 34, 19, 0.4) 50%, rgba(16, 34, 19, 1) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBM60Gh80AvvcvbOgMkncBinTSqvWLuvQXRrUi_cf3Sud52TcTFijjUWbJJSOqY01BGE1d16DgzRR8yWjA1CfMUlQ55G90u2JM9knMI8Q8a-9SrF9JmU53arjBUYs7u6R3-O0TQlwr63XLStdEAX7m5RkXtdH_3KImSPRi3iIGsbZKFT-3PO1qxyuk-vHw-HikXWf-zK7qwWN4sFvbL9PQHx1-9Z5fY8UtkU-f0u7tn1HVQd0Se31tO7PyRqmKyQD_2TvGVYnIknr0")'}}
              >
                <div className="relative z-10 flex flex-col p-6 items-center text-center">
                  <span className="text-[#11d432] text-xs font-bold tracking-[0.2em] uppercase mb-2">Since 1998</span>
                  <h1 className="text-[#f3f0e6] text-4xl font-bold leading-tight mb-2 drop-shadow-md">
                    Rooted in<br/><span className="italic text-[#11d432]">Nature</span>
                  </h1>
                  <div className="w-12 h-0.5 bg-[#d4af37] mt-4 mb-2"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Intro Text */}
          <section className="px-6 py-4 text-center">
            <h2 className="text-slate-900 dark:text-[#f3f0e6] text-2xl font-bold leading-tight mb-4">Welcome to Ila Kochi</h2>
            <p className="text-slate-600 dark:text-gray-300 text-base font-normal leading-relaxed">
              Nestled in the heart of Kerala, Ila Kochi is a celebration of coastal flavors and the serene beauty of the backwaters. Our culinary journey is inspired by the lush landscapes and rich heritage of God's Own Country.
            </p>
            <div className="flex justify-center my-8">
              <span className="material-symbols-outlined text-[#d4af37] text-2xl">spa</span>
            </div>
          </section>

          {/* Image Grid */}
          <section className="px-4 space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="aspect-[3/4] rounded-xl overflow-hidden relative group">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-500 z-10"></div>
                <div 
                  className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                  data-alt="Close up of fresh green tropical leaves with water droplets" 
                  style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB16CkRf4o0Hg78qTqEnZEULkfBuxTbnokSZpXMLhaGHvFIc5sfIhoEYH_282jfC6l-2kU0Qwx8_FdQNatXNNQFzqnXrkLnm4yuIERKokmqwvePcseAbqwqviTe7-Q-NzxaUjyJCyjMkCXInc2MT8v8sHkmqwHMG8qlRMI_kEpSyf9SsuB0D1gdno4E0Q4woae9dl9guJHdzCSVuQhS2DQ7Hnid3jyiZ98hgLUXKjiLTA6FvLmiflHYjMRSGR9Q2Jrbur4g6HjUD7M")'}}
                ></div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="aspect-square rounded-xl overflow-hidden relative group">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-500 z-10"></div>
                  <div 
                    className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                    data-alt="Traditional Kerala clay pot cooking with steam rising" 
                    style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAzgep07gWfmUE7iI4p7LPRjPruQ5-eAugIlRmnWsIN_LmJsCFzQ23p0z1pCVhM_Tgo-L-4SLzdMTpqDNVqSu8doBOXzxNd3wgVjRzbfR8GtwqznhnSnUKzLviZUksBXYmbqHS13w5--1C3cT-MIgZv4UFVLtZ1bVJlyQ-frSh0RiPUfTi-WamL8us-TNVxnXvNSd3y4YNLJ8rAVal8XMVyjcpTtnmCfnQw6qjxBs1TX9TTB7FhNAowc869p_H-vmIbhzCGpprLyzg")'}}
                  ></div>
                </div>
                <div className="flex-1 bg-[#f6f8f6] dark:bg-white/5 rounded-xl p-4 flex flex-col justify-center items-center text-center border border-[#11d432]/10">
                  <h3 className="text-[#11d432] text-3xl font-bold mb-1">25+</h3>
                  <p className="text-xs text-slate-500 dark:text-gray-400 uppercase tracking-wider">Years of<br/>Service</p>
                </div>
              </div>
            </div>
          </section>

          {/* The Chef Section */}
          <section className="mt-12 px-6 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-12 bg-gradient-to-b from-transparent via-[#d4af37] to-transparent"></div>
            <div className="bg-[#f6f8f6] dark:bg-[#152b19] rounded-2xl p-6 border border-[#11d432]/5 shadow-lg">
              <div className="flex flex-col items-center">
                <div className="size-24 rounded-full border-2 border-[#11d432] p-1 mb-4">
                  <div 
                    className="w-full h-full rounded-full bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-500" 
                    data-alt="Portrait of an experienced chef in white uniform" 
                    style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCjNsWpN_nHjbJmHs_yOyUZVEZxYBnRYARFOtlttMkd0hTNEr6fhfItgdDIl9tqOag6Nb-pbQlShVKoj00R5YVMGfqrypHFJFcRrcqXY78k0ywVcX0zf-AMAL-oGFuRajlrjTBPwrkH01wYxt1HvrfmjslxKCgqWTj0Yh-DoiYhrylF3P1S1p4LY49qjvskZFfZTKWmYhIZgPkwOY2WqD7t7n3rJUWjiwL_MnUt0ijqCIBtetTAGOyPS4Xx2ftZn5DzeaCnkSooTDs")'}}
                  ></div>
                </div>
                <h3 className="text-slate-900 dark:text-[#f3f0e6] text-xl font-bold mb-1">Chef Anjali Nair</h3>
                <p className="text-[#11d432] text-xs uppercase tracking-widest mb-4">Head of Culinary</p>
                <p className="text-center text-slate-600 dark:text-gray-300 text-sm leading-relaxed italic">
                  "Cooking is not just about ingredients, it's about capturing the soul of the land. Every dish we serve carries the whispers of the Kerala breeze."
                </p>
              </div>
            </div>
          </section>

          {/* Philosophy Section */}
          <section className="mt-12 relative h-[500px] flex items-center justify-center overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-fixed" 
              data-alt="Traditional houseboat on Kerala backwaters at sunset" 
              style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDqPjaU_QWajb3hiwLAhwcFTGzpfy9td0rr3BITETzsGddQv4cPHICArmGyELOdARb7mocjmIWS53zwoNA5TmTrkm4zghVSqwvQRttfqwdGjaDlSOZjdGIbKjag32mc6SxxCJZifeYhZCPPseriv2RWFf_3dOnVH4YbbFZG-WnR0FbH_ejv7UflpEoM43nBeTwQHfQWveZZncmi2GCYt0Bxv9eYDusoYDiqyko5lz1tv9arkVUwJaakHqr4WYW8AlRpPM7JsTicWms")'}}
            ></div>
            <div className="absolute inset-0 bg-[#102213]/80"></div>
            <div className="relative z-10 max-w-xs text-center p-6 border border-white/10 bg-white/5 backdrop-blur-sm rounded-xl">
              <span className="material-symbols-outlined text-[#11d432] text-4xl mb-4">eco</span>
              <h3 className="text-[#f3f0e6] text-2xl font-bold mb-3">Sustainable &amp; Local</h3>
              <p className="text-gray-200 text-sm leading-relaxed mb-6">
                We source 90% of our ingredients from local farmers and fishermen within a 50km radius. Sustainability isn't just a buzzword for us; it's our way of life.
              </p>
              <button className="px-6 py-2 bg-[#11d432] text-[#102213] text-sm font-bold rounded-full hover:bg-white transition-colors">
                View Sources
              </button>
            </div>
          </section>

          {/* Location */}
          <section className="py-12 px-6 bg-[#f6f8f6] dark:bg-[#102213]">
            <div className="flex flex-col items-center text-center space-y-4">
              <span className="material-symbols-outlined text-[#d4af37] text-3xl">deck</span>
              <h2 className="text-slate-900 dark:text-[#f3f0e6] text-2xl font-bold">Visit Us</h2>
              <p className="text-slate-600 dark:text-gray-400 text-sm">
                12/45A Fort Kochi Beach Road,<br/>Kochi, Kerala 682001
              </p>
              <div className="w-full h-48 rounded-xl overflow-hidden mt-6 bg-gray-800 relative group cursor-pointer">
                <img 
                  alt="Map showing location in Fort Kochi" 
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" 
                  data-location="Kochi, Kerala" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCl11lSFnaB9ra5xrermkT34xu1P-KrUdvm115uXqRs9bsCPnPDwc1Y5SJ5px3yOtdZGSoWzRJC4uKr8n0Za6_S_xTxU_FYazALSJpT9QYJ9VEPzFLuGhUygXxvY7kVQl-A0DwSK6DR9FRTQAn6aeNCGex5U3vQgCL5c_Mm938Hbs5X1FewgkhwqsSaOdO8UULIpqHp8qacHAovIUcP-6B8oSnnZLXoy40ceKoTYFPqs_prlim91J7N4QGQPmHl-kV2tiFo9EG93Q8"
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="bg-[#102213]/80 text-[#11d432] px-4 py-2 rounded-full text-xs font-bold backdrop-blur-md border border-[#11d432]/20">
                    Get Directions
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Footer Quote */}
          <div className="px-8 pb-8 text-center bg-[#f6f8f6] dark:bg-[#102213]">
            <p className="text-[#d4af37] font-['Noto_Serif',_serif] italic text-lg">"Where the backwaters meet the plate."</p>
          </div>
        </main>
        
        <MobileBottomNav activeTab="about" />
      </div>
    </>
  );
}
