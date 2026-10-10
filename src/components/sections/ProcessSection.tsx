import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processStepsData } from "@/data/process";
import {
  MessagesSquare,
  DraftingCompass,
  Flame,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export function ProcessSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "MessagesSquare":
        return <MessagesSquare className="w-5 h-5" />;
      case "DraftingCompass":
        return <DraftingCompass className="w-5 h-5" />;
      case "Flame":
        return <Flame className="w-5 h-5" />;
      case "CheckCircle2":
        return <CheckCircle2 className="w-5 h-5" />;
      default:
        return <CheckCircle2 className="w-5 h-5" />;
    }
  };

  return (
    <section id="proses" className="py-20 lg:py-28 relative bg-[#090E14] overflow-hidden">
      <div className="absolute inset-0 bg-industrial-grid opacity-15" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="PROSES PENGERJAAN"
          title="Alur Kerja Terencana & Terukur"
          highlightedWord="Terencana"
          description="Empat tahapan sistematis untuk memastikan proyek konstruksi baja Anda selesai dengan presisi dimensi, mutu material teruji, dan tepat waktu."
        />

        <div className="mt-16 relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500/20 via-amber-400/50 to-orange-500/20 -translate-y-20 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5 relative z-10">
            {processStepsData.map((step) => (
              <div
                key={step.step}
                className="group relative flex flex-col justify-between p-6 rounded-2xl bg-[#0F1724] border border-slate-800 hover:border-amber-500/60 shadow-xl transition-all duration-300 hover:-translate-y-1.5"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">
                      {step.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 group-hover:bg-amber-500/20 group-hover:border-amber-500/40 flex items-center justify-center text-orange-400 group-hover:text-amber-300 transition-colors">
                      {getIcon(step.iconName)}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                    {step.title}
                  </h3>
                  <div className="text-xs font-semibold text-amber-400/90 mt-0.5 mb-3">
                    {step.subtitle}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-5">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 space-y-2">
                  {step.details.map((detail, dIdx) => (
                    <div
                      key={dIdx}
                      className="text-[11px] sm:text-xs text-slate-300 flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs text-slate-400">
            <span>Ingin mendiskusikan rencana konstruksi Anda hari ini?</span>
            <a
              href="#kontak"
              className="text-amber-400 font-semibold hover:text-amber-300 inline-flex items-center gap-1"
            >
              <span>Mulai Konsultasi</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
