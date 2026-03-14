export default function StudentFinance() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ minHeight: "520px" }}
    >
      {/* ── Full-width background image — brighter overlay ── */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/campus.png')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      />

      {/* Lighter overlay so image stays vivid — matches original */}
      <div className="absolute inset-0 bg-black/40" />

      {/* ── Content row ── */}
      <div
        className="relative z-10 max-w-7xl mx-auto px-7
                   flex flex-col md:flex-row items-center
                   py-16 md:py-0"
        style={{ minHeight: "520px" }}
      >
        {/* ── Left: Text — takes ~48% width ── */}
        <div
          className="w-full flex flex-col gap-7"
          style={{ maxWidth: "580px", paddingRight: "48px" }}
        >
          {/* Heading — large, heavy, white, matching original size */}
          <h2
            className="text-white leading-[1.05] tracking-tight"
            style={{
              fontSize: "clamp(42px, 4.5vw, 68px)",
              fontWeight: 900,
            }}
          >
            Student Finance
            <br />
            England
          </h2>

          {/* Para 1 */}
          <p
            className="text-white/90 leading-[1.7]"
            style={{ fontSize: "clamp(14px, 1.15vw, 16px)" }}
          >
            Student loans and grants in the United Kingdom are primarily
            provided by the government through the Student Loans Company (SLC),
            a non-departmental public body.
          </p>

          {/* Para 2 */}
          <p
            className="text-white/90 leading-[1.7]"
            style={{ fontSize: "clamp(14px, 1.15vw, 16px)" }}
          >
            The SLC is responsible for Student Finance England and Student
            Finance Wales, and is a delivery partner of Student Finance NI and
            the Student Awards Agency for Scotland.
          </p>
        </div>

        {/* ── Right: Video player — vertically centered, ~52% width ── */}
        <div
          className="w-full md:flex-1 flex flex-col overflow-hidden
                     shadow-[0_8px_40px_rgba(0,0,0,0.4)]
                     mt-10 md:mt-0"
        >
          {/* Gradient thumbnail — purple → pink matching original */}
          <div
            className="relative flex items-center justify-center"
            style={{
              aspectRatio: "16/9",
              background: "linear-gradient(135deg, #8b1fa8 0%, #e8189a 100%)",
            }}
          >
            <div
              className="flex items-center justify-center rounded-full border-[3px] border-white"
              style={{ width: "84px", height: "84px" }}
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="white"
                style={{ marginLeft: "5px" }}
              >
                <path d="M5 3l14 9-14 9V3z" />
              </svg>
            </div>
          </div>

          {/* Controls bar */}
          <div
            className="flex items-center gap-3 px-5"
            style={{
              height: "52px",
              backgroundColor: "rgba(6,6,6,0.95)",
            }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="white">
              <path d="M5 3l14 9-14 9V3z" />
            </svg>

            <span
              style={{
                color: "white",
                fontSize: "13px",
                fontFamily: "monospace",
                minWidth: "40px",
              }}
            >
              00:00
            </span>

            {/* Progress filled slightly to match original visual */}
            <div
              className="flex-1 bg-white/25 rounded-sm"
              style={{ height: "4px" }}
            >
              <div
                className="h-full bg-white rounded-sm"
                style={{ width: "8%" }}
              />
            </div>

            <span
              style={{
                color: "white",
                fontSize: "13px",
                fontFamily: "monospace",
              }}
            >
              01:11
            </span>

            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M11 5L6 9H2v6h4l5 4V5z" />
              <path d="M19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07" />
            </svg>

            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
