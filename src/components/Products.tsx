
import { products } from "../data/products";
import ProductCard from "./ProductCard";

const Products = () => {
  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-800 mb-4">
            Menu Kopi Kami
          </h2>
          <p className="text-xl text-amber-600 max-w-2xl mx-auto">
            Pilihan kopi terbaik yang dibuat dengan cinta dan keahlian tinggi
          </p>
          <div className="mt-4 h-1 w-24 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
