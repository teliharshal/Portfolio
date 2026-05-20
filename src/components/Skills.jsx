import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaDatabase,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiSpringboot, SiMysql, SiPostgresql } from "react-icons/si";

const categories = [
  { id: "all", label: "All" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "database", label: "Database" },
  { id: "tools", label: "Tools" },
];

const skills = [
  { name: "HTML5", icon: FaHtml5, color: "#E34F26", bg: "rgba(227,79,38,0.12)", category: "frontend", level: 95 },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572B6", bg: "rgba(21,114,182,0.12)", category: "frontend", level: 90 },
  { name: "JavaScript", icon: FaJs, color: "#F7DF1E", bg: "rgba(247,223,30,0.12)", category: "frontend", level: 85 },
  { name: "React", icon: FaReact, color: "#61DAFB", bg: "rgba(97,218,251,0.12)", category: "frontend", level: 88 },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", bg: "rgba(6,182,212,0.12)", category: "frontend", level: 90 },
  { name: "Java", icon: FaJava, color: "#ED8B00", bg: "rgba(237,139,0,0.12)", category: "backend", level: 85 },
  { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F", bg: "rgba(109,179,63,0.12)", category: "backend", level: 80 },
  { name: "MySQL", icon: SiMysql, color: "#4479A1", bg: "rgba(68,121,161,0.12)", category: "database", level: 82 },
  { name: "SQL", icon: FaDatabase, color: "#F29111", bg: "rgba(242,145,17,0.12)", category: "database", level: 85 },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791", bg: "rgba(51,103,145,0.12)", category: "database", level: 75 },
  { name: "Git", icon: FaGitAlt, color: "#F05032", bg: "rgba(240,80,50,0.12)", category: "tools", level: 88 },
  { name: "GitHub", icon: FaGithub, color: "#9f8cc7", bg: "rgba(159,140,199,0.12)", category: "tools", level: 85 },
];

const categoryMeta = {
  frontend: { label: "Frontend", accent: "#8ea3c7" },
  backend: { label: "Backend", accent: "#c7a86a" },
  database: { label: "Database", accent: "#79a3d3" },
  tools: { label: "Tools", accent: "#d8b274" },
};

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
  exit: { opacity: 0, y: -16, scale: 0.98, transition: { duration: 0.2 } },
};

export default function Skills() {
  const [active, setActive] = useState("all");
  const filtered = active === "all" ? skills : skills.filter((skill) => skill.category === active);

  return (
    <section
      id="skills"
      className="relative overflow-hidden px-5 py-16 sm:px-8 sm:py-20 lg:px-12"
      style={{ fontFamily: "var(--body-font)" }}
    >
      <div className="absolute -right-12 top-0 h-80 w-80 rounded-full bg-[rgba(142,163,199,0.08)] blur-[140px]" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(199,168,106,0.22)] bg-[var(--accent)] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.26em] text-[var(--primary)]">
            <span className="h-2 w-2 rounded-full bg-[var(--primary)]" />
            Technical Expertise
          </div>

          <div className="mt-5 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2
                className="text-4xl font-extrabold leading-[1.08] tracking-tight text-[var(--text)] sm:text-5xl lg:text-[3.6rem]"
                style={{ fontFamily: "var(--heading-font)" }}
              >
                Tools and technologies I use with confidence.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--text-light)]">
                A practical stack centered on strong engineering fundamentals, maintainable delivery,
                and professional product execution.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-8 flex flex-wrap gap-3"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`rounded-full border px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.22em] transition-all duration-300 ${
                active === cat.id
                  ? "border-[rgba(199,168,106,0.35)] bg-[var(--primary)] text-[#0b1020]"
                  : "border-[var(--border)] bg-[rgba(255,255,255,0.03)] text-[var(--text-light)] hover:border-[rgba(199,168,106,0.28)] hover:text-[var(--text)]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            variants={containerVariants}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6"
          >
            {filtered.map((skill) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  variants={cardVariants}
                  whileHover={{ y: -4 }}
                  className="group rounded-[1.4rem] border border-[var(--border)] bg-[rgba(16,23,42,0.72)] p-4 shadow-[0_10px_30px_rgba(0,0,0,0.16)]"
                >
                  <div className="flex items-center justify-between">
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-[rgba(255,255,255,0.04)]"
                      style={{ background: skill.bg }}
                    >
                      <Icon size={22} color={skill.color} />
                    </div>
                    <span
                      className="h-2.5 w-2.5 rounded-full"
                      style={{ background: categoryMeta[skill.category].accent }}
                    />
                  </div>

                  <p className="mt-4 text-sm font-semibold leading-6 text-[var(--text)]">
                    {skill.name}
                  </p>

                  <div className="mt-4">
                    <div className="mb-1.5 flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--text-light)]">
                        {categoryMeta[skill.category].label}
                      </span>
                      <span className="text-[10px] font-semibold text-[var(--text-light)]">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 rounded-full bg-[rgba(255,255,255,0.06)]">
                      <motion.div
                        className="h-1.5 rounded-full"
                        style={{ background: skill.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
