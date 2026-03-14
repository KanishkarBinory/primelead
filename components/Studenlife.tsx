import Image from "next/image";
import Link from "next/link";

export default function StudentLife() {
  return (
    <section className="w-full overflow-hidden" style={{ minHeight: "520px" }}>
      <div className="flex flex-col md:flex-row h-full" style={{ minHeight: "520px" }}>

        {/* ── Col 1: Teal bg + heading + student image overlapping ── */}
        <div
          className="relative flex flex-col justify-end md:w-[32%] shrink-0"
          style={{ backgroundColor: "#1bbcc8", minHeight: "520px" }}
        >
          {/* Decorative circle */}
          <div
            className="absolute"
            style={{
              width: "280px", height: "280px",
              borderRadius: "50%",
              backgroundColor: "rgba(255,255,255,0.1)",
              top: "60px", left: "-60px",
            }}
          />

          {/* "Student Life" heading */}
          <div className="relative z-10 px-8 pb-8 pt-12">
            <h2
              className="text-white font-black leading-tight"
              style={{ fontSize: "clamp(36px, 4vw, 56px)" }}
            >
              Student<br />Life
            </h2>
          </div>

          {/* Student image — overlaps into col 2 */}
          <div
            className="absolute bottom-0 right-0 z-20"
            style={{ width: "75%", height: "85%" }}
          >
            <Image
              src="/funding-student.jpg"     /* ← replace with your image */
              alt="Student"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>

        {/* ── Col 2: Black bg + nav links + yellow bg + quote ── */}
        <div className="flex flex-col md:w-[30%] shrink-0" style={{ minHeight: "520px" }}>

          {/* Top half: black with nav links */}
          <div
            className="flex-1 flex flex-col justify-center px-10 gap-7"
            style={{ backgroundColor: "#0d0d0d" }}
          >
            {[
              { label: "FAQ", href: "/support/faq" },
              { label: "Support & Guidance", href: "/support/guidance" },
              { label: "Request Info", href: "/support/request-info" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-3 text-white font-semibold
                           hover:opacity-75 transition-opacity group"
                style={{ fontSize: "clamp(15px, 1.4vw, 17px)" }}
              >
                {link.label}
                <svg
                  width="18" height="18" viewBox="0 0 18 18" fill="none"
                  className="group-hover:translate-x-1 transition-transform duration-200"
                >
                  <path d="M3 9h12M10 4l5 5-5 5"
                        stroke="white" strokeWidth="2"
                        strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            ))}
          </div>

          {/* Bottom half: yellow with quote */}
          <div
            className="flex items-end px-10 py-8"
            style={{ backgroundColor: "#F5C400", minHeight: "200px" }}
          >
            <p
              className="font-bold leading-snug"
              style={{ fontSize: "clamp(15px, 1.3vw, 17px)", color: "#0d1b2a" }}
            >
              Empower your life through higher education by applying to our
              partnered institutions.
            </p>
          </div>
        </div>

        {/* ── Col 3: Full image ── */}
        <div className="relative flex-1" style={{ minHeight: "320px" }}>
          <Image
            src="/funding-student.jpg"   /* ← replace with your image */
            alt="Students collaborating"
            fill
            className="object-cover object-center"
          />
        </div>

      </div>
    </section>
  );
}