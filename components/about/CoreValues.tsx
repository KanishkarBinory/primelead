// components/about/CoreValues.tsx

'use client'

import { useEffect, useRef } from 'react'
import { ClipboardList, MessageSquare, CalendarCheck, LucideIcon } from 'lucide-react'
import CoreValueCard from './CoreValueCard'

const STYLES = `
  .cv-section {
    background-color: #ffffff;
    padding: 60px 20px 80px;
    box-sizing: border-box;
  }
  @media (min-width: 640px)  { .cv-section { padding: 72px 32px 96px; } }
  @media (min-width: 1024px) { .cv-section { padding: 80px 48px 100px; } }
  @media (min-width: 1440px) { .cv-section { padding: 100px 64px 120px; } }

  .cv-container {
    max-width: 1200px;
    margin: 0 auto;
  }
  @media (min-width: 1440px) { .cv-container { max-width: 1400px; } }

  .cv-intro {
    font-family: 'Work Sans', sans-serif;
    font-weight: 800;
    line-height: 1.5em;
    color: #1a1a1a;
    margin: 0 auto 48px auto;
    font-size: clamp(18px, 3vw, 26px);
    max-width: 1300px;
  }
  @media (min-width: 640px)  { .cv-intro { margin-bottom: 56px; } }
  @media (min-width: 1024px) { .cv-intro { margin-bottom: 64px; } }

  .cv-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0;
  }
  @media (min-width: 640px) {
    .cv-grid { grid-template-columns: repeat(3, 1fr); }
  }

  .cv-cell {
    padding: 28px 0;
    border-top: 1px solid #e0e0e0;
    box-sizing: border-box;
  }
  .cv-cell:first-child { border-top: none; padding-top: 0; }
  .cv-cell:last-child  { padding-bottom: 0; }

  @media (min-width: 640px) {
    .cv-cell { border-top: none; padding: 0; }
  }

  /* ── Card: fades + scales up on scroll ── */
  .cv-card-anim {
    opacity: 0;
    transform: scale(0.85);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  .cv-card-anim.visible {
    opacity: 1;
    transform: scale(1);
  }

  /* Card stagger — each card appears slightly after the previous */
  .cv-card-anim:nth-child(1) { transition-delay: 0s;    }
  .cv-card-anim:nth-child(2) { transition-delay: 0.15s; }
  .cv-card-anim:nth-child(3) { transition-delay: 0.3s;  }

  /* Icon stagger — icon pops in slightly after its own card */
  .cv-card-anim:nth-child(1) .cvc-icon { transition-delay: 0.2s;  }
  .cv-card-anim:nth-child(2) .cvc-icon { transition-delay: 0.35s; }
  .cv-card-anim:nth-child(3) .cvc-icon { transition-delay: 0.5s;  }
`

interface Value {
  icon: LucideIcon
  title: string
  description: string
}

const values: Value[] = [
  {
    icon: ClipboardList,
    title: 'You Apply',
    description:
      "Tell us a little about yourself and we'll help with the rest. Our convenient online application tool only takes 10 minutes to complete.",
  },
  {
    icon: MessageSquare,
    title: 'We Connect',
    description:
      'After you submit your application, an admissions representative will contact you and will help you to complete the process.',
  },
  {
    icon: CalendarCheck,
    title: 'You Get Ready',
    description:
      "Once you've completed your application and connected with an admissions representative, you're ready to create your schedule.",
  },
]

interface CoreValuesProps {
  introText?: string
}

export default function CoreValues({ introText }: CoreValuesProps) {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const grid = gridRef.current
    if (!grid) return

    const cards = grid.querySelectorAll<HTMLElement>('.cv-card-anim')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            cards.forEach((card) => card.classList.add('visible'))
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )

    observer.observe(grid)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <style>{STYLES}</style>
      <section className="cv-section">
        <div className="cv-container">

          {introText && (
            <p className="cv-intro">{introText}</p>
          )}

          <div className="cv-grid" ref={gridRef}>
            {values.map((value, index) => (
              <div key={value.title} className="cv-cell cv-card-anim">
                <CoreValueCard
                  icon={value.icon}
                  title={value.title}
                  description={value.description}
                  showLeftBorder={index === 1}
                  showRightBorder={index === 1}
                />
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  )
}