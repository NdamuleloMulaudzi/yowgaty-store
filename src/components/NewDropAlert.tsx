import { Button } from "./ui/button";
import { Sparkles, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function NewDropAlert() {
  return (
    <section id="new-arrivals" className="relative py-24 bg-black text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-[#BB2D3B]/20 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-[#BB2D3B]" />
              <span className="text-[#BB2D3B] uppercase tracking-wider text-sm">
                New Drop Alert
              </span>
            </div>
            
            <h2 className="text-white mb-6">
              Exclusive Cap<br />Collection
            </h2>
            
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              Elevate your street style with our latest premium cap collection. 
              Designed in South Africa, crafted for the bold. Limited quantities available.
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#BB2D3B] rounded-full mt-2"></div>
                <div>
                  <div className="text-white mb-1">Premium Embroidered Details</div>
                  <div className="text-white/50 text-sm">Hand-crafted precision stitching</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#BB2D3B] rounded-full mt-2"></div>
                <div>
                  <div className="text-white mb-1">Adjustable Fit</div>
                  <div className="text-white/50 text-sm">One size fits all comfort</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-[#BB2D3B] rounded-full mt-2"></div>
                <div>
                  <div className="text-white mb-1">Limited Edition Release</div>
                  <div className="text-white/50 text-sm">Only 100 pieces available</div>
                </div>
              </div>
            </div>

            <Button className="bg-[#BB2D3B] hover:bg-[#9a2430] text-white px-8 py-6 group">
              Shop Caps Collection
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1550314124-301ca0b773ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXR3ZWFyJTIwY2FwJTIwaGF0fGVufDF8fHx8MTc2MjM2NjMxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Yowgaty exclusive caps collection"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Accent Element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#BB2D3B] rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
