export interface PromoPackage {
  id: string;
  name: string;
  category: string;
  badge: string;
  idealFor: string;
  highlights: string[];
  includedBonuses: string[];
  ctaText: string;
  popular?: boolean;
}

export const promotionalPackages: PromoPackage[] = [
  {
    id: "paket-rumah",
    name: "Paket Bangun Rumah Tinggal",
    category: "Hunian Modern",
    badge: "Paling Diminati Keluarga",
    idealFor: "Rumah 1 Lantai, 2 Lantai, Townhouse, atau Villa Pribadi",
    highlights: [
      "Struktur beton bertulang standar SNI (pondasi cakar ayam)",
      "Dinding bata ringan hebel, plester aci & cat eksterior/interior",
      "Rangka atap baja ringan + genteng metal/keramik",
      "Lantai granit 60x60, kusen aluminium, & instalasi listrik/air",
      "Jaminan serah terima tepat waktu & surat garansi",
    ],
    includedBonuses: [
      "GRATIS Gambar Desain Arsitektur 3D",
      "GRATIS Rencana Anggaran Biaya (RAB) Rinci",
      "GRATIS Survei Lokasi & Konsultasi Tata Ruang",
    ],
    ctaText: "Minta Estimasi Biaya Rumah",
    popular: true,
  },
  {
    id: "paket-gedung-ruko",
    name: "Paket Gedung & Ruko Komersial",
    category: "Investasi & Bisnis",
    badge: "Solusi Cepat Operasional",
    idealFor: "Ruko Usaha, Gedung Kantor, Klinik, Showroom, atau Kost Eksklusif",
    highlights: [
      "Pondasi tapak / bore pile kokoh siap bertingkat",
      "Struktur dak cor beton ready mix tebal & bebas bocor",
      "Fasad modern komersial (kaca tempered, ACP, ornamen kekinian)",
      "Tata ruang utilitas efisien & siap operasional bisnis",
      "Sistem termin transparan sesuai progres milestone",
    ],
    includedBonuses: [
      "GRATIS Konsultasi Kelayakan Struktur & Izin",
      "GRATIS Masterplan Layout Ruang Usaha",
      "Laporan Progres Mingguan Berfoto & Video",
    ],
    ctaText: "Konsultasi Proyek Gedung/Ruko",
    popular: false,
  },
  {
    id: "paket-gudang-baja",
    name: "Paket Gudang & Pabrik Baja",
    category: "Industri & Pergudangan",
    badge: "Kekuatan Industri Berat",
    idealFor: "Gudang Logistik, Pabrik Manufaktur, Workshop, atau Hanggar",
    highlights: [
      "Profil baja WF / H-Beam SNI mill certificate resmi",
      "Bentang lebar bebas kolom (clear span) efisien & lega",
      "Lantai beton ready mix tebal 15 cm + wiremesh M8 tahan forklift",
      "Atap galvalum zincalume anti-bocor + ventilasi industri",
      "Dikerjakan dengan crane & juru las bersertifikat",
    ],
    includedBonuses: [
      "GRATIS Analisis Kalkulasi Tonase Baja",
      "GRATIS Cutting Plan Efisiensi Material",
      "GRATIS Pendampingan Survei Lahan Industri",
    ],
    ctaText: "Minta Penawaran Gudang Baja",
    popular: true,
  },
  {
    id: "paket-dak-atap",
    name: "Paket Cor Dak Beton & Atap",
    category: "Struktur & Renovasi",
    badge: "Pengerjaan Cepat & Rapi",
    idealFor: "Peninggian Rumah (Lantai 2), Tambah Dak Jemuran, Ganti Atap Baja Ringan",
    highlights: [
      "Bekisting multiplex & perancah scaffolding kokoh",
      "Pembesian besi ulir rapat sesuai standar beban lantai",
      "Pengecoran cepat menggunakan armada mixer & pompa beton",
      "Rangka atap baja ringan Zincalume anti karat & rayap",
      "Aplikasi waterproofing integral pelindung kebocoran",
    ],
    includedBonuses: [
      "GRATIS Cek Kekuatan Pondasi Eksisting",
      "GRATIS Estimasi Waktu Kerja & Kebutuhan Material",
      "Garansi Kebocoran Setelah Pengerjaan",
    ],
    ctaText: "Konsultasi Cor Dak & Atap",
    popular: false,
  },
];
