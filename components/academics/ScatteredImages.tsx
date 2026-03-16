// components/mainComponents/ScatteredImages.tsx
import Image from "next/image";

type ImageItem = {
  src: string;
  alt: string;
};

type Props = {
  images?: ImageItem[];
};

export default function ScatteredImages({
  images = [
    { src: "/images/library.jpg", alt: "Library" },
    { src: "/images/students-group.jpg", alt: "Students group" },
    { src: "/images/campus.jpg", alt: "Campus" },
    { src: "/images/student-girl.jpg", alt: "Student" },
    { src: "/images/campus-entrance.jpg", alt: "Campus entrance" },
  ],
}: Props) {
  return (
    <section className="w-full py-10 px-5 md:px-8 overflow-hidden mb-20 md:mb-32">
      <div className="relative max-w-7xl mx-auto" style={{ minHeight: "520px" }}>

        {/* Image 1 — left, mid height */}
        <div
          className="absolute"
          style={{
            width: "clamp(160px, 18vw, 220px)",
            height: "clamp(180px, 22vw, 260px)",
            left: "8%",
            top: "18%",
            zIndex: 2,
          }}
        >
          <Image
            src={images[0].src}
            alt={images[0].alt}
            fill
            className="object-cover"
          />
        </div>

        {/* Image 2 — left, overlapping bottom of image 1 */}
        <div
          className="absolute"
          style={{
            width: "clamp(180px, 22vw, 260px)",
            height: "clamp(200px, 26vw, 300px)",
            left: "14%",
            top: "38%",
            zIndex: 3,
          }}
        >
          <Image
            src={images[1].src}
            alt={images[1].alt}
            fill
            className="object-cover"
          />
        </div>

        {/* Image 3 — center, top */}
        <div
          className="absolute"
          style={{
            width: "clamp(200px, 26vw, 320px)",
            height: "clamp(160px, 18vw, 240px)",
            left: "50%",
            top: "4%",
            transform: "translateX(-50%)",
            zIndex: 2,
          }}
        >
          <Image
            src={images[2].src}
            alt={images[2].alt}
            fill
            className="object-cover"
          />
        </div>

        {/* Image 4 — right, top */}
        <div
          className="absolute"
          style={{
            width: "clamp(180px, 22vw, 260px)",
            height: "clamp(180px, 22vw, 240px)",
            right: "6%",
            top: "2%",
            zIndex: 2,
          }}
        >
          <Image
            src={images[3].src}
            alt={images[3].alt}
            fill
            className="object-cover"
          />
        </div>

        {/* Image 5 — right, overlapping bottom of image 4 */}
        <div
          className="absolute"
          style={{
            width: "clamp(160px, 20vw, 240px)",
            height: "clamp(160px, 20vw, 240px)",
            right: "12%",
            top: "35%",
            zIndex: 3,
          }}
        >
          <Image
            src={images[4].src}
            alt={images[4].alt}
            fill
            className="object-cover"
          />
        </div>

      </div>
    </section>
  );
}