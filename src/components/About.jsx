import { motion } from "framer-motion";
import profileImg from "../assets/profile.jpg";

const highlights = [
  {
    label: "Development",
    text: "Building stable full stack systems with strong structure, performance, and maintainability.",
  },
  // {
  //   label: "Design Sense",
  //   text: "Creating interfaces that feel polished, readable, and aligned with business needs.",
  // },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-5 py-16 sm:px-8 sm:py-20 lg:px-12"
    >
      <div className="absolute left-0 top-12 h-72 w-72 rounded-full bg-[rgba(199,168,106,0.08)] blur-[130px]" />

      <div className="mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative flex justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-[380px]">
              <div className="absolute -inset-4 rounded-[2rem] border border-[var(--border)] bg-[rgba(255,255,255,0.02)]" />
              <div className="relative overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-3 shadow-[0_24px_70px_rgba(0,0,0,0.28)]">
                <img
                  src={profileImg}
                  alt="Harshal Teli"
                  className="w-full rounded-[1.55rem] object-cover object-top"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="rounded-[2rem] border border-[var(--border)] bg-[rgba(16,23,42,0.74)] p-6 shadow-[0_22px_60px_rgba(0,0,0,0.24)] backdrop-blur-xl sm:p-8 lg:p-9">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[rgba(199,168,106,0.22)] bg-[var(--accent)] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.26em] text-[var(--primary)]">
                <span className="h-2 w-2 rounded-full bg-[var(--primary)]" />
                About Me
              </div>

              <h2
                className="max-w-3xl text-3xl font-extrabold leading-[1.12] tracking-tight text-[var(--text)] sm:text-4xl lg:text-[3.1rem]"
                style={{ fontFamily: "var(--heading-font)" }}
              >
                Professional, focused, and committed to building products that last.
              </h2>

              <p className="mt-5 max-w-2xl text-[15px] leading-8 text-[var(--text-light)] sm:text-base">
                I work at the intersection of engineering and presentation, combining clean
                backend logic with thoughtful frontend execution. My goal is to create digital
                products that not only function well, but also inspire confidence in the people using them.
              </p>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {highlights.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-[var(--border)] bg-[rgba(255,255,255,0.03)] p-5"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">
                      {item.label}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-[var(--text-light)]">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
