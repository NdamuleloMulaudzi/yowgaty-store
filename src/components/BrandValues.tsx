import { Award, Heart, Sparkles, Quote } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Premium Quality",
    description: "Crafted from hard, fluffy cotton that feels luxurious against your skin. Every piece is made to last."
  },
  {
    icon: Heart,
    title: "Affordable Luxury",
    description: "High-end streetwear shouldn't empty your wallet. We bring you premium quality at prices that make sense."
  },
  {
    icon: Sparkles,
    title: "South African Pride",
    description: "Designed and inspired by South African street culture. Wear your pride, own your style."
  }
];

export function BrandValues() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-block mb-4">
            <span className="text-[#BB2D3B] uppercase tracking-[0.3em] text-sm">
              Why Choose Yowgaty
            </span>
          </div>
          <h2 className="text-black mb-4">
            More Than Just Clothing
          </h2>
          <p className="text-black/60 text-lg">
            We're not just a brand - we're a movement. Experience the perfect blend 
            of comfort, style, and affordability.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-12 mb-24">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="text-center group">
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 bg-black group-hover:bg-[#BB2D3B] transition-colors duration-300 flex items-center justify-center">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-20 h-20 border-2 border-black/10 -z-10"></div>
                </div>
                <h3 className="text-black mb-3">{value.title}</h3>
                <p className="text-black/60 leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Testimonial */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-12 relative">
            <Quote className="absolute top-8 left-8 w-12 h-12 text-[#BB2D3B]/20" />
            <div className="relative z-10 text-center">
              <p className="text-black/80 text-xl mb-6 italic leading-relaxed">
                The quality of Yowgaty's fluffy cotton is unmatched. It's like wearing a cloud, 
                but with serious street cred. Finally, affordable luxury that actually delivers.
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-[2px] bg-[#BB2D3B]"></div>
                <div>
                  <div className="text-black">Thabo M.</div>
                  <div className="text-black/50 text-sm">Johannesburg</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
