import { MapPin, Phone, Mail, Clock, Instagram, MessageCircle } from "lucide-react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Label } from "./ui/label";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["123 Street Style Avenue", "Johannesburg, 2000", "South Africa"]
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+27 (0)12 345 6789", "Mon - Fri: 9am - 6pm"]
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@yowgaty.co.za", "support@yowgaty.co.za"]
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Friday: 9am - 6pm", "Saturday: 10am - 4pm", "Sunday: Closed"]
  }
];

const faqs = [
  {
    question: "What is your shipping policy?",
    answer: "We offer free shipping on orders over R500 within South Africa. Standard delivery takes 3-5 business days."
  },
  {
    question: "Can I return or exchange items?",
    answer: "Yes! We offer 30-day returns and exchanges on unworn items with original tags. Contact us to initiate a return."
  },
  {
    question: "How do I track my order?",
    answer: "Once your order ships, you'll receive a tracking number via email. You can use this to track your package."
  },
  {
    question: "Do you offer international shipping?",
    answer: "Currently, we only ship within South Africa, but we're working on expanding to other African countries soon!"
  }
];

export function ContactPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-block mb-6">
              <span className="text-[#BB2D3B] uppercase tracking-[0.3em] text-sm">
                Get In Touch
              </span>
            </div>
            <h1 className="text-white mb-6">
              We'd Love to<br />Hear From You
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Have questions about our products, need styling advice, or just want to say hi? 
              Our team is here to help. Reach out through any of the channels below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="inline-block mb-4">
                <span className="text-[#BB2D3B] uppercase tracking-[0.3em] text-sm">
                  Send a Message
                </span>
              </div>
              <h2 className="text-black mb-8">
                Drop Us a Line
              </h2>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input 
                      id="firstName"
                      placeholder="John" 
                      className="border-black/20 focus:border-[#BB2D3B]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input 
                      id="lastName"
                      placeholder="Doe" 
                      className="border-black/20 focus:border-[#BB2D3B]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email"
                    type="email"
                    placeholder="john@example.com" 
                    className="border-black/20 focus:border-[#BB2D3B]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number (Optional)</Label>
                  <Input 
                    id="phone"
                    type="tel"
                    placeholder="+27 (0)12 345 6789" 
                    className="border-black/20 focus:border-[#BB2D3B]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input 
                    id="subject"
                    placeholder="How can we help?" 
                    className="border-black/20 focus:border-[#BB2D3B]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message"
                    placeholder="Tell us what's on your mind..." 
                    rows={6}
                    className="border-black/20 focus:border-[#BB2D3B]"
                  />
                </div>

                <Button 
                  className="bg-[#BB2D3B] hover:bg-[#9a2430] text-white px-8 py-6 w-full md:w-auto"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <div className="inline-block mb-4">
                <span className="text-[#BB2D3B] uppercase tracking-[0.3em] text-sm">
                  Contact Information
                </span>
              </div>
              <h2 className="text-black mb-8">
                Reach Out Directly
              </h2>

              <div className="space-y-8 mb-12">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-black flex items-center justify-center">
                          <Icon className="w-6 h-6 text-[#BB2D3B]" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-black mb-2">{info.title}</h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-black/60 text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Social Media */}
              <div className="bg-gray-50 p-8">
                <h3 className="text-black mb-4">Connect on Social Media</h3>
                <p className="text-black/60 mb-6 text-sm">
                  Follow us for the latest drops, style inspiration, and exclusive offers.
                </p>
                <div className="flex gap-3">
                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-black hover:bg-[#BB2D3B] flex items-center justify-center transition-colors group"
                  >
                    <Instagram className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                  </a>
                  <a 
                    href="https://tiktok.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-black hover:bg-[#BB2D3B] flex items-center justify-center transition-colors group"
                  >
                    <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://wa.me/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-black hover:bg-[#BB2D3B] flex items-center justify-center transition-colors group"
                  >
                    <MessageCircle className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-block mb-4">
              <span className="text-[#BB2D3B] uppercase tracking-[0.3em] text-sm">
                FAQs
              </span>
            </div>
            <h2 className="text-black mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-black/60">
              Quick answers to common questions. Can't find what you're looking for? Contact us directly.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-8">
                <h3 className="text-black mb-3">{faq.question}</h3>
                <p className="text-black/60 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-white mb-6">
            Ready to Shop?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Explore our collection of premium streetwear designed for the bold and the fierce.
          </p>
          <Button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-[#BB2D3B] hover:bg-[#9a2430] text-white px-8 py-6"
          >
            Browse Collection
          </Button>
        </div>
      </section>
    </div>
  );
}
