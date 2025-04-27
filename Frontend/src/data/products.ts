import { Product, Category } from "@/types";

// Categories 
export const categories: Category[] = [
  {
    id: "rings",
    name: "Rings",
    imageUrl: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Elegant rings for every occasion."
  },
  {
    id: "necklaces",
    name: "Necklaces",
    imageUrl: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Statement necklaces and pendants."
  },
  {
    id: "earrings",
    name: "Earrings",
    imageUrl: "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "From studs to chandeliers."
  },
  {
    id: "bracelets",
    name: "Bracelets",
    imageUrl: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Bangles, cuffs, and charm bracelets."
  },
  {
    id: "wedding",
    name: "Wedding Collection",
    imageUrl: "https://images.unsplash.com/photo-1515616909598-6b56792a0e4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "For your special day."
  },
  {
    id: "men",
    name: "Men's Collection",
    imageUrl: "https://images.unsplash.com/photo-1622398925373-3f91b1ff26d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Masculine designs for modern men."
  }
];

// Products
export const products: Product[] = [
  {
    id: "ring-01",
    name: "Classic Diamond Solitaire",
    category: "Rings",
    subCategory: "Diamond",
    price: 49999,
    imageUrl: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Elegant solitaire diamond ring set in 18k gold. Perfect for engagements and special occasions.",
    material: "18K Gold, Diamond",
    stockStatus: "in-stock",
    isNew: true,
    isFeatured: true,
    rating: 4.9
  },
  {
    id: "necklace-01",
    name: "Lotus Pendant",
    category: "Necklaces",
    price: 24999,
    imageUrl: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Delicate lotus pendant crafted in rose gold with diamond accents.",
    material: "18K Rose Gold, Diamond",
    stockStatus: "in-stock",
    isFeatured: true,
    rating: 4.7
  },
  {
    id: "earring-01",
    name: "Pearl Drop Earrings",
    category: "Earrings",
    price: 18999,
    imageUrl: "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Elegant pearl drop earrings with diamond studs.",
    material: "14K Gold, Pearl, Diamond",
    stockStatus: "in-stock",
    isFeatured: true,
    rating: 4.8
  },
  {
    id: "bracelet-01",
    name: "Diamond Tennis Bracelet",
    category: "Bracelets",
    price: 89999,
    oldPrice: 109999,
    imageUrl: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Classic diamond tennis bracelet with 3 carats of brilliant diamonds.",
    material: "18K White Gold, Diamond",
    stockStatus: "in-stock",
    isOnSale: true,
    rating: 4.9
  },
  {
    id: "ring-02",
    name: "Ruby Eternity Band",
    category: "Rings",
    subCategory: "Gemstone",
    price: 35999,
    imageUrl: "https://images.unsplash.com/photo-1608811380063-5be8ae966546?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Stunning eternity band with alternating rubies and diamonds.",
    material: "18K White Gold, Ruby, Diamond",
    stockStatus: "in-stock",
    rating: 4.6
  },
  {
    id: "necklace-02",
    name: "Diamond Mangalsutra",
    category: "Necklaces",
    price: 75999,
    imageUrl: "https://images.unsplash.com/photo-1630018548696-e1900a7a8f87?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Contemporary diamond mangalsutra with a sleek design.",
    material: "22K Gold, Diamond",
    stockStatus: "in-stock",
    isFeatured: true,
    rating: 4.8
  },
  {
    id: "earring-02",
    name: "Emerald Studs",
    category: "Earrings",
    price: 29999,
    oldPrice: 39999,
    imageUrl: "https://images.unsplash.com/photo-1630553410485-3d628a6458e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Exquisite emerald studs surrounded by diamonds.",
    material: "18K Gold, Emerald, Diamond",
    stockStatus: "low-stock",
    isOnSale: true,
    rating: 4.7
  },
  {
    id: "ring-03",
    name: "Traditional Kundan Ring",
    category: "Rings",
    subCategory: "Traditional",
    price: 23999,
    imageUrl: "https://images.unsplash.com/photo-1687131466265-91fa4e1d0a3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Intricately crafted kundan ring with enamel work.",
    material: "22K Gold, Kundan, Enamel",
    stockStatus: "in-stock",
    isNew: true,
    rating: 4.5
  },
  {
    id: "bracelet-02",
    name: "Gold Kada",
    category: "Bracelets",
    price: 85999,
    imageUrl: "https://images.unsplash.com/photo-1589207212797-cfd578c5ad89?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Traditional gold kada with antique finish.",
    material: "22K Gold",
    stockStatus: "in-stock",
    rating: 4.8
  },
  {
    id: "necklace-03",
    name: "Bridal Choker Set",
    category: "Necklaces",
    price: 129999,
    imageUrl: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Exquisite bridal choker set with earrings and maang tikka.",
    material: "22K Gold, Diamond, Ruby",
    stockStatus: "in-stock",
    isFeatured: true,
    rating: 5.0
  },
  {
    id: "ring-04",
    name: "Men's Signet Ring",
    category: "Rings",
    subCategory: "Men",
    price: 27999,
    imageUrl: "https://images.unsplash.com/photo-1636138389529-d35a2a348dc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Classic signet ring for men in solid gold.",
    material: "18K Gold",
    stockStatus: "in-stock",
    rating: 4.6
  },
  {
    id: "earring-03",
    name: "Jhumka Earrings",
    category: "Earrings",
    price: 42999,
    imageUrl: "https://images.unsplash.com/photo-1630552358853-b384faaee0c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Traditional jhumka earrings with pearl drops.",
    material: "22K Gold, Pearl",
    stockStatus: "in-stock",
    isNew: true,
    rating: 4.9
  },
  {
    id: "necklace-04",
    name: "Diamond Choker",
    category: "Necklaces",
    price: 149999,
    imageUrl: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Stunning diamond choker with intricate design.",
    material: "18K White Gold, Diamond",
    stockStatus: "in-stock",
    isFeatured: true,
    rating: 4.9
  },
  {
    id: "ring-05",
    name: "Sapphire Engagement Ring",
    category: "Rings",
    subCategory: "Gemstone",
    price: 89999,
    imageUrl: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Royal blue sapphire surrounded by diamonds.",
    material: "18K White Gold, Sapphire, Diamond",
    stockStatus: "in-stock",
    isNew: true,
    rating: 4.8
  },
  {
    id: "bracelet-03",
    name: "Pearl Bracelet",
    category: "Bracelets",
    price: 32999,
    imageUrl: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Elegant freshwater pearl bracelet with gold clasp.",
    material: "18K Gold, Freshwater Pearls",
    stockStatus: "in-stock",
    rating: 4.7
  },
  {
    id: "earring-04",
    name: "Diamond Chandelier Earrings",
    category: "Earrings",
    price: 119999,
    oldPrice: 139999,
    imageUrl: "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Stunning chandelier earrings with cascading diamonds.",
    material: "18K White Gold, Diamond",
    stockStatus: "in-stock",
    isOnSale: true,
    rating: 5.0
  },
  {
    id: "necklace-05",
    name: "Diamond Solitaire Pendant",
    category: "Necklaces",
    price: 55999,
    imageUrl: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f",
    description: "Elegant solitaire diamond pendant in white gold setting.",
    material: "18K White Gold, Diamond",
    stockStatus: "in-stock",
    isNew: true,
    rating: 4.8
  },
  {
    id: "ring-06",
    name: "Vintage Rose Gold Ring",
    category: "Rings",
    subCategory: "Vintage",
    price: 32999,
    imageUrl: "https://images.unsplash.com/photo-1605100804763-247f67b3557e",
    description: "Vintage-inspired rose gold ring with intricate filigree work.",
    material: "18K Rose Gold",
    stockStatus: "in-stock",
    isFeatured: true,
    rating: 4.7
  },
  {
    id: "earring-05",
    name: "Sapphire Drop Earrings",
    category: "Earrings",
    price: 45999,
    imageUrl: "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d",
    description: "Stunning sapphire drop earrings with diamond accents.",
    material: "18K White Gold, Sapphire, Diamond",
    stockStatus: "in-stock",
    isNew: true,
    rating: 4.9
  },
  {
    id: "bracelet-04",
    name: "Ruby Tennis Bracelet",
    category: "Bracelets",
    price: 79999,
    imageUrl: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a",
    description: "Elegant ruby and diamond tennis bracelet.",
    material: "18K White Gold, Ruby, Diamond",
    stockStatus: "in-stock",
    isFeatured: true,
    rating: 4.8
  },
  {
    id: "men-02",
    name: "Men's Gold Chain",
    category: "Necklaces",
    subCategory: "Men",
    price: 89999,
    imageUrl: "https://images.unsplash.com/photo-1622398925373-3f91b1ff26d4",
    description: "Heavy gold chain for men with modern design.",
    material: "22K Gold",
    stockStatus: "in-stock",
    isNew: true,
    rating: 4.7
  }
];

// Featured products
export const featuredProducts = products.filter(product => product.isFeatured);

// New arrivals
export const newArrivals = products.filter(product => product.isNew);

// Sale products
export const saleProducts = products.filter(product => product.isOnSale);

// Get products by category
export const getProductsByCategory = (categoryId: string) => {
  return products.filter(product => 
    product.category.toLowerCase() === categories.find(cat => cat.id === categoryId)?.name.toLowerCase()
  );
};

// Get product by ID
export const getProductById = (productId: string) => {
  return products.find(product => product.id === productId);
};

// Get related products
export const getRelatedProducts = (productId: string, limit = 4) => {
  const product = getProductById(productId);
  if (!product) return [];
  
  return products
    .filter(p => p.category === product.category && p.id !== productId)
    .slice(0, limit);
};
