
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative">
      {/* Hero Image */}
      <div className="relative h-[70vh] md:h-[80vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
          alt="Luxury Jewelry Collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
        
        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-start">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-xl animate-fade-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-4">
                Timeless Elegance
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                Discover our exquisite collection of handcrafted jewelry that celebrates your unique story.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-gold hover:bg-gold-dark text-white">
                  <Link to="/collections">
                    Explore Collections
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/20">
                  <Link to="/offers">
                    View Special Offers
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
