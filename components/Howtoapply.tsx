import Link from "next/link";

const steps = [
  {
    id: "apply",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="6" y="3" width="20" height="26" rx="2" stroke="#1a2e3b" strokeWidth="2"/>
        <line x1="11" y1="10" x2="21" y2="10" stroke="#1a2e3b" strokeWidth="1.8" strokeLinecap="round"/>
        <line x1="11" y1="15" x2="21" y2="15" stroke="#1a2e3b" strokeWidth="1.8" strokeLinecap="round"/>
        <line x1="11" y1="20" x2="17" y2="20" stroke="#1a2e3b" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    title: "You Apply",
    body: "Tell us a little about yourself and we'll help with the rest. Our convenient online application tool only takes 10 minutes to complete.",
  },
  {
    id: "connect",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <path d="M4 8h28v16a2 2 0 01-2 2H6a2 2 0 01-2-2V8z" stroke="#1a2e3b" strokeWidth="2"/>
        <path d="M8 13h12M8 18h8" stroke="#1a2e3b" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M26 26v4" stroke="#1a2e3b" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="26" cy="32" r="1.5" fill="#1a2e3b"/>
      </svg>
    ),
    title: "We Connect",
    body: "After you submit your application, an admissions representative will contact you and will help you to complete the process.",
  },
  {
    id: "ready",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="4" y="7" width="28" height="24" rx="2" stroke="#1a2e3b" strokeWidth="2"/>
        <line x1="4" y1="14" x2="32" y2="14" stroke="#1a2e3b" strokeWidth="1.8"/>
        <line x1="12" y1="3" x2="12" y2="10" stroke="#1a2e3b" strokeWidth="2" strokeLinecap="round"/>
        <line x1="24" y1="3" x2="24" y2="10" stroke="#1a2e3b" strokeWidth="2" strokeLinecap="round"/>
        <path d="M13 22l3 3 7-7" stroke="#1a2e3b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "You Get Ready",
    body: "Once you've completed your application and connected with an admissions representative, you're ready to create your schedule.",
  },
];

export default function HowToApply() {
  return (
    <section className="w-full bg-white" style={{ paddingTop: "64px", paddingBottom: "72px" }}>
      <div className="max-w-7xl mx-auto px-7">

        {/* Header row */}
        <div className="flex items-center justify-between mb-14">
          <h2
            className="font-black tracking-tight leading-tight"
            style={{ fontSize: "clamp(28px, 3vw, 40px)", color: "#0d1b2a" }}
          >
            How to Apply
          </h2>
          <Link
            href="/admission/how-to-apply"
            className="font-semibold underline underline-offset-2 hover:opacity-75 transition-opacity whitespace-nowrap"
            style={{ color: "#2ab4c0", fontSize: "15px" }}
          >
            View All Requirements
          </Link>
        </div>

        {/* 3 columns with vertical dividers */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          {steps.map((step, i) => (
            <div
              key={step.id}
              className="flex flex-col gap-5 px-0 md:px-8 py-8 md:py-0"
              style={{
                borderLeft: i > 0 ? "1px solid #e0e3e7" : "none",
                paddingLeft: i > 0 ? "40px" : "0",
              }}
            >
              {/* Icon + Title row */}
              <div className="flex items-center gap-4">
                <div className="shrink-0">{step.icon}</div>
                <h3
                  className="font-black leading-tight"
                  style={{ fontSize: "clamp(17px, 1.6vw, 20px)", color: "#0d1b2a" }}
                >
                  {step.title}
                </h3>
              </div>

              {/* Body */}
              <p
                className="leading-relaxed"
                style={{ fontSize: "15px", color: "#3d4f5e" }}
              >
                {step.body}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}