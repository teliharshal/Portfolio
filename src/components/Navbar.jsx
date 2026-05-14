import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const whatsappLink = "https://wa.me/919000000000?text=Hello%20Harshal";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    setDarkMode(document.documentElement.classList.contains("dark"));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const toggleDarkMode = () => {
    const nextMode = !darkMode;
    document.documentElement.classList.toggle("dark", nextMode);
    setDarkMode(nextMode);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        isScrolled ? "px-4 pt-4 sm:px-6 lg:px-10" : "px-0 pt-0"
      }`}
    >
      {/* Scroll progress bar */}
      <div className="absolute top-0 left-0 w-full h-[3px] z-50 bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-[var(--primary)] to-violet-500 transition-all duration-100 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      <div
        className={`mx-auto flex items-center justify-between gap-4 transition-all duration-500 ${
          isScrolled
            ? "max-w-7xl rounded-[28px] border border-[var(--border)] bg-[var(--surface)]/82 px-4 py-3 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur-2xl sm:px-6 lg:px-8"
            : "max-w-full border-b border-[var(--border)] bg-[var(--surface)]/78 px-5 py-4 backdrop-blur-xl sm:px-8 lg:px-12"
        }`}
      >
        <a href="#home" className="flex min-w-0 items-center gap-3">
          <div
            className={`flex items-center justify-center bg-[var(--secondary)] text-sm font-semibold tracking-[0.24em] text-white shadow-lg shadow-black/10 transition-all duration-500 ${
              isScrolled ? "h-11 w-11 rounded-2xl" : "h-12 w-12 rounded-3xl"
            }`}
          >
            HT
          </div>
          <div className="min-w-0">
            <p className="truncate text-[0.98rem] font-semibold tracking-tight text-[var(--text)]">
              Harshal Teli
            </p>
            <p className="truncate text-[0.68rem] uppercase tracking-[0.26em] text-[var(--text-light)]">
              Full Stack Developer
            </p>
          </div>
        </a>

        <nav className="hidden lg:block">
          <ul
            className={`flex items-center gap-1 transition-all duration-500 ${
              isScrolled
                ? "rounded-full border border-[var(--border)] bg-[var(--bg)]/70 p-1.5 shadow-inner"
                : "rounded-full border border-transparent bg-transparent p-1"
            }`}
          >
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`block rounded-full px-4 py-2 text-sm font-medium text-[var(--text-light)] transition duration-300 hover:text-[var(--text)] ${
                    isScrolled ? "hover:bg-[var(--surface)]" : "hover:bg-[var(--accent)]"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle theme"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg)]/70 text-[var(--text)] transition duration-300 hover:-translate-y-0.5 hover:border-[var(--text-light)]"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--secondary)] px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-emerald-200"
       >
            Hire
          </a>
        </div>

        <button
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg)]/70 text-[var(--text)] transition duration-300 hover:border-[var(--text-light)] md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="mx-auto mt-3 max-w-7xl md:hidden">
          <div className="overflow-hidden rounded-[28px] border border-[var(--border)] bg-[var(--surface)]/96 p-5 shadow-[0_24px_70px_rgba(15,23,42,0.12)] backdrop-blur-2xl">
            <div className="mb-5 flex items-center justify-between rounded-2xl bg-[var(--bg)]/80 px-4 py-3">
              <div>
                <p className="text-sm font-semibold text-[var(--text)]">Navigation</p>
                <p className="text-xs uppercase tracking-[0.22em] text-[var(--text-light)]">
                  Portfolio Sections
                </p>
              </div>
              <button
                onClick={toggleDarkMode}
                aria-label="Toggle theme"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text)]"
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>

            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-between rounded-2xl border border-transparent bg-[var(--bg)]/75 px-4 py-3 text-sm font-medium text-[var(--text)] transition duration-300 hover:border-[var(--border)] hover:bg-[var(--surface)]"
                  >
                    <span>{item.label}</span>
                    <span className="text-lg leading-none text-[var(--text-light)]">+</span>
                  </a>
                </li>
              ))}
            </ul>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-5 py-3.5 text-sm font-semibold text-white"
            >
              <FaWhatsapp size={16} />
              Hire 
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
