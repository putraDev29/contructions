"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { servicesData, ServiceItem } from "@/data/services";
import { ServiceDetailModal } from "@/components/sections/ServiceDetailModal";
import {
  Warehouse,
  Factory,
  Building2,
  Maximize2,
  Flame,
  HardHat,
  ArrowRight,
  Layers,
} from "lucide-react";

export function ServicesSection() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "Warehouse":
        return <Warehouse className="w-5 h-5" />;
      case "Factory":
        return <Factory className="w-5 h-5" />;
      case "Building2":
        return <Building2 className="w-5 h-5" />;
      case "Maximize2":
        return <Maximize2 className="w-5 h-5" />;
      case "Flame":
        return <Flame className="w-5 h-5" />;
      case "HardHat":
        return <HardHat className="w-5 h-5" />;
      default:
        return <Layers className="w-5 h-5" />;
    }
  };

  return (
    <section id="layanan" className="py-20 lg:py-28 relative bg-[#090E14] overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 bg-industrial-dots opacity-20" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="LAYANAN KAMI"
          title="Solusi Konstruksi Baja Terintegrasi"
          highlightedWord="Terintegrasi"
          description="Layanan menyeluruh dari perencanaan engineering, fabrikasi workshop berspesifikasi tinggi, hingga instalasi aman di lokasi proyek."
        />

        {/* 6 Services Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {servicesData.map((svc) => (
            <div
              key={svc.id}
              className="group relative rounded-2xl bg-[#0F1724] border border-slate-800 hover:border-amber-500/60 shadow-xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-orange-950/20"
            >
              {/* Image Preview with Hover Zoom */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                <Image
                  src={svc.imageUrl}
                  alt={svc.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1724] via-[#0F1724]/40 to-transparent" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-slate-700/60 text-[11px] font-semibold text-amber-300">
                  {svc.badge}
                </div>

                {/* Floating Icon */}
                <div className="absolute bottom-3 right-4 w-10 h-10 rounded-xl bg-orange-500/20 backdrop-blur-md border border-orange-500/30 flex items-center justify-center text-orange-400 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors shadow-lg">
                  {getServiceIcon(svc.iconName)}
                </div>
              </div>

              {/* Text Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono font-semibold text-slate-500 mb-1">
                    {svc.number}.
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                    {svc.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3">
                    {svc.shortDescription}
                  </p>
                </div>

                {/* Key feature pills */}
                <div className="mt-5 pt-4 border-t border-slate-800/80">
                  <div className="space-y-1.5 mb-5">
                    {svc.features.slice(0, 2).map((feat, i) => (
                      <div
                        key={i}
                        className="text-[11px] sm:text-xs text-slate-300 flex items-center gap-2 truncate"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Trigger Modal */}
                  <button
                    type="button"
                    onClick={() => setSelectedService(svc)}
                    className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-amber-500/50 group-hover:text-white transition-all active:scale-98"
                  >
                    <span>Pelajari Layanan</span>
                    <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal Component */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </section>
  );
}
