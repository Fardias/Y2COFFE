import { products } from "../data/products";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-800 mb-4">
            Menu Kopi Premium
          </h2>
          <p className="text-xl text-amber-600 max-w-2xl mx-auto">
            Nikmati kopi berkualitas dengan harga yang ramah di kantong. 
            Mulai dari Rp 6.000, Anda sudah bisa menikmati kopi premium kami.
          </p>
          <div className="mt-4 h-1 w-24 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full"></div>
        </div>

        {products.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-amber-600">Mohon maaf, menu belum tersedia</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        )}

        <div className="mt-16 text-center">
          <p className="text-lg text-amber-700">
            Semua menu kami menggunakan biji kopi premium dengan roasting yang sempurna. 
            Dijamin enak dan harga terjangkau!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Products;
