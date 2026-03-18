"use client";
import { ReactNode, CSSProperties } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

type Props = {
  delay?: string;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
};

export function AnimateFadeIn({ delay = "0s", className = "", style, children }: Props) {
  const { ref, animated } = useScrollAnimation();

  return (
    <span
      ref={ref as React.RefObject<HTMLSpanElement>}
      className={className}
      style={{
        ...style,
        opacity: animated ? 1 : 0,
        transition: `opacity 0.8s ease ${delay}`,
      }}
    >
      {children}
    </span>
  );
}