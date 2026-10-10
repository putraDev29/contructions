"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { ServiceItem } from "@/data/services";
import { getWhatsAppUrl } from "@/data/company";
import { X, CheckCircle2, ArrowRight, MessageSquare, Wrench } from "lucide-react";

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
}

export function ServiceDetailModal({ service, onClose }: ServiceDetailModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (service) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  const consultationMessage = `Halo Tim BajaKonstruksi, saya ingin berkonsultasi mengenai layanan "${service.title}". Mohon informasi teknis dan tahapan pembahasannya.`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-2xl bg-[#0F172A] border border-slate-700 rounded-2xl shadow-2xl overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200 my-8">
        {/* Header Image */}
        <div className="relative h-48 sm:h-56 w-full">
          <Image
            src={service.imageUrl}
            alt={service.title}
            fill
            sizes="(max-width: 768px) 100vw, 650px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/50 to-transparent" />

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500"
            aria-label="Tutup detail layanan"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Badge */}
          <div className="absolute bottom-4 left-6">
            <span className="px-3 py-1 rounded-md text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
              {service.badge}
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[calc(85vh-200px)] overflow-y-auto">
          <div>
            <div className="text-xs font-bold text-orange-400 tracking-wider uppercase mb-1">
              LAYANAN #{service.number}
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              {service.title}
            </h3>
            <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
              {service.fullDescription}
            </p>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              <span>Keunggulan & Karakteristik Spesifikasi</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-300 flex items-start gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Scope of Work */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
              <Wrench className="w-4 h-4 text-orange-400" />
              <span>Ruang Lingkup Pengerjaan (Scope of Work)</span>
            </h4>
            <ul className="space-y-2">
              {service.scopeOfWork.map((scope, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300"
                >
                  <span className="text-amber-500 font-mono text-xs">0{idx + 1}.</span>
                  <span>{scope}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-5 sm:p-6 bg-slate-950/70 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-slate-400 hover:text-white transition-colors"
          >
            Kembali ke Daftar
          </button>

          <a
            href={getWhatsAppUrl(consultationMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 shadow-md transition-all active:scale-95"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Konsultasikan Kebutuhan Ini</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
