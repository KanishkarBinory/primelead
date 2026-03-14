import Link from "next/link";

export default function ApplyToday() {
  return (
    <section className="w-full" style={{ backgroundColor: "#F5C400" }}>
      <div
        className="max-w-7xl mx-auto px-7 py-14 md:py-16
                   flex flex-col md:flex-row items-center gap-10 md:gap-12"
      >
        {/* Left: heading */}
        <div className="shrink-0 md:w-[22%]">
          <h2
            className="font-black leading-tight tracking-tight"
            style={{ fontSize: "clamp(28px, 2.8vw, 38px)", color: "#0d1b2a" }}
          >
            Apply Today
          </h2>
        </div>

        {/* Center: body text */}
        <div className="flex-1">
          <p
            className="leading-relaxed"
            style={{ fontSize: "clamp(14px, 1.2vw, 16px)", color: "#1a2e3b" }}
          >
            Whether you need guidance with your application, advice on choosing
            the right educational path, or support in securing funding, we are
            here to provide the assistance you need.
          </p>
        </div>

        {/* Right: CTA button */}
        <div className="shrink-0 md:w-[26%] w-full">
          <Link
            href="/admission"
            className="flex items-center justify-between w-full px-8 py-5
                       font-semibold text-white transition-opacity hover:opacity-90"
            style={{
              backgroundColor: "#1a2e3b",
              fontSize: "16px",
              letterSpacing: "0.01em",
            }}
          >
            Admission
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
        </div>
      </div>
    </section>
  );
}
