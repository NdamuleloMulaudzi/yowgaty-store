import { useState } from "react";
import { ArrowLeft, ShoppingCart, Check } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Product } from "../types";
import { useCart } from "../context/CartContext";

interface ProductDetailPageProps {
  product: Product;
  onBack: () => void;
}

export function ProductDetailPage({ product, onBack }: ProductDetailPageProps) {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart(product, selectedSize, selectedColor, quantity);
  };

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Back Button */}
      <div className="container mx-auto px-6 py-6">
        <Button
          variant="ghost"
          onClick={onBack}
          className="group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Shop
        </Button>
      </div>

      {/* Product Detail */}
      <div className="container mx-auto px-6 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Product Image */}
          <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
            <ImageWithFallback
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="lg:py-8">
            {/* Badge */}
            {product.badge && (
              <div className="inline-block mb-4">
                <span className="bg-[#BB2D3B] text-white px-3 py-1 text-xs uppercase tracking-wider">
                  {product.badge}
                </span>
              </div>
            )}

            {/* Title & Price */}
            <h1 className="text-black mb-2">{product.name}</h1>
            <p className="text-black/60 text-sm uppercase tracking-wide mb-4">
              {product.category}
            </p>
            <div className="text-3xl text-black mb-6">{product.price}</div>

            {/* Description */}
            <p className="text-black/70 leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Color Selection */}
            <div className="mb-6">
              <label className="block text-black mb-3">
                Color: <span className="text-black/60">{selectedColor}</span>
              </label>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`relative w-12 h-12 rounded-full border-2 transition-all ${
                      selectedColor === color
                        ? 'border-[#BB2D3B] scale-110'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                    style={{
                      backgroundColor: color.toLowerCase() === 'white' ? '#FFFFFF' :
                                     color.toLowerCase() === 'black' ? '#000000' :
                                     color.toLowerCase() === 'grey' || color.toLowerCase() === 'gray' ? '#9CA3AF' :
                                     color.toLowerCase() === 'red' ? '#BB2D3B' :
                                     color.toLowerCase() === 'navy' ? '#1E3A8A' :
                                     color.toLowerCase() === 'cream' ? '#FEF3C7' :
                                     color.toLowerCase()
                    }}
                  >
                    {selectedColor === color && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Check 
                          className={`w-5 h-5 ${
                            color.toLowerCase() === 'white' || color.toLowerCase() === 'cream' 
                              ? 'text-black' 
                              : 'text-white'
                          }`} 
                        />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-8">
              <label className="block text-black mb-3">
                Size: <span className="text-black/60">{selectedSize}</span>
              </label>
              <div className="flex gap-2 flex-wrap">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-6 py-3 border-2 transition-all ${
                      selectedSize === size
                        ? 'border-black bg-black text-white'
                        : 'border-gray-300 text-black hover:border-black'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="block text-black mb-3">Quantity</label>
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="h-12 w-12"
                >
                  -
                </Button>
                <span className="text-black text-xl w-12 text-center">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                  className="h-12 w-12"
                >
                  +
                </Button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <Button
              onClick={handleAddToCart}
              className="w-full bg-[#BB2D3B] hover:bg-[#9a2430] text-white py-6 mb-8"
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Add to Cart
            </Button>

            {/* Product Details */}
            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-black mb-4">Product Details</h3>
              <ul className="space-y-3">
                {product.details.map((detail, index) => (
                  <li key={index} className="flex items-start gap-3 text-black/70">
                    <div className="w-1.5 h-1.5 bg-[#BB2D3B] rounded-full mt-2 flex-shrink-0"></div>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
