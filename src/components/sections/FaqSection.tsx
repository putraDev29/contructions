"use client";

import React, { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqData } from "@/data/faq";
import { ChevronDown, MessageSquare } from "lucide-react";
import { getWhatsAppUrl } from "@/data/company";

export function FaqSection() {
  const [openIds, setOpenIds] = useState<string[]>([faqData[0].id]);

  const toggleItem = (id: string) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter((item) => item !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  return (
    <section id="faq" className="py-20 lg:py-28 relative bg-[#090E14] overflow-hidden">
      <div className="absolute inset-0 bg-industrial-dots opacity-20" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="TANYA JAWAB (FAQ)"
          title="Pertanyaan yang Sering Diajukan"
          highlightedWord="Sering Diajukan"
          description="Jawaban informatif seputar lingkup pekerjaan, jangkauan wilayah, alur perancangan, dan estimasi pengerjaan konstruksi baja kami."
        />

        <div className="mt-12 space-y-3.5">
          {faqData.map((faq, index) => {
            const isOpen = openIds.includes(faq.id);

            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-[#0F1724] border border-slate-800 transition-colors overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-start sm:items-center justify-between gap-4 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-2xl"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start sm:items-center gap-3.5">
                    <span className="text-xs font-mono font-semibold text-amber-500/80 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 shrink-0 mt-0.5 sm:mt-0">
                      0{index + 1}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                      {faq.question}
                    </span>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-lg bg-slate-900 border border-slate-700/80 flex items-center justify-center text-slate-400 group-hover:text-white transition-transform duration-200 shrink-0 ${
                      isOpen ? "rotate-180 bg-amber-500/20 text-amber-400 border-amber-500/30" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 animate-in fade-in duration-200">
                    <div className="pt-3 border-t border-slate-800/80 pl-11">
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-slate-900/90 to-slate-900/60 border border-slate-800 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-white">
              Punya pertanyaan teknis spesifik lainnya?
            </h4>
            <p className="text-xs text-slate-400 mt-0.5">
              Konsultasikan detail denah atau ukuran bentang struktur Anda langsung dengan tim kami.
            </p>
          </div>
          <a
            href={getWhatsAppUrl("Halo Tim BajaKonstruksi, saya memiliki pertanyaan teknis yang belum terjawab di halaman FAQ.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-emerald-400 bg-emerald-950/50 border border-emerald-600/30 hover:bg-emerald-900/40 transition-colors shrink-0"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Tanya Langsung via WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
