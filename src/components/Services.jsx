import { CheckCircle2, ArrowRight } from 'lucide-react';
import { servicesData, siteConfig } from '../data/siteConfig';

export default function Services() {
  return (
    <section id="layanan" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-14" data-aos="fade-up">
          <span className="text-xs font-bold text-teal-800 uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
            Layanan Terpadu
          </span>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mt-2.5">
            Layanan Medis Homecare Lengkap
          </h2>
          <p className="text-slate-600 mt-3 text-sm sm:text-base">
            Solusi perawatan terstandar klinis langsung di kamar pasien tanpa repot mengantre dan menempuh macet ke fasilitas kesehatan.
          </p>
        </div>

        {/* Grid Layanan */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service, idx) => (
            <div 
              key={service.id || idx}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="bg-stone-50/70 border border-slate-200/80 rounded-3xl overflow-hidden hover:shadow-xl transition duration-300 flex flex-col group"
            >
              {/* Image & Category Tag */}
              <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-200">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4 bg-teal-800/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {service.category}
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl sm:text-2xl font-extrabold drop-shadow-sm">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-5 sm:p-7 flex-1 flex flex-col justify-between space-y-4 sm:space-y-5">
                <div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {service.desc}
                  </p>

                  <p className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                    Tindakan & Prosedur yang Dilakukan:
                  </p>
                  <ul className="space-y-2">
                    {service.procedures.map((proc, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 size={16} className="text-teal-700 shrink-0 mt-0.5" />
                        <span>{proc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action CTA */}
                <div className="pt-2 border-t border-slate-200 flex flex-col sm:flex-row gap-2.5 items-center justify-between">
                  <a 
                    href={siteConfig.getWhatsAppUrl(`Halo Ns. Suhartini, saya tertarik dan ingin konsultasi mengenai layanan ${service.title}`)}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto flex-1 bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs sm:text-sm py-2.5 px-4 rounded-xl text-center transition flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    Konsultasi Layanan Ini
                    <ArrowRight size={15} />
                  </a>
                  <a 
                    href="#booking"
                    className="w-full sm:w-auto text-teal-800 hover:text-teal-950 font-bold text-xs sm:text-sm py-2.5 px-3 text-center transition hover:underline"
                  >
                    Jadwalkan Kunjungan →
                  </a>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
