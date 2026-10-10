import React from "react";
import { Compass, Layers, Target, ShieldAlert } from "lucide-react";

interface HighlightItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const highlights: HighlightItem[] = [
  {
    icon: Compass,
    title: "Perencanaan Terukur",
    description:
      "Perhitungan beban struktur dan gambar kerja shop drawing presisi untuk efisiensi material optimal.",
  },
  {
    icon: Layers,
    title: "Material Berkualitas",
    description:
      "Penggunaan profil baja WF, H-Beam, dan pelat berstandar SNI dengan mill certificate resmi.",
  },
  {
    icon: Target,
    title: "Pengerjaan Presisi",
    description:
      "Fabrikasi terstandarisasi dengan kontrol ketat pada toleransi sambungan baut dan mutu pengelasan.",
  },
  {
    icon: ShieldAlert,
    title: "Keselamatan Kerja",
    description:
      "Penerapan prosedur K3 (Kesehatan & Keselamatan Kerja) ketat untuk keamanan tim dan kelancaran site.",
  },
];

export function TrustSection() {
  return (
    <section className="relative z-20 -mt-6 sm:-mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {highlights.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="group p-5 sm:p-6 rounded-2xl bg-gradient-to-b from-[#131C28] to-[#0D1420] border border-slate-800 hover:border-amber-500/50 shadow-lg shadow-black/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-11 h-11 rounded-xl bg-orange-500/10 border border-orange-500/20 group-hover:bg-amber-500/20 group-hover:border-amber-500/40 flex items-center justify-center text-orange-400 group-hover:text-amber-300 transition-colors mb-4">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
