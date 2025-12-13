import MenuSection from "../components/MenuSection";

function Menu() {
  const menuData = {
    "Rice Items": [
      { name: "Chicken Biryani", description: "Aromatic basmati rice with tender chicken pieces", price: "250" },
      { name: "Mutton Biryani", description: "Traditional biryani with succulent mutton", price: "300" },
      { name: "Egg Biryani", description: "Flavorful rice with boiled eggs", price: "180" },
      { name: "Veg Biryani", description: "Mixed vegetable biryani with aromatic spices", price: "150" }
    ],
    "Soups": [
      { name: "Chicken Clear Soup", description: "Light and flavorful chicken broth", price: "80" },
      { name: "Mutton Soup", description: "Rich and hearty mutton soup", price: "100" },
      { name: "Tomato Soup", description: "Classic tomato soup with herbs", price: "60" },
      { name: "Sweet Corn Soup", description: "Creamy sweet corn soup", price: "70" }
    ],
    "Sea Food": [
      { name: "Fish Fry", description: "Crispy fried fish with Malnad spices", price: "200" },
      { name: "Prawn Curry", description: "Traditional coastal prawn curry", price: "280" },
      { name: "Fish Curry", description: "Authentic fish curry with coconut", price: "220" },
      { name: "Crab Masala", description: "Spicy crab preparation", price: "350" }
    ],
    "Chicken Starters": [
      { name: "Chicken 65", description: "Spicy deep-fried chicken starter", price: "180" },
      { name: "Chicken Manchurian", description: "Indo-Chinese style chicken", price: "200" },
      { name: "Chicken Tikka", description: "Grilled chicken with aromatic spices", price: "220" },
      { name: "Chicken Lollipop", description: "Drumstick chicken appetizer", price: "240" }
    ],
    "Chicken Gravy": [
      { name: "Butter Chicken", description: "Creamy tomato-based chicken curry", price: "250" },
      { name: "Chicken Curry", description: "Traditional Malnad style chicken curry", price: "200" },
      { name: "Chicken Masala", description: "Spicy chicken in rich gravy", price: "220" },
      { name: "Kadai Chicken", description: "Chicken cooked in kadai with peppers", price: "240" }
    ],
    "Mutton Starters": [
      { name: "Mutton Fry", description: "Dry roasted mutton with spices", price: "280" },
      { name: "Mutton Pepper Fry", description: "Spicy pepper mutton starter", price: "300" },
      { name: "Mutton Sukka", description: "Dry mutton preparation", price: "320" },
      { name: "Mutton Chops", description: "Grilled mutton chops", price: "350" }
    ],
    "Mutton Gravy": [
      { name: "Mutton Curry", description: "Traditional mutton curry", price: "300" },
      { name: "Mutton Masala", description: "Rich and spicy mutton gravy", price: "320" },
      { name: "Mutton Korma", description: "Mild mutton curry with yogurt", price: "340" },
      { name: "Mutton Rogan Josh", description: "Kashmiri style mutton curry", price: "360" }
    ],
    "Egg Starters": [
      { name: "Egg 65", description: "Spicy fried egg starter", price: "120" },
      { name: "Egg Manchurian", description: "Indo-Chinese style egg", price: "140" },
      { name: "Egg Pepper Fry", description: "Scrambled eggs with pepper", price: "100" },
      { name: "Boiled Egg Fry", description: "Fried boiled eggs with spices", price: "80" }
    ],
    "Egg Gravy": [
      { name: "Egg Curry", description: "Traditional egg curry", price: "120" },
      { name: "Egg Masala", description: "Spicy egg gravy", price: "140" },
      { name: "Egg Korma", description: "Mild egg curry with coconut", price: "160" },
      { name: "Egg Bhurji", description: "Scrambled eggs with onions", price: "100" }
    ],
    "Veg Starters": [
      { name: "Gobi 65", description: "Spicy cauliflower starter", price: "120" },
      { name: "Paneer Tikka", description: "Grilled cottage cheese", price: "180" },
      { name: "Veg Manchurian", description: "Mixed vegetable balls in sauce", price: "140" },
      { name: "Mushroom Fry", description: "Spicy mushroom starter", price: "160" }
    ],
    "Veg Rice": [
      { name: "Veg Fried Rice", description: "Stir-fried rice with vegetables", price: "120" },
      { name: "Jeera Rice", description: "Cumin flavored basmati rice", price: "100" },
      { name: "Lemon Rice", description: "Tangy lemon flavored rice", price: "80" },
      { name: "Curd Rice", description: "Traditional South Indian rice", price: "70" }
    ],
    "Veg Gravy": [
      { name: "Dal Tadka", description: "Tempered yellow lentils", price: "80" },
      { name: "Paneer Butter Masala", description: "Cottage cheese in creamy gravy", price: "180" },
      { name: "Mixed Veg Curry", description: "Seasonal vegetables in curry", price: "120" },
      { name: "Aloo Gobi", description: "Potato and cauliflower curry", price: "100" }
    ]
  };

  return (
    <div className="min-h-screen bg-black text-white pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">
            Our Menu
          </h1>
          <p className="text-gray-300 text-lg">
            Authentic Malnad flavors crafted with traditional recipes
          </p>
        </div>

        {/* Menu Sections */}
        <div className="space-y-8">
          {Object.entries(menuData).map(([sectionTitle, items]) => (
            <MenuSection 
              key={sectionTitle} 
              title={sectionTitle} 
              items={items} 
            />
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12 p-6 bg-gray-900 rounded-lg border border-yellow-400">
          <p className="text-gray-300 mb-2">
            All prices are inclusive of taxes. Menu items may vary based on availability.
          </p>
          <p className="text-yellow-400 font-semibold">
            For bulk orders and catering, please contact us for special pricing.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Menu;