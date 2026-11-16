import { Heart, Phone, Clock, MapPin, ShieldCheck, Stethoscope, ArrowUpRight } from 'lucide-react';
import { siteConfig, founderConfig } from '../data/siteConfig';

export default function Footer() {
  return (
    <footer id="kontak" className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800" data-aos="fade-in">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid: 4 Kolom Rapi & Profesional */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-sm">
          
          {/* Kolom 1: Profil Layanan & Penanggung Jawab */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 text-white">
              <div className="bg-teal-700 text-white p-2 rounded-xl shadow-sm">
                <Heart size={20} fill="currentColor" />
              </div>
              <div>
                <span className="text-lg font-extrabold tracking-tight block text-white">{siteConfig.name}</span>
                <span className="text-[10px] text-teal-400 font-bold uppercase tracking-wider block">Home Care Medis • Bali</span>
              </div>
            </div>
            
            <p className="text-slate-400 text-xs leading-relaxed">
              Pelayanan kesehatan dan perawatan medis di rumah yang mengutamakan keselamatan, higienitas klinis, serta kehangatan keluarga.
            </p>

            {/* Badge Kredensial Medis */}
            <div className="bg-slate-800/80 border border-slate-700/70 p-3 rounded-2xl">
              <div className="flex items-center gap-1.5 text-teal-400 text-[11px] font-bold">
                <Stethoscope size={14} />
                <span>Kepala Perawat:</span>
              </div>
              <p className="text-xs text-white font-bold mt-0.5">{founderConfig.name}</p>
              <p className="text-[11px] text-teal-300">{founderConfig.qualification}</p>
            </div>
          </div>

          {/* Kolom 2: Layanan Medis */}
          <div>
            <h4 className="text-white font-bold mb-4 text-xs uppercase tracking-wider text-slate-200">
              Layanan Medis
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href="#layanan" className="hover:text-teal-400 transition flex items-center justify-between group">
                  <span>Perawatan Luka Modern (Diabetes/Operasi)</span>
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-teal-400 transition flex items-center justify-between group">
                  <span>Pasang & Ganti Selang NGT (Makan)</span>
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-teal-400 transition flex items-center justify-between group">
                  <span>Pasang & Ganti Kateter Urine</span>
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-teal-400 transition flex items-center justify-between group">
                  <span>Pendampingan Lansia & Pasca Stroke</span>
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-teal-400 transition flex items-center justify-between group">
                  <span>Injeksi Obat & Pemasangan Infus</span>
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-teal-400 transition flex items-center justify-between group">
                  <span>Cek Lab Mandiri & Terapi Nebulizer</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Kontak & Jam Operasional */}
          <div>
            <h4 className="text-white font-bold mb-4 text-xs uppercase tracking-wider text-slate-200">
              Kontak & Jadwal
            </h4>
            <div className="space-y-3.5 text-xs">
              <div className="flex items-start gap-2.5">
                <Phone size={16} className="text-teal-400 mt-0.5 shrink-0" />
                <div>
                  <a 
                    href={siteConfig.getWhatsAppUrl()} 
                    target="_blank" 
                    rel="noreferrer"
                    className="hover:text-white transition font-bold text-sm text-teal-400 block"
                  >
                    {siteConfig.phone}
                  </a>
                  <span className="text-[11px] text-slate-400">Chat WhatsApp Resmi</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock size={16} className="text-teal-400 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-white">Jam Operasional:</p>
                  <p className="text-slate-400">{siteConfig.operatingHours}</p>
                  <p className="text-[11px] text-teal-300 italic mt-0.5">Darurat? Siap koordinasi 24 jam</p>
                </div>
              </div>
            </div>
          </div>

          {/* Kolom 4: Wilayah Layanan */}
          <div>
            <h4 className="text-white font-bold mb-4 text-xs uppercase tracking-wider text-slate-200">
              Wilayah Kunjungan
            </h4>
            <div className="flex items-start gap-2 mb-2 text-xs">
              <MapPin size={16} className="text-teal-400 mt-0.5 shrink-0" />
              <p className="text-slate-300">Kunjungan ke rumah & vila area:</p>
            </div>
            <ul className="space-y-1.5 text-xs text-slate-400 pl-6 list-disc">
              <li><strong className="text-slate-200">Denpasar</strong> (Seluruh Kecamatan)</li>
              <li><strong className="text-slate-200">Badung</strong> (Mengwi, Kuta, Canggu, dll)</li>
              <li><strong className="text-slate-200">Tabanan</strong> (Belayu, Kediri, Kota, dll)</li>
            </ul>

            <div className="mt-4 pt-3 border-t border-slate-800">
              <a 
                href="#booking"
                className="inline-flex items-center gap-1 text-xs text-teal-400 font-semibold hover:text-teal-300 transition"
              >
                Formulir Booking Cepat
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

        </div>
        
        {/* Bottom Bar: Copyright & Verified License */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 text-xs text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-3 text-center sm:text-left">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. Seluruh Hak Cipta Dilindungi.</p>
          <div className="flex items-center gap-2 text-slate-400 text-[11px]">
            <ShieldCheck size={14} className="text-teal-400" />
            <span>Layanan Keperawatan Medis di Rumah • Bali</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
