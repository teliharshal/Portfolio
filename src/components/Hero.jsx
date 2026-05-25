import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import profileImg from "../assets/profile.jpg";

const socialLinks = [
  { icon: FaGithub, href: "#", label: "GitHub" },
  { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
];

const HEADING = "Building dependable digital products with a classic, modern edge.";

// Stagger container
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 44, scale: 0.97 },
  show: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.75, ease: "easeOut", delay: 0.3 } },
};

function useTypewriter(text, speed = 32, startDelay = 500) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    setDisplayed("");
    setDone(false);

    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
      return () => clearInterval(interval);
    }, startDelay);

    return () => clearTimeout(timeout);
  }, [text, speed, startDelay]);

  return { displayed, done };
}

function Hero() {
  const { displayed, done } = useTypewriter(HEADING, 30, 600);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-x-hidden px-5 pb-4 pt-20 sm:px-8 lg:px-12 lg:pt-24"
    >
      <div className="absolute left-0 top-16 h-80 w-80 rounded-full bg-[rgba(199,168,106,0.10)] blur-[140px]" />
      <div className="absolute right-0 top-28 h-72 w-72 rounded-full bg-[rgba(142,163,199,0.10)] blur-[140px]" />

      {/* max-w-7xl matches the navbar container */}
      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-6 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12">

        {/* TEXT COLUMN */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-5"
        >
          {/* Badge */}
          <motion.div
            variants={fadeLeft}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-[rgba(199,168,106,0.22)] bg-[rgba(255,255,255,0.03)] px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--primary)]"
          >
            <span className="h-2 w-2 rounded-full bg-[var(--primary)]" />
            Available for professional opportunities
          </motion.div>

          {/* Typewriter heading */}
          <motion.h1
            variants={fadeUp}
            className="text-3xl font-extrabold leading-[1.15] tracking-tight text-[var(--text)] sm:text-4xl lg:text-[2.8rem] lg:leading-[1.18]"
            style={{ fontFamily: "var(--heading-font)" }}
          >
            {displayed}
            {/* blinking cursor while typing */}
            {!done && (
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.7, repeat: Infinity, ease: "linear" }}
                className="ml-0.5 inline-block h-[1em] w-[3px] translate-y-[2px] rounded-sm bg-[var(--primary)]"
              />
            )}
          </motion.h1>

          {/* Description — fades in after heading is done */}
          <motion.p
            variants={fadeUp}
            className="max-w-lg text-sm leading-6 text-[var(--text-light)] sm:text-base sm:leading-7"
          >
            I am Harshal Teli, a full stack developer focused on clean architecture,
            elegant interfaces, and web products that feel professional from the first interaction.
          </motion.p>

          {/* Buttons */}
          <motion.div variants={fadeUp} className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-[#0b1020] shadow-[0_14px_40px_rgba(199,168,106,0.18)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--primary-hover)]"
            >
              View Projects
              <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[var(--border)] bg-[rgba(255,255,255,0.03)] px-6 py-3 text-sm font-semibold text-[var(--text)] transition-all duration-200 hover:border-[rgba(199,168,106,0.32)] hover:bg-[var(--accent)]"
            >
              <Download size={16} />
               Resume
            </a>
          </motion.div>

          {/* Info Grid */}
          <motion.div variants={fadeUp} className="grid gap-3 sm:grid-cols-3">
            {[
              { label: "Focus", value: "Full Stack Dev" },
              { label: "Approach", value: "Clean & Scalable" },
              { label: "Based In", value: "India, Remote" },
            ].map(({ label, value }) => (
              <div key={label} className="rounded-2xl border border-[var(--border)] bg-[rgba(255,255,255,0.02)] p-3.5">
                <p className="text-[10px] uppercase tracking-[0.24em] text-[var(--text-light)]">{label}</p>
                <p className="mt-1 text-sm font-semibold text-[var(--text)]">{value}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* IMAGE COLUMN */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          animate="show"
          className="relative flex items-center justify-center lg:justify-end"
        >
          <div className="relative w-[270px] lg:w-[300px]">
            <div className="absolute -left-5 top-6 h-20 w-20 rounded-[1.75rem] border border-[rgba(199,168,106,0.12)] bg-[rgba(255,255,255,0.01)]" />
            <div className="absolute -right-4 bottom-8 h-16 w-16 rounded-full border border-[rgba(142,163,199,0.14)] bg-[rgba(142,163,199,0.04)]" />

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[linear-gradient(180deg,rgba(16,23,42,0.92),rgba(10,15,28,0.98))] p-3 shadow-[0_28px_80px_rgba(0,0,0,0.34)]"
            >
              <div className="overflow-hidden rounded-[1.6rem] border border-[rgba(255,255,255,0.06)] bg-[var(--surface-strong)]">
                <img
                  src={profileImg}
                  alt="Harshal Teli"
                  className="h-[290px] w-full object-cover object-top lg:h-[320px]"
                />
              </div>

              <div className="mt-3 flex items-center justify-between rounded-[1.4rem] border border-[var(--border)] bg-[rgba(255,255,255,0.03)] px-3 py-2.5">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.22em] text-[var(--text-light)]">
                    Professional Profile
                  </p>
                  <p className="mt-0.5 text-xs font-semibold text-[var(--text)]">
                    Developer with design awareness
                  </p>
                </div>
                <div className="flex gap-1.5">
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className="flex h-8 w-8 items-center justify-center rounded-xl border border-[var(--border)] bg-[rgba(255,255,255,0.02)] text-[var(--text-light)] transition-colors duration-200 hover:border-[rgba(199,168,106,0.35)] hover:text-[var(--primary)]"
                    >
                      <Icon size={13} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;
