"use client";
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Hamburger & kapatma ikonları


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  
    return (
      <header className="fixed top-0 left-0 w-full bg-green-700 text-white py-4 px-4 shadow-md z-50">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            <a href="#">Otaci | Holistic Hijama & Wellness</a>
          </h1>
  
          {/* Hamburger ikonu - sadece mobilde görünür */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
  
          {/* Navigasyon menüsü */}
          <nav
            className={`
              absolute md:static top-full left-0 w-full md:w-auto bg-green-700 md:bg-transparent
              flex flex-col md:flex-row items-center gap-4 md:gap-6 p-4 md:p-0 transition-all duration-300
              ${menuOpen ? 'block' : 'hidden md:flex'}
            `}
          >
            <a href="#about" className="hover:underline" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#benefits" className="hover:underline" onClick={() => setMenuOpen(false)}>Benefits</a>
            <a href="#services" className="hover:underline" onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#FAQ" className="hover:underline" onClick={() => setMenuOpen(false)}>FAQ</a>
  
            <a
              href="#contact"
              className="bg-white text-green-700 px-4 py-2 rounded-full font-semibold hover:bg-green-100 transition"
              onClick={() => setMenuOpen(false)}
            >
              Book Now
            </a>
          </nav>
        </div>
      </header>
    );
  };
  
  export default Header;
  