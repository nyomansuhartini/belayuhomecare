import { Phone, CheckCircle, ShieldCheck, Award, Calendar } from 'lucide-react';
import { siteConfig, founderConfig } from '../data/siteConfig';

export default function Hero() {
  return (
    <header className="relative bg-gradient-to-b from-teal-50/40 via-white to-slate-50/50 py-8 sm:py-12 md:py-14 border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CSS Grid 12 Kolom */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Kolom Kiri: Copywriting & CTA */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-5">
            
            {/* Lokasi Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-teal-50 text-teal-800 border border-teal-200/80 rounded-full text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-teal-600 shrink-0"></span>
              <span className="hidden sm:inline">Layanan Medis Resmi Denpasar • Badung • Tabanan</span>
              <span className="sm:hidden">Layanan Medis Resmi • Bali</span>
            </div>

            {/* Headline Utama */}
            <h1 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-bold text-slate-900 leading-tight tracking-tight">
              Layanan Medis Profesional di <span className="text-teal-700">Kenyamanan Rumah</span> Anda
            </h1>

            {/* Sub-headline Alami Tanpa Pengulangan STR */}
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Ditangani langsung oleh <b>{founderConfig.name}</b> ({founderConfig.title}). Layanan homecare berstandar medis untuk perawatan luka diabetes, pasang selang NGT/kateter, pasca operasi, dan pendampingan lansia di Bali.
            </p>

            {/* Tombol CTA */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-1">
              <a 
                href={siteConfig.getWhatsAppUrl("Halo Ns. Suhartini (Belayu Homecare), saya ingin konsultasi perawatan keluarga saya.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <button 
                  type="button"
                  className="w-full bg-teal-700 hover:bg-teal-800 text-white px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base shadow-md active:scale-98 transition flex items-center justify-center gap-2"
                >
                  <Phone size={18} />
                  Konsultasi WhatsApp Sekarang
                </button>
              </a>
              <a href="#booking" className="w-full sm:w-auto">
                <button 
                  type="button"
                  className="w-full bg-white text-teal-800 border-2 border-teal-700/60 px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base hover:bg-teal-50 active:scale-98 transition flex items-center justify-center gap-2"
                >
                  <Calendar size={18} />
                  Formulir Booking Cepat
                </button>
              </a>
            </div>

            {/* 3 Keunggulan Ringkas */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2 text-left">
              <div className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-slate-200/80 shadow-sm">
                <ShieldCheck size={18} className="text-teal-700 shrink-0" />
                <span className="text-xs font-semibold text-slate-800">Tenaga Medis Berpengalaman</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-slate-200/80 shadow-sm">
                <Award size={18} className="text-teal-700 shrink-0" />
                <span className="text-xs font-semibold text-slate-800">Rawat Luka Modern Steril</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-slate-200/80 shadow-sm">
                <CheckCircle size={18} className="text-teal-700 shrink-0" />
                <span className="text-xs font-semibold text-slate-800">Laporan Medis ke Keluarga</span>
              </div>
            </div>

          </div>

          {/* Kolom Kanan: Foto Asli Ns. Ni Nyoman Suhartini, S.Kep (Bersih Tanpa Badge Tempelan) */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
            <div className="w-full max-w-[340px] sm:max-w-[370px]">
              
              <div className="bg-white p-2.5 rounded-3xl shadow-xl border border-slate-200/80 overflow-hidden">
                
                {/* Image Frame Murni & Bersih */}
                <div className="relative aspect-[4/4.3] overflow-hidden rounded-2xl bg-teal-50">
                  <img 
                    src={founderConfig.photo} 
                    alt={founderConfig.name} 
                    className="w-full h-full object-cover object-top"
                    loading="eager"
                  />
                </div>

                {/* Info Card di Bawah Foto (Natural & Elegan) */}
                <div className="p-3 bg-slate-50/90 rounded-xl mt-2 border border-slate-100 flex items-center justify-between gap-2">
                  <div className="min-w-0 flex-1">
                    <p className="font-extrabold text-sm text-slate-900 leading-snug truncate">
                      {founderConfig.name}
                    </p>
                    <p className="text-[11px] text-teal-700 font-semibold mt-0.5 truncate">
                      {founderConfig.role} • {founderConfig.qualification}
                    </p>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center shrink-0">
                    <CheckCircle size={16} />
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </header>
  );
}
