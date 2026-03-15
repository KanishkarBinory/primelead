// components/about/CoreValueCard.tsx
// Sits on dark #292929 background so title is white, description is light gray

interface CoreValueCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function CoreValueCard({ icon, title, description }: CoreValueCardProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>

      {/* Icon container — slightly lighter background so it stands out on dark */}
      <div
        style={{
          width: "56px",
          height: "56px",
          backgroundColor: "#383838",  // slightly lighter than #292929
          borderRadius: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "24px",
          marginBottom: "20px",
        }}
      >
        {icon}
      </div>

      {/* Title — Work Sans, white */}
      <h3
        style={{
          fontFamily: "'Work Sans', sans-serif",
          fontSize: "18px",
          fontWeight: "700",
          color: "#ffffff",
          marginBottom: "12px",
        }}
      >
        {title}
      </h3>

      {/* Description — Inter, light gray */}
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "16px",
          fontWeight: "400",
          lineHeight: "1.6em",
          color: "#b0b0b0",
        }}
      >
        {description}
      </p>
    </div>
  );
}