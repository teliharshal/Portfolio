import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail, MapPin, Send, CheckCircle,
} from "lucide-react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

/* ── Contact info cards ── */
const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "harshal@email.com",
    href: "mailto:harshal@email.com",
    desc: "Best way to reach me",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "India",
    href: null,
    desc: "Open to remote & on-site",
  },
];

const socials = [
  { icon: FaGithub,     href: "#", label: "GitHub" },
  { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
  { icon: FaTwitter,    href: "#", label: "Twitter" },
];

/* ── Input / Textarea shared styles ── */
const fieldClass =
  "w-full bg-[var(--bg)] border border-[var(--border)] rounded-xl px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--text-light)] focus:outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/15 transition-all duration-200";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    /* Replace with your real form submission logic */
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1400);
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-5 sm:px-8 lg:px-12 overflow-hidden bg-[var(--bg)]"
      style={{ fontFamily: "var(--body-font)" }}
    >
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[var(--primary)]/5 blur-[140px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[var(--primary)]/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto">

        {/* ── Section header ── */}
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
            Get In Touch
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--text)] leading-[1.1] tracking-tight"
              style={{ fontFamily: "var(--heading-font)" }}
            >
              Let's{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-violet-500">
                Connect
              </span>
            </h2>
            <p className="text-sm text-[var(--text-light)] max-w-xs leading-relaxed sm:text-right">
              Have a project in mind or just want to say hi? My inbox is always open.
            </p>
          </div>
        </motion.div>

        {/* ── Two-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 lg:gap-14 items-start">

          {/* ── Left: form ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] overflow-hidden">
              {/* Card top accent */}
              <div className="h-[3px] w-full bg-gradient-to-r from-[var(--primary)] to-violet-500" />

              <div className="p-6 sm:p-8">
                {sent ? (
                  /* ── Success state ── */
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center justify-center py-12 text-center gap-4"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-[var(--accent)] border border-[var(--primary)]/20 flex items-center justify-center">
                      <CheckCircle size={28} className="text-[var(--primary)]" />
                    </div>
                    <h3
                      className="text-xl font-extrabold text-[var(--text)]"
                      style={{ fontFamily: "var(--heading-font)" }}
                    >
                      Message Sent!
                    </h3>
                    <p className="text-sm text-[var(--text-light)] max-w-xs leading-relaxed">
                      Thanks for reaching out. I'll get back to you as soon as possible.
                    </p>
                    <button
                      onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                      className="mt-2 px-5 py-2 rounded-xl bg-[var(--accent)] border border-[var(--primary)]/20 text-[var(--primary)] text-xs font-bold uppercase tracking-widest hover:bg-[var(--primary)] hover:text-white transition-all duration-300"
                    >
                      Send another
                    </button>
                  </motion.div>
                ) : (
                  /* ── Form ── */
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[11px] font-bold text-[var(--text-light)] uppercase tracking-widest">
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="Your name"
                          className={fieldClass}
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-[11px] font-bold text-[var(--text-light)] uppercase tracking-widest">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          placeholder="your@email.com"
                          className={fieldClass}
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[11px] font-bold text-[var(--text-light)] uppercase tracking-widest">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        required
                        placeholder="What's this about?"
                        className={fieldClass}
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[11px] font-bold text-[var(--text-light)] uppercase tracking-widest">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Tell me about your project or just say hello..."
                        className={`${fieldClass} resize-none`}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="group relative w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[var(--primary)] text-white text-sm font-bold overflow-hidden transition-all duration-300 hover:bg-[var(--primary-hover)] disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_4px_20px_rgba(79,70,229,0.3)] hover:shadow-[0_8px_30px_rgba(79,70,229,0.4)]"
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                          </svg>
                          Sending…
                        </>
                      ) : (
                        <>
                          <Send size={15} />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>

          {/* ── Right: info panel ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: true }}
            className="flex flex-col gap-5 lg:sticky lg:top-28"
          >
            {/* Info cards */}
            {contactInfo.map(({ icon: Icon, label, value, href, desc }) => (
              <div
                key={label}
                className="flex items-start gap-4 p-5 rounded-2xl border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--primary)]/30 transition-all duration-300 hover:shadow-[0_4px_20px_rgba(79,70,229,0.07)]"
              >
                <div className="w-10 h-10 rounded-xl bg-[var(--accent)] border border-[var(--primary)]/20 flex items-center justify-center shrink-0">
                  <Icon size={17} className="text-[var(--primary)]" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-[var(--text-light)] uppercase tracking-widest mb-0.5">
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      className="text-sm font-semibold text-[var(--text)] hover:text-[var(--primary)] transition-colors"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm font-semibold text-[var(--text)]">{value}</p>
                  )}
                  <p className="text-xs text-[var(--text-light)] mt-0.5">{desc}</p>
                </div>
              </div>
            ))}

            {/* Availability card */}
            <div className="p-5 rounded-2xl border border-[var(--primary)]/20 bg-[var(--accent)]">
              <div className="flex items-center gap-3 mb-3">
                <span className="relative flex h-2.5 w-2.5 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <p className="text-sm font-bold text-[var(--text)]">Currently Available</p>
              </div>
              <p className="text-xs text-[var(--text-light)] leading-relaxed">
                Open to full-time roles, internships, and freelance projects. Response time is usually within 24 hours.
              </p>
            </div>

            {/* Social links */}
            <div className="p-5 rounded-2xl border border-[var(--border)] bg-[var(--surface)]">
              <p className="text-[10px] font-bold text-[var(--text-light)] uppercase tracking-widest mb-3">
                Find me on
              </p>
              <div className="flex gap-2.5">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-[var(--border)] text-[var(--text-light)] text-xs font-semibold hover:text-[var(--primary)] hover:border-[var(--primary)] hover:bg-[var(--accent)] transition-all duration-200"
                  >
                    <Icon size={14} />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
