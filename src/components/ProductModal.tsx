
import { X } from "lucide-react";
import { Product } from "../data/products";

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

const ProductModal = ({ product, onClose }: ProductModalProps) => {
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
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className="p-6">
          <h2 className="text-3xl font-bold text-amber-800 mb-2">{product.name}</h2>
          <p className="text-amber-600 mb-4">{product.description}</p>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-amber-700 mb-2">Detail Produk:</h3>
            <p className="text-gray-700 leading-relaxed">{product.details}</p>
          </div>
          
          <div className="flex items-center justify-between mb-6">
            <span className="text-3xl font-bold text-orange-600">{formatPrice(product.price)}</span>
          </div>
          
          <div className="flex gap-4">
            <button
              onClick={onClose}
              className="flex-1 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
            >
              Tutup
            </button>
            <button
              onClick={handleWhatsAppOrder}
              className="flex-1 px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-all duration-200 hover:scale-105"
            >
              Pesan via WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
