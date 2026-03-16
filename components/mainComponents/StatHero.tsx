import { ReactNode } from "react";

type Props = {
  stat: string;
  title: ReactNode;
  paragraph: string;
};

export default function StatHero({ stat, title, paragraph }: Props) {
  return (
    <section className="w-full px-5 md:px-8 lg:px-16 py-16 md:py-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Top row: stat + title */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-16 mb-8">
          {/* Big number */}
          <span
            className="shrink-0 font-black leading-none"
            style={{
              fontFamily: "'Work Sans', sans-serif",
              fontSize: "clamp(72px, 10vw, 130px)",
              color: "#0d1b2a",
              letterSpacing: "-2px",
            }}
          >
            {stat}
          </span>

          {/* Title */}
          <h2
            className="font-black leading-tight text-left"
            style={{
              fontFamily: "'Work Sans', sans-serif",
              fontSize: "clamp(28px, 4vw, 52px)",
              color: "#0d1b2a",
              letterSpacing: "-0.5px",
            }}
          >
            {title}
          </h2>
        </div>

        {/* Paragraph */}
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "clamp(14px, 1.2vw, 17px)",
            color: "#374151",
            lineHeight: "1.75em",
            maxWidth: "900px",
            margin: "0 auto",
            textAlign: "left",
          }}
        >
          {paragraph}
        </p>
      </div>
    </section>
  );
}