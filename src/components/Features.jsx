import { Shield, Heart, Clock } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function Features() {
  const features = [
    { 
      icon: <Shield size={32} />, 
      title: "Perawat Profesional", 
      desc: "Ditangani langsung oleh tenaga perawat yang memiliki STR resmi, pengalaman klinis, dan dipilih berdasarkan dedikasi serta empati." 
    },
    { 
      icon: <Heart size={32} />, 
      title: "Lebih Personal", 
      desc: "Perhatian perawat terfokus 100% pada satu pasien. Kami merancang program perawatan sesuai kondisi unik keluarga Anda." 
    },
    { 
      icon: <Clock size={32} />, 
      title: "Fleksibel & Nyaman", 
      desc: "Jadwal layanan dapat disesuaikan dengan rutinitas keluarga. Lingkungan rumah yang familiar terbukti mempercepat pemulihan." 
    }
  ];

  return (
    <section id="keunggulan" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-slate-900">Mengapa Memilih {siteConfig.name}?</h2>
          <p className="text-slate-500 mt-3">Kami merawat dengan hati, layaknya keluarga sendiri.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item, idx) => (
            <div 
              key={idx} 
              data-aos="fade-up" 
              data-aos-delay={idx * 150}
              className="group p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300"
            >
              <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center text-teal-600 mb-6 group-hover:bg-teal-600 group-hover:text-white transition duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
