"use client";

import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  UserPlusIcon,
  HeadphonesIcon,
  SendIcon,
  GraduationCapIcon,
  CheckCircle2Icon,
  FileTextIcon,
  CheckIcon,
  SparklesIcon,
} from "lucide-react";

// ─── Brand Tokens ──────────────────────────────────────────────────────────────
const BRAND = "#149BB5";
const BRAND_LIGHT = "#e8f7fa";
const BRAND_MID = "#9dd9e5";

// ─── Stable confetti offsets — computed once at module level (not during render)
const CONFETTI_OFFSETS = [...Array(12)].map((_, i) => {
  // Deterministic spread using index so it's stable across renders
  const angle = (i / 12) * Math.PI * 2;
  const radius = 60 + (i % 3) * 30;
  return {
    x: Math.cos(angle) * radius,
    y: Math.sin(angle) * radius,
  };
});

// ─── VISUALS ───────────────────────────────────────────────────────────────────

function RegisterVisual() {
  const fields = [
    { label: "Full Name", value: "Sarah Johnson", delay: 0 },
    { label: "Email Address", value: "sarah@example.com", delay: 0.9 },
    { label: "Study Goals", value: "BSc Computer Science", delay: 1.8 },
  ];

  return (
    <div className="relative w-full max-w-sm mx-auto">
      <motion.div
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-8 -right-4 w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
        style={{ background: BRAND_LIGHT }}
      >
        <UserPlusIcon className="w-7 h-7" style={{ color: BRAND }} />
      </motion.div>

      <div className="bg-white rounded-2xl shadow-xl p-7 border border-slate-200">
        <h3 className="text-lg font-bold text-slate-900 mb-5">Contact Us</h3>

        <div className="space-y-4">
          {fields.map((field, i) => (
            <div key={i}>
              <label className="block text-sm font-semibold text-slate-500 uppercase tracking-wide mb-1.5">
                {field.label}
              </label>
              <div className="relative h-10 bg-slate-50 rounded-lg border border-slate-200 overflow-hidden">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: 0.9,
                    delay: field.delay,
                    repeat: Infinity,
                    repeatDelay: 2.1,
                  }}
                  className="absolute inset-0 rounded-lg"
                  style={{ background: BRAND_LIGHT, borderRight: `2px solid ${BRAND}` }}
                />
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    delay: field.delay + 0.6,
                    repeat: Infinity,
                    repeatDelay: 2.4,
                  }}
                  className="absolute inset-0 flex items-center px-3 text-sm font-medium text-slate-700"
                >
                  {field.value}
                </motion.span>
              </div>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            delay: 3.2,
            duration: 0.4,
            repeat: Infinity,
            repeatDelay: 0.8,
            type: "spring",
            stiffness: 200,
          }}
          className="mt-5 flex items-center gap-2"
          style={{ color: "#10b981" }}
        >
          <CheckCircle2Icon className="w-5 h-5" />
          <span className="text-sm font-semibold">Registration Complete!</span>
        </motion.div>
      </div>
    </div>
  );
}

function ConsultationVisual() {
  return (
    <div className="relative w-full max-w-sm mx-auto">
      <motion.div
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-5 right-8 w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
        style={{ background: BRAND_LIGHT }}
      >
        <HeadphonesIcon className="w-6 h-6" style={{ color: BRAND }} />
      </motion.div>

      <div className="space-y-3">
        {[
          { side: "left", speaker: "Your Advisor", text: "Let's explore your funding options together.", delay: 0 },
          { side: "right", speaker: "You", text: "What support is available to me?", delay: 1.5 },
          { side: "left", speaker: "Your Advisor", text: "Tuition support, maintenance funding, and grants!", delay: 3 },
        ].map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: msg.side === "left" ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: msg.delay, repeat: Infinity, repeatDelay: 3 }}
            className={`flex ${msg.side === "right" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`rounded-2xl px-5 py-3.5 max-w-[80%] shadow-md ${
                msg.side === "left"
                  ? "text-white rounded-tl-sm"
                  : "bg-white border border-slate-200 rounded-tr-sm"
              }`}
              style={msg.side === "left" ? { background: BRAND } : {}}
            >
              <p className={`text-sm font-semibold mb-1 ${msg.side === "left" ? "text-white/80" : "text-slate-500"}`}>
                {msg.speaker}
              </p>
              <p className={`text-sm ${msg.side === "right" ? "text-slate-700" : ""}`}>{msg.text}</p>
            </div>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 1.5, delay: 2.5, repeat: Infinity, repeatDelay: 2 }}
          className="flex justify-start"
        >
          <div className="rounded-2xl rounded-tl-sm px-4 py-2.5 shadow flex gap-1 items-center" style={{ background: BRAND }}>
            {[0, 1, 2].map((j) => (
              <motion.div
                key={j}
                className="w-1.5 h-1.5 bg-white rounded-full"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 0.8, delay: j * 0.2, repeat: Infinity }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function SubmissionVisual() {
  const docs = [
    { name: "Personal Details", delay: 0 },
    { name: "Course Information", delay: 0.8 },
    { name: "Financial Documents", delay: 1.6 },
  ];

  return (
    <div className="relative w-full max-w-sm mx-auto">
      <div className="bg-white rounded-2xl shadow-xl p-6 border-2" style={{ borderColor: BRAND }}>
        <div className="flex items-center gap-3 mb-5">
          <div className="w-11 h-11 rounded-lg flex items-center justify-center" style={{ background: BRAND_LIGHT }}>
            <SendIcon className="w-5 h-5" style={{ color: BRAND }} />
          </div>
          <div>
            <h4 className="font-bold text-slate-900 text-sm">Student Finance England</h4>
            <p className="text-sm text-slate-500">Application Portal</p>
          </div>
        </div>

        <div className="space-y-2.5">
          {docs.map((doc, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100"
            >
              <FileTextIcon className="w-4 h-4 text-slate-400 shrink-0" />
              <span className="text-sm text-slate-700 flex-1">{doc.name}</span>
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  delay: doc.delay + 0.5,
                  duration: 0.3,
                  repeat: Infinity,
                  repeatDelay: 2.5,
                  type: "spring",
                }}
                className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center shrink-0"
              >
                <CheckIcon className="w-3.5 h-3.5 text-white" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          initial={{ y: 60, opacity: 0, rotate: -8 }}
          animate={{ y: -100, opacity: [0, 1, 1, 0], rotate: 0 }}
          transition={{
            duration: 2.5,
            delay: i * 0.7,
            repeat: Infinity,
            repeatDelay: 1.2,
            ease: "easeOut",
          }}
          className="absolute bottom-0"
          style={{ left: `${35 + i * 12}%` }}
        >
          <div className="w-10 h-12 bg-white rounded shadow-lg border border-slate-200 flex items-center justify-center">
            <FileTextIcon className="w-5 h-5" style={{ color: BRAND }} />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function ApprovalVisual() {
  return (
    <div className="relative w-full max-w-sm mx-auto flex items-center justify-center">
      {/* Confetti — uses module-level stable offsets */}
      {CONFETTI_OFFSETS.map((offset, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, x: 0, y: 0, opacity: 1 }}
          animate={{
            scale: [0, 1, 1],
            x: [0, offset.x],
            y: [0, offset.y],
            opacity: [1, 1, 0],
          }}
          transition={{
            duration: 1.5,
            delay: 0.8 + i * 0.05,
            repeat: Infinity,
            repeatDelay: 2.5,
            ease: "easeOut",
          }}
          className="absolute w-2 h-2 rounded-full"
          style={{
            backgroundColor: i % 3 === 0 ? BRAND : i % 3 === 1 ? BRAND_MID : "#e0f5f9",
          }}
        />
      ))}

      <div className="relative z-10">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.3,
            repeat: Infinity,
            repeatDelay: 3.5,
            type: "spring",
            stiffness: 200,
          }}
          className="w-44 h-44 bg-white rounded-full shadow-2xl flex items-center justify-center relative"
          style={{ border: `4px solid ${BRAND}` }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6, duration: 0.4, repeat: Infinity, repeatDelay: 3.5, type: "spring" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <CheckCircle2Icon className="w-20 h-20" style={{ color: BRAND }} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.3, repeat: Infinity, repeatDelay: 3.5 }}
            className="absolute bottom-7 text-center"
          >
            <p className="text-sm font-bold uppercase tracking-widest" style={{ color: BRAND }}>
              Approved
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [-55, -75, -55], rotate: [-5, 5, -5] }}
          transition={{ duration: 3, delay: 1.2, repeat: Infinity, repeatDelay: 1.5, ease: "easeInOut" }}
          className="absolute -top-14 left-1/2 -translate-x-1/2 w-14 h-14 rounded-xl flex items-center justify-center shadow-xl"
          style={{ background: BRAND }}
        >
          <GraduationCapIcon className="w-8 h-8 text-white" />
        </motion.div>

        {[0, 1].map((i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 2, delay: 1.5 + i * 0.3, repeat: Infinity, repeatDelay: 2 }}
            className="absolute"
            style={{ top: i === 0 ? "20%" : "70%", left: i === 0 ? "5%" : "88%" }}
          >
            <SparklesIcon className="w-7 h-7" style={{ color: BRAND }} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ─── VISUAL MAP ────────────────────────────────────────────────────────────────
const VISUAL_MAP = {
  register: <RegisterVisual />,
  consultation: <ConsultationVisual />,
  submission: <SubmissionVisual />,
  approval: <ApprovalVisual />,
} as const;

// ─── STEPS DATA ────────────────────────────────────────────────────────────────
const STEPS = [
  {
    number: 1,
    title: "Register with Primeleed",
    description:
      "Tell us about your background and study goals. Our team will review your eligibility and guide you through the next steps.",
    icon: UserPlusIcon,
    visualType: "register" as const,
  },
  {
    number: 2,
    title: "Free Consultation",
    description:
      "Your personal advisor will identify the most suitable funding options available to you, including tuition support, maintenance funding and other grants.",
    icon: HeadphonesIcon,
    visualType: "consultation" as const,
  },
  {
    number: 3,
    title: "We Submit Your Application",
    description:
      "We help complete your Student Finance England application and ensure all required documents are uploaded correctly.",
    icon: SendIcon,
    visualType: "submission" as const,
  },
  {
    number: 4,
    title: "Approval & Enrolment",
    description:
      "Once your funding is approved, your university place can be confirmed. We also support students with future yearly applications when needed.",
    icon: GraduationCapIcon,
    visualType: "approval" as const,
  },
];

const AUTO_ADVANCE = 5000;

// ─── MOBILE STEP CARD (no animations — static accordion) ──────────────────────
function MobileStepCard({
  step,
  isActive,
  onClick,
}: {
  step: (typeof STEPS)[0];
  isActive: boolean;
  onClick: () => void;
}) {
  const Icon = step.icon;
  const num = step.number.toString().padStart(2, "0");

  return (
    <div
      onClick={onClick}
      className="rounded-2xl overflow-hidden border cursor-pointer transition-colors duration-200"
      style={{
        borderColor: isActive ? BRAND : "#e2e8f0",
        background: isActive ? BRAND_LIGHT : "white",
      }}
    >
      {/* Header row */}
      <div className="flex items-center gap-3 p-4">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0 transition-colors duration-200"
          style={{
            background: isActive ? BRAND : BRAND_LIGHT,
            color: isActive ? "white" : BRAND,
          }}
        >
          {num}
        </div>
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <Icon className="w-4 h-4 shrink-0" style={{ color: BRAND }} />
          <h3 className="font-semibold text-slate-800 text-sm truncate">{step.title}</h3>
        </div>
        <div
          className="shrink-0 text-slate-400 transition-transform duration-200"
          style={{ transform: isActive ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Expandable description — no animation on mobile */}
      {isActive && (
        <div className="px-4 pb-5">
          <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
        </div>
      )}
    </div>
  );
}

// ─── DESKTOP TAB ───────────────────────────────────────────────────────────────
function DesktopTab({
  step,
  index,
  isActive,
  onClick,
}: {
  step: (typeof STEPS)[0];
  index: number;
  isActive: boolean;
  onClick: () => void;
}) {
  const Icon = step.icon;
  const num = step.number.toString().padStart(2, "0");

  return (
    <motion.div
      role="tab"
      aria-selected={isActive}
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onClick(); }
      }}
      whileHover={!isActive ? { x: 3 } : {}}
      className="relative cursor-pointer rounded-xl p-5 transition-all duration-300 border-l-4"
      style={{
        borderLeftColor: isActive ? BRAND : "transparent",
        background: isActive ? "white" : "transparent",
        boxShadow: isActive ? "0 4px 24px rgba(20,155,181,0.10)" : "none",
      }}
    >
      <div className="flex items-start gap-4">
        {/* Number badge */}
        <motion.div
          animate={{
            backgroundColor: isActive ? BRAND : BRAND_LIGHT,
            scale: isActive ? 1.05 : 1,
          }}
          transition={{ duration: 0.3 }}
          className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border-2"
          style={{ borderColor: BRAND }}
        >
          <motion.span
            animate={{ color: isActive ? "white" : BRAND }}
            transition={{ duration: 0.3 }}
          >
            {num}
          </motion.span>
        </motion.div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <Icon className="w-4 h-4 shrink-0" style={{ color: BRAND }} />
            <motion.h3
              animate={{ color: isActive ? "#0f172a" : "#475569", fontWeight: isActive ? 700 : 600 }}
              transition={{ duration: 0.3 }}
              className="text-base"
            >
              {step.title}
            </motion.h3>
          </div>

          <AnimatePresence initial={false}>
            {isActive && (
              <motion.p
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="text-sm text-slate-500 leading-relaxed overflow-hidden mt-2"
              >
                {step.description}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Progress bar */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-slate-100 overflow-hidden rounded-b-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              key={`d-progress-${index}`}
              className="h-full"
              style={{ background: BRAND }}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: AUTO_ADVANCE / 1000, ease: "linear" }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── MAIN SECTION ──────────────────────────────────────────────────────────────
export function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const advance = useCallback(() => {
    setActiveStep((prev) => (prev + 1) % STEPS.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(advance, AUTO_ADVANCE);
    return () => clearInterval(id);
  }, [isPaused, advance]);

  const pause = () => setIsPaused(true);
  const resume = () => setIsPaused(false);

  return (
    <section
      className="w-full bg-white py-16 md:py-28 px-4 sm:px-8 md:px-12 lg:px-24"
      aria-labelledby="process-heading"
    >
      <div className="max-w-6xl mx-auto">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-20"
        >
          <h2
            id="process-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight leading-tight"
          >
            How Our Support Process Works
          </h2>
          <p className="text-base md:text-lg text-slate-500 max-w-xl mx-auto">
            A simple, guided journey from registration to enrolment.
          </p>
        </motion.div>

        {/* ── MOBILE LAYOUT (< md) — static cards, no animations ── */}
        <div className="flex flex-col gap-3 md:hidden">
          {STEPS.map((step, i) => (
            <MobileStepCard
              key={step.number}
              step={step}
              isActive={activeStep === i}
              onClick={() => {
                setActiveStep(i);
                setIsPaused(true);
              }}
            />
          ))}
        </div>

        {/* ── DESKTOP LAYOUT (≥ md) ── */}
        <div
          className="hidden md:grid md:grid-cols-12 gap-10 items-start"
          onMouseEnter={pause}
          onMouseLeave={resume}
        >
          {/* Visual panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-7"
          >
            <div
              className="relative w-full aspect-square md:aspect-auto md:h-120 lg:h-135 rounded-3xl border border-slate-200 overflow-hidden flex items-center justify-center p-8 md:p-12"
              style={{ background: `linear-gradient(135deg, #f8fdfe, ${BRAND_LIGHT})` }}
            >
              {/* Decorative ring */}
              <div
                className="absolute inset-6 rounded-2xl opacity-20 pointer-events-none"
                style={{ border: `1px dashed ${BRAND}` }}
              />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, scale: 0.88, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.88, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="w-full h-full flex items-center justify-center"
                >
                  {VISUAL_MAP[STEPS[activeStep].visualType]}
                </motion.div>
              </AnimatePresence>

              {/* Step label badge */}
              <div
                className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-sm font-bold text-white"
                style={{ background: BRAND }}
              >
                Step {STEPS[activeStep].number} of {STEPS.length}
              </div>
            </div>
          </motion.div>

          {/* Tab list */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-5 space-y-3"
            role="tablist"
            aria-label="Process steps"
          >
            {STEPS.map((step, i) => (
              <DesktopTab
                key={step.number}
                step={step}
                index={i}
                isActive={activeStep === i}
                onClick={() => { setActiveStep(i); setIsPaused(true); }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;