"use client";

import Link from "next/link";

interface ButtonProps {
  href: string;
  label: string;
}

export default function Button({ href, label }: ButtonProps) {
  return (
    <Link
      href={href}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        backgroundColor: "#292929",
        color: "#ffffff",
        padding: "14px 32px",
        fontFamily: "'Work Sans', sans-serif",
        fontSize: "16px",
        fontWeight: "600",
        textDecoration: "none",
        letterSpacing: "0.02em",
        transition: "background-color 0.2s ease",
      }}
      onMouseEnter={(e) => {
        // When cursor enters, change background to the teal hover color
        (e.currentTarget as HTMLElement).style.backgroundColor = "#2ab4c0";
      }}
      onMouseLeave={(e) => {
        // When cursor leaves, restore the original dark background
        (e.currentTarget as HTMLElement).style.backgroundColor = "#292929";
      }}
    >
      {label} →
    </Link>
  );
}