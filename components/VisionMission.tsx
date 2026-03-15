"use client";

import Link from "next/link";
import { useState } from "react";
import VideoSection from "./VideoSection";

export default function VisionMission() {
  const [hovered, setHovered] = useState<"vision" | "mission" | null>(null);

  return (
    <>
      <section
        className="relative w-full overflow-hidden"
        style={{
          height: "540px",
          backgroundImage: "url('/Vission.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        {/* Very subtle scrim — image must remain bright and clear */}
        <div className="absolute inset-0 bg-black/15 pointer-events-none" />

        {/*
         * Main layout: 3 columns inside a centered max-width container
         * Fills full height so we can use flexbox alignment
         */}
        <div className="relative z-10 h-full max-w-7xl mx-auto px-7 flex items-center">
          {/* ── Col 1: Nav links — centered to the card zone ── */}
          <div
            className="flex flex-col justify-center gap-8 shrink-0"
            style={{ width: "35%" }}
          >
            {[
              { label: "Overview", href: "/academics/overview" },
              { label: "Academics", href: "/academics" },
              { label: "How To Apply", href: "/admission/how-to-apply" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-3 text-white text-[18px] font-semibold
                         hover:opacity-70 transition-opacity group w-fit"
              >
                {link.label}
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="group-hover:translate-x-1.5 transition-transform duration-200"
                >
                  <path
                    d="M4 10h12M11 5l5 5-5 5"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            ))}
          </div>

          {/* ── Cards wrapper: gap between them, vertically centered ── */}
          <div
            className="flex items-stretch"
            style={{
              width: "65%",
              gap: "24px" /* gap between the two cards */,
              height:
                "68%" /* cards are shorter than section — image shows above & below */,
            }}
          >
            {/* ── Our Vision card ── */}
            <div
              onMouseEnter={() => setHovered("vision")}
              onMouseLeave={() => setHovered(null)}
              className="flex flex-col justify-center px-9 py-0
                       transition-colors duration-300 cursor-default
                       shadow-[0_4px_20px_rgba(0,0,0,0.12)]"
              style={{
                width: "50%",
                backgroundColor: hovered === "vision" ? "#2ab4c0" : "#ffffff",
              }}
            >
              <h3
                className="text-[22px] mb-4 transition-colors duration-300"
                style={{
                  fontWeight: 900,
                  color: hovered === "vision" ? "#ffffff" : "#1a2e3b",
                }}
              >
                Our Vision
              </h3>
              <p
                className="text-[15px] leading-[1.8] transition-colors duration-300"
                style={{
                  color:
                    hovered === "vision" ? "rgba(255,255,255,0.92)" : "#4b5563",
                }}
              >
                Our vision is to empower lives through higher education,
                unlocking potential and creating positive impact by providing
                accessible and inclusive opportunities for personal growth and
                societal contribution.
              </p>
            </div>

            {/* ── Mission card ── */}
            <div
              onMouseEnter={() => setHovered("mission")}
              onMouseLeave={() => setHovered(null)}
              className="flex flex-col justify-center px-9 py-0
                       transition-colors duration-300 cursor-default
                       shadow-[0_4px_20px_rgba(0,0,0,0.12)]"
              style={{
                width: "50%",
                backgroundColor: hovered === "mission" ? "#2ab4c0" : "#ffffff",
              }}
            >
              <h3
                className="text-[22px] mb-4 transition-colors duration-300"
                style={{
                  fontWeight: 900,
                  color: hovered === "mission" ? "#ffffff" : "#1a2e3b",
                }}
              >
                Mission
              </h3>
              <p
                className="text-[15px] leading-[1.8] transition-colors duration-300"
                style={{
                  color:
                    hovered === "mission"
                      ? "rgba(255,255,255,0.92)"
                      : "#4b5563",
                }}
              >
                Our mission is to empower students in the UK and EU by providing
                comprehensive support and guidance for higher education,
                breaking down barriers and fostering personal and professional
                growth.
              </p>
            </div>
          </div>
        </div>
      </section>
      <VideoSection />
    </>
  );
}
