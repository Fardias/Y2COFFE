
import { Coffee, Heart, Star } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-800 mb-4">
            Tentang Y2COFFEE
          </h2>
          <p className="text-xl text-amber-600 max-w-2xl mx-auto">
            Perjalanan kami dalam menghadirkan pengalaman kopi terbaik untuk Anda
          </p>
          <div className="mt-4 h-1 w-24 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=400&fit=crop"
              alt="Coffee shop interior"
              className="rounded-xl shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-amber-800 mb-6">
              Cerita Kami
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Y2COFFEE lahir dari passion mendalam terhadap kopi berkualitas tinggi. Kami percaya bahwa setiap cangkir kopi memiliki cerita, dan kami berkomitmen untuk menghadirkan pengalaman yang tak terlupakan melalui setiap tegukan.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Dengan menggunakan biji kopi pilihan dari petani lokal terbaik, kami memastikan setiap produk yang kami sajikan memenuhi standar kualitas tertinggi. Tim barista berpengalaman kami siap menghadirkan cita rasa yang sempurna untuk Anda.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Bergabunglah dengan komunitas pecinta kopi Y2COFFEE dan rasakan perbedaannya!
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Coffee className="h-8 w-8 text-amber-600" />
            </div>
            <h4 className="text-xl font-bold text-amber-800 mb-2">Kualitas Premium</h4>
            <p className="text-gray-600">
              Menggunakan biji kopi pilihan terbaik dari berbagai daerah di Indonesia
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-amber-600" />
            </div>
            <h4 className="text-xl font-bold text-amber-800 mb-2">Dibuat dengan Cinta</h4>
            <p className="text-gray-600">
              Setiap cangkir kopi dibuat dengan dedikasi dan perhatian detail yang tinggi
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="h-8 w-8 text-amber-600" />
            </div>
            <h4 className="text-xl font-bold text-amber-800 mb-2">Pengalaman Terbaik</h4>
            <p className="text-gray-600">
              Memberikan pelayanan dan pengalaman yang memuaskan untuk setiap pelanggan
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
