"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { companyData, getWhatsAppUrl } from "@/data/company";
import { Menu, X, ArrowUpRight, PhoneCall, Flame } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang Kami", href: "#tentang-kami" },
  { label: "Paket Promo", href: "#paket-promo" },
  { label: "Layanan", href: "#layanan" },
  { label: "Proyek Nyata", href: "#proyek" },
  { label: "Keunggulan", href: "#keunggulan" },
  { label: "Proses", href: "#proses" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontak", href: "#kontak" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#beranda");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveHash(`#${sections[i]}`);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Sales & Promo Announcement Bar */}
      <div className="bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 text-white text-[11px] sm:text-xs py-1.5 px-4 font-semibold text-center flex items-center justify-center gap-2">
        <Flame className="w-3.5 h-3.5 animate-pulse shrink-0" />
        <span>PROMO TERBATAS: GRATIS Survei Lokasi Jabodetabek & Desain 3D + Estimasi RAB Detail!</span>
        <a
          href={getWhatsAppUrl("Halo, saya ingin klaim promo Gratis Survei Lokasi & Estimasi RAB.")}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-0.5 underline font-bold hover:text-amber-200"
        >
          <span>Klaim via WA</span>
          <ArrowUpRight className="w-3 h-3" />
        </a>
      </div>

      {/* Main Navbar */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? "glass-nav border-b border-slate-800/80 shadow-lg shadow-black/30 py-2.5"
            : "bg-[#0B1118]/80 backdrop-blur-md border-b border-slate-800/40 py-3 sm:py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <BrandLogo />

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navItems.map((item) => {
                const isActive = activeHash === item.href;
                const isPromo = item.href === "#paket-promo";
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-3 py-1.5 rounded-lg text-xs xl:text-sm font-medium transition-colors ${
                      isActive
                        ? "text-orange-400 bg-orange-500/10 font-bold"
                        : isPromo
                        ? "text-amber-400 hover:text-amber-300 font-bold bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30"
                        : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Action Button & Mobile Toggle */}
            <div className="flex items-center gap-3">
              <a
                href={getWhatsAppUrl("Halo Tim Kontraktor, saya ingin konsultasi gratis dan meminta estimasi biaya RAB.")}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 shadow-md shadow-orange-950/40 transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Konsultasi Gratis</span>
              </a>

              {/* Hamburger Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/70 border border-slate-700/60 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500"
                aria-label={mobileMenuOpen ? "Tutup Menu" : "Buka Menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-amber-400" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[90px] z-40 lg:hidden">
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          <div className="relative mx-4 mt-2 p-5 rounded-2xl bg-[#0F172A] border border-slate-700/80 shadow-2xl overflow-y-auto max-h-[calc(100vh-110px)] animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col gap-1.5 divide-y divide-slate-800/60">
              <div className="flex flex-col gap-1 pb-4">
                {navItems.map((item) => {
                  const isActive = activeHash === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={handleNavClick}
                      className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-orange-500/15 text-orange-400 font-bold border-l-4 border-orange-500 pl-3"
                          : "text-slate-200 hover:bg-slate-800/80 hover:text-white"
                      }`}
                    >
                      <span>{item.label}</span>
                      <span className="text-xs text-slate-500">→</span>
                    </Link>
                  );
                })}
              </div>

              {/* Mobile CTA */}
              <div className="pt-4 flex flex-col gap-2.5">
                <a
                  href={getWhatsAppUrl("Halo, saya ingin konsultasi gratis dan meminta estimasi RAB proyek pembangunan.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 shadow-md transition-all active:scale-98"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Klaim Survei & RAB Gratis</span>
                </a>

                <div className="text-center pt-2 text-xs text-slate-400">
                  {companyData.operationalHours.weekdays}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
