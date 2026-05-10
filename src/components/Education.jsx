import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, MapPin, Award, ChevronDown } from "lucide-react";

const education = [
  {
    id: 1,
    degree: "Bachelor of Engineering",
    field: "Computer Engineering",
    institution: "University / College Name",
    board: "University Name",
    location: "City, State",
    year: "2021 – 2025",
    grade: "8.5",
    gradeLabel: "CGPA",
    status: "Pursuing",
    icon: GraduationCap,
    highlights: ["Data Structures & Algorithms", "Database Management", "Web Technologies", "Software Engineering"],
  },
  {
    id: 2,
    degree: "Higher Secondary Certificate",
    field: "Science — PCM",
    institution: "College / Junior College Name",
    board: "State Board",
    location: "City, State",
    year: "2019 – 2021",
    grade: "85%",
    gradeLabel: "Percentage",
    status: "Completed",
    icon: Award,
    highlights: ["Physics", "Chemistry", "Mathematics", "Information Technology"],
  },
  {
    id: 3,
    degree: "Secondary School Certificate",
    field: "General Studies",
    institution: "School Name",
    board: "State Board",
    location: "City, State",
    year: "2018 – 2019",
    grade: "90%",
    gradeLabel: "Percentage",
    status: "Completed",
    icon: Award,
    highlights: ["Mathematics", "Science", "English", "Social Studies"],
  },
];

function EducationCard({ edu, index, isActive, onClick }) {
  const Icon = edu.icon;
  const isLast = index === education.length - 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="flex gap-4 w-full"
    >
      {/* Timeline dot + line */}
      <div className="hidden sm:flex flex-col items-center shrink-0 pt-4">
        <motion.div
          animate={{ scale: isActive ? 1.1 : 1 }}
          transition={{ duration: 0.25 }}
          className="w-9 h-9 rounded-xl flex items-center justify-center bg-[var(--primary)] shadow-[0_4px_12px_rgba(79,70,229,0.3)] shrink-0"
        >
          <Icon size={16} className="text-white" />
        </motion.div>
        {!isLast && <div className="w-px flex-1 mt-2 bg-[var(--border)]" />}
      </div>

      {/* Card — full width */}
      <div className="flex-1 min-w-0 mb-4">
        <div
          onClick={onClick}
          className={`w-full rounded-2xl border bg-[var(--surface)] cursor-pointer transition-all duration-300 ${
            isActive
              ? "border-[var(--primary)]/40 shadow-[0_8px_32px_rgba(79,70,229,0.1)]"
              : "border-[var(--border)] hover:border-[var(--primary)]/30"
          }`}
        >
          {/* Top accent strip */}
          <div className={`h-[3px] w-full rounded-t-2xl bg-[var(--primary)] transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-30"}`} />

          {/* Header */}
          <div className="p-4">
            <div className="flex items-start gap-3">

              {/* Mobile icon */}
              <div className="sm:hidden shrink-0 w-9 h-9 rounded-xl bg-[var(--primary)] flex items-center justify-center mt-0.5">
                <Icon size={15} className="text-white" />
              </div>

              {/* Main content */}
              <div className="flex-1 min-w-0">
                {/* Status + year */}
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[var(--accent)] text-[var(--primary)] text-[10px] font-bold uppercase tracking-widest border border-[var(--primary)]/20">
                    {edu.status === "Pursuing" && (
                      <span className="w-1 h-1 rounded-full bg-[var(--primary)] animate-pulse" />
                    )}
                    {edu.status}
                  </span>
                  <span className="text-[10px] font-semibold text-[var(--text-light)] uppercase tracking-widest">
                    {edu.year}
                  </span>
                </div>

                {/* Degree */}
                <h3
                  className="text-sm font-extrabold text-[var(--text)] leading-snug"
                  style={{ fontFamily: "var(--heading-font)" }}
                >
                  {edu.degree}
                </h3>

                {/* Field */}
                <p className="text-xs font-semibold text-[var(--primary)] mt-0.5">{edu.field}</p>

                {/* Institution row */}
                <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 mt-1.5">
                  <span className="text-xs text-[var(--text)] font-medium">{edu.institution}</span>
                  <span className="text-[var(--text-light)] text-xs">·</span>
                  <span className="text-xs text-[var(--text-light)]">{edu.board}</span>
                  <span className="flex items-center gap-0.5 text-[var(--text-light)]">
                    <MapPin size={10} />
                    <span className="text-xs">{edu.location}</span>
                  </span>
                </div>
              </div>

              {/* Grade badge + chevron */}
              <div className="flex items-center gap-2 shrink-0 ml-2">
                <div className="flex items-center gap-3 pl-2 py-1">
                {/* The Accent Bar */}
                <div className="w-1 h-10 rounded-full bg-[var(--accent)]" />
                <div className="flex flex-col">
               <span className="text-xl font-black text-[var(--primary)] leading-tight italic tracking-tighter">
                {edu.grade}
               </span>
                <span className="text-[9px] font-bold text-[var(--text-light)] uppercase tracking-[0.15em] -mt-1">
                {edu.gradeLabel}
               </span>
              </div>
            </div>
                <motion.div
                  animate={{ rotate: isActive ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-[var(--text-light)]"
                >
                  <ChevronDown size={16} />
                </motion.div>
              </div>
            </div>
          </div>

          {/* Expandable subjects */}
          <AnimatePresence initial={false}>
            {isActive && (
              <motion.div
                key="body"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-4 pb-4 border-t border-[var(--border)]">
                  <p className="text-[10px] font-bold text-[var(--text-light)] uppercase tracking-widest mt-3 mb-2">
                    Key Subjects
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((h, i) => (
                      <motion.span
                        key={h}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-[var(--accent)] text-[var(--primary)] border border-[var(--primary)]/15"
                      >
                        {h}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

export default function Education() {
  const [activeId, setActiveId] = useState(1);
  const toggle = (id) => setActiveId((prev) => (prev === id ? null : id));

  return (
    <section
      id="education"
      className="relative py-24 px-5 sm:px-8 lg:px-12 overflow-hidden bg-[var(--bg)]"
      style={{ fontFamily: "var(--body-font)" }}
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--primary)]/5 blur-[140px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[var(--primary)]/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">

        {/* Header */}
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
            Academic Background
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--text)] leading-[1.1] tracking-tight"
              style={{ fontFamily: "var(--heading-font)" }}
            >
              My{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-violet-500">
                Education
              </span>
            </h2>
            <p className="text-sm text-[var(--text-light)] max-w-xs leading-relaxed sm:text-right">
              The academic foundation that shaped my technical thinking.
            </p>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="flex flex-col">
          {education.map((edu, i) => (
            <EducationCard
              key={edu.id}
              edu={edu}
              index={i}
              isActive={activeId === edu.id}
              onClick={() => toggle(edu.id)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
