import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import MobileBottomNav from '../components/MobileBottomNav';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    alert(`Thank you ${formData.name}! Your message has been received.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
    {/* --- DESKTOP VIEW --- */}
    <div className="hidden md:block min-h-screen pt-24 pb-20 relative">
      {/* Background Decor */}
      <div className="absolute top-40 right-10 w-64 h-64 bg-green-600/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-emerald-900/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold font-serif text-green-400">Contact Us</h1>
          <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto">
            Have questions or feedback? Reach out to us for general inquiries or private dining events.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Reservation Form */}
          <div className="glass-card p-8 sm:p-10 rounded-[2rem] border border-[#213e31] shadow-2xl relative">
            <h2 className="text-3xl font-serif text-white mb-8 border-b border-[#213e31] pb-4">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-[#0a130f] border border-[#213e31] rounded-xl px-4 py-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500/50 transition-all font-light"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[#0a130f] border border-[#213e31] rounded-xl px-4 py-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500/50 transition-all font-light"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Special Requests</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-[#0a130f] border border-[#213e31] rounded-xl px-4 py-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500/50 transition-all font-light resize-none"
                  placeholder="Anniversary, dietary restrictions, window seating preference..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-500 text-white font-medium py-4 px-6 rounded-xl transition-all shadow-[0_0_15px_rgba(74,222,128,0.2)] flex items-center justify-center gap-2 group"
              >
                <span>Send Message</span>
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* Contact Details & Map Info */}
          <div className="space-y-12">
            
            {/* Quick Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               <div className="bg-[#15271f]/80 p-6 rounded-[2rem] border border-[#213e31] flex flex-col items-start gap-4 hover:border-green-500/50 transition-colors cursor-pointer group">
                  <div className="w-12 h-12 bg-green-900/50 rounded-full flex items-center justify-center text-green-400 group-hover:scale-110 transition-transform">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif text-white text-xl mb-1">Direct Call</h3>
                    <p className="text-green-400 text-lg">+91 98765 43210</p>
                  </div>
               </div>
               <div className="bg-[#15271f]/80 p-6 rounded-[2rem] border border-[#213e31] flex flex-col items-start gap-4 hover:border-green-500/50 transition-colors">
                  <div className="w-12 h-12 bg-green-900/50 rounded-full flex items-center justify-center text-green-400">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif text-white text-xl mb-1">Email</h3>
                    <p className="text-gray-400 text-sm">hello@ilakochi.com</p>
                  </div>
               </div>
               <div className="bg-[#15271f]/80 p-6 rounded-[2rem] border border-[#213e31] flex flex-col items-start gap-4 sm:col-span-2">
                  <div className="w-12 h-12 bg-green-900/50 rounded-full flex items-center justify-center text-green-400">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif text-white text-xl mb-2">Hours of Operation</h3>
                    <p className="text-gray-400 font-light">Monday to Friday: 11:00 AM – 11:00 PM</p>
                    <p className="text-gray-400 font-light">Weekends & Holidays: 9:00 AM – 11:30 PM</p>
                  </div>
               </div>
            </div>

            {/* Location Banner */}
            <div className="relative rounded-[2rem] overflow-hidden border border-[#213e31] h-64 shadow-xl group">
               <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop" alt="Location Map background" className="absolute inset-0 w-full h-full object-cover filter brightness-[0.3] group-hover:scale-105 transition-transform duration-[2s]" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                 <div className="flex items-start gap-3">
                   <MapPin className="text-green-400 mt-1 shrink-0" size={24} />
                   <div>
                     <h3 className="font-serif text-white text-2xl mb-2">Fort Kochi Location</h3>
                     <p className="text-gray-300 font-light">123 Coastal Road, Heritage Block<br/>Cochin, Kerala 682001, India</p>
                   </div>
                 </div>
               </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="flex justify-center lg:justify-start pt-4">
              <a 
                href="https://wa.me/1234567890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-4 rounded-xl border-2 border-[#25D366] text-white flex items-center justify-center gap-3 hover:bg-[#25D366] transition-colors font-medium text-lg"
              >
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                Message instantly via WhatsApp
              </a>
            </div>

          </div>
        </div>

      </div>
    </div>

    {/* --- MOBILE VIEW --- */}
    <div className="flex md:hidden relative flex-1 flex-col w-full bg-[#f6f8f6] dark:bg-[#0a1f10] font-['Plus_Jakarta_Sans',_sans-serif] min-h-screen overflow-x-hidden antialiased">
      
      {/* Header / Nav Area */}
      <div className="sticky top-0 z-50 bg-[#0a1f10]/95 backdrop-blur-md border-b border-white/5 px-4 pt-4 pb-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-[#fefce8]/80 hover:text-[#4ade80] transition-colors p-1">
            <span className="material-symbols-outlined text-[28px]">arrow_back</span>
          </Link>
          <h2 className="text-[#fefce8] text-lg font-semibold tracking-wide">Contact Us</h2>
          <button className="text-[#fefce8]/80 hover:text-[#4ade80] transition-colors p-1">
            <span className="material-symbols-outlined text-[28px]">more_vert</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 flex flex-col px-4 py-6 gap-8 pb-28">
        {/* Hero Text */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-[#fefce8] tracking-tight">Visit Ila Kochi</h1>
          <p className="text-[#fefce8]/70 text-sm leading-relaxed max-w-[300px] mx-auto">
            Nestled in the heart of Kerala's backwaters. Experience coastal dining at its finest.
          </p>
        </div>

        {/* Stylized Map */}
        <div className="w-full h-48 rounded-xl overflow-hidden relative shadow-lg border border-[#d4af37]/20 group">
          <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-[#0a1f10]/80 to-transparent"></div>
          <div className="w-full h-full bg-[#1a2f21] relative overflow-hidden">
            <img 
              alt="Stylized map view of Kochi, Kerala" 
              className="w-full h-full object-cover opacity-60 mix-blend-overlay" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9EkbwhrW6U5JixUDOdDWL4wvOBDKAji0KX34y6kiVL7Tda5RFQ04yloIG4SoPREHrQdV4PJIqz_fPyKORZLyrotRm6_3iqAM6quCuucJlfa2q6uCnzMYuL5RAGz1oJ-QI128ERnWRcNpRpbaF2bHgcgcyuOUlU6_2vdYj0LSVsuoCwZLMjtTDfrbniQCf3GtrmaYmUq6iRXH6LE8vhha3wJZpN_jrR3PRpiE9cSFwp3j0X7mZ9Z_ZpZQYbSN7sT_ZBnUudlULCpo"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <span className="material-symbols-outlined text-[#d4af37] text-4xl drop-shadow-md animate-bounce">location_on</span>
            </div>
          </div>
          <div className="absolute bottom-3 left-4 right-4 z-20 flex justify-between items-end">
            <div>
              <p className="text-[#fefce8] font-semibold text-sm">Fort Kochi, Kerala</p>
              <p className="text-[#d4af37] text-xs">Open 11:00 AM - 11:00 PM</p>
            </div>
            <button className="bg-[#4ade80]/20 hover:bg-[#4ade80]/30 text-[#4ade80] border border-[#4ade80]/30 backdrop-blur-sm rounded-full p-2 flex items-center justify-center transition-all">
              <span className="material-symbols-outlined text-[20px]">directions</span>
            </button>
          </div>
        </div>

        {/* Contact Form Card */}
        <div className="bg-white/[0.03] backdrop-blur-[10px] border border-white/[0.05] shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-2xl p-6 space-y-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="material-symbols-outlined text-[#d4af37]">mail</span>
            <h3 className="text-[#fefce8] text-lg font-semibold">Send a Message</h3>
          </div>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="space-y-1">
              <label className="text-xs font-medium text-[#fefce8]/60 uppercase tracking-wider pl-1">Name</label>
              <div className="relative flex items-center">
                <span className="material-symbols-outlined absolute left-0 text-[#fefce8]/40 text-[20px]">person</span>
                <input 
                  className="w-full bg-transparent border-0 border-b border-white/20 text-[#fefce8] placeholder-[#fefce8]/30 focus:border-[#d4af37] focus:ring-0 pl-8 py-2 transition-colors text-sm" 
                  placeholder="Your full name" 
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
            </div>
            
            <div className="space-y-1">
              <label className="text-xs font-medium text-[#fefce8]/60 uppercase tracking-wider pl-1">Message</label>
              <div className="relative flex items-start">
                <span className="material-symbols-outlined absolute left-0 top-2 text-[#fefce8]/40 text-[20px]">edit_note</span>
                <textarea 
                  className="w-full bg-transparent border-0 border-b border-white/20 text-[#fefce8] placeholder-[#fefce8]/30 focus:border-[#d4af37] focus:ring-0 pl-8 py-2 transition-colors text-sm resize-none" 
                  placeholder="Type your message here..." 
                  rows="3"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
            
            <button 
              className="w-full bg-[#4ade80] text-[#0a1f10] font-bold py-3.5 rounded-xl mt-4 hover:bg-[#4ade80]/90 transition-colors shadow-lg shadow-[#4ade80]/20 flex items-center justify-center gap-2" 
              type="submit"
            >
              Send Message
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </button>
          </form>
        </div>

        {/* Direct Contact Actions */}
        <div className="grid grid-cols-2 gap-4">
          <a 
            href="https://wa.me/1234567890" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-2 bg-[#25D366]/10 border border-[#25D366]/20 hover:bg-[#25D366]/20 rounded-xl p-4 transition-all group"
          >
            <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-[#0a1f10] group-hover:scale-110 transition-transform">
              <svg fill="currentColor" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path></svg>
            </div>
            <span className="text-[#25D366] font-medium text-sm">WhatsApp Us</span>
          </a>
          <a 
            href="tel:+919876543210"
            className="flex flex-col items-center justify-center gap-2 bg-white/5 border border-white/10 hover:bg-white/10 rounded-xl p-4 transition-all group"
          >
            <div className="w-10 h-10 rounded-full bg-[#fefce8] flex items-center justify-center text-[#0a1f10] group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined">call</span>
            </div>
            <span className="text-[#fefce8] font-medium text-sm">Call Now</span>
          </a>
        </div>
      </main>

      <MobileBottomNav activeTab="contact" />
    </div>
    </>
  );
}
