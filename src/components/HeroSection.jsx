import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section 
      className="relative h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/hero.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Malnad Family Restaurant
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Experience authentic Karnataka cuisine in a warm, family atmosphere
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/menu" 
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            View Menu
          </Link>
          <Link 
            to="/contact" 
            className="border-2 border-white hover:bg-white hover:text-black text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Book Table
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;