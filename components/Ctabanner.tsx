import Image from "next/image";
import Link from "next/link";

export default function CTABanner() {
  return (
    <section
      className="w-full relative overflow-hidden"
      style={{ backgroundColor: "#F5C400", minHeight: "340px" }}
    >
      <div
        className="max-w-7xl mx-auto px-7 flex flex-col md:flex-row
                   items-end md:items-center gap-8"
        style={{ minHeight: "340px" }}
      >
        {/* Left: Heading */}
        <div className="w-full md:w-[42%] shrink-0 pb-12 md:pb-0 pt-12 md:pt-0">
          <h2
            className="font-black leading-tight tracking-tight"
            style={{
              fontSize: "clamp(28px, 3.5vw, 52px)",
              color: "#0d1b2a",
            }}
          >
            Are you ready to take the next step toward your higher education?
          </h2>
        </div>

        {/* Center: Floating student image — bleeds above section */}
        <div
          className="hidden md:block absolute"
          style={{
            width: "260px",
            height: "380px",
            bottom: "0",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <Image
            src="/student-cta.jpg" /* ← replace with your image */
            alt="Student studying"
            fill
            className="object-contain object-bottom"
          />
        </div>

        {/* Right: CTA buttons */}
        <div className="flex-1 flex flex-col items-end gap-4 pb-12 md:pb-0">
          <Link
            href="/admission/form"
            className="flex items-center justify-between w-full max-w-[320px]
                       px-8 py-5 text-white font-semibold
                       transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#1a2e3b", fontSize: "16px" }}
          >
            Application Form
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M3 9h12M10 4l5 5-5 5"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          <div className="flex items-center gap-3 w-full max-w-[320px] justify-end">
            <Link
              href="/support/request-info"
              className="font-semibold hover:opacity-75 transition-opacity"
              style={{ color: "#1a2e3b", fontSize: "15px" }}
            >
              Request Info
            </Link>
            <span style={{ color: "#1a2e3b", opacity: 0.4 }}>|</span>
          </div>
        </div>
      </div>
    </section>
  );
}
