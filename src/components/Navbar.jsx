import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const whatsappLink = "https://wa.me/9764466224?text=Hello%20Harshal";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0);

      // Determine active section based on scroll position
      let current = "";
      for (const item of navItems) {
        const sectionId = item.href.substring(1);
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Adjust threshold based on your typical navbar height
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = sectionId;
          }
        }
      }
      if (current) setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        isScrolled ? "px-4 pt-4 sm:px-6 lg:px-10" : "px-0 pt-0"
      }`}
    >
      <div className="absolute left-0 top-0 z-50 h-[2px] w-full bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-[var(--primary)] via-[#dcc08d] to-[var(--secondary)] transition-all duration-100 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div
        className={`mx-auto flex items-center justify-between gap-4 transition-all duration-500 ${
          isScrolled
            ? "max-w-7xl rounded-[26px] border border-[var(--border)] bg-[rgba(16,23,42,0.82)] px-4 py-3 shadow-[0_24px_70px_rgba(0,0,0,0.28)] backdrop-blur-2xl sm:px-6 lg:px-8"
            : "max-w-full border-b border-[var(--border)] bg-[rgba(6,8,22,0.86)] px-5 py-4 backdrop-blur-xl sm:px-8 lg:px-12"
        }`}
      >
        <a href="#home" className="flex min-w-0 items-center gap-3">
          <div
            className={`flex items-center justify-center border border-[rgba(199,168,106,0.35)] bg-[var(--surface-strong)] text-sm font-semibold tracking-[0.26em] text-[var(--text)] transition-all duration-500 ${
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

        <nav className="hidden xl:block">
          <ul
            className={`flex items-center gap-1 transition-all duration-500 ${
              isScrolled
                ? "rounded-full border border-[var(--border)] bg-[rgba(255,255,255,0.02)] p-1.5"
                : "rounded-full border border-transparent bg-transparent p-1"
            }`}
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setActiveSection(item.href.substring(1))}
                    className={`block rounded-full px-4 py-2 text-sm font-medium transition duration-300 hover:bg-[var(--accent)] hover:text-[var(--text)] ${
                      isActive 
                        ? "bg-[var(--accent)] text-[var(--primary)] shadow-sm"
                        : "text-[var(--text-light)]"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[rgba(199,168,106,0.35)] bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-[#0b1020] shadow-[0_10px_30px_rgba(199,168,106,0.18)] hover:-translate-y-0.5 hover:bg-[var(--primary-hover)]"
          >
            Hire Me
          </a>
        </div>

        <button
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[rgba(255,255,255,0.03)] text-[var(--text)] transition duration-300 hover:border-[rgba(199,168,106,0.35)] md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="mx-auto mt-3 max-w-7xl md:hidden">
          <div className="overflow-hidden rounded-[28px] border border-[var(--border)] bg-[rgba(16,23,42,0.96)] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.34)] backdrop-blur-2xl">
            <div className="mb-5 rounded-2xl border border-[var(--border)] bg-[rgba(255,255,255,0.02)] px-4 py-3">
              <p className="text-sm font-semibold text-[var(--text)]">Navigation</p>
              <p className="text-xs uppercase tracking-[0.22em] text-[var(--text-light)]">
                Portfolio Sections
              </p>
            </div>

            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-between rounded-2xl border border-[var(--border)] bg-[rgba(255,255,255,0.02)] px-4 py-3 text-sm font-medium text-[var(--text)] transition duration-300 hover:border-[rgba(199,168,106,0.35)] hover:bg-[var(--accent)]"
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
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[var(--primary)] px-5 py-3.5 text-sm font-semibold text-[#0b1020]"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
