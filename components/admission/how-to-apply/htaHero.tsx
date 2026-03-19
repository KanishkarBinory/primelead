import MainHero from "@/components/mainComponents/Mainhero";

export default function HowToApplyHero() {
  return (
    <MainHero
      imageSrc="https://images.unsplash.com/photo-1627556704302-624286467c65?w=1600&q=80"
      imageAlt="Graduation ceremony"
      title="How to Apply"
      paragraph={
        <>
          The admission team can offer guidance and support throughout the
          application process. They can help students navigate the application
          requirements, submit necessary documents, and meet deadlines.{" "}
        </>
      }
    />
  );
}
