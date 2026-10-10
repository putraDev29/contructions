import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { PromoPackagesSection } from "@/components/sections/PromoPackagesSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AdvantagesSection } from "@/components/sections/AdvantagesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { WhatsAppFloatingButton } from "@/components/ui/WhatsAppFloatingButton";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#0B1118] text-slate-100 overflow-x-hidden">
      {/* Sticky Navigation Bar with Top Promo Ribbon */}
      <Navbar />

      {/* Main Landing Page Content */}
      <main className="flex-1">
        {/* Hero Section with Sales Hook & Free Survey Offer */}
        <HeroSection />

        {/* 4 Pillars of Trust */}
        <TrustSection />

        {/* Tentang Kami: Cakupan Rumah, Gedung & Baja + Kartu Spesifikasi Rapi */}
        <AboutSection />

        {/* Promo Packages Section: Paket Bangun Rumah, Ruko, Gudang, & Dak Beton */}
        <PromoPackagesSection />

        {/* Layanan Kami: 6 Layanan Terpadu */}
        <ServicesSection />

        {/* Mengapa Memilih Kami: Asymmetrical Split Layout */}
        <AdvantagesSection />

        {/* Alur Kerja & Proses Pengerjaan */}
        <ProcessSection />

        {/* Portofolio Proyek: Menggunakan 5 Foto Nyata dari Lapangan */}
        <ProjectsSection />

        {/* Promotional CTA Banner */}
        <CtaBanner />

        {/* FAQ Accordion */}
        <FaqSection />

        {/* Form Permintaan Estimasi Biaya (RAB) & Survei Gratis */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Floating WhatsApp Button */}
      <WhatsAppFloatingButton />
    </div>
  );
}
