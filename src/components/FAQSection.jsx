import { useState } from 'react';
import { ChevronDown, HelpCircle, Phone } from 'lucide-react';
import { faqData, siteConfig } from '../data/siteConfig';

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12 sm:mb-14" data-aos="fade-up">
          <span className="text-xs font-bold text-teal-800 uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full border border-teal-200/70">
            Tanya Jawab
          </span>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mt-2.5">
            Pertanyaan yang Sering Diajukan (FAQ)
          </h2>
          <p className="text-slate-600 mt-2 text-xs sm:text-sm">
            Jawaban lengkap seputar legalitas, peralatan, dan prosedur penanganan pasien di rumah.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3" data-aos="fade-up">
          {faqData.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx}
                className="bg-slate-50/70 rounded-2xl border border-slate-200/90 overflow-hidden transition"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full py-4 sm:py-4.5 px-4 sm:px-6 text-left flex justify-between items-center gap-3 hover:bg-slate-100/60 transition"
                  aria-expanded={isOpen}
                >
                  <span className="font-extrabold text-slate-900 text-xs sm:text-sm flex items-center gap-2.5">
                    <HelpCircle size={17} className="text-teal-700 shrink-0" />
                    {item.q}
                  </span>
                  <ChevronDown 
                    size={18} 
                    className={`text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-teal-700' : ''}`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-6 pb-4 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 bg-white">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Callout Box (Lembut, Tidak Pekat / Gelap) */}
        <div className="mt-10 bg-teal-50/70 border border-teal-200/80 rounded-2xl p-5 sm:p-7 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <h4 className="text-sm sm:text-base font-extrabold text-slate-900">
              Punya Pertanyaan Khusus Terkait Kondisi Pasien?
            </h4>
            <p className="text-slate-600 text-xs sm:text-sm mt-0.5">
              Konsultasikan secara privat dan bebas biaya langsung dengan Ns. Suhartini.
            </p>
          </div>
          <a
            href={siteConfig.getWhatsAppUrl("Halo Ns. Suhartini, saya punya pertanyaan mengenai kondisi medis keluarga saya.")}
            target="_blank"
            rel="noreferrer"
            className="shrink-0 bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition shadow-sm flex items-center gap-2"
          >
            <Phone size={15} />
            Tanya via WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}
