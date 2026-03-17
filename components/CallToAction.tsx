// components/CallToAction.tsx
// Background: #FFC501 exact yellow
// Button background: #292929 exact dark

"use client";

import Link from "next/link";
import Button from "./Button";

export default function CallToAction() {
  return (
    <section
      style={{
        backgroundColor: "#FFC501", // exact yellow
        padding: "80px 20px",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontFamily: "'Work Sans', sans-serif",
          fontSize: "clamp(60px, 15vw, 200px)",
          fontWeight: "800",
          lineHeight: "1em",
          color: "#292929",
          textAlign: "center",
          width: "100%",
          margin: "0 auto",
          marginTop: "clamp(-220px, -9vw, -180px)",
          marginBottom: "clamp(20px, -3vw, -60px)", // ← this pulls the content BELOW it upward
        }}
      >
        FORM
      </h2>
      {/* h5 style: Work Sans 24px 600 weight */}
      <h2
        style={{
          fontFamily: "'Work Sans', sans-serif",
          fontSize: "24px",
          fontWeight: "600",
          lineHeight: "1.4em",
          color: "#292929",
          maxWidth: "400px",
          margin: "0 auto 32px auto",
        }}
      >
        Are you ready to take the next step toward your future career?
      </h2>

      {/* Primary button */}
      <div className="flex flex-col items-center gap-4 pb-12 md:pb-0">
        {/* Application Form Button — centered */}
        <div className="w-full max-w-[320px]">
          <Button href="/admission/form" label="Application Form" />
        </div>

        {/* Request Info link — centered */}
        <div className="flex items-center justify-center gap-2 w-full max-w-[320px]">
          <Link
            href="/support/request-info"
            className="font-semibold transition-colors duration-200"
            style={{ color: "#000000", fontSize: "15px" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = "#2ab4c0";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = "#000000";
            }}
          >
            Request Info
          </Link>
          <span style={{ color: "#0a161e", opacity: 0.5, fontSize: "18px" }}>
            |
          </span>
        </div>
      </div>
    </section>
  );
}
