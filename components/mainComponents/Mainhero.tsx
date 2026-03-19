// components/mainComponents/Mainhero.tsx
// FULLY RESPONSIVE — Mobile / Tablet / Laptop / TV
//
// Mobile  (<640px)  — teal box full-width, smaller padding, box bottom-overlaps
// Tablet  (640px+)  — box narrower, left-offset increases
// Laptop  (1024px+) — original proportions, deeper overlap
// TV      (1440px+) — larger text, wider container

import { ReactNode } from "react";
import { AnimatedNextImage } from "../animation/Image";
import { AnimateOnScroll } from "../animation/AnimateOnScroll";

const STYLES = `
  .mh-section {
    position: relative;
    width: 100%;
    /* Overlap below increases with screen size */
    min-height: clamp(300px, 45vw, 520px);
    margin-bottom: clamp(80px, 14vw, 180px);
  }

  /* Teal content box */
  .mh-box {
    position: absolute;
    bottom: clamp(-100px, -14vw, -140px);
    left: clamp(16px, 5vw, 280px);
    background-color: #149AB5;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;

    /* Width: almost full on mobile, narrows as screen widens */
    width: clamp(260px, 88vw, 700px);

    /* Height scales with content but has a minimum */
    min-height: clamp(180px, 28vw, 380px);

    /* Padding scales fluidly */
    padding:
      clamp(28px, 5vw, 90px)
      clamp(20px, 4vw, 70px)
      clamp(36px, 6vw, 100px)
      clamp(20px, 4vw, 70px);

    /* Responsive width cap: 90vw mobile → 60vw tablet → 700px desktop */
    max-width: min(700px, 90vw);
  }

  @media (min-width: 640px) {
    .mh-box {
      max-width: min(700px, 70vw);
    }
  }
  @media (min-width: 1024px) {
    .mh-box {
      max-width: 700px;
    }
  }

  /* Title */
  .mh-title {
    font-family: 'Work Sans', sans-serif;
    font-weight: 800;
    line-height: 1.1em;
    color: #ffffff;
    margin: 0 0 14px 0;
    font-size: clamp(26px, 5vw, 60px);
  }

  /* Paragraph */
  .mh-para {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    line-height: 1.6em;
    color: #ffffff;
    text-align: justify;
    margin: 0;
    font-size: clamp(13px, 2vw, 20px);
  }
`;

type Props = {
  imageSrc: string;
  imageAlt: string;
  title: string;
  paragraph: ReactNode;
};

export default function MainHero({ imageSrc, imageAlt, title, paragraph }: Props) {
  return (
    <>
      <style>{STYLES}</style>
      <section className="mh-section">
        {/* Background image */}
        <AnimatedNextImage src={imageSrc} alt={imageAlt} priority />

        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(0,0,0,0.55)" }}
        />

        {/* Teal box */}
        <AnimateOnScroll
          delay="0.3s"
          className="mh-box"
          style={{
            transition: "opacity 0.9s ease 0.3s, transform 0.9s ease 0.3s",
          }}
        >
          <AnimateOnScroll
            delay="0.5s"
            as="h1"
            className="mh-title"
            style={{
              transition: "opacity 0.8s ease 0.5s, transform 0.8s ease 0.5s",
            }}
          >
            {title}
          </AnimateOnScroll>

          <AnimateOnScroll
            delay="0.7s"
            as="p"
            className="mh-para"
            style={{
              transition: "opacity 0.8s ease 0.7s, transform 0.8s ease 0.7s",
            }}
          >
            {paragraph}
          </AnimateOnScroll>
        </AnimateOnScroll>
      </section>
    </>
  );
}