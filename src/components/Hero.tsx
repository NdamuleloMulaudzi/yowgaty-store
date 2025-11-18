import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-black pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1685464583257-66f61ea61380?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWwlMjBzdHJlZXQlMjBzdHlsZXxlbnwxfHx8fDE3NjI0NjQ1OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Yowgaty Collection"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-block mb-6">
            <span className="text-[#BB2D3B] uppercase tracking-[0.3em] text-sm">
              Premium South African Streetwear
            </span>
          </div>
          
          <h1 className="text-white mb-8 leading-tight">
            Fluffy.<br />
            Fierce.<br />
            Affordable.
          </h1>
          
          <p className="text-white/80 text-lg mb-10 max-w-xl leading-relaxed">
            Experience luxury comfort with our signature fluffy cotton collection. 
            Premium quality that doesn't compromise your wallet.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              className="bg-[#BB2D3B] hover:bg-[#9a2430] text-white px-8 py-6 group"
            >
              Shop Collection
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-6"
            >
              View Lookbook
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-12 border-t border-white/20">
            <div>
              <div className="text-[#BB2D3B] text-3xl mb-1">500+</div>
              <div className="text-white/60 text-sm uppercase tracking-wide">Happy Customers</div>
            </div>
            <div>
              <div className="text-[#BB2D3B] text-3xl mb-1">100%</div>
              <div className="text-white/60 text-sm uppercase tracking-wide">Premium Cotton</div>
            </div>
            <div>
              <div className="text-[#BB2D3B] text-3xl mb-1">24/7</div>
              <div className="text-white/60 text-sm uppercase tracking-wide">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
