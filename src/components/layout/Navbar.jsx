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
<<<<<<< HEAD
    <div className="fixed w-full z-50">
      <motion.nav
        role="navigation"
        aria-label="Navegación principal"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-[#001233] shadow-lg border-b border-[#001845]/20"
            : "bg-[#001233]"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex items-center justify-between ${isScrolled ? "py-3" : "py-5"}`}>
            {/* Logo */}
            <Link 
              to="/"
              className="flex items-center space-x-3"
              aria-label="Capital Code - Ir a la página de inicio"
            >
              <div className={isScrolled ? "bg-[#001845] rounded-lg p-1.5" : "bg-[#001845] rounded-lg p-1.5"}>
                <img
                  src="/logo.svg"
                  alt="Capital Code Logo"
                  className="h-7 w-auto"
                />
              </div>
              <span className="text-[#CAF0F8] font-medium">
                Capital Code
              </span>
            </Link>

            {/* Desktop navigation */}
            <nav className="hidden md:flex md:items-center md:space-x-6">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  aria-label={link.ariaLabel}
                  className={`relative text-[15px] font-medium transition-colors duration-200 ${
                    location.pathname === link.to
                      ? "text-[#00B4D8]"
                      : "text-[#90E0EF] hover:text-[#CAF0F8]"
                  }`}
                >
                  {link.text}
                  {location.pathname === link.to && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#00B4D8]"
                      layoutId="activeIndicator"
                    />
                  )}
                </Link>
              ))}
            </nav>

=======
    <div className="relative">
      <motion.nav
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.2 }}
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

>>>>>>> fix-mobile-nav
            {/* Mobile menu button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-surface-100 hover:text-accent-300 hover:bg-brand-800/50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent-500"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">
                {isMenuOpen ? "Cerrar menú" : "Abrir menú"}
              </span>
<<<<<<< HEAD
              <div className="relative w-5 h-5">
                <motion.span
                  className="absolute h-0.5 w-full bg-current"
                  animate={{
                    top: isMenuOpen ? "50%" : "25%",
                    rotate: isMenuOpen ? 45 : 0,
                    translateY: isMenuOpen ? "-50%" : 0,
                  }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="absolute top-1/2 h-0.5 w-full bg-current"
                  animate={{
                    opacity: isMenuOpen ? 0 : 1,
                    translateY: "-50%",
                  }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="absolute h-0.5 w-full bg-current"
                  animate={{
                    bottom: isMenuOpen ? "50%" : "25%",
                    rotate: isMenuOpen ? -45 : 0,
                    translateY: isMenuOpen ? "50%" : 0,
                  }}
                  transition={{ duration: 0.2 }}
=======
              <div className="relative w-6 h-5">
                <motion.span
                  className="absolute h-0.5 w-full bg-current rounded-full"
                  animate={{
                    top: "20%",
                  }}
                />
                <motion.span
                  className="absolute top-1/2 h-0.5 w-full bg-current rounded-full"
                  animate={{
                    opacity: 1,
                    translateY: "-50%",
                  }}
                />
                <motion.span
                  className="absolute h-0.5 w-full bg-current rounded-full"
                  animate={{
                    bottom: "20%",
                  }}
>>>>>>> fix-mobile-nav
                />
              </div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-[#001233]/80 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
<<<<<<< HEAD
            
=======

>>>>>>> fix-mobile-nav
            {/* Menu */}
            <motion.div
              id="mobile-menu"
              role="menu"
              aria-label="Menú móvil"
<<<<<<< HEAD
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 md:hidden"
              style={{
                top: isScrolled ? '60px' : '76px'
              }}
            >
              <nav className="bg-[#001233] backdrop-blur-md p-2">
                {links.map((link, index) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={link.to}
                      role="menuitem"
                      aria-label={link.ariaLabel}
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex items-center justify-between w-full px-4 py-3 text-base font-medium rounded-lg transition-colors duration-200 ${
                        location.pathname === link.to
                          ? "bg-[#001845] text-[#00B4D8]"
                          : "text-[#90E0EF] hover:bg-[#001845]/50 hover:text-[#CAF0F8]"
                      }`}
                    >
                      {link.text}
                      {location.pathname === link.to && (
                        <motion.div
                          className="w-1.5 h-1.5 rounded-full bg-[#00B4D8]"
                          layoutId="mobileActiveIndicator"
                        />
                      )}
                    </Link>
                  </motion.div>
                ))}
=======
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 md:hidden bg-[#001233]"
            >
              <nav className="h-full">
                {/* Close button at the top */}
                <div className="flex justify-end p-4">
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 text-[#CAF0F8] hover:text-[#00B4D8] focus:outline-none"
                    aria-label="Cerrar menú"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                {/* Menu items */}
                <div className="px-4 pt-4">
                  {links.map((link, index) => (
                    <motion.div
                      key={link.to}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="mb-4"
                    >
                      <Link
                        to={link.to}
                        role="menuitem"
                        aria-label={link.ariaLabel}
                        onClick={() => setIsMenuOpen(false)}
                        className={`flex items-center justify-between w-full px-4 py-4 text-lg font-medium rounded-lg transition-colors duration-200 ${
                          location.pathname === link.to
                            ? "bg-[#023E8A] text-[#00B4D8]"
                            : "text-[#90E0EF] hover:bg-[#023E8A]/50 hover:text-[#CAF0F8]"
                        }`}
                      >
                        {link.text}
                        {location.pathname === link.to && (
                          <motion.div
                            className="w-1.5 h-1.5 rounded-full bg-[#00B4D8]"
                            layoutId="mobileActiveIndicator"
                          />
                        )}
                      </Link>
                    </motion.div>
                  ))}
                </div>
>>>>>>> fix-mobile-nav
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
