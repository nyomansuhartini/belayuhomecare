import { howItWorksSteps, siteConfig } from '../data/siteConfig';
import { ArrowRight, Phone } from 'lucide-react';

export default function HowItWorks() {
  return (
    <section id="cara-pesan" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
          <span className="text-xs font-bold text-teal-800 uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
            Alur Pelayanan
          </span>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mt-2.5">
            Cara Pesan Layanan dalam 4 Langkah
          </h2>
          <p className="text-slate-600 mt-3 text-sm sm:text-base">
            Proses pemesanan mudah, cepat, dan transparan agar perawat dapat segera datang membantu keluarga Anda.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {howItWorksSteps.map((step, idx) => (
            <div 
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 150}
              className="bg-stone-50 border border-slate-200/80 rounded-2xl p-6 relative flex flex-col justify-between hover:border-teal-300 transition duration-300"
            >
              <div>
                {/* Step Number Badge */}
                <div className="w-12 h-12 rounded-xl bg-teal-700 text-white font-extrabold text-lg flex items-center justify-center mb-5 shadow-md">
                  {step.number}
                </div>
                
                <h3 className="font-extrabold text-slate-900 text-lg mb-2">
                  {step.title}
                </h3>
                
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-teal-700 text-xs font-bold">
                <span>Langkah {idx + 1} dari 4</span>
                <ArrowRight size={14} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-12 text-center" data-aos="fade-up">
          <a
            href={siteConfig.getWhatsAppUrl("Halo Ns. Suhartini, saya ingin mulai konsultasi untuk pemesanan perawat homecare.")}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-teal-700 hover:bg-teal-800 text-white font-bold text-sm px-6 py-3.5 rounded-full shadow-lg transition hover:scale-105 duration-200"
          >
            <Phone size={18} />
            Mulai Konsultasi Langkah 1 Sekarang
          </a>
        </div>

      </div>
    </section>
  );
}
