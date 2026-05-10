import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, ChevronDown, Briefcase } from "lucide-react";
import { TechPill } from "../utils/techIcons";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const experiences = [
  {
    id: 1,
    role: "Full Stack Developer Intern",
    company: "Company Name",
    location: "City, State",
    duration: "Jan 2024 – Apr 2024",
    type: "Internship",
    gradient: "from-indigo-500 to-violet-600",
    color: "#4F46E5",
    points: [
      "Developed and maintained RESTful APIs using Spring Boot, improving response time by 30%.",
      "Built responsive UI components with React and Tailwind CSS, enhancing user experience.",
      "Collaborated with a cross-functional team using Agile methodology and Git workflows.",
      "Integrated MySQL database with JPA/Hibernate for efficient data persistence.",
    ],
    tags: ["React", "Spring Boot", "MySQL", "Tailwind CSS"],
  },
  {
    id: 2,
    role: "Backend Developer Intern",
    company: "Company Name",
    location: "City, State",
    duration: "Jun 2023 – Sep 2023",
    type: "Internship",
    gradient: "from-emerald-500 to-teal-600",
    color: "#10B981",
    points: [
      "Designed and implemented microservice architecture using Java and Spring Boot.",
      "Optimised complex SQL queries in PostgreSQL, reducing query execution time by 40%.",
      "Wrote unit and integration tests achieving 85% code coverage.",
      "Participated in code reviews and contributed to internal documentation.",
    ],
    tags: ["Java", "Spring Boot", "PostgreSQL", "REST API"],
  },
  {
    id: 3,
    role: "Frontend Developer Intern",
    company: "Company Name",
    location: "City, State",
    duration: "Nov 2022 – Feb 2023",
    type: "Internship",
    gradient: "from-orange-400 to-rose-500",
    color: "#F97316",
    points: [
      "Created pixel-perfect, responsive web pages from Figma designs using HTML, CSS, and JavaScript.",
      "Implemented interactive UI features with React, improving engagement metrics.",
      "Worked closely with the design team to ensure consistent branding and accessibility.",
      "Reduced page load time by 25% through asset optimisation and lazy loading.",
    ],
    tags: ["React", "JavaScript", "HTML", "CSS"],
  },
];

/* ─────────────────────────────────────────────
   EXPERIENCE CARD
───────────────────────────────────────────── */
function ExperienceCard({ exp, index, isActive, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.55, delay: index * 0.12, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative"
    >
      {/* Timeline connector */}
      <div className="hidden lg:flex absolute left-0 top-0 bottom-0 w-px flex-col items-center">
        {/* Dot */}
        <motion.div
          animate={{ scale: isActive ? 1.3 : 1 }}
          transition={{ duration: 0.3 }}
          className="relative z-10 mt-6 w-4 h-4 rounded-full border-2 flex items-center justify-center"
          style={{
            borderColor: exp.color,
            background: isActive ? exp.color : "var(--bg)",
            boxShadow: isActive ? `0 0 12px ${exp.color}60` : "none",
          }}
        >
          {isActive && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
        </motion.div>
        {/* Line below dot */}
        {index < experiences.length - 1 && (
          <div className="flex-1 w-px bg-[var(--border)] mt-1" />
        )}
      </div>

      {/* Card */}
      <div className="lg:pl-10">
        <motion.div
          onClick={onClick}
          whileHover={{ x: 4 }}
          transition={{ duration: 0.2 }}
          className={`relative rounded-2xl border cursor-pointer overflow-hidden transition-all duration-300 ${
            isActive
              ? "border-[var(--primary)]/40 shadow-[0_8px_32px_rgba(79,70,229,0.12)]"
              : "border-[var(--border)] hover:border-[var(--primary)]/30"
          } bg-[var(--surface)]`}
        >
          {/* Gradient left bar */}
          <div
            className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${exp.gradient} transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-30"}`}
          />

          {/* Header */}
          <div className="pl-5 pr-5 pt-5 pb-4">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                {/* Icon bubble */}
                <div
                  className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ background: `${exp.color}18` }}
                >
                  <Briefcase size={18} style={{ color: exp.color }} />
                </div>

                <div>
                  {/* Role */}
                  <h3
                    className="text-base font-extrabold text-[var(--text)] leading-snug tracking-tight"
                    style={{ fontFamily: "var(--heading-font)" }}
                  >
                    {exp.role}
                  </h3>
                  {/* Company */}
                  <p className="text-sm font-semibold mt-0.5" style={{ color: exp.color }}>
                    {exp.company}
                  </p>
                </div>
              </div>

              {/* Expand chevron */}
              <motion.div
                animate={{ rotate: isActive ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="shrink-0 mt-1 text-[var(--text-light)]"
              >
                <ChevronDown size={18} />
              </motion.div>
            </div>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-4 mt-3 ml-15">
              <div className="flex items-center gap-1.5 text-[var(--text-light)]">
                <Calendar size={13} />
                <span className="text-xs font-medium">{exp.duration}</span>
              </div>
              <div className="flex items-center gap-1.5 text-[var(--text-light)]">
                <MapPin size={13} />
                <span className="text-xs font-medium">{exp.location}</span>
              </div>
              <span
                className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest border"
                style={{
                  color: exp.color,
                  borderColor: `${exp.color}40`,
                  background: `${exp.color}12`,
                }}
              >
                {exp.type}
              </span>
            </div>
          </div>

          {/* Expandable body */}
          <AnimatePresence initial={false}>
            {isActive && (
              <motion.div
                key="body"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-5 pb-5 border-t border-[var(--border)]">
                  {/* Bullet points */}
                  <ul className="mt-4 space-y-2.5">
                    {exp.points.map((point, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.07, duration: 0.3 }}
                        className="flex items-start gap-3"
                      >
                        <span
                          className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full"
                          style={{ background: exp.color }}
                        />
                        <span className="text-sm text-[var(--text-light)] leading-relaxed">
                          {point}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-5">
                    {exp.tags.map((tag) => (
                      <TechPill key={tag} tag={tag} />
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
export default function Experience() {
  const [activeId, setActiveId] = useState(1);

  const toggle = (id) => setActiveId((prev) => (prev === id ? null : id));

  return (
    <section
      id="experience"
      className="relative py-8 px-5 sm:px-8 lg:px-12 overflow-hidden bg-[var(--bg)]"
      style={{ fontFamily: "var(--body-font)" }}
    >
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[var(--primary)]/5 blur-[140px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-violet-500/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent)] text-[var(--primary)] text-[11px] font-bold uppercase tracking-widest mb-4 border border-[var(--primary)]/20">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--primary)] opacity-60" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[var(--primary)]" />
            </span>
            Where I've Worked
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--text)] leading-[1.1] tracking-tight"
              style={{ fontFamily: "var(--heading-font)" }}
            >
              Work{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-violet-500">
                Experience
              </span>
            </h2>
            <p className="text-sm text-[var(--text-light)] max-w-xs leading-relaxed sm:text-right">
              Hands-on experience building real-world products across the stack.
            </p>
          </div>
        </motion.div>

        {/* ── Two-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10 lg:gap-16 items-start">

          {/* Left — accordion cards with timeline */}
          <div className="relative lg:pl-6 flex flex-col gap-5">
            {/* Vertical timeline line (desktop) */}
            <div className="hidden lg:block absolute left-0 top-6 bottom-6 w-px bg-[var(--border)]" />

            {experiences.map((exp, i) => (
              <ExperienceCard
                key={exp.id}
                exp={exp}
                index={i}
                isActive={activeId === exp.id}
                onClick={() => toggle(exp.id)}
              />
            ))}
          </div>

          {/* Right — stats panel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col gap-5 lg:sticky lg:top-28"
          >
            {/* Summary card */}
            {/* <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
              <p className="text-[11px] font-bold text-[var(--primary)] uppercase tracking-widest mb-4">
                Career Snapshot
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "3",    label: "Internships" },
                  { value: "1+",   label: "Year Exp." },
                  { value: "10+",  label: "Projects" },
                  { value: "4",    label: "Tech Stacks" },
                ].map(({ value, label }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center justify-center p-4 rounded-xl bg-[var(--bg)] border border-[var(--border)]"
                  >
                    <span
                      className="text-2xl font-black text-[var(--text)]"
                      style={{ fontFamily: "var(--heading-font)" }}
                    >
                      {value}
                    </span>
                    <span className="text-[10px] font-bold text-[var(--text-light)] uppercase tracking-widest mt-0.5 text-center">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div> */}

            {/* Timeline mini-nav */}
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
              <p className="text-[11px] font-bold text-[var(--primary)] uppercase tracking-widest mb-4">
                Timeline
              </p>
              <div className="flex flex-col gap-3">
                {experiences.map((exp) => (
                  <button
                    key={exp.id}
                    onClick={() => setActiveId(exp.id)}
                    className={`flex items-center gap-3 p-3 rounded-xl border text-left transition-all duration-200 ${
                      activeId === exp.id
                        ? "border-[var(--primary)]/30 bg-[var(--accent)]"
                        : "border-transparent hover:bg-[var(--bg)]"
                    }`}
                  >
                    <span
                      className="shrink-0 w-2 h-2 rounded-full"
                      style={{ background: exp.color }}
                    />
                    <div>
                      <p className="text-xs font-bold text-[var(--text)] leading-snug">
                        {exp.company}
                      </p>
                      <p className="text-[10px] text-[var(--text-light)] mt-0.5">
                        {exp.duration}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Currently open to work badge */}
            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-5 flex items-center gap-3">
              <span className="relative flex h-3 w-3 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
              </span>
              <div>
                <p className="text-sm font-bold text-[var(--text)]">Open to Work</p>
                <p className="text-xs text-[var(--text-light)] mt-0.5">
                  Available for full-time roles & internships
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
