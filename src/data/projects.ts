export interface ProjectItem {
  id: string;
  title: string;
  category: "Rumah & Hunian" | "Gedung & Ruko" | "Gudang & Industri" | "Konstruksi Baja & Atap";
  categoryKey: "rumah" | "gedung" | "gudang" | "atap";
  location: string;
  scopeSummary: string;
  specs: {
    material: string;
    span: string;
    area: string;
  };
  description: string;
  imageUrl: string;
  yearNote: string;
  featured?: boolean;
}

export const projectsData: ProjectItem[] = [
  {
    id: "dak-beton-gedung-bertingkat",
    title: "Pengecoran Dak Beton Lantai Gedung & Hunian",
    category: "Gedung & Ruko",
    categoryKey: "gedung",
    location: "Proyek Gedung Bertingkat Jabodetabek",
    scopeSummary: "Pengecoran pelat lantai dak beton menggunakan concrete pump & armada ready mix.",
    specs: {
      material: "Beton Readymix K-300 & Tulangan Besi Ulir SNI",
      span: "Pelat Lantai 2 Bertingkat",
      area: "Luas Dak ± 450 m²",
    },
    description:
      "Dokumentasi pelaksanaan pengecoran dak lantai gedung komersial dan hunian bertingkat. Menggunakan boom concrete pump untuk kecepatan perataan serta vibrator beton guna mencegah rongga udara (keropos), diawasi langsung oleh mandor & tim engineer.",
    imageUrl: "/images/projects/dak-beton-lantai-gedung.jpg",
    yearNote: "Dokumentasi Lapangan Nyata",
    featured: true,
  },
  {
    id: "pembesian-balok-kolom",
    title: "Pembesian & Bekisting Struktur Lantai 2 Gedung",
    category: "Gedung & Ruko",
    categoryKey: "gedung",
    location: "Kawasan Pembangunan Gedung & Ruko Komersial",
    scopeSummary: "Perakitan besi tulangan kolom utama, balok anak, dan anyaman wiremesh dak.",
    specs: {
      material: "Besi Beton Ulir D16 & D13 SNI Full, Bekisting Multiplex",
      span: "Grid Kolom 6 x 6 Meter",
      area: "Luas Lantai ± 520 m²",
    },
    description:
      "Tahap penulangan besi beton bertulang untuk lantai 2 gedung bertingkat. Presisi jarak sengkang kolom, stek penjangkaran balok, serta pemasangan pipa instalasi kelistrikan & plumbing tertanam sebelum tahap pengecoran beton.",
    imageUrl: "/images/projects/pembesian-balok-kolom-gedung.jpg",
    yearNote: "Dokumentasi Lapangan Nyata",
    featured: true,
  },
  {
    id: "ereksi-rangka-baja-crane",
    title: "Ereksi Rangka Baja Gudang & Workshop",
    category: "Gudang & Industri",
    categoryKey: "gudang",
    location: "Kawasan Industri & Pergudangan",
    scopeSummary: "Pengangkatan dan perakitan kuda-kuda baja WF menggunakan mobile crane.",
    specs: {
      material: "Profil Baja WF 350, Angkur HTB Grade 8.8",
      span: "Bentang 28 Meter Bebas Tiang",
      area: "Luas Gudang ± 1.800 m²",
    },
    description:
      "Pekerjaan ereksi struktur baja untuk fasilitas workshop dan gudang operasional. Menggunakan bantuan crane dengan standar keselamatan kerja K3 ketat untuk perakitan kolom dan balok rafter atap di ketinggian.",
    imageUrl: "/images/projects/ereksi-rangka-baja-crane.jpg",
    yearNote: "Dokumentasi Lapangan Nyata",
    featured: true,
  },
  {
    id: "atap-baja-ringan-gedung",
    title: "Konstruksi Rangka Atap Baja Ringan Model Limas",
    category: "Konstruksi Baja & Atap",
    categoryKey: "atap",
    location: "Proyek Gedung Fasilitas & Rumah Tinggal",
    scopeSummary: "Pemasangan kuda-kuda baja ringan profil C truss bentang lebar dengan genteng metal.",
    specs: {
      material: "Kanal C75 TCT 0.75 SNI & Reng Baja Ringan",
      span: "Bentang Kuda-Kuda 18 Meter",
      area: "Luas Atap ± 600 m²",
    },
    description:
      "Fabrikasi dan instalasi rangka atap baja ringan model limasan untuk bangunan gedung serbaguna dan perumahan. Perhitungan jarak kuda-kuda presisi menjamin ketahanan terhadap terpaan angin kencang serta beban penutup atap.",
    imageUrl: "/images/projects/atap-baja-ringan-gedung.jpg",
    yearNote: "Dokumentasi Lapangan Nyata",
    featured: true,
  },
  {
    id: "pengecoran-lantai-gudang",
    title: "Pengecoran Lantai Gudang & Penulangan Wiremesh",
    category: "Gudang & Industri",
    categoryKey: "gudang",
    location: "Area Pergudangan & Fasilitas Logistik",
    scopeSummary: "Pengecoran lantai kerja tebal 15 cm dengan penulangan wiremesh M8 & mobil molen.",
    specs: {
      material: "Beton Ready Mix K-350, Wiremesh M8 Ulir, Floor Hardener",
      span: "Beban Lantai Kuat Tahan Forklift",
      area: "Luas Lantai ± 1.200 m²",
    },
    description:
      "Aplikasi lantai kerja beton ready mix di bawah naungan atap baja bentang lebar. Didesain khusus untuk menahan lintasan kendaraan berat seperti forklift dan truk muatan logistik dengan finishing trowel yang rata dan kuat.",
    imageUrl: "/images/projects/pengecoran-lantai-gudang.jpg",
    yearNote: "Dokumentasi Lapangan Nyata",
    featured: true,
  },
  {
    id: "rumah-tinggal-modern-tropis",
    title: "Pembangunan Rumah Tinggal 2 Lantai Modern",
    category: "Rumah & Hunian",
    categoryKey: "rumah",
    location: "Perumahan Residensial Eksklusif",
    scopeSummary: "Pekerjaan konstruksi rumah tinggal 2 lantai mulai dari pondasi hingga serah terima kunci.",
    specs: {
      material: "Struktur Beton Bertulang, Bata Ringan, Finishing Cat Premium",
      span: "Desain Open-Space Modern",
      area: "Luas Bangunan ± 280 m²",
    },
    description:
      "Layanan bangun rumah tinggal mewah dan fungsional. Kami menangani seluruh tahapan mulai dari denah arsitektur 3D, pengurusan izin IMB/PBG, struktur beton kokoh, instalasi MEP, hingga interior finishing bergaransi.",
    imageUrl: "/images/outdoor_warehouse_frame.jpg",
    yearNote: "Layanan Desain & Bangun Lengkap",
    featured: false,
  },
];
