import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

const ROLES = [
  "Full Stack Developer",
  "Java Backend Engineer",
  "React Frontend Developer",
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

function useTypewriter(text, speed = 55, startDelay = 0) {
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

// Cycles through roles with typewriter + erase effect
function useRoleCycle(roles, typeSpeed = 70, eraseSpeed = 35, pauseMs = 1800) {
  const [roleIdx, setRoleIdx] = useState(0);
  const [text, setText] = useState("");
  const [erasing, setErasing] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    let timeout;

    if (!erasing && text.length < current.length) {
      timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), typeSpeed);
    } else if (!erasing && text.length === current.length) {
      timeout = setTimeout(() => setErasing(true), pauseMs);
    } else if (erasing && text.length > 0) {
      timeout = setTimeout(() => setText(text.slice(0, -1)), eraseSpeed);
    } else if (erasing && text.length === 0) {
      setErasing(false);
      setRoleIdx((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [text, erasing, roleIdx, roles, typeSpeed, eraseSpeed, pauseMs]);

  return text;
}

function Hero() {
  const { displayed: name, done: nameDone } = useTypewriter("Harshal Teli", 80, 400);
  const role = useRoleCycle(ROLES, 70, 35, 1800);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center px-5 pb-8 pt-20 sm:px-8 lg:px-12"
    >
      {/* Background glows */}
      <div className="absolute left-1/4 top-20 h-96 w-96 rounded-full bg-[rgba(199,168,106,0.09)] blur-[160px]" />
      <div className="absolute right-1/4 bottom-20 h-80 w-80 rounded-full bg-[rgba(142,163,199,0.09)] blur-[140px]" />

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center gap-6"
        >
          {/* Badge */}
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-[rgba(199,168,106,0.22)] bg-[rgba(255,255,255,0.03)] px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--primary)]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />
            Available for professional opportunities
          </motion.div>

          {/* Name with typewriter */}
          <motion.h1
            variants={fadeUp}
            className="w-full text-5xl font-extrabold italic leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] via-[#dcc08d] to-[var(--secondary)] sm:text-6xl lg:text-7xl xl:text-8xl"
            style={{ fontFamily: "var(--heading-font)" }}
          >
            {name}
            {!nameDone && (
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.6, repeat: Infinity, ease: "linear" }}
                className="ml-1 inline-block h-[0.85em] w-[4px] translate-y-[2px] rounded-sm bg-[var(--primary)]"
              />
            )}
          </motion.h1>

          {/* Cycling role */}
          <motion.div
            variants={fadeUp}
            className="flex h-9 items-center justify-center"
          >
            <span className="text-lg font-semibold text-[var(--primary)] sm:text-xl">
              {role}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.6, repeat: Infinity, ease: "linear" }}
                className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[1px] rounded-sm bg-[var(--primary)]"
              />
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="max-w-xl text-sm leading-7 text-[var(--text-light)] sm:text-base sm:leading-8"
          >
            Full stack developer focused on clean architecture, elegant interfaces,
            and web products that feel professional from the first interaction.
          </motion.p>

          {/* Buttons */}
          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-2xl bg-[var(--primary)] px-7 py-3 text-sm font-semibold text-[#0b1020] shadow-[0_14px_40px_rgba(199,168,106,0.20)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--primary-hover)]"
            >
              View Projects
              <ArrowRight size={16} />
            </a>
            <a
              href="/Harshal_Teli_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border border-[var(--border)] bg-[rgba(255,255,255,0.03)] px-7 py-3 text-sm font-semibold text-[var(--text)] transition-all duration-200 hover:border-[rgba(199,168,106,0.32)] hover:bg-[var(--accent)]"
            >
              <Download size={16} />
              Resume
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
