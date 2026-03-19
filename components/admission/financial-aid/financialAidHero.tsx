import MainHero from "@/components/mainComponents/Mainhero";

export default function financialAidHero() {
  return (
    <MainHero
      imageSrc="https://images.unsplash.com/photo-1627556704302-624286467c65?w=1600&q=80"
      imageAlt="Graduation ceremony"
      title="Financial Aid"
      paragraph={
        <>
          Discover various opportunities for scholarships, grants, and financial
          aid to support your pursuit of a high-quality education with the help
          from Prime Leed.{" "}
        </>
      }
    />
  );
}
