import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const links = [
  {
    icon: FaGithub,
    label: "GitHub",
    value: "github.com/teliharshal",
    href: "https://github.com/teliharshal",
    desc: "Browse my open-source work and repositories",
    color: "#9f8cc7",
    bg: "rgba(159,140,199,0.10)",
    border: "rgba(159,140,199,0.22)",
  },
  {
    icon: FaLinkedinIn,
    label: "LinkedIn",
    value: "linkedin.com/in/harshal-teli",
    href: "https://www.linkedin.com/in/harshal-teli/",
    desc: "Connect with me professionally",
    color: "#0A66C2",
    bg: "rgba(10,102,194,0.10)",
    border: "rgba(10,102,194,0.28)",
  },
  {
    icon: FaTwitter,
    label: "Twitter / X",
    value: "@Teli_Harshal_",
    href: "https://x.com/Teli_Harshal_",
    desc: "Follow me for tech thoughts and updates",
    color: "#1d9bf0",
    bg: "rgba(29,155,240,0.10)",
    border: "rgba(29,155,240,0.24)",
  },
  {
    icon: Mail,
    label: "Email",
    value: "teliharshal40@gmail.com",
    href: "mailto:teliharshal40@gmail.com",
    desc: "Best for project discussions and opportunities",
    color: "#c7a86a",
    bg: "rgba(199,168,106,0.10)",
    border: "rgba(199,168,106,0.28)",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "India — Remote",
    href: null,
    desc: "Available for remote and on-site collaboration",
    color: "#8ea3c7",
    bg: "rgba(142,163,199,0.10)",
    border: "rgba(142,163,199,0.22)",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-5 py-16 sm:px-8 sm:py-20 lg:px-12"
      style={{ fontFamily: "var(--body-font)" }}
    >
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-[rgba(199,168,106,0.08)] blur-[130px]" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[rgba(142,163,199,0.07)] blur-[120px]" />

      <div className="mx-auto max-w-7xl">

        {/* Header */}
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
            Contact
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--text)] leading-[1.1] tracking-tight"
              style={{ fontFamily: "var(--heading-font)" }}
            >
              Let&apos;s{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]">
                Connect
              </span>
            </h2>
            <p className="text-sm text-[var(--text-light)] max-w-xs leading-relaxed sm:text-right">
              I am open to full-time roles, internships, and freelance projects.
              Reach out through any of the channels below.
            </p>
          </div>
        </motion.div>

        {/* Link cards grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {links.map(({ icon: Icon, label, value, href, desc, color, bg, border }) => {
            const Card = (
              <motion.div
                key={label}
                variants={item}
                whileHover={{ y: -4 }}
                className="group flex flex-col gap-4 rounded-[1.6rem] border p-5 transition-all duration-300"
                style={{
                  borderColor: border,
                  background: `linear-gradient(135deg, ${bg}, rgba(255,255,255,0.01))`,
                }}
              >
                {/* Icon + label row */}
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-xl border"
                    style={{ borderColor: border, background: bg }}
                  >
                    <Icon size={20} style={{ color }} />
                  </div>
                  <p
                    className="text-[11px] font-bold uppercase tracking-[0.24em]"
                    style={{ color }}
                  >
                    {label}
                  </p>
                </div>

                {/* Value */}
                <p className="text-base font-semibold text-[var(--text)] group-hover:text-[var(--primary)] transition-colors">
                  {value}
                </p>

                {/* Description */}
                <p className="text-xs leading-5 text-[var(--text-light)]">{desc}</p>
              </motion.div>
            );

            return href ? (
              <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                {Card}
              </a>
            ) : (
              <div key={label}>{Card}</div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
