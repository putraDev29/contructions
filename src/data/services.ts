export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  badge: string;
  promoTag: string;
  features: string[];
  scopeOfWork: string[];
  imageUrl: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "bangun-rumah-tinggal",
    number: "01",
    title: "Pembangunan Rumah Tinggal & Villa",
    shortDescription:
      "Jasa bangun rumah baru 1 & 2 lantai dari pondasi hingga terima kunci dengan desain arsitektur modern dan efisiensi budget.",
    fullDescription:
      "Kami melayani pembangunan rumah tinggal idaman keluarga dari nol (lahan kosong) maupun renovasi total. Didukung gambar arsitektur 3D gratis, perhitungan struktur tahan gempa, dan laporan progres berkala sehingga Anda dapat membangun tanpa rasa khawatir.",
    iconName: "Home",
    badge: "Hunian Idaman & Modern",
    promoTag: "GRATIS Desain 3D & RAB",
    features: [
      "Struktur beton bertulang kokoh & anti-retak",
      "Pilihan material fleksibel disesuaikan dengan anggaran Anda",
      "Sistem pembayaran bertahap (termin) sesuai progres nyata",
      "Garansi pemeliharaan kebocoran dan struktur setelah serah terima",
    ],
    scopeOfWork: [
      "Perencanaan denah, visual 3D, dan detail RAB",
      "Pekerjaan pondasi cakar ayam / bore pile",
      "Struktur kolom, balok, dan dak lantai 2",
      "Dinding bata ringan, plester aci, dan finishing cat",
      "Instalasi listrik, sanitasi air, keramik, dan sanitary",
    ],
    imageUrl: "/images/projects/dak-beton-lantai-gedung.jpg",
  },
  {
    id: "bangun-gedung-ruko",
    number: "02",
    title: "Pembangunan Gedung & Ruko Komersial",
    shortDescription:
      "Konstruksi gedung bertingkat, ruko usaha, kantor, dan fasilitas komersial dengan struktur beton bertulang & baja kokoh.",
    fullDescription:
      "Pembangunan fasilitas komersial dengan perhitungan beban operasional yang matang. Kami memastikan pengerjaan tepat waktu agar bangunan bisnis Anda dapat segera beroperasi dan menghasilkan imbal hasil investasi (ROI) optimal.",
    iconName: "Building2",
    badge: "Komersial & Investasi",
    promoTag: "Jaminan Selesai Tepat Waktu",
    features: [
      "Optimalisasi tata ruang komersial untuk mobilitas tinggi",
      "Struktur lantai kuat menahan beban operasional & utilitas",
      "Penyediaan jalur instalasi mekanikal & elektrikal (MEP) rapi",
      "Manajemen proyek disiplin dengan kurva-S jadwal terukur",
    ],
    scopeOfWork: [
      "Analisis daya dukung tanah & pondasi dalam",
      "Struktur pelat lantai cor bertingkat (dak beton ready mix)",
      "Pemasangan partisi, fasad modern, dan kaca komersial",
      "Finishing interior lantai granit/keramik & plafon gypsum",
    ],
    imageUrl: "/images/projects/pembesian-balok-kolom-gedung.jpg",
  },
  {
    id: "gudang-pabrik-baja",
    number: "03",
    title: "Konstruksi Gudang & Pabrik Baja",
    shortDescription:
      "Pembangunan gudang logistik dan fasilitas industri bentang lebar bebas tiang menggunakan profil baja WF / H-Beam SNI.",
    fullDescription:
      "Spesialisasi fabrikasi dan ereksi struktur baja untuk kebutuhan pergudangan, pabrik manufaktur, dan workshop alat berat. Memaksimalkan volume penyimpanan vertikal dengan perhitungan kekuatan crane hoist.",
    iconName: "Warehouse",
    badge: "Bentang Lebar Bebas Tiang",
    promoTag: "Pengerjaan Cepat & Presisi",
    features: [
      "Bentang lebar bebas kolom (clear span) hingga puluhan meter",
      "Material baja profil WF & H-Beam standar sertifikasi pabrik",
      "Finishing cat dasar anti-karat (primer zinc chromate)",
      "Lantai beton ready mix bertulangan wiremesh tahan beban berat",
    ],
    scopeOfWork: [
      "Fabrikasi kolom, rafter, dan ikatan angin di workshop",
      "Ereksi struktur utama dengan mobile crane terverifikasi",
      "Pengecoran lantai gudang tebal 15 cm + floor hardener",
      "Pemasangan dinding cladding dan atap galvalum anti-bocor",
    ],
    imageUrl: "/images/projects/ereksi-rangka-baja-crane.jpg",
  },
  {
    id: "pengecoran-dak-beton",
    number: "04",
    title: "Pekerjaan Cor Dak Beton & Struktur Lantai",
    shortDescription:
      "Layanan spesialis pengecoran dak beton lantai bertingkat, balok gantung, dan plat lantai gudang dengan armada ready mix & pompa beton.",
    fullDescription:
      "Pengerjaan pengecoran dak beton bertulang untuk penambahan lantai 2/3 rumah tinggal, ruko, maupun dak atap gedung. Menggunakan mutu beton teruji (K-250 s/d K-350) serta pemadatan vibrator agar hasil padat merata tanpa rembesan air.",
    iconName: "Layers",
    badge: "Kekuatan & Kedap Air",
    promoTag: "Garansi Waterproofing",
    features: [
      "Tulangan besi ulir standar SNI dipasang rapat sesuai perhitungan teknis",
      "Metode cor cepat menggunakan armada mixer & concrete pump",
      "Aplikasi aditif anti-bocor (waterproofing integral)",
      "Permukaan halus, rata, dan siap menerima finishing lantai berikutnya",
    ],
    scopeOfWork: [
      "Pemasangan scaffolding dan bekisting multiplex kokoh",
      "Anyaman pembesian pelat 2 lapis dan balok anak",
      "Pengecoran serentak dan pemadatan mekanis (vibrator)",
      "Perawatan beton (curing) dan aplikasi lapisan waterproofing",
    ],
    imageUrl: "/images/projects/pengecoran-lantai-gudang.jpg",
  },
  {
    id: "atap-baja-ringan",
    number: "05",
    title: "Rangka Atap Baja Ringan & Baja Berat",
    shortDescription:
      "Pemasangan rangka atap baja ringan Zincalume/Galvalum dan baja profil untuk gedung, perumahan, kanopi, dan ruko.",
    fullDescription:
      "Solusi rangka atap tahan rayap, anti karat, dan berbobot ringan. Cocok untuk penggantian atap kayu lapuk pada renovasi rumah maupun pemasangan atap gedung baru dengan berbagai bentuk model (limas, pelana, miring).",
    iconName: "Home",
    badge: "Ringan, Tahan Karat & Rayap",
    promoTag: "Bahan SNI Bergaransi",
    features: [
      "Bahan baja ringan mutu tinggi G550 berlapis Zincalume",
      "Struktur kuda-kuda kokoh dihitung berdasarkan beban genteng",
      "Pengerjaan rapi dan cepat oleh tukang atap berpengalaman",
      "Pilihan penutup atap: genteng metal, keramik, spandek, alderon",
    ],
    scopeOfWork: [
      "Pengukuran dimensi ring balok eksisting",
      "Perakitan kuda-kuda dan penguncian dynabolt ke struktur beton",
      "Pemasangan reng dengan jarak presisi sesuai tipe penutup atap",
      "Pemasangan lisplang, talang air jurai, dan flashing anti-bocor",
    ],
    imageUrl: "/images/projects/atap-baja-ringan-gedung.jpg",
  },
  {
    id: "renovasi-total",
    number: "06",
    title: "Renovasi Gedung, Rumah & Interior Komersial",
    shortDescription:
      "Layanan renovasi skala menengah hingga besar, penambahan lantai (tingkat), perbaikan fasad, dan tata ulang ruang usaha.",
    fullDescription:
      "Ubah tampilan bangunan lama Anda menjadi lebih modern, luas, dan bernilai jual tinggi. Kami menangani renovasi struktural maupun arsitektural dengan rencana kerja bertahap tanpa mengganggu aktivitas sekitar.",
    iconName: "Wrench",
    badge: "Transformasi Bangunan",
    promoTag: "Solusi Hemat Biaya",
    features: [
      "Pemeriksaan struktur eksisting sebelum renovasi penambahan lantai",
      "Desain fasad modern kekinian untuk meningkatkan citra gedung",
      "Pilihan material pengganti yang tahan lama dan hemat energi",
      "Transparansi biaya tanpa penambahan mendadak di tengah proyek",
    ],
    scopeOfWork: [
      "Bongkaran bagian lama dan perkuatan pondasi/kolom",
      "Pembangunan ruang tambahan atau penambahan lantai 2",
      "Penggantian lantai keramik, plafon, pintu, dan jendela aluminium",
      "Pengecatan ulang dinding exterior & interior berkualitas",
    ],
    imageUrl: "/images/outdoor_steel_construction.jpg",
  },
];
