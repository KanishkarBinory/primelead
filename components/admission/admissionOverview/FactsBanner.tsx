// 

"use client";
// components/admission/FactsBanner.tsx

import { useEffect, useRef, useState } from "react";

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const steps = 50;
          const inc = target / steps;
          let cur = 0;
          const timer = setInterval(() => {
            cur += inc;
            if (cur >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(cur));
            }
          }, 1800 / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export default function FactsBanner() {
  const stats = [
    { number: 2500, suffix: "+", label: "Registered Students" },
    { number: 500,  suffix: "+", label: "Courses Available" },
    { number: 15,   suffix: "+", label: "Partnered Institutions" },
    { number: 2000, suffix: "+", label: "Students Enrolled" },
  ];

  return (
    <div>

      {/* ── IMAGE + FACTS LABEL ──
          The outer div is "relative" so the FACTS heading can be
          absolutely positioned to straddle the bottom boundary.
          width: 85% with margin: auto creates the space on both sides.
          marginTop: -40px lifts the whole block upward into the
          white section above, creating the floating effect. */}
      <div
        style={{
          position: "relative",
          width: "85%",
          margin: "0 auto",
          marginTop: "20px",
        }}
      >
        {/* The group photo — full width of its container, natural height */}
        <img
          src="https://www.primeleed.com/wp-content/uploads/2020/12/1544468-ID-1544468-little-groups-with-big-ideas.jpg"
          alt="Students in a group discussion"
          style={{
            width: "100%",
            height: "320px",
            objectFit: "cover",
            objectPosition: "center 30%",
            display: "block",
          }}
        />

        {/* Gradient overlay — subtle dark fade to bottom so the
            FACTS text reads clearly where it overlaps the image */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.45) 100%)",
          }}
        />

        {/* FACTS heading — anchored to bottom: 0 of the image container.
            transform: translateY(45%) shifts it downward by 45% of its
            own height, so roughly half sits over the image and half
            sits over the dark section below. This is the straddle effect. */}
        <h2
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            textAlign: "center",
            transform: "translateY(45%)",
            fontFamily: "'Work Sans', sans-serif",
            fontSize: "clamp(60px, 12vw, 160px)",
            fontWeight: "800",
            color: "#ffffff",
            letterSpacing: "0.05em",
            lineHeight: "1em",
            margin: 0,
            zIndex: 10,
            textShadow: "0 4px 24px rgba(0,0,0,0.2)",
          }}
        >
          FACTS
        </h2>
      </div>

      {/* ── DARK STATS SECTION ──
          paddingTop needs to be large enough to clear the FACTS text
          that hangs down into this section from above.
          The rule: paddingTop ≈ (fontSize * 0.55) to account for the
          45% that hangs below the image boundary. */}
      <section
        style={{
          backgroundColor: "#292929",
          paddingTop: "110px",
          paddingBottom: "80px",
          paddingLeft: "20px",
          paddingRight: "20px",
        }}
      >
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "0",
          }}
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              style={{
                paddingLeft: index > 0 ? "24px" : "0",
                paddingRight: "24px",
                borderLeft:
                  index > 0
                    ? "1px solid rgba(255,255,255,0.12)"
                    : "none",
              }}
            >
              {/* Large animated number */}
              <p
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                  fontSize: "clamp(28px, 4vw, 48px)",
                  fontWeight: "700",
                  color: "#ffffff",
                  lineHeight: "1em",
                  marginBottom: "12px",
                  marginTop: 0,
                }}
              >
                <CountUp target={stat.number} suffix={stat.suffix} />
              </p>

              {/* Uppercase spaced label */}
              <p
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                  fontSize: "11px",
                  fontWeight: "400",
                  color: "rgba(255,255,255,0.6)",
                  letterSpacing: "2.5px",
                  textTransform: "uppercase",
                  lineHeight: "1.5em",
                  margin: 0,
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}