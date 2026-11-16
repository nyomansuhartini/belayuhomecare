import { Check, Star, Shield } from 'lucide-react';
import { pricingPackages, siteConfig } from '../data/siteConfig';

export default function PricingPackages() {
  return (
    <section id="paket" className="py-16 sm:py-20 bg-slate-50/70 border-y border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14" data-aos="fade-up">
          <span className="text-xs font-bold text-teal-800 uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full border border-teal-200/70">
            Biaya Transparan
          </span>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mt-2.5">
            Paket Layanan & Estimasi Biaya
          </h2>
          <p className="text-slate-600 mt-2 text-xs sm:text-sm">
            Tanpa biaya tersembunyi. Pilihlah skema perawatan yang paling sesuai dengan kebutuhan medis dan anggaran keluarga Anda.
          </p>
        </div>

        {/* Pricing Cards Grid (Bersih, Elegan, Terang) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {pricingPackages.map((pkg, idx) => {
            const isPopular = pkg.popular;
            return (
              <div 
                key={pkg.id || idx}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition duration-300 relative bg-white ${
                  isPopular 
                    ? 'border-2 border-teal-600 shadow-xl shadow-teal-700/5 ring-4 ring-teal-100/60 lg:-translate-y-2' 
                    : 'border border-slate-200/90 shadow-sm hover:shadow-md'
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-teal-700 text-white text-xs font-bold px-3.5 py-1 rounded-full shadow-sm uppercase tracking-wider flex items-center gap-1">
                    <Star size={13} fill="currentColor" />
                    {pkg.badge}
                  </div>
                )}

                <div>
                  {!isPopular && (
                    <span className="inline-block text-xs font-bold text-teal-700 bg-teal-50 px-2.5 py-0.5 rounded-full mb-3 border border-teal-100">
                      {pkg.badge}
                    </span>
                  )}
                  
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-1">
                    {pkg.name}
                  </h3>
                  
                  <p className="text-xs text-slate-500 mt-2 min-h-[36px] leading-relaxed">
                    {pkg.desc}
                  </p>

                  {/* Price Display */}
                  <div className="my-5 pb-5 border-b border-slate-100">
                    <span className="text-2xl sm:text-3xl font-extrabold text-teal-800">
                      {pkg.price}
                    </span>
                    <span className="text-xs block mt-0.5 text-slate-500 font-medium">
                      / {pkg.period}
                    </span>
                  </div>

                  {/* Feature List */}
                  <ul className="space-y-2.5 mb-7">
                    {pkg.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                        <div className="rounded-full p-0.5 shrink-0 mt-0.5 bg-teal-50 text-teal-700">
                          <Check size={13} strokeWidth={2.5} />
                        </div>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button CTA */}
                <a
                  href={siteConfig.getWhatsAppUrl(`Halo Ns. Suhartini, saya tertarik untuk konsultasi dan memesan ${pkg.name}.`)}
                  target="_blank"
                  rel="noreferrer"
                  className={`w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm text-center transition duration-200 ${
                    isPopular
                      ? 'bg-teal-700 hover:bg-teal-800 text-white shadow-md'
                      : 'bg-slate-100 hover:bg-teal-50 text-slate-800 hover:text-teal-800 border border-slate-200'
                  }`}
                >
                  {pkg.ctaText}
                </a>

              </div>
            );
          })}
        </div>

        {/* Note on Transportation / Free Consultation */}
        <div className="mt-10 bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="w-11 h-11 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
            <Shield size={22} />
          </div>
          <div className="flex-1 text-xs sm:text-sm text-slate-600">
            <span className="font-bold text-slate-900 block">Jaminan Keterbukaan Tarif:</span>
            Biaya disesuaikan secara transparan berdasarkan kebutuhan tindakan medis dan jarak tempuh lokasi di Denpasar, Badung, atau Tabanan. Konsultasi awal 100% Bebas Biaya!
          </div>
          <a
            href={siteConfig.getWhatsAppUrl("Halo Ns. Suhartini, saya ingin minta estimasi biaya perawatan untuk kondisi keluarga saya.")}
            target="_blank"
            rel="noreferrer"
            className="shrink-0 bg-slate-900 text-white text-xs font-bold py-2.5 px-4 rounded-xl hover:bg-slate-800 transition"
          >
            Minta Estimasi Biaya
          </a>
        </div>

      </div>
    </section>
  );
}
