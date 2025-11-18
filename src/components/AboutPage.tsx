import { Award, Heart, Users, Sparkles } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const milestones = [
  { year: "2023", title: "Founded", description: "Yowgaty was born in Johannesburg" },
  { year: "2024", title: "First Collection", description: "Launched our signature fluffy cotton line" },
  { year: "2025", title: "500+ Customers", description: "Growing community of style enthusiasts" }
];

const team = [
  {
    role: "Founder & Creative Director",
    description: "Passionate about bringing affordable luxury to South African streetwear"
  },
  {
    role: "Head of Design",
    description: "Crafting unique pieces that blend comfort with fierce style"
  },
  {
    role: "Quality Control",
    description: "Ensuring every piece meets our premium standards"
  }
];

export function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-block mb-6">
              <span className="text-[#BB2D3B] uppercase tracking-[0.3em] text-sm">
                About Yowgaty
              </span>
            </div>
            <h1 className="text-white mb-6">
              Redefining South African Streetwear
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              We're on a mission to bring premium quality streetwear to young South Africans 
              who refuse to compromise on style or their wallet. Every piece tells a story of 
              craftsmanship, culture, and confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block mb-4">
                <span className="text-[#BB2D3B] uppercase tracking-[0.3em] text-sm">
                  Our Story
                </span>
              </div>
              <h2 className="text-black mb-6">
                From Vision to Reality
              </h2>
              <div className="space-y-4 text-black/70 leading-relaxed">
                <p>
                  Yowgaty was born from a simple observation: young South Africans deserve 
                  access to premium streetwear without the premium price tag. We saw a gap 
                  in the market for clothing that felt luxurious, looked fierce, and remained 
                  accessible.
                </p>
                <p>
                  Our signature "fluffy cotton" isn't just a material choice—it's a statement. 
                  It represents the perfect balance of comfort and quality, soft yet durable, 
                  approachable yet premium.
                </p>
                <p>
                  Today, we're proud to serve a growing community of style-conscious individuals 
                  who understand that luxury is about quality, not just price. Every Yowgaty 
                  piece is designed in South Africa, for South Africa.
                </p>
              </div>
            </div>
            <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1685464583257-66f61ea61380?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWwlMjBzdHJlZXQlMjBzdHlsZXxlbnwxfHx8fDE3NjI0NjQ1OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Yowgaty story"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-block mb-4">
              <span className="text-[#BB2D3B] uppercase tracking-[0.3em] text-sm">
                Our Values
              </span>
            </div>
            <h2 className="text-black mb-4">
              What We Stand For
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Quality First",
                description: "Premium materials and craftsmanship in every piece"
              },
              {
                icon: Heart,
                title: "Accessible Luxury",
                description: "High-end feel without the high-end price"
              },
              {
                icon: Users,
                title: "Community Driven",
                description: "Built by and for South African youth culture"
              },
              {
                icon: Sparkles,
                title: "Authentic Style",
                description: "Bold designs that make a statement"
              }
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-white p-8 text-center group hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-black group-hover:bg-[#BB2D3B] transition-colors duration-300 flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-black mb-3">{value.title}</h3>
                  <p className="text-black/60 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-block mb-4">
              <span className="text-[#BB2D3B] uppercase tracking-[0.3em] text-sm">
                Our Journey
              </span>
            </div>
            <h2 className="text-black mb-4">
              Key Milestones
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-8 mb-12 last:mb-0">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-black flex items-center justify-center">
                    <span className="text-[#BB2D3B] text-2xl">{milestone.year}</span>
                  </div>
                </div>
                <div className="pt-4">
                  <h3 className="text-black mb-2">{milestone.title}</h3>
                  <p className="text-black/60">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-block mb-4">
              <span className="text-[#BB2D3B] uppercase tracking-[0.3em] text-sm">
                The Team
              </span>
            </div>
            <h2 className="text-white mb-4">
              Passionate About Style
            </h2>
            <p className="text-white/60">
              A small but dedicated team working to bring you the best in South African streetwear
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="bg-white/5 p-8 text-center group hover:bg-white/10 transition-colors">
                <div className="w-20 h-20 bg-[#BB2D3B] rounded-full mx-auto mb-6"></div>
                <h3 className="text-white mb-3">{member.role}</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
