
import { Link } from "react-router-dom";
import ProductCard from "@/components/ProductCard";
import { saleProducts } from "@/data/products";
import { Button } from "@/components/ui/button";

const SpecialOffers = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-gold font-medium mb-2 inline-block">LIMITED TIME</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Special Offers</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Exclusive deals on our finest pieces. Don't miss these limited-time offers on exquisite jewelry.
          </p>
        </div>
        
        {saleProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {saleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <p className="text-gray-500 mb-4">No special offers available at the moment.</p>
            <p className="text-gray-600 mb-6">Check back soon for new deals!</p>
          </div>
        )}
        
        <div className="text-center mt-12">
          <Button asChild className="bg-gold hover:bg-gold-dark text-white">
            <Link to="/offers">
              View All Offers
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
