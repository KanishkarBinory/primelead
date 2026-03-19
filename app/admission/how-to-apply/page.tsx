// app/admission/how-to-apply/page.tsx
// Accessible at /admission/how-to-apply from the Navbar dropdown.

import FormOverlap from "@/components/FormOverlap";
import HowToApplyContent from "@/components/admission/how-to-apply/HowToApplyContent";
import CallToAction from "@/components/CallToAction";
import PageHero from "@/components/admission/how-to-apply/htaHero";

export default function HowToApplyPage() {
  return (
    <main>
      {/* Page Hero — same teal box pattern */}
      <PageHero />
      <HowToApplyContent />
      <FormOverlap />
      <CallToAction />
    </main>
  );
}
