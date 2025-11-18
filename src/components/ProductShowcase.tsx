import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { products } from "../lib/products";
import { Product } from "../types";

interface ProductShowcaseProps {
  onProductClick: (product: Product) => void;
}

export function ProductShowcase({ onProductClick }: ProductShowcaseProps) {
  return (
    <section id="shop" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-block mb-4">
            <span className="text-[#BB2D3B] uppercase tracking-[0.3em] text-sm">
              Featured Collection
            </span>
          </div>
          <h2 className="text-black mb-4">
            Signature Pieces
          </h2>
          <p className="text-black/60 text-lg">
            Crafted with premium fluffy cotton. Each piece designed to make a statement.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="group cursor-pointer"
              onClick={() => onProductClick(product)}
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] bg-gray-100 mb-4 overflow-hidden">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Badge */}
                {product.badge && (
                  <div className="absolute top-4 right-4 bg-[#BB2D3B] text-white px-3 py-1 text-xs uppercase tracking-wider">
                    {product.badge}
                  </div>
                )}

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button className="bg-white text-black hover:bg-[#BB2D3B] hover:text-white">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-black/50 text-sm uppercase tracking-wide">
                    {product.category}
                  </span>
                </div>
                <h3 className="text-black group-hover:text-[#BB2D3B] transition-colors">
                  {product.name}
                </h3>
                <div className="text-black">
                  {product.price}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <Button 
            variant="outline"
            className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-6"
          >
            View Full Collection
          </Button>
        </div>
      </div>
    </section>
  );
}
