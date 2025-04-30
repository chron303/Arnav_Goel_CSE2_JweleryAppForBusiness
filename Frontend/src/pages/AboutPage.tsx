
import Layout from "@/components/ui/layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <Layout>
      <div className="bg-cream py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">About Harsiddhi Jewellers</h1>
            <p className="text-gray-600 md:text-lg">
              Crafting elegance and luxury since 1990
            </p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Harsiddhi Jewellers began as a small family business with a passion for craftsmanship and a commitment to quality. Founded in 1990 by Mohan Sharma, our journey started in a modest workshop in Mumbai, where each piece was handcrafted with precision and care.
            </p>
            <p className="text-gray-700 mb-4">
              Over three decades, we have grown into one of India's premier jewelry destinations, but our core values remain unchanged. We still approach each design with the same dedication to artistry and excellence that defined our humble beginnings.
            </p>
            <p className="text-gray-700">
              Today, Harsiddhi Jewellers stands as a testament to timeless elegance, blending traditional craftsmanship with contemporary designs to create pieces that celebrate life's special moments.
            </p>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
              alt="Elegant Jewelry Craftsmanship" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
      
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-gold-light flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Quality</h3>
              <p className="text-gray-600">
                We source only the finest materials and maintain rigorous quality standards throughout our manufacturing process.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-gold-light flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Craftsmanship</h3>
              <p className="text-gray-600">
                Our skilled artisans combine traditional techniques with modern innovation to create pieces of exceptional artistry.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-gold-light flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Heritage</h3>
              <p className="text-gray-600">
                We honor India's rich jewelry tradition while embracing contemporary design sensibilities for the modern consumer.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-cream py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Visit Our Store</h2>
            <p className="text-gray-600 mb-8">
              Experience our collections in person and receive personalized assistance from our knowledgeable staff.
            </p>
            <Button asChild className="bg-gold hover:bg-gold-dark text-white">
              <Link to="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
