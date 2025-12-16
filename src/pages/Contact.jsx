function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-emerald-950 text-white pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-yellow-400">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300">
            Get in touch to discuss your special function
          </p>
        </div>

        {/* Contact Information */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 animate-fade-in-up animation-delay-300">
          <div className="bg-gradient-to-br from-gray-800/90 to-emerald-900/30 backdrop-blur-sm p-8 rounded-2xl border-2 border-emerald-700/50 hover:border-emerald-600 transition-all duration-300">
            <h3 className="font-serif text-2xl font-semibold text-emerald-400 mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-gray-200 mb-2">Phone</h4>
                <p className="text-gray-300">+91 98765 43210</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-200 mb-2">Email</h4>
                <p className="text-gray-300">support@malnadfamilyrestaurant.com</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-800/90 to-emerald-900/30 backdrop-blur-sm p-8 rounded-2xl border-2 border-emerald-700/50 hover:border-emerald-600 transition-all duration-300">
            <h3 className="font-serif text-2xl font-semibold text-emerald-400 mb-6">Quick Contact</h3>
            <p className="text-gray-300 mb-6">
              For immediate assistance and booking inquiries, reach us directly on WhatsApp.
            </p>
            <a 
              href="https://wa.me/919876543210" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-emerald-700 hover:bg-emerald-600 text-white px-8 py-3 rounded-full font-semibold transform hover:scale-105 transition-all duration-300 inline-block shadow-lg hover:shadow-emerald-700/30 border border-yellow-400/20"
            >
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center bg-gradient-to-br from-gray-800/90 to-emerald-900/30 backdrop-blur-sm p-8 rounded-2xl border-2 border-emerald-700/50 hover:border-emerald-600 transition-all duration-300 animate-fade-in-up animation-delay-600">
          <h3 className="font-serif text-2xl font-semibold text-yellow-400 mb-4">
            Planning Your Function?
          </h3>
          <p className="text-gray-300 mb-6 leading-relaxed">
            We'd love to discuss your special occasion and create a memorable dining experience 
            with authentic Malnad cuisine. Contact us to plan your housewarming, birthday gathering, 
            or family function.
          </p>
          <p className="text-yellow-400 font-semibold">
            We specialize in small, intimate functions with personalized service.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;