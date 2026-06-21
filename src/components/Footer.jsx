import { motion } from "framer-motion";
import { ArrowUp, Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const navLinks = [
  { label: "About", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: FaGithub, href: "https://github.com/teliharshal", label: "GitHub" },
  { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/harshal-teli/", label: "LinkedIn" },
  { icon: FaTwitter, href: "https://x.com/Teli_Harshal_", label: "Twitter" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      className="relative overflow-hidden border-t border-[var(--border)] bg-[rgba(10,15,28,0.94)]"
      style={{ fontFamily: "var(--body-font)" }}
    >
      <div className="absolute left-1/2 top-0 h-40 w-96 -translate-x-1/2 rounded-full bg-[rgba(199,168,106,0.08)] blur-[90px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid gap-8 py-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-[1.1fr_0.8fr_0.8fr_0.9fr]"
        >
          <div className="max-w-sm">
            <h3
              className="text-2xl font-extrabold tracking-tight text-[var(--text)]"
              style={{ fontFamily: "var(--heading-font)" }}
            >
              Harshal Teli
            </h3>
            <p className="mt-4 text-sm leading-7 text-[var(--text-light)]">
              Full stack developer building refined digital experiences with a focus on clean code,
              usability, and dependable execution.
            </p>
            <div className="mt-5 flex flex-col gap-2">
              <span className="flex items-center gap-2 text-sm text-[var(--text-light)]">
                <MapPin size={14} className="text-[var(--primary)]" />
                India
              </span>
              <a
                href="mailto:harshal@email.com"
                className="flex items-center gap-2 text-sm text-[var(--text-light)] hover:text-[var(--primary)]"
              >
                <Mail size={14} className="text-[var(--primary)]" />
                teliharshal40@gmail.com
              </a>
            </div>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--primary)]">Navigation</p>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-[var(--text-light)] hover:text-[var(--text)]">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--primary)]">Availability</p>
            <div className="mt-4 rounded-[1.5rem] border border-[var(--border)] bg-[rgba(255,255,255,0.03)] p-4">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                <span className="text-sm font-semibold text-[var(--text)]">Open to opportunities</span>
              </div>
              <p className="mt-3 text-sm leading-7 text-[var(--text-light)]">
                Available for internships, freelance projects, and full-time roles.
              </p>
            </div>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--primary)]">Connect</p>
            <div className="mt-4 flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] bg-[rgba(255,255,255,0.03)] text-[var(--text-light)] hover:border-[rgba(199,168,106,0.3)] hover:text-[var(--primary)]"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-[var(--border)] py-5 sm:flex-row">
          <p className="text-sm text-[var(--text-light)]">
            © {year} Harshal Teli. Crafted with React and Tailwind CSS.
          </p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--text-light)] hover:text-[var(--primary)]"
          >
            Back to top
            <span className="flex h-8 w-8 items-center justify-center rounded-xl border border-[var(--border)] bg-[rgba(255,255,255,0.03)]">
              <ArrowUp size={14} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
