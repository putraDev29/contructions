import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Building,
  Home,
  Layers,
  Sparkles,
  PhoneCall,
} from "lucide-react";
import { getWhatsAppUrl } from "@/data/company";

export function AboutSection() {
  const companyValues = [
    {
      title: "Pembangunan Rumah, Gedung & Gudang",
      desc: "Menangani proyek hunian pribadi, ruko bisnis, fasilitas gedung bertingkat, hingga gudang struktur baja bentang lebar.",
      icon: Home,
    },
    {
      title: "Transparansi Biaya & Bahan SNI",
      desc: "Setiap material besi beton, baja WF, dan ready mix bersertifikat resmi tanpa ada pembengkakan biaya di tengah proyek.",
      icon: ShieldCheck,
    },
    {
      title: "Sistem Pembayaran Bertahap (Termin)",
      desc: "Pembayaran aman sesuai progres fisik di lapangan yang disepakati bersama dalam Surat Perjanjian Kerja (SPK).",
      icon: Layers,
    },
    {
      title: "Jaminan Pemeliharaan & Garansi",
      desc: "Garansi resmi terhadap kekokohan struktur dan kebocoran atap setelah serah terima kunci bangunan.",
      icon: Building,
    },
  ];

  return (
    <section id="tentang-kami" className="py-20 lg:py-28 relative overflow-hidden bg-[#0A0F17]">
      {/* Ambient background styling */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Real Photo Showcase & Polished Floating Card (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Primary Image: Real On-site Building & Concrete Pouring */}
              <div className="relative h-[340px] sm:h-[420px] rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-900 group">
                <Image
                  src="/images/projects/dak-beton-lantai-gedung.jpg"
                  alt="Proyek Pengecoran Dak Beton Gedung & Rumah Bertingkat"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1118]/90 via-transparent to-black/30" />

                {/* Top Badge on image */}
                <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-amber-500/40 text-xs font-semibold text-amber-300 flex items-center gap-1.5 shadow-lg">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Dokumentasi Lapangan Nyata</span>
                </div>

                {/* Bottom Photo Caption */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-950/85 backdrop-blur-md p-3.5 rounded-xl border border-slate-800 text-xs text-slate-300 shadow-xl">
                  <div className="font-bold text-white flex items-center gap-1.5 mb-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Pengecoran Dak Beton Gedung & Rumah</span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    Pengawasan langsung mandor dan engineer di site dengan armada concrete pump & ready mix standar K-300.
                  </p>
                </div>
              </div>

              {/* RAPIKAN CARD: "Pengerjaan Spesifikasi Khusus" */}
              <div className="mt-4 sm:-mt-6 sm:translate-y-0 relative z-20 sm:mx-4">
                <div className="p-4 sm:p-4.5 rounded-2xl bg-gradient-to-r from-[#141E2B] to-[#0F1724] border border-amber-500/50 shadow-2xl shadow-black/60 backdrop-blur-md flex items-center gap-4 hover:border-amber-400 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white shrink-0 shadow-md shadow-orange-950/40">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-white truncate">
                        Pengerjaan Spesifikasi Khusus
                      </h4>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 shrink-0">
                        Garansi SPK
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 mt-1 leading-snug">
                      Sesuai kebutuhan tonase baja, mutu beton, dan denah arsitektur impian Anda.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-amber-400 bg-amber-500/10 border border-amber-500/20 mb-4 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              KONTRAKTOR TERPERCAYA
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Membangun Rumah, Gedung & Gudang dengan{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
                Mutu Kokoh & Harga Terjangkau.
              </span>
            </h2>

            <p className="mt-5 text-sm sm:text-base text-slate-300 leading-relaxed">
              Bukan hanya spesialis konstruksi baja berat, kami adalah mitra kontraktor lengkap untuk
              <strong> pembangunan rumah tinggal baru, ruko komersial, gedung bertingkat, hingga gudang industri</strong>.
              Kami mengutamakan kejujuran pemakaian material SNI, efisiensi rancangan anggaran, serta kecepatan pengerjaan yang terjamin dalam kontrak resmi.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {companyValues.map((val, idx) => {
                const Icon = val.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 shrink-0 mt-0.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-white">
                          {val.title}
                        </h3>
                        <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                          {val.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-transparent border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🎁</span>
                <div>
                  <div className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                    Penawaran Terbatas Bulan Ini
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-slate-200">
                    Klaim <strong>Gratis Survei Lokasi</strong> dan <strong>Estimasi RAB Detail</strong> ke proyek Anda!
                  </div>
                </div>
              </div>

              <a
                href={getWhatsAppUrl("Halo, saya ingin klaim promo Gratis Survei Lokasi dan Konsultasi Estimasi RAB untuk rencana pembangunan saya.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 shadow-md shrink-0 transition-transform active:scale-95"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Klaim Survei Gratis</span>
              </a>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <Link
                href="#paket-promo"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-600 hover:border-amber-500/60 transition-all active:scale-95 shadow-md"
              >
                <span>Lihat Pilihan Paket Pembangunan</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </Link>

              <Link
                href="#proyek"
                className="text-xs sm:text-sm font-medium text-slate-400 hover:text-white transition-colors"
              >
                Lihat Foto Proyek Nyata →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
