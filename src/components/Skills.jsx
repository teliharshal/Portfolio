import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaDatabase, FaGitAlt, FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiSpringboot, SiMysql, SiPostgresql } from "react-icons/si";

const categories = [
  { id: "all",      label: "All" },
  { id: "frontend", label: "Frontend" },
  { id: "backend",  label: "Backend" },
  { id: "database", label: "Database" },
  { id: "tools",    label: "Tools" },
];

const skills = [
  // ── Frontend ──────────────────────────────────────────
  {
    name: "HTML5",
    icon: FaHtml5,
    color: "#E34F26",
    bg: "rgba(227,79,38,0.1)",
    category: "frontend",
    level: 95,
  },
  {
    name: "CSS3",
    icon: FaCss3Alt,
    color: "#1572B6",
    bg: "rgba(21,114,182,0.1)",
    category: "frontend",
    level: 90,
  },
  {
    name: "JavaScript",
    icon: FaJs,
    color: "#F7DF1E",
    bg: "rgba(247,223,30,0.1)",
    category: "frontend",
    level: 85,
  },
  {
    name: "React",
    icon: FaReact,
    color: "#61DAFB",
    bg: "rgba(97,218,251,0.1)",
    category: "frontend",
    level: 88,
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#06B6D4",
    bg: "rgba(6,182,212,0.1)",
    category: "frontend",
    level: 90,
  },
  // ── Backend ───────────────────────────────────────────
  {
    name: "Java",
    icon: FaJava,
    color: "#ED8B00",
    bg: "rgba(237,139,0,0.1)",
    category: "backend",
    level: 85,
  },
  {
    name: "Spring Boot",
    icon: SiSpringboot,
    color: "#6DB33F",
    bg: "rgba(109,179,63,0.1)",
    category: "backend",
    level: 80,
  },
  // ── Database ──────────────────────────────────────────
  {
    name: "MySQL",
    icon: SiMysql,
    color: "#4479A1",
    bg: "rgba(68,121,161,0.1)",
    category: "database",
    level: 82,
  },
  {
    name: "SQL",
    icon: FaDatabase,
    color: "#F29111",
    bg: "rgba(242,145,17,0.1)",
    category: "database",
    level: 85,
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "#336791",
    bg: "rgba(51,103,145,0.1)",
    category: "database",
    level: 75,
  },
  // ── Tools ─────────────────────────────────────────────
  {
    name: "Git",
    icon: FaGitAlt,
    color: "#F05032",
    bg: "rgba(240,80,50,0.1)",
    category: "tools",
    level: 88,
  },
  {
    name: "GitHub",
    icon: FaGithub,
    color: "#6e5494",
    bg: "rgba(110,84,148,0.1)",
    category: "tools",
    level: 85,
  },
];

const categoryMeta = {
  frontend: { label: "Frontend",  accent: "#4F46E5" },
  backend:  { label: "Backend",   accent: "#6DB33F" },
  database: { label: "Database",  accent: "#4479A1" },
  tools:    { label: "Tools",     accent: "#F05032" },
};

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show:   { opacity: 1, y: 0,  scale: 1, transition: { duration: 0.45, ease: "easeOut" } },
  exit:   { opacity: 0, y: -20, scale: 0.95, transition: { duration: 0.25 } },
};

export default function Skills() {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all" ? skills : skills.filter((s) => s.category === active);

  return (
    <section
      id="skills"
      className="relative py-16 px-5 sm:px-8 lg:px-12 overflow-hidden bg-[var(--bg)]"
      style={{ fontFamily: "var(--body-font)" }}
    >
      {/* ── Background blobs ── */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-[var(--primary)]/5 blur-[140px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[var(--primary)]/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent)] text-[var(--primary)] text-[11px] font-bold uppercase tracking-widest mb-4 border border-[var(--primary)]/20"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--primary)] opacity-60" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[var(--primary)]" />
            </span>
            What I Work With
          </div>

          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--text)] leading-[1.1] tracking-tight"
            style={{ fontFamily: "var(--heading-font)" }}
          >
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-violet-500">
              Tech Stack
            </span>
          </h2>
          <p className="mt-3 text-sm text-[var(--text-light)] max-w-md mx-auto leading-relaxed">
            Technologies I use to build fast, scalable, and beautiful products.
          </p>
        </motion.div>

        {/* ── Filter tabs ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest border transition-all duration-300 ${
                active === cat.id
                  ? "bg-[var(--primary)] text-white border-[var(--primary)] shadow-[0_4px_18px_rgba(79,70,229,0.35)]"
                  : "bg-[var(--surface)] text-[var(--text-light)] border-[var(--border)] hover:border-[var(--primary)] hover:text-[var(--primary)]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* ── Skill cards grid ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            variants={containerVariants}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-3"
          >
            {filtered.map((skill) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  variants={cardVariants}
                  whileHover={{ y: -4, scale: 1.03 }}
                  className="group relative flex flex-col items-center gap-2 p-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] cursor-default overflow-hidden transition-shadow duration-300 hover:shadow-[0_6px_24px_rgba(0,0,0,0.08)] hover:border-[var(--primary)]/30"
                >
                  {/* Glow on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"
                    style={{ background: `radial-gradient(circle at 50% 0%, ${skill.color}15 0%, transparent 70%)` }}
                  />

                  {/* Category dot */}
                  <span
                    className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full"
                    style={{ background: categoryMeta[skill.category].accent }}
                  />

                  {/* Icon bubble */}
                  <div
                    className="relative z-10 w-10 h-10 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{ background: skill.bg }}
                  >
                    <Icon size={22} color={skill.color} />
                  </div>

                  {/* Name */}
                  <p
                    className="relative z-10 text-xs font-bold text-[var(--text)] text-center tracking-wide leading-tight"
                    style={{ fontFamily: "var(--body-font)" }}
                  >
                    {skill.name}
                  </p>

                  {/* Progress bar */}
                  <div className="relative z-10 w-full">
                    <div className="flex justify-between items-center mb-0.5">
                      <span className="text-[9px] font-semibold text-[var(--text-light)] uppercase tracking-widest">
                        {categoryMeta[skill.category].label}
                      </span>
                      <span className="text-[9px] font-bold" style={{ color: skill.color }}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full h-1 rounded-full bg-[var(--border)]">
                      <motion.div
                        className="h-1 rounded-full"
                        style={{ background: skill.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* ── Bottom category legend ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6 mt-8"
        >
          {Object.entries(categoryMeta).map(([key, { label, accent }]) => (
            <div key={key} className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full" style={{ background: accent }} />
              <span className="text-[11px] font-semibold text-[var(--text-light)] uppercase tracking-widest">
                {label}
              </span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
