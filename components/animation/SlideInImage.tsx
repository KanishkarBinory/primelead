"use client";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function SlideInImage() {
  const { ref, animated } = useScrollAnimation(0.1);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="absolute bottom-0"
      style={{
        height: "100%",
        left: "55%",
        right: "0%",
        transform: animated ? "translateX(0%)" : "translateX(60%)",
        transition: "transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      }}
    >
      <Image
        src="/vetor.png"
        alt="Student"
        fill
        className="object-contain object-bottom"
      />
    </div>
  );
}