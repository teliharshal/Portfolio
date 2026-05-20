import {
  FaReact, FaJava, FaHtml5, FaCss3Alt, FaJs, FaDatabase, FaGitAlt, FaGithub,
} from "react-icons/fa";
import {
  SiSpringboot, SiMysql, SiPostgresql, SiTailwindcss,
} from "react-icons/si";
import { Code } from "lucide-react";

/* Map tech name → { icon: Component, color: string } */
export const techMap = {
  "React":        { icon: FaReact,       color: "#61DAFB" },
  "Java":         { icon: FaJava,        color: "#ED8B00" },
  "Spring Boot":  { icon: SiSpringboot,  color: "#6DB33F" },
  "MySQL":        { icon: SiMysql,       color: "#4479A1" },
  "PostgreSQL":   { icon: SiPostgresql,  color: "#336791" },
  "SQL":          { icon: FaDatabase,    color: "#F29111" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },
  "JavaScript":   { icon: FaJs,          color: "#F7DF1E" },
  "HTML":         { icon: FaHtml5,       color: "#E34F26" },
  "CSS":          { icon: FaCss3Alt,     color: "#1572B6" },
  "REST API":     { icon: Code,          color: "#6366F1" },
  "Git":          { icon: FaGitAlt,      color: "#F05032" },
  "GitHub":       { icon: FaGithub,      color: "#6e5494" },
};

/* Pill component — icon + label, theme-aware */
export function TechPill({ tag, size = 13 }) {
  const entry = techMap[tag];
  const Icon  = entry?.icon ?? Code;
  const color = entry?.color ?? "var(--primary)";

  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(199,168,106,0.16)] bg-[rgba(255,255,255,0.03)] px-2.5 py-1 text-[11px] font-semibold text-[var(--text)]"
    >
      <Icon size={size} style={{ color, flexShrink: 0 }} />
      {tag}
    </span>
  );
}
