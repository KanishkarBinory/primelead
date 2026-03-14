"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef, useCallback } from "react";

const LOGOS = [
  {
    id: "c1",
    src: "/c1_logo.png",
    alt: "Partner 1",
    href: "https://www.southampton.ac.uk",
  },
  {
    id: "c2",
    src: "/c2_logo.png",
    alt: "Partner 2",
    href: "https://www.qa.com",
  },
  {
    id: "c3",
    src: "/c3_logo.png",
    alt: "Partner 3",
    href: "https://www.swansea.ac.uk",
  },
  {
    id: "c4",
    src: "/c4_logo.png",
    alt: "Partner 4",
    href: "https://www.ulster.ac.uk",
  },
  {
    id: "c5",
    src: "/c5_logo.png",
    alt: "Partner 5",
    href: "https://www.regents.ac.uk",
  },
  {
    id: "c6",
    src: "/c6_logo.png",
    alt: "Partner 6",
    href: "https://www.london.ac.uk",
  },
  {
    id: "c7",
    src: "/c7_logo.png",
    alt: "Partner 7",
    href: "https://www.manchester.ac.uk",
  },
  {
    id: "c8",
    src: "/c8_logo.png",
    alt: "Partner 8",
    href: "https://www.birmingham.ac.uk",
  },
  {
    id: "c9",
    src: "/c9_logo.png",
    alt: "Partner 9",
    href: "https://www.cardiff.ac.uk",
  },
  {
    id: "c10",
    src: "/c10_logo.png",
    alt: "Partner 10",
    href: "https://www.exeter.ac.uk",
  },
  {
    id: "c11",
    src: "/c11_logo.png",
    alt: "Partner 11",
    href: "https://www.bristol.ac.uk",
  },
  {
    id: "c12",
    src: "/c12_logo.png",
    alt: "Partner 12",
    href: "https://www.leeds.ac.uk",
  },
];

const ITEMS_PER_VIEW = 4;
const TOTAL_SLIDES = LOGOS.length - ITEMS_PER_VIEW + 1; // 9
const AUTO_INTERVAL = 3000;
const DRAG_THRESHOLD = 50;

export default function LogoCarousel() {
  const [current, setCurrent] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  // Fix 1: store trackWidth in state, updated via ResizeObserver — never read ref during render
  const [trackWidth, setTrackWidth] = useState(0);

  const timerRef = useRef<ReturnType<typeof setInterval> | undefined>(
    undefined,
  );
  const trackRef = useRef<HTMLDivElement>(null);
  const dragStart = useRef<number>(0);
  const dragged = useRef<boolean>(false);

  // ── Measure track width via ResizeObserver (not during render) ──
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    setTrackWidth(el.offsetWidth);
    const ro = new ResizeObserver(() => setTrackWidth(el.offsetWidth));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // ── Auto-advance ──
  const startTimer = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c >= TOTAL_SLIDES - 1 ? 0 : c + 1));
    }, AUTO_INTERVAL);
  }, []);

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, [startTimer]);

  // Fix 2: proper named functions, no unused expressions
  const goTo = useCallback(
    (index: number) => {
      setCurrent(Math.max(0, Math.min(TOTAL_SLIDES - 1, index)));
      startTimer();
    },
    [startTimer],
  );

  const prev = useCallback(() => {
    goTo(current === 0 ? TOTAL_SLIDES - 1 : current - 1);
  }, [current, goTo]);

  const next = useCallback(() => {
    goTo(current >= TOTAL_SLIDES - 1 ? 0 : current + 1);
  }, [current, goTo]);

  // ── Drag handlers ──
  const onDragStart = useCallback((clientX: number) => {
    clearInterval(timerRef.current);
    dragStart.current = clientX;
    dragged.current = false;
    setIsDragging(true);
    setDragOffset(0);
  }, []);

  const onDragMove = useCallback((clientX: number) => {
    setIsDragging((dragging) => {
      if (!dragging) return dragging;
      const delta = clientX - dragStart.current;
      if (Math.abs(delta) > 4) dragged.current = true;
      setDragOffset(delta);
      return dragging;
    });
  }, []);

  const onDragEnd = useCallback(
    (clientX: number) => {
      setIsDragging((dragging) => {
        if (!dragging) return dragging;
        const delta = clientX - dragStart.current;
        setDragOffset(0);
        if (Math.abs(delta) >= DRAG_THRESHOLD) {
          setCurrent((c) => {
            const next =
              delta < 0
                ? c >= TOTAL_SLIDES - 1
                  ? 0
                  : c + 1
                : c === 0
                  ? TOTAL_SLIDES - 1
                  : c - 1;
            return next;
          });
        }
        startTimer();
        return false;
      });
    },
    [startTimer],
  );

  // Mouse events
  const onMouseDown = (e: React.MouseEvent) => onDragStart(e.clientX);
  const onMouseMove = (e: React.MouseEvent) => onDragMove(e.clientX);
  const onMouseUp = (e: React.MouseEvent) => onDragEnd(e.clientX);
  const onMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      setDragOffset(0);
      startTimer();
    }
  };

  // Touch events
  const onTouchStart = (e: React.TouchEvent) =>
    onDragStart(e.touches[0].clientX);
  const onTouchMove = (e: React.TouchEvent) => onDragMove(e.touches[0].clientX);
  const onTouchEnd = (e: React.TouchEvent) =>
    onDragEnd(e.changedTouches[0].clientX);

  const onLinkClick = (e: React.MouseEvent) => {
    if (dragged.current) e.preventDefault();
  };

  // ── Offset calculation — uses trackWidth STATE, not ref ──
  const slotPx = trackWidth / ITEMS_PER_VIEW;
  const baseOffset = -(current * slotPx);
  const totalOffset = baseOffset + (isDragging ? dragOffset : 0);

  return (
    <section
      className="w-full bg-white"
      style={{ paddingTop: "52px", paddingBottom: "52px" }}
    >
      <div className="max-w-7xl mx-auto px-7">
        <div
          className="flex items-center"
          style={{ gap: "5px" }}
          onMouseLeave={onMouseLeave}
        >
          {/* Left arrow — Fix 3: shrink-0 not flex-shrink-0 */}
          <button
            onClick={prev}
            aria-label="Previous"
            className="shrink-0 flex items-center justify-center
                       text-[#999] hover:text-[#1a2e3b] transition-colors duration-200"
            style={{ width: "28px", height: "28px" }}
          >
            <svg width="9" height="16" viewBox="0 0 9 16" fill="none">
              <path
                d="M8 1L1 8l7 7"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Track */}
          <div
            ref={trackRef}
            className="flex-1 overflow-hidden"
            style={{ cursor: isDragging ? "grabbing" : "grab" }}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div
              className="flex"
              style={{
                transform: `translateX(${totalOffset}px)`,
                transition: isDragging
                  ? "none"
                  : "transform 0.45s cubic-bezier(0.4,0,0.2,1)",
                willChange: "transform",
                userSelect: "none",
              }}
            >
              {LOGOS.map((logo) => (
                <div
                  key={logo.id}
                  style={{ width: `${100 / ITEMS_PER_VIEW}%`, flexShrink: 0 }}
                  className="flex items-center justify-center px-2"
                >
                  <Link
                    href={logo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onLinkClick}
                    className="flex items-center justify-center w-full
                               opacity-80 hover:opacity-100 transition-opacity duration-200"
                    style={{
                      height: "100px",
                      pointerEvents: isDragging ? "none" : "auto",
                    }}
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={220}
                      height={120}
                      draggable={false}
                      className="object-contain w-auto select-none"
                      style={{ maxHeight: "120px" }}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Right arrow */}
          <button
            onClick={next}
            aria-label="Next"
            className="shrink-0 flex items-center justify-center
                       text-[#999] hover:text-[#1a2e3b] transition-colors duration-200"
            style={{ width: "28px", height: "28px" }}
          >
            <svg width="9" height="16" viewBox="0 0 9 16" fill="none">
              <path
                d="M1 1l7 7-7 7"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Dots */}
        <div
          className="flex items-center justify-center gap-2"
          style={{ marginTop: "28px" }}
        >
          {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Slide ${i + 1}`}
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                backgroundColor: i === current ? "#1a2e3b" : "#c5c9ce",
                border: "none",
                padding: 0,
                cursor: "pointer",
                transform: i === current ? "scale(1.2)" : "scale(1)",
                transition: "background-color 0.2s, transform 0.2s",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
