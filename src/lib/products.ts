import { Product } from "../types";

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Yowgaty Cap",
    price: "R 299",
    priceValue: 299,
    category: "Headwear",
    image: "https://images.unsplash.com/photo-1550314124-301ca0b773ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXR3ZWFyJTIwY2FwJTIwaGF0fGVufDF8fHx8MTc2MjM2NjMxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    badge: "Limited",
    description: "Elevate your street style with our premium embroidered cap. Made from durable cotton twill with our signature fluffy feel, this cap features adjustable sizing and meticulous attention to detail.",
    details: [
      "Premium cotton twill construction",
      "Embroidered Yowgaty logo",
      "Adjustable strap for perfect fit",
      "Curved brim design",
      "Breathable and comfortable"
    ],
    sizes: ["One Size"],
    colors: ["Black", "White", "Red"]
  },
  {
    id: 2,
    name: "Fluffy Cotton T-Shirt",
    price: "R 399",
    priceValue: 399,
    category: "Tops",
    image: "https://images.unsplash.com/photo-1571455786673-9d9d6c194f90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMHRzaGlydCUyMG1pbmltYWxpc3R8ZW58MXx8fHwxNzYyNDY0NTk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Our signature fluffy cotton t-shirt combines luxury comfort with street-ready style. The perfect everyday essential that feels like wearing a cloud.",
    details: [
      "100% premium fluffy cotton",
      "Classic crew neck design",
      "Reinforced shoulder seams",
      "Pre-shrunk for perfect fit",
      "Heavyweight 220gsm fabric"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "White", "Grey"]
  },
  {
    id: 3,
    name: "Signature Shorts",
    price: "R 449",
    priceValue: 449,
    category: "Bottoms",
    image: "https://images.unsplash.com/photo-1555779877-768c07113b4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXR3ZWFyJTIwc2hvcnRzfGVufDF8fHx8MTc2MjQ2NDU5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    badge: "New",
    description: "Premium athletic shorts designed for style and comfort. Perfect for the gym, street, or just lounging. Features our signature fluffy cotton blend.",
    details: [
      "Cotton-poly blend for durability",
      "Elastic waistband with drawstring",
      "Deep side pockets",
      "Breathable mesh lining",
      "Above-knee length cut"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Navy", "Grey"]
  },
  {
    id: 4,
    name: "Oversized Tee",
    price: "R 429",
    priceValue: 429,
    category: "Tops",
    image: "https://images.unsplash.com/photo-1722310752951-4d459d28c678?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMG92ZXJzaXplZCUyMHRzaGlydHxlbnwxfHx8fDE3NjI0NjQ1OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Make a statement with our oversized tee. Designed for that perfect streetwear silhouette, crafted from our premium fluffy cotton for all-day comfort.",
    details: [
      "Oversized relaxed fit",
      "Drop shoulder design",
      "Extra long body length",
      "Premium fluffy cotton fabric",
      "Minimalist Yowgaty branding"
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Black", "Cream"]
  }
];
