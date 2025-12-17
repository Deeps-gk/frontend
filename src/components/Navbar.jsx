import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-30 bg-black/95 backdrop-blur-sm border-b border-emerald-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Restaurant Name */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-3">
              <Logo size={32} />
              <span className="font-serif text-xl font-bold tracking-wide" style={{
                background: 'linear-gradient(135deg, #B8860B 0%, #D4AF37 50%, #F4E4BC 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Malnad Shivamogga
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-gray-300 hover:text-emerald-400 px-3 py-2 text-sm font-medium transition-colors duration-200">
                Home
              </Link>
              <Link to="/menu" className="text-gray-300 hover:text-emerald-400 px-3 py-2 text-sm font-medium transition-colors duration-200">
                Menu
              </Link>
              <Link to="/events" className="text-gray-300 hover:text-emerald-400 px-3 py-2 text-sm font-medium transition-colors duration-200">
                Events
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-emerald-400 px-3 py-2 text-sm font-medium transition-colors duration-200">
                About
              </Link>
              <Link to="/contact" className="bg-emerald-700 hover:bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200" style={{ border: '1px solid rgba(212, 175, 55, 0.2)' }}>
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-emerald-400 hover:text-emerald-300 focus:outline-none transition-colors duration-200"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95 backdrop-blur-sm rounded-lg mt-2 border border-emerald-700/50">
              <Link 
                to="/" 
                className="text-gray-300 hover:text-emerald-400 block px-3 py-2 text-base font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/menu" 
                className="text-gray-300 hover:text-emerald-400 block px-3 py-2 text-base font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Menu
              </Link>
              <Link 
                to="/events" 
                className="text-gray-300 hover:text-emerald-400 block px-3 py-2 text-base font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Events
              </Link>
              <Link 
                to="/about" 
                className="text-gray-300 hover:text-emerald-400 block px-3 py-2 text-base font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="bg-emerald-700 hover:bg-emerald-600 text-white block px-3 py-2 text-base font-medium rounded-full text-center transition-colors duration-200"
                style={{ border: '1px solid rgba(212, 175, 55, 0.2)' }}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;