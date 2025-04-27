
import { Link } from "react-router-dom";
import { categories } from "@/data/products";

const FeaturedCategories = () => {
  return (
    <section className="py-16 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Collections</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our curated collections of fine jewelry crafted with precision and passion.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.slice(0, 6).map((category) => (
            <Link 
              to={`/collections/${category.id}`} 
              key={category.id}
              className="category-item rounded-lg overflow-hidden"
            >
              <div className="relative h-80">
                <img 
                  src={category.imageUrl} 
                  alt={category.name} 
                  className="w-full h-full object-cover"
                />
                <div className="category-overlay">
                  <div className="px-6 py-4 text-center">
                    <h3 className="text-xl text-white font-bold mb-2">{category.name}</h3>
                    {category.description && (
                      <p className="text-white/80">{category.description}</p>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/collections"
            className="inline-flex items-center text-gold hover:text-gold-dark transition-colors font-medium"
          >
            View All Collections
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
