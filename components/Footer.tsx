import Image from "next/image";
import Link from "next/link";

const MENU_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Admission", href: "/admission" },
];

const INFO_LINKS = [
  { label: "How To Apply", href: "/admission/how-to-apply" },
  { label: "Request Info", href: "/support/request-info" },
  { label: "Support & Guidance", href: "/support/guidance" },
];

const QUICK_LINKS = [
  { label: "Apply Now", href: "/admission/form" },
  { label: "Financial Aid", href: "/admission/financial-aid" },
  { label: "Blog", href: "/blog" },
];

const SOCIAL = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" fill="white" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
        <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
        <polygon
          points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"
          fill="#1a2e3b"
        />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="white" stroke="none" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer>
      {/* ── Yellow top bar ── */}
      <div
        className="w-full"
        style={{ height: "8px", backgroundColor: "#F5C400" }}
      />

      {/* ── Main footer — light grey ── */}
      <div className="w-full" style={{ backgroundColor: "#f0f2f4" }}>
        <div
          className="max-w-7xl mx-auto px-7
                     grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
                     gap-10 lg:gap-8"
          style={{ paddingTop: "56px", paddingBottom: "56px" }}
        >
          {/* Col 1: Logo + address + contact */}
          <div className="flex flex-col gap-5">
            <Link href="/" aria-label="Primeleed home">
              <Image
                src="/logo.png"
                alt="Primeleed"
                width={150}
                height={60}
                className="object-contain"
              />
            </Link>
            <address
              className="not-italic leading-relaxed"
              style={{ fontSize: "14px", color: "#3d4f5e" }}
            >
              1 Woodlands Grove,
              <br />
              Stapleford Abbotts, Romford,
              <br />
              RM4 1FB
            </address>
            <a
              href="tel:02080043779"
              className="flex items-center gap-2 font-semibold hover:opacity-75 transition-opacity"
              style={{ fontSize: "14px", color: "#1a2e3b" }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              020 8004 3779
            </a>
            <a
              href="mailto:info@primeleed.com"
              className="flex items-center gap-2 hover:opacity-75 transition-opacity"
              style={{ fontSize: "14px", color: "#1a2e3b" }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              info@primeleed.com
            </a>
          </div>

          {/* Col 2: Menu */}
          <div className="flex flex-col gap-5">
            <h4
              className="font-bold uppercase tracking-widest"
              style={{ fontSize: "12px", color: "#1a2e3b" }}
            >
              Menu
            </h4>
            <nav className="flex flex-col gap-3">
              {MENU_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:opacity-75 transition-opacity"
                  style={{ fontSize: "15px", color: "#3d4f5e" }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Col 3: Info */}
          <div className="flex flex-col gap-5">
            <h4
              className="font-bold uppercase tracking-widest"
              style={{ fontSize: "12px", color: "#1a2e3b" }}
            >
              Info
            </h4>
            <nav className="flex flex-col gap-3">
              {INFO_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:opacity-75 transition-opacity"
                  style={{ fontSize: "15px", color: "#3d4f5e" }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Col 4: Quick Links */}
          <div className="flex flex-col gap-5">
            <h4
              className="font-bold uppercase tracking-widest"
              style={{ fontSize: "12px", color: "#1a2e3b" }}
            >
              Quick Links
            </h4>
            <nav className="flex flex-col gap-3">
              {QUICK_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:opacity-75 transition-opacity"
                  style={{ fontSize: "15px", color: "#3d4f5e" }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* ── Social bar — dark ── */}
      <div
        className="w-full flex items-center justify-center gap-8"
        style={{
          backgroundColor: "#1e1e1e",
          paddingTop: "32px",
          paddingBottom: "32px",
        }}
      >
        {SOCIAL.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className="hover:opacity-70 transition-opacity"
          >
            {s.icon}
          </a>
        ))}
      </div>

      {/* ── Copyright bar ── */}
      <div
        className="w-full"
        style={{
          backgroundColor: "#161616",
          paddingTop: "20px",
          paddingBottom: "20px",
        }}
      >
        <div
          className="max-w-7xl mx-auto px-7
                     flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p style={{ fontSize: "13px", color: "#7a8a96" }}>
            Copyright © 2026 Prime Leed. All rights reserved. Designed by
            VDesign
          </p>
          <div className="flex items-center gap-8">
            {[
              { label: "Cookies", href: "/cookies" },
              { label: "Terms & Conditions", href: "/terms" },
              { label: "Privacy Policy", href: "/privacy" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:opacity-75 transition-opacity"
                style={{ fontSize: "13px", color: "#7a8a96" }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
