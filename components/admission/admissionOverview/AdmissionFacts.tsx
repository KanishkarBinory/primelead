// components/admission/admissionOverview/facts/AdmissionFacts.tsx

"use client";

import { useEffect, useRef } from "react";

const stats = [
  { number: "2500+", value: 2500, suffix: "+", label: "REGISTERED\nSTUDENTS" },
  { number: "500+",  value: 500,  suffix: "+", label: "COURSES\nAVAILABLE" },
  { number: "15+",   value: 15,   suffix: "+", label: "PARTNERED\nINSTITUTIONS" },
  { number: "2000+", value: 2000, suffix: "+", label: "STUDENTS\nENROLLED" },
];

const STYLES = `
  .af-outer {
  position: relative;
  background: linear-gradient(
    to bottom,
    #ffffff 0%,
    #ffffff 15%,    /* ← was 5%, now 15% — more white at top */
    #2a2a2a 15%,    /* ← was 5%, now 15% */
    #2a2a2a 100%
  );
  padding-bottom: 120px;
}

  .af-img-container {
  position: relative;
  padding: 0 clamp(100px, 30vw, 250px);  /* ← increase these values */
  z-index: 2;
}

  .af-img {
    display: block;
    width: 100%;
    height: clamp(320px, 40vw, 520px);
    object-fit: cover;
    object-position: center 30%;
    position: relative;
    z-index: 2;
  }

  .af-facts {
    position: absolute;
    left: 0;
    right: 0;
    top: 57%;
    transform: translateY(-50%);
    z-index: 3;
    font-family: 'Work Sans', sans-serif;
    font-weight: 900;
    color: #ffffff;
    text-align: center;
    line-height: 1em;
    margin: 0;
    letter-spacing: -0.02em;
    font-size: clamp(80px, 16vw, 190px);
  }

  .af-stats {
    position: relative;
    z-index: 2;
    max-width: 960px;
    margin: 0 auto;
    padding: clamp(80px, 10vw, 140px) 20px 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 48px 24px;
  }

  @media (min-width: 640px) {
    .af-stats {
      grid-template-columns: repeat(4, 1fr);
      gap: 0;
    }
  }

  .af-stat {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  @media (min-width: 640px) {
    .af-stat {
      padding: 0 40px;
      border-left: 1px solid rgba(255,255,255,0.15);
    }
    .af-stat:first-child {
      border-left: none;
      padding-left: 0;
    }
  }

  /* Number starts invisible and slightly down */
  .af-stat-num {
    font-family: 'Work Sans', sans-serif;
    font-weight: 800;
    color: #ffffff;
    font-size: clamp(36px, 5vw, 68px);
    line-height: 1em;
    margin: 0;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }

  /* When stats section is visible, number fades up */
  .af-stats.af-counted .af-stat-num {
    opacity: 1;
    transform: translateY(0);
  }

  /* Stagger each stat */
  .af-stats.af-counted .af-stat:nth-child(1) .af-stat-num { transition-delay: 0s;    }
  .af-stats.af-counted .af-stat:nth-child(2) .af-stat-num { transition-delay: 0.15s; }
  .af-stats.af-counted .af-stat:nth-child(3) .af-stat-num { transition-delay: 0.3s;  }
  .af-stats.af-counted .af-stat:nth-child(4) .af-stat-num { transition-delay: 0.45s; }

  /* Label also fades in with a slight delay after the number */
  .af-stat-lbl {
    font-family: 'Work Sans', sans-serif;
    font-weight: 600;
    color: rgba(255,255,255,0.6);
    font-size: clamp(10px, 1.1vw, 12px);
    letter-spacing: 0.1em;
    line-height: 1.6em;
    margin: 0;
    text-transform: uppercase;
    white-space: pre-line;
    opacity: 0;
    transform: translateY(10px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }

  .af-stats.af-counted .af-stat:nth-child(1) .af-stat-lbl { opacity: 1; transform: translateY(0); transition-delay: 0.1s;  }
  .af-stats.af-counted .af-stat:nth-child(2) .af-stat-lbl { opacity: 1; transform: translateY(0); transition-delay: 0.25s; }
  .af-stats.af-counted .af-stat:nth-child(3) .af-stat-lbl { opacity: 1; transform: translateY(0); transition-delay: 0.4s;  }
  .af-stats.af-counted .af-stat:nth-child(4) .af-stat-lbl { opacity: 1; transform: translateY(0); transition-delay: 0.55s; }
`;

// Easing function — starts fast, slows down at the end
// This makes the count feel natural, not mechanical
function easeOutQuart(t: number): number {
  return 1 - Math.pow(1 - t, 4);
}

// Animates a number from 0 to target over `duration` ms
function animateCount(
  el: HTMLElement,
  target: number,
  suffix: string,
  duration: number
) {
  const start     = performance.now()
  const formatter = new Intl.NumberFormat()   // adds commas: 2,500

  const tick = (now: number) => {
    const elapsed  = now - start
    const progress = Math.min(elapsed / duration, 1)
    const eased    = easeOutQuart(progress)
    const current  = Math.round(eased * target)

    el.textContent = formatter.format(current) + suffix

    if (progress < 1) requestAnimationFrame(tick)
  }

  requestAnimationFrame(tick)
}

export default function AdmissionFacts() {
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const statsEl = statsRef.current
    if (!statsEl) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return

          // Add class to trigger CSS fade-up animations
          statsEl.classList.add("af-counted")

          // Start counting animation on each number element
          const numEls = statsEl.querySelectorAll<HTMLElement>(".af-stat-num")
          numEls.forEach((el, i) => {
            const stat = stats[i]
            // Stagger start of each counter to match CSS delay
            setTimeout(() => {
              animateCount(el, stat.value, stat.suffix, 1800)
            }, i * 150)
          })

          // Only run once
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.3 }
    )

    observer.observe(statsEl)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <style>{STYLES}</style>

      <div className="af-outer">

        {/* Image */}
        <div className="af-img-container">
          <img
            src="https://www.primeleed.com/wp-content/uploads/2020/12/1544468-ID-1544468-little-groups-with-big-ideas.jpg"
            alt="Students in a group meeting"
            className="af-img"
          />
        </div>

        {/* FACTS */}
        <h2 className="af-facts">FACTS</h2>

        {/* Stats — ref attached here so observer watches the whole row */}
        <div className="af-stats" ref={statsRef}>
          {stats.map((stat) => (
            <div key={stat.label} className="af-stat">
              {/* data-value and data-suffix used by the counter */}
              <p className="af-stat-num">0{stat.suffix}</p>
              <p className="af-stat-lbl">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </>
  )
}