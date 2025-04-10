// components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-green-600">
          HijamaHealing
        </Link>

        {/* Navbar Links */}
        <div className="space-x-6">
          <Link href="#services" className="text-lg text-gray-700 hover:text-green-600 transition">
            Services
          </Link>
          <Link href="#about" className="text-lg text-gray-700 hover:text-green-600 transition">
            About Us
          </Link>
          <Link href="#contact" className="text-lg text-gray-700 hover:text-green-600 transition">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
