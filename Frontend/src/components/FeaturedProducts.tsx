
import { Link } from "react-router-dom";
import ProductCard from "@/components/ProductCard";
import { featuredProducts } from "@/data/products";

const FeaturedProducts = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-baseline mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Featured Collection</h2>
            <p className="text-gray-600">Discover our most popular pieces that blend tradition with contemporary design.</p>
          </div>
          <Link 
            to="/collections" 
            className="hidden md:inline-flex items-center text-gold hover:text-gold-dark transition-colors font-medium"
          >
            View All
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-10 md:hidden">
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

export default FeaturedProducts;
