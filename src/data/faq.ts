export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const faqData: FaqItem[] = [
  {
    id: "faq-layanan",
    question: "Layanan konstruksi apa saja yang disediakan?",
    category: "Layanan",
    answer:
      "Kami adalah kontraktor umum yang melayani pembangunan rumah tinggal baru, ruko komersial, gedung bertingkat, struktur cor dak beton, gudang & pabrik baja berat (WF/H-Beam), pemasangan rangka atap baja ringan, hingga renovasi total. Layanan kami mencakup perencanaan desain arsitektur 3D, perhitungan struktur (engineering), penyusunan RAB, pengadaan material SNI, pelaksanaan fisik hingga serah terima kunci (Design & Build).",
  },
  {
    id: "faq-survei-gratis",
    question: "Bagaimana cara mendapatkan survei lokasi dan estimasi RAB gratis?",
    category: "Promo & Survei",
    answer:
      "Sangat mudah! Anda cukup menghubungi kami melalui WhatsApp atau mengisi formulir di website dengan mencantumkan lokasi proyek, ukuran lahan/bangunan, dan rencana kebutuhan Anda. Tim kami akan menjadwalkan kunjungan survei ke lokasi Anda (gratis untuk wilayah Jabodetabek dan sekitarnya) lalu menyusun estimasi Rencana Anggaran Biaya (RAB) yang transparan dan terperinci.",
  },
  {
    id: "faq-sistem-pembayaran",
    question: "Bagaimana sistem pembayaran proyek pembangunan?",
    category: "Pembayaran",
    answer:
      "Kami menerapkan sistem pembayaran bertahap (termin) yang aman dan adil. Pembayaran dibagi ke dalam beberapa tahapan sesuai dengan pencapaian progres fisik pekerjaan di lapangan (misalnya: pondasi selesai, struktur lantai selesai, dinding & atap, hingga finishing). Semua jadwal pembayaran dituangkan secara tertulis dalam Surat Perjanjian Kerja (SPK) resmi.",
  },
  {
    id: "faq-kustom-desain-budget",
    question: "Apakah desain dan spesifikasi material bisa disesuaikan dengan budget?",
    category: "Budget & Desain",
    answer:
      "Tentu saja. Kami mengedepankan fleksibilitas bagi klien. Tim arsitek dan estimator kami dapat merekomendasikan pilihan material berkualitas SNI yang paling efektif dan efisien guna mengoptimalkan anggaran yang Anda miliki tanpa mengurangi faktor keamanan dan estetika bangunan.",
  },
  {
    id: "faq-luar-kota",
    question: "Apakah melayani proyek pembangunan di luar wilayah Jabodetabek?",
    category: "Jangkauan",
    answer:
      "Ya. Selain melayani wilayah Jabodetabek, Jawa Barat, dan Banten untuk rumah tinggal dan ruko, kami juga menangani proyek pembangunan gedung komersial, fasilitas pergudangan, dan struktur baja industri di berbagai wilayah di seluruh Indonesia dengan pengiriman modul dan tim mandor berpengalaman.",
  },
  {
    id: "faq-garansi",
    question: "Apakah ada jaminan garansi setelah bangunan selesai diserahterimakan?",
    category: "Garansi",
    answer:
      "Pasti. Kami memberikan garansi pemeliharaan tertulis setelah serah terima pekerjaan. Garansi mencakup masa retensi untuk perbaikan kebocoran atap/dak, kelistrikan, serta jaminan mutu atas kekokohan struktur bangunan. Kenyamanan dan ketenangan pikiran Anda adalah prioritas utama kami.",
  },
];
