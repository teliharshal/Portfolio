import { motion } from "framer-motion";
import { ArrowRight, Download, ChevronDown } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 pt-28 pb-20"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[var(--primary)]/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-500/10 blur-[120px] rounded-full"></div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto text-center relative z-10 pb-20 sm:pb-6">
        
        {/* Subtle Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border)] bg-[var(--surface)]/50 backdrop-blur-md mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-xs sm:text-sm font-medium tracking-wider text-[var(--text-light)] uppercase">
            Available for new opportunities
          </span>
        </motion.div>

        {/* Main Heading - Responsive text scaling */}
      <motion.h1
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2, duration: 0.7 }}
  className="text-5xl sm:text-7xl md:text-8xl lg:text-[100px] font-extrabold leading-[1.1] tracking-[-0.03em] text-[var(--text)]"
>
  <span className="italic">Harshal</span>{" "}
  <span className="italic inline-block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-500 drop-shadow-sm pr-4">
    Teli
  </span>
</motion.h1>

        {/* Animated Role Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-xl sm:text-2xl md:text-4xl font-bold text-[var(--text)]"
        >
          <span>A dedicated </span>
          <span className="text-indigo-600 block sm:inline">
            <TypeAnimation
              sequence={[
                "Full Stack Developer", 2000,
                "Backend Developer", 2000,
                "Frontend Developer", 2000,
              ]}
              speed={40}
              repeat={Infinity}
            />
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-8 max-w-2xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed text-[var(--text-light)]"
        >
          Building scalable, modern web applications with a focus on 
          <span className="text-[var(--text)] font-medium"> clean architecture</span> and 
          <span className="text-[var(--text)] font-medium"> performance</span>.
        </motion.p>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6"
        >
          <button className="w-full sm:w-auto px-8 py-4 rounded-xl  text-white font-bold flex items-center justify-center gap-2 bg-black transition-all shadow-lg shadow-indigo-200">
            View Projects
            <ArrowRight size={20} />
          </button>

          <button className="w-full sm:w-auto px-8 py-4 rounded-xl border-2 border-[var(--border)] bg-transparent text-[var(--text)] font-bold flex items-center justify-center gap-2 hover:bg-[var(--surface)] transition-all">
            <Download size={20} />
            Resume
          </button>
        </motion.div>

        {/* Social Links */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="flex justify-center gap-6 mt-16"
        >
          {[
            { icon: <FaGithub />, link: "#" },
            { icon: <FaLinkedinIn />, link: "#" }
          ].map((social, index) => (
            <a
              key={index}
              href={social.link}
              className="p-3 rounded-full border border-[var(--border)] text-[var(--text-light)] hover:text-indigo-600 hover:border-indigo-600 transition-all duration-300"
            >
              {social.icon}
            </a>
          ))}
        </motion.div> */}
      </div>

      {/* Scroll Down Button */}
      <div className="pt-10">
      <motion.button
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 p-3 rounded-full border border-[var(--border)] text-[var(--text-light)] hover:text-indigo-600 hover:border-indigo-600 transition-all duration-300 bg-[var(--surface)]/50 backdrop-blur-md cursor-pointer z-20"
      >
        <ChevronDown size={24} />
      </motion.button>
      </div>
    </section>
  );
}

export default Hero;