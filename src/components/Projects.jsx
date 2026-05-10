import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ExternalLink, X } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { TechPill } from "../utils/techIcons";

/* ─────────────────────────────────────────────
   DATA
   To add a screenshot:
     1. import img from "../assets/your-screenshot.png"
     2. set  image: img  on the project object
───────────────────────────────────────────── */
const projects = [
  {
    id: 1,
    number: "01",
    title: "Project Alpha",
    tagline: "Full-stack Web Application",
    description:
      "A brief description of what this project does and the problem it solves. Replace with your real project details.",
    longDescription:
      "Extended detail shown in the modal. Describe the architecture, key challenges, how you solved them, and what you learned. Mention performance improvements, design decisions, or anything that makes this project stand out.",
    tags: ["React", "Spring Boot", "MySQL"],
    year: "2024",
    live: "#",
    github: "#",
    image: null,
  },
  {
    id: 2,
    number: "02",
    title: "Project Beta",
    tagline: "Backend REST API",
    description:
      "Describe the architecture, key features, and technologies used. Mention scale, performance wins, or interesting engineering decisions.",
    longDescription:
      "Extended detail about this project. Describe the microservice architecture, authentication strategy, database design decisions, and any performance benchmarks you achieved.",
    tags: ["Java", "Spring Boot", "PostgreSQL"],
    year: "2024",
    live: "#",
    github: "#",
    image: null,
  },
  {
    id: 3,
    number: "03",
    title: "Project Gamma",
    tagline: "Frontend UI / Design System",
    description:
      "Talk about the design decisions, component architecture, accessibility considerations, and performance optimisations.",
    longDescription:
      "Describe the component library, design tokens system, accessibility compliance, and performance improvements through code splitting and lazy loading.",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    year: "2023",
    live: "#",
    github: "#",
    image: null,
  },
  {
    id: 4,
    number: "04",
    title: "Project Delta",
    tagline: "Database & Analytics",
    description:
      "Explain the data model, query optimisations, reporting features, and interesting challenges solved at the data layer.",
    longDescription:
      "Detail the schema design, complex query optimisations, reporting pipeline, and data visualisation tools. Mention indexing strategies or caching layers used.",
    tags: ["SQL", "PostgreSQL", "Java"],
    year: "2023",
    live: "#",
    github: "#",
    image: null,
  },
];

/* ─────────────────────────────────────────────
   ANIMATION VARIANTS
───────────────────────────────────────────── */
const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

/* ─────────────────────────────────────────────
   MODAL
───────────────────────────────────────────── */
function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
      />

      <motion.div
        key="modal"
        initial={{ opacity: 0, y: 50, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.97 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 pointer-events-none"
      >
        <div
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-[var(--border)] bg-[var(--surface)] shadow-2xl pointer-events-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* ── Header image / gradient ── */}
          <div className="relative h-48 sm:h-56 bg-[var(--accent)] border-b border-[var(--border)] overflow-hidden rounded-t-3xl flex items-center justify-center">
            {/* Dot-grid pattern */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle, var(--border) 1px, transparent 1px)`,
                backgroundSize: "20px 20px",
              }}
            />
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : (
              <span
                className="relative text-[96px] font-black leading-none select-none text-[var(--primary)]/10"
                style={{ fontFamily: "var(--heading-font)" }}
              >
                {project.number}
              </span>
            )}

            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 rounded-xl bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center text-[var(--text-light)] hover:text-[var(--primary)] hover:border-[var(--primary)] transition-all"
            >
              <X size={16} />
            </button>

            {/* Year */}
            <span className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-[var(--surface)] border border-[var(--border)] text-[var(--text-light)] text-[10px] font-bold uppercase tracking-widest">
              {project.year}
            </span>
          </div>

          {/* ── Body ── */}
          <div className="p-6 sm:p-8">
            <p className="text-[11px] font-bold text-[var(--primary)] uppercase tracking-widest mb-1">
              {project.tagline}
            </p>
            <h2
              className="text-2xl sm:text-3xl font-extrabold text-[var(--text)] mb-4 leading-tight tracking-tight"
              style={{ fontFamily: "var(--heading-font)" }}
            >
              {project.title}
            </h2>

            <p className="text-sm text-[var(--text-light)] leading-relaxed mb-6">
              {project.longDescription}
            </p>

            {/* Tags */}
            <div className="flex items-center gap-2 flex-wrap mb-6">
              {project.tags.map((tag) => (
                <TechPill key={tag} tag={tag} />
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-3 pt-4 border-t border-[var(--border)]">
              <a
                href={project.live}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[var(--primary)] text-white text-sm font-bold hover:bg-[var(--primary-hover)] transition-all"
              >
                <ExternalLink size={15} />
                Live Demo
              </a>
              <a
                href={project.github}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 border-[var(--border)] text-[var(--text)] text-sm font-bold hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all"
              >
                <FaGithub size={15} />
                Source Code
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ─────────────────────────────────────────────
   CARD
───────────────────────────────────────────── */
function ProjectCard({ project, onOpen }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="group relative flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--surface)] overflow-hidden transition-all duration-300 hover:border-[var(--primary)]/40 hover:shadow-[0_12px_40px_rgba(79,70,229,0.1)]"
    >
      {/* ── Preview area ── */}
      <div className="relative h-28 bg-[var(--accent)] border-b border-[var(--border)] overflow-hidden flex items-center justify-center">
        {/* Dot-grid texture */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, var(--border) 1px, transparent 1px)`,
            backgroundSize: "18px 18px",
          }}
        />
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <span
            className="relative text-[56px] font-black leading-none select-none text-[var(--primary)]/15 group-hover:text-[var(--primary)]/25 transition-colors duration-300"
            style={{ fontFamily: "var(--heading-font)" }}
          >
            {project.number}
          </span>
        )}

        {/* Year chip */}
        <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full bg-[var(--surface)] border border-[var(--border)] text-[var(--text-light)] text-[10px] font-bold uppercase tracking-widest">
          {project.year}
        </span>
      </div>

      {/* ── Body ── */}
      <div className="flex flex-col flex-1 p-4">
        {/* Number + icons */}
        <div className="flex items-center justify-between mb-2">
          <span
            className="text-2xl font-black leading-none select-none text-[var(--primary)]"
            style={{ fontFamily: "var(--heading-font)" }}
          >
            {project.number}
          </span>

          <div className="flex gap-1.5">
            <a
              href={project.github}
              onClick={(e) => e.stopPropagation()}
              className="w-7 h-7 rounded-lg border border-[var(--border)] flex items-center justify-center text-[var(--text-light)] hover:text-[var(--primary)] hover:border-[var(--primary)] transition-all"
            >
              <FaGithub size={13} />
            </a>
            <a
              href={project.live}
              onClick={(e) => e.stopPropagation()}
              className="w-7 h-7 rounded-lg border border-[var(--border)] flex items-center justify-center text-[var(--text-light)] hover:text-[var(--primary)] hover:border-[var(--primary)] transition-all"
            >
              <ExternalLink size={13} />
            </a>
          </div>
        </div>

        {/* Tagline */}
        <p className="text-[10px] font-bold text-[var(--primary)] uppercase tracking-widest mb-0.5">
          {project.tagline}
        </p>

        {/* Title */}
        <h3
          className="text-sm font-extrabold text-[var(--text)] mb-2 leading-snug tracking-tight"
          style={{ fontFamily: "var(--heading-font)" }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-xs text-[var(--text-light)] leading-relaxed flex-1 mb-3 line-clamp-2">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-3">
          {project.tags.map((tag) => (
            <TechPill key={tag} tag={tag} size={11} />
          ))}
        </div>

        {/* View Project button */}
        <button
          onClick={() => onOpen(project)}
          className="w-full flex items-center justify-center gap-1.5 py-2 rounded-xl bg-[var(--accent)] border border-[var(--primary)]/20 text-[var(--primary)] text-[10px] font-bold uppercase tracking-widest hover:bg-[var(--primary)] hover:text-white hover:border-[var(--primary)] transition-all duration-300 group/btn"
        >
          View Project
          <ArrowUpRight
            size={11}
            className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
          />
        </button>
      </div>

      {/* Bottom accent line on hover */}
      <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full bg-[var(--primary)] transition-all duration-500 rounded-full" />
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   MAIN
───────────────────────────────────────────── */
export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section
      id="projects"
      className="relative py-24 px-5 sm:px-8 lg:px-12 overflow-hidden bg-[var(--bg)]"
      style={{ fontFamily: "var(--body-font)" }}
    >
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--primary)]/5 blur-[160px] rounded-full -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[var(--primary)]/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">

        {/* ── Header ── */}
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
            What I've Built
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--text)] leading-[1.1] tracking-tight"
              style={{ fontFamily: "var(--heading-font)" }}
            >
              My{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-violet-500">
                Projects
              </span>
            </h2>
            <p className="text-sm text-[var(--text-light)] max-w-xs leading-relaxed sm:text-right">
              Click "View Project" on any card to see full details.
            </p>
          </div>
        </motion.div>

        {/* ── Grid ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} onOpen={setSelected} />
          ))}
        </motion.div>

        {/* ── GitHub CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mt-14"
        >
          <a
            href="#"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl border-2 border-[var(--border)] bg-[var(--surface)] text-[var(--text)] text-sm font-bold hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all duration-300"
          >
            <FaGithub size={18} />
            View all projects on GitHub
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </motion.div>
      </div>

      {/* ── Modal ── */}
      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
