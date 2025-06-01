
import { useState } from "react";
import { Star, Send, Loader } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    rating: 0,
    kritikSaran: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.nama || !formData.email || !formData.kritikSaran || formData.rating === 0) {
      toast({
        title: "Error",
        description: "Harap lengkapi semua field yang diperlukan",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    try {
      // Simulasi API call ke Google Sheets
      // Dalam implementasi nyata, Anda perlu mengganti dengan endpoint Google Sheets API yang sebenarnya
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Berhasil!",
        description: "Kritik dan saran Anda telah berhasil dikirim. Terima kasih!",
      });

      // Reset form
      setFormData({
        nama: '',
        email: '',
        rating: 0,
        kritikSaran: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Terjadi kesalahan saat mengirim data. Silakan coba lagi.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleRatingClick = (rating: number) => {
    setFormData(prev => ({ ...prev, rating }));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-800 mb-4">
            Kritik & Saran
          </h2>
          <p className="text-xl text-amber-600 max-w-2xl mx-auto">
            Bantu kami memberikan pelayanan yang lebih baik dengan memberikan masukan Anda
          </p>
          <div className="mt-4 h-1 w-24 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full"></div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="nama" className="block text-sm font-medium text-amber-700 mb-2">
                  Nama Lengkap *
                </label>
                <input
                  type="text"
                  id="nama"
                  value={formData.nama}
                  onChange={(e) => setFormData(prev => ({ ...prev, nama: e.target.value }))}
                  className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  placeholder="Masukkan nama lengkap Anda"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-amber-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  placeholder="contoh@email.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-amber-700 mb-2">
                Rating *
              </label>
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => handleRatingClick(star)}
                    className="focus:outline-none transition-colors"
                  >
                    <Star
                      className={`h-8 w-8 ${
                        star <= formData.rating
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      } hover:text-yellow-400 transition-colors`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="kritikSaran" className="block text-sm font-medium text-amber-700 mb-2">
                Kritik dan Saran *
              </label>
              <textarea
                id="kritikSaran"
                rows={5}
                value={formData.kritikSaran}
                onChange={(e) => setFormData(prev => ({ ...prev, kritikSaran: e.target.value }))}
                className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none"
                placeholder="Bagikan kritik dan saran Anda untuk membantu kami memberikan pelayanan yang lebih baik..."
                required
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-amber-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-amber-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center space-x-2"
            >
              {isLoading ? (
                <>
                  <Loader className="h-5 w-5 animate-spin" />
                  <span>Mengirim...</span>
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  <span>Kirim Masukan</span>
                </>
              )}
            </button>
          </form>

          <div className="mt-6 p-4 bg-amber-50 rounded-lg">
            <h3 className="font-semibold text-amber-800 mb-2">Catatan untuk Google Sheets API:</h3>
            <p className="text-sm text-amber-600">
              Untuk mengaktifkan integrasi Google Sheets, Anda perlu:
            </p>
            <ol className="text-sm text-amber-600 list-decimal list-inside mt-2 space-y-1">
              <li>Membuat Google Sheets API credentials</li>
              <li>Mengatur spreadsheet ID dan range</li>
              <li>Mengganti endpoint API di kode form ini</li>
              <li>Menambahkan API key ke environment variables</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
