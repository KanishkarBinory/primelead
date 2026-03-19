
import MainHero from "@/components/mainComponents/Mainhero";

export default function AdmissionHero() {
  return (
    <MainHero
      imageSrc="https://images.unsplash.com/photo-1627556704302-624286467c65?w=1600&q=80"
      imageAlt="Graduation ceremony"
      title="Admission & Aid"
      paragraph={
        <>
          An admission team helps students find the right university by providing information, guiding them through the application process, assessing eligibility, offering personalised advice, and facilitating communication.{" "}
        </>
      }
    />
  );
}
