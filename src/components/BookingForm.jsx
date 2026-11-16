import { useState } from 'react';
import { Send, Calendar, Clock, MapPin, User, Activity, FileText, CheckCircle } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    relationship: 'Anak',
    phone: '',
    location: 'Denpasar',
    service: 'Perawatan Luka Diabetes / Operasi',
    duration: 'Paket Visit (Sekali Kunjungan)',
    schedule: 'Hari Ini (Secepatnya)',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = 
`Halo Ns. Suhartini (Belayu Homecare), saya ingin melakukan booking layanan perawat:

📋 DATA PASIEN & PEMESAN:
• Nama Pemesan: ${formData.name || '-'}
• Hubungan dengan Pasien: ${formData.relationship}
• No. Kontak: ${formData.phone || '-'}
• Wilayah/Lokasi: ${formData.location}

🩺 KEBUTUHAN MEDIS:
• Jenis Layanan: ${formData.service}
• Pilihan Paket: ${formData.duration}
• Rencana Waktu: ${formData.schedule}
• Catatan Kondisi Pasien: ${formData.notes || 'Tidak ada catatan tambahan'}

Mohon konfirmasi ketersediaan jadwal dan estimasi biayanya. Terima kasih!`;

    const waUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    setSubmitted(true);
    setTimeout(() => {
      window.open(waUrl, '_blank');
      setSubmitted(false);
    }, 500);
  };

  return (
    <section id="booking" className="py-14 sm:py-20 bg-gradient-to-b from-stone-50 to-teal-50/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10" data-aos="fade-up">
          <span className="text-xs font-bold text-teal-800 uppercase tracking-widest bg-teal-100 px-3 py-1 rounded-full">
            Reservasi Praktis
          </span>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mt-2.5">
            Formulir Booking Cepat
          </h2>
          <p className="text-slate-600 mt-2 text-xs sm:text-sm">
            Isi data singkat berikut. Sistem akan menyusun pesan WhatsApp rapi langsung ke <b>Ns. Suhartini</b> untuk konfirmasi jadwal.
          </p>
        </div>

        {/* Form Card (Mobile-friendly padding & input sizes) */}
        <div className="bg-white rounded-3xl p-5 sm:p-10 shadow-xl border border-teal-100 relative" data-aos="fade-up">
          
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            
            {/* Baris 1: Nama & Hubungan */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div>
                <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-1 flex items-center gap-1.5">
                  <User size={15} className="text-teal-700" />
                  Nama Anda (Pemesan / Keluarga) *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Contoh: Wayan Sudarma"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3.5 py-3 rounded-xl border border-slate-200 text-base sm:text-sm focus:ring-2 focus:ring-teal-600 focus:outline-none transition"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-1">
                  Hubungan dengan Pasien *
                </label>
                <select
                  name="relationship"
                  value={formData.relationship}
                  onChange={handleChange}
                  className="w-full px-3.5 py-3 rounded-xl border border-slate-200 text-base sm:text-sm focus:ring-2 focus:ring-teal-600 focus:outline-none transition bg-white"
                >
                  <option value="Anak">Anak</option>
                  <option value="Suami / Istri">Suami / Istri</option>
                  <option value="Orang Tua">Orang Tua</option>
                  <option value="Saudara / Kerabat">Saudara / Kerabat</option>
                  <option value="Pasien Sendiri">Pasien Sendiri</option>
                </select>
              </div>
            </div>

            {/* Baris 2: Kontak & Wilayah */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div>
                <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-1">
                  Nomor WhatsApp Anda *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="Contoh: 081234567890"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3.5 py-3 rounded-xl border border-slate-200 text-base sm:text-sm focus:ring-2 focus:ring-teal-600 focus:outline-none transition"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-1 flex items-center gap-1.5">
                  <MapPin size={15} className="text-teal-700" />
                  Wilayah Domisili Pasien *
                </label>
                <select
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-3.5 py-3 rounded-xl border border-slate-200 text-base sm:text-sm focus:ring-2 focus:ring-teal-600 focus:outline-none transition bg-white"
                >
                  <option value="Denpasar (Kota / Sekitarnya)">Denpasar (Kota / Sekitarnya)</option>
                  <option value="Badung (Mengwi, Canggu, Kuta, dll)">Badung (Mengwi, Canggu, Kuta, dll)</option>
                  <option value="Tabanan (Belayu, Kediri, Kota, dll)">Tabanan (Belayu, Kediri, Kota, dll)</option>
                  <option value="Wilayah Bali Lainnya">Wilayah Bali Lainnya (Konfirmasi Dulu)</option>
                </select>
              </div>
            </div>

            {/* Baris 3: Layanan & Paket Durasi */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div>
                <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-1 flex items-center gap-1.5">
                  <Activity size={15} className="text-teal-700" />
                  Kebutuhan Layanan Medis *
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-3.5 py-3 rounded-xl border border-slate-200 text-base sm:text-sm focus:ring-2 focus:ring-teal-600 focus:outline-none transition bg-white"
                >
                  <option value="Perawatan Luka Diabetes / Luka Operasi">Perawatan Luka Diabetes / Luka Operasi</option>
                  <option value="Pasang / Ganti Selang NGT (Makan)">Pasang / Ganti Selang NGT (Makan)</option>
                  <option value="Pasang / Ganti Kateter Urine">Pasang / Ganti Kateter Urine</option>
                  <option value="Pendampingan Pasien Lansia / Pasca Stroke">Pendampingan Pasien Lansia / Pasca Stroke</option>
                  <option value="Pemasangan Infus / Injeksi Obat Dokter">Pemasangan Infus / Injeksi Obat Dokter</option>
                  <option value="Cek Lab Mandiri & Terapi Nebulizer">Cek Lab Mandiri & Terapi Nebulizer</option>
                </select>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-1 flex items-center gap-1.5">
                  <Clock size={15} className="text-teal-700" />
                  Pilihan Durasi / Paket *
                </label>
                <select
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  className="w-full px-3.5 py-3 rounded-xl border border-slate-200 text-base sm:text-sm focus:ring-2 focus:ring-teal-600 focus:outline-none transition bg-white"
                >
                  <option value="Paket Visit (Sekali Kunjungan)">Paket Visit (Sekali Kunjungan)</option>
                  <option value="Paket Jaga Shift Harian (8 - 12 Jam)">Paket Jaga Shift Harian (8 - 12 Jam)</option>
                  <option value="Paket Mingguan / Bulanan Intensif">Paket Mingguan / Bulanan Intensif</option>
                  <option value="Konsultasi Dulu Saja">Konsultasi Dulu Saja</option>
                </select>
              </div>
            </div>

            {/* Baris 4: Waktu & Catatan */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div>
                <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-1 flex items-center gap-1.5">
                  <Calendar size={15} className="text-teal-700" />
                  Rencana Waktu Kunjungan *
                </label>
                <select
                  name="schedule"
                  value={formData.schedule}
                  onChange={handleChange}
                  className="w-full px-3.5 py-3 rounded-xl border border-slate-200 text-base sm:text-sm focus:ring-2 focus:ring-teal-600 focus:outline-none transition bg-white"
                >
                  <option value="Hari Ini (Secepatnya / Darurat)">Hari Ini (Secepatnya / Darurat)</option>
                  <option value="Besok Pagi (08:00 - 12:00 WITA)">Besok Pagi (08:00 - 12:00 WITA)</option>
                  <option value="Besok Siang / Sore (13:00 - 17:00 WITA)">Besok Siang / Sore (13:00 - 17:00 WITA)</option>
                  <option value="Jadwal Khusus Lainnya (Diskusi di WA)">Jadwal Khusus Lainnya (Diskusi di WA)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-bold text-slate-800 mb-1 flex items-center gap-1.5">
                  <FileText size={15} className="text-teal-700" />
                  Catatan Kondisi Pasien (Opsional)
                </label>
                <input
                  type="text"
                  name="notes"
                  placeholder="Misal: Pasca operasi paha, butuh ganti perban"
                  value={formData.notes}
                  onChange={handleChange}
                  className="w-full px-3.5 py-3 rounded-xl border border-slate-200 text-base sm:text-sm focus:ring-2 focus:ring-teal-600 focus:outline-none transition"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2 sm:pt-4">
              <button
                type="submit"
                disabled={submitted}
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm sm:text-base py-3.5 sm:py-4 px-5 rounded-2xl shadow-lg active:scale-98 transition duration-200 flex items-center justify-center gap-2"
              >
                {submitted ? (
                  <>
                    <CheckCircle size={20} className="animate-spin" />
                    Membuka WhatsApp...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Kirim Formulir ke WhatsApp
                  </>
                )}
              </button>
              <p className="text-center text-[11px] sm:text-xs text-slate-500 mt-2">
                Privat & langsung terhubung ke WhatsApp resmi <b>Belayu Homecare</b>.
              </p>
            </div>

          </form>

        </div>

      </div>
    </section>
  );
}
