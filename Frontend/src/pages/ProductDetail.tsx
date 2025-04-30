
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import Layout from "@/components/ui/layout";
import { Button } from "@/components/ui/button";
import { getProductById, getRelatedProducts } from "@/data/products";
import { Product } from "@/types";
import { useCart } from "@/hooks/use-cart";
import { useToast } from "@/hooks/use-toast";
import ProductCard from "@/components/ProductCard";

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { toast } = useToast();
  
  useEffect(() => {
    if (productId) {
      const foundProduct = getProductById(productId);
      setProduct(foundProduct || null);
      
      if (foundProduct) {
        const related = getRelatedProducts(productId);
        setRelatedProducts(related);
      }
    }
    // Reset quantity when product changes
    setQuantity(1);
  }, [productId]);
  
  const handleAddToCart = () => {
    if (product) {
      // Add product multiple times based on quantity
      for (let i = 0; i < quantity; i++) {
        addToCart(product);
      }
      
      toast({
        title: "Added to cart",
        description: `${product.name} (Qty: ${quantity}) has been added to your cart.`,
        duration: 3000,
      });
    }
  };
  
  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);
  
  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <p>The product you are looking for does not exist.</p>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Product Image */}
          <div>
            <div className="bg-white rounded-lg overflow-hidden">
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
          {/* Product Details */}
          <div>
            <nav className="flex text-sm mb-6">
              <Link to="/" className="text-gray-500 hover:text-gold">Home</Link>
              <span className="mx-2 text-gray-500">/</span>
              <Link to="/collections" className="text-gray-500 hover:text-gold">Collections</Link>
              <span className="mx-2 text-gray-500">/</span>
              <Link 
                to={`/collections/${product.category.toLowerCase()}`} 
                className="text-gray-500 hover:text-gold"
              >
                {product.category}
              </Link>
            </nav>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{product.name}</h1>
            
            <div className="flex items-center mb-6">
              <div className="mr-4">
                <span className="text-2xl font-bold">₹{product.price.toLocaleString()}</span>
                {product.oldPrice && (
                  <span className="text-gray-400 line-through ml-2">
                    ₹{product.oldPrice.toLocaleString()}
                  </span>
                )}
              </div>
              
              {product.rating && (
                <div className="flex items-center">
                  <div className="flex text-gold">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill={star <= Math.floor(product.rating) ? "currentColor" : "none"}>
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-gray-500 ml-1">({product.rating})</span>
                </div>
              )}
            </div>
            
            <div className="bg-cream p-6 rounded-lg mb-6">
              <p className="text-gray-700 mb-4">{product.description}</p>
              
              {product.features && product.features.length > 0 && (
                <div className="mb-4">
                  <h3 className="font-medium mb-2">Features:</h3>
                  <ul className="list-disc list-inside space-y-1">
                    {product.features.map((feature, index) => (
                      <li key={index} className="text-gray-700">{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="grid grid-cols-2 gap-4">
                {product.material && (
                  <div>
                    <span className="font-medium">Material:</span> {product.material}
                  </div>
                )}
                {product.weight && (
                  <div>
                    <span className="font-medium">Weight:</span> {product.weight}
                  </div>
                )}
                {product.dimensions && (
                  <div>
                    <span className="font-medium">Dimensions:</span> {product.dimensions}
                  </div>
                )}
              </div>
            </div>
            
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <span className="font-medium mr-4">Quantity:</span>
                <div className="flex items-center border border-gray-300 rounded-md">
                  <button 
                    className="px-3 py-2 text-gray-600 hover:text-gold"
                    onClick={decrementQuantity}
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-4 py-2 border-l border-r border-gray-300">
                    {quantity}
                  </span>
                  <button 
                    className="px-3 py-2 text-gray-600 hover:text-gold"
                    onClick={incrementQuantity}
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleAddToCart}
                  className="bg-gold hover:bg-gold-dark text-white"
                  size="lg"
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
              </div>
            </div>
            
            <div className="mt-8 border-t border-gray-200 pt-6">
              <div className="flex items-center mb-2">
                <div className={`w-3 h-3 rounded-full mr-2 ${
                  product.stockStatus === 'in-stock' 
                    ? 'bg-green-500' 
                    : product.stockStatus === 'low-stock' 
                    ? 'bg-yellow-500' 
                    : 'bg-red-500'
                }`}></div>
                <span>
                  {product.stockStatus === 'in-stock' 
                    ? 'In Stock' 
                    : product.stockStatus === 'low-stock' 
                    ? 'Low Stock' 
                    : 'Out of Stock'}
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ProductDetail;
