import { ShieldCheck, Heart, Stethoscope, CheckCircle2 } from 'lucide-react';
import { founderConfig, siteConfig } from '../data/siteConfig';

export default function FounderProfile() {
  return (
    <section id="profil" className="py-16 sm:py-20 bg-slate-50/60 border-b border-slate-200/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14" data-aos="fade-up">
          <span className="text-xs font-bold text-teal-800 uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full border border-teal-200/70">
            Kredibilitas & Tenaga Medis
          </span>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mt-2.5">
            Kenali Kepala Perawat Anda
          </h2>
          <p className="text-slate-600 mt-2 text-xs sm:text-sm">
            Di {siteConfig.name}, perawatan anggota keluarga Anda dipimpin langsung oleh tenaga kesehatan profesional berpendidikan Profesi Ners dan berizin resmi.
          </p>
        </div>

        {/* Profile Card Container: Nuansa Terang, Elegan, dan Lembut (Tidak Pekat / Gelap) */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-lg border border-slate-200/80 relative" data-aos="fade-up">
          
          <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-14 relative z-10">
            
            {/* Foto Profil */}
            <div className="w-44 sm:w-60 lg:w-64 shrink-0">
              <div className="relative mx-auto">
                <div className="w-44 h-44 sm:w-60 sm:h-60 lg:w-64 lg:h-64 rounded-2xl overflow-hidden border-2 border-teal-100 shadow-md bg-teal-50">
                  <img 
                    src={founderConfig.photo} 
                    alt={founderConfig.name} 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="mt-2.5 text-center">
                  <span className="inline-flex items-center gap-1.5 bg-teal-50 text-teal-800 border border-teal-200 text-xs font-bold px-3 py-1 rounded-full">
                    <ShieldCheck size={14} className="text-teal-700" />
                    STR Kemenkes Terverifikasi
                  </span>
                </div>
              </div>
            </div>

            {/* Narasi Profil & Kredensial */}
            <div className="flex-1 space-y-5 text-center lg:text-left">
              <div>
                <div className="inline-flex items-center gap-1.5 text-teal-700 font-bold text-xs uppercase tracking-wider mb-1">
                  <Stethoscope size={15} />
                  {founderConfig.role}
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {founderConfig.name}
                </h3>
                <p className="text-slate-500 font-medium text-xs sm:text-sm mt-0.5">
                  {founderConfig.title} • {founderConfig.qualification}
                </p>
              </div>

              {/* Kutipan Filosofi */}
              <div className="bg-teal-50/70 p-4 sm:p-5 rounded-2xl border border-teal-100/90 text-left">
                <p className="text-teal-950 italic text-xs sm:text-sm leading-relaxed">
                  "{founderConfig.quote}"
                </p>
              </div>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed text-left">
                {founderConfig.bio}
              </p>

              {/* Grid 4 Kredensial */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {founderConfig.credentials.map((cred, i) => (
                  <div key={i} className="flex items-start gap-2.5 bg-slate-50 border border-slate-200/80 p-3 rounded-xl text-left">
                    <CheckCircle2 size={17} className="text-teal-700 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-xs sm:text-sm text-slate-900">{cred.title}</p>
                      <p className="text-[11px] text-slate-500">{cred.issuer}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Tombol Konsultasi ke Kepala Perawat */}
              <div className="pt-2 flex justify-center lg:justify-start">
                <a 
                  href={siteConfig.getWhatsAppUrl(`Halo Ns. Suhartini, saya ingin berkonsultasi mengenai kondisi keluarga saya.`)}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-teal-700 hover:bg-teal-800 text-white font-bold px-6 py-3 rounded-xl text-xs sm:text-sm transition shadow-sm flex items-center justify-center gap-2 active:scale-98"
                >
                  <Heart size={16} fill="currentColor" />
                  Konsultasi Langsung dengan Ns. Suhartini
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
