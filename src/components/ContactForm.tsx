
import { useState } from "react";
import { Send, Loader } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nama: '',
    pesan: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!formData.pesan) {
      toast({
        title: "Error",
        description: "Harap isi kritik dan saran Anda",
        variant: "destructive"
      });
      return;
    }
  
    setIsLoading(true);
  
    try {
      // Ubah data menjadi URL-encoded string
      const formEncodedData = new URLSearchParams({
        nama: formData.nama,
        pesan: formData.pesan
      }).toString();
  
      const response = await fetch("https://script.google.com/macros/s/AKfycbwPI3ZVzHe22My5XhlmpIG0KPHMxxXjebUaQvnK63905bhI_mwxwEmxdnRc19AFS2ihGQ/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: formEncodedData
      });
  
      if (!response.ok) throw new Error("Gagal mengirim");
  
      const result = await response.json();
  
      if (result.status === "success") {
        toast({
          title: "Berhasil!",
          description: "Kritik dan saran Anda telah berhasil dikirim. Terima kasih!",
          variant: "success"
        });
        setFormData({ nama: "", pesan: "" });
      } else {
        throw new Error(result.message || "Error server");
      }
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
            <div>
              <label htmlFor="nama" className="block text-sm font-medium text-amber-700 mb-2">
                Nama *
              </label>
              <input
                type="text"
                id="nama"
                value={formData.nama}
                onChange={(e) => setFormData(prev => ({ ...prev, nama: e.target.value }))}
                className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                placeholder="Masukkan nama Anda (opsional)"
              />
            </div>

            <div>
              <label htmlFor="pesan" className="block text-sm font-medium text-amber-700 mb-2">
                Kritik dan Saran *
              </label>
              <textarea
                id="pesan"
                rows={5}
                value={formData.pesan}
                onChange={(e) => setFormData(prev => ({ ...prev, pesan: e.target.value }))}
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

          
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
