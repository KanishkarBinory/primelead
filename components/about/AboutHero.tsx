// components/about/AboutHero.tsx
// No longer contains any design code — just passes the About page's
// specific content to the shared PageHero component.

import MainHero from "@/components/mainComponents/Mainhero";

export default function AboutHero() {
  return (
    <MainHero
            imageSrc="https://images.unsplash.com/photo-1627556704302-624286467c65?w=1600&q=80"
            imageAlt="Graduation ceremony"
            title="Academics"
            paragraph={
              <>
                Prime Leed offers an exceptional selection of courses by partnering
                with esteemed universities accross the UK. Thorugh these
                partnerships, we ensure access to high-quality educationa and a
                diverse range of study programs.{" "}
              </>
            }
          />
  );
}