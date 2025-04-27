
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "@/components/ui/layout";
import ProductCard from "@/components/ProductCard";
import { categories, getProductsByCategory } from "@/data/products";
import { Product } from "@/types";

const CategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState<{ name: string; description?: string } | null>(null);
  
  useEffect(() => {
    if (categoryId) {
      const foundCategory = categories.find(cat => cat.id === categoryId);
      setCategory(foundCategory || null);
      
      const categoryProducts = getProductsByCategory(categoryId);
      setProducts(categoryProducts);
    }
  }, [categoryId]);
  
  if (!category) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Category Not Found</h1>
          <p>The category you are looking for does not exist.</p>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="bg-cream py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">{category.name}</h1>
            {category.description && (
              <p className="text-gray-600 md:text-lg">{category.description}</p>
            )}
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500 mb-4">No products found in this category.</p>
            <p className="text-gray-600">Check back soon for new additions!</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CategoryPage;
