import { Phone } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function FloatingWhatsApp() {
  return (
    <aside 
      aria-label="Kontak Cepat WhatsApp"
      className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-3 group"
    >
      {/* Tooltip / Label Card */}
      <a
        href={siteConfig.getWhatsAppUrl("Halo Ns. Suhartini (Belayu Homecare), saya butuh bantuan perawat untuk keluarga.")}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden sm:flex items-center gap-2 bg-slate-950 text-white text-xs font-semibold px-3.5 py-2 rounded-xl shadow-xl border border-slate-800 opacity-95 group-hover:opacity-100 transition duration-200"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
        <span>Butuh Perawat? <b>Chat Ns. Suhartini</b></span>
      </a>

      {/* Floating Action Button */}
      <a
        href={siteConfig.getWhatsAppUrl("Halo Ns. Suhartini (Belayu Homecare), saya butuh bantuan perawat untuk keluarga.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat WhatsApp Ns. Suhartini Belayu Homecare"
        className="relative flex items-center justify-center w-14 h-14 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-2xl transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-emerald-300"
      >
        {/* Radar Ping Effect */}
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-40"></span>

        {/* WhatsApp Icon */}
        <Phone size={26} className="relative z-10 fill-current" />
      </a>
    </aside>
  );
}
