// components/admission/admissionOverview/AdmissionIntro.tsx
// Remove bottom padding — FactsImage sits flush below this section.

export default function AdmissionIntro() {
  return (
    <section
      className="bg-white"
      style={{
        padding: "80px 20px 0px 20px", // ← bottom padding = 0, image starts immediately
      }}
    >
      <div
        className="mx-auto"
        style={{ maxWidth: "1000px", textAlign: "center" }}
      >
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "24px",
            fontWeight: "900",
            lineHeight: "1.3em",
            color: "#000000",
            marginBottom: "24px",
          }}
        >
          By choosing to apply through Prime Leed, you open doors to a vast
          array of courses spanning our university's various programs and
          colleges. This allows you to venture across disciplines and carve out
          your own distinct academic journey.
        </p>

        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "24px",
            fontWeight: "900",
            lineHeight: "1.3em",
            color: "#000000",
            marginBottom: "60px", // space between text and image below
          }}
        >
          We understand that the application process can be daunting, especially
          when it comes to selecting the ideal undergraduate or graduate program.
          Rest assured, our admissions team is here to guide you through this
          crucial endeavor. We are committed to helping you make a well-informed
          decision that will shape your intellectual and creative potential in
          meaningful and transformative ways.
        </p>
      </div>
    </section>
  );
}