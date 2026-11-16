import { ShieldCheck, Sparkles, FileText, HeartHandshake } from 'lucide-react';

export default function MedicalStandards() {
  const standards = [
    {
      icon: <ShieldCheck size={28} className="text-teal-700" />,
      title: "Tenaga Medis Resmi & Ber-STR",
      desc: "Bukan sekadar perawat biasa (caregiver informal), melainkan sarjana keperawatan dan profesi ners dengan izin praktik sah dari Kemenkes RI."
    },
    {
      icon: <Sparkles size={28} className="text-teal-700" />,
      title: "Peralatan Steril Sekali Pakai",
      desc: "Menghindari risiko infeksi silang dengan penggunaan sarung tangan steril sekali pakai, kassa steril tertutup, dan disposal jarum medis di safety box khusus."
    },
    {
      icon: <FileText size={28} className="text-teal-700" />,
      title: "Buku Laporan Harian Pasien",
      desc: "Setiap selesai tindakan atau shift, kami mencatat grafik tensi, nadi, saturasi O2, dan kondisi luka untuk dilaporkan langsung ke WhatsApp keluarga."
    },
    {
      icon: <HeartHandshake size={28} className="text-teal-700" />,
      title: "Pelayanan Penuh Empati",
      desc: "Kami memahami kondisi psikologis pasien dan keluarga yang sedang cemas. Pendekatan kami selalu hangat, sabar, dan menenangkan."
    }
  ];

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12" data-aos="fade-up">
          <span className="text-xs font-bold text-teal-800 uppercase tracking-widest bg-teal-100/60 px-3 py-1 rounded-full">
            Kualitas & Keamanan
          </span>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mt-2.5">
            Standar SOP Medis di Rumah Anda
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base">
            Memberikan kenyamanan lingkungan rumah tanpa mengorbankan ketatnya standar higienitas rumah sakit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {standards.map((item, index) => (
            <div 
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-xl bg-teal-50 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
