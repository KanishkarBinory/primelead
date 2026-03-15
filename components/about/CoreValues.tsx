// components/about/CoreValues.tsx
// Background is dark: #292929 matching --e-global-color-vamtam_accent_6
// Text on dark background uses white and light gray

import CoreValueCard from "./CoreValueCard";

const values = [
  {
    icon: "📋",
    title: "You Apply",
    description:
      "Tell us a little about yourself and we'll help with the rest. Our convenient online application tool only takes 10 minutes to complete.",
  },
  {
    icon: "💬",
    title: "We Connect",
    description:
      "After you submit your application, an admissions representative will contact you and will help you to complete the process.",
  },
  {
    icon: "📅",
    title: "You Get Ready",
    description:
      "Once you've completed your application and connected with an admissions representative, you're ready to create your schedule.",
  },
];

export default function CoreValues() {
  return (
    <section style={{ backgroundColor: "#ffffff", padding: "80px 20px" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>

        {/* Section heading — white text on dark background */}
        <p
          style={{
            fontFamily: "'Work Sans', sans-serif",
            fontSize: "24px",
            fontWeight: "1000",
            lineHeight: "1.4em",
            color: "#000000",
            maxWidth: "1000px",
            margin: "0 auto 150px auto",
          }}
        >
          Aligned with global shifts in the economy, society, and environment,
          our vision drives our mission and upholds our core values
        </p>

        {/* Three-column grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "48px",
          }}
        >
          {values.map((value) => (
            <CoreValueCard
              key={value.title}
              icon={value.icon}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}