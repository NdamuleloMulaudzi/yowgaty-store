import { Instagram, MessageCircle, ArrowRight } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface FooterProps {
  setCurrentPage: (page: 'home' | 'about' | 'contact') => void;
}

export function Footer({ setCurrentPage }: FooterProps) {
  const handleNavClick = (page: 'home' | 'about' | 'contact', hash?: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
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
    <footer className="bg-black text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="relative inline-block mb-6">
              <h3 className="tracking-[0.3em] text-white">YOWGATY</h3>
              <div className="absolute -bottom-2 left-0 w-16 h-[2px] bg-[#BB2D3B]"></div>
            </div>
            <p className="text-white/60 mb-6 max-w-md leading-relaxed">
              South African streetwear that's fluffy, fierce, and affordable. 
              Join the movement and elevate your style with premium quality pieces.
            </p>
            <div className="flex items-center gap-3">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 hover:bg-[#BB2D3B] flex items-center justify-center transition-all duration-300 group"
              >
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://tiktok.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 hover:bg-[#BB2D3B] flex items-center justify-center transition-all duration-300 group"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a 
                href="https://wa.me/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 hover:bg-[#BB2D3B] flex items-center justify-center transition-all duration-300 group"
              >
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => handleNavClick('home', '#shop')}
                  className="text-white/60 hover:text-[#BB2D3B] transition-colors"
                >
                  Shop All
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('home', '#new-arrivals')}
                  className="text-white/60 hover:text-[#BB2D3B] transition-colors"
                >
                  New Arrivals
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('about')}
                  className="text-white/60 hover:text-[#BB2D3B] transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('contact')}
                  className="text-white/60 hover:text-[#BB2D3B] transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white mb-6 uppercase tracking-wider text-sm">Stay Updated</h4>
            <p className="text-white/60 mb-4 text-sm leading-relaxed">
              Get early access to drops, exclusive offers, and style tips.
            </p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-[#BB2D3B]"
              />
              <Button className="bg-[#BB2D3B] hover:bg-[#9a2430] text-white px-4">
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              © 2025 Yowgaty. All rights reserved.
            </p>
            <div className="flex gap-8 text-sm">
              <a href="#privacy" className="text-white/40 hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#terms" className="text-white/40 hover:text-white transition-colors">
                Terms
              </a>
              <a href="#shipping" className="text-white/40 hover:text-white transition-colors">
                Shipping
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
