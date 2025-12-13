import { Link } from "react-router-dom";

function Events() {
  return (
    <div className="min-h-screen bg-black text-white pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6">
            Events & Functions
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Celebrate life's special moments with authentic Malnad cuisine. 
            We bring traditional flavors and warm hospitality to make your events memorable.
          </p>
        </div>

        {/* Event Types */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-yellow-400 text-center mb-8">
            Events We Cater For
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-900 p-6 rounded-lg border border-yellow-400 text-center">
              <h3 className="text-xl font-semibold text-yellow-400 mb-3">Weddings</h3>
              <p className="text-gray-300">Traditional wedding feasts with authentic Malnad specialties</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border border-yellow-400 text-center">
              <h3 className="text-xl font-semibold text-yellow-400 mb-3">Corporate Events</h3>
              <p className="text-gray-300">Professional catering for meetings, conferences, and celebrations</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border border-yellow-400 text-center">
              <h3 className="text-xl font-semibold text-yellow-400 mb-3">Religious Functions</h3>
              <p className="text-gray-300">Sacred ceremonies with traditional vegetarian offerings</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border border-yellow-400 text-center">
              <h3 className="text-xl font-semibold text-yellow-400 mb-3">Birthday Parties</h3>
              <p className="text-gray-300">Joyful celebrations with family-style Malnad cuisine</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border border-yellow-400 text-center">
              <h3 className="text-xl font-semibold text-yellow-400 mb-3">Festivals</h3>
              <p className="text-gray-300">Traditional festival meals and seasonal specialties</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border border-yellow-400 text-center">
              <h3 className="text-xl font-semibold text-yellow-400 mb-3">House Warmings</h3>
              <p className="text-gray-300">Auspicious beginnings with blessed traditional meals</p>
            </div>
          </div>
        </div>

        {/* Services Offered */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="bg-gray-900 p-8 rounded-lg border border-yellow-400">
            <h2 className="text-2xl font-semibold text-yellow-400 mb-6">Our Services</h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-yellow-400 mr-3">•</span>
                Complete menu planning and customization
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-3">•</span>
                Professional setup and serving staff
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-3">•</span>
                Traditional banana leaf serving (on request)
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-3">•</span>
                Eco-friendly packaging and utensils
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-3">•</span>
                Flexible timing and location services
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 p-8 rounded-lg border border-yellow-400">
            <h2 className="text-2xl font-semibold text-yellow-400 mb-6">Malnad Specialties</h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-yellow-400 mr-3">•</span>
                Authentic Bisi Bele Bath and Akki Rotti
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-3">•</span>
                Traditional Ragi Mudde with Sambar
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-3">•</span>
                Homestyle Rasam and Kosambari
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-3">•</span>
                Fresh coconut-based curries and chutneys
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-3">•</span>
                Traditional sweets like Mysore Pak and Holige
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gray-900 p-8 rounded-lg border border-yellow-400">
          <h3 className="text-2xl font-semibold text-yellow-400 mb-4">
            Let Us Make Your Event Special
          </h3>
          <p className="text-gray-300 mb-6">
            Book your event catering today and experience the warmth of traditional Malnad hospitality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 transition-colors duration-200"
            >
              Book Your Event
            </Link>
            <Link 
              to="/menu" 
              className="border-2 border-yellow-400 text-yellow-400 px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition-colors duration-200"
            >
              View Menu Options
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;