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
    <div className="min-h-screen bg-black text-white pt-20 pb-16">
      <div className="max-w-2xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">
            Book Your Event
          </h1>
          <p className="text-gray-300 text-lg">
            Let us make your special occasion memorable with authentic Malnad cuisine
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-gray-900 p-8 rounded-lg border border-yellow-400">
          <div className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-yellow-400 font-semibold mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg text-white focus:border-yellow-400 focus:outline-none"
                placeholder="Enter your full name"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-yellow-400 font-semibold mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg text-white focus:border-yellow-400 focus:outline-none"
                placeholder="Enter your phone number"
              />
            </div>

            {/* Event Type */}
            <div>
              <label className="block text-yellow-400 font-semibold mb-2">
                Event Type *
              </label>
              <select
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg text-white focus:border-yellow-400 focus:outline-none"
              >
                <option value="">Select event type</option>
                <option value="Wedding">Wedding</option>
                <option value="Birthday">Birthday</option>
                <option value="Corporate">Corporate</option>
                <option value="Housewarming">Housewarming</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Event Date */}
            <div>
              <label className="block text-yellow-400 font-semibold mb-2">
                Event Date *
              </label>
              <input
                type="date"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg text-white focus:border-yellow-400 focus:outline-none"
              />
            </div>

            {/* Number of Guests */}
            <div>
              <label className="block text-yellow-400 font-semibold mb-2">
                Number of Guests *
              </label>
              <input
                type="number"
                name="numberOfGuests"
                value={formData.numberOfGuests}
                onChange={handleChange}
                required
                min="1"
                className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg text-white focus:border-yellow-400 focus:outline-none"
                placeholder="Expected number of guests"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-yellow-400 font-semibold mb-2">
                Message / Special Requirements
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg text-white focus:border-yellow-400 focus:outline-none resize-none"
                placeholder="Any special requirements or additional information..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-yellow-400 text-black py-3 px-6 rounded-lg font-semibold text-lg hover:bg-yellow-500 transition-colors duration-200"
            >
              Submit Enquiry
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BookEvent;