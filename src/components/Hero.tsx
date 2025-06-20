const Hero = () => {
  return (
    <section id="home" className="min-h-screen pt-20 flex items-center bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-amber-800 mb-6 animate-fade-in">
            Kopi Premium
            <span className="block text-orange-600">Harga Bersahabat</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-amber-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Nikmati cita rasa kopi premium tanpa khawatir dengan harga. 
            Kami menghadirkan pengalaman kopi terbaik dengan harga yang ramah di kantong.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-amber-600 text-white rounded-lg font-semibold text-lg hover:bg-amber-700 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Lihat Menu Kami
            </button>
            <button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white text-amber-600 border-2 border-amber-600 rounded-lg font-semibold text-lg hover:bg-amber-50 transition-all duration-300 shadow-lg"
            >
              Hubungi Kami
            </button>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold text-amber-800 mb-2">Harga Terjangkau</h3>
              <p className="text-amber-600">Mulai dari Rp 6.000, nikmati kopi berkualitas</p>
            </div>
            
            <div className="text-center p-6">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-semibold text-amber-800 mb-2">Kualitas Terjamin</h3>
              <p className="text-amber-600">Biji kopi premium dengan roasting yang sempurna</p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
