// components/admission/admissionOverview/ApplySection.tsx

"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function ApplySection() {
  const imgWrapRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const imgWrap = imgWrapRef.current;
    const text = textRef.current;
    if (!imgWrap || !text) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(imgWrap);
    observer.observe(text);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .as-text-anim {
          opacity: 0;
          transform: translateX(-40px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .as-text-anim.visible {
          opacity: 1;
          transform: translateX(0);
        }

        .as-img-wrap {
          position: relative;
          /* padding makes room for yellow box inside the wrap */
          padding-bottom: 30px;
          padding-right: 30px;
          /* overflow hidden keeps yellow clipped to wrap boundary */
          overflow: visible;
          opacity: 0;
          transform: translateX(40px);
          transition: opacity 0.7s ease, transform 0.7s ease;
          align-self: center;
        }
        .as-img-wrap.visible {
          opacity: 1;
          transform: translateX(0);
        }

        .as-img {
          width: 1000px;
          max-width: 100%;
          height: 560px;
          object-fit: cover;
          object-position: center;
          display: block;
          position: relative;
          z-index: 1;
          transform: scale(1.06);
          transition: transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .as-img-wrap.visible .as-img {
          transform: scale(1);
        }

        /* Yellow box sits behind the bottom-right corner of the image */
        .as-yellow {
          position: absolute;
          /* aligns to bottom-right of the image, not the wrap */
          bottom: 10px;
          right: 10px;
          width: 250px;
          height: 200px;
          background-color: #FFC501;
          z-index: 0;  /* behind the image (z-index:1) */
          opacity: 0;
          transform: translate(10px, 10px);
          transition: opacity 0.6s ease 0.4s, transform 0.6s ease 0.4s;
        }
        .as-img-wrap.visible .as-yellow {
          opacity: 1;
          transform: translate(0, 0);
        }

        @media (max-width: 768px) {
          .as-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            padding: 0 20px !important;
          }
          .as-img {
            width: 100%;
            height: 280px;
          }
          .as-yellow {
            width: 100px;
            height: 80px;
          }
        }
      `}</style>

      {/* Section: symmetric padding left and right so content is centered */}
      <section style={{ padding: "80px 60px", backgroundColor: "#ffffff" }}>
        <div
          className="as-grid"
          style={{
            maxWidth: "1200px",
            margin: "0 auto",          /* centers the whole grid */
            display: "grid",
            gridTemplateColumns: "1fr 1.4fr",   /* image column slightly wider */
            gap: "80px",
            alignItems: "center",
          }}
        >

          {/* Left — text, no extra paddingTop needed since alignItems center */}
          <div className="as-text-anim" ref={textRef} style={{ padding: '60px 10px 60px 10px' }}>
            <h2
              style={{
                fontFamily: "'Work Sans', sans-serif",
                fontSize: "45px",
                fontWeight: "900",
                lineHeight: "1.7em",
                color: "#292929",
                marginBottom: "28px",
              }}
            >
              Apply for 2023
            </h2>

            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(14px, 1.8vw, 17px)",
                fontWeight: "600",
                lineHeight: "1.7em",
                color: "#545454",
                marginBottom: "32px",
              }}
            >
              <strong style={{ color: "#000000" }}>
                September 2023 application is now open!
              </strong>{" "}
              Start your application today and get connected to a member from
              the admissions team so you can see if our partner university is
              the right place for you.
            </p>

            <Link
              href="/how-to-apply"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "18px",
                fontWeight: "600",
                color: "#149AB5",
                textDecoration: "none",
                borderBottom: "2px solid #149AB5",
                paddingBottom: "2px",
              }}
            >
              How To Apply
            </Link>
          </div>

          {/* Right — image + yellow accent behind bottom-right corner */}
          <div className="as-img-wrap" ref={imgWrapRef}>
            <img
              src="https://www.primeleed.com/wp-content/uploads/2020/12/wonderlane-6zlgM-GUd6I-unsplash-Copy-2.jpg"
              alt="University campus building"
              className="as-img"
            />
            {/* z-index:0 means yellow renders BEHIND the image (z-index:1) */}
            <div className="as-yellow" />
          </div>

        </div>
      </section>
    </>
  );
}