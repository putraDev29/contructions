import React from "react";
import Link from "next/link";
import { companyData } from "@/data/company";

interface BrandLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  inverted?: boolean;
}

export function BrandLogo({ className = "", size = "md", inverted = false }: BrandLogoProps) {
  const iconSize = size === "sm" ? "w-8 h-8" : size === "lg" ? "w-11 h-11" : "w-9 h-9";
  const titleSize = size === "sm" ? "text-lg" : size === "lg" ? "text-2xl" : "text-xl";
  const subSize = size === "sm" ? "text-[9px]" : size === "lg" ? "text-xs" : "text-[10px]";

  return (
    <Link
      href="#beranda"
      className={`inline-flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg p-1 -m-1 transition-transform active:scale-95 ${className}`}
      aria-label={`${companyData.name} - Beranda`}
    >
      {/* Geometric Construction Symbol */}
      <div
        className={`${iconSize} relative rounded-xl bg-gradient-to-br from-slate-800 to-slate-950 border border-slate-700/80 p-1.5 shadow-md group-hover:border-amber-500/60 transition-colors flex items-center justify-center`}
      >
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-white"
        >
          {/* Top Flange / Roof */}
          <rect x="4" y="5" width="24" height="4" rx="1" fill="#F97316" />
          {/* Bottom Foundation */}
          <rect x="4" y="23" width="24" height="4" rx="1" fill="#F97316" />
          {/* Vertical Columns */}
          <rect x="14" y="8" width="4" height="16" fill="#F59E0B" />
          {/* Diagonal Truss lines */}
          <path
            d="M6 9L26 23M26 9L6 23"
            stroke="#FFFFFF"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeOpacity="0.85"
          />
        </svg>
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className={`${titleSize} font-extrabold tracking-tight text-white`}>
            Baja<span className="text-amber-500">Konstruksi</span>
          </span>
        </div>
        <span
          className={`${subSize} tracking-[0.16em] font-semibold uppercase ${
            inverted ? "text-slate-300" : "text-amber-400/90"
          }`}
        >
          Gedung • Rumah • Baja
        </span>
      </div>
    </Link>
  );
}
