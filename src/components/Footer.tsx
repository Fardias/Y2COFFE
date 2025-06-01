
import { Coffee, MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-amber-900 text-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Coffee className="h-8 w-8 text-amber-400" />
              <span className="text-2xl font-bold">BrewMaster</span>
            </div>
            <p className="text-amber-200 mb-4">
              Menyajikan kopi terbaik dengan cita rasa autentik untuk pengalaman yang tak terlupakan.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-amber-300 hover:text-amber-100 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-amber-300 hover:text-amber-100 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-amber-300 hover:text-amber-100 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-300">Kontak</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-amber-400" />
                <span className="text-amber-200">Jl. Kopi Nikmat No. 123, Jakarta</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-amber-400" />
                <span className="text-amber-200">+62 812-3456-7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-400" />
                <span className="text-amber-200">info@brewmaster.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-300">Menu Cepat</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-amber-200 hover:text-amber-100 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-amber-200 hover:text-amber-100 transition-colors"
                >
                  Products
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-amber-200 hover:text-amber-100 transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-amber-200 hover:text-amber-100 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-300">Jam Buka</h3>
            <div className="space-y-2 text-amber-200">
              <div className="flex justify-between">
                <span>Senin - Jumat:</span>
                <span>07:00 - 22:00</span>
              </div>
              <div className="flex justify-between">
                <span>Sabtu - Minggu:</span>
                <span>08:00 - 23:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-amber-800 mt-8 pt-8 text-center">
          <p className="text-amber-300">
            &copy; 2024 BrewMaster Coffee Shop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
