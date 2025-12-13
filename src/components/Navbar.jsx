import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-30 bg-black bg-opacity-90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Restaurant Name */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-yellow-400 text-xl font-bold tracking-wide">
              Malnad Shivamogga
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-white hover:text-yellow-400 px-3 py-2 text-sm font-medium transition-colors duration-200">
                Home
              </Link>
              <Link to="/menu" className="text-white hover:text-yellow-400 px-3 py-2 text-sm font-medium transition-colors duration-200">
                Menu
              </Link>
              <Link to="/catering" className="text-white hover:text-yellow-400 px-3 py-2 text-sm font-medium transition-colors duration-200">
                Catering
              </Link>
              <Link to="/about" className="text-white hover:text-yellow-400 px-3 py-2 text-sm font-medium transition-colors duration-200">
                About
              </Link>
              <Link to="/contact" className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-yellow-500 transition-colors duration-200">
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-yellow-400 hover:text-yellow-500 focus:outline-none transition-colors duration-200"
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
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black bg-opacity-95 rounded-lg mt-2 border border-yellow-400">
              <Link 
                to="/" 
                className="text-white hover:text-yellow-400 block px-3 py-2 text-base font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/menu" 
                className="text-white hover:text-yellow-400 block px-3 py-2 text-base font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Menu
              </Link>
              <Link 
                to="/catering" 
                className="text-white hover:text-yellow-400 block px-3 py-2 text-base font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Catering
              </Link>
              <Link 
                to="/about" 
                className="text-white hover:text-yellow-400 block px-3 py-2 text-base font-medium transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="bg-yellow-400 text-black block px-3 py-2 text-base font-medium rounded-full text-center hover:bg-yellow-500 transition-colors duration-200"
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