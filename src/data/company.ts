export interface CompanyConfig {
  name: string;
  legalName: string;
  tagline: string;
  headline: string;
  subheadline: string;
  promoBadge: string;
  whatsapp: {
    number: string;
    displayNumber: string;
    defaultMessage: string;
  };
  phone: string;
  email: string;
  address: {
    street: string;
    city: string;
    province: string;
    postalCode: string;
    country: string;
  };
  serviceArea: string;
  operationalHours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  socialMedia: {
    platform: string;
    url: string;
  }[];
  salesGuarantees: {
    title: string;
    description: string;
    icon: string;
  }[];
  stats: {
    label: string;
    value: string;
    description: string;
  }[];
  domain: string;
}

export const companyData: CompanyConfig = {
  name: "Baja & Bangun Konstruksi",
  legalName: "PT Mandiri Graha Konstruksi",
  tagline: "Kontraktor Bangunan, Gedung, Rumah Tinggal & Konstruksi Baja",
  headline: "Bangun Gedung, Rumah & Gudang Baja Impian Anda dengan Hasil Presisi, Kokoh & Hemat Biaya.",
  subheadline:
    "Solusi kontraktor terpercaya dari pondasi beton, struktur gedung bertingkat, rumah tinggal modern, hingga gudang baja industri. Nikmati GRATIS survei lokasi dan konsultasi estimasi RAB transparan tanpa biaya tersembunyi!",
  promoBadge: "PROMO BULAN INI: GRATIS SURVEI LOKASI & ESTIMASI RAB DETAIL",
  whatsapp: {
    number: "6281234567890",
    displayNumber: "+62 812-3456-7890",
    defaultMessage:
      "Halo Tim Kontraktor, saya tertarik ingin konsultasi dan mendapatkan estimasi biaya (RAB) untuk proyek pembangunan gedung/rumah/gudang saya. Mohon informasi dan jadwal survei gratisnya.",
  },
  phone: "(021) 555-8901",
  email: "marketing@bajakonstruksi.com",
  address: {
    street: "Jl. Industri Baja & Bangunan Terpadu No. 88",
    city: "Jakarta Timur",
    province: "DKI Jakarta",
    postalCode: "13920",
    country: "Indonesia",
  },
  serviceArea:
    "Melayani Jabodetabek, Jawa Barat, Banten, serta proyek bangunan komersial & industri di seluruh Indonesia.",
  operationalHours: {
    weekdays: "Senin - Jumat: 08.00 - 18.00 WIB",
    saturday: "Sabtu: 08.00 - 15.00 WIB",
    sunday: "Minggu: Konsultasi WhatsApp Tetap Aktif",
  },
  socialMedia: [
    { platform: "Instagram", url: "https://instagram.com/bajakonstruksi" },
    { platform: "LinkedIn", url: "https://linkedin.com/company/bajakonstruksi" },
    { platform: "YouTube", url: "https://youtube.com/@bajakonstruksi" },
    { platform: "Facebook", url: "https://facebook.com/bajakonstruksi" },
  ],
  salesGuarantees: [
    {
      title: "GRATIS Survei & Konsultasi RAB",
      description: "Tim ahli kami siap meninjau lokasi proyek Anda tanpa dipungut biaya transportasi.",
      icon: "FileCheck",
    },
    {
      title: "Transparansi Anggaran 100%",
      description: "RAB detail per item pekerjaan & material SNI, tidak ada biaya siluman di tengah jalan.",
      icon: "BadgePercent",
    },
    {
      title: "Surat Kontrak Kerja Resmi (SPK)",
      description: "Keamanan hukum terjamin dengan kesepakatan spesifikasi, jadwal (timeline), dan garansi tertulis.",
      icon: "FileText",
    },
    {
      title: "Garansi Pemeliharaan Struktur",
      description: "Komitmen purna-jual dan jaminan mutu atas kekokohan konstruksi gedung, rumah, dan baja Anda.",
      icon: "ShieldCheck",
    },
  ],
  stats: [
    {
      value: "Gratis",
      label: "Survei & Hitung RAB",
      description: "Langsung konsultasi tanpa komitmen",
    },
    {
      value: "100%",
      label: "Bahan SNI Berkualitas",
      description: "Besi beton, profil WF & baja ringan resmi",
    },
    {
      value: "Tepat",
      label: "Jadwal & Garansi SPK",
      description: "Dikerjakan tukang & engineer berpengalaman",
    },
    {
      value: "Fleksibel",
      label: "Disesuaikan Budget",
      description: "Pilihan spesifikasi sesuai kebutuhan Anda",
    },
  ],
  domain: "https://www.bajakonstruksi.com",
};

export function getWhatsAppUrl(customMessage?: string): string {
  const message = customMessage || companyData.whatsapp.defaultMessage;
  const encoded = encodeURIComponent(message.trim());
  return `https://wa.me/${companyData.whatsapp.number}?text=${encoded}`;
}
