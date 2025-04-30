
import { useState } from "react";
import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ShoppingCart } from "lucide-react";
import Layout from "@/components/ui/layout";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { useToast } from "@/hooks/use-toast";

const CartPage = () => {
  const { cartItems, updateQuantity, removeFromCart, clearCart, cartTotal } = useCart();
  const { toast } = useToast();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  
  const handleQuantityChange = (productId: string, newQuantity: number) => {
    updateQuantity(productId, newQuantity);
  };
  
  const handleRemoveItem = (productId: string, productName: string) => {
    removeFromCart(productId);
    toast({
      title: "Item removed",
      description: `${productName} has been removed from your cart.`,
      duration: 3000,
    });
  };
  
  const handleCheckout = () => {
    setIsCheckingOut(true);
    
    setTimeout(() => {
      toast({
        title: "Order placed successfully!",
        description: "Thank you for your purchase. Your order has been received.",
        duration: 5000,
      });
      
      clearCart();
      setIsCheckingOut(false);
    }, 1500);
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>
        
        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <ShoppingCart className="mx-auto h-16 w-16 text-gray-300 mb-4" />
            <h2 className="text-2xl font-medium mb-4">Your cart is empty</h2>
            <p className="text-gray-500 mb-8">Looks like you haven't added anything to your cart yet.</p>
            <Button asChild>
              <Link to="/collections">
                Continue Shopping
              </Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="hidden md:grid grid-cols-12 gap-4 p-4 bg-gray-50 border-b">
                  <div className="col-span-6">
                    <span className="font-medium">Product</span>
                  </div>
                  <div className="col-span-2 text-center">
                    <span className="font-medium">Price</span>
                  </div>
                  <div className="col-span-2 text-center">
                    <span className="font-medium">Quantity</span>
                  </div>
                  <div className="col-span-2 text-right">
                    <span className="font-medium">Total</span>
                  </div>
                </div>
                
                {cartItems.map((item) => (
                  <div key={item.product.id} className="grid md:grid-cols-12 grid-cols-1 gap-4 p-4 border-b items-center">
                    {/* Product */}
                    <div className="md:col-span-6 flex items-center">
                      <div className="w-20 h-20 rounded-md overflow-hidden mr-4">
                        <img 
                          src={item.product.imageUrl} 
                          alt={item.product.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <Link to={`/product/${item.product.id}`} className="font-medium hover:text-gold">
                          {item.product.name}
                        </Link>
                        <p className="text-gray-500 text-sm">{item.product.category}</p>
                      </div>
                    </div>
                    
                    {/* Price */}
                    <div className="md:col-span-2 md:text-center flex justify-between md:block">
                      <span className="md:hidden">Price:</span>
                      <span>₹{item.product.price.toLocaleString()}</span>
                    </div>
                    
                    {/* Quantity */}
                    <div className="md:col-span-2 md:text-center flex justify-between md:block">
                      <span className="md:hidden">Quantity:</span>
                      <div className="flex items-center border border-gray-300 rounded-md inline-flex">
                        <button 
                          className="px-2 py-1 text-gray-600 hover:text-gold"
                          onClick={() => handleQuantityChange(item.product.id, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="px-3 py-1 border-l border-r border-gray-300">
                          {item.quantity}
                        </span>
                        <button 
                          className="px-2 py-1 text-gray-600 hover:text-gold"
                          onClick={() => handleQuantityChange(item.product.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                    
                    {/* Total */}
                    <div className="md:col-span-2 md:text-right flex justify-between md:block">
                      <span className="md:hidden">Total:</span>
                      <div className="flex items-center justify-end">
                        <span className="mr-4">₹{(item.product.price * item.quantity).toLocaleString()}</span>
                        <button 
                          className="text-red-500 hover:text-red-700"
                          onClick={() => handleRemoveItem(item.product.id, item.product.name)}
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-between mt-6">
                <Button asChild variant="outline">
                  <Link to="/collections">
                    Continue Shopping
                  </Link>
                </Button>
                
                <Button 
                  variant="destructive" 
                  onClick={() => {
                    clearCart();
                    toast({
                      title: "Cart cleared",
                      description: "All items have been removed from your cart.",
                      duration: 3000,
                    });
                  }}
                >
                  Clear Cart
                </Button>
              </div>
            </div>
            
            {/* Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span>₹{cartTotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span>Calculated at checkout</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax</span>
                    <span>Calculated at checkout</span>
                  </div>
                  <div className="border-t pt-4 mt-4">
                    <div className="flex justify-between font-bold">
                      <span>Total</span>
                      <span>₹{cartTotal.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-gold hover:bg-gold-dark text-white"
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                >
                  {isCheckingOut ? "Processing..." : "Proceed to Checkout"}
                </Button>
                
                <div className="mt-6 text-sm text-gray-500">
                  <p>Secure checkout powered by our payment partners. Your information is protected.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CartPage;
