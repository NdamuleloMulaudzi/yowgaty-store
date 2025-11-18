import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProductShowcase } from "./components/ProductShowcase";
import { NewDropAlert } from "./components/NewDropAlert";
import { BrandValues } from "./components/BrandValues";
import { Footer } from "./components/Footer";
import { AboutPage } from "./components/AboutPage";
import { ContactPage } from "./components/ContactPage";
import { ProductDetailPage } from "./components/ProductDetailPage";
import { CartProvider } from "./context/CartContext";
import { Toaster } from "./components/ui/sonner";
import { Product } from "./types";

type Page = 'home' | 'about' | 'contact' | 'product';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setCurrentPage('product');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    setSelectedProduct(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case 'product':
        return selectedProduct ? (
          <ProductDetailPage product={selectedProduct} onBack={handleBackToHome} />
        ) : null;
      default:
        return (
          <main>
            <Hero />
            <ProductShowcase onProductClick={handleProductClick} />
            <NewDropAlert />
            <BrandValues />
          </main>
        );
    }
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        <Header 
          currentPage={currentPage === 'product' ? 'home' : currentPage as 'home' | 'about' | 'contact'} 
          setCurrentPage={(page) => setCurrentPage(page as Page)} 
        />
        {renderPage()}
        <Footer setCurrentPage={(page) => setCurrentPage(page as Page)} />
        <Toaster />
      </div>
    </CartProvider>
  );
}
