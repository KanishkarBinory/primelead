// components/about/AboutHero.tsx
// No longer contains any design code — just passes the About page's
// specific content to the shared PageHero component.

import MainHero from "@/components/mainComponents/Mainhero";

export default function AboutHero() {
  return (
    <MainHero
      imageSrc="https://images.unsplash.com/photo-1627556704302-624286467c65?w=1600&q=80"
      imageAlt="Graduation ceremony"
      title="About"
      paragraph={
        <>
          With a successful track record spanning over four years catering to
          both UK and EU students, we have assisted more than 2000 students in
          securing their places in higher education institutions.{" "}
        </>
      }
    />
  );
}
