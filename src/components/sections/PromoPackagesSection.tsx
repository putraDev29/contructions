import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { promotionalPackages } from "@/data/promotions";
import { getWhatsAppUrl } from "@/data/company";
import {
  Check,
  Gift,
  ArrowRight,
  Sparkles,
  PhoneCall,
  ShieldCheck,
} from "lucide-react";

export function PromoPackagesSection() {
  return (
    <section id="paket-promo" className="py-20 lg:py-28 relative bg-[#090E14] overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 bg-industrial-dots opacity-20" />
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="PENAWARAN & PAKET PEMBANGUNAN"
          title="Pilih Paket Konstruksi Sesuai Kebutuhan Anda"
          highlightedWord="Paket Konstruksi"
          description="Solusi lengkap dan fleksibel untuk pembangunan rumah, gedung komersial, ruko, gudang baja, maupun pekerjaan cor dak beton dengan penawaran promo spesial."
        />

        {/* 4 Packages Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {promotionalPackages.map((pkg) => {
            const waMessage = `Halo Tim Kontraktor, saya tertarik ingin berkonsultasi mengenai "${pkg.name}" (${pkg.category}). Mohon info penawaran estimasi biaya dan survei lokasinya.`;

            return (
              <div
                key={pkg.id}
                className={`relative rounded-2xl bg-[#0F1724] border transition-all duration-300 flex flex-col justify-between ${
                  pkg.popular
                    ? "border-amber-500/80 shadow-2xl shadow-orange-950/30 scale-[1.02] ring-1 ring-amber-500/50"
                    : "border-slate-800 hover:border-slate-700 shadow-xl"
                }`}
              >
                {/* Popular Flag */}
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-600 to-amber-600 text-white text-[11px] font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-lg flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>Paling Diminati</span>
                  </div>
                )}

                <div className="p-6">
                  {/* Category & Badge */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono font-bold text-orange-400">
                      {pkg.category}
                    </span>
                    <span className="text-[10px] font-semibold text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                      {pkg.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mt-1">
                    {pkg.name}
                  </h3>

                  <p className="mt-2 text-xs text-slate-400 leading-relaxed min-h-[36px]">
                    Cocok untuk: <span className="text-slate-300 font-medium">{pkg.idealFor}</span>
                  </p>

                  {/* Highlights list */}
                  <div className="mt-5 pt-4 border-t border-slate-800/80 space-y-2.5">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Cakupan Pekerjaan:
                    </div>
                    {pkg.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bonus Included */}
                  <div className="mt-5 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 space-y-1.5">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-amber-300">
                      <Gift className="w-3.5 h-3.5 text-amber-400" />
                      <span>Bonus Promo Khusus:</span>
                    </div>
                    {pkg.includedBonuses.map((bonus, bIdx) => (
                      <div key={bIdx} className="text-[11px] text-amber-200/90 flex items-center gap-1.5 font-medium">
                        <span className="w-1 h-1 rounded-full bg-amber-400 shrink-0" />
                        <span>{bonus}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer CTA */}
                <div className="p-6 pt-0">
                  <a
                    href={getWhatsAppUrl(waMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all active:scale-95 text-center ${
                      pkg.popular
                        ? "bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white shadow-lg shadow-orange-950/40"
                        : "bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80"
                    }`}
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span>{pkg.ctaText}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Promo Assurance Guarantee */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#111A26] to-[#0D1420] border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-white">
                Punya Kebutuhan di Luar Pilihan Paket?
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                Kami siap membuatkan Rencana Anggaran Biaya (RAB) kustom sesuai dengan denah, spesifikasi, dan budget yang Anda miliki.
              </p>
            </div>
          </div>

          <a
            href={getWhatsAppUrl("Halo, saya ingin konsultasi pembangunan kustom sesuai dengan denah dan budget yang saya miliki.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-md transition-colors shrink-0"
          >
            <span>Konsultasi Budget Kustom</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
