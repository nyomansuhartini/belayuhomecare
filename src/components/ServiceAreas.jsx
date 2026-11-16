import { MapPin, CheckCircle, Navigation } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function ServiceAreas() {
  return (
    <section className="py-16 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12" data-aos="fade-up">
          <span className="text-xs font-bold text-teal-800 uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
            Jangkauan Kunjungan
          </span>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mt-2.5">
            Area Layanan Homecare di Bali
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base">
            Perawat kami siap datang langsung ke rumah, vila, maupun kediaman keluarga Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {siteConfig.serviceAreas.map((area, idx) => (
            <div 
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 hover:shadow-md transition duration-200"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center shrink-0">
                  <MapPin size={22} />
                </div>
                <h3 className="font-extrabold text-lg text-slate-900">
                  {area.name}
                </h3>
              </div>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                {area.desc}
              </p>
              <div className="flex items-center gap-1.5 text-emerald-700 text-xs font-bold">
                <CheckCircle size={15} />
                Siap Kunjungan Rumah
              </div>
            </div>
          ))}
        </div>

        {/* Luar Area Info */}
        <div className="mt-8 text-center text-xs sm:text-sm text-slate-500">
          📍 Berada di luar ketiga kabupaten di atas (seperti Gianyar atau Karangasem)?{' '}
          <a 
            href={siteConfig.getWhatsAppUrl("Halo Ns. Suhartini, apakah bisa melayani kunjungan ke luar area Denpasar/Badung/Tabanan?")}
            target="_blank"
            rel="noreferrer"
            className="text-teal-700 font-bold hover:underline"
          >
            Tanyakan ketersediaan perawat di sini →
          </a>
        </div>

      </div>
    </section>
  );
}
