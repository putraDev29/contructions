import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { companyData } from "@/data/company";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Kontraktor Baja Profesional | BajaKonstruksi",
  description:
    "Solusi konstruksi baja presisi, fabrikasi struktur, gudang baja bentang lebar, rangka atap, dan instalasi struktur untuk kebutuhan industri dan komersial di Indonesia.",
  keywords: [
    "kontraktor baja",
    "konstruksi baja",
    "fabrikasi baja",
    "gudang baja",
    "erection baja",
    "rangka atap baja",
    "kanopi baja industri",
    "baja wf",
    "kontraktor pabrik",
    "konstruksi indonesia",
  ],
  authors: [{ name: companyData.name }],
  creator: companyData.name,
  metadataBase: new URL(companyData.domain),
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: companyData.domain,
    title: "Kontraktor Baja Profesional | BajaKonstruksi",
    description:
      "Solusi konstruksi baja presisi, fabrikasi struktur, gudang baja, rangka atap, dan instalasi struktur untuk kebutuhan industri dan komersial.",
    siteName: companyData.name,
    images: [
      {
        url: "https://images.unsplash.com/photo-1541888946425-d0fbb1861564?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Konstruksi Baja Profesional BajaKonstruksi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kontraktor Baja Profesional | BajaKonstruksi",
    description:
      "Solusi konstruksi baja presisi, fabrikasi struktur, gudang baja, dan instalasi struktur komersial.",
    images: [
      "https://images.unsplash.com/photo-1541888946425-d0fbb1861564?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${plusJakartaSans.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#0B1118] text-slate-100 antialiased selection:bg-orange-500 selection:text-white flex flex-col">
        {children}
      </body>
    </html>
  );
}
