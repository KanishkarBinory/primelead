/**
 * AdmissionFormBanner — PrimeLeed Admission page hero section
 *
 * Props:
 *   bgColor?: string  — background color of the band (default: #F5C400)
 *
 * Font setup (globals.css):
 *   @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@900&display=swap');
 */

import Link from "next/link";
import Button from "../mainComponents/Button";

interface AdmissionFormBannerProps {
  bgColor?: string;
}

export default function AdmissionFormBanner({
  bgColor = "#F5C400",
}: AdmissionFormBannerProps) {
  /*
    Font size breakpoints:
      mobile  (<640px)  → 100px
      sm      (≥640px)  → 140px
      lg      (≥1024px) → 200px

    Container height must always equal the font size so
    top:50% on the yellow underlay bisects the text correctly.
    We use the same responsive values for height.
  */
  return (
    <section className="relative w-full">
      {/* ── White zone: FORM text + yellow underlay ── */}
      <div
        className="
          relative bg-white w-full flex items-center justify-center
          h-[100px] sm:h-[140px] lg:h-[200px]
        "
      >
        {/* FORM text */}
        <span
          className="
            relative z-10
            font-black leading-none tracking-tighter select-none
            text-gray-950
            text-[100px] sm:text-[140px] lg:text-[200px]
          "
          style={{ fontFamily: "'Barlow Condensed', 'Arial Black', Arial, sans-serif" }}
          aria-label="Form"
        >
          FORM
        </span>

        {/* Yellow underlay — bottom 50% of the container */}
        <div
          className="absolute left-0 right-0 bottom-0 z-0"
          style={{ top: "50%", backgroundColor: bgColor }}
        />
      </div>

      {/* ── Yellow content section ── */}
      <div
        className="w-full pb-20 px-6 flex flex-col items-center gap-6 pt-12"
        style={{ backgroundColor: bgColor }}
      >
        <p className="text-gray-950 font-semibold text-center leading-snug text-lg max-w-xl">
          Are you ready to take the next step toward your future career?
        </p>

        <Button href="/admission/form" label="Application Form" />

        <div className="flex items-center gap-3">
          <Link
            href="/support/request-info"
            className="
              text-gray-950 font-semibold text-sm
              underline underline-offset-4 decoration-gray-950/40
              hover:decoration-gray-950 transition-all duration-150
            "
          >
            Request Info
          </Link>
          <span className="block w-px h-5 bg-gray-950/30" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}