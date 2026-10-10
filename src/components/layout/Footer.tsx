"use client";

import React from "react";
import Link from "next/link";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { companyData, getWhatsAppUrl } from "@/data/company";
import { servicesData } from "@/data/services";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";

export function Footer() {
  const currentYear = 2026;

  const renderSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "instagram":
        return (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
        );
      case "linkedin":
        return (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        );
      case "youtube":
        return (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
            <path d="m10 15 5-3-5-3z" />
          </svg>
        );
      case "facebook":
        return (
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
        );
      default:
        return <ArrowUpRight className="w-4 h-4" />;
    }
  };

  return (
    <footer className="relative bg-[#070B10] text-slate-300 border-t border-slate-800/80 pt-16 pb-12 overflow-hidden">
      {/* Decorative top ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          {/* Column 1: Company Profile (4 cols) */}
          <div className="lg:col-span-4 flex flex-col space-y-5">
            <BrandLogo size="lg" />
            <p className="text-sm text-slate-400 leading-relaxed pr-4">
              Mitra konstruksi baja terpercaya untuk perancangan, fabrikasi presisi di
              workshop, serta instalasi struktur gudang, pabrik industri, dan bangunan
              komersial dengan standar mutu tinggi dan keselamatan kerja.
            </p>

            <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300">
              <ShieldCheck className="w-5 h-5 text-amber-500 shrink-0" />
              <span>
                Material terstandar SNI & pengawasan K3 intensif di setiap tahapan.
              </span>
            </div>

            {/* Social Media Links */}
            <div className="pt-2">
              <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-3">
                Kanal Media Sosial
              </div>
              <div className="flex items-center gap-2.5">
                {companyData.socialMedia.map((soc) => (
                  <a
                    key={soc.platform}
                    href={soc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-amber-500/50 hover:bg-slate-800 transition-colors"
                    aria-label={soc.platform}
                  >
                    {renderSocialIcon(soc.platform)}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 flex flex-col space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Navigasi
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="#beranda"
                  className="text-slate-400 hover:text-amber-400 transition-colors inline-block"
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="#tentang-kami"
                  className="text-slate-400 hover:text-amber-400 transition-colors inline-block"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  href="#layanan"
                  className="text-slate-400 hover:text-amber-400 transition-colors inline-block"
                >
                  Layanan Kami
                </Link>
              </li>
              <li>
                <Link
                  href="#keunggulan"
                  className="text-slate-400 hover:text-amber-400 transition-colors inline-block"
                >
                  Mengapa Kami
                </Link>
              </li>
              <li>
                <Link
                  href="#proses"
                  className="text-slate-400 hover:text-amber-400 transition-colors inline-block"
                >
                  Proses Kerja
                </Link>
              </li>
              <li>
                <Link
                  href="#proyek"
                  className="text-slate-400 hover:text-amber-400 transition-colors inline-block"
                >
                  Portofolio Proyek
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="text-slate-400 hover:text-amber-400 transition-colors inline-block"
                >
                  Tanya Jawab (FAQ)
                </Link>
              </li>
              <li>
                <Link
                  href="#kontak"
                  className="text-slate-400 hover:text-amber-400 transition-colors inline-block"
                >
                  Kontak & Konsultasi
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services (3 cols) */}
          <div className="lg:col-span-3 flex flex-col space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Layanan Utama
            </h3>
            <ul className="space-y-2.5 text-sm">
              {servicesData.map((svc) => (
                <li key={svc.id}>
                  <Link
                    href="#layanan"
                    className="text-slate-400 hover:text-amber-400 transition-colors inline-flex items-center gap-1 group"
                  >
                    <span className="text-xs text-slate-600 group-hover:text-amber-500">
                      •
                    </span>
                    <span>{svc.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Operations (3 cols) */}
          <div className="lg:col-span-3 flex flex-col space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Kontak Kantor
            </h3>
            <ul className="space-y-3.5 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-orange-500 mt-1 shrink-0" />
                <span className="text-slate-400">
                  {companyData.address.street}, {companyData.address.city},{" "}
                  {companyData.address.province} {companyData.address.postalCode}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-orange-500 shrink-0" />
                <a
                  href={`tel:${companyData.phone.replace(/[^0-9]/g, "")}`}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  {companyData.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-orange-500 shrink-0" />
                <a
                  href={`mailto:${companyData.email}`}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  {companyData.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 pt-2 border-t border-slate-800/80">
                <Clock className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                <div className="text-xs text-slate-400 space-y-0.5">
                  <p>{companyData.operationalHours.weekdays}</p>
                  <p>{companyData.operationalHours.saturday}</p>
                </div>
              </li>
            </ul>

            <div className="pt-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-slate-900 border border-slate-700 hover:border-emerald-500/60 hover:text-emerald-400 transition-colors"
              >
                <span>Chat WhatsApp Cepat</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 mt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {currentYear} {companyData.name} ({companyData.legalName}). Seluruh hak
            cipta dilindungi undang-undang.
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Engineering</span>
            <span>•</span>
            <span>Fabrication</span>
            <span>•</span>
            <span>Installation</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
