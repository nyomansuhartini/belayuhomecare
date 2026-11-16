import { Star, Quote } from 'lucide-react';
import { testimonialsData } from '../data/siteConfig';

export default function Testimonials() {
  return (
    <section id="testimoni" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14" data-aos="fade-down">
          <span className="text-xs font-bold text-teal-800 uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full border border-teal-200/70">
            Bukti Nyata Kepuasan
          </span>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mt-2.5">
            Kata Keluarga Pasien di Bali
          </h2>
          <p className="text-slate-600 mt-2 text-xs sm:text-sm">
            Kepercayaan dan kesembuhan keluarga Anda adalah dedikasi utama kami setiap hari.
          </p>
        </div>
        
        {/* Testimonials Grid: Terang, Bersih, dan Tenang */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialsData.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white border border-slate-200/90 p-6 sm:p-7 rounded-3xl relative hover:shadow-md transition duration-300 flex flex-col justify-between" 
              data-aos="fade-up" 
              data-aos-delay={idx * 100}
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} fill="currentColor" />
                  ))}
                </div>

                {/* Service Tag */}
                <span className="inline-block text-[11px] font-bold text-teal-800 bg-teal-50 px-2.5 py-0.5 rounded-full border border-teal-100 mb-3">
                  {item.service}
                </span>

                <p className="text-slate-600 italic mb-6 text-xs sm:text-sm leading-relaxed">
                  "{item.quote}"
                </p>
              </div>

              {/* Patient / Family Info */}
              <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                <div className="w-9 h-9 bg-teal-50 border border-teal-200 rounded-full flex items-center justify-center font-extrabold text-xs text-teal-800 shrink-0">
                  {item.initials}
                </div>
                <div>
                  <p className="font-extrabold text-xs sm:text-sm text-slate-900">{item.name}</p>
                  <p className="text-[11px] text-slate-500">{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
