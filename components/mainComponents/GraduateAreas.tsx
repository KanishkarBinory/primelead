// components/mainComponents/GraduateAreas.tsx
"use client";

import Link from "next/link";
import { useState } from "react";

type AreaLink = {
  label: string;
  href: string;
};

type Props = {
  title?: string;
  paragraph?: string;
  areas?: AreaLink[];
};

export default function GraduateAreas({
  title = "Graduate Areas of Study",
  paragraph = "Our unique academic programs break free from conventional limits, allowing students to explore a wide range of subjects and learn from different perspectives. They have the freedom to choose courses from various colleges and disciplines, immersing themselves in multiple areas of study aligned with their interests.",
  areas = [
    { label: "Graduate", href: "/academics/postgraduate" },
    { label: "Undergraduate", href: "/academics/undergraduate" },
  ],
}: Props) {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="w-full pt-8 pb-16 md:pb-24 px-5 md:px-8">
      {/* Heading + paragraph — centered */}
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2
          className="font-black mb-6"
          style={{
            fontFamily: "'Work Sans', sans-serif",
            fontSize: "clamp(28px, 4vw, 52px)",
            color: "#0d1b2a",
            letterSpacing: "-0.5px",
          }}
        >
          {title}
        </h2>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(14px, 1.2vw, 17px)",
            color: "#374151",
            lineHeight: "1.75em",
          }}
        >
          {paragraph}
        </p>
      </div>

      {/* Links row — centered, no borders */}
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-stretch justify-center gap-4 sm:gap-6">
        {areas.map((area) => {
          const isHovered = hovered === area.label;
          const isAnyHovered = hovered !== null;

          return (
            <Link
              key={area.label}
              href={area.href}
              onMouseEnter={() => setHovered(area.label)}
              onMouseLeave={() => setHovered(null)}
              className="relative flex items-center justify-center transition-all duration-300"
              style={{
                width: "100%",
                maxWidth: "340px",
                minHeight: "160px",
                backgroundColor: isHovered ? "#f3f4f6" : "transparent",
                padding: "0 40px",
                margin: "0 auto",
              }}
            >
              <span
                className="font-black transition-all duration-300"
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                  fontSize: "clamp(26px, 3vw, 40px)",
                  letterSpacing: "-0.5px",
                  color: isHovered
                    ? "#0d1b2a"
                    : isAnyHovered
                      ? "#c0c0c0"
                      : "#c0c0c0",
                }}
              >
                {area.label}
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
