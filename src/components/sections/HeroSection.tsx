import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getWhatsAppUrl } from "@/data/company";
import {
  ArrowRight,
  ShieldCheck,
  Building,
  CheckCircle2,
  PhoneCall,
  Sparkles,
  Home,
  Layers,
  Flame,
} from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="beranda"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-28 pb-16 lg:pt-32 lg:pb-20 overflow-hidden"
    >
      {/* Background Hero Image with Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/outdoor_steel_construction.jpg"
          alt="Proyek Konstruksi Gedung, Rumah dan Rangka Baja Lapangan"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-25 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1118]/95 via-[#0B1118]/85 to-[#0B1118]" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0B1118]/60 to-[#0B1118]" />
        <div className="absolute inset-0 bg-industrial-grid opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Promotional Alert Banner */}
        <div className="mb-6 inline-flex flex-wrap items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold text-amber-300 bg-gradient-to-r from-orange-500/20 via-amber-500/20 to-orange-500/10 border border-amber-500/30 shadow-md">
          <span className="flex items-center gap-1.5 font-bold text-orange-400">
            <Flame className="w-4 h-4 text-orange-400 animate-bounce" />
            PROMO BULAN INI:
          </span>
          <span>GRATIS Survei Lokasi & Konsultasi Estimasi RAB Transparan!</span>
          <a
            href={getWhatsAppUrl("Halo, saya ingin klaim promo Gratis Survei Lokasi & Konsultasi Estimasi RAB.")}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline hover:text-amber-200 ml-1 font-bold"
          >
            Klaim Sekarang →
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Sales Headlines & Value Prop (7 cols) */}
          <div className="lg:col-span-7 flex flex-col text-left">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase text-amber-400 bg-amber-500/10 border border-amber-500/30 w-fit mb-4 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>KONTRAKTOR BANGUNAN, GEDUNG, RUMAH & BAJA</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.14]">
              Bangun Rumah, Gedung & Gudang Impian Anda{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-300">
                Kokoh, Cepat & Sesuai Budget.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Jasa kontraktor umum berpengalaman menangani pembangunan <strong>rumah tinggal modern, gedung bertingkat, ruko komersial, hingga gudang struktur baja bentang lebar</strong>. Material terstandar SNI, tim mandor ahli, serta sistem pembayaran bertahap (termin aman).
            </p>

            {/* Multi-Scope Pills */}
            <div className="mt-5 flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm font-semibold text-slate-300">
              <span className="px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-700/80 flex items-center gap-1.5 text-orange-400">
                <Home className="w-4 h-4" /> Rumah Tinggal & Villa
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-700/80 flex items-center gap-1.5 text-amber-400">
                <Building className="w-4 h-4" /> Gedung & Ruko
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-700/80 flex items-center gap-1.5 text-emerald-400">
                <Layers className="w-4 h-4" /> Gudang & Baja WF
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-700/80 flex items-center gap-1.5 text-blue-400">
                <ShieldCheck className="w-4 h-4" /> Cor Dak Beton
              </span>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={getWhatsAppUrl("Halo, saya ingin konsultasi rencana pembangunan dan minta estimasi biaya (RAB).")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-orange-600 via-amber-600 to-orange-600 hover:from-orange-500 hover:to-amber-500 shadow-xl shadow-orange-950/50 hover:shadow-orange-700/40 transition-all duration-200 active:scale-95 text-center"
              >
                <PhoneCall className="w-5 h-5" />
                <span>Konsultasi & Estimasi RAB Gratis</span>
              </a>

              <Link
                href="#proyek"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-base font-medium text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 transition-all duration-200 active:scale-95 text-center"
              >
                <span>Lihat Foto Proyek Nyata</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </Link>
            </div>

            {/* Quick trust metrics */}
            <div className="mt-10 pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <div className="text-xs text-slate-400 uppercase tracking-wider font-medium">
                  Biaya Survei
                </div>
                <div className="text-base font-extrabold text-amber-400 mt-0.5">
                  100% GRATIS
                </div>
              </div>
              <div>
                <div className="text-xs text-slate-400 uppercase tracking-wider font-medium">
                  Material Konstruksi
                </div>
                <div className="text-base font-extrabold text-white mt-0.5">
                  Standar SNI Resmi
                </div>
              </div>
              <div>
                <div className="text-xs text-slate-400 uppercase tracking-wider font-medium">
                  Pembayaran
                </div>
                <div className="text-base font-extrabold text-white mt-0.5">
                  Termin Bertahap
                </div>
              </div>
              <div>
                <div className="text-xs text-slate-400 uppercase tracking-wider font-medium">
                  Perjanjian Kerja
                </div>
                <div className="text-base font-extrabold text-emerald-400 mt-0.5">
                  SPK & Garansi
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase with Real Project Photo (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-orange-600/30 via-amber-500/20 to-transparent rounded-3xl blur-xl opacity-70" />

              {/* Main Card with Real Project Image */}
              <div className="relative rounded-2xl bg-gradient-to-b from-[#151D2A] to-[#0D1420] border border-slate-700/80 p-5 shadow-2xl">
                {/* Visual Image Banner with Real Photo: Pemasangan Rangka Baja & Bangunan */}
                <div className="relative h-64 sm:h-72 rounded-xl overflow-hidden border border-slate-700/60 mb-5 group">
                  <Image
                    src="/images/projects/ereksi-rangka-baja-crane.jpg"
                    alt="Ereksi Rangka Baja Bangunan dan Gudang dengan Crane"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-black/30" />
                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-md border border-amber-500/40 text-[11px] font-semibold text-amber-300 flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    <span>Dokumentasi Lapangan Nyata</span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 text-xs text-white font-medium">
                    Pemasangan struktur portal baja & dinding bangunan dengan alat berat crane.
                  </div>
                </div>

                {/* Promotional Highlights */}
                <div className="space-y-3">
                  <div className="text-xs uppercase font-bold tracking-wider text-slate-400 flex items-center justify-between">
                    <span>Keuntungan Memilih Kami</span>
                    <span className="text-amber-400 text-[11px]">Bebas Khawatir</span>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/70 border border-slate-800">
                    <div className="w-9 h-9 rounded-lg bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-400 shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-semibold text-white">
                        Rencana Anggaran Biaya (RAB) Rinci
                      </div>
                      <div className="text-xs text-slate-400">
                        Transparan spesifikasi bahan & volume, tidak ada pembengkakan biaya.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/70 border border-slate-800">
                    <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                      <Building className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-semibold text-white">
                        Layanan Komplit: Pondasi s/d Kunci
                      </div>
                      <div className="text-xs text-slate-400">
                        Mulai dari gambar desain, struktur beton, rangka atap, hingga finishing.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/70 border border-slate-800">
                    <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-semibold text-white">
                        Garansi Kekokohan Struktur
                      </div>
                      <div className="text-xs text-slate-400">
                        Didukung kontrak kerja SPK resmi & jaminan pemeliharaan purna jual.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Instant CTA inside card */}
                <div className="mt-4 pt-3 border-t border-slate-800/80">
                  <a
                    href={getWhatsAppUrl("Halo, saya ingin jadwal survei lokasi dan konsultasi proyek pembangunan.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-md transition-colors"
                  >
                    <span>Hubungi Engineer Kami Sekarang</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
