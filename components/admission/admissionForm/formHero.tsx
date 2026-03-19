import MainHero from "@/components/mainComponents/Mainhero";

export default function formHero() {
  return (
    <MainHero
      imageSrc="https://images.unsplash.com/photo-1627556704302-624286467c65?w=1600&q=80"
      imageAlt="Graduation ceremony"
      title="Admission Form"
      paragraph={
        <>
          Apply using the form below. Please make sure it is accurate as
          possible to provide you the best guidance.{" "}
        </>
      }
    />
  );
}
