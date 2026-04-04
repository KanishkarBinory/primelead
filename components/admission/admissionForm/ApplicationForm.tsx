"use client";
// components/admission/admissionForm/ApplicationForm.tsx
//
// Style updated to exactly match image 2:
// - White inputs with light gray border
// - Red asterisks on required fields
// - Section headings: "Personal Information", "Address Information"
// - Phone field with country flag + code dropdown
// - All original content/fields/validation preserved

import { useState, useRef } from "react";
import { parsePhoneNumberFromString } from "libphonenumber-js";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  countryCode: string;
  dateOfBirth: string;
  studentType: string;
  address: string;
  school: string;
  yearOfCompletion: string;
  highestQualification: string;
  currentStatus: string;
  areaOfStudy: string;
  degreeLevel: string;
  passportFile: File | null;
  cvFile: File | null;
  howDidYouFindUs: string;
  fullName: string;
  additionalInfo: string;
  privacyAccepted: boolean;
}

const STEPS = [
  { number: 1, title: "Applicant Details" },
  { number: 2, title: "Education Records & Achievements" },
  { number: 3, title: "Education Details" },
  { number: 4, title: "Documentation" },
  { number: 5, title: "Declaration" },
];

// Countries list for flag dropdown — same layout as image 2
const COUNTRIES = [
  { code: "+44", flag: "🇬🇧", iso: "GB" },
  { code: "+1",  flag: "🇺🇸", iso: "US" },
  { code: "+61", flag: "🇦🇺", iso: "AU" },
  { code: "+91", flag: "🇮🇳", iso: "IN" },
  { code: "+92", flag: "🇵🇰", iso: "PK" },
  { code: "+94", flag: "🇱🇰", iso: "LK" },
  { code: "+880",flag: "🇧🇩", iso: "BD" },
  { code: "+33", flag: "🇫🇷", iso: "FR" },
  { code: "+49", flag: "🇩🇪", iso: "DE" },
  { code: "+39", flag: "🇮🇹", iso: "IT" },
  { code: "+34", flag: "🇪🇸", iso: "ES" },
  { code: "+31", flag: "🇳🇱", iso: "NL" },
  { code: "+63", flag: "🇵🇭", iso: "PH" },
  { code: "+60", flag: "🇲🇾", iso: "MY" },
  { code: "+65", flag: "🇸🇬", iso: "SG" },
  { code: "+971",flag: "🇦🇪", iso: "AE" },
  { code: "+966",flag: "🇸🇦", iso: "SA" },
  { code: "+20", flag: "🇪🇬", iso: "EG" },
  { code: "+234",flag: "🇳🇬", iso: "NG" },
  { code: "+27", flag: "🇿🇦", iso: "ZA" },
  { code: "+55", flag: "🇧🇷", iso: "BR" },
  { code: "+52", flag: "🇲🇽", iso: "MX" },
  { code: "+81", flag: "🇯🇵", iso: "JP" },
  { code: "+82", flag: "🇰🇷", iso: "KR" },
  { code: "+86", flag: "🇨🇳", iso: "CN" },
];

// ── Shared style objects matching image 2 exactly ─────────────────

// White bg, light border, slight radius — matches image 2
const inp: React.CSSProperties = {
  width: "100%",
  padding: "13px 16px",
  border: "1px solid #dde1e7",
  backgroundColor: "#f4f6f8",
  fontFamily: "'Inter', sans-serif",
  fontSize: "15px",
  color: "#292929",
  outline: "none",
  borderRadius: "4px",
  boxSizing: "border-box" as const,
  transition: "border-color 0.2s",
};

// Label style — same weight as image 2
const lbl: React.CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  fontSize: "14px",
  fontWeight: "400",
  color: "#292929",
  marginBottom: "7px",
  display: "block",
};

// Red asterisk required marker
const Req = () => (
  <span style={{ color: "#e53e3e", marginLeft: "2px", fontWeight: 600 }}>*</span>
);

// Error text
const err: React.CSSProperties = {
  fontSize: "12px",
  color: "#e53e3e",
  fontFamily: "'Inter', sans-serif",
  marginTop: "4px",
  display: "block",
};

// Two-column row
const row: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "20px",
};

// Field wrapper
const fw: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
};

// Section heading — "Personal Information" style from image 2
const secHead: React.CSSProperties = {
  fontFamily: "'Work Sans', sans-serif",
  fontSize: "20px",
  fontWeight: "700",
  color: "#292929",
  marginBottom: "20px",
  marginTop: "4px",
};

// Navigation button — dark, matching image 1 "Next" button
const navBtn: React.CSSProperties = {
  padding: "13px 30px",
  backgroundColor: "#292929",
  color: "#ffffff",
  border: "none",
  fontFamily: "'Inter', sans-serif",
  fontSize: "15px",
  fontWeight: "400",
  cursor: "pointer",
  borderRadius: "4px",
  letterSpacing: "0.01em",
  transition: "background-color 0.2s",
};

export default function ApplicationForm() {
  const [step,      setStep]      = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [errors,    setErrors]    = useState<Record<string, string>>({});
  const [focused,   setFocused]   = useState("");

  const [form, setForm] = useState<FormData>({
    firstName: "", lastName: "", email: "", phone: "",
    countryCode: "+44",
    dateOfBirth: "", studentType: "", address: "",
    school: "", yearOfCompletion: "", highestQualification: "", currentStatus: "",
    areaOfStudy: "", degreeLevel: "",
    passportFile: null, cvFile: null, howDidYouFindUs: "",
    fullName: "", additionalInfo: "", privacyAccepted: false,
  });

  const passportRef = useRef<HTMLInputElement>(null);
  const cvRef       = useRef<HTMLInputElement>(null);

  const set = (field: keyof FormData, value: string | boolean | File | null) => {
    setForm(p => ({ ...p, [field]: value }));
    setErrors(p => { const n = { ...p }; delete n[field]; return n; });
  };

  // Focused border highlight
  const fi = (fieldName: string): React.CSSProperties => ({
    ...inp,
    borderColor: focused === fieldName ? "#149AB5" : errors[fieldName] ? "#e53e3e" : "#dde1e7",
    boxShadow:   focused === fieldName ? "0 0 0 3px rgba(20,154,181,0.1)" : "none",
  });

  const validate = () => {
    const e: Record<string, string> = {};
    if (step === 1) {
      if (!form.firstName.trim()) e.firstName = "First name is required";
      if (!form.lastName.trim())  e.lastName  = "Last name is required";
      if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email is required";
      if (!form.phone.trim()) {
        e.phone = "Phone number is required";
      } else {
        const parsed = parsePhoneNumberFromString(form.countryCode + form.phone.replace(/^0/, ""));
        if (!parsed || !parsed.isValid()) e.phone = "Please enter a valid phone number";
      }
      if (!form.dateOfBirth)    e.dateOfBirth  = "Date of birth is required";
      if (!form.studentType)    e.studentType  = "Please select a student type";
      if (!form.address.trim()) e.address      = "Address is required";
    }
    if (step === 2) {
      if (!form.school.trim())               e.school               = "Required";
      if (!form.yearOfCompletion.trim())      e.yearOfCompletion     = "Required";
      if (!form.highestQualification.trim()) e.highestQualification = "Required";
      if (!form.currentStatus)               e.currentStatus        = "Please select";
    }
    if (step === 3) {
      if (!form.areaOfStudy) e.areaOfStudy = "Please select";
      if (!form.degreeLevel) e.degreeLevel = "Please select";
    }
    if (step === 4) {
      if (!form.passportFile)    e.passportFile    = "Required";
      if (!form.cvFile)          e.cvFile          = "Required";
      if (!form.howDidYouFindUs) e.howDidYouFindUs = "Please select";
    }
    if (step === 5) {
      if (!form.fullName.trim()) e.fullName        = "Required";
      if (!form.privacyAccepted) e.privacyAccepted = "You must accept the privacy policy";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next   = () => { if (validate()) { setStep(s => s + 1); window.scrollTo({ top: 0, behavior: "smooth" }); } };
  const prev   = () => { setStep(s => s - 1); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const submit = () => { if (validate()) setSubmitted(true); };

  // ── Custom select with chevron ─────────────────────────────────
  const Sel = ({
    value, onChange, children, fieldName,
  }: {
    value: string; onChange: (v: string) => void;
    children: React.ReactNode; fieldName: string;
  }) => (
    <div style={{ position: "relative" }}>
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        onFocus={() => setFocused(fieldName)}
        onBlur={() => setFocused("")}
        style={{ ...fi(fieldName), paddingRight: "40px", cursor: "pointer", appearance: "none" as const }}
      >
        {children}
      </select>
      <div style={{ position: "absolute", right: "14px", top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}>
        <svg width="11" height="7" viewBox="0 0 11 7" fill="none">
          <path d="M1 1L5.5 6L10 1" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      {errors[fieldName] && <span style={err}>{errors[fieldName]}</span>}
    </div>
  );

  // ── Phone field — flag + code dropdown + number input (image 2 style) ──
  const PhoneField = () => {
    const selected = COUNTRIES.find(c => c.code === form.countryCode) || COUNTRIES[0];
    return (
      <div>
        <div style={{
          display: "flex",
          border: `1px solid ${focused === "phone" ? "#149AB5" : errors.phone ? "#e53e3e" : "#dde1e7"}`,
          borderRadius: "4px",
          overflow: "hidden",
          backgroundColor: "#f4f6f8",
          boxShadow: focused === "phone" ? "0 0 0 3px rgba(20,154,181,0.1)" : "none",
          transition: "border-color 0.2s, box-shadow 0.2s",
        }}>
          {/* Flag + code selector — matches image 2 "🇬🇧 · +44" style */}
          <div style={{ position: "relative", flexShrink: 0 }}>
            <select
              value={form.countryCode}
              onChange={e => set("countryCode", e.target.value)}
              style={{
                padding: "13px 30px 13px 12px",
                border: "none",
                borderRight: "1px solid #dde1e7",
                backgroundColor: "#eef1f4",
                fontFamily: "'Inter', sans-serif",
                fontSize: "14px",
                color: "#292929",
                outline: "none",
                cursor: "pointer",
                appearance: "none" as const,
                minWidth: "100px",
              }}
            >
              {COUNTRIES.map(c => (
                <option key={c.code + c.iso} value={c.code}>
                  {c.flag}  {c.code}
                </option>
              ))}
            </select>
            {/* Chevron */}
            <div style={{ position: "absolute", right: "8px", top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}>
              <svg width="9" height="6" viewBox="0 0 9 6" fill="none">
                <path d="M1 1L4.5 5L8 1" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {/* Number input */}
          <input
            type="tel"
            placeholder="7700 900000"
            value={form.phone}
            onChange={e => set("phone", e.target.value)}
            onFocus={() => setFocused("phone")}
            onBlur={() => setFocused("")}
            style={{
              flex: 1,
              padding: "13px 16px",
              border: "none",
              backgroundColor: "transparent",
              fontFamily: "'Inter', sans-serif",
              fontSize: "15px",
              color: "#292929",
              outline: "none",
            }}
          />
        </div>
        {errors.phone && <span style={err}>{errors.phone}</span>}
      </div>
    );
  };

  return (
    <section style={{ backgroundColor: "#ffffff", padding: "40px 20px 80px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Intro text */}
        <p style={{
          fontFamily: "'Inter', sans-serif", fontSize: "16px", color: "#545454",
          lineHeight: "1.7em", textAlign: "center", marginBottom: "40px",
        }}>
          Seeking guidance on your higher education, or looking to secure your Masters at
          <br />a top university? Start your application today.
        </p>

        {/* ── PROGRESS BAR — green circles ── */}
        <div style={{ position: "relative", marginBottom: "48px" }}>
          <div style={{ position: "absolute", top: "18px", left: "18px", right: "18px", height: "2px", backgroundColor: "#e0e0e0", zIndex: 0 }} />
          <div style={{ position: "absolute", top: "18px", left: "18px", width: `${((step - 1) / 4) * 100}%`, height: "2px", backgroundColor: "#22c55e", zIndex: 1, transition: "width 0.4s ease" }} />
          <div style={{ display: "flex", justifyContent: "space-between", position: "relative", zIndex: 2 }}>
            {STEPS.map(s => {
              const done = s.number < step;
              const cur  = s.number === step;
              return (
                <div key={s.number} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div style={{
                    width: "36px", height: "36px", borderRadius: "50%",
                    backgroundColor: done || cur ? "#22c55e" : "#ffffff",
                    border: `2px solid ${done || cur ? "#22c55e" : "#d0d0d0"}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    transition: "all 0.3s",
                  }}>
                    {done
                      ? <svg width="14" height="11" viewBox="0 0 14 11" fill="none"><path d="M1.5 5.5L5 9L12.5 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      : <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "13px", fontWeight: "600", color: cur ? "#fff" : "#aaa" }}>{s.number}</span>
                    }
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Step title */}
        <h2 style={{ fontFamily: "'Work Sans',sans-serif", fontSize: "22px", fontWeight: "700", color: "#292929", marginBottom: "32px" }}>
          {STEPS[step - 1].title}
        </h2>

        {/* ════════ STEP 1 — Applicant Details ════════ */}
        {step === 1 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>

            {/* ── Personal Information section ── */}
            <div>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

                <div style={row}>
                  <div style={fw}>
                    <label style={lbl}>First name <Req /></label>
                    <input style={fi("firstName")} type="text" placeholder="Enter first name"
                      value={form.firstName} onChange={e => set("firstName", e.target.value)}
                      onFocus={() => setFocused("firstName")} onBlur={() => setFocused("")} />
                    {errors.firstName && <span style={err}>{errors.firstName}</span>}
                  </div>
                  <div style={fw}>
                    <label style={lbl}>Last name <Req /></label>
                    <input style={fi("lastName")} type="text" placeholder="Enter last name"
                      value={form.lastName} onChange={e => set("lastName", e.target.value)}
                      onFocus={() => setFocused("lastName")} onBlur={() => setFocused("")} />
                    {errors.lastName && <span style={err}>{errors.lastName}</span>}
                  </div>
                </div>

                <div style={row}>
                  <div style={fw}>
                    <label style={lbl}>Email address <Req /></label>
                    <input style={fi("email")} type="email" placeholder="Enter email address"
                      value={form.email} onChange={e => set("email", e.target.value)}
                      onFocus={() => setFocused("email")} onBlur={() => setFocused("")} />
                    {errors.email && <span style={err}>{errors.email}</span>}
                  </div>
                  <div style={fw}>
                    <label style={lbl}>Phone number <Req /></label>
                    <PhoneField />
                  </div>
                </div>

                <div style={{ ...row, gridTemplateColumns: "1fr" }}>
                  <div style={fw}>
                    <label style={lbl}>Date of birth <Req /></label>
                    <input style={fi("dateOfBirth")} type="date" value={form.dateOfBirth}
                      onChange={e => set("dateOfBirth", e.target.value)}
                      onFocus={() => setFocused("dateOfBirth")} onBlur={() => setFocused("")} />
                    {errors.dateOfBirth && <span style={err}>{errors.dateOfBirth}</span>}
                  </div>
                </div>

              </div>
            </div>

            {/* ── Address Information section ── */}
            <div>
              <h3 style={secHead}>Address Information</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

                <div style={fw}>
                  <label style={lbl}>Address <Req /></label>
                  <textarea
                    style={{ ...fi("address"), minHeight: "80px", resize: "vertical" }}
                    placeholder="Enter your address"
                    value={form.address}
                    onChange={e => set("address", e.target.value)}
                    onFocus={() => setFocused("address")}
                    onBlur={() => setFocused("")}
                  />
                  {errors.address && <span style={err}>{errors.address}</span>}
                </div>

              </div>
            </div>

            {/* ── Other section ── */}
            <div>
              <h3 style={secHead}>Other</h3>
              <div style={fw}>
                <label style={lbl}>Student type <Req /></label>
                <Sel value={form.studentType} onChange={v => set("studentType", v)} fieldName="studentType">
                  <option value="">Please select</option>
                  <option>UK Citizen</option>
                  <option>EU Citizen</option>
                  <option>International / Foreign Student</option>
                  <option>U.S. Permanent Resident (Green Card Holder)</option>
                  <option>International Student Transferring Within UK/EU</option>
                </Sel>
              </div>
            </div>

          </div>
        )}

        {/* ════════ STEP 2 — Education Records ════════ */}
        {step === 2 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <h3 style={secHead}>Academic Background</h3>
            <div style={row}>
              <div style={fw}>
                <label style={lbl}>School <Req /></label>
                <input style={fi("school")} type="text" placeholder="Enter here"
                  value={form.school} onChange={e => set("school", e.target.value)}
                  onFocus={() => setFocused("school")} onBlur={() => setFocused("")} />
                {errors.school && <span style={err}>{errors.school}</span>}
              </div>
              <div style={fw}>
                <label style={lbl}>Year of completion <Req /></label>
                <input style={fi("yearOfCompletion")} type="text" placeholder="e.g. 2022"
                  value={form.yearOfCompletion} onChange={e => set("yearOfCompletion", e.target.value)}
                  onFocus={() => setFocused("yearOfCompletion")} onBlur={() => setFocused("")} />
                {errors.yearOfCompletion && <span style={err}>{errors.yearOfCompletion}</span>}
              </div>
            </div>
            <div style={row}>
              <div style={fw}>
                <label style={lbl}>Highest qualification <Req /></label>
                <input style={fi("highestQualification")} type="text"
                  placeholder="Highest qualification achieved or currently completing?"
                  value={form.highestQualification} onChange={e => set("highestQualification", e.target.value)}
                  onFocus={() => setFocused("highestQualification")} onBlur={() => setFocused("")} />
                {errors.highestQualification && <span style={err}>{errors.highestQualification}</span>}
              </div>
              <div style={fw}>
                <label style={lbl}>Current status <Req /></label>
                <Sel value={form.currentStatus} onChange={v => set("currentStatus", v)} fieldName="currentStatus">
                  <option value="">Please select</option>
                  <option>Studying</option>
                  <option>Working</option>
                  <option>Other</option>
                </Sel>
              </div>
            </div>
          </div>
        )}

        {/* ════════ STEP 3 — Education Details ════════ */}
        {step === 3 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <h3 style={secHead}>Study Preferences</h3>
            <div style={row}>
              <div style={fw}>
                <label style={lbl}>Select area of study <Req /></label>
                <Sel value={form.areaOfStudy} onChange={v => set("areaOfStudy", v)} fieldName="areaOfStudy">
                  <option value="">Please select</option>
                  <option>Business & Administration</option>
                  <option>Computer Science & A.I.</option>
                  <option>Accounting and Finance</option>
                  <option>Art & Design</option>
                  <option>Media Management</option>
                  <option>Media and Communication</option>
                </Sel>
              </div>
              <div style={fw}>
                <label style={lbl}>Degree level <Req /></label>
                <Sel value={form.degreeLevel} onChange={v => set("degreeLevel", v)} fieldName="degreeLevel">
                  <option value="">Please select</option>
                  <option>Bachelor&apos;s Degrees</option>
                  <option>Master&apos;s Degrees</option>
                  <option>Undergraduate Degrees</option>
                </Sel>
              </div>
            </div>
          </div>
        )}

        {/* ════════ STEP 4 — Documentation ════════ */}
        {step === 4 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <h3 style={secHead}>Upload Documents</h3>
            <div style={row}>

              {/* Passport file upload */}
              <div style={fw}>
                <label style={lbl}>Upload passport or birth documentation <Req /></label>
                <div style={{
                  display: "flex", alignItems: "center",
                  border: `1px solid ${errors.passportFile ? "#e53e3e" : "#dde1e7"}`,
                  borderRadius: "4px", overflow: "hidden", backgroundColor: "#f4f6f8",
                }}>
                  <span style={{ flex: 1, padding: "13px 16px", fontFamily: "'Inter',sans-serif", fontSize: "14px", color: form.passportFile ? "#292929" : "#94a3b8", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    {form.passportFile ? form.passportFile.name : "No file chosen"}
                  </span>
                  <button onClick={() => passportRef.current?.click()} style={{ padding: "13px 18px", backgroundColor: "#292929", color: "#fff", border: "none", fontFamily: "'Inter',sans-serif", fontSize: "14px", cursor: "pointer", whiteSpace: "nowrap", flexShrink: 0 }}>
                    Choose File
                  </button>
                  <input ref={passportRef} type="file" accept=".pdf" style={{ display: "none" }} onChange={e => set("passportFile", e.target.files?.[0] || null)} />
                </div>
                <p style={{ fontSize: "12px", color: "#64748b", fontFamily: "'Inter',sans-serif", lineHeight: "1.5em", marginTop: "6px" }}>
                  Please upload a VERIFIED copy of your Passport or Birth Certificate. VERIFIED means the original document has been sighted & the copy dated and signed by an authorised person.
                </p>
                {errors.passportFile && <span style={err}>{errors.passportFile}</span>}
              </div>

              {/* CV file upload */}
              <div style={fw}>
                <label style={lbl}>Upload Curriculum Vitae (CV) or Resume <Req /></label>
                <div style={{
                  display: "flex", alignItems: "center",
                  border: `1px solid ${errors.cvFile ? "#e53e3e" : "#dde1e7"}`,
                  borderRadius: "4px", overflow: "hidden", backgroundColor: "#f4f6f8",
                }}>
                  <span style={{ flex: 1, padding: "13px 16px", fontFamily: "'Inter',sans-serif", fontSize: "14px", color: form.cvFile ? "#292929" : "#94a3b8", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    {form.cvFile ? form.cvFile.name : "No file chosen"}
                  </span>
                  <button onClick={() => cvRef.current?.click()} style={{ padding: "13px 18px", backgroundColor: "#292929", color: "#fff", border: "none", fontFamily: "'Inter',sans-serif", fontSize: "14px", cursor: "pointer", whiteSpace: "nowrap", flexShrink: 0 }}>
                    Choose File
                  </button>
                  <input ref={cvRef} type="file" accept=".pdf" style={{ display: "none" }} onChange={e => set("cvFile", e.target.files?.[0] || null)} />
                </div>
                <p style={{ fontSize: "12px", color: "#64748b", fontFamily: "'Inter',sans-serif", lineHeight: "1.5em", marginTop: "6px" }}>
                  Upload your CV or Resume in PDF format.
                </p>
                {errors.cvFile && <span style={err}>{errors.cvFile}</span>}
              </div>

            </div>

            <div style={{ maxWidth: "calc(50% - 10px)" }}>
              <label style={lbl}>How did you find us? <Req /></label>
              <Sel value={form.howDidYouFindUs} onChange={v => set("howDidYouFindUs", v)} fieldName="howDidYouFindUs">
                <option value="">- Select -</option>
                <option>Google</option>
                <option>Facebook</option>
                <option>Instagram</option>
                <option>Friends / Family</option>
                <option>Other</option>
              </Sel>
            </div>
          </div>
        )}

        {/* ════════ STEP 5 — Declaration ════════ */}
        {step === 5 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <h3 style={secHead}>Review & Submit</h3>

            {/* Summary */}
            <div style={{ backgroundColor: "#f4f6f8", border: "1px solid #dde1e7", borderRadius: "6px", padding: "20px 24px", marginBottom: "4px" }}>
              <p style={{ fontFamily: "'Work Sans',sans-serif", fontSize: "11px", fontWeight: "700", color: "#149AB5", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "14px" }}>
                Application Summary
              </p>
              {[
                { label: "Name",          value: `${form.firstName} ${form.lastName}` },
                { label: "Email",         value: form.email },
                { label: "Student Type",  value: form.studentType },
                { label: "Area of Study", value: form.areaOfStudy },
                { label: "Degree Level",  value: form.degreeLevel },
              ].map(item => (
                <div key={item.label} style={{ display: "flex", gap: "12px", marginBottom: "8px" }}>
                  <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "13px", color: "#64748b", minWidth: "110px" }}>{item.label}:</span>
                  <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "13px", color: "#292929", fontWeight: "500" }}>{item.value || "—"}</span>
                </div>
              ))}
            </div>

            <div style={fw}>
              <label style={lbl}>Application full name <Req /></label>
              <input style={fi("fullName")} type="text" placeholder="Enter your full legal name"
                value={form.fullName} onChange={e => set("fullName", e.target.value)}
                onFocus={() => setFocused("fullName")} onBlur={() => setFocused("")} />
              {errors.fullName && <span style={err}>{errors.fullName}</span>}
            </div>

            <div style={fw}>
              <label style={lbl}>Additional information</label>
              <textarea style={{ ...fi("additionalInfo"), minHeight: "120px", resize: "vertical" }}
                placeholder="Any additional information..."
                value={form.additionalInfo} onChange={e => set("additionalInfo", e.target.value)}
                onFocus={() => setFocused("additionalInfo")} onBlur={() => setFocused("")} />
            </div>

            {/* Privacy checkbox */}
            <div style={{ backgroundColor: "#f4f6f8", border: "1px solid #dde1e7", borderRadius: "6px", padding: "18px 20px" }}>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "14px", fontWeight: "500", color: "#292929", marginBottom: "10px" }}>
                Privacy Policy Acceptance <Req />
              </p>
              <label style={{ display: "flex", alignItems: "flex-start", gap: "10px", cursor: "pointer" }}>
                <input type="checkbox" checked={form.privacyAccepted} onChange={e => set("privacyAccepted", e.target.checked)}
                  style={{ width: "16px", height: "16px", marginTop: "2px", accentColor: "#149AB5", cursor: "pointer", flexShrink: 0 }} />
                <span style={{ fontFamily: "'Inter',sans-serif", fontSize: "14px", color: "#545454", lineHeight: "1.6em" }}>
                  By submitting this form, you agree to Prime Leed privacy notice.
                </span>
              </label>
              {errors.privacyAccepted && <span style={{ ...err, marginTop: "8px" }}>{errors.privacyAccepted}</span>}
            </div>
          </div>
        )}

        {/* ── Navigation Buttons ── */}
        <div style={{ display: "flex", gap: "12px", marginTop: "36px", paddingTop: "24px", borderTop: "1px solid #f0f0f0" }}>
          {step > 1 && (
            <button onClick={prev} style={{ ...navBtn, backgroundColor: "#64748b" }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#475569")}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#64748b")}>
              Previous
            </button>
          )}
          {step < 5 ? (
            <button onClick={next} style={navBtn}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#1a1a1a")}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#292929")}>
              Next
            </button>
          ) : (
            <button onClick={submit}
              style={{ ...navBtn, backgroundColor: "#149AB5", display: "flex", alignItems: "center", gap: "10px" }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#117a8f")}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#149AB5")}>
              Submit Application
              <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
                <path d="M1 7H17M11 1L17 7L11 13" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          )}
        </div>

      </div>

      {/* ── Success Modal ── */}
      {submitted && (
        <div style={{ position: "fixed", inset: 0, backgroundColor: "rgba(0,0,0,0.55)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000, padding: "20px" }}>
          <div style={{ backgroundColor: "#ffffff", padding: "56px 48px", maxWidth: "460px", width: "100%", textAlign: "center", borderTop: "4px solid #149AB5", borderRadius: "8px", boxShadow: "0 24px 80px rgba(0,0,0,0.2)" }}>
            <div style={{ width: "68px", height: "68px", borderRadius: "50%", backgroundColor: "#f0fdf4", border: "2px solid #22c55e", margin: "0 auto 24px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="28" height="22" viewBox="0 0 28 22" fill="none">
                <path d="M2 11L10 19L26 2" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h2 style={{ fontFamily: "'Work Sans',sans-serif", fontSize: "24px", fontWeight: "800", color: "#292929", marginBottom: "12px" }}>
              Application Submitted!
            </h2>
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "14px", color: "#545454", lineHeight: "1.7em", marginBottom: "28px" }}>
              Thank you, <strong>{form.firstName} {form.lastName}</strong>.<br />
              Your application has been received. Our admissions team will get back to you within <strong>2 working days</strong>.
            </p>
            <div style={{ backgroundColor: "#f4f6f8", padding: "14px 20px", marginBottom: "28px", borderRadius: "4px" }}>
              <p style={{ fontSize: "11px", color: "#64748b", fontFamily: "'Inter',sans-serif", marginBottom: "4px", letterSpacing: "1px", textTransform: "uppercase" }}>Reference Number</p>
              <p style={{ fontFamily: "'Work Sans',sans-serif", fontSize: "18px", fontWeight: "700", color: "#149AB5" }}>
                PL-{Date.now().toString().slice(-6)}
              </p>
            </div>
            <button onClick={() => { setSubmitted(false); setStep(1); }}
              style={{ ...navBtn, width: "100%", padding: "14px", backgroundColor: "#292929" }}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}