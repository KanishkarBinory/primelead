// app/admission/how-to-apply/page.tsx
// Accessible at /admission/how-to-apply from the Navbar dropdown.

import FormOverlap from "@/components/FormOverlap";
import CallToAction from "@/components/CallToAction";
import PageHero from "@/components/admission/how-to-apply/htaHero";

export default function HowToApplyPage() {
  return (
    <main>
      {/* Page Hero — same teal box pattern */}
      <PageHero />

      {/* Page Content */}
      <section className="bg-white" style={{ padding: "80px 20px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "18px",
              lineHeight: "1.6em",
              color: "#545454",
            }}
          >
            Start your application today. Our convenient online application tool
            only takes 10 minutes to complete. Get connected to a member from
            the admissions team to see if our partner university is the right
            place for you.
          </p>
        </div>
      </section>
      <FormOverlap />
      <CallToAction />
    </main>
  );
}
