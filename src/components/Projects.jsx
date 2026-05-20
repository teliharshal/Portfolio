import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ExternalLink, X } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { TechPill } from "../utils/techIcons";

const projects = [
  {
    id: 1,
    number: "01",
    title: "Project Alpha",
    tagline: "Full Stack Web Application",
    description:
      "A structured end-to-end product built to solve a real workflow with strong backend logic and polished UI.",
    longDescription:
      "This project focused on building a complete web application with clear information architecture, scalable backend services, and a user interface designed for simplicity and reliability. It demonstrates my approach to balancing business requirements, clean code, and performance-oriented implementation.",
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
    tagline: "Backend API Platform",
    description:
      "A service-driven backend architecture designed for maintainability, secure integrations, and efficient data access.",
    longDescription:
      "This backend-focused project highlights REST API development, secure request handling, clean service separation, and practical database design. It reflects my ability to build reliable systems that support real product growth over time.",
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
    tagline: "Frontend Experience System",
    description:
      "A modern interface project centered on readability, reusable UI components, and strong visual consistency.",
    longDescription:
      "This project demonstrates interface craftsmanship through reusable component patterns, accessibility-conscious implementation, and a refined visual system. The goal was to produce a frontend that feels both premium and practical.",
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
    tagline: "Data and Reporting Solution",
    description:
      "A reporting-oriented product focused on structured data modeling, SQL performance, and business visibility.",
    longDescription:
      "This project emphasizes data-driven thinking, efficient schema decisions, and optimized query handling. It showcases how I approach backend reporting problems with a mix of clarity, performance, and maintainable design.",
    tags: ["SQL", "PostgreSQL", "Java"],
    year: "2023",
    live: "#",
    github: "#",
    image: null,
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

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
        className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
      />

      <motion.div
        key="modal"
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.98 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
      >
        <div
          className="relative w-full max-w-3xl overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] shadow-[0_28px_80px_rgba(0,0,0,0.42)]"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="border-b border-[var(--border)] bg-[linear-gradient(135deg,rgba(199,168,106,0.12),rgba(255,255,255,0.02))] p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--primary)]">
                  {project.tagline}
                </p>
                <h2
                  className="mt-2 text-3xl font-extrabold tracking-tight text-[var(--text)] sm:text-4xl"
                  style={{ fontFamily: "var(--heading-font)" }}
                >
                  {project.title}
                </h2>
              </div>

              <button
                onClick={onClose}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[rgba(255,255,255,0.03)] text-[var(--text-light)] hover:border-[rgba(199,168,106,0.3)] hover:text-[var(--primary)]"
              >
                <X size={16} />
              </button>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <span className="rounded-full border border-[var(--border)] bg-[rgba(255,255,255,0.03)] px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-[var(--text-light)]">
                {project.year}
              </span>
              <span className="rounded-full border border-[rgba(199,168,106,0.24)] bg-[var(--accent)] px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-[var(--primary)]">
                Case Study
              </span>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            <p className="text-base leading-8 text-[var(--text-light)]">
              {project.longDescription}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <TechPill key={tag} tag={tag} />
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3 border-t border-[var(--border)] pt-6">
              <a
                href={project.live}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-[#0b1020] hover:bg-[var(--primary-hover)]"
              >
                <ExternalLink size={15} />
                Live Demo
              </a>
              <a
                href={project.github}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[var(--border)] bg-[rgba(255,255,255,0.03)] px-6 py-3 text-sm font-semibold text-[var(--text)] hover:border-[rgba(199,168,106,0.3)] hover:text-[var(--primary)]"
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

function ProjectCard({ project, onOpen }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -5 }}
      className="group flex h-full flex-col rounded-[1.8rem] border border-[var(--border)] bg-[rgba(16,23,42,0.72)] shadow-[0_12px_34px_rgba(0,0,0,0.18)]"
    >
      <div className="border-b border-[var(--border)] bg-[linear-gradient(135deg,rgba(199,168,106,0.10),rgba(255,255,255,0.02))] p-5">
        <div className="flex items-center justify-between">
          <span
            className="text-3xl font-extrabold tracking-tight text-[var(--primary)]"
            style={{ fontFamily: "var(--heading-font)" }}
          >
            {project.number}
          </span>
          <span className="rounded-full border border-[var(--border)] px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-[var(--text-light)]">
            {project.year}
          </span>
        </div>

        <p className="mt-5 text-[11px] uppercase tracking-[0.22em] text-[var(--primary)]">
          {project.tagline}
        </p>
        <h3
          className="mt-2 text-2xl font-extrabold leading-tight tracking-tight text-[var(--text)]"
          style={{ fontFamily: "var(--heading-font)" }}
        >
          {project.title}
        </h3>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-sm leading-7 text-[var(--text-light)]">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <TechPill key={tag} tag={tag} size={12} />
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between gap-3 border-t border-[var(--border)] pt-5">
          <button
            onClick={() => onOpen(project)}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--text)] hover:text-[var(--primary)]"
          >
            View details
            <ArrowUpRight size={16} />
          </button>

          <div className="flex gap-2">
            <a
              href={project.github}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[rgba(255,255,255,0.03)] text-[var(--text-light)] hover:border-[rgba(199,168,106,0.3)] hover:text-[var(--primary)]"
            >
              <FaGithub size={14} />
            </a>
            <a
              href={project.live}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[rgba(255,255,255,0.03)] text-[var(--text-light)] hover:border-[rgba(199,168,106,0.3)] hover:text-[var(--primary)]"
            >
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section
      id="projects"
      className="relative overflow-hidden px-5 py-16 sm:px-8 sm:py-20 lg:px-12"
      style={{ fontFamily: "var(--body-font)" }}
    >
      <div className="absolute right-0 top-0 h-[420px] w-[420px] rounded-full bg-[rgba(199,168,106,0.08)] blur-[150px]" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(199,168,106,0.22)] bg-[var(--accent)] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.26em] text-[var(--primary)]">
            <span className="h-2 w-2 rounded-full bg-[var(--primary)]" />
            Selected Work
          </div>

          <div className="mt-5 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2
                className="text-4xl font-extrabold leading-[1.08] tracking-tight text-[var(--text)] sm:text-5xl lg:text-[3.6rem]"
                style={{ fontFamily: "var(--heading-font)" }}
              >
                Projects presented with clarity and purpose.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--text-light)]">
                A selection of product and engineering work that reflects my approach to quality,
                reliability, and professional execution.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} onOpen={setSelected} />
          ))}
        </motion.div>
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
