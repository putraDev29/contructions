export interface ProcessStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  iconName: string;
}

export const processStepsData: ProcessStep[] = [
  {
    step: "01",
    title: "Konsultasi Kebutuhan",
    subtitle: "Diskusi Konsep & Lingkup Pekerjaan",
    description:
      "Kami mendengarkan rancangan awal, fungsi bangunan, perkiraan anggaran, dan jadwal yang Anda targetkan untuk memetakan solusi konstruksi yang paling relevan.",
    details: [
      "Review denah dan spesifikasi awal",
      "Identifikasi fungsi & kebutuhan beban",
      "Estimasi awal kelayakan teknis",
    ],
    iconName: "MessagesSquare",
  },
  {
    step: "02",
    title: "Survei dan Perencanaan",
    subtitle: "Analisis Lapangan & Shop Drawing",
    description:
      "Pemeriksaan tapak proyek, pengukuran kontur dan posisi pondasi, dilanjutkan pemodelan struktur, kalkulasi tonase, serta pembuatan gambar kerja (shop drawing).",
    details: [
      "Survei elevasi dan titik angkur tapak",
      "Kalkulasi struktur & optimasi profil",
      "Penyusunan Rencana Anggaran Biaya (RAB)",
    ],
    iconName: "DraftingCompass",
  },
  {
    step: "03",
    title: "Fabrikasi Struktur",
    subtitle: "Pengerjaan Komponen di Workshop",
    description:
      "Proses pemotongan profil baja, perakitan pelat sambung, pengelasan presisi, pembersihan karat, dan aplikasi cat dasar anti-korosi di workshop terkontrol.",
    details: [
      "Pemotongan presisi sesuai cutting plan",
      "Pengelasan berstandar teknis tinggi",
      "Pembersihan & protective painting coating",
    ],
    iconName: "Flame",
  },
  {
    step: "04",
    title: "Instalasi dan Serah Terima",
    subtitle: "Ereksi di Lokasi & Uji Kelayakan",
    description:
      "Pengiriman modul baja ke lokasi proyek, perakitan bertahap menggunakan alat angkat, penguncian baut bertorsi, inspeksi keselarasan, hingga serah terima pekerjaan.",
    details: [
      "Lifting & erection aman sesuai JSA K3",
      "Pengetatan High Tension Bolt (HTB)",
      "Pemeriksaan akhir & serah terima proyek",
    ],
    iconName: "CheckCircle2",
  },
];
