function Catering() {
  return (
    <div className="min-h-screen bg-black py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-yellow-400 text-center mb-8">
          Catering Services
        </h1>
        <p className="text-lg text-gray-300 text-center mb-12">
          Bring the authentic flavors of Malnad to your special events
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-900 p-6 rounded-lg border border-yellow-400">
            <h3 className="text-xl font-semibold text-yellow-400 mb-4">Wedding Catering</h3>
            <p className="text-gray-300">Traditional Malnad cuisine for your special day</p>
          </div>
          
          <div className="bg-gray-900 p-6 rounded-lg border border-yellow-400">
            <h3 className="text-xl font-semibold text-yellow-400 mb-4">Corporate Events</h3>
            <p className="text-gray-300">Professional catering for business gatherings</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Catering;