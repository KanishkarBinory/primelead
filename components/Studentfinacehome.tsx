export default function StudentFinance() {
  return (
    <section
      className="relative w-full h-35 overflow-hidden"
      style={{ minHeight: "520px" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/Finanace.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content row */}
      <div
        className="relative z-10 max-w-7xl mx-auto px-7
                   flex flex-col md:flex-row items-center
                   py-16 md:py-0"
        style={{ minHeight: "520px" }}
      >
        {/* Left: Text */}
        <div
          className="w-full flex flex-col gap-7"
          style={{ maxWidth: "580px", paddingRight: "48px" }}
        >
          <h2
            className="text-white leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(42px, 4.5vw, 68px)", fontWeight: 900 }}
          >
            Student Finance
            <br />
            England
          </h2>

          <p
            className="text-white/90 leading-[1.7]"
            style={{ fontSize: "clamp(14px, 1.15vw, 16px)" }}
          >
            Student loans and grants in the United Kingdom are primarily
            provided by the government through the Student Loans Company (SLC),
            a non-departmental public body.
          </p>

          <p
            className="text-white/90 leading-[1.7]"
            style={{ fontSize: "clamp(14px, 1.15vw, 16px)" }}
          >
            The SLC is responsible for Student Finance England and Student
            Finance Wales, and is a delivery partner of Student Finance NI and
            the Student Awards Agency for Scotland.
          </p>
        </div>

        {/* Right: Real video */}
        <div
          className="w-full md:flex-1 overflow-hidden mt-10 md:mt-0
                     shadow-[0_8px_40px_rgba(0,0,0,0.4)]"
        >
          <video
            src="/Student-Finance-Explained-2022-to-2023.mp4"
            controls
            preload="metadata"
            className="w-full h-full object-cover"
            style={{ aspectRatio: "16/9", display: "block" }}
          />
        </div>
      </div>
    </section>
  );
}
