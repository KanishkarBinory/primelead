export default function StatsSection() {
  const stats = [
    { number: "2500+", label: "Registered Students" },
    { number: "500+", label: "Courses Available" },
    { number: "15+", label: "Partnered Institutions" },
    { number: "2000+", label: "Students Enrolled" },
  ];

  return (
    <section className="w-full" style={{ backgroundColor: "#fAfAfA" }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-7 py-10 sm:py-12 md:py-16">
        <div
          className="
            grid
            grid-cols-2          /* mobile: 2 columns */
            sm:grid-cols-2       /* small tablet: 2 columns */
            md:grid-cols-4       /* tablet+: 4 columns */
            gap-y-10             /* vertical gap between rows on mobile */
            gap-x-4              /* horizontal gap on mobile */
            sm:gap-x-6
            md:gap-x-0           /* no gap on desktop — matches original */
          "
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col gap-2 sm:gap-3 items-center text-center"
            >
              {/* Number */}
              <span
                className="
                  font-black leading-none tracking-tight
                  text-[48px]          /* mobile */
                  sm:text-[56px]       /* small tablet */
                  md:text-[72px]       /* tablet */
                  lg:text-[88px]       /* desktop */
                "
                style={{ color: "#111111" }}
              >
                {stat.number}
              </span>

              {/* Label */}
              <span
                className="
                  font-semibold uppercase leading-snug
                  text-[11px]          /* mobile */
                  sm:text-[12px]       /* small tablet */
                  md:text-[13px]       /* desktop */
                "
                style={{
                  color: "#1a2e3b",
                  letterSpacing: "0.08em",
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
