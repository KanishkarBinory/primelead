import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-7">
        <div className="flex items-center gap-10 justify-center">
          {/* Left — logo */}
          <div className="shrink-0 w-80 flex items-center justify-center">
            <Image
              src="/logo2.png"
              alt="Primeleed"
              width={320}
              height={280}
              className="object-contain"
            />
          </div>

          {/* Right — text */}
          <div className="flex-1 max-w-2xl">
            <h2 className="text-4xl font-black text-[#1a2e3b] mb-6 leading-tight">
              Secure a UK University Placement
            </h2>

            <p className="text-base text-[#374151] leading-relaxed text-justify mb-4">
              <strong>
                Prime Leed is a trusted resource for students seeking to apply
                for higher education.
              </strong>{" "}
              With a successful track record spanning over four years catering
              to both UK and EU students, we have assisted more than 2000
              students in securing their places in higher education
              institutions.
            </p>

            <p className="text-base text-[#374151] leading-relaxed text-justify">
              Our platform offers comprehensive support, including guidance on
              the application process, access to valuable resources, and
              personalised assistance from experienced advisors. We are
              committed to empowering students and ensuring their journey
              towards higher education is smooth and successful, regardless of
              their nationality or background.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
