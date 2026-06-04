import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ExternalLink, X, ChevronLeft, ChevronRight, Code } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { TechPill, techMap } from "../utils/techIcons";
import project1 from "../assets/Projects/project_1.png";
import project2 from "../assets/Projects/project_2.png";
import project3 from "../assets/Projects/project_3.png";
import project7 from "../assets/Projects/project_7.png";
import project8 from "../assets/Projects/project_8.png";
import project9 from "../assets/Projects/project_9.png";

const projects = [
  {
    id: 1,
    number: "01",
    title: "Stack Trace - Employee Skill Management",
    tagline: "Full Stack Web Application",
    description:
      "Stack_Trace is a scalable workforce training platform that simplifies employee skill development and assessment. It provides secure access management, learning progress tracking, and actionable analytics for organizations.",
    longDescription:
      "Stack_Trace is a full-stack SaaS platform that helps organizations manage employee skill development, training, and workforce evaluation. It enables admins to assign skills, set completion timelines, onboard employees through secure invitation links, and track learning progress via interactive dashboards. The platform features JWT authentication, RBAC, skill assessments, certification validation, progress tracking, and automated reporting for effective workforce management.",
    tags: ["React", "Spring Boot", "MySQL"],
    year: "2026",
    live: "https://github.com/teliharshal/Stack_Trace",
    github: "https://github.com/teliharshal/Stack_Trace",
    image: project1,
    images: [project1, project2, project3],
  },
  // {
  //   id: 2,
  //   number: "02",
  //   title: "Yuva-Mitra - NGO Community Platform",
  //   tagline: "Ngo Plateform",
  //   description:
  //     "NGO Connect is a responsive web platform that connects volunteers, communities, and social initiatives through an intuitive digital experience. It delivers seamless accessibility and consistent performance across desktop, tablet, and mobile devices.",
  //   longDescription:
  //     "NGO Connect is a modern web platform designed to bridge the gap between volunteers, communities, and social causes. The application provides an engaging and user-friendly interface for discovering and participating in social initiatives while ensuring accessibility across multiple devices. Optimized for performance and responsiveness, it delivers a smooth and consistent experience on desktop, tablet, and mobile platforms.",
  //   tags: ["React","Tailwind CSS","Framer Motion"],
  //   year: "2026",
  //   live: "https://yuva-public.vercel.app/",
  //   github: "https://github.com/intern-ApplauseITSolutions/yuva--public",
  //   image: [project4],
  //   images: [project4 ,project5 , project6],
  // },
  {
    id: 3,
    number: "03",
    title: "Personal Portfolio Website",
    tagline: "Personal Portfolio",
    description:
      "Personal Portfolio Website is a modern and responsive platform showcasing projects, technical skills, certifications, and professional achievements. It features smooth animations and dark/light theme support for an engaging user experience.",
    longDescription:
      "Personal Portfolio Website is a fully responsive web application designed to present projects, technical expertise, certifications, and development experience in a professional manner. The platform incorporates smooth animations, intuitive navigation, and dark/light mode support to improve usability and visual appeal. Optimized for all devices, it delivers a seamless and interactive browsing experience.",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    year: "2026",
    live: "https://harshateli.netlify.app/",
    github: "https://github.com/teliharshal/Portfolio",
    image: project7,
    images: [project7,project8,project9],
  },
  // {
  //   id: 4,
  //   number: "04",
  //   title: "Project Delta",
  //   tagline: "Data and Reporting Solution",
  //   description:
  //     "A reporting-oriented product focused on structured data modeling, SQL performance, and business visibility.",
  //   longDescription:
  //     "This project emphasizes data-driven thinking, efficient schema decisions, and optimized query handling. It showcases how I approach backend reporting problems with a mix of clarity, performance, and maintainable design.",
  //   tags: ["SQL", "PostgreSQL", "Java"],
  //   year: "2023",
  //   live: "#",
  //   github: "#",
  //   image: null,
  //   images: [],
  // },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

/* ─── Modal ─────────────────────────────────────────────── */
function ProjectModal({ project, onClose }) {
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(1);

  const imgs = project?.images ?? [];
  const hasMultiple = imgs.length > 1;

  const go = useCallback((newDir) => {
    setDir(newDir);
    setIdx((i) => (i + newDir + imgs.length) % imgs.length);
  }, [imgs.length]);

  useEffect(() => {
    if (!hasMultiple) return;
    const t = setInterval(() => go(1), 4000);
    return () => clearInterval(t);
  }, [hasMultiple, go]);

  if (!project) return null;

  const variants = {
    enter: (d) => ({ opacity: 0, scale: 0.98 }),
    center: { opacity: 1, scale: 1, transition: { duration: 0.35, ease: "easeOut" } },
    exit: (d) => ({ opacity: 0, scale: 0.98, transition: { duration: 0.25, ease: "easeIn" } }),
  };

  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        key="bd"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md"
      />

      <motion.div
        key="mw"
        initial={{ opacity: 0, scale: 0.96, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 10 }}
        transition={{ duration: 0.28, ease: "easeOut" }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 pointer-events-none"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="relative flex w-full max-w-[1200px] flex-col sm:flex-row overflow-hidden rounded-[2rem] bg-[var(--surface)] border border-[var(--border)] shadow-2xl pointer-events-auto"
          style={{ minHeight: "500px", maxHeight: "85vh" }}
        >
          {/* Close Button - Desktop (Absolute Top Right) */}
          <button
            onClick={onClose}
            className="absolute right-6 top-6 z-20 flex h-8 w-8 items-center justify-center text-[var(--text-light)] hover:text-[var(--text)] transition-colors"
          >
            <X size={24} />
          </button>

          {/* ══ LEFT — image container ══ */}
          <div className="relative flex w-full sm:w-[55%] flex-col justify-center bg-[var(--bg)] p-6 sm:p-10 border-r border-[var(--border)]">
            {imgs.length > 0 ? (
              <div className="relative flex-1 w-full h-full min-h-[250px] flex items-center justify-center">
                <AnimatePresence custom={dir} mode="wait">
                  <motion.img
                    key={idx}
                    custom={dir}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    src={imgs[idx]}
                    alt={`${project.title} screenshot ${idx + 1}`}
                    className="w-full max-h-full object-contain"
                  />
                </AnimatePresence>
                {/* Pagination Dots */}
                {hasMultiple && (
                  <div className="absolute bottom-[-16px] left-1/2 flex -translate-x-1/2 gap-2">
                    {imgs.map((_, i) => (
                      <div key={i} className={`h-[3px] rounded-full transition-all duration-300 ${i === idx ? "w-6 bg-[var(--primary)]" : "w-3 bg-[var(--border)]"}`} />
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div className="flex h-full items-center justify-center">
                <span className="text-8xl font-black opacity-10 text-[var(--text)]" style={{ fontFamily: "var(--heading-font)" }}>{project.number}</span>
              </div>
            )}
          </div>

          {/* ══ RIGHT — project details ══ */}
          <div className="flex w-full sm:w-[45%] flex-col overflow-y-auto p-8 sm:p-12">
            
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[var(--primary)] mb-4">
              Project Detail
            </p>
            
            <h2 className="text-4xl sm:text-[2.75rem] font-black uppercase leading-[1.1] tracking-tight text-[var(--text)] mb-8" style={{ fontFamily: "var(--heading-font)" }}>
              {project.title.split(' - ')[0]}
            </h2>

            {/* Subtle accent border on description */}
            <div className="border-l-2 border-[var(--primary)]/20 pl-5 mb-10">
              <p className="text-[15px] leading-7 text-[var(--text-light)]">
                {project.description}
              </p>
            </div>

            {/* Tech stack */}
            <div>
              <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--text-light)] opacity-70">
                Tech Stack
              </p>
              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag) => {
                  const entry = techMap[tag];
                  const Icon = entry?.icon ?? Code;
                  const color = entry?.color ?? "var(--text)";
                  return (
                    <div key={tag} className="flex flex-col items-center justify-center gap-3 rounded-2xl bg-[var(--bg)] border border-[var(--border)] w-24 h-[84px] transition-transform hover:-translate-y-1 hover:border-[var(--primary)]/30">
                      <Icon size={24} style={{ color }} />
                      <span className="text-[9px] font-bold uppercase tracking-wider text-[var(--text-light)]">{tag}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-auto pt-10 flex gap-4">
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--primary)] text-[var(--primary-foreground)] px-5 py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-[var(--primary-hover)] transition-colors shadow-sm"
              >
                <ExternalLink size={14} /> Live Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--surface)] text-[var(--text-light)] px-5 py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-[var(--accent)] transition-colors border border-[var(--border)] hover:text-[var(--text)]"
              >
                <FaGithub size={14} /> Source
              </a>
            </div>

          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ─── Card ──────────────────────────────────────────────── */
function ProjectCard({ project, onOpen }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -5 }}
      className="group flex h-full flex-col rounded-[1.8rem] border border-[var(--border)] bg-[rgba(16,23,42,0.72)] shadow-[0_12px_34px_rgba(0,0,0,0.18)]"
    >
      {project.image && (
        <div className="overflow-hidden rounded-t-[1.8rem] bg-[var(--bg)]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full object-contain"
          />
        </div>
      )}

      <div className={`flex flex-col flex-1 border-b border-[var(--border)] bg-[linear-gradient(135deg,rgba(199,168,106,0.10),rgba(255,255,255,0.02))] p-5 sm:p-6 ${project.image ? "" : "rounded-t-[1.8rem]"}`}>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-extrabold tracking-tight text-[var(--primary)]"
            style={{ fontFamily: "var(--heading-font)" }}>
            {project.number}
          </span>
          <span className="rounded-full border border-[var(--border)] px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-[var(--text-light)]">
            {project.year}
          </span>
        </div>
        <p className="mt-3 text-[11px] uppercase tracking-[0.22em] text-[var(--primary)]">
          {project.tagline}
        </p>
        <div className="mt-2 flex items-start justify-between gap-4">
          <h3 className="text-xl font-extrabold leading-tight tracking-tight text-[var(--text)]"
            style={{ fontFamily: "var(--heading-font)" }}>
            {project.title}
          </h3>
          <button
            onClick={() => onOpen(project)}
            className="mt-1 shrink-0 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--text-light)] hover:text-[var(--primary)] transition-colors"
          >
            View details <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Section ───────────────────────────────────────────── */
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent)] text-[var(--primary)] text-[11px] font-bold uppercase tracking-widest mb-4 border border-[var(--primary)]/20">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--primary)] opacity-60" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[var(--primary)]" />
            </span>
            Portfolio
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--text)] leading-[1.1] tracking-tight"
              style={{ fontFamily: "var(--heading-font)" }}
            >
              My{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]">
                Projects
              </span>
            </h2>
            <p className="text-sm text-[var(--text-light)] max-w-xs leading-relaxed sm:text-right">
              A selection of product and engineering work that reflects my approach to quality,
              reliability, and professional execution.
            </p>
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
