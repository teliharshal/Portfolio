import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "harshal@email.com",
    href: "mailto:harshal@email.com",
    desc: "Best for project discussions and opportunities",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "India",
    href: null,
    desc: "Available for remote and on-site collaboration",
  },
];

const socials = [
  { icon: FaGithub, href: "#", label: "GitHub" },
  { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
  { icon: FaTwitter, href: "#", label: "Twitter" },
];

const fieldClass =
  "w-full rounded-2xl border border-[var(--border)] bg-[rgba(255,255,255,0.03)] px-4 py-3.5 text-sm text-[var(--text)] placeholder:text-[var(--text-light)] focus:outline-none focus:border-[rgba(199,168,106,0.35)] focus:ring-2 focus:ring-[rgba(199,168,106,0.12)]";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1400);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden px-5 py-16 sm:px-8 sm:py-20 lg:px-12"
      style={{ fontFamily: "var(--body-font)" }}
    >
      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-[rgba(199,168,106,0.08)] blur-[130px]" />

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
            Contact
          </div>

          <div className="mt-5 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2
                className="text-4xl font-extrabold leading-[1.08] tracking-tight text-[var(--text)] sm:text-5xl lg:text-[3.6rem]"
                style={{ fontFamily: "var(--heading-font)" }}
              >
                Let&apos;s talk about your next product.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--text-light)]">
                If you are looking for a developer who values quality, clarity, and professional execution,
                I would be glad to connect.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch lg:gap-10">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex h-full flex-col rounded-[2rem] border border-[var(--border)] bg-[rgba(16,23,42,0.74)] p-6 shadow-[0_22px_60px_rgba(0,0,0,0.24)] sm:p-8"
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="flex flex-1 flex-col items-center justify-center gap-4 text-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[rgba(199,168,106,0.22)] bg-[var(--accent)]">
                  <CheckCircle size={28} className="text-[var(--primary)]" />
                </div>
                <h3
                  className="text-2xl font-extrabold text-[var(--text)]"
                  style={{ fontFamily: "var(--heading-font)" }}
                >
                  Message Sent Successfully
                </h3>
                <p className="max-w-md text-sm leading-7 text-[var(--text-light)]">
                  Thank you for reaching out. I will review your message and get back to you as soon as possible.
                </p>
                <button
                  onClick={() => {
                    setSent(false);
                    setForm({ name: "", email: "", subject: "", message: "" });
                  }}
                  className="mt-2 rounded-2xl bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-[#0b1020] hover:bg-[var(--primary-hover)]"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-1 flex-col gap-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-light)]">
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
                  <div className="flex flex-col gap-2">
                    <label className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-light)]">
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

                <div className="flex flex-col gap-2">
                  <label className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-light)]">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    placeholder="Project inquiry"
                    className={fieldClass}
                  />
                </div>

                <div className="flex flex-1 flex-col gap-2">
                  <label className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-light)]">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Tell me about your project, goals, and timeline."
                    className={`${fieldClass} flex-1 resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[var(--primary)] px-6 py-4 text-sm font-semibold text-[#0b1020] shadow-[0_14px_40px_rgba(199,168,106,0.16)] hover:bg-[var(--primary-hover)] disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <svg className="h-4 w-4 animate-spin text-[#0b1020]" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex h-full flex-col gap-5"
          >
            {contactInfo.map(({ icon: Icon, label, value, href, desc }) => (
              <div
                key={label}
                className="rounded-[1.7rem] border border-[var(--border)] bg-[rgba(16,23,42,0.72)] p-5 shadow-[0_14px_40px_rgba(0,0,0,0.16)]"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[rgba(199,168,106,0.18)] bg-[var(--accent)]">
                    <Icon size={18} className="text-[var(--primary)]" />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-light)]">
                      {label}
                    </p>
                    {href ? (
                      <a href={href} className="mt-2 block text-lg font-semibold text-[var(--text)] hover:text-[var(--primary)]">
                        {value}
                      </a>
                    ) : (
                      <p className="mt-2 text-lg font-semibold text-[var(--text)]">{value}</p>
                    )}
                    <p className="mt-2 text-sm leading-7 text-[var(--text-light)]">{desc}</p>
                  </div>
                </div>
              </div>
            ))}

            <div className="flex flex-1 flex-col rounded-[1.7rem] border border-[var(--border)] bg-[rgba(16,23,42,0.72)] p-5 shadow-[0_14px_40px_rgba(0,0,0,0.16)]">
              <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-light)]">
                Professional Presence
              </p>
              <div className="mt-auto pt-4 flex gap-3">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="flex h-12 flex-1 items-center justify-center rounded-2xl border border-[var(--border)] bg-[rgba(255,255,255,0.03)] text-[var(--text-light)] hover:border-[rgba(199,168,106,0.3)] hover:text-[var(--primary)]"
                  >
                    <Icon size={16} />
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
