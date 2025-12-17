import { useState, useEffect } from "react";

function Admin() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/events");
      const data = await response.json();
      
      if (data.success) {
        setEvents(data.data);
      } else {
        setError("Failed to fetch events");
      }
    } catch (err) {
      setError("Error connecting to server");
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const formatCreatedAt = (dateString) => {
    return new Date(dateString).toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white pt-20 flex items-center justify-center">
        <div className="text-xl" style={{ color: '#D4AF37' }}>Loading events...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black text-white pt-20 flex items-center justify-center">
        <div className="text-red-400 text-xl">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#D4AF37' }}>
            Event Enquiries
          </h1>
          <p className="text-gray-300 text-lg">
            Total enquiries: <span className="font-semibold" style={{ color: '#D4AF37' }}>{events.length}</span>
          </p>
        </div>

        {events.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📅</div>
            <h3 className="text-2xl text-gray-400 mb-2">No events yet</h3>
            <p className="text-gray-500">Event enquiries will appear here once customers submit the booking form.</p>
          </div>
        ) : (
          <>
            {/* Desktop Table */}
            <div className="hidden lg:block overflow-x-auto bg-gray-900 rounded-lg" style={{ border: '1px solid #D4AF37' }}>
              <table className="w-full">
                <thead>
                  <tr className="text-black" style={{ backgroundColor: '#D4AF37' }}>
                    <th className="px-6 py-4 text-left font-semibold">Name</th>
                    <th className="px-6 py-4 text-left font-semibold">Phone</th>
                    <th className="px-6 py-4 text-left font-semibold">Event Type</th>
                    <th className="px-6 py-4 text-left font-semibold">Event Date</th>
                    <th className="px-6 py-4 text-left font-semibold">Guests</th>
                    <th className="px-6 py-4 text-left font-semibold">Message</th>
                    <th className="px-6 py-4 text-left font-semibold">Submitted</th>
                  </tr>
                </thead>
                <tbody>
                  {events.map((event, index) => (
                    <tr key={event._id} className={`border-b border-gray-700 hover:bg-gray-800 transition-colors ${index % 2 === 0 ? 'bg-gray-900' : 'bg-gray-850'}`}>
                      <td className="px-6 py-4 text-white font-medium">{event.name}</td>
                      <td className="px-6 py-4 text-white">{event.phone}</td>
                      <td className="px-6 py-4">
                        <span className="text-black px-2 py-1 rounded-full text-sm font-medium" style={{ backgroundColor: '#D4AF37' }}>
                          {event.eventType}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-white">{formatDate(event.date)}</td>
                      <td className="px-6 py-4 font-semibold" style={{ color: '#D4AF37' }}>{event.guests}</td>
                      <td className="px-6 py-4 text-gray-300 max-w-xs">
                        <div className="truncate" title={event.message}>
                          {event.message || "No message"}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-400 text-sm">
                        {formatCreatedAt(event.createdAt)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="lg:hidden space-y-6">
              {events.map((event) => (
                <div key={event._id} className="bg-gray-900 rounded-lg overflow-hidden" style={{ border: '1px solid #D4AF37' }}>
                  {/* Card Header */}
                  <div className="text-black px-6 py-4" style={{ backgroundColor: '#D4AF37' }}>
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold">{event.name}</h3>
                        <p className="text-sm opacity-80">{event.phone}</p>
                      </div>
                      <span className="bg-black px-3 py-1 rounded-full text-sm font-medium" style={{ color: '#D4AF37' }}>
                        {event.eventType}
                      </span>
                    </div>
                  </div>
                  
                  {/* Card Body */}
                  <div className="p-6 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="text-gray-400 text-sm block">Event Date</span>
                        <span className="text-white font-medium">{formatDate(event.date)}</span>
                      </div>
                      <div>
                        <span className="text-gray-400 text-sm block">Guests</span>
                        <span className="font-bold text-lg" style={{ color: '#D4AF37' }}>{event.guests}</span>
                      </div>
                    </div>
                    
                    {event.message && (
                      <div>
                        <span className="text-gray-400 text-sm block mb-2">Message</span>
                        <p className="text-gray-300 bg-gray-800 p-3 rounded-lg text-sm">
                          {event.message}
                        </p>
                      </div>
                    )}
                    
                    <div className="pt-4 border-t border-gray-700">
                      <span className="text-gray-400 text-xs">
                        Submitted: {formatCreatedAt(event.createdAt)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Admin;