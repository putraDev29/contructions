import React from "react";
import Link from "next/link";
import { advantagesData } from "@/data/advantages";
import {
  Compass,
  Target,
  Workflow,
  MessageSquareCheck,
  TrendingUp,
  ShieldCheck,
  Check,
  ArrowRight,
  HardHat,
} from "lucide-react";

export function AdvantagesSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Compass":
        return <Compass className="w-5 h-5" />;
      case "Target":
        return <Target className="w-5 h-5" />;
      case "Workflow":
        return <Workflow className="w-5 h-5" />;
      case "MessageSquareCheck":
        return <MessageSquareCheck className="w-5 h-5" />;
      case "TrendingUp":
        return <TrendingUp className="w-5 h-5" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-5 h-5" />;
      default:
        return <Check className="w-5 h-5" />;
    }
  };

  return (
    <section id="keunggulan" className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background ambient elements */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Asymmetrical Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Fixed Overview & Industrial Commitment (5 cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-amber-400 bg-amber-500/10 border border-amber-500/20 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              MENGAPA MEMILIH KAMI
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Standar Rekayasa Presisi & Komitmen{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
                Keamanan Struktur.
              </span>
            </h2>

            <p className="mt-5 text-sm sm:text-base text-slate-300 leading-relaxed">
              Kami memadukan ketelitian perhitungan engineering dengan disiplin fabrikasi
              dan ereksi lapangan, guna menghasilkan bangunan baja yang kokoh, fungsional,
              dan aman dalam jangka panjang.
            </p>

            {/* Industrial Highlight Box */}
            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-[#121B27] to-[#0A1017] border border-slate-700/80 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-orange-400">
                  <HardHat className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">
                    Disiplin Prosedur K3 & QC
                  </div>
                  <div className="text-xs text-amber-400 font-medium">
                    Standar Keselamatan Kerja Terpadu
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Setiap sambungan baut dan pengelasan melewati inspeksi bertahap demi
                meminimalisir risiko lendutan struktur serta kegagalan konstruksi.
              </p>

              <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between">
                <span className="text-xs text-slate-400">Punya rencana proyek?</span>
                <Link
                  href="#kontak"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-400 hover:text-orange-300 transition-colors"
                >
                  <span>Minta Penawaran</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Asymmetrical Staggered Cards (7 cols) */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
            {advantagesData.map((item, index) => (
              <div
                key={item.id}
                className={`group p-6 rounded-2xl bg-[#0F1724] border border-slate-800 hover:border-amber-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-black/40 flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 ${
                  index % 2 === 1 ? "lg:translate-x-3 bg-gradient-to-r from-[#0F1724] to-[#121D2C]" : ""
                }`}
              >
                {/* Number & Icon */}
                <div className="flex sm:flex-col items-center sm:items-start justify-between shrink-0 gap-3">
                  <span className="text-xs font-mono font-bold text-orange-400 bg-orange-500/10 px-2 py-0.5 rounded border border-orange-500/20">
                    {item.number}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700/80 group-hover:border-amber-500/40 group-hover:text-amber-400 flex items-center justify-center text-slate-300 transition-colors">
                    {getIcon(item.iconName)}
                  </div>
                </div>

                {/* Text Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                      {item.title}
                    </h3>
                    <span className="text-[11px] font-semibold text-slate-400 bg-slate-900/80 px-2.5 py-0.5 rounded-full border border-slate-800">
                      {item.highlight}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
