function Menu() {
  const specialItems = [
    {
      name: "Kadubu",
      description: "Traditional steamed rice dumplings, a signature Malnad specialty prepared with authentic techniques"
    },
    {
      name: "Special Prawn Curry",
      description: "Coastal-style prawn preparation with fresh coconut and traditional Malnad spices"
    },
    {
      name: "Prawn Ghee Roast",
      description: "Succulent prawns roasted in ghee with aromatic spice blend, a house specialty"
    },
    {
      name: "Traditional Ragi Mudde",
      description: "Authentic finger millet balls served with homestyle sambar and traditional accompaniments"
    },
    {
      name: "Malnad Fish Curry",
      description: "Fresh fish cooked in coconut-based curry with traditional Malnad spices and curry leaves"
    },
    {
      name: "Homestyle Rasam",
      description: "Traditional tangy soup prepared with tamarind, tomatoes, and aromatic spices"
    },
    {
      name: "Authentic Sambar",
      description: "Traditional lentil-based curry with vegetables, prepared using age-old family recipes"
    },
    {
      name: "Traditional Sweets",
      description: "Homemade Mysore Pak, Holige, and other authentic Malnad desserts prepared fresh"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-emerald-950 text-white pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4" style={{
            background: 'linear-gradient(135deg, #B8860B 0%, #D4AF37 50%, #F4E4BC 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Our Special Items
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Authentic Malnad specialties crafted with traditional recipes and fresh ingredients. 
            We focus on quality over quantity, preparing each dish with care and authenticity.
          </p>
        </div>

        {/* Special Items */}
        <div className="space-y-6 mb-12">
          {specialItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-r from-gray-800/90 to-emerald-900/30 backdrop-blur-sm p-6 rounded-2xl border-2 border-emerald-700/50 hover:border-emerald-600 transform hover:scale-[1.02] transition-all duration-300 hover:shadow-lg hover:shadow-emerald-900/20 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="font-serif text-xl font-semibold mb-3" style={{ color: '#D4AF37' }}>{item.name}</h3>
              <p className="text-gray-300 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12 p-8 bg-gradient-to-r from-gray-800/90 to-emerald-900/30 backdrop-blur-sm rounded-2xl border-2 border-emerald-700/50 hover:border-emerald-600 transition-all duration-300 animate-fade-in-up">
          <h3 className="font-serif text-xl font-semibold text-emerald-400 mb-4">
            Traditional Preparation, Authentic Taste
          </h3>
          <p className="text-gray-300 mb-4 leading-relaxed">
            We specialize in authentic, traditional dishes prepared using time-honored methods. 
            Each item is crafted with fresh ingredients and genuine Malnad flavors.
          </p>
          <p className="font-semibold" style={{ color: '#D4AF37' }}>
            Complete menu available on request during visits or consultations for your special functions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Menu;