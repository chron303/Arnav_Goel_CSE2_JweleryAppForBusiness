
import Layout from "@/components/ui/layout";
import Hero from "@/components/Hero";
import FeaturedCategories from "@/components/FeaturedCategories";
import FeaturedProducts from "@/components/FeaturedProducts";
import SpecialOffers from "@/components/SpecialOffers";
import Testimonial from "@/components/Testimonial";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedCategories />
      <FeaturedProducts />
      <div className="bg-gold py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Timeless Elegance, Unforgettable Moments</h2>
            <p className="text-white/90 text-lg mb-8">
              At Harsiddhi Jewellers, we believe that every piece of jewelry tells a story. Our exquisite collections are crafted to celebrate your unique journey and cherished moments.
            </p>
          </div>
        </div>
      </div>
      <SpecialOffers />
      <Testimonial />
    </Layout>
  );
};

export default Index;
