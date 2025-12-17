function Catering() {
  return (
    <div className="min-h-screen bg-black py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-8" style={{
          background: 'linear-gradient(135deg, #B8860B 0%, #D4AF37 50%, #F4E4BC 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Catering Services
        </h1>
        <p className="text-lg text-gray-300 text-center mb-12">
          Bring the authentic flavors of Malnad to your special events
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-900 p-6 rounded-lg" style={{ border: '1px solid #D4AF37' }}>
            <h3 className="text-xl font-semibold mb-4" style={{ color: '#D4AF37' }}>Wedding Catering</h3>
            <p className="text-gray-300">Traditional Malnad cuisine for your special day</p>
          </div>
          
          <div className="bg-gray-900 p-6 rounded-lg" style={{ border: '1px solid #D4AF37' }}>
            <h3 className="text-xl font-semibold mb-4" style={{ color: '#D4AF37' }}>Corporate Events</h3>
            <p className="text-gray-300">Professional catering for business gatherings</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Catering;