import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getWhatsAppUrl, companyData } from "@/data/company";
import { ArrowRight, PhoneCall, Gift } from "lucide-react";

export function CtaBanner() {
  const whatsappCtaMessage =
    "Halo Tim Kontraktor, saya memiliki rencana pembangunan rumah/gedung/gudang dan ingin konsultasi serta klaim promo Gratis Survei Lokasi & Estimasi RAB.";

  return (
    <section className="py-16 sm:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#141F2E] via-[#0E1622] to-[#16202C] border border-amber-500/40 p-8 sm:p-12 lg:p-16 shadow-2xl">
          {/* Background Real Construction Overlay */}
          <div className="absolute inset-0 z-0 opacity-20">
            <Image
              src="/images/projects/pengecoran-lantai-gudang.jpg"
              alt="Proyek Konstruksi Pengecoran dan Bangunan"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0E1622] via-[#0E1622]/90 to-[#0E1622]" />
          </div>

          {/* Decorative Corner Glow */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

          {/* Content */}
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-amber-300 bg-amber-500/10 border border-amber-500/30 mb-5">
              <Gift className="w-4 h-4 text-amber-400" />
              <span>PROMO KHUSUS BULAN INI</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Punya Rencana Bangun Rumah, Gedung, atau{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
                Gudang Baja?
              </span>
            </h2>

            <p className="mt-5 text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Jangan ragu berdiskusi! Dapatkan masukan teknis dari tim engineer, desain visual 3D, serta perhitungan anggaran biaya (RAB) yang terencana dan hemat tanpa biaya komitmen.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={getWhatsAppUrl(whatsappCtaMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl text-sm sm:text-base font-bold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-xl shadow-emerald-950/50 hover:shadow-emerald-700/40 transition-all duration-200 active:scale-95"
              >
                <PhoneCall className="w-5 h-5 fill-white" />
                <span>Konsultasi & Klaim Survei via WhatsApp</span>
              </a>

              <Link
                href="#kontak"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm sm:text-base font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 transition-all active:scale-95 text-center"
              >
                <span>Isi Formulir Estimasi</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </Link>
            </div>

            <div className="mt-6 text-xs text-slate-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Tim estimator siaga jam kerja operasional: {companyData.operationalHours.weekdays}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
