import { ShoppingCart, X, Plus, Minus, Trash2 } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { useCart } from "../context/CartContext";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Separator } from "./ui/separator";

interface CartDrawerProps {
  children: React.ReactNode;
}

export function CartDrawer({ children }: CartDrawerProps) {
  const { cart, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();

  return (
    <Sheet>
      <SheetTrigger asChild>
        {children}
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg flex flex-col">
        <SheetHeader>
          <SheetTitle className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <ShoppingCart className="w-5 h-5" />
              Shopping Cart
            </span>
            {cart.length > 0 && (
              <Button 
                variant="ghost" 
                size="sm"
                onClick={clearCart}
                className="text-red-600 hover:text-red-700 hover:bg-red-50"
              >
                Clear All
              </Button>
            )}
          </SheetTitle>
        </SheetHeader>

        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center py-12">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <ShoppingCart className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-black mb-2">Your cart is empty</h3>
            <p className="text-black/60 text-sm mb-6">
              Add some items to get started
            </p>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto py-6 space-y-4">
              {cart.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-24 h-24 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                    <ImageWithFallback
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="text-black truncate mb-1">
                      {item.product.name}
                    </h4>
                    <p className="text-black/60 text-sm mb-2">
                      {item.size} • {item.color}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-7 w-7"
                          onClick={() => updateQuantity(item.product.id, item.size, item.color, item.quantity - 1)}
                        >
                          <Minus className="w-3 h-3" />
                        </Button>
                        <span className="text-sm w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-7 w-7"
                          onClick={() => updateQuantity(item.product.id, item.size, item.color, item.quantity + 1)}
                        >
                          <Plus className="w-3 h-3" />
                        </Button>
                      </div>

                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7 text-red-600 hover:text-red-700 hover:bg-red-50"
                        onClick={() => removeFromCart(item.product.id, item.size, item.color)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="text-right flex-shrink-0">
                    <p className="text-black">
                      R {(item.product.priceValue * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Separator />

            {/* Cart Summary */}
            <div className="space-y-4 pt-4">
              <div className="flex justify-between items-center">
                <span className="text-black/60">Subtotal</span>
                <span className="text-black">R {getTotalPrice().toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-black/60">Shipping</span>
                <span className="text-black/60 text-sm">
                  {getTotalPrice() >= 500 ? 'FREE' : 'R 50.00'}
                </span>
              </div>
              <Separator />
              <div className="flex justify-between items-center">
                <span className="text-black">Total</span>
                <span className="text-black text-xl">
                  R {(getTotalPrice() + (getTotalPrice() >= 500 ? 0 : 50)).toFixed(2)}
                </span>
              </div>

              {getTotalPrice() < 500 && (
                <p className="text-sm text-black/60 text-center">
                  Add R {(500 - getTotalPrice()).toFixed(2)} more for free shipping!
                </p>
              )}

              <Button 
                className="w-full bg-[#BB2D3B] hover:bg-[#9a2430] text-white py-6"
              >
                Checkout
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
