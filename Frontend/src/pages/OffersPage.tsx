
import Layout from "@/components/ui/layout";
import { saleProducts } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const OffersPage = () => {
  return (
    <Layout>
      <div className="bg-gold py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Special Offers</h1>
            <p className="text-white/90 md:text-lg">
              Exclusive deals on our finest pieces. Don't miss these limited-time offers on exquisite jewelry.
            </p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        {saleProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {saleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h2 className="text-2xl font-medium mb-4">No Offers Available Right Now</h2>
            <p className="text-gray-500 mb-8">
              We're currently working on some exciting new offers. Please check back soon!
            </p>
            <Button asChild>
              <Link to="/collections">
                Browse Collections
              </Link>
            </Button>
          </div>
        )}
      </div>
      
      <div className="bg-cream py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Newsletter</h2>
            <p className="text-gray-600 mb-8">
              Subscribe to our newsletter to receive exclusive offers, new product announcements, and special discounts.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 sm:w-80"
              />
              <Button className="bg-gold hover:bg-gold-dark text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OffersPage;
