import Image from "next/image";
import Link from "next/link";

export default function AdmissionContent() {
  return (
    <section className="w-full bg-white" style={{ paddingTop: "72px", paddingBottom: "72px" }}>
      <div className="max-w-7xl mx-auto px-7">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">

          {/* Left: stacked images */}
          <div
            className="w-full md:w-[28%] shrink-0 flex flex-col gap-3"
          >
            <div className="relative w-full overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <Image
                src="/funding-student.jpg"        /* ← replace with your image */
                alt="Graduation caps"
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="relative w-full overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <Image
                src="/funding-student.jpg"    /* ← replace with your image */
                alt="Student on campus"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Right: text content */}
          <div className="flex-1 flex flex-col gap-8">

            {/* Block 1 */}
            <div className="flex flex-col gap-4">
              <p
                className="leading-[1.8]"
                style={{ fontSize: "clamp(14px, 1.15vw, 16px)", color: "#2c3e50" }}
              >
                If you are ready to take the next step in your academic journey,
                we invite you to apply for a partnered institution. By registering
                with us, you will gain access to a wide range of UK higher
                educational opportunities and support. Once you have registered,
                our team of knowledgeable counselors will reach out to you
                promptly, guiding you through the application process and assisting
                you in finding the best UK higher educational pathway to achieve
                your goals.
              </p>
              <Link
                href="/admission/overview"
                className="font-semibold underline underline-offset-2
                           hover:opacity-75 transition-opacity w-fit"
                style={{ color: "#2ab4c0", fontSize: "15px" }}
              >
                Process Overview
              </Link>
            </div>

            {/* Divider */}
            <div style={{ borderTop: "1px solid #eaecef" }} />

            {/* Block 2 */}
            <div className="flex flex-col gap-4">
              <p
                className="leading-[1.8]"
                style={{ fontSize: "clamp(14px, 1.15vw, 16px)", color: "#2c3e50" }}
              >
                Get ready to take the next step towards your future with
                confidence, as we guide you towards securing the necessary funds
                for your academic pursuits. We understand the importance of
                financial support, and we are committed to assisting you in
                finding the right funding options to support your higher
                educational journey.
              </p>
              <Link
                href="/admission/financial-aid"
                className="font-semibold underline underline-offset-2
                           hover:opacity-75 transition-opacity w-fit"
                style={{ color: "#2ab4c0", fontSize: "15px" }}
              >
                Apply For Student Funding
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}