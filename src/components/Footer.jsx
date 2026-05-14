import { motion } from "framer-motion";
import { ArrowUp, Mail, MapPin, Heart } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

const navLinks = [
  { label: "Home",       href: "#home" },
  { label: "About",      href: "#about" },
  { label: "Skills",     href: "#skills" },
  { label: "Projects",   href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education",  href: "#education" },
  { label: "Contact",    href: "#contact" },
];

const socials = [
  { icon: FaGithub,     href: "#", label: "GitHub" },
  { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
  { icon: FaTwitter,    href: "#", label: "Twitter" },
  { icon: FaInstagram,  href: "#", label: "Instagram" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      id="contact"
      className="relative bg-[var(--surface)] border-t border-[var(--border)] overflow-hidden"
      style={{ fontFamily: "var(--body-font)" }}
    >
      {/* Subtle top glow */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-40 bg-[var(--primary)]/5 blur-[80px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* ── Main row ── */}
         {/* ── Main row ── */}
<motion.div
  initial={{ opacity: 0, y: 16 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  /* Changed from grid to flex for natural spacing */
  className="py-8 flex flex-col md:flex-row flex-wrap justify-between items-start gap-8"
>
  {/* 1. Brand Section */}
  <div className="flex flex-col gap-3 min-w-[200px] max-w-[260px]">
    <h3
      className="text-xl font-extrabold text-[var(--text)] tracking-tight"
      style={{ fontFamily: "var(--heading-font)" }}
    >
      Harshal<span className="text-[var(--primary)]">.</span>
    </h3>
    <p className="text-xs text-[var(--text-light)] leading-relaxed">
      Full Stack Developer building scalable, modern web apps with clean architecture.
    </p>
    <div className="flex flex-col gap-1.5">
      <span className="flex items-center gap-2 text-xs text-[var(--text-light)]">
        <MapPin size={12} className="text-[var(--primary)] shrink-0" />
        India
      </span>
      <a
        href="mailto:harshal@email.com"
        className="flex items-center gap-2 text-xs text-[var(--text-light)] hover:text-[var(--primary)] transition-colors"
      >
        <Mail size={12} className="text-[var(--primary)] shrink-0" />
        harshal@email.com
      </a>
    </div>
  </div>

  {/* 2. Quick Links */}
  <div className="min-w-[120px]">
    <p className="text-[10px] font-bold text-[var(--primary)] uppercase tracking-widest mb-4">
      Quick Links
    </p>
    <ul className="flex flex-col gap-2.5">
      {navLinks.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            className="text-xs text-[var(--text-light)] hover:text-[var(--primary)] transition-colors duration-200"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </div>

  {/* 3. Status Section */}
  <div className="min-w-[150px] max-w-[200px]">
    <p className="text-[10px] font-bold text-[var(--primary)] uppercase tracking-widest mb-4">
      Status
    </p>
    <p className="text-xs text-[var(--text-light)] leading-relaxed">
      Open for collaborations and remote opportunities worldwide.
    </p>
  </div>

  {/* 4. Connect Section - Aligns to the right because of justify-between */}
  <div className="flex flex-col items-start md:items-end min-w-[160px]">
    <p className="text-[10px] font-bold text-[var(--primary)] uppercase tracking-widest mb-4">
      Connect
    </p>
    <div className="flex gap-2 mb-4">
      {socials.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className="w-8 h-8 rounded-lg border border-[var(--border)] flex items-center justify-center text-[var(--text-light)] hover:text-[var(--primary)] hover:border-[var(--primary)] hover:bg-[var(--accent)] transition-all duration-200"
        >
          <Icon size={14} />
        </a>
      ))}
    </div>

    {/* Availability Badge */}
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--border)] bg-[var(--bg)] shadow-sm">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
      </span>
      <span className="text-[10px] font-bold text-[var(--text)] uppercase tracking-tight">
        Available for work
      </span>
    </div>
  </div>
</motion.div>

        {/* ── Bottom bar ── */}
        <div className="py-4 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[11px] text-[var(--text-light)]">
            © {year} Harshal Teli · Built with{" "}
            <Heart size={10} className="inline text-[var(--primary)] mx-0.5" fill="currentColor" />
            React & Tailwind CSS
          </p>
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-1.5 text-[11px] font-bold text-[var(--text-light)] hover:text-[var(--primary)] transition-colors uppercase tracking-widest"
          >
            Back to top
            <span className="w-5 h-5 rounded-md border border-[var(--border)] flex items-center justify-center group-hover:border-[var(--primary)] group-hover:bg-[var(--accent)] transition-all">
              <ArrowUp size={10} />
            </span>
          </button>
        </div>

      </div>
    </footer>
  );
}
