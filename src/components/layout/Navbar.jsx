import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { to: "/", text: "Inicio", ariaLabel: "Ir a la página de inicio" },
    {
      to: "/portfolio",
      text: "Portafolio",
      ariaLabel: "Ver nuestro portafolio",
    },
    { to: "/services", text: "Servicios", ariaLabel: "Nuestros servicios" },
    { to: "/about", text: "Nosotros", ariaLabel: "Sobre nosotros" },
    { to: "/contact", text: "Contacto", ariaLabel: "Contáctanos" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-brand-950/95 backdrop-blur-sm shadow-soft"
          : "bg-gradient-to-r from-brand-900 to-brand-950"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link
              to="/"
              className="flex items-center group"
              aria-label="Inicio"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2">
                <img
                  src="/logo.svg"
                  alt="Capital Code Logo"
                  className="h-12 w-auto transition-all duration-300 group-hover:scale-105 group-hover:brightness-110"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                aria-label={link.ariaLabel}
                className={`${
                  location.pathname === link.to
                    ? "text-accent-400 border-b-2 border-accent-500"
                    : "text-surface-100 hover:text-accent-300 hover:bg-brand-800/50"
                } px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 relative group`}
              >
                {link.text}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-accent-500 transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-surface-100 hover:text-accent-300 hover:bg-brand-800/50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent-500"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Abrir menú principal</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${
          isMenuOpen ? "animate-fade-in" : "hidden"
        } md:hidden bg-brand-950 shadow-soft border-t border-brand-800`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              aria-label={link.ariaLabel}
              className={`${
                location.pathname === link.to
                  ? "bg-brand-800 text-accent-400"
                  : "text-surface-100 hover:bg-brand-800/50 hover:text-accent-300"
              } block px-3 py-2 rounded-md text-base font-medium transition-all duration-200`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
