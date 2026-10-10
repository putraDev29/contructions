"use client";

import React, { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { companyData } from "@/data/company";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  AlertCircle,
  Building,
  Gift,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: "Pembangunan Rumah Tinggal / Hunian Baru",
    location: "",
    budgetEstimate: "Fleksibel / Sesuai Rekomendasi RAB",
    description: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const projectTypes = [
    "Pembangunan Rumah Tinggal / Hunian Baru",
    "Pembangunan Gedung Bertingkat / Ruko Komersial",
    "Konstruksi Gudang / Pabrik Baja WF",
    "Pekerjaan Cor Dak Beton & Struktur Lantai",
    "Rangka Atap Baja Ringan / Zincalume SNI",
    "Renovasi Total & Penambahan Lantai",
    "Lainnya (Konsultasi Kustom)",
  ];

  const budgetOptions = [
    "Fleksibel / Sesuai Rekomendasi RAB",
    "Di bawah Rp 150 Juta (Renovasi / Atap / Dak)",
    "Rp 150 Juta - Rp 500 Juta (Rumah 1 Lantai / Ruko)",
    "Rp 500 Juta - Rp 1,5 Miliar (Rumah Mewah / Gudang Sedang)",
    "Di atas Rp 1,5 Miliar (Gedung Bertingkat / Pabrik Baja)",
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = "Nama wajib diisi";
    }
    if (!formData.phone.trim()) {
      errs.phone = "Nomor WhatsApp wajib diisi";
    } else if (formData.phone.replace(/[^0-9]/g, "").length < 9) {
      errs.phone = "Masukkan nomor WhatsApp yang valid (min. 9 digit)";
    }
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Format email tidak valid";
    }
    if (!formData.location.trim()) {
      errs.location = "Lokasi proyek wajib diisi";
    }
    if (!formData.description.trim()) {
      errs.description = "Deskripsi kebutuhan proyek wajib diisi";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const message = `Halo Tim ${companyData.name},
Saya ingin mengajukan permintaan konsultasi & estimasi biaya (RAB) proyek dengan detail berikut:

👤 *Nama:* ${formData.name.trim()}
📱 *WhatsApp:* ${formData.phone.trim()}
✉️ *Email:* ${formData.email.trim() || "-"}
🏗️ *Jenis Proyek:* ${formData.projectType}
💰 *Perkiraan Budget:* ${formData.budgetEstimate}
📍 *Lokasi Proyek:* ${formData.location.trim()}
📝 *Deskripsi / Kebutuhan:*
${formData.description.trim()}

🎁 *Catatan:* Saya ingin klaim promo Gratis Survei Lokasi & Konsultasi RAB. Mohon info ketersediaan jadwalnya. Terima kasih.`;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${companyData.whatsapp.number}?text=${encoded}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const newErrs = { ...prev };
        delete newErrs[name];
        return newErrs;
      });
    }
  };

  return (
    <section id="kontak" className="py-20 lg:py-28 relative overflow-hidden bg-[#070B10]">
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="KONSULTASI & ESTIMASI RAB GRATIS"
          title="Dapatkan Estimasi Biaya Cepat & Jadwalkan Survei Lokasi"
          highlightedWord="Estimasi Biaya"
          description="Sampaikan rencana pembangunan rumah, gedung, ruko, maupun gudang baja Anda. Tim ahli kami siap memberikan hitungan estimasi RAB transparan dan menjadwalkan survei lokasi tanpa biaya."
        />

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Direct WhatsApp Interactive Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#0F1724] border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl relative">
            {/* Promo Tag above form */}
            <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/30 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <Gift className="w-5 h-5 text-amber-400 shrink-0" />
                <div className="text-xs text-slate-200">
                  <span className="font-bold text-amber-300">Promo Spesial:</span> Gratis Survei Lokasi Jabodetabek & Desain 3D + Estimasi RAB.
                </div>
              </div>
              <span className="text-[10px] uppercase font-bold text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-600/30 shrink-0">
                Aktif
              </span>
            </div>

            <div className="mb-6 pb-4 border-b border-slate-800/80">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-orange-400" />
                <span>Formulir Permintaan Estimasi Biaya (RAB)</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Data akan otomatis terformat rapi dan langsung terhubung dengan WhatsApp tim estimator kami.
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Nama Lengkap / Instansi <span className="text-orange-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Contoh: Bpk. Budi Santoso"
                    className={`w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors ${
                      errors.name ? "border-rose-500/80" : "border-slate-700/80 hover:border-slate-600"
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Nomor WhatsApp Aktif <span className="text-orange-400">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Contoh: 081234567890"
                    className={`w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors ${
                      errors.phone ? "border-rose-500/80" : "border-slate-700/80 hover:border-slate-600"
                    }`}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="projectType" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Jenis Proyek Pembangunan <span className="text-orange-400">*</span>
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 hover:border-slate-600 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors"
                  >
                    {projectTypes.map((type) => (
                      <option key={type} value={type} className="bg-slate-900 text-white">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="budgetEstimate" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Rencana Anggaran (Budget)
                  </label>
                  <select
                    id="budgetEstimate"
                    name="budgetEstimate"
                    value={formData.budgetEstimate}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700/80 hover:border-slate-600 text-sm text-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors"
                  >
                    {budgetOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-slate-900 text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="location" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Lokasi Proyek / Kota <span className="text-orange-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Contoh: BSD Tangerang Selatan / Jakarta Timur"
                    className={`w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors ${
                      errors.location ? "border-rose-500/80" : "border-slate-700/80 hover:border-slate-600"
                    }`}
                  />
                  {errors.location && (
                    <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.location}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Alamat Email (Opsional)
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="budi@email.com"
                    className={`w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors ${
                      errors.email ? "border-rose-500/80" : "border-slate-700/80 hover:border-slate-600"
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="description" className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Deskripsi Kebutuhan Bangunan <span className="text-orange-400">*</span>
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Ceritakan estimasi luas tanah & bangunan (contoh: rencana rumah 2 lantai ukuran 8x15 meter), apakah sudah ada denah arsitektur, atau kebutuhan spesifik lainnya..."
                  className={`w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors resize-none ${
                    errors.description ? "border-rose-500/80" : "border-slate-700/80 hover:border-slate-600"
                  }`}
                />
                {errors.description && (
                  <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.description}</span>
                  </p>
                )}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-orange-600 via-amber-600 to-orange-600 hover:from-orange-500 hover:to-amber-500 shadow-xl shadow-orange-950/50 transition-all duration-200 active:scale-98 focus:outline-none focus:ring-2 focus:ring-amber-500 disabled:opacity-70"
                >
                  <Send className="w-4 h-4" />
                  <span>Kirim Permintaan & Dapatkan RAB via WhatsApp</span>
                </button>
                <div className="text-center mt-2.5 text-[11px] text-slate-500">
                  Konsultasi 100% gratis dan data Anda aman terlindungi.
                </div>
              </div>
            </form>
          </div>

          {/* Right Column: Office Address, Guarantees & Operational Hours (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Sales Guarantees Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#0F1724] border border-amber-500/40 shadow-xl space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>JAMINAN KEPUASAN & KEAMANAN ANDA</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Membangun Tanpa Rasa Khawatir
              </h3>
              <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span><strong>Survei Lokasi Gratis:</strong> Cek kondisi tapak tanah langsung bersama engineer kami.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span><strong>Surat Perjanjian Kerja (SPK):</strong> Hak dan kewajiban mengikat secara hukum dengan jadwal tertulis.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span><strong>Pembayaran Termin:</strong> Tanpa DP besar yang berisiko, bayar sesuai progres pekerjaan nyata.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span><strong>Garansi Struktur & Atap:</strong> Perlindungan purna-jual terhadap kebocoran dan kekuatan bangunan.</span>
                </div>
              </div>
            </div>

            {/* Office Information Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#0F1724] border border-slate-800 shadow-xl space-y-5">
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  KANTOR & WORKSHOP
                </span>
                <h3 className="text-lg font-bold text-white">
                  Informasi Kontak Resmi
                </h3>
              </div>

              <div className="space-y-4 pt-1 border-t border-slate-800/80">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400">
                      Alamat Operasional
                    </div>
                    <div className="text-xs sm:text-sm text-white mt-0.5 leading-relaxed">
                      {companyData.address.street}, {companyData.address.city},{" "}
                      {companyData.address.province} {companyData.address.postalCode}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400">
                      WhatsApp & Telepon
                    </div>
                    <div className="text-xs sm:text-sm text-white mt-0.5 font-mono">
                      {companyData.whatsapp.displayNumber} / {companyData.phone}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400">
                      Email Penawaran & Proyek
                    </div>
                    <div className="text-xs sm:text-sm text-white mt-0.5">
                      {companyData.email}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400">
                      Jam Kerja Operasional
                    </div>
                    <div className="text-xs sm:text-sm text-slate-300 mt-0.5 space-y-0.5">
                      <p>{companyData.operationalHours.weekdays}</p>
                      <p>{companyData.operationalHours.saturday}</p>
                      <p className="text-emerald-400 text-xs">
                        {companyData.operationalHours.sunday}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Coverage Area Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-slate-900 to-[#121B27] border border-slate-800 text-xs text-slate-300 space-y-2">
              <div className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                <Building className="w-4 h-4" />
                <span>Wilayah Layanan Bebas Survei</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                {companyData.serviceArea}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
