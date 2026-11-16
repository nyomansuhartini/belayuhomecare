import { useState } from 'react';
import { Heart, Phone, Menu, X, Stethoscope, Layers, Tag, HelpCircle, Calendar } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Layanan", href: "#layanan", icon: <Layers size={18} /> },
    { label: "Paket & Biaya", href: "#paket", icon: <Tag size={18} /> },
    { label: "Profil Ners", href: "#profil", icon: <Stethoscope size={18} /> },
    { label: "FAQ", href: "#faq", icon: <HelpCircle size={18} /> }
  ];

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo Brand: Bersih & Ringkas untuk Semua Ukuran Layar */}
          <div 
            className="flex items-center gap-2.5 cursor-pointer shrink-0" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="bg-teal-700 text-white p-2 rounded-xl shadow-sm flex items-center justify-center">
              <Heart size={20} fill="currentColor" />
            </div>
            <div>
              <span className="text-lg sm:text-xl font-extrabold text-teal-950 tracking-tight leading-tight block">
                {siteConfig.name}
              </span>
              <span className="text-[10px] font-semibold text-teal-700 uppercase tracking-wider hidden sm:block">
                Homecare Medis Bali
              </span>
            </div>
          </div>
          
          {/* Nav Links Desktop: Ramping (Hanya 4 Menu Utama) */}
          <div className="hidden md:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href} 
                className="text-slate-600 hover:text-teal-700 font-semibold text-sm transition"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Action Button Desktop: 1 Tombol Utama Jelas */}
          <div className="hidden md:flex items-center gap-3">
            <a 
              href="#booking"
              className="text-teal-800 hover:text-teal-950 text-xs font-bold px-3 py-2 rounded-lg hover:bg-teal-50 transition"
            >
              Booking Cepat
            </a>
            <a 
              href={siteConfig.getWhatsAppUrl("Halo Ns. Suhartini (Belayu Homecare), saya ingin konsultasi")}
              target="_blank"
              rel="noreferrer"
              className="bg-teal-700 hover:bg-teal-800 text-white px-4 py-2 rounded-full font-bold text-xs transition shadow-sm flex items-center gap-1.5 hover:scale-105 transform duration-200"
            >
              <Phone size={14} />
              Konsultasi WA
            </a>
          </div>

          {/* Mobile Right Controls: Tombol WA Cepat + Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <a 
              href={siteConfig.getWhatsAppUrl("Halo Ns. Suhartini (Belayu Homecare), saya ingin konsultasi perawatan.")}
              target="_blank"
              rel="noreferrer"
              aria-label="Chat WhatsApp Ns. Suhartini"
              className="bg-emerald-600 text-white p-2 rounded-xl shadow-sm flex items-center justify-center active:scale-95 transition"
            >
              <Phone size={18} />
            </a>

            <button 
              type="button"
              aria-label={isMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
              className="text-slate-700 p-2 rounded-xl hover:bg-slate-100 focus:outline-none active:bg-slate-200 transition"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 pt-3 pb-6 space-y-3 shadow-2xl animate-fade-in-down">
          
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href} 
                className="flex items-center gap-3 text-slate-700 hover:text-teal-700 hover:bg-teal-50/70 font-semibold px-3 py-3 rounded-xl text-sm transition"
                onClick={handleNavClick}
              >
                <span className="text-teal-700">{link.icon}</span>
                {link.label}
              </a>
            ))}
            
            <a 
              href="#booking" 
              className="flex items-center gap-3 text-slate-700 hover:text-teal-700 hover:bg-teal-50/70 font-semibold px-3 py-3 rounded-xl text-sm transition"
              onClick={handleNavClick}
            >
              <span className="text-teal-700"><Calendar size={18} /></span>
              Formulir Booking Cepat
            </a>
          </div>

          {/* CTA Box di Mobile Menu */}
          <div className="pt-2 border-t border-slate-100 space-y-2">
            <a 
              href={siteConfig.getWhatsAppUrl("Halo Ns. Suhartini, saya ingin konsultasi perawatan di rumah.")}
              target="_blank"
              rel="noreferrer"
              className="w-full bg-teal-700 text-white py-3 rounded-xl font-bold text-sm flex justify-center items-center gap-2 shadow-md hover:bg-teal-800 active:scale-98 transition"
            >
              <Phone size={16} /> Chat WhatsApp Ns. Suhartini
            </a>
          </div>

        </div>
      )}
    </nav>
  );
}
