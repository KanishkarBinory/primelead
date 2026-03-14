"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function VisionMission() {
  const [hovered, setHovered] = useState<"vision" | "mission" | null>(null);

  return (
    <section className="relative w-full h-105 overflow-hidden">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1234567890?w=1600&q=80"
        alt="Students on campus"
        fill
        className="object-cover object-center"
      />
      {/* Dark overlay on image */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Three-column layout */}
      <div className="relative z-10 h-full flex">
        {/* Left — nav links */}
        <div className="w-[35%] flex flex-col justify-center px-16 gap-8">
          {[
            { label: "Overview", href: "/academics/overview" },
            { label: "Academics", href: "/academics" },
            { label: "How To Apply", href: "/admission/how-to-apply" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-3 text-white text-xl font-semibold hover:opacity-80 transition-opacity group"
            >
              {link.label}
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="group-hover:translate-x-1 transition-transform"
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

        {/* Middle — Our Vision */}
        <div
          onMouseEnter={() => setHovered("vision")}
          onMouseLeave={() => setHovered(null)}
          className={`w-[32.5%] flex flex-col justify-center px-10 py-10 transition-colors duration-300 cursor-default
            ${hovered === "vision" ? "bg-[#2ab4c0]" : "bg-white/95"}`}
        >
          <h3
            className={`text-2xl font-black mb-4 transition-colors duration-300
            ${hovered === "vision" ? "text-white" : "text-[#1a2e3b]"}`}
          >
            Our Vision
          </h3>
          <p
            className={`text-base leading-relaxed transition-colors duration-300
            ${hovered === "vision" ? "text-white" : "text-[#374151]"}`}
          >
            Our vision is to empower lives through higher education, unlocking
            potential and creating positive impact by providing accessible and
            inclusive opportunities for personal growth and societal
            contribution.
          </p>
        </div>

        {/* Right — Mission */}
        <div
          onMouseEnter={() => setHovered("mission")}
          onMouseLeave={() => setHovered(null)}
          className={`w-[32.5%] flex flex-col justify-center px-10 py-10 transition-colors duration-300 cursor-default
            ${hovered === "mission" ? "bg-[#2ab4c0]" : "bg-white/95"}`}
        >
          <h3
            className={`text-2xl font-black mb-4 transition-colors duration-300
            ${hovered === "mission" ? "text-white" : "text-[#1a2e3b]"}`}
          >
            Mission
          </h3>
          <p
            className={`text-base leading-relaxed transition-colors duration-300
            ${hovered === "mission" ? "text-white" : "text-[#374151]"}`}
          >
            Our mission is to empower students in the UK and EU by providing
            comprehensive support and guidance for higher education, breaking
            down barriers and fostering personal and professional growth.
          </p>
        </div>
      </div>
    </section>
  );
}
