import React from 'react';
import { Star, Quote, Instagram } from 'lucide-react';

const reviews = [
  { id: 1, name: 'Anjali Menon', date: 'October 2023', rating: 5, text: 'Absolutely phenomenal. The Sadhya took me straight back to my grandmother’s house in Palakkad. Every dish was authentic and the ambiance is just stunning.' },
  { id: 2, name: 'David Thompson', date: 'November 2023', rating: 5, text: 'As a tourist, this was the best introduction to Kerala cuisine. The staff explained every dish, and the Karimeen Pollichathu was out of this world!' },
  { id: 3, name: 'Rahul Varma', date: 'December 2023', rating: 4, text: 'Great food, beautiful decor. A bit on the pricier side, but the quality of ingredients and the service make it totally worth it for a special occasion.' },
];

const igPosts = [
  { id: 1, src: 'https://images.unsplash.com/photo-1626776876729-bab4369ecb13?q=80&w=500&auto=format&fit=crop', likes: 342, comments: 28 },
  { id: 2, src: 'https://images.unsplash.com/photo-1544025162-811114215b3c?q=80&w=500&auto=format&fit=crop', likes: 891, comments: 56 },
  { id: 3, src: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=500&auto=format&fit=crop', likes: 456, comments: 12 },
  { id: 4, src: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?q=80&w=500&auto=format&fit=crop', likes: 231, comments: 8 },
];

export default function Reviews() {
  return (
    <div className="min-h-screen pt-24 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold font-serif text-green-400">Guest Experiences</h1>
          <p className="max-w-2xl mx-auto text-gray-400 font-light text-lg mb-8">
            Don't just take our word for it. Here is what our guests have to say about their culinary journey at Ila Kochi.
          </p>
          <div className="flex justify-center items-center gap-2 text-green-400">
            <div className="flex">
              {[...Array(5)].map((_, i) => <Star key={i} className="fill-green-400" size={24} />)}
            </div>
            <span className="font-bold text-xl ml-2 text-white">4.9/5</span>
            <span className="text-gray-400 ml-1">(300+ Reviews)</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {reviews.map((review) => (
            <div key={review.id} className="glass-card p-8 rounded-[2rem] relative mt-8 pt-12 hover:-translate-y-2 transition-transform duration-300">
              <div className="absolute -top-6 left-8 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-[#0a130f] shadow-lg">
                <Quote size={20} className="fill-[#0a130f]" />
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className={`${i < review.rating ? 'text-green-400 fill-green-400' : 'text-gray-600'}`} />
                ))}
              </div>
              <p className="text-gray-300 font-light leading-relaxed mb-6 italic">"{review.text}"</p>
              <div className="flex items-center justify-between border-t border-[#213e31] pt-4 mt-auto">
                <h4 className="font-serif text-white font-medium">{review.name}</h4>
                <span className="text-sm text-gray-500">{review.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof Section (Instagram Feed) */}
        <div className="border-t border-[#213e31]/50 pt-20">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-serif text-white mb-2 flex items-center gap-3">
                <Instagram className="text-green-500" size={32} />
                <span>Join the Community</span>
              </h2>
              <p className="text-gray-400 font-light">Tag us at @ilakochi to be featured on our wall.</p>
            </div>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border border-green-500 text-green-400 hover:bg-green-500 hover:text-white transition-all font-medium flex items-center gap-2 group"
            >
              <Instagram size={18} />
              Follow Us
            </a>
          </div>

          {/* IG Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {igPosts.map((post) => (
              <a 
                key={post.id} 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative group rounded-xl overflow-hidden aspect-square block border border-[#213e31]"
              >
                <img 
                  src={post.src} 
                  alt="Instagram post" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
                  <div className="flex items-center gap-2 text-white font-medium">
                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="white"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                    {post.likes}
                  </div>
                  <div className="flex items-center gap-2 text-white font-medium">
                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="white"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                    {post.comments}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
