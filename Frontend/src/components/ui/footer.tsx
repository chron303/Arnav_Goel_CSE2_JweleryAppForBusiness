
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-cream pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Harsiddhi<span className="text-gold">Jewellers</span></h3>
            <p className="text-gray-600 mb-6">
              Crafting elegance and luxury since 1990, our jewelry pieces are designed to celebrate life's special moments.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/collections" className="text-gray-600 hover:text-gold transition-colors">Collections</Link>
              </li>
              <li>
                <Link to="/offers" className="text-gray-600 hover:text-gold transition-colors">Offers</Link>
              </li>
              <li>
                <Link to="/collections/rings" className="text-gray-600 hover:text-gold transition-colors">Rings</Link>
              </li>
              <li>
                <Link to="/collections/necklaces" className="text-gray-600 hover:text-gold transition-colors">Necklaces</Link>
              </li>
              <li>
                <Link to="/collections/earrings" className="text-gray-600 hover:text-gold transition-colors">Earrings</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-gold transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-gold transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-600 hover:text-gold transition-colors">Careers</Link>
              </li>
              <li>
                <Link to="/stores" className="text-gray-600 hover:text-gold transition-colors">Store Locator</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Help</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-gold transition-colors">FAQ</Link>
              </li>
              <li>
                <Link to="/shipping" className="text-gray-600 hover:text-gold transition-colors">Shipping & Returns</Link>
              </li>
              <li>
                <Link to="/warranty" className="text-gray-600 hover:text-gold transition-colors">Warranty</Link>
              </li>
              <li>
                <Link to="/payment" className="text-gray-600 hover:text-gold transition-colors">Payment Options</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Harsiddhi Jewellers. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-500 text-sm hover:text-gold transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-500 text-sm hover:text-gold transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
