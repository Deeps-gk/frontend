import { Link } from "react-router-dom";

function Events() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-emerald-950 text-white pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6" style={{
            background: 'linear-gradient(135deg, #B8860B 0%, #D4AF37 50%, #F4E4BC 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Events & Functions
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Celebrate intimate moments with authentic Malnad cuisine. 
            We specialize in small family functions with traditional flavors and warm hospitality.
          </p>
        </div>

        {/* Event Types */}
        <div className="mb-12 animate-fade-in-up animation-delay-300">
          <h2 className="font-serif text-3xl font-semibold text-center mb-8 text-emerald-400">
            Small Functions We Specialize In
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-800/90 to-emerald-900/30 backdrop-blur-sm p-6 rounded-2xl border-2 border-emerald-700/50 hover:border-emerald-600 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-900/20">
              <h3 className="font-serif text-xl font-semibold mb-3" style={{ color: '#D4AF37' }}>Housewarming Ceremonies</h3>
              <p className="text-gray-300">Auspicious beginnings with blessed traditional meals for family and close friends</p>
            </div>
            <div className="bg-gradient-to-br from-gray-800/90 to-emerald-900/30 backdrop-blur-sm p-6 rounded-2xl border-2 border-emerald-700/50 hover:border-emerald-600 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-900/20">
              <h3 className="font-serif text-xl font-semibold mb-3" style={{ color: '#D4AF37' }}>Small Birthday Gatherings</h3>
              <p className="text-gray-300">Intimate birthday celebrations with authentic Malnad family-style cuisine</p>
            </div>
            <div className="bg-gradient-to-br from-gray-800/90 to-emerald-900/30 backdrop-blur-sm p-6 rounded-2xl border-2 border-emerald-700/50 hover:border-emerald-600 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-900/20">
              <h3 className="font-serif text-xl font-semibold mb-3" style={{ color: '#D4AF37' }}>Religious Functions</h3>
              <p className="text-gray-300">Sacred small ceremonies with traditional vegetarian offerings</p>
            </div>
            <div className="bg-gradient-to-br from-gray-800/90 to-emerald-900/30 backdrop-blur-sm p-6 rounded-2xl border-2 border-emerald-700/50 hover:border-emerald-600 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-900/20">
              <h3 className="font-serif text-xl font-semibold mb-3" style={{ color: '#D4AF37' }}>Family Festivals</h3>
              <p className="text-gray-300">Traditional festival meals for small family gatherings</p>
            </div>
          </div>
        </div>

        {/* Services Offered */}
        <div className="grid md:grid-cols-2 gap-12 mb-12 animate-fade-in-up animation-delay-600">
          <div className="bg-gradient-to-br from-gray-800/90 to-emerald-900/30 backdrop-blur-sm p-8 rounded-2xl border-2 border-emerald-700/50 hover:border-emerald-600 transition-all duration-300">
            <h2 className="font-serif text-2xl font-semibold text-emerald-400 mb-6">Our Services</h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-emerald-400 mr-3">•</span>
                Personalized menu planning for small gatherings
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-3">•</span>
                Family-style serving with authentic preparation
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-3">•</span>
                Traditional banana leaf serving (on request)
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-3">•</span>
                Fresh ingredients and traditional cooking methods
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-3">•</span>
                Intimate, warm hospitality for your guests
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-gray-800/90 to-emerald-900/30 backdrop-blur-sm p-8 rounded-2xl border-2 border-emerald-700/50 hover:border-emerald-600 transition-all duration-300">
            <h2 className="font-serif text-2xl font-semibold text-emerald-400 mb-6">Malnad Specialties</h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-emerald-400 mr-3">•</span>
                Signature Kadubu (steamed rice dumplings)
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-3">•</span>
                Special prawn preparations with coastal spices
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-3">•</span>
                Traditional Ragi Mudde with authentic Sambar
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-3">•</span>
                Fresh coconut-based curries and chutneys
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-3">•</span>
                Homemade traditional sweets and desserts
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-br from-gray-800/90 to-emerald-900/30 backdrop-blur-sm p-8 rounded-2xl border-2 border-emerald-700/50 hover:border-emerald-600 transition-all duration-300 animate-fade-in-up animation-delay-900">
          <h3 className="font-serif text-2xl font-semibold mb-4" style={{ color: '#D4AF37' }}>
            Let Us Make Your Small Function Special
          </h3>
          <p className="text-gray-300 mb-6">
            Experience the warmth of traditional Malnad hospitality for your intimate gatherings. 
            We focus on authentic preparation and personalized service for small family functions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-emerald-700 hover:bg-emerald-600 text-white px-8 py-3 rounded-full font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-emerald-700/30"
              style={{ border: '1px solid rgba(212, 175, 55, 0.2)' }}
            >
              Contact Us
            </Link>
            <Link 
              to="/menu" 
              className="px-8 py-3 rounded-full font-semibold hover:text-black transform hover:scale-105 transition-all duration-300 shadow-lg"
              style={{ 
                border: '2px solid #D4AF37', 
                color: '#D4AF37',
                '&:hover': { backgroundColor: '#D4AF37' }
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#D4AF37'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              View Our Specialties
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;