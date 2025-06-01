
import { Product } from "../data/products";

interface ProductCardProps {
  product: Product;
  onViewDetails: () => void;
}

const ProductCard = ({ product, onViewDetails }: ProductCardProps) => {
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
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-amber-800 mb-2">{product.name}</h3>
        <p className="text-amber-600 mb-4 text-sm leading-relaxed">{product.description}</p>
        
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-orange-600">{formatPrice(product.price)}</span>
        </div>
        
        <div className="flex flex-col gap-2">
          <button
            onClick={onViewDetails}
            className="w-full px-4 py-2 bg-amber-100 text-amber-700 rounded-lg font-medium hover:bg-amber-200 transition-colors duration-200"
          >
            Lihat Detail
          </button>
          <button
            onClick={handleWhatsAppOrder}
            className="w-full px-4 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-all duration-200 hover:scale-105"
          >
            Pesan via WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
