function MenuSection({ title, items }) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-6 border-b border-yellow-400 pb-2">
        {title}
      </h2>
      <div className="space-y-3">
        {items.map((item, index) => (
          <div key={index} className="flex justify-between items-start py-2 border-b border-gray-800">
            <div className="flex-1 pr-4">
              <h3 className="text-white font-medium text-lg">{item.name}</h3>
              {item.description && (
                <p className="text-gray-400 text-sm mt-1">{item.description}</p>
              )}
            </div>
            <div className="text-yellow-400 font-semibold text-lg">
              ₹{item.price}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuSection;