import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-1000 ease-out"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      ></div>
      
      {/* Malnad-inspired Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-gray-900/75 to-emerald-950/60"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 via-transparent to-black/20"></div>
      
      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
        {/* Title */}
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-light text-center mb-6 tracking-wider animate-fade-in-up" style={{
          fontFamily: 'Georgia, "Times New Roman", serif',
          background: 'linear-gradient(135deg, #B8860B 0%, #D4AF37 50%, #F4E4BC 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          textShadow: '0 3px 6px rgba(0,0,0,0.4)',
          letterSpacing: '0.15em'
        }}>
          Malnad Family Restaurant
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-center mb-8 max-w-3xl leading-relaxed animate-fade-in-up animation-delay-300" style={{ color: '#F5F1E8' }}>
          Authentic Malnad cuisine for your special moments. 
          A family-run restaurant serving traditional flavors for small functions and intimate gatherings.
        </p>
        
        {/* Primary CTA */}
        <div className="text-center animate-fade-in-up animation-delay-600">
          <Link 
            to="/book-event" 
            className="bg-emerald-700 hover:bg-emerald-600 text-white px-12 py-4 rounded-full text-xl font-semibold transform hover:scale-105 transition-all duration-300 inline-block mb-6 shadow-lg hover:shadow-emerald-700/30"
            style={{ border: '1px solid rgba(212, 175, 55, 0.2)' }}
          >
            Book Your Event
          </Link>
          
          {/* WhatsApp CTA */}
          <div className="mb-6">
            <a 
              href="https://wa.me/919876543210" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border-2 border-emerald-600 text-emerald-400 px-8 py-3 rounded-full text-lg font-semibold hover:bg-emerald-600 hover:text-white transform hover:scale-105 transition-all duration-300 inline-block shadow-lg hover:shadow-emerald-600/25"
            >
              WhatsApp Us
            </a>
          </div>
          
          <p className="text-gray-300 text-sm animate-fade-in-up animation-delay-900">
            Perfect for housewarming ceremonies, small birthday gatherings & family functions
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;

/* Add custom animations to your global CSS */
/*
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
}

.animation-delay-300 {
  animation-delay: 0.3s;
  opacity: 0;
}

.animation-delay-600 {
  animation-delay: 0.6s;
  opacity: 0;
}

.animation-delay-900 {
  animation-delay: 0.9s;
  opacity: 0;
}
*/