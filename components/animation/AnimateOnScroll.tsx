"use client";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ReactNode, CSSProperties, ElementType } from "react";

type Props = {
  children: ReactNode;
  delay?: string;
  className?: string;
  style?: CSSProperties;
  as?: ElementType;
};

export function AnimateOnScroll({
  children,
  delay = "0s",
  className = "",
  style,
  as: Tag = "div",
}: Props) {
  const { ref, animated } = useScrollAnimation();

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: animated ? 1 : 0,
        transform: animated ? "translateY(0)" : "translateY(40px)",
        transition:
          style?.transition ??
          `opacity 0.8s ease ${delay}, transform 0.8s ease ${delay}`,
      }}
    >
      {children}
    </Tag>
  );
}