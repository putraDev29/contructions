export interface AdvantageItem {
  id: string;
  number: string;
  title: string;
  description: string;
  highlight: string;
  iconName: string;
}

export const advantagesData: AdvantageItem[] = [
  {
    id: "perencanaan-kebutuhan",
    number: "01",
    title: "Perencanaan Berdasarkan Kebutuhan Proyek",
    description:
      "Setiap perancangan struktur disesuaikan dengan fungsi ruang, beban kerja operasional, serta kondisi tanah lokasi untuk menghasilkan struktur yang efisien dan tepat sasaran.",
    highlight: "Kustomisasi Desain & Fungsi",
    iconName: "Compass",
  },
  {
    id: "presisi-kualitas",
    number: "02",
    title: "Fokus pada Presisi dan Kualitas Pengerjaan",
    description:
      "Pengawasan ketat pada toleransi ukuran sambungan, pelubangan baut, dan standar pengelasan guna menjamin kesesuaian antara gambar kerja dengan hasil akhir di lapangan.",
    highlight: "Quality Control Bertahap",
    iconName: "Target",
  },
  {
    id: "proses-terstruktur",
    number: "03",
    title: "Proses Kerja yang Terstruktur",
    description:
      "Alur kerja berurutan dari kalkulasi beban, shop drawing, fabrikasi terkontrol di workshop, hingga pengiriman terkoordinasi agar tahapan ereksi berjalan tertib.",
    highlight: "Manajemen Jadwal Jelas",
    iconName: "Workflow",
  },
  {
    id: "komunikasi-transparan",
    number: "04",
    title: "Komunikasi Proyek yang Transparan",
    description:
      "Laporan progres berkala dan komunikasi terbuka mengenai perkembangan fabrikasi maupun instalasi, sehingga pemilik proyek selalu memiliki visibilitas penuh.",
    highlight: "Pelaporan Progres Terbuka",
    iconName: "MessageSquareCheck",
  },
  {
    id: "efisiensi-biaya",
    number: "05",
    title: "Solusi Efisiensi Waktu dan Biaya",
    description:
      "Optimalisasi cutting plan baja untuk meminimalkan sisa material (scrap) dan metode instalasi modular yang mempersingkat durasi pekerjaan di lokasi proyek.",
    highlight: "Efisiensi Material & Durasi",
    iconName: "TrendingUp",
  },
  {
    id: "keselamatan-kerja",
    number: "06",
    title: "Prioritas Terhadap Keselamatan Kerja (K3)",
    description:
      "Penerapan prosedur Keselamatan dan Kesehatan Kerja (K3) ketat di area workshop maupun lokasi ereksi tinggi, didukung peralatan pelindung diri dan alat angkat terverifikasi.",
    highlight: "Nir-Kecelakaan (Safety First)",
    iconName: "ShieldCheck",
  },
];
