import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="relative h-screen w-full">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      ></div>
      
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      
      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
        {/* Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-yellow-400 text-center mb-12 tracking-wide">
          Malnad Family Restaurant
        </h1>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-4xl">
          <Link 
            to="/catering" 
            className="bg-yellow-400 text-black px-8 py-4 rounded-full text-lg font-semibold text-center hover:bg-yellow-500 hover:text-black transition-colors duration-200"
          >
            Catering Services
          </Link>
          <Link 
            to="/bulk-orders" 
            className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full text-lg font-semibold text-center hover:bg-yellow-400 hover:text-black transition-colors duration-200"
          >
            Bulk Orders
          </Link>
          <Link 
            to="/events" 
            className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full text-lg font-semibold text-center hover:bg-yellow-400 hover:text-black transition-colors duration-200"
          >
            Events & Functions
          </Link>
          <Link 
            to="/book-event" 
            className="bg-yellow-400 text-black px-8 py-4 rounded-full text-lg font-semibold text-center hover:bg-yellow-500 hover:text-black transition-colors duration-200"
          >
            Book Your Event
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;