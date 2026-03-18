"use client";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type Props = {
  src: string;
  position?: string;
};

export function HeroImage({ src, position = "center center" }: Props) {
  const { ref, animated } = useScrollAnimation(0.1);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="absolute inset-0"
      style={{
        backgroundImage: `url('${src}')`,
        backgroundSize: "cover",
        backgroundPosition: position,
        transform: animated ? "scale(1)" : "scale(1.15)",
        transition: "transform 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      }}
    />
  );
}