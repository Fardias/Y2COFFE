
import { useState, useEffect } from "react";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className={`text-center transition-all duration-1000 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
            Hello World!
          </h1>
          <div className="mt-4 h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Selamat datang di aplikasi React pertama Anda! 🎉
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <div className="px-6 py-3 bg-white rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <span className="text-gray-700 font-medium">Dibuat dengan ❤️ menggunakan React</span>
          </div>
          <div className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <span className="font-medium">Lovable + Tailwind CSS</span>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto px-4">
          <div className="p-6 bg-white/70 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Fast Development</h3>
            <p className="text-gray-600 text-sm">Dibangun dengan Vite untuk pengembangan yang super cepat</p>
          </div>
          
          <div className="p-6 bg-white/70 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="text-3xl mb-3">🎨</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Beautiful UI</h3>
            <p className="text-gray-600 text-sm">Styling modern dengan Tailwind CSS dan animasi halus</p>
          </div>
          
          <div className="p-6 bg-white/70 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="text-3xl mb-3">🚀</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Ready to Scale</h3>
            <p className="text-gray-600 text-sm">TypeScript dan komponen siap untuk proyek besar</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
