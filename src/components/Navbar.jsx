import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="hidden md:block relative z-50 px-4 sm:px-6 lg:px-8 py-4 border-b border-primary/10 backdrop-blur-sm bg-background-dark/80">
      <div className="flex items-center justify-between max-w-7xl mx-auto w-full">
        {/* Left: Mobile Menu Toggle & Desktop Links */}
        <div className="flex-1 flex items-center justify-start gap-8">
          <button 
            className="lg:hidden text-primary p-1 -ml-2 flex items-center justify-center hover:bg-primary/10 rounded-full transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-3xl">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
          <nav className="hidden lg:flex items-center gap-8">
            <Link className="text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors whitespace-nowrap" to="/">Home</Link>
            <Link className="text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors whitespace-nowrap" to="/menu">Menu</Link>
            <Link className="text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors whitespace-nowrap" to="/about">Our Story</Link>
          </nav>
        </div>
        
        {/* Centered Logo */}
        <div className="flex-shrink-0 flex justify-center">
          <Link to="/" className="flex flex-col items-center group" onClick={() => setIsMobileMenuOpen(false)}>
            <img 
              src="/logo.png" 
              alt="Ila Kochi Logo" 
              className="h-16 sm:h-20 lg:h-28 object-contain group-hover:scale-105 transition-transform" 
            />
          </Link>
        </div>
        
        {/* Right Links & Button */}
        <div className="flex-1 flex items-center justify-end gap-2 sm:gap-4 lg:gap-8">
          <nav className="hidden lg:flex items-center gap-8">
            <Link className="text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors whitespace-nowrap" to="/gallery">Experience</Link>
            <Link className="text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors whitespace-nowrap" to="/reviews">Reviews</Link>
            <Link className="text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors whitespace-nowrap" to="/contact">Contact</Link>
          </nav>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-background-dark border-b border-primary/20 shadow-2xl lg:hidden flex flex-col py-6 px-8 gap-6 animate-fade-in-down">
          <Link onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold tracking-widest uppercase hover:text-primary transition-colors" to="/">Home</Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold tracking-widest uppercase hover:text-primary transition-colors" to="/menu">Menu</Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold tracking-widest uppercase hover:text-primary transition-colors" to="/about">Our Story</Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold tracking-widest uppercase hover:text-primary transition-colors" to="/gallery">Experience</Link>
          <Link onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold tracking-widest uppercase hover:text-primary transition-colors" to="/contact">Contact</Link>
        </div>
      )}
    </header>
  );
}
