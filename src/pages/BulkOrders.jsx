import { Link } from "react-router-dom";

function BulkOrders() {
  return (
    <div className="min-h-screen bg-black text-white pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6">
            Bulk Orders
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Bringing authentic Malnad flavors to your doorstep in large quantities. 
            Perfect for offices, family gatherings, and special occasions.
          </p>
        </div>

        {/* Content Sections */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* What We Offer */}
          <div className="bg-gray-900 p-8 rounded-lg border border-yellow-400">
            <h2 className="text-2xl font-semibold text-yellow-400 mb-6">What We Offer</h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-yellow-400 mr-3">•</span>
                Traditional Malnad meals for 20+ people
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-3">•</span>
                Office lunch deliveries and corporate catering
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-3">•</span>
                Family reunion and festival meal packages
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-3">•</span>
                Customizable menu options for dietary preferences
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-3">•</span>
                Fresh preparation with advance booking
              </li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="bg-gray-900 p-8 rounded-lg border border-yellow-400">
            <h2 className="text-2xl font-semibold text-yellow-400 mb-6">Why Choose Us</h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-yellow-400 mr-3">•</span>
                Three generations of authentic recipes
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-3">•</span>
                Competitive pricing for large quantities
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-3">•</span>
                Reliable delivery and setup services
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-3">•</span>
                Hygienic packaging and presentation
              </li>
              <li className="flex items-start">
                <span className="text-yellow-400 mr-3">•</span>
                Flexible scheduling to meet your needs
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gray-900 p-8 rounded-lg border border-yellow-400">
          <h3 className="text-2xl font-semibold text-yellow-400 mb-4">
            Ready to Place Your Bulk Order?
          </h3>
          <p className="text-gray-300 mb-6">
            Contact us at least 24 hours in advance for the best service and freshest meals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 transition-colors duration-200"
            >
              Contact Us Now
            </Link>
            <a 
              href="tel:+91-XXXXXXXXXX" 
              className="border-2 border-yellow-400 text-yellow-400 px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition-colors duration-200"
            >
              Call for Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BulkOrders;