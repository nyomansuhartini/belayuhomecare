export const founderConfig = {
  name: "Ns. Ni Nyoman Suhartini, S.Kep",
  role: "Pendiri & Kepala Perawat",
  title: "Sarjana Keperawatan & Profesi Ners",
  qualification: "Praktisi Keperawatan Medis & Homecare",
  registrationStatus: "Perawat Medis Berizin Resmi",
  photo: "/images/ns-suhartini.jpg",
  quote: "Bagi kami, merawat pasien bukan sekadar memberikan tindakan medis, tetapi menghadirkan ketenangan, rasa aman, dan kasih sayang layaknya merawat keluarga sendiri di rumah.",
  bio: "Tenaga medis profesional bergelar Sarjana Keperawatan dan Profesi Ners (Ns.) dengan kompetensi mendalam dalam manajemen perawatan luka modern (modern wound care), tindakan medis invasif steril, serta pendampingan komprehensif bagi pasien lansia (geriatri) dan pemulihan pasca rawat inap rumah sakit.",
  credentials: [
    { title: "Profesi Ners (Ns.) & S.Kep", issuer: "Pendidikan Profesi Keperawatan Resmi" },
    { title: "Kualifikasi Perawatan Luka", issuer: "Modern Wound Care Dressing" },
    { title: "Tindakan Medis Steril", issuer: "Standar Prosedur Klinis RS" },
    { title: "Pendampingan Pasien Geriatri", issuer: "Perawatan Lansia & Pasca Stroke" }
  ]
};

export const siteConfig = {
  name: "Belayu Homecare",
  tagline: "Layanan Perawat Medis Profesional & Penuh Kasih di Rumah Anda",
  phone: "0831 1408 3837",
  whatsappNumber: "6283114083837",
  getWhatsAppUrl: (message) => {
    const text = message || "Halo Ns. Suhartini (Belayu Homecare), saya ingin konsultasi perawatan kesehatan untuk keluarga.";
    return `https://wa.me/6283114083837?text=${encodeURIComponent(text)}`;
  },
  operatingHours: "Senin - Sabtu: 08:00 - 17:00 WITA",
  operatingHoursNote: "Layanan Darurat & Pendampingan Khusus siap dihubungi 24 Jam via WhatsApp.",
  serviceAreas: [
    { name: "Denpasar", desc: "Denpasar Barat, Denpasar Timur, Denpasar Selatan, Denpasar Utara" },
    { name: "Badung", desc: "Mengwi, Kuta, Kuta Utara, Kerobokan, Canggu, Abiansemal" },
    { name: "Tabanan", desc: "Belayu, Kediri, Tabanan Kota, Marga, dan sekitarnya" }
  ]
};

export const servicesData = [
  { 
    id: "perawatan-luka",
    title: "Perawatan Luka Modern", 
    category: "Wound Care Specialist",
    desc: "Perawatan luka diabetes gangren, luka pasca operasi bedah/caesar, luka bakar, dan luka baring (dekubitus) dengan teknik balutan modern (moist wound healing) agar cepat kering dan bebas infeksi.",
    procedures: [
      "Debridement & pencucian luka steril",
      "Pembalutan luka modern (hydrogel / foam)",
      "Pencegahan infeksi & evaluasi jaringan",
      "Edukasi perawatan harian keluarga"
    ],
    img: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=700&q=80" 
  },
  { 
    id: "tindakan-medis",
    title: "Tindakan Medis Khusus", 
    category: "Invasive Medical Care",
    desc: "Pemasangan serta penggantian alat bantu medis di rumah dengan teknik aseptik steril yang aman sesuai instruksi dan resep dokter penanggung jawab.",
    procedures: [
      "Pasang & ganti selang NGT (makan)",
      "Pasang & ganti Kateter urine pria / wanita",
      "Pemasangan & penggantian infus cairan",
      "Injeksi obat (IV, IM, SC) sesuai resep dokter"
    ],
    img: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=700&q=80" 
  },
  { 
    id: "pendampingan-lansia",
    title: "Pendampingan Lansia & Stroke", 
    category: "Elderly & Stroke Care",
    desc: "Dukungan penuh bagi pasien geriatri atau pasca stroke untuk membantu pemulihan fisik, menjaga kebersihan diri, dan memberikan semangat moral di lingkungan keluarga.",
    procedures: [
      "Bantuan mandi & kebersihan diri (personal hygiene)",
      "Pemberian obat & asupan nutrisi terjadwal",
      "Latihan gerak sendi ringan (Range of Motion)",
      "Pemantauan tanda vital berkala (TTV)"
    ],
    img: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=700&q=80" 
  },
  { 
    id: "cek-lab-ttv",
    title: "Cek Lab Mandiri & Fisioterapi Dada", 
    category: "Checkup & Respiratory Care",
    desc: "Pemeriksaan kesehatan instan di rumah tanpa harus antre di klinik, serta terapi pernapasan/nebulizer untuk melegakan dahak dan sesak napas.",
    procedures: [
      "Cek Gula Darah Sewaktu (GDS/Puasa)",
      "Cek Asam Urat & Kolesterol Total",
      "Terapi Nebulizer (Uap) & Batuk Efektif",
      "Skrining Tensi Darah & Saturasi O2 (SpO2)"
    ],
    img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=700&q=80" 
  }
];

export const pricingPackages = [
  {
    id: "visit",
    name: "Paket Kunjungan (Per Tindakan)",
    badge: "Fleksibel",
    price: "Mulai Rp 150.000",
    period: "per visit / tindakan",
    desc: "Pilihan tepat untuk pasien yang hanya memerlukan tindakan medis tertentu tanpa perlu perawat menunggu seharian.",
    features: [
      "1x Kunjungan perawat profesional ke rumah",
      "Pemeriksaan Tanda Vital lengkap (Tensi, Nadi, SpO2, Suhu)",
      "Tindakan medis terpilih (Luka / Kateter / NGT / Infus)",
      "Penggunaan APD & alat medis steril",
      "Lembar edukasi perawatan untuk keluarga",
      "Konsultasi pasca tindakan"
    ],
    ctaText: "Pesan Paket Kunjungan",
    popular: false
  },
  {
    id: "shift",
    name: "Paket Jaga Shift Harian",
    badge: "Paling Diminati",
    price: "Mulai Rp 250.000",
    period: "per shift (8 - 12 Jam)",
    desc: "Pendampingan intensif bagi pasien lansia, pasca stroke, atau baru keluar dari RS yang butuh pengawasan dan perawatan rutin.",
    features: [
      "Perawat standby penuh 8 - 12 jam di rumah",
      "Bantuan personal hygiene (mandi, ganti baju, pampers)",
      "Pendampingan makan & minum obat tepat waktu",
      "Pemantauan tanda vital berkala per 4 jam",
      "Latihan mobilitas fisik ringan",
      "Laporan perkembangan pasien tercatat harian"
    ],
    ctaText: "Pesan Jaga Shift",
    popular: true
  },
  {
    id: "intensif",
    name: "Paket Perawatan Mingguan / Bulanan",
    badge: "Solusi Lengkap",
    price: "Custom Sesuai Kebutuhan",
    period: "paket terstruktur",
    desc: "Program perawatan berkelanjutan untuk pemulihan jangka panjang pasca operasi besar atau lansia dengan keterbatasan gerak total.",
    features: [
      "Jadwal kunjungan/shift terencana & rutin",
      "Kepala perawat memantau evaluasi medis berkala",
      "Buku Rekam Medis Khusus Pasien (Home Health Record)",
      "Prioritas reservasi jadwal tenaga perawat",
      "Dukungan konsultasi darurat 24 jam via WA",
      "Tarif paket lebih hemat untuk kontrak berkala"
    ],
    ctaText: "Konsultasi Paket Khusus",
    popular: false
  }
];

export const howItWorksSteps = [
  {
    number: "01",
    title: "Konsultasi Kondisi Pasien",
    desc: "Hubungi kami via WhatsApp atau isi form booking. Ceritakan riwayat medis, keluhan utama, dan tindakan yang dibutuhkan pasien."
  },
  {
    number: "02",
    title: "Penetapan Jadwal & Tim Medis",
    desc: "Ns. Suhartini dan tim akan menentukan prosedur medis yang tepat, estimasi biaya yang transparan, serta menyepakati jam kunjungan."
  },
  {
    number: "03",
    title: "Kunjungan & Tindakan di Rumah",
    desc: "Perawat medis profesional tiba di rumah Anda tepat waktu dengan peralatan steril lengkap dan melayani dengan penuh empati."
  },
  {
    number: "04",
    title: "Laporan Perkembangan Pasien",
    desc: "Setiap selesai tindakan, keluarga menerima lembar pemantauan tanda vital dan catatan penting untuk kelanjutan pemulihan pasien."
  }
];

export const faqData = [
  {
    q: "Apakah perawat Belayu Homecare memiliki kualifikasi resmi?",
    a: "Ya, betul sekali. Seluruh pelayanan dipimpin langsung oleh Ns. Ni Nyoman Suhartini, S.Kep berpendidikan Sarjana Keperawatan & Profesi Ners yang telah mengantongi izin praktik dan Surat Tanda Registrasi (STR) aktif dari Kementerian Kesehatan Republik Indonesia."
  },
  {
    q: "Apakah peralatan medis dibawa sendiri oleh perawat?",
    a: "Ya. Perawat kami membawa peralatan medis standar steril, tensimeter, oximeter, alat cek gula darah, alat ganti perban modern, serta alat pelindung diri (APD). Untuk obat-obatan resep dokter atau alat habis pakai khusus (seperti selang kateter/NGT tertentu), dapat disediakan oleh keluarga atau dibantu pengadaannya oleh tim kami."
  },
  {
    q: "Area mana saja di Bali yang dapat dikunjungi?",
    a: "Kami melayani seluruh wilayah Kota Denpasar, Kabupaten Badung (Mengwi, Kuta, Kerobokan, Canggu, Abiansemal), dan Kabupaten Tabanan (Belayu, Kediri, Tabanan Kota, Marga, dan sekitarnya). Untuk lokasi di luar area tersebut, silakan konsultasikan terlebih dahulu dengan admin kami."
  },
  {
    q: "Apakah bisa melayani panggilan mendadak di luar jam kerja?",
    a: "Untuk kondisi darurat atau kebutuhan mendesak di malam hari, Anda tetap dapat menghubungi nomor WhatsApp kami. Kami akan berupaya mengoordinasikan perawat terdekat yang siap bertugas."
  },
  {
    q: "Bagaimana cara pembayaran layanan?",
    a: "Pembayaran sangat mudah dan transparan. Dapat dilakukan secara tunai langsung setelah perawat selesai bertugas di rumah, atau melalui transfer bank/QRIS resmi Belayu Homecare."
  },
  {
    q: "Apakah Belayu Homecare bekerja sama dengan dokter?",
    a: "Semua tindakan invasif medis seperti pemasangan selang makan (NGT), kateter urine, maupun pemberian obat injeksi dilakukan berdasarkan instruksi/resep resmi dokter yang merawat pasien demi menjaga keselamatan dan kode etik medis."
  }
];

export const testimonialsData = [
  {
    name: "Bpk. Putu Sudarma",
    location: "Denpasar Barat",
    service: "Perawatan Luka Diabetes",
    initials: "PS",
    quote: "Luka diabetes kaki ayah saya awalnya basah dan bikin cemas sekeluarga. Bersyukur sekali bertemu Ns. Suhartini dari Belayu Homecare. Perawatannya telaten dan bersih dengan perban modern. Dalam 3 minggu lukanya mengering dengan sangat baik."
  },
  {
    name: "Ibu Wayan Desiari",
    location: "Kediri, Tabanan",
    service: "Ganti Selang NGT & Kateter",
    initials: "WD",
    quote: "Respon admin sangat cepat dan Ns. Suhartini datang tepat waktu. Pemasangan selang makan NGT untuk ibu saya dilakukan dengan sangat hati-hati dan minim rasa sakit. Sangat profesional layaknya di rumah sakit, tetapi jauh lebih nyaman karena di rumah sendiri."
  },
  {
    name: "Kak Ayu Mirah",
    location: "Mengwi, Badung",
    service: "Pendampingan Pasca Operasi Caesar",
    initials: "AM",
    quote: "Setelah keluar RS pasca sesar, saya butuh bantuan rawat luka dan cek kondisi badan. Perawat dari Belayu Homecare sangat sabar, ramah, dan telaten. Saya dan bayi jadi merasa tenang dan cepat pulih. Sangat direkomendasikan untuk keluarga di Bali!"
  }
];
