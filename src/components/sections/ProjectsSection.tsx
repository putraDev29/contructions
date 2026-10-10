"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projectsData, ProjectItem } from "@/data/projects";
import { getWhatsAppUrl } from "@/data/company";
import { MapPin, ArrowUpRight, X, Camera, PhoneCall } from "lucide-react";

type CategoryFilter = "all" | "rumah" | "gedung" | "gudang" | "atap";

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = [
    { key: "all", label: "Semua Proyek" },
    { key: "rumah", label: "Rumah & Hunian" },
    { key: "gedung", label: "Gedung & Ruko" },
    { key: "gudang", label: "Gudang & Industri" },
    { key: "atap", label: "Baja & Atap Dak" },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projectsData
      : projectsData.filter((item) => item.categoryKey === activeCategory);

  return (
    <section id="proyek" className="py-20 lg:py-28 relative overflow-hidden bg-[#0A0F17]">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="PORTOFOLIO & DOKUMENTASI PROYEK"
          title="Dokumentasi Proyek Pembangunan Nyata di Lapangan"
          highlightedWord="Pembangunan Nyata"
          description="Lihat bukti pengerjaan kami langsung dari lokasi proyek: mulai dari pembesian lantai gedung, pengecoran dak ready mix, ereksi baja dengan crane, hingga atap baja ringan."
        />

        {/* Category Filter Pills */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
          {categories.map((cat) => (
            <button
              key={cat.key}
              type="button"
              onClick={() => setActiveCategory(cat.key as CategoryFilter)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === cat.key
                  ? "bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-md shadow-orange-950/40"
                  : "bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Editorial Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => {
            const isSpanned = index === 0 && activeCategory === "all";

            return (
              <div
                key={project.id}
                className={`group rounded-2xl bg-[#0F1724] border border-slate-800 hover:border-amber-500/60 shadow-xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 ${
                  isSpanned ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                {/* Image Container with Hover zoom */}
                <div
                  className={`relative w-full overflow-hidden bg-slate-900 ${
                    isSpanned ? "h-64 sm:h-80" : "h-56 sm:h-64"
                  }`}
                >
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F1724] via-[#0F1724]/30 to-transparent" />

                  {/* Category Pill on Image */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="bg-slate-950/85 backdrop-blur-md px-3 py-1 rounded-lg border border-slate-700/80 text-xs font-semibold text-amber-300">
                      {project.category}
                    </span>
                    <span className="hidden sm:inline-flex items-center gap-1 bg-emerald-950/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-emerald-600/40 text-[11px] font-semibold text-emerald-300">
                      <Camera className="w-3 h-3" />
                      <span>Site Asli</span>
                    </span>
                  </div>

                  {/* Location Tag */}
                  <div className="absolute bottom-3 left-4 flex items-center gap-1.5 text-xs text-slate-300 bg-slate-900/80 backdrop-blur-sm px-2.5 py-1 rounded-md border border-slate-800">
                    <MapPin className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                    <span className="truncate max-w-[240px]">{project.location}</span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Specification Badges */}
                    <div className="mt-4 pt-4 border-t border-slate-800/80 grid grid-cols-2 gap-2 text-[11px] text-slate-300">
                      <div className="bg-slate-900/60 p-2 rounded-lg border border-slate-800">
                        <span className="text-slate-500 block text-[10px] uppercase font-mono">
                          Bentang / Lantai
                        </span>
                        <span className="font-semibold text-white truncate block">
                          {project.specs.span}
                        </span>
                      </div>
                      <div className="bg-slate-900/60 p-2 rounded-lg border border-slate-800">
                        <span className="text-slate-500 block text-[10px] uppercase font-mono">
                          Spesifikasi Material
                        </span>
                        <span className="font-semibold text-white truncate block">
                          {project.specs.material}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-5 pt-3 flex items-center justify-between">
                    <span className="text-[11px] text-emerald-400 font-medium flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {project.yearNote}
                    </span>
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors group-hover:translate-x-0.5"
                    >
                      <span>Rincian Spesifikasi</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Promo CTA Banner in Project Section */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-orange-600/20 via-amber-500/15 to-[#0F1724] border border-amber-500/40 text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="text-left max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-1">
              PUNYA RENCANA PEMBANGUNAN SERUPA?
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white">
              Dapatkan Estimasi Biaya (RAB) Gratis untuk Proyek Anda
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Kirimkan denah atau ukuran luas bangunan Anda ke WhatsApp kami, tim estimator siap menghitung rincian biaya dalam 1x24 jam.
            </p>
          </div>

          <a
            href={getWhatsAppUrl("Halo Tim Kontraktor, saya ingin konsultasi dan minta estimasi perhitungan RAB untuk proyek bangunan saya.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 shadow-lg shadow-orange-950/50 transition-all shrink-0"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Kirim Denah via WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div
            className="fixed inset-0 bg-black/85 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          />
          <div className="relative w-full max-w-xl bg-[#0F1724] border border-slate-700 rounded-2xl shadow-2xl p-6 z-10 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                  {selectedProject.category}
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  {selectedProject.title}
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-orange-400" />
                  <span>{selectedProject.location}</span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="p-1.5 rounded-lg bg-slate-900 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative h-56 sm:h-64 rounded-xl overflow-hidden mb-4 border border-slate-800">
              <Image
                src={selectedProject.imageUrl}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
            </div>

            <p className="text-sm text-slate-300 leading-relaxed mb-4">
              {selectedProject.description}
            </p>

            <div className="space-y-2 p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 mb-5">
              <div className="flex justify-between">
                <span className="text-slate-400">Bentang / Skala:</span>
                <span className="font-semibold text-white">
                  {selectedProject.specs.span}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Luas Bangunan / Dak:</span>
                <span className="font-semibold text-white">
                  {selectedProject.specs.area}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Material Utama:</span>
                <span className="font-semibold text-white">
                  {selectedProject.specs.material}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 rounded-lg text-xs text-slate-400 hover:text-white"
              >
                Tutup
              </button>
              <a
                href={getWhatsAppUrl(
                  `Halo Tim Kontraktor, saya ingin konsultasi proyek serupa dengan: "${selectedProject.title}". Mohon info penawaran biayanya.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 shadow-md"
              >
                <span>Tanya Biaya Proyek Ini</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
