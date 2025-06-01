
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { products } from "../data/products";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === parseInt(id || ""));

  if (!product) {
    return (
      <div className="min-h-screen bg-cream-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-amber-800 mb-4">Menu tidak ditemukan</h1>
          <button
            onClick={() => navigate("/")}
            className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors"
          >
            Kembali ke Home
          </button>
        </div>
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleWhatsAppOrder = () => {
    const message = `Halo, saya ingin memesan ${product.name} seharga ${formatPrice(product.price)}. Apakah masih tersedia?`;
    const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-cream-50">
      <Header />
      
      <main className="pt-20 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <button
            onClick={() => navigate("/")}
            className="flex items-center space-x-2 text-amber-700 hover:text-amber-900 mb-8 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Kembali ke Menu</span>
          </button>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Product Image */}
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-96 lg:h-full object-cover"
                />
              </div>

              {/* Product Info */}
              <div className="p-8 lg:p-12">
                <h1 className="text-4xl font-bold text-amber-800 mb-4">{product.name}</h1>
                <p className="text-xl text-amber-600 mb-6">{product.description}</p>
                
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-amber-700 mb-4">Detail Menu</h2>
                  <p className="text-gray-700 leading-relaxed">{product.details}</p>
                </div>
                
                <div className="flex items-center justify-between mb-8">
                  <span className="text-4xl font-bold text-orange-600">{formatPrice(product.price)}</span>
                </div>
                
                <button
                  onClick={handleWhatsAppOrder}
                  className="w-full px-8 py-4 bg-green-600 text-white rounded-lg font-semibold text-lg hover:bg-green-700 transition-all duration-200 hover:scale-105"
                >
                  Pesan via WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
