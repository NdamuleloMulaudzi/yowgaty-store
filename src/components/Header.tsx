import { ShoppingBag, Menu } from "lucide-react";
import { useCart } from "../context/CartContext";
import { CartDrawer } from "./CartDrawer";

interface HeaderProps {
  currentPage: 'home' | 'about' | 'contact';
  setCurrentPage: (page: 'home' | 'about' | 'contact') => void;
}

export function Header({ currentPage, setCurrentPage }: HeaderProps) {
  const { getTotalItems } = useCart();
  
  const handleNavClick = (page: 'home' | 'about' | 'contact', hash?: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // If navigating to home with a hash, scroll to section after a delay
    if (page === 'home' && hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-black/10">
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="relative cursor-pointer"
          >
            <h1 className="tracking-[0.3em] text-black">YOWGATY</h1>
            <div className="absolute -bottom-1 left-0 w-12 h-[2px] bg-[#BB2D3B]"></div>
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-12">
            <button 
              onClick={() => handleNavClick('home', '#shop')}
              className={`${
                currentPage === 'home' ? 'text-black' : 'text-black/80'
              } hover:text-black transition-colors uppercase tracking-wider text-sm`}
            >
              Shop
            </button>
            <button 
              onClick={() => handleNavClick('home', '#new-arrivals')}
              className={`${
                currentPage === 'home' ? 'text-black' : 'text-black/80'
              } hover:text-black transition-colors uppercase tracking-wider text-sm`}
            >
              New Arrivals
            </button>
            <button 
              onClick={() => handleNavClick('about')}
              className={`${
                currentPage === 'about' ? 'text-black' : 'text-black/80'
              } hover:text-black transition-colors uppercase tracking-wider text-sm`}
            >
              About
            </button>
            <button 
              onClick={() => handleNavClick('contact')}
              className={`${
                currentPage === 'contact' ? 'text-black' : 'text-black/80'
              } hover:text-black transition-colors uppercase tracking-wider text-sm`}
            >
              Contact
            </button>
          </nav>

          {/* Cart Icon */}
          <div className="flex items-center gap-4">
            <CartDrawer>
              <button className="relative p-2 hover:bg-black/5 rounded-lg transition-colors group">
                <ShoppingBag className="w-5 h-5 text-black group-hover:scale-110 transition-transform" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#BB2D3B] rounded-full text-white text-xs flex items-center justify-center">
                    {getTotalItems()}
                  </span>
                )}
              </button>
            </CartDrawer>
            <button className="md:hidden p-2 hover:bg-black/5 rounded-lg transition-colors">
              <Menu className="w-5 h-5 text-black" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
