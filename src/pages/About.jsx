function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-emerald-950 text-white pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6" style={{
            background: 'linear-gradient(135deg, #B8860B 0%, #D4AF37 50%, #F4E4BC 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            About Our Family
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Three generations of authentic Malnad cooking, serving families with love and tradition
          </p>
        </div>

        {/* Our Story */}
        <div className="mb-12 animate-fade-in-up animation-delay-300">
          <h2 className="font-serif text-3xl font-semibold text-emerald-400 mb-6 text-center">
            Our Story
          </h2>
          <div className="bg-gradient-to-br from-gray-800/90 to-emerald-900/30 backdrop-blur-sm p-8 rounded-2xl border-2 border-emerald-700/50 hover:border-emerald-600 transition-all duration-300">
            <p className="text-gray-300 leading-relaxed mb-4">
              Malnad Family Restaurant began as a dream to share the authentic flavors of our homeland with families celebrating their most precious moments. What started in our grandmother's kitchen has grown into a trusted name for traditional Malnad cuisine.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              We are a family-run business that believes in the power of authentic food to bring people together. Every dish we prepare carries the essence of traditional Malnad cooking methods, passed down through generations and perfected over time.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Our focus has always been on quality over quantity. We specialize in small, intimate functions where we can give personal attention to every detail, ensuring that your special moments are celebrated with the finest authentic cuisine.
            </p>
          </div>
        </div>

        {/* Our Philosophy */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 animate-fade-in-up animation-delay-600">
          <div className="bg-gradient-to-br from-gray-800/90 to-emerald-900/30 backdrop-blur-sm p-6 rounded-2xl border-2 border-emerald-700/50 hover:border-emerald-600 transition-all duration-300">
            <h3 className="font-serif text-2xl font-semibold text-emerald-400 mb-4">Our Philosophy</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-emerald-400 mr-3">•</span>
                Authentic preparation using traditional methods
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-3">•</span>
                Fresh ingredients sourced with care
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-3">•</span>
                Personal attention to every function
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-3">•</span>
                Preserving culinary heritage for future generations
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-gray-800/90 to-emerald-900/30 backdrop-blur-sm p-6 rounded-2xl border-2 border-emerald-700/50 hover:border-emerald-600 transition-all duration-300">
            <h3 className="font-serif text-2xl font-semibold text-emerald-400 mb-4">What Makes Us Special</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-emerald-400 mr-3">•</span>
                Family recipes perfected over generations
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-3">•</span>
                Specialization in small, intimate gatherings
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-3">•</span>
                Signature dishes like Kadubu and special prawn preparations
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-3">•</span>
                Warm, personal service that treats every guest like family
              </li>
            </ul>
          </div>
        </div>

        {/* Our Commitment */}
        <div className="text-center bg-gradient-to-br from-gray-800/90 to-emerald-900/30 backdrop-blur-sm p-8 rounded-2xl border-2 border-emerald-700/50 hover:border-emerald-600 transition-all duration-300 animate-fade-in-up animation-delay-900">
          <h3 className="font-serif text-2xl font-semibold mb-4" style={{ color: '#D4AF37' }}>
            Our Commitment to You
          </h3>
          <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
            When you choose Malnad Family Restaurant for your special function, you're not just getting food – you're getting a piece of our family's heritage. We promise to bring the same love, care, and authenticity to your celebration that we would to our own family gathering. Every dish is prepared with respect for tradition and a commitment to excellence that has been our hallmark for generations.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;