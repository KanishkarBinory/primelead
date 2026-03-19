// components/admission/HowToApplyContent.tsx
//
// This is the middle content section of the How To Apply page.
// It matches the original primeleed.com/how-to-apply/ layout exactly:
//
// LEFT COLUMN:
//   - Intro paragraph
//   - Requirements heading with shield icon
//   - Undergraduate & Graduate Diploma Requirements list
//
// RIGHT COLUMN:
//   - Six numbered steps (01–06), each with a number, title, description
//
// The two-column layout uses CSS Grid with a 40/60 split,
// matching the original's proportions where the steps column
// is wider than the requirements column.
"use client";

import Link from "next/link";

// ── STEP DATA ──
// Keeping content outside the component makes it easy to update
// without touching any layout or styling code.
const steps = [
  {
    number: "01",
    title: "Complete Application Form",
    description:
      "Tell us a little about yourself and we'll help with the rest. Our convenient online application tool only takes 10 minutes to complete. Required: Passport/Resident permit, Qualification Certificates/Transcripts, CV)",
  },
  {
    number: "02",
    title: "Confirmation of Application",
    description:
      "After submitting your application, our team will promptly acknowledge receipt within two working days via phone or email. We will then assess your academic background and recommend a suitable university/college and course that align with your potential for success.",
  },
  {
    number: "03",
    title: "Application Review",
    description:
      "Our team will review your application to confirm you meet our requirements. This may include: helping to create a CV, Personal Statement also guiding with application forms. If so, you will then be asked to meet either face to face or online as part of the review process.",
  },
  {
    number: "04",
    title: "Application Interview",
    description:
      "We offer comprehensive interview preparation to enhance your performance in academic interviews with your desired university or college. We also provide valuable guidance on excelling in exams. As a testament to our dedication to your success, we conduct free interview preparation workshops, empowering our students to unlock their full potential and achieve success in their interviews.",
  },
  {
    number: "05",
    title: "Payment of Fees",
    description:
      "Upon approval of your application, the university will generate an invoice for the remaining balance of your first-year tuition fees, which must be settled prior to the commencement date. Once the invoice is paid, you will receive a receipt as confirmation of your payment. If you require guidance or assistance regarding funding options, please feel free to reach out to us.",
  },
  {
    number: "06",
    title: "Attend University",
    description:
      "After completing the enrollment process with the university or college, you can fully embrace and enjoy your university/college experience.",
  },
];

// ── REQUIREMENTS LIST ──
const requirements = [
  "Students who are 18 years and above at the start of the course are eligible to apply.",
  "If English is not your first language, you will need to demonstrate English language proficiency equivalent to IELTS (Academic) 6.0 overall, with a minimum of 5.5 in each band and 6.0 in speaking.",
  "All applicants are interviewed as part of the admissions process.",
  "Applicants who do not meet the specified entry criteria may undergo individual consideration by the Academic Director. In such cases, evaluation will take into account relevant factors such as previous academic achievements, work experience, and life skills experience, as supported by evidence.",
];

// ── SHIELD ICON ──
// This matches the shield/protection icon used in the original site's
// custom icon font (vamtam-theme-icons). Since we can't use their
// proprietary font, this SVG is a faithful visual equivalent —
// a shield outline with a checkmark inside, which conveys the same
// "verified requirements" meaning.
function ShieldCheckIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12 2L4 6V12C4 16.4 7.4 20.5 12 22C16.6 20.5 20 16.4 20 12V6L12 2Z"
        stroke="#149AB5"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 12L11 14L15 10"
        stroke="#149AB5"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function HowToApplyContent() {
  return (
    <section className="bg-white py-16 px-6">
      <div
        style={{ maxWidth: "1000px" }}
        className="mx-auto"
      >

        {/* ── TWO-COLUMN GRID ──
            Left column (40%): intro text + requirements
            Right column (60%): six numbered steps
            On mobile they stack vertically (grid-cols-1),
            on medium+ screens they go side by side (md:grid-cols-[2fr_3fr]) */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-16 items-start">

          {/* ════════ LEFT COLUMN ════════ */}
          <div>

            {/* Intro paragraph — normal weight, body text color */}
            <p
              className="text-sm leading-7 mb-10"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "#545454",
              }}
            >
              To ensure you are well-prepared when filling out the application
              online, we have provided a comprehensive list of all the things
              that will be covered throughout the application. This will help
              you anticipate and navigate through the application process with
              ease.
            </p>

            {/* Requirements heading with shield icon.
                The icon sits inline with the heading text using flexbox.
                This matches the original where a shield icon precedes
                the "Requirements" h2 heading. */}
            <div className="flex items-center gap-3 mb-5">
              <ShieldCheckIcon />
              <h2
                style={{
                  fontFamily: "'Work Sans', sans-serif",
                  fontSize: "22px",
                  fontWeight: "700",
                  color: "#292929",
                  margin: 0,
                }}
              >
                Requirements
              </h2>
            </div>

            {/* Undergraduate subheading — bold in original */}
            <h3
              className="mb-5"
              style={{
                fontFamily: "'Work Sans', sans-serif",
                fontSize: "15px",
                fontWeight: "700",
                color: "#292929",
              }}
            >
              Undergraduate & Graduate Diploma Requirements:
            </h3>

            {/* Requirements list — each item prefixed with an em dash
                exactly as shown on the original site */}
            <ul className="flex flex-col gap-4">
              {requirements.map((req, i) => (
                <li
                  key={i}
                  className="flex gap-3 items-start"
                >
                  {/* Em dash prefix matching original "–" style */}
                  <span
                    style={{
                      color: "#149AB5",
                      fontWeight: "700",
                      flexShrink: 0,
                      lineHeight: "1.6em",
                      fontSize: "14px",
                    }}
                  >
                    –
                  </span>
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "14px",
                      color: "#545454",
                      lineHeight: "1.7em",
                    }}
                  >
                    {req}
                  </span>
                </li>
              ))}
            </ul>

          </div>

          {/* ════════ RIGHT COLUMN ════════ */}
          {/* Six numbered steps — each step has a large number,
              a bold title, and a description paragraph.
              The original uses h4 for both the number and the title,
              displayed as block elements stacked vertically. */}
          <div className="flex flex-col gap-0">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="flex gap-6 items-start py-8"
                style={{
                  // Subtle top border between steps except the first
                  borderTop: index > 0 ? "1px solid #f0f0f0" : "none",
                }}
              >
                {/* Step number — large, teal colored, Work Sans heavy weight.
                    This matches the original's large "01", "02" etc. displayed
                    as a heading above each step title. */}
                <div
                  className="flex-shrink-0"
                  style={{
                    fontFamily: "'Work Sans', sans-serif",
                    fontSize: "28px",
                    fontWeight: "800",
                    color: "#149AB5",
                    lineHeight: "1em",
                    minWidth: "48px",
                  }}
                >
                  {step.number}
                </div>

                <div className="flex flex-col gap-2">
                  {/* Step title — bold, dark, Work Sans */}
                  <h3
                    style={{
                      fontFamily: "'Work Sans', sans-serif",
                      fontSize: "16px",
                      fontWeight: "700",
                      color: "#292929",
                      margin: 0,
                      lineHeight: "1.3em",
                    }}
                  >
                    {step.title}
                  </h3>

                  {/* Step description — regular weight, body text color */}
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "14px",
                      color: "#545454",
                      lineHeight: "1.7em",
                      margin: 0,
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Application Form button — matches the link at the bottom
                of the steps section on the original page */}
            <div className="mt-4 pt-8 border-t border-[#f0f0f0]">
              <Link
                href="/admission/admission-form"
                className="inline-flex items-center gap-3 px-8 py-4 text-white text-sm font-semibold transition-colors duration-200"
                style={{
                  backgroundColor: "#292929",
                  fontFamily: "'Work Sans', sans-serif",
                  letterSpacing: "0.02em",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "#149AB5";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "#292929";
                }}
              >
                Application Form
                <svg width="16" height="12" viewBox="0 0 18 14" fill="none">
                  <path
                    d="M1 7H17M11 1L17 7L11 13"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}