
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Products from "../components/Products";
import About from "../components/About";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-cream-50">
      <Header />
      <main className={`transition-all duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}>
        <Hero />
        <Products />
        <About />
        <ContactForm />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
