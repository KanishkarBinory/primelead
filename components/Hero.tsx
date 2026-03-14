import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-150 overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1562774053-701939374585?w=1600&q=80"
        alt="University campus"
        fill
        priority
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 h-full flex flex-col justify-center px-16 max-w-7xl mx-auto">
        <h1 className="text-5xl font-black text-white leading-tight max-w-xl">
          Start your journey<br />
          in higher education &<br />
          pursue your passion
        </h1>
      </div>
    </section>
  );
}