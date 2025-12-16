import { useState } from "react";

function BookEvent() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    eventType: "",
    eventDate: "",
    numberOfGuests: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your enquiry. We will contact you soon.");
    setFormData({
      fullName: "",
      phoneNumber: "",
      eventType: "",
      eventDate: "",
      numberOfGuests: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-emerald-950 text-white pt-20 pb-16">
      <div className="max-w-2xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-yellow-400 mb-4">
            Book Your Event
          </h1>
          <p className="text-gray-300 text-lg">
            Let us make your special occasion memorable with authentic Malnad cuisine
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-gradient-to-br from-gray-800/90 to-emerald-900/30 backdrop-blur-sm p-8 rounded-2xl border-2 border-emerald-700/50 hover:border-emerald-600 transition-all duration-300 animate-fade-in-up animation-delay-300">
          <div className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-emerald-400 font-semibold mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black/50 border border-emerald-700/50 rounded-lg text-white focus:border-emerald-400 focus:outline-none transition-colors duration-200"
                placeholder="Enter your full name"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-emerald-400 font-semibold mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black/50 border border-emerald-700/50 rounded-lg text-white focus:border-emerald-400 focus:outline-none transition-colors duration-200"
                placeholder="Enter your phone number"
              />
            </div>

            {/* Event Type */}
            <div>
              <label className="block text-emerald-400 font-semibold mb-2">
                Event Type *
              </label>
              <select
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black/50 border border-emerald-700/50 rounded-lg text-white focus:border-emerald-400 focus:outline-none transition-colors duration-200"
              >
                <option value="">Select event type</option>
                <option value="Housewarming">Housewarming Ceremony</option>
                <option value="Birthday">Small Birthday Gathering</option>
                <option value="Religious">Religious Function</option>
                <option value="Festival">Family Festival</option>
                <option value="Other">Other Small Function</option>
              </select>
            </div>

            {/* Event Date */}
            <div>
              <label className="block text-emerald-400 font-semibold mb-2">
                Event Date *
              </label>
              <input
                type="date"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black/50 border border-emerald-700/50 rounded-lg text-white focus:border-emerald-400 focus:outline-none transition-colors duration-200"
              />
            </div>

            {/* Number of Guests */}
            <div>
              <label className="block text-emerald-400 font-semibold mb-2">
                Number of Guests *
              </label>
              <input
                type="number"
                name="numberOfGuests"
                value={formData.numberOfGuests}
                onChange={handleChange}
                required
                min="1"
                max="50"
                className="w-full px-4 py-3 bg-black/50 border border-emerald-700/50 rounded-lg text-white focus:border-emerald-400 focus:outline-none transition-colors duration-200"
                placeholder="Expected number of guests (max 50)"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-emerald-400 font-semibold mb-2">
                Message / Special Requirements
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-3 bg-black/50 border border-emerald-700/50 rounded-lg text-white focus:border-emerald-400 focus:outline-none resize-none transition-colors duration-200"
                placeholder="Any special requirements or additional information..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-emerald-700 hover:bg-emerald-600 text-white py-3 px-6 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-700/30 border border-yellow-400/20"
            >
              Submit Enquiry
            </button>
            
            {/* Note */}
            <p className="text-center text-gray-400 text-sm mt-4">
              We specialize in small, intimate functions with personalized service
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BookEvent;