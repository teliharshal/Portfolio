import { useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setDarkMode(!darkMode);
  };

  const navItems = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Contact",
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[var(--bg)]/80 backdrop-blur-xl border-b border-[var(--border)]">
      
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text)]">
              Harshal
              <span className="text-[var(--secondary)]">
                .
              </span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="relative text-[15px] font-medium text-[var(--text-light)] transition duration-300 hover:text-[var(--secondary)] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[var(--secondary)] after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">

            {/* Dark Mode */}
            <button
              onClick={toggleDarkMode}
              className="w-11 h-11 rounded-full border border-[var(--border)] bg-[var(--surface)] flex items-center justify-center hover:scale-105 transition duration-300 shadow-sm"
            >
              {darkMode ? (
                <Sun size={18} className="text-[var(--text)]" />
              ) : (
                <Moon size={18} className="text-[var(--text)]" />
              )}
            </button>

            {/* Resume Button */}
            <button className="px-6 py-3 rounded-full bg-[var(--secondary)] text-white font-medium hover:scale-105 hover:shadow-xl transition duration-300">
              Resume
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[var(--text)]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden py-6 border-t border-[var(--border)]">

            <ul className="flex flex-col gap-6">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setMenuOpen(false)}
                    className="text-lg font-medium text-[var(--text-light)] hover:text-[var(--secondary)] transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile Actions */}
            <div className="flex items-center gap-4 mt-8">

              <button
                onClick={toggleDarkMode}
                className="w-11 h-11 rounded-full border border-[var(--border)] bg-[var(--surface)] flex items-center justify-center"
              >
                {darkMode ? (
                  <Sun size={18} className="text-[var(--text)]" />
                ) : (
                  <Moon size={18} className="text-[var(--text)]" />
                )}
              </button>

              <button className="flex-1 py-3 rounded-full bg-[var(--secondary)] text-white font-medium">
                Resume
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;